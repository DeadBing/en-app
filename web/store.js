import { createEmptyCard, fsrs, Rating } from 'ts-fsrs';
export { Rating };
export const STORAGE_KEY = 'readwell.v2';
export const LEGACY_KEY = 'readwell.v1';
export const DAY = 86400000;
export const dayKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const scheduler = fsrs({ request_retention: 0.9, maximum_interval: 365, enable_fuzz: false, learning_steps: ['10m'], relearning_steps: ['10m'] });
const empty = () => ({ version: 2, cards: {}, lessons: {}, readings: {}, grammarCards: {}, days: {}, custom: [], saved: [], notes: {}, readingNotes: {}, writingNotes: {}, studyLevel: 'all', session: null, dailyTarget: 10, newWordsPerDay: 5 });

export function loadState(storage = localStorage) {
  const current = storage.getItem(STORAGE_KEY);
  const raw = current || storage.getItem(LEGACY_KEY);
  if (!raw) return empty();
  const value = JSON.parse(raw);
  if (![1, 2].includes(value.version) || !value.cards || !value.days || !Array.isArray(value.custom) || !Array.isArray(value.saved)) throw new Error('Не удалось прочитать прогресс. Исходные данные не перезаписаны.');
  const result = { ...empty(), ...value, version: 2 };
  if (value.version === 1) {
    for (const card of Object.values(result.cards)) {
      card.tracks = {};
      card.legacy = true; // Keep old counters/due dates without inventing FSRS history.
    }
    if (result.session) {
      result.session.queue = result.session.queue.map(task => task.kind === 'word' ? { ...task, mode: 'context' } : task);
      result.session.readPassages = [];
      if (result.session.feedback) result.session.feedback.recorded = true;
    }
    storage.setItem(STORAGE_KEY, JSON.stringify(result)); // v1 remains as a migration backup.
  }
  return result;
}
export const normalize = value => value.normalize('NFKC').toLowerCase().replace(/[‘’]/g, "'").replace(/[‐‑–—]/g, '-').replace(/\bwon't\b/g, 'will not').replace(/\bcan't\b/g, 'can not').replace(/\bshan't\b/g, 'shall not').replace(/n't\b/g, ' not').replace(/\bcannot\b/g, 'can not').replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will').replace(/\bi'm\b/g, 'i am').replace(/\s+/g, ' ').trim().replace(/[.!?]+$/, '');
export const matches = (value, answer, alternatives = []) => [answer, ...alternatives].some(a => normalize(a) === normalize(value));
const time = value => new Date(value).getTime();
export const trackName = mode => mode === 'meaning' ? 'meaning' : 'recall';
export function trackDue(card, mode, now = Date.now()) {
  if (!card) return now;
  const name = trackName(mode);
  const track = card.tracks?.[name];
  if (track?.card) return time(track.card.due);
  const sibling = card.tracks?.[name === 'meaning' ? 'recall' : 'meaning'];
  if (sibling?.card?.last_review) {
    const date = new Date(sibling.card.last_review);
    date.setDate(date.getDate() + 1); date.setHours(0, 0, 0, 0);
    return date.getTime(); // Bury the other direction until the next local day.
  }
  return card.legacy ? card.due : now;
}
export function wordDue(card, mode = 'mixed', now = Date.now()) {
  return mode === 'mixed' ? Math.min(trackDue(card, 'meaning', now), trackDue(card, 'recall', now)) : trackDue(card, mode, now);
}
export function nextWordMode(card, now = Date.now()) {
  if (!card) return 'meaning';
  return trackDue(card, 'meaning', now) <= trackDue(card, 'recall', now) ? 'meaning' : 'recall';
}
export function recordActivity(state, correct, method = 'typed', now = Date.now()) {
  const day = state.days[dayKey(new Date(now))] ||= { attempts: 0, correct: 0, newWords: 0 };
  day.attempts++;
  if (correct) day.correct++;
  if (method === 'self') day.selfRated = (day.selfRated || 0) + 1;
}
function reviewTrack(track, rating, now, practice = false) {
  const previous = track.card;
  const early = previous && time(previous.due) > now;
  // Immediate correction and voluntary early practice are not delayed memory tests.
  if ((early || practice) && rating !== Rating.Again) return { due: previous ? time(previous.due) : now, practice: true };
  if (practice && previous) return { due: time(previous.due), practice: true };
  const result = scheduler.next(previous || createEmptyCard(new Date(now)), new Date(now), rating);
  track.card = result.card;
  track.failures = rating === Rating.Again ? (track.failures || 0) + 1 : 0;
  const today = dayKey(new Date(now));
  const delayed = previous?.last_review && dayKey(new Date(previous.last_review)) !== today;
  if (rating === Rating.Again) track.successDays = 0;
  else if (delayed && !early && track.lastSuccessDay !== today) {
    track.successDays = (track.successDays || 0) + 1;
    track.lastSuccessDay = today;
  }
  return { due: time(result.card.due), practice: false };
}
export function reviewWord(state, id, rating, mode = 'recall', now = Date.now(), practice = false) {
  if (![1, 2, 3, 4].includes(rating)) throw new Error('Unknown review rating');
  let card = state.cards[id];
  if (!card) {
    card = state.cards[id] = { streak: 0, attempts: 0, correct: 0, lapses: 0, tracks: {}, introducedAt: now };
    const day = state.days[dayKey(new Date(now))] ||= { attempts: 0, correct: 0, newWords: 0 };
    day.newWords = (day.newWords || 0) + 1;
  }
  card.tracks ||= {};
  const track = card.tracks[trackName(mode)] ||= { successDays: 0 };
  const schedule = reviewTrack(track, rating, now, practice);
  card.attempts++; card.lastReview = now;
  if (rating > Rating.Again) card.correct++; else card.lapses++;
  card.due = wordDue(card, 'mixed', now);
  return schedule;
}
export function reviewGrammar(state, task, correct, now = Date.now(), practice = false) {
  const track = state.grammarCards[`${task.id}:${task.index}`] ||= { successDays: 0 };
  return reviewTrack(track, correct ? Rating.Good : Rating.Again, now, practice);
}
export function ratingIntervals(state, id, mode, now = Date.now(), practice = false) {
  const card = state.cards[id]?.tracks?.[trackName(mode)]?.card;
  return [1, 2, 3, 4].map(rating => {
    const unchanged = !!(practice || card && time(card.due) > now && rating !== Rating.Again);
    return { rating, due: unchanged ? card ? time(card.due) : now : time(scheduler.next(card || createEmptyCard(new Date(now)), new Date(now), rating).card.due), practice: unchanged };
  });
}
export function intervalLabel(due, now = Date.now()) {
  const minutes = Math.max(1, Math.ceil((due - now) / 60000));
  if (minutes < 60) return `${minutes} мин`;
  if (minutes < 1440) return `${Math.ceil(minutes / 60)} ч`;
  return `${Math.round(minutes / 1440)} дн`;
}
export const knowsMeaning = card => (card?.tracks?.meaning?.successDays || 0) >= 3;
export const recallsWord = card => (card?.tracks?.recall?.successDays || 0) >= 3;
export const isRetained = card => knowsMeaning(card) && recallsWord(card);
export const needsWork = card => Object.values(card?.tracks || {}).some(t => (t.failures || 0) >= 3);
export function stats(state, words, now = Date.now()) {
  const valid = new Set(words.map(w => w.id));
  const cards = Object.entries(state.cards).filter(([id]) => valid.has(id)).map(([, card]) => card);
  return { learning: cards.filter(c => !isRetained(c)).length, retained: cards.filter(isRetained).length, meaning: cards.filter(knowsMeaning).length, recall: cards.filter(recallsWord).length, difficult: cards.filter(needsWork).length, due: cards.filter(c => wordDue(c, 'mixed', now) <= now).length, seen: cards.length, today: state.days[dayKey(new Date(now))]?.attempts || 0 };
}
export function chooseWords(state, words, count = 8, mode = 'mixed', now = Date.now(), freshLevel = 'all') {
  const due = words.filter(w => state.cards[w.id] && wordDue(state.cards[w.id], mode, now) <= now).sort((a, b) => wordDue(state.cards[a.id], mode, now) - wordDue(state.cards[b.id], mode, now));
  const newAllowance = Math.max(0, state.newWordsPerDay - (state.days[dayKey(new Date(now))]?.newWords || 0));
  const backlog = Object.values(state.cards).filter(c => wordDue(c, 'mixed', now) <= now).length;
  if (backlog >= 20 || !newAllowance) return due.slice(0, count);
  const fresh = words.filter(w => !state.cards[w.id] && (freshLevel === 'all' || w.level === freshLevel));
  const priority = fresh.filter(w => state.saved.includes(w.id));
  const buckets = {};
  for (const word of fresh) if (!state.saved.includes(word.id)) (buckets[word.topic] ||= []).push(word);
  const broad = [];
  for (let i = 0; i < Math.max(0, ...Object.values(buckets).map(b => b.length)); i++) for (const bucket of Object.values(buckets)) if (bucket[i]) broad.push(bucket[i]);
  return [...due, ...[...priority, ...broad].slice(0, newAllowance)].slice(0, count);
}
export function chooseGrammar(state, lessons, count = 4, now = Date.now(), freshLevel = 'all') {
  const due = [];
  const fresh = [];
  for (let index = 0; index < Math.max(...lessons.map(g => g.tasks.length)); index++) {
    for (const g of lessons) {
      if (!g.tasks[index]) continue;
      const task = { kind: 'grammar', id: g.id, index, key: `grammar:${g.id}:${index}` };
      const track = state.grammarCards[`${g.id}:${index}`];
      if (track?.card ? time(track.card.due) <= now : state.lessons[g.id]?.practiced) due.push(task);
    }
  }
  due.sort((a, b) => (time(state.grammarCards[`${a.id}:${a.index}`]?.card?.due) || 0) - (time(state.grammarCards[`${b.id}:${b.index}`]?.card?.due) || 0));
  const next = lessons.find(g => (freshLevel === 'all' || g.level === freshLevel) && !state.lessons[g.id]?.completed && g.tasks.some((_, i) => !state.grammarCards[`${g.id}:${i}`]));
  if (next) for (let index = 0; index < next.tasks.length; index++) if (!state.grammarCards[`${next.id}:${index}`] && !due.some(t => t.id === next.id && t.index === index)) fresh.push({ kind: 'grammar', id: next.id, index, key: `grammar:${next.id}:${index}` });
  return [...due, ...fresh].slice(0, count);
}

export function rememberWordReview(state, task, feedback, now) {
  const session = state.session, day = dayKey(new Date(now));
  // Snapshot only the mutation made by this review. Notes/settings edited while
  // paused are intentionally outside the undo operation.
  session.undo = JSON.parse(JSON.stringify({ index: session.index, key: task.key, id: task.id,
    day, dayBefore: state.days[day] ?? null, cardBefore: state.cards[task.id] ?? null,
    resultsLength: session.results.length, queueLength: session.queue.length, feedback: feedback ?? null }));
}
export function undoWordReview(state) {
  const session = state.session, undo = session?.undo;
  if (!undo || !session.feedback?.recorded || undo.index !== session.index || undo.key !== session.queue[session.index]?.key) return false;
  if (undo.cardBefore === null) delete state.cards[undo.id]; else state.cards[undo.id] = undo.cardBefore;
  if (undo.dayBefore === null) delete state.days[undo.day]; else state.days[undo.day] = undo.dayBefore;
  session.results.length = undo.resultsLength;
  session.queue.length = undo.queueLength;
  if (undo.feedback) session.feedback = undo.feedback; else delete session.feedback;
  delete session.undo;
  return true;
}
