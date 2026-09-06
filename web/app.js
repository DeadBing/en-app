import { transferTasks } from './transfer.js';
import { phraseFamilies } from './practical-vocabulary.js';
import { workshops, reviewWriting } from './workshops.js';
import { workshopView } from './workshop-ui.js';
import { chooseTransfer, reviewTransfer } from './store.js';
import { sentenceAnalysis, answerDiagnosis } from './learning.js';
import { engagement, awardXP, STREAK_TARGET } from './engagement.js';
import { topics, words as builtInWords } from './words.js';
import { grammar, readings } from './lessons.js';
import { wordContext, readingGists, grammarVariants } from './contexts.js';
import { STORAGE_KEY, dayKey, loadState, matches, recordActivity, reviewWord, stats, chooseWords, Rating, wordDue, nextWordMode, trackName, trackDue, knowsMeaning, recallsWord, isRetained, needsWork, ratingIntervals, intervalLabel, chooseGrammar, reviewGrammar, rememberWordReview, undoWordReview } from './store.js';

const app = document.querySelector('#app');
const dialog = document.querySelector('#dialog');
const e = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const paths = {
  flame: '<path d="M13 2c1 6-5 6-3 11-3-1-3-4-3-4-6 7-2 13 5 13 8 0 12-10 1-20Z"/><path d="M12 15c-4 4-1 7 2 5 2-2-2-3-2-5Z"/>',
  bolt: '<path d="m14 2-9 12h6l-1 8 9-12h-6z"/>',
  trophy: '<path d="M8 3h8v7a4 4 0 0 1-8 0zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 14v5m-5 2h10"/>',
  moon: '<path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  book: '<path d="M12 5v16M3 4c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  chart: '<path d="M4 3v18h17M8 16v-4m5 4V8m5 8V4"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H4m6-6-6 6 6 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  repeat: '<path d="M20 7H7a4 4 0 0 0-4 4m17-4-4-4m4 4-4 4M4 17h13a4 4 0 0 0 4-4M4 17l4 4m-4-4 4-4"/>',
  leaf: '<path d="M20 3C8 2 2 7 5 15c8 5 15-1 15-12ZM4 21 15 10"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  message: '<path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z"/><path d="M7 8h9M7 12h6"/>',
  hash: '<path d="M9 3 7 21M17 3l-2 18M3 8h18M2 16h18"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12l9 3 9-3M12 12v5"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
  heart: '<path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-9.3a5 5 0 0 0 0-7.1Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  wallet: '<path d="M20 8V4H5a2 2 0 0 0 0 4h16v13H5a2 2 0 0 1-2-2V6m18 6h-6v5h6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5z"/>',
  link: '<path d="m10 13 4-4m-5 7-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 0 2-2a4 4 0 1 1 6 6l-4 4a4 4 0 0 1-6 0"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  settings: '<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3"/><circle cx="15" cy="17" r="3"/>',
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.book}</svg>`;
const btn = (label, action, cls = 'primary', extra = '') => `<button type="button" class="btn ${cls}" data-action="${action}" ${extra}>${label}</button>`;
const navItems = [['today', 'home', 'Сегодня'], ['vocabulary', 'layers', 'Словарь'], ['grammar', 'book', 'Грамматика'], ['reading', 'compass', 'Чтение'], ['progress', 'chart', 'Прогресс']];
let state;
let page = 'today';
let selectedTopic = 'all';
let wordFilter = 'all';
let wordLevel = 'all';
let wordPage = 1;
const WORD_PAGE_SIZE = 48;
let query = '';
let readingFilter = 'all';
let grammarLevel = 'all';
let transferLevel = 'all';
let workshopId = null;
let practiceMode = 'mixed';
let feedback = null;
let summary = null;
let toastTimer;
let practiceSettingsOpen = false;
const allWords = () => [...builtInWords, ...state.custom];
const wordById = id => allWords().find(w => w.id === id);
const s = () => stats(state, allWords());
const getTopic = id => topics.find(t => t.id === id) || { name: 'Мои слова', color: 'sage', icon: 'bookmark' };

function toast(message) {
  const node = document.querySelector('#toast');
  node.textContent = message;
  node.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('visible'), 3500);
}
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { toast('Не удалось сохранить прогресс: проверьте свободное место. Не закрывайте приложение.'); }
}
function navigate(next) { page = next; summary = null; render(); window.scrollTo(0, 0); }
function nav() {
  return navItems.map(([id, glyph, label]) => `<button class="nav-item ${(page === id || page === 'writing' && id === 'reading') ? 'active' : ''}" data-action="nav" data-page="${id}" ${(page === id || page === 'writing' && id === 'reading') ? 'aria-current="page"' : ''}>${icon(glyph)}<span>${label}</span>${id === 'vocabulary' && s().due ? `<span class="nav-count">${s().due}</span>` : ''}</button>`).join('');
}
function header(kicker, title, description, aside = '') {
  return `<header class="page-header"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p class="muted">${description}</p></div>${aside}</header>`;
}
const plural = (n, one, few, many) => n % 100 >= 11 && n % 100 <= 14 ? many : n % 10 === 1 ? one : n % 10 >= 2 && n % 10 <= 4 ? few : many;
function buddy(cls = '') {
  return `<svg class="buddy ${cls}" viewBox="0 0 150 156" fill="none" aria-hidden="true"><path d="m38 93-19 9-8-9m103-4 18-14 8 6" stroke="var(--buddy-shadow)" stroke-width="9" stroke-linecap="round"/><path d="m58 130-5 14H39m51-14 5 14h14" stroke="var(--buddy-ink)" stroke-width="10" stroke-linecap="round"/><rect x="32" y="16" width="89" height="116" rx="17" fill="var(--buddy-shadow)"/><rect x="26" y="10" width="89" height="115" rx="17" fill="var(--accent)" stroke="var(--buddy-ink)" stroke-width="3"/><path d="M84 11v30l-11-7-11 7V11" fill="var(--gold)" stroke="var(--buddy-ink)" stroke-width="3"/><rect x="40" y="51" width="25" height="30" rx="12" fill="white"/><rect x="76" y="51" width="25" height="30" rx="12" fill="white"/><path d="M54 62v9m35-9v9" stroke="var(--buddy-ink)" stroke-width="7" stroke-linecap="round"/><path d="M61 91q10 13 21 0" stroke="var(--buddy-ink)" stroke-width="4" stroke-linecap="round"/><path d="m127 21 3-8 3 8 8 3-8 3-3 8-3-8-8-3z" fill="var(--gold)"/></svg>`;
}
function themeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  return `<button class="icon-button theme-toggle" data-action="toggle-theme" aria-label="Включить ${dark ? 'светлую' : 'тёмную'} тему">${icon(dark ? 'sun' : 'moon')}</button>`;
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0f1a24' : '#f6f9fc';
  try { localStorage.setItem('readwell.theme', theme); } catch { toast('Тема изменена, но её не удалось сохранить.'); }
  window.ReadwellTheme?.postMessage(theme);
  document.querySelectorAll('.theme-toggle').forEach(button => {
    button.setAttribute('aria-label', `Включить ${theme === 'dark' ? 'светлую' : 'тёмную'} тему`);
    button.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
  });
  document.querySelectorAll('[data-action="set-theme"]').forEach(button => {
    button.classList.toggle('selected', button.dataset.id === theme);
    button.setAttribute('aria-pressed', String(button.dataset.id === theme));
  });
}
function render() {
  practiceSettingsOpen = document.querySelector('.practice-settings')?.open ?? practiceSettingsOpen;
  const game = engagement(state);
  const focus = !!(state.session && page === 'session') || !!summary;
  app.classList.toggle('focus-mode', focus);
  app.innerHTML = `<aside class="sidebar"><button class="brand" data-action="nav" data-page="today"><span class="brand-mark">${icon('bookmark')}</span>readwell<span class="brand-dot">.</span></button><div class="sidebar-caption">АНГЛИЙСКИЙ СО СМЫСЛОМ</div><nav aria-label="Основная навигация">${nav()}</nav><div class="sidebar-note">${buddy()}<p>Одно занятие.<br><strong>Ближе к пониманию.</strong></p></div><button class="profile" data-action="settings"><span class="avatar">R</span><span>Твой английский<small>Учись в своём темпе</small></span>${icon('settings')}</button></aside>
    <div class="workspace"><header class="topbar"><button class="mobile-brand" data-action="nav" data-page="today">readwell<span>.</span></button><span class="topbar-label">Твой путь к английскому</span><div class="topbar-right"><button class="resource streak-resource" data-action="nav" data-page="progress" aria-label="Серия: ${game.streak} ${plural(game.streak,'день','дня','дней')}">${icon('flame')}<strong>${game.streak}</strong><span>${plural(game.streak,'день','дня','дней')}</span></button><button class="resource xp-resource" data-action="nav" data-page="progress" aria-label="${game.xp} XP за всё время">${icon('bolt')}<strong>${game.xp}</strong><span>XP</span></button>${themeButton()}<button class="icon-button" data-action="settings" aria-label="Настройки">${icon('settings')}</button></div></header><main id="main">${state.session && page === 'session' ? sessionView() : summary ? summaryView() : ({ today: todayView, vocabulary: vocabularyView, grammar: grammarView, reading: readingView, writing: () => workshopView(state, workshopId), progress: progressView }[page] || todayView)()}</main><footer class="desktop-footer"><span>READWELL · СЛОВА СТАНОВЯТСЯ СМЫСЛОМ</span><span>${icon('check')} Доступно без интернета</span></footer></div><nav class="bottom-nav" aria-label="Разделы">${nav()}</nav>`;
}

function todayView() {
  const counts = s(), game = engagement(state);
  const today = state.days[dayKey()] || {};
  const nextGrammar = grammar.find(g => g.id === chooseGrammar(state, grammar, 1, Date.now(), state.studyLevel)[0]?.id) || grammar[0];
  const nextReading = nextReadingForLevel();
  const steps = [
    ['daily', '', 'bolt', state.session ? 'Продолжим с того же места?' : 'Твоё занятие на сегодня', 'Слова + грамматика + чтение', '≈ 10 минут', counts.today >= state.dailyTarget, 'teal'],
    ['review', '', 'layers', counts.due ? 'Верни слова в память' : 'Пополни запас слов', counts.due ? `${counts.due} слов к повторению` : 'Общий и технический английский', 'B1–C1', !!today.kinds?.word, 'blue'],
    ['lesson', nextGrammar.id, 'book', nextGrammar.title, nextGrammar.subtitle, `${nextGrammar.tasks.length} задания`, !!today.kinds?.grammar, 'coral'],
    ['transfer', '', 'link', 'Примени без подсказки', 'Грамматика, смысл и стиль вперемешку', 'B2–C1', !!today.kinds?.transfer, 'blue'],
    ['workshop-list', '', 'message', 'Вырази свою мысль', 'Письмо, аргумент или сравнение источников', '8 ситуаций', false, 'teal'],
    ['read', nextReading.id, 'compass', 'Поймай смысл текста', nextReading.title, '≈ ' + nextReading.time + ' мин', !!today.kinds?.reading, 'gold'],
  ];
  return `<div class="home-layout"><div class="learning-route"><header class="route-heading"><div><span class="eyebrow">ТВОЙ УЧЕБНЫЙ МАРШРУТ</span><h1>Каждый день —<br><span>чуть увереннее.</span></h1><p>Понимай тексты. Находи нужные слова.</p></div>${buddy('hero-buddy')}</header><section class="unit-banner"><span class="unit-icon">${icon('globe')}</span><div><small>АНГЛИЙСКИЙ ДЛЯ РЕАЛЬНОЙ ЖИЗНИ</small><h2>От слова к пониманию</h2><span>Словарь B1–C1 · грамматика с основ</span></div></section><ol class="lesson-path">${steps.map(([action, id, glyph, title, description, meta, done, color], index) => `<li class="path-step ${color} ${index === 0 ? 'current' : ''}"><button class="path-node" data-action="${action}" data-id="${id}" aria-label="${e(title)}">${icon(glyph)}${done ? '<span class="node-check">' + icon('check') + '</span>' : ''}</button><div class="path-copy"><span class="path-meta">${index === 0 ? 'НАЧНИ ЗДЕСЬ' : 'ШАГ 0' + (index + 1)} · ${meta}</span><button class="path-title" data-action="${action}" data-id="${id}">${e(title)}</button><p>${e(description)}</p>${index === 0 ? btn(state.session ? 'Продолжить ' + icon('arrow') : 'Начать занятие ' + icon('arrow'), 'daily') : ''}</div></li>`).join('')}</ol><div class="route-end">${icon('compass')}<div><strong>Выбирай свой путь</strong><p>Все темы открыты. Загляни в словарь, чтобы выбрать B2, C1 или интересную тему.</p></div></div></div><aside class="daily-rail"><section class="panel streak-panel"><div class="section-top"><h2>Серия дней</h2><span class="badge coral">${game.best ? 'Рекорд: ' + game.best : 'Твой старт'}</span></div><div class="streak-total">${icon('flame')}<strong>${game.streak}</strong><span>${plural(game.streak,'день','дня','дней')}<br>подряд</span></div><p>${game.todayDone ? 'Сегодня в зачёте. Увидимся завтра!' : `Ещё ${game.remaining} ${plural(game.remaining,'ответ','ответа','ответов')}, чтобы ${game.streak ? 'продлить' : 'начать'} серию.`}</p><div class="week">${weekDots()}</div><small class="muted">5 проверенных ответов за день — один день серии.</small></section><section class="panel quests-panel"><div class="section-top"><h2>План на сегодня</h2>${icon('trophy')}</div>${[[counts.today, state.dailyTarget, 'Сделать маленький шаг', 'Проверенные ответы', 'bolt'], [today.kinds?.grammar || 0, 1, 'Разобраться в правиле', 'Хотя бы одно задание', 'book'], [today.kinds?.reading || 0, 1, 'Понять главную мысль', 'Ответить на вопрос к тексту', 'compass']].map(([n, target, title, sub, glyph]) => `<div class="quest ${n >= target ? 'complete' : ''}"><span class="quest-icon">${icon(n >= target ? 'check' : glyph)}</span><div><strong>${title}</strong><small>${sub}</small><div class="quest-meter"><div class="thin-track"><i style="width:${Math.min(100, n / target * 100)}%"></i></div><b>${Math.min(n, target)}/${target}</b></div></div></div>`).join('')}</section><section class="panel word-tip"><span class="badge blue">СНАЧАЛА ВСПОМНИ</span><h3>Пауза тоже помогает</h3><p>Попробуй найти ответ в памяти до того, как откроешь карточку. Сложные слова вернутся по расписанию.</p><button class="text-button" data-action="nav" data-page="vocabulary">Открыть словарь ${icon('arrow')}</button></section></aside></div>`;
}

function weekDots() {
  const current = new Date();
  const monday = new Date(current); monday.setDate(current.getDate() - (current.getDay() + 6) % 7);
  return ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((label, i) => {
    const date = new Date(monday); date.setDate(monday.getDate() + i);
    const key = dayKey(date), done = (state.days[key]?.attempts || 0) >= STREAK_TARGET;
    return `<span class="week-day ${done ? 'done' : ''} ${key === dayKey() ? 'today' : ''}" aria-label="${date.toLocaleDateString('ru')} · ${done ? 'день засчитан' : 'не засчитан'}"><span>${label}</span><i>${done ? icon('check') : '·'}</i></span>`;
  }).join('');
}

function vocabularyView() {
  const counts = s();
  return `${header('WORD BY WORD', 'Твой запас слов', `${allWords().length} слов и выражений · контекст вместо зубрёжки`, btn(`${icon('plus')} Своё слово`, 'add-word', 'outline'))}
    <div class="practice-entry"><div><h2>Знакомый глагол — разные смыслы</h2><p>12 семейств частых выражений: от run a test до get back to.</p></div>${btn('Разобрать выражения','phrase-families','outline')}</div><div class="vocab-toolbar"><label class="search">${icon('search')}<input id="word-search" type="search" autocomplete="off" placeholder="Найти слово или перевод" value="${e(query)}" aria-label="Поиск слова или перевода"></label><button type="button" class="btn primary" data-action="review">${icon('repeat')} Практиковать подборку</button></div>
    <div class="vocabulary-levels" role="group" aria-label="Уровень лексики">${[['all','Все уровни'],['B1','B1 · основа'],['B2','B2 · расширение'],['C1','C1 · сложные тексты']].map(([id,label]) => `<button type="button" data-action="word-level" data-id="${id}" class="filter ${wordLevel === id ? 'selected' : ''}" aria-pressed="${wordLevel === id}">${label}<small>${allWords().filter(w => id === 'all' || w.level === id).length}</small></button>`).join('')}</div><p class="content-note">Уровни — ориентир сложности слов и значений. Можно сразу выбрать B2 или C1. Практика учитывает всю подборку, дневной лимит новых слов и очередь повторений.</p>
    <details class="practice-settings" ${practiceSettingsOpen ? 'open' : ''}><summary>Настроить практику и выбрать тему</summary><div class="memory-modes" role="group" aria-label="Вид практики">${[['mixed','По расписанию'],['meaning','Понимать · EN → RU'],['recall','Вспоминать · RU → EN'],['context','Применять в контексте']].map(([id,label]) => `<button type="button" data-action="practice-mode" data-id="${id}" class="filter ${practiceMode === id ? 'selected' : ''}" aria-pressed="${practiceMode === id}">${label}</button>`).join('')}</div>
    <p class="memory-caption">Сначала вспомни, затем проверь. Сегодня новых слов: ${state.days[dayKey()]?.newWords || 0} / ${state.newWordsPerDay}.${counts.due >= 20 ? ' Новые слова на паузе, пока не сократим очередь повторений.' : ''}</p>
    <div class="filter-scroll" role="group" aria-label="Темы словаря"><button class="filter ${selectedTopic === 'all' ? 'selected' : ''}" data-action="filter-topic" data-id="all">Все темы</button>${topics.map(t => `<button class="filter ${selectedTopic === t.id ? 'selected' : ''}" data-action="filter-topic" data-id="${t.id}">${e(t.name)}</button>`).join('')}<button class="filter ${selectedTopic === 'custom' ? 'selected' : ''}" data-action="filter-topic" data-id="custom">Мои слова</button></div>
    <div class="subfilters" role="group" aria-label="Состояние изучения">${[['all', 'Все слова'], ['saved', 'Сохранённые'], ['due', 'К повторению'], ['learning', 'Учу'], ['retained', 'Закреплены'], ['difficult','Трудные']].map(([id, name]) => `<button class="text-filter ${wordFilter === id ? 'selected' : ''}" data-action="word-filter" data-id="${id}">${name}</button>`).join('')}</div>
    </details><div id="word-results">${wordResults()}</div>`;
}
function filteredWords() {
  return allWords().filter(w => {
    const card = state.cards[w.id];
    return (selectedTopic === 'all' || w.topic === selectedTopic) && (wordLevel === 'all' || w.level === wordLevel) && `${w.term} ${w.ru}`.toLowerCase().includes(query.toLowerCase().trim()) &&
      (wordFilter === 'all' || wordFilter === 'saved' && state.saved.includes(w.id) || wordFilter === 'due' && card && wordDue(card) <= Date.now() || wordFilter === 'learning' && card && !isRetained(card) || wordFilter === 'retained' && isRetained(card) || wordFilter === 'difficult' && needsWork(card));
  });
}
function wordResults() {
  const list = filteredWords();
  const pages = Math.max(1, Math.ceil(list.length / WORD_PAGE_SIZE));
  wordPage = Math.max(1, Math.min(wordPage, pages));
  const start = (wordPage - 1) * WORD_PAGE_SIZE;
  if (!list.length) return `<div class="empty-state">${icon('search')}<h3>Здесь пока нет слов</h3><p>Измени фильтр или добавь своё слово.</p>${btn('Сбросить фильтры', 'reset-filters', 'outline')}</div>`;
  return `<div class="results-meta"><span>${start + 1}–${Math.min(start + WORD_PAGE_SIZE, list.length)} из ${list.length} слов и выражений</span><span>Нажми на слово, чтобы увидеть контекст</span></div><div class="word-grid">${list.slice(start, start + WORD_PAGE_SIZE).map(w => {
    const card = state.cards[w.id]; const t = getTopic(w.topic);
    return `<button class="word-card" data-action="word" data-id="${e(w.id)}"><div><span class="badge ${t.color}">${e(w.level)}</span><span class="word-status">${state.saved.includes(w.id) ? icon('bookmark') : ''}${isRetained(card) ? 'Закреплено' : knowsMeaning(card) ? 'Понимаю' : recallsWord(card) ? 'Вспоминаю' : card ? 'В изучении' : 'Новое'}</span></div><h3 lang="en">${e(w.term)}</h3><p>${e(w.ru)}</p><div class="word-example" lang="en">${e(w.example)}</div><small>${e(t.name)}${needsWork(card) ? ' · стоит разобрать' : ''}</small></button>`;
  }).join('')}</div>${pages > 1 ? `<nav class="word-pagination" aria-label="Страницы словаря">${btn('← Назад', 'word-page', 'outline', `data-direction="-1" ${wordPage === 1 ? 'disabled' : ''}`)}<span aria-live="polite">${wordPage} / ${pages}</span>${btn('Дальше →', 'word-page', 'outline', `data-direction="1" ${wordPage === pages ? 'disabled' : ''}`)}</nav>` : ''}`;
}

function transferPanel() {
  const due = chooseTransfer(state,transferTasks,transferTasks.length,Date.now(),'all',true).length;
  return `<section class="practice-entry"><div><span class="eyebrow">72 НОВЫХ КОНТЕКСТА</span><h2>Знаешь правило — сможешь применить?</h2><p>8 заданий вперемешку. Название конструкции и объяснение появятся после ответа.</p><div class="filter-scroll" role="group" aria-label="Уровень новых смешанных заданий">${['all','B2','C1'].map(level=>`<button class="filter ${transferLevel===level?'selected':''}" data-action="transfer-level" data-id="${level}" aria-pressed="${transferLevel===level}">${level==='all'?'B2 + C1':level}</button>`).join('')}</div><p class="content-note">${due ? `${due} заданий к повторению. ` : ''}Выбор уровня влияет на новые задания. Плановые повторы любого уровня идут первыми; досрочная практика не увеличивает интервал. Это тренировка, не экзамен на уровень.</p></div>${btn('Начать смешанную практику','transfer','primary')}</section>`;
}
function showPhraseFamilies() {
  showDialog(`<span class="eyebrow">ЧАСТЫЕ СЛОВА В РАЗНЫХ РОЛЯХ</span><h2>Смысл живёт в выражении</h2><p>Нажми на выражение: два примера показывают, как оно работает. Эти карточки участвуют в обычных повторениях.</p><div class="phrase-families">${phraseFamilies.map(([root,...terms])=>`<section><h3 lang="en">${root}</h3>${terms.map(term=>{const w=builtInWords.find(w=>w.term===term);return `<button class="phrase-row" data-action="word" data-id="${e(w.id)}"><strong lang="en">${e(term)}</strong><span>${e(w.ru)}</span></button>`;}).join('')}</section>`).join('')}</div>`);
}
function grammarView() {
  const completed = grammar.filter(g => state.lessons[g.id]?.completed).length;
  const bands = { A1:'Надёжная основа', A2:'Связываем предложения', B1:'Понимаем сложные мысли', B2:'Объясняем и обсуждаем', C1:'Точность, подтекст и стиль' };
  return `${header('ОТ ОСНОВ К СЛОЖНЫМ МЫСЛЯМ', 'Разберёмся в грамматике', 'A1–C1: правила, применение и самостоятельные фразы. Все темы открыты.', `<span class="level-pill"><strong>${completed} / ${grammar.length}</strong> ТЕМ ПРОЙДЕНО</span>`)}
    ${transferPanel()}<div class="grammar-note">${icon('book')}<p><strong>От формы — к своей мысли.</strong> В B2–C1: пропуски, исправление ошибок, переформулирование и письменная практика.</p></div>
    <div class="filter-scroll" role="group" aria-label="Уровень грамматики">${['all',...Object.keys(bands)].map(level => `<button class="filter ${grammarLevel === level ? 'selected' : ''}" data-action="grammar-level" data-id="${level}" aria-pressed="${grammarLevel === level}">${level === 'all' ? 'Все уровни' : level}</button>`).join('')}</div>
    ${Object.entries(bands).filter(([level]) => grammarLevel === 'all' || grammarLevel === level).map(([level,title]) => `<section class="grammar-section"><div class="section-top"><h2><span class="level-badge">${level}</span> ${title}</h2><span class="small-label">${grammar.filter(g => g.level === level).length} ТЕМ</span></div><div class="lesson-list">${grammar.filter(g => g.level === level).map(g => {
      const progress = state.lessons[g.id];
      return `<button class="lesson-row" data-action="lesson" data-id="${g.id}"><span class="lesson-number ${progress?.completed ? 'complete' : ''}">${progress?.completed ? icon('check') : String(grammar.indexOf(g) + 1).padStart(2, '0')}</span><span class="lesson-title"><strong>${g.title}</strong><small>${g.subtitle}${g.writing ? ' · своя практика' : ''}</small></span><span class="lesson-state">${progress ? `${progress.best}/${g.tasks.length} верно` : `${g.tasks.length} задания`}</span>${icon('arrow')}</button>`;
    }).join('')}</div></section>`).join('')}`;
}

function readingView() {
  return `${header('READ BETWEEN THE LINES', 'Читай то, <em>что интересно.</em>', 'Посты, истории и документация. Выделенные выражения можно сохранить.')}<div class="practice-entry"><div><h2>От чтения к своему тексту</h2><p>Письма, предложения, аргументы и синтез двух источников.</p></div>${btn('Письменная мастерская','workshop-list','outline')}</div>
    <div class="filter-scroll" role="group" aria-label="Уровень чтения">${[['all', 'Все тексты'], ['B1', 'Уровень B1'], ['B2', 'Уровень B2'], ['C1', 'Уровень C1'], ['unread', 'Ещё не прочитано']].map(([id, name]) => `<button class="filter ${readingFilter === id ? 'selected' : ''}" data-action="reading-filter" data-id="${id}">${name}</button>`).join('')}</div>
    <div class="reading-grid">${readings.filter(r => readingFilter === 'all' || readingFilter === r.level || readingFilter === 'unread' && !state.readings[r.id]?.completed).map((r, i) => `<button class="reading-card" data-action="read" data-id="${r.id}"><div class="reading-cover ${r.color}"><span class="reading-type">${r.category.toUpperCase()}</span><div class="cover-type" aria-hidden="true">${{ Reddit: '“a hot take.”', 'Документация': '{ read: true }', 'X / тред': 'a thread ↗', 'Эссе': 'life, lately.', 'Рецензия': 'one more page.', 'Новости': 'the full story.', 'Повседневное': 'is it worth it?', 'История': 'somewhere new.' }[r.category]}</div><span class="cover-bottom">READWELL READING ROOM <span>0${readings.indexOf(r) + 1}</span></span></div><div class="reading-info"><div><span class="badge">${r.level}</span><span class="muted">${icon('clock')} ${r.time} мин ${state.readings[r.id]?.completed ? '· Прочитано ✓' : ''}</span></div><h3 lang="en">${r.title}</h3><p>${r.intro}</p><span class="text-link">Читать и разбираться ${icon('arrow')}</span></div></button>`).join('') || '<div class="empty-state"><h3>Все тексты пройдены</h3><p>Можно вернуться к любому тексту через «Все тексты».</p></div>'}</div><p class="content-note">Оригинальные учебные тексты в стиле этих форматов. Это не публикации реальных пользователей Reddit или X. Уровни материалов ориентировочные.</p>`;
}
function achievementsView() {
  const game = engagement(state), counts = s();
  const badges = [[game.days >= 1, 'flame', 'Первый шаг', 'Первый день серии'], [game.best >= 7, 'trophy', 'В своём ритме', '7 дней подряд'], [counts.seen >= 50, 'layers', 'Есть что сказать', '50 слов в практике'], [Object.values(state.readings).some(r => r.completed), 'compass', 'Между строк', 'Разобрать один текст'], [Object.values(state.lessons).filter(g => g.completed).length >= 4, 'book', 'Вижу логику', 'Пройти 4 темы грамматики'], [counts.retained >= 10, 'bookmark', 'Надолго в памяти', 'Закрепить 10 слов']];
  return `<div class="game-stats"><div class="panel"><span class="coral-text">${icon('flame')}</span><strong>${game.streak}</strong><span>${plural(game.streak,'день','дня','дней')} подряд</span></div><div class="panel"><span class="gold-text">${icon('trophy')}</span><strong>${game.best}</strong><span>лучшая серия</span></div><div class="panel"><span class="blue-text">${icon('bolt')}</span><strong>${game.xp}</strong><span>XP за всё время</span></div></div><p class="content-note">5 ответов за день поддерживают серию. XP: 10 за верный ответ, 5 за попытку с ошибкой; повтор того же задания и навыка в этот день не даёт новых XP. Пропуск дня не стирает знания.</p><section class="achievements"><div class="section-top"><h2>Твои достижения</h2><span class="badge gold">${badges.filter(b => b[0]).length} / ${badges.length}</span></div><div class="badge-grid">${badges.map(([earned, glyph, title, description]) => `<div class="achievement ${earned ? 'earned' : ''}"><span class="achievement-icon">${icon(glyph)}</span><strong>${title}</strong><small>${description}</small><span class="achievement-state">${earned ? 'Получено ' + icon('check') : 'Впереди'}</span></div>`).join('')}</div></section>`;
}

function progressView() {
  const counts = s(); const days = Object.values(state.days); const attempts = days.reduce((n, d) => n + d.attempts, 0); const correct = days.reduce((n, d) => n + d.correct, 0);
  return `${header('ТВОЯ ИСТОРИЯ', 'Каждый шаг считается', 'Серия и XP показывают регулярность. Навыки — то, что удаётся вспомнить спустя время.')}${achievementsView()}
    <div class="stats-grid memory-stats">${[[counts.seen, 'Слов в практике'], [counts.meaning, 'Понимаю значение'], [counts.recall, 'Вспоминаю выражение'], [counts.due, 'К повторению'], [grammar.filter(g => state.lessons[g.id]?.completed).length, 'Тем грамматики'], [readings.filter(r => state.readings[r.id]?.completed).length, 'Текстов разобрано'], [Object.keys(state.transferCards).length, 'Смешанных заданий в практике'], [Object.values(state.workshopDrafts).filter(d => d.text?.trim()).length, 'Письменных черновиков']].map(([n, l]) => `<div class="stat panel"><strong>${n}</strong><span>${l}</span></div>`).join('')}</div>
    <div class="progress-layout"><section class="panel activity-panel"><div class="section-top"><h2>Последние 7 дней</h2><span class="badge">${attempts} ответов всего</span></div><div class="activity-chart">${Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - 6 + i); const n = state.days[dayKey(d)]?.attempts || 0;
      return `<div><span>${n}</span><div class="bar-track"><i style="height:${Math.min(100, n / Math.max(state.dailyTarget, ...days.map(d => d.attempts), 1) * 100)}%"></i></div><small>${d.toLocaleDateString('ru', { weekday: 'short' })}</small></div>`;
    }).join('')}</div><p class="muted">${attempts ? `${Math.round(correct / attempts * 100)}% успешных ответов, включая самооценку карточек. Это история занятий, не оценка уровня языка.` : 'Пройди первое занятие — здесь появится твоя история.'}</p></section><section class="panel retention-panel">${icon('leaf')}<h2>Понимаю ≠ могу вспомнить</h2><p>Это два разных навыка с отдельным расписанием. Каждый показатель растёт после трёх успешных проверок спустя время, в разные дни. Понимание на карточках отмечаешь ты; воспроизведение проверяется по вводу.</p><p>Ответы сразу после знакомства, подсказки и досрочные повторы не подтверждают долговременную память. «Закреплено» — когда проверены оба навыка.</p><p>Трудные выражения возвращаются чаще. ${counts.difficult ? `Сейчас стоит отдельно разобрать: ${counts.difficult}.` : 'Если слово постоянно забывается, добавь личную ассоциацию.'}</p>${btn('К повторению ' + icon('arrow'), 'review', 'outline')}</section></div>
    <section><div class="section-top"><h2>Твой словарный горизонт</h2><span class="small-label">12 ТЕМ</span></div><div class="horizon-grid">${topics.map(t => {
      const topicWords = builtInWords.filter(w => w.topic === t.id); const total = topicWords.length; const n = topicWords.filter(w => isRetained(state.cards[w.id])).length;
      return `<button class="horizon" data-action="topic" data-id="${t.id}"><span>${icon(t.icon)}${t.name}<small>${n}/${total}</small></span><div class="thin-track"><i style="width:${n / total * 100}%"></i></div></button>`;
    }).join('')}</div></section><div class="quiet-note">${icon('leaf')}<span>Прогресс хранится на этом устройстве. Удаление приложения удалит и его данные.</span></div>`;
}

function showDialog(content) {
  dialog.innerHTML = `<button class="dialog-close icon-button" data-action="close-dialog" aria-label="Закрыть">${icon('close')}</button>${content}`;
  if (!dialog.open) dialog.showModal();
}
function showWord(id) {
  const w = wordById(id); if (!w) return;
  const card = state.cards[id]; const saved = state.saved.includes(id); const other = wordContext(w, 1);
  showDialog(`<span class="eyebrow">${e(getTopic(w.topic).name)} · ${e(w.level)}</span><h2 class="word-heading" lang="en">${e(w.term)}</h2><p class="word-translation">${e(w.ru)}</p><blockquote lang="en">${e(w.example)}</blockquote>${exampleTranslation(wordContext(w))}${breakdownView(wordContext(w),w)}${other.example !== w.example ? `<div class="second-context"><span class="eyebrow">ДРУГОЙ КОНТЕКСТ</span>${translatedExample(other)}${breakdownView(other,w)}</div>` : ''}<div class="word-memory">${[['meaning','Понимать'],['recall','Вспоминать']].map(([mode,label]) => `<div><strong>${label}</strong><span>${card?.tracks?.[mode]?.card ? `Следующий повтор: ${new Date(trackDue(card,mode)).toLocaleString('ru',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}` : 'Навык ещё не проверялся отдельно'}</span></div>`).join('')}</div>${needsWork(card) ? '<p class="memory-caption">Это выражение часто забывается. Придумай личный пример или ассоциацию перед следующим повторением.</p>' : ''}<form id="word-note-form" data-id="${e(id)}"><label for="word-note">Твоя ассоциация или свой пример</label><textarea id="word-note" name="note" rows="2" maxlength="600" placeholder="С чем у тебя связано это выражение?">${e(state.notes[id])}</textarea><button type="submit" class="text-button">Сохранить ассоциацию</button></form><div class="dialog-actions">${btn(`${icon(saved ? 'check' : 'bookmark')} ${saved ? 'Сохранено — убрать' : 'Сохранить в мой список'}`, 'save-word', saved ? 'outline' : 'primary', `data-id="${e(id)}"`)}${btn('Практика ' + icon('arrow'), 'single-word', 'outline', `data-id="${e(id)}"`)}</div><p class="content-note">Выбор отдельного слова запускает дополнительную практику, даже если дневной лимит новых слов исчерпан.</p>`);
}function writingView(g) {
  if (!g.writing) return '';
  return `<details class="writing-practice"><summary>Своими словами · письменная практика</summary><p>${e(g.writing.prompt)}</p><label for="writing-input">Твой текст на английском</label><textarea id="writing-input" data-id="${g.id}" rows="5" maxlength="3000" placeholder="Сначала сформулируй свою мысль…">${e(state.writingNotes[g.id])}</textarea><p class="content-note">Черновик сохраняется на устройстве. Свободный текст проверяешь по смыслу и списку ниже; он не начисляет XP или уровень.</p>${btn('Сравнить с образцом','compare-writing','outline full',`data-id="${g.id}"`)}<div id="writing-model" hidden><span class="eyebrow">ОДИН ИЗ ВОЗМОЖНЫХ ОТВЕТОВ</span><p lang="en">${e(g.writing.model)}</p><ul class="writing-checklist">${g.writing.checklist.map(item => `<li>${e(item)}</li>`).join('')}</ul><p class="content-note">Твои идеи и слова могут отличаться. Образец не оценивает автоматически правильность твоего текста.</p></div></details>`;
}
function showLesson(id) {
  const g = grammar.find(g => g.id === id); if (!g) return;
  showDialog(`<span class="eyebrow">ГРАММАТИКА · ${g.level}</span><h2>${g.title}</h2><p class="lesson-subtitle">${g.subtitle}</p><p class="rule">${g.rule}</p><div class="example-list">${g.examples.map(ex => `<p>${e(ex)}</p>`).join('')}</div>${btn(`Попробовать · ${g.tasks.length} задания ` + icon('arrow'), 'start-grammar', 'primary full', `data-id="${id}"`)}${writingView(g)}`);
}

function annotated(body) {
  return body.split('\n\n').map(p => `<p>${p.split(/(\[\[.*?\]\])/g).map(chunk => {
    if (!chunk.startsWith('[[')) return e(chunk);
    const term = chunk.slice(2, -2); const w = builtInWords.find(w => w.term.toLowerCase() === term.toLowerCase());
    return w ? `<button class="inline-word" data-action="gloss" data-id="${e(w.id)}">${e(term)}</button>` : e(term);
  }).join('')}</p>`).join('');
}
function showReading(id) {
  const r = readings.find(r => r.id === id); if (!r) return;
  showDialog(`<article class="reader"><span class="eyebrow">${e(r.category)} · ${r.level} · ${r.time} МИН</span><h2 lang="en">${r.title}</h2><div class="reader-author">${icon('book')} ${e(r.author)}</div><details id="reader-source" open><summary>Текст для чтения</summary><div class="reader-body" lang="en">${annotated(r.body)}</div></details><div id="glossary" class="glossary" aria-live="polite"><span>${icon('bookmark')} Нажми на выделенное выражение, чтобы увидеть перевод.</span></div><div class="retell-invitation"><h3>Поймай главную мысль</h3><p>После чтения закрой текст и перескажи суть в 1–2 предложениях. Можно на русском; если получается, попробуй на английском.</p>${btn('Скрыть текст и пересказать', 'retell', 'outline full')}</div><section id="retell-practice" hidden><label for="retell-input">Что автор хотел сказать?</label><textarea id="retell-input" data-id="${id}" rows="4" maxlength="2000" placeholder="Сформулируй мысль своими словами…">${e(state.readingNotes[id])}</textarea>${btn('Сравнить со смыслом текста', 'compare-gist', 'primary full', `data-id="${id}"`)}<div id="reading-gist" class="gist" hidden><span class="eyebrow">ОДИН ИЗ ВОЗМОЖНЫХ ПЕРЕСКАЗОВ</span><p lang="en">${e(readingGists[id] || r.gist)}</p><p class="muted">Сравни главную мысль и оговорки автора. Это ориентир для самопроверки, а не автоматическая оценка твоего английского.</p></div></section><p class="content-note">Оригинальный учебный текст · Readwell</p>${btn('Проверить понимание ' + icon('arrow'), 'start-reading', 'primary full', `data-id="${id}"`)}</article>`);
}function startSession(title, queue, origin = page) {
  if (!queue.length) { toast('Сейчас повторений нет или достигнут лимит новых слов. Можно почитать либо изменить лимит в настройках.'); return; }
  const begin = () => {
    state.session = { title, queue, index: 0, results: [], origin, learned: [], readPassages: [], started: Date.now() };
    feedback = null; summary = null; page = 'session'; dialog.close(); save(); render(); window.scrollTo(0, 0);
  };
  if (state.session) {
    showDialog(`<h2>Есть незавершённое занятие</h2><p>Можно продолжить его или начать новое. Уже проверенные ответы сохранены.</p>${btn('Продолжить', 'resume', 'primary full')}${btn('Начать новое', 'replace-session', 'outline full')}`);
    pendingStart = begin;
  } else begin();
}
let pendingStart = null;
function wordTasks(list, mode = practiceMode) {
  return list.map(w => ({ kind: 'word', id: w.id, mode: mode === 'mixed' ? nextWordMode(state.cards[w.id]) : mode, exampleIndex: (1 + (state.cards[w.id]?.attempts || 0)) % 2, key: `word:${w.id}` }));
}
function prepareGrammar(task) { return { ...task, variant: (state.grammarCards[`${task.id}:${task.index}`]?.card?.reps || 0) % 2 }; }
function grammarTasks(g) { return g.tasks.map((_, index) => prepareGrammar({ kind: 'grammar', id: g.id, index, key: `grammar:${g.id}:${index}` })); }
function readingTasks(r) { return r.questions.map((_, index) => ({ kind: 'reading', id: r.id, index, key: `reading:${r.id}:${index}` })); }
function nextReadingForLevel() {
  const list = readings.filter(r => state.studyLevel === 'all' || r.level === state.studyLevel);
  const pool = list.length ? list : readings;
  return pool.find(r => !state.readings[r.id]?.completed) || pool[new Date().getDate() % pool.length];
}
function daily() {
  if (state.session) { feedback = state.session.feedback || null; page = 'session'; summary = null; render(); return; }
  const r = nextReadingForLevel();
  startSession('Вспомнить · разобраться · прочитать', [...wordTasks(chooseWords(state, allWords(), 5, 'mixed', Date.now(), state.studyLevel), 'mixed'), ...chooseGrammar(state, grammar, 4, Date.now(), state.studyLevel).map(prepareGrammar), ...chooseTransfer(state,transferTasks,2,Date.now(),state.studyLevel,true), ...readingTasks(r)], 'today');
}
function wordExample(w, task) { return wordContext(w, task.exampleIndex).example; }
function exampleTranslation(context, cls = 'sentence-translation') {
  return `<p class="${cls}" lang="ru">${e(context.translation || 'Перевод этого примера ещё не добавлен.')}</p>`;
}
function translatedExample(context) {
  return `<p class="explained-example" lang="en">${e(context.example)}</p>${exampleTranslation(context)}`;
}
function breakdownView(context, word = null, question = null) {
  const notes = sentenceAnalysis(context.example, word, builtInWords);
  return `<details class="sentence-analysis"><summary>Разобрать предложение</summary>${question ? `<p class="analysis-rule">${e(question.why)}</p>` : ''}<dl>${notes.map(note => `<div><dt lang="en">${e(note.text)}</dt><dd>${e(note.explanation)}${note.lessonId ? btn('Открыть правило','lesson','text-button',`data-id="${note.lessonId}"`) : ''}</dd></div>`).join('')}</dl>${!notes.length && !question ? '<p>Для этого примера разбор конструкций ещё не подготовлен.</p>' : '<p class="content-note">Здесь разобраны найденные выражения и конструкции. Смысл остальных слов уточняй по полному переводу.</p>'}</details>`;
}
function cloze(w, task) {
  const escaped = w.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const example = wordExample(w, task);
  const pattern = new RegExp(escaped, 'i');
  return pattern.test(example) ? example.replace(pattern, '_____') : w.ru;
}
function questionFor(task) {
  if (task.kind === 'transfer') return transferTasks.find(q => q.id === task.id);
  if (task.kind === 'word') {
    const w = wordById(task.id);
    return { prompt: task.mode === 'context' ? cloze(w, task) : w.ru, answer: w.term, why: `${w.term} — ${w.ru}.`, alternatives: [], cue: task.mode === 'context' ? w.ru : 'Вспомни английское выражение из своего словаря.', w };
  }
  if (task.kind === 'grammar') {
    const q = grammar.find(g => g.id === task.id).tasks[task.index];
    const variant = task.variant && grammarVariants[task.id]?.[task.index];
    return variant ? { ...q, prompt: variant[0], answer: variant[1], alternatives: [], why: `Правильная форма: ${variant[1]}. ${grammar.find(g => g.id === task.id).rule}` } : q;
  }
  return readings.find(r => r.id === task.id).questions[task.index];
}
function ratingButtons(task, self = false) {
  const allowed = self ? [1, 2, 3, 4] : [2, 3, 4];
  return `<div class="rating-explanation">${self ? 'Оцени, вспомнил ли ты значение до открытия ответа.' : 'Ответ верный. Насколько легко получилось вспомнить?'}</div><div class="rating-buttons">${ratingIntervals(state, task.id, task.mode, Date.now(), !!task.retry).filter(p => allowed.includes(p.rating)).map(p => `<button type="button" class="rating rating-${p.rating}" data-action="rate-word" data-rating="${p.rating}"><strong>${['','Не вспомнил','С трудом','Вспомнил','Легко'][p.rating]}</strong><small>${p.practice ? 'практика' : intervalLabel(p.due)}</small></button>`).join('')}</div><p class="content-note">${self ? '«С трудом» — вспомнил сам, хотя и не сразу. Если не вспомнил, выбирай «Не вспомнил».' : 'Интервал зависит от истории именно этого навыка.'}</p>`;
}
function flashcardView(task, q) {
  const w = q.w, current = wordContext(w, task.exampleIndex), other = wordContext(w, task.exampleIndex ? 0 : 1);
  return `<div class="flashcard"><span class="badge sage">EN → смысл · ${e(getTopic(w.topic).name)}</span><h1 lang="en">${e(w.term)}</h1><p class="flash-context" lang="en">${e(current.example)}</p>${!task.revealed ? `<p class="muted">Сформулируй значение в голове или своими словами. Затем открой ответ.</p>${btn('Показать ответ', 'reveal-card', 'primary full')}` : `<div class="flash-answer"><h2>${e(w.ru)}</h2><div class="sentence-explanation"><span class="eyebrow">ПЕРЕВОД ПРЕДЛОЖЕНИЯ</span>${exampleTranslation(current)}</div>${breakdownView(current,w)}${other.example !== current.example ? `<details><summary>Другой пример</summary><p lang="en">${e(other.example)}</p>${exampleTranslation(other, 'other-translation')}</details>` : ''}${state.notes[w.id] ? `<div class="personal-cue">Твоя ассоциация: ${e(state.notes[w.id])}</div>` : ''}</div>${feedback?.recorded ? feedbackView(task,q) : ratingButtons(task,true)}`}</div>`;
}
function feedbackView(task, q) {
  const session = state.session;
  return `<div class="answer-feedback ${feedback.correct ? 'correct' : 'incorrect'}" role="status"><strong>${icon(feedback.correct ? 'check' : 'book')}${feedback.self ? feedback.correct ? 'По твоей оценке — вспомнил' : 'Отправлено на повторение' : feedback.assisted && feedback.matched ? 'Верно, с опорой на подсказку' : feedback.correct ? 'Верно — смысл на месте' : feedback.hint ? 'Разберём и повторим' : 'Давай разберём ответ'}</strong>${feedback.xp ? `<span class="xp-earned">+${feedback.xp} XP</span>` : ''}${!feedback.correct ? `<div class="correct-answer">${e(q.options ? q.options[q.answer] : q.answer)}</div>` : ''}${feedback.diagnosis ? `<div class="answer-diagnosis"><b>${e(feedback.diagnosis.title)}</b><p>${e(feedback.diagnosis.text)}</p></div>` : `<p>${e(q.why)}</p>`}${task.kind === 'word' && task.mode !== 'meaning' ? `<div class="sentence-explanation"><span class="eyebrow">${task.mode === 'context' ? 'ПРЕДЛОЖЕНИЕ ЦЕЛИКОМ' : 'ПРИМЕР В КОНТЕКСТЕ'}</span>${translatedExample(wordContext(q.w, task.exampleIndex))}</div>${breakdownView(wordContext(q.w, task.exampleIndex),q.w)}` : ''}${['grammar','transfer'].includes(task.kind) && q.sentence ? `<div class="sentence-explanation"><span class="eyebrow">${e(q.skill || 'ПОЛНОЕ ПРЕДЛОЖЕНИЕ')}</span>${translatedExample({example:q.sentence,translation:q.translation})}</div>${breakdownView({example:q.sentence},null,q)}` : ''}${task.kind === 'word' && state.notes[task.id] ? `<p>Твоя ассоциация: ${e(state.notes[task.id])}</p>` : ''}${feedback.recorded && feedback.schedule ? `<p>${feedback.schedule.practice ? 'Это дополнительная практика. Расписание не изменилось.' : `Следующая проверка этого навыка: через ${intervalLabel(feedback.schedule.due)}.`}</p>` : ''}${feedback.recorded && session.undo ? `<div class="undo-review">${btn('Отменить оценку','undo-rating','outline full')}<small>До перехода дальше можно выбрать другую оценку.</small></div>` : ''}</div>${!feedback.recorded && task.kind === 'word' ? ratingButtons(task) : btn(session.index === session.queue.length - 1 ? 'Завершить занятие ' + icon('check') : 'Дальше ' + icon('arrow'), 'next', 'primary full')}`;
}
function sessionView() {
  const session = state.session; const task = session.queue[session.index]; const q = questionFor(task);
  const fresh = task.kind === 'word' && !state.cards[task.id] && !session.learned.includes(task.id);
  const g = task.kind === 'grammar' ? grammar.find(g => g.id === task.id) : null;
  const r = task.kind === 'reading' ? readings.find(r => r.id === task.id) : null;
  const firstRead = r && !(session.readPassages || []).includes(r.id);
  const frame = content => `<div class="session"><div class="session-top"><button class="icon-button" data-action="pause" aria-label="Сохранить и выйти из занятия">${icon('close')}</button><span>${e(session.title)}</span><strong>${session.index + 1} / ${session.queue.length}</strong>${themeButton()}</div><div class="session-track"><i style="width:${session.index / session.queue.length * 100}%"></i></div><div class="session-content"><div class="eyebrow">${task.retry ? 'ЕЩЁ РАЗ · БЕЗ УВЕЛИЧЕНИЯ ИНТЕРВАЛА' : fresh ? 'ПОЗНАКОМЬСЯ С ВЫРАЖЕНИЕМ' : { word: task.mode === 'meaning' ? 'ПОНИМАНИЕ · КАРТОЧКА СО СКРЫТЫМ ОТВЕТОМ' : task.mode === 'context' ? 'ПРИМЕНИ В КОНТЕКСТЕ' : 'ВСПОМНИ БЕЗ АНГЛИЙСКОГО ПРИМЕРА', grammar: `ГРАММАТИКА · ${g?.level}`, reading: `ПОНИМАНИЕ ТЕКСТА · ${r?.level}`, transfer: `СМЕШАННАЯ ПРАКТИКА · ${q.level}` }[task.kind]}</div>${content}</div><p class="session-foot">${icon('leaf')} ${fresh ? 'Сначала знакомство. Проверка вернётся после других заданий.' : 'Попытка вспомнить важнее скорости ответа.'}</p></div>`;
  if (fresh) return frame(`<div class="learn-word"><span class="badge sage">${e(q.w.level)}</span><h1 lang="en">${e(q.w.term)}</h1><p>${e(q.w.ru)}</p><blockquote lang="en">${e(q.w.example)}</blockquote><p class="muted">${e(q.w.translation)}</p>${btn('Запомнить и продолжить ' + icon('arrow'), 'learned', 'primary full')}</div>`);
  if (firstRead) return frame(`<h2 lang="en">${e(r.title)}</h2><p class="memory-caption">Прочитай ради смысла. Затем попробуй ответить, не подглядывая.</p><div class="reader-body" lang="en">${annotated(r.body)}</div><div id="glossary" class="glossary" aria-live="polite"></div>${btn('Прочитал · проверить понимание', 'read-passage', 'primary full')}`);
  if (task.kind === 'word' && task.mode === 'meaning') return frame(flashcardView(task,q));
  return frame(`<h2>${task.kind === 'transfer' ? 'Выбери форму и передай смысл' : g ? e(g.title) : r ? e(r.title) : task.mode === 'context' ? 'Какое выражение здесь подходит?' : 'Как сказать это по-английски?'}</h2>
    ${g ? `<details class="rule-details" data-help="true"><summary>Подсказка: правило и примеры</summary><p>${g.rule}</p>${g.examples.map(ex => `<p>${e(ex)}</p>`).join('')}</details>` : ''}
    ${r ? `<details class="reading-details" data-help="true"><summary>Заглянуть в текст</summary><div class="reader-body" lang="en">${annotated(r.body)}</div><div id="glossary" class="glossary" aria-live="polite"></div></details>` : ''}
    <div class="question-prompt ${r ? 'comprehension' : ''}" lang="${r || task.mode === 'recall' ? 'ru' : 'en'}">${e(q.prompt)}</div>${q.cue ? `<p class="question-cue">${e(q.cue)}</p>` : ''}
    ${task.kind === 'word' && task.mode === 'recall' && !feedback ? task.assisted ? `<blockquote lang="en">${e(cloze(q.w,task))}</blockquote>` : btn('Подсказка: предложение', 'context-hint', 'text-button') : ''}
    ${task.assisted && !feedback ? '<p class="memory-caption">Ответ с опорой на материал будет отмечен как практика с подсказкой.</p>' : ''}
    <form id="answer-form">${q.options ? `<fieldset class="answer-options"><legend class="sr-only">Выбери ответ</legend>${q.options.map((opt, i) => `<label class="answer-option"><input type="radio" name="choice" value="${i}" ${feedback ? 'disabled' : ''} ${(feedback?.value ?? task.draft) === String(i) ? 'checked' : ''} required><span>${e(opt)}</span></label>`).join('')}</fieldset>` : `<label class="answer-label" for="answer-input">Твой ответ на английском</label>${['grammar','transfer'].includes(task.kind) && q.answer.includes(' ') ? `<textarea id="answer-input" class="answer-input" name="answer" rows="3" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Введи ответ на английском…" ${feedback ? 'disabled' : ''} required maxlength="400">${e(feedback?.value ?? task.draft ?? '')}</textarea>` : `<input id="answer-input" class="answer-input" name="answer" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Введи слово или выражение…" ${feedback ? 'disabled' : ''} value="${e(feedback?.value ?? task.draft ?? '')}" required maxlength="400">`}`}
    ${feedback ? feedbackView(task,q) : `<div class="answer-actions"><button type="submit" class="btn primary">Проверить ${icon('arrow')}</button>${btn('Не помню', 'hint', 'text-button')}</div>`}</form>`);
}
function checkAnswer(value, hint = false) {
  if (feedback || !state.session) return;
  const task = state.session.queue[state.session.index]; const q = questionFor(task);
  task.assisted ||= !!document.querySelector('details[data-help][open]');
  const matched = !hint && (q.options ? Number(value) === q.answer : matches(value, q.answer, q.alternatives));
  feedback = { value, correct: matched && !task.assisted, matched, hint, assisted: !!task.assisted, recorded: false, diagnosis: !matched && !hint ? answerDiagnosis(value,q,task.kind,allWords()) : null };
  if (task.kind === 'word' && feedback.correct) { state.session.feedback = feedback; save(); render(); }
  else commitAnswer(feedback.correct ? Rating.Good : Rating.Again);
}
function commitAnswer(rating) {
  const session = state.session; if (!session || feedback?.recorded) return;
  const task = session.queue[session.index];
  const self = task.kind === 'word' && task.mode === 'meaning';
  if (self && !task.revealed) return;
  if (task.assisted || feedback?.hint) rating = Rating.Again;
  const correct = rating > Rating.Again;
  const now = Date.now();
  if (task.kind === 'word' && (self || feedback?.correct)) rememberWordReview(state,task,feedback,now);
  feedback = { ...(feedback || {}), correct, self, recorded: true, assisted: !!task.assisted };
  if (task.kind === 'word') feedback.schedule = reviewWord(state,task.id,rating,task.mode,now,!!task.retry);
  if (task.kind === 'grammar') {
    feedback.schedule = reviewGrammar(state,task,correct,now,!!task.retry);
    if (!task.retry) state.grammarCards[`${task.id}:${task.index}`].lastCorrect = correct;
  }
  if (task.kind === 'transfer') feedback.schedule = reviewTransfer(state,task,correct,now,!!task.retry);
  recordActivity(state,correct,self ? 'self' : 'typed',now);
  feedback.xp = awardXP(state, task, correct,now);
  session.results.push({ key:task.key, kind:task.kind, id:task.id, correct, retry:!!task.retry, mode:task.mode, self, xp:feedback.xp, assisted:!!task.assisted });
  if (!correct && !task.retry) session.queue.push({ ...task, retry:true, assisted:false, revealed:false, draft:'' });
  session.feedback = feedback;
  updateCompletions(session); save(); render();
  document.querySelector('.answer-feedback')?.scrollIntoView({ behavior:'smooth', block:'nearest' });
}
function updateCompletions(session) {
  for (const g of grammar) {
    if (!session.results.some(r => r.kind === 'grammar' && r.id === g.id)) continue;
    const correct = g.tasks.filter((_,i) => state.grammarCards[`${g.id}:${i}`]?.lastCorrect).length;
    const best = Math.max(state.lessons[g.id]?.best || 0,correct);
    state.lessons[g.id] = { best, completed:best === g.tasks.length, practiced:true };
  }
  for (const r of readings) {
    const results = session.results.filter(t => t.kind === 'reading' && t.id === r.id && !t.retry);
    if (results.length !== r.questions.length) continue;
    const best = Math.max(state.readings[r.id]?.best || 0,results.filter(t=>t.correct).length);
    state.readings[r.id] = { best, completed:best === r.questions.length, practiced:true };
  }
}
function nextQuestion() {
  const session = state.session; if (!feedback?.recorded || !session) return;
  session.index++; feedback = null; delete session.feedback; delete session.undo;
  if (session.index >= session.queue.length) { summary = { ...session }; state.session = null; page = session.origin === 'session' ? 'today' : session.origin; }
  save(); render(); window.scrollTo(0,0);
}
function summaryView() {
  const first = summary.results.filter(r => !r.retry), correct = first.filter(r => r.correct).length;
  const errors = first.filter(r => !r.correct), selfRated = first.filter(r => r.self).length;
  const xp = summary.results.reduce((n, r) => n + (r.xp || 0), 0), game = engagement(state);
  return `<section class="summary">${buddy('summary-buddy')}<div class="eyebrow">ЗАНЯТИЕ ЗАВЕРШЕНО</div><h1>Ещё один шаг вперёд!</h1><p>${correct} из ${first.length} ответов с первой попытки.${selfRated ? ' Карточек с самооценкой: ' + selfRated + '.' : ''} ${errors.length ? 'Сложные места уже вернулись в практику.' : 'Можно дать знаниям уложиться.'}</p><div class="summary-stats"><div class="xp-summary">${icon('bolt')}<strong>+${xp}</strong><span>XP за занятие</span></div><div class="streak-summary">${icon('flame')}<strong>${game.streak}</strong><span>${plural(game.streak,'день','дня','дней')} подряд</span></div><div>${icon('check')}<strong>${first.length}</strong><span>заданий разобрано</span></div></div><div class="summary-streak">${game.todayDone ? 'Сегодняшний день серии засчитан!' : 'Ещё ' + game.remaining + ' ' + plural(game.remaining,'ответ','ответа','ответов') + ' до дня серии.'}<div class="week">${weekDots()}</div></div>${errors.length ? `<div class="summary-review"><h3>К чему вернуться</h3>${[...new Set(errors.map(r => r.kind === 'word' ? wordById(r.id).term : r.kind === 'transfer' ? transferTasks.find(q => q.id === r.id).skill : r.kind === 'grammar' ? grammar.find(g => g.id === r.id).subtitle : readings.find(t => t.id === r.id).title))].map(title => '<p>' + e(title) + '</p>').join('')}</div>` : ''}<div class="dialog-actions">${btn('Вернуться на маршрут ' + icon('arrow'), 'nav', 'primary', 'data-page="today"')}${btn('Посмотреть прогресс', 'nav', 'outline', 'data-page="progress"')}</div><p class="content-note">XP отмечают практику. Закрепление слов проверяется повторениями спустя время.</p></section>`;
}

function addWord() {
  showDialog(`<span class="eyebrow">ИЗ ТВОЕГО МИРА</span><h2>Слово, которое встретилось</h2><p class="muted">Сохрани выражение вместе с примером из текста.</p><form id="custom-form"><label>Слово или выражение<input name="term" required maxlength="80" placeholder="e.g. make a difference" autocomplete="off"></label><label>Значение на русском<input name="ru" required maxlength="160" placeholder="иметь значение, влиять" autocomplete="off"></label><label>Пример на английском<textarea name="example" required maxlength="600" rows="3" placeholder="Small changes can make a difference."></textarea></label><label>Перевод примера <span class="muted">· необязательно</span><textarea name="translation" maxlength="600" rows="2"></textarea></label><button class="btn primary full" type="submit">${icon('plus')} Добавить в практику</button></form>`);
}
function settings() {
  showDialog(`<span class="eyebrow">В СВОЁМ ТЕМПЕ</span><h2>Твой английский</h2><div class="theme-picker" role="group" aria-label="Тема оформления">${[['light','sun','Светлая'],['dark','moon','Тёмная']].map(([id,glyph,label]) => `<button class="theme-choice ${document.documentElement.dataset.theme === id ? 'selected' : ''}" data-action="set-theme" data-id="${id}" aria-pressed="${document.documentElement.dataset.theme === id}">${icon(glyph)}${label}</button>`).join('')}</div><p>Словарь: B1–C1. Грамматика: A1 → C1. Все темы открыты.</p><label class="setting-label" for="study-level">Уровень новых материалов в ежедневном занятии</label><select id="study-level">${['all','B2','C1'].map(level => `<option value="${level}" ${state.studyLevel === level ? 'selected' : ''}>${level === 'all' ? 'По порядку, с основ' : level}</option>`).join('')}</select><p class="content-note">Выбор влияет на новые слова, грамматику и чтение. Уже изученные материалы любого уровня продолжают возвращаться по расписанию. Метка C1 обозначает материал, а не присвоенный тебе уровень.</p><label class="setting-label" for="daily-target">Цель на день — проверенные ответы</label><select id="daily-target">${[5,10,15,20].map(n => `<option value="${n}" ${state.dailyTarget === n ? 'selected' : ''}>${n} заданий</option>`).join('')}</select><label class="setting-label" for="new-word-limit">Новых слов в день</label><select id="new-word-limit">${[0,3,5,10].map(n => `<option value="${n}" ${state.newWordsPerDay === n ? 'selected' : ''}>${n === 0 ? 'Только повторение' : n + ' слов'}</option>`).join('')}</select><p class="content-note">При очереди от 20 слов новые временно не добавляются. Пропущенный день не обнуляет прогресс. Сначала разбираем то, что уже учили.</p><div class="settings-note">${icon('leaf')}<p>FSRS подбирает интервалы отдельно для понимания и воспроизведения, ориентируясь на твои ответы. Цель модели — около 90% успешных повторений; это настройка, а не гарантия результата.</p></div><p class="content-note">Readwell 0.6.0 · Всё работает без интернета. Прогресс и свои слова сохраняются на устройстве. Старые данные перенесены; новые показатели навыков начнут заполняться после раздельных проверок. Удаление данных приложения удалит прогресс.</p>${btn('Готово','close-dialog','primary full')}`);
}document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]'); if (!button) return;
  const { action, id } = button.dataset;
  if (action === 'nav') { dialog.close(); navigate(button.dataset.page); }
  else if (action === 'close-dialog') dialog.close();
  else if (action === 'settings') settings();
  else if (action === 'toggle-theme') applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  else if (action === 'set-theme') applyTheme(id);
  else if (action === 'daily') daily();
  else if (action === 'review') {
    const list = page === 'vocabulary' ? filteredWords() : allWords();
    startSession(page === 'vocabulary' && wordLevel !== 'all' ? `Лексика ${wordLevel} · выбранная подборка` : 'Практика слов · в своём темпе',wordTasks(chooseWords(state,list,12,practiceMode)));
  }
  else if (action === 'practice-mode') { practiceMode = id; render(); }
  else if (action === 'word') showWord(id);
  else if (action === 'save-word') {
    state.saved = state.saved.includes(id) ? state.saved.filter(w => w !== id) : [...state.saved, id]; save(); render(); showWord(id);
  }
  else if (action === 'single-word') startSession('Одно полезное выражение', wordTasks([wordById(id)]), page === 'session' ? 'vocabulary' : page);
  else if (action === 'topic') { selectedTopic = id; wordFilter = 'all'; wordLevel = 'all'; wordPage = 1; query = ''; navigate('vocabulary'); }
  else if (action === 'filter-topic') { selectedTopic = id; wordPage = 1; render(); }
  else if (action === 'word-filter') { wordFilter = id; wordPage = 1; render(); }
  else if (action === 'word-level') { wordLevel = id; wordPage = 1; render(); }
  else if (action === 'word-page') { wordPage += Number(button.dataset.direction); document.querySelector('#word-results').innerHTML = wordResults(); document.querySelector('#word-results').scrollIntoView({block:'start'}); }
  else if (action === 'reset-filters') { selectedTopic = 'all'; wordFilter = 'all'; wordLevel = 'all'; wordPage = 1; query = ''; render(); }
  else if (action === 'lesson') showLesson(id);
  else if (action === 'transfer-level') { transferLevel = id; render(); }
  else if (action === 'transfer') startSession('Применяем без названия правила',chooseTransfer(state,transferTasks,8,Date.now(),transferLevel));
  else if (action === 'phrase-families') showPhraseFamilies();
  else if (action === 'workshop-list') { dialog.close(); workshopId = null; navigate('writing'); }
  else if (action === 'workshop') { workshopId = id; navigate('writing'); }
  else if (action === 'grammar-level') { grammarLevel = id; render(); }
  else if (action === 'compare-writing') {
    const input = document.querySelector('#writing-input');
    if (!input.value.trim()) { toast('Сначала попробуй написать свой ответ.'); input.focus(); return; }
    state.writingNotes[id] = input.value; save(); document.querySelector('#writing-model').hidden = false;
  }
  else if (action === 'start-grammar') startSession(grammar.find(g => g.id === id).subtitle, grammarTasks(grammar.find(g => g.id === id)), 'grammar');
  else if (action === 'read') showReading(id);
  else if (action === 'reading-filter') { readingFilter = id; render(); }
  else if (action === 'start-reading') startSession('Читаем и понимаем', readingTasks(readings.find(r => r.id === id)), 'reading');
  else if (action === 'gloss') {
    const w = wordById(id); const node = document.querySelector('#glossary');
    if (node) node.innerHTML = `<strong>${e(w.term)}</strong><span>${e(w.ru)}</span>${btn(state.saved.includes(id) ? 'Сохранено ✓' : '+ В мой словарь', 'save-gloss', 'text-button', `data-id="${e(id)}"`)}`;
  }
  else if (action === 'save-gloss') { if (!state.saved.includes(id)) state.saved.push(id); save(); button.textContent = 'Сохранено ✓'; toast('Выражение сохранено и получит приоритет в новых словах.'); }
  else if (action === 'add-word') addWord();
  else if (action === 'learned') {
    const session = state.session;
    const [task] = session.queue.splice(session.index,1);
    session.learned.push(task.id);
    session.queue.splice(Math.min(session.index + 3,session.queue.length),0,task);
    save(); render(); window.scrollTo(0,0);
  }
  else if (action === 'reveal-card') { state.session.queue[state.session.index].revealed = true; save(); render(); }
  else if (action === 'rate-word') commitAnswer(Number(button.dataset.rating));
  else if (action === 'undo-rating') {
    if (undoWordReview(state)) { feedback = state.session.feedback || null; save(); render(); toast('Оценка отменена. Интервал, XP и попытка восстановлены.'); }
  }
  else if (action === 'context-hint') { state.session.queue[state.session.index].assisted = true; save(); render(); }
  else if (action === 'read-passage') { (state.session.readPassages ||= []).push(state.session.queue[state.session.index].id); save(); render(); window.scrollTo(0,0); }
  else if (action === 'retell') {
    document.querySelector('#reader-source').open = false;
    document.querySelector('#retell-practice').hidden = false;
    document.querySelector('#retell-input').focus();
  }
  else if (action === 'compare-gist') {
    document.querySelector('#reading-gist').hidden = false;
    state.readingNotes[id] = document.querySelector('#retell-input').value.trim(); save();
  }
  else if (action === 'hint') checkAnswer(document.querySelector('#answer-input')?.value || '', true);
  else if (action === 'next') nextQuestion();
  else if (action === 'pause') { save(); navigate('today'); toast('Занятие сохранено. Продолжай, когда удобно.'); }
  else if (action === 'resume') { dialog.close(); page = 'session'; feedback = state.session.feedback || null; summary = null; render(); }
  else if (action === 'replace-session') { pendingStart?.(); pendingStart = null; }
});
document.addEventListener('input', event => {
  const input = event.target;
  if (input.dataset.workshop && (input.id === 'workshop-text' || input.dataset.outline !== undefined)) {
    const draft = state.workshopDrafts[input.dataset.workshop] ||= {};
    if (input.id === 'workshop-text') {
      draft.text = input.value; draft.checks = [];
      document.querySelector('#workshop-review').hidden = true;
      document.querySelector('#workshop-review').innerHTML = '';
      document.querySelector('#workshop-stale').hidden = !draft.reviewedText;
      const task = workshops.find(w=>w.id===input.dataset.workshop);
      document.querySelector('#workshop-count').textContent = `${reviewWriting(input.value,task).words} английских слов · ориентир ${task.min}–${task.max}. Черновик сохраняется при вводе.`;
    } else (draft.plan ||= [])[Number(input.dataset.outline)] = input.value;
    save();
  }
  if (event.target.id === 'word-search') { query = event.target.value; wordPage = 1; document.querySelector('#word-results').innerHTML = wordResults(); }
  if (event.target.id === 'answer-input' && state.session) { state.session.queue[state.session.index].draft = event.target.value; save(); }
  if (event.target.id === 'writing-input') { state.writingNotes[event.target.dataset.id] = event.target.value; save(); }
  if (event.target.id === 'retell-input') { state.readingNotes[event.target.dataset.id] = event.target.value; save(); }
});
document.addEventListener('toggle', event => {
  if (event.target.matches?.('details[data-help]') && event.target.open && state.session && !feedback) {
    state.session.queue[state.session.index].assisted = true; save();
  }
},true);
document.addEventListener('change', event => {
  if (event.target.dataset.workshopCheck !== undefined) {
    const draft = state.workshopDrafts[event.target.dataset.workshop];
    if (draft?.text === draft?.reviewedText) { (draft.checks ||= [])[Number(event.target.dataset.workshopCheck)] = event.target.checked; save(); }
  }
  if (event.target.id === 'study-level') { state.studyLevel = event.target.value; save(); render(); toast('Новые материалы: ' + (state.studyLevel === 'all' ? 'по порядку' : state.studyLevel)); }
  if (event.target.id === 'daily-target') { state.dailyTarget = Number(event.target.value); save(); render(); toast('Дневная цель обновлена.'); }
  if (event.target.id === 'new-word-limit') { state.newWordsPerDay = Number(event.target.value); save(); render(); toast('Лимит новых слов обновлён.'); }
  if (event.target.name === 'choice' && state.session) { state.session.queue[state.session.index].draft = event.target.value; save(); }
});
document.addEventListener('submit', event => {
  if (event.target.id === 'workshop-form') {
    event.preventDefault();
    const text = document.querySelector('#workshop-text').value;
    if (!text.trim()) { toast('Сначала напиши свой черновик.'); return; }
    const draft = state.workshopDrafts[event.target.dataset.id] ||= {};
    draft.text = text; draft.firstDraft ||= text; draft.reviewedText = text;
    save(); render(); document.querySelector('#workshop-review').scrollIntoView({block:'start'});
  }
  if (event.target.id === 'word-note-form') {
    event.preventDefault(); const data = new FormData(event.target);
    state.notes[event.target.dataset.id] = data.get('note').trim(); save(); toast('Твоя ассоциация сохранена. Она появится после открытия ответа.');
  }
  if (event.target.id === 'answer-form') {
    event.preventDefault(); const data = new FormData(event.target); const answer = data.get('choice') ?? data.get('answer');
    if (answer !== null && String(answer).trim()) checkAnswer(String(answer));
  }
  if (event.target.id === 'custom-form') {
    event.preventDefault(); const data = new FormData(event.target);
    const term = data.get('term').trim(); const ru = data.get('ru').trim(); const example = data.get('example').trim();
    if (!term || !ru || !example) { toast('Заполни слово, значение и пример.'); return; }
    if (!/[a-z]/i.test(term)) { toast('Введи английское слово или выражение.'); return; }
    const existing = allWords().find(w => w.term.toLowerCase() === term.toLowerCase());
    if (existing) { showWord(existing.id); toast('Это выражение уже есть в словаре.'); return; }
    const w = { id: `custom:${crypto.randomUUID()}`, topic: 'custom', term, ru, example, translation: data.get('translation').trim(), level: 'МОЁ' };
    state.custom.push(w); state.saved.push(w.id); save(); dialog.close(); selectedTopic = 'custom'; wordLevel = 'all'; wordPage = 1; wordFilter = 'all'; query = ''; navigate('vocabulary'); toast('Слово добавлено в практику.');
  }
});
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
window.appBack = () => {
  if (dialog.open) { dialog.close(); return true; }
  if (page !== 'today' || summary) { navigate('today'); return true; }
  return false;
};
try {
  state = loadState();
  feedback = state.session?.feedback || null;
  render();
} catch (error) {
  app.innerHTML = `<main class="empty-state"><h1>Не удалось открыть прогресс</h1><p>${e(error.message)}</p><p>Данные не перезаписаны. Закрой приложение и попробуй снова.</p></main>`;
}



window.ReadwellTheme?.postMessage(document.documentElement.dataset.theme);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && state && page !== 'session' && !dialog.open) render(); });
