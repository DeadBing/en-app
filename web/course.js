import { grammarKey } from './store.js';

export const chapters = [
  { id: 'foundation', title: 'Строю понятную фразу', level: 'A1–A2', goal: 'О себе, привычках, планах и простых правилах.', lessons: ['be', 'present', 'articles', 'quantity', 'continuous', 'past', 'future', 'modals', 'comparison', 'prepositions'] },
  { id: 'connections', title: 'Связываю мысли', level: 'B1', goal: 'Опыт, причины, уточнения и условия.', lessons: ['perfect', 'conditionals', 'passive', 'relative', 'gerund', 'contrast'] },
  { id: 'time', title: 'Время и изменения', level: 'B2', goal: 'Процесс, результат и порядок событий.', lessons: ['perfect-continuous', 'narrative-tenses', 'future-perfect', 'used-to'] },
  { id: 'possibilities', title: 'Варианты и последствия', level: 'B2', goal: 'Гипотезы, сожаления и выводы о прошлом.', lessons: ['second-conditional', 'third-conditional', 'mixed-conditionals', 'wish-regret', 'past-modals'] },
  { id: 'expression', title: 'Передаю и уточняю', level: 'B2', goal: 'Чужие слова, цель действия и точная формулировка.', lessons: ['passive-advanced', 'causative', 'reported-statements', 'reported-questions', 'relative-advanced', 'verb-patterns', 'contrast-purpose'] },
  { id: 'focus', title: 'Выделяю важное', level: 'C1', goal: 'Порядок слов, фокус и сила сравнения.', lessons: ['negative-inversion', 'conditional-inversion', 'cleft-sentences', 'fronting', 'emphasis-comparison'] },
  { id: 'complexity', title: 'Понимаю сложный текст', level: 'C1', goal: 'Длинные группы, сокращения и временные связи.', lessons: ['participle-clauses', 'perfect-infinitives', 'reporting-passive', 'complex-noun-phrases', 'ellipsis-substitution'] },
  { id: 'precision', title: 'Пишу точнее', level: 'C1', goal: 'Уверенность, необходимость, количество и стиль.', lessons: ['hedging', 'advanced-modality', 'nominalisation', 'quantifiers-agreement', 'advanced-articles', 'formal-subjunctive'] },
];

const prerequisite = {
  present: 'be', continuous: 'present', perfect: 'past', 'perfect-continuous': 'perfect', 'narrative-tenses': 'past',
  'future-perfect': 'future', 'second-conditional': 'conditionals', 'third-conditional': 'second-conditional',
  'mixed-conditionals': 'third-conditional', 'wish-regret': 'past', 'past-modals': 'modals',
  'passive-advanced': 'passive', causative: 'passive', 'reported-statements': 'past', 'reported-questions': 'present',
  'relative-advanced': 'relative', 'verb-patterns': 'gerund', 'used-to': 'gerund', 'contrast-purpose': 'contrast',
  'negative-inversion': 'present', 'conditional-inversion': 'third-conditional', 'cleft-sentences': 'relative',
  'participle-clauses': 'passive', 'perfect-infinitives': 'perfect', 'reporting-passive': 'passive-advanced',
  'advanced-modality': 'past-modals', 'ellipsis-substitution': 'quantity', 'advanced-articles': 'articles',
  'quantifiers-agreement': 'quantity', 'emphasis-comparison': 'comparison', 'formal-subjunctive': 'modals',
};
export const prerequisiteFor = g => prerequisite[g.id];
export const chapterFor = id => chapters.find(c => c.lessons.includes(id));
export const orderedLessons = lessons => chapters.flatMap(c => c.lessons.map(id => lessons.find(g => g.id === id)));

export function lessonStatus(state, g, now = Date.now()) {
  const progress = state.courseProgress?.[g.id] || {};
  const checks = g.checks.map((_, index) => state.grammarCards[grammarKey({ id: g.id, index, stage: 'apply' })]);
  const tracks = [...g.tasks.map((_, i) => state.grammarCards[`${g.id}:${i}`]), ...checks].filter(Boolean);
  const delayedDays = Math.min(...checks.map(t => t?.successDays || 0));
  const due = tracks.filter(t => t.card && new Date(t.card.due).getTime() <= now).length;
  const applied = !!progress.appliedAt;
  const learned = !!progress.learnedAt;
  const legacy = !!state.lessons[g.id]?.completed;
  const needsPractice = tracks.some(t => t.lastCorrect === false) || !applied && Object.values(progress.guidedAnswers || {}).some(correct => !correct);
  const confirmed = applied && delayedDays >= 2 && !needsPractice;
  const started = learned || applied || legacy || Object.keys(progress.guided || {}).length > 0 || tracks.length > 0;
  return { learned, applied, legacy, started, confirmed, due, delayedDays, needsPractice,
    label: confirmed ? 'Подтверждал спустя время' : applied ? 'Применял самостоятельно' : learned ? 'Разобрал правило' : legacy ? 'Пройдено ранее' : started ? 'В процессе' : 'Не начинал' };
}

export function currentLesson(state, lessons) {
  const ordered = orderedLessons(lessons);
  const start = state.courseStart || ordered.find(g => state.studyLevel === 'all' || g.level === state.studyLevel)?.id;
  const startIndex = Math.max(0, ordered.findIndex(g => g.id === start));
  const focus = ordered.find(g => g.id === state.courseFocus);
  const completed = g => { const s = lessonStatus(state, g); return s.applied || s.legacy || !!state.courseProgress?.[g.id]?.completedAt; };
  if (focus && !completed(focus)) return focus;
  return ordered.slice(startIndex).find(g => !completed(g)) || null;
}

export function recordCourseAnswer(state, g, task, correct, now = Date.now()) {
  state.courseProgress ||= {};
  const progress = state.courseProgress[g.id] ||= {};
  if (task.stage === 'guided') {
    // Working through an explanation is not a claim of unaided recall.
    (progress.guided ||= {})[task.index] = true;
    (progress.guidedAnswers ||= {})[task.index] = correct;
    if (g.tasks.every((_, i) => progress.guided[i])) progress.learnedAt ||= now;
  }
  if (task.stage === 'apply' && correct && !task.retry && !task.assisted && g.checks.every((_, index) =>
    state.grammarCards[grammarKey({ id: g.id, index, stage: 'apply' })]?.lastCorrect)) progress.appliedAt ||= now;
  if (task.stage === 'apply') {
    (progress.checked ||= {})[task.index] = true;
    if (progress.learnedAt && g.checks.every((_, i) => progress.checked[i])) progress.completedAt ||= now;
  }
}

export const grammarTerms = {
  subject: ['Подлежащее', 'О ком или о чём говорится в предложении. В The small dog is sleeping подлежащее — The small dog.'],
  base: ['Начальная форма', 'Форма глагола без окончаний и без to: work, go, be. После can и did используем именно её: can work, did go.'],
  auxiliary: ['Вспомогательный глагол', 'Помогает построить время, вопрос или отрицание: have в I have finished, does в Does it work? Основной смысл действия передаёт другой глагол.'],
  v3: ['V3 · третья форма', 'Причастие прошедшего времени. У правильных глаголов work → worked → worked; у неправильных write → wrote → written. Для have + V3 и пассива берём последнюю форму.'],
  ing: ['Форма с -ing', 'Глагол с окончанием -ing: read → reading, write → writing. В is reading обозначает процесс, после enjoy или предлога работает в другом шаблоне: enjoy reading, after reading.'],
  clause: ['Придаточная часть', 'Часть сложного предложения со своим подлежащим и глаголом: because I was tired. Она объясняет причину, условие или уточняет другую часть мысли.'],
};
