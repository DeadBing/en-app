import { grammar } from './lessons.js';
import { words } from './words.js';
import { engagement } from './engagement.js';
import { stats, chooseGrammar, grammarKey } from './store.js';
import { chapters, chapterFor, currentLesson, lessonStatus, prerequisiteFor, grammarTerms } from './course.js';

const e = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const done = (state, g) => { const s = lessonStatus(state, g); return s.learned || s.applied || s.legacy; };
const chapterCount = (state, c) => c.lessons.filter(id => done(state, grammar.find(g => g.id === id))).length;
const header = (label, title, text) => `<header class="course-heading"><span class="eyebrow">${label}</span><h1>${title}</h1><p>${text}</p></header>`;
const tag = (status) => `<span class="skill-status ${status.confirmed ? 'confirmed' : status.applied ? 'applied' : status.learned || status.legacy ? 'learned' : ''}">${e(status.label)}</span>${status.due ? `<span class="review-tag">Пора повторить · ${status.due}</span>` : status.needsPractice ? '<span class="review-tag">Есть трудности</span>' : ''}`;

export function renderHome(state, ui) {
  const { btn, icon, buddy } = ui;
  const g = currentLesson(state, grammar), c = g && chapterFor(g.id), game = engagement(state);
  const counts = stats(state, [...words, ...state.custom]);
  const due = chooseGrammar(state, grammar, 1000, Date.now(), 'all', true).length;
  const learned = grammar.filter(g => done(state, g)).length;
  const applied = grammar.filter(g => lessonStatus(state, g).applied).length;
  return `${header('ТВОЙ АНГЛИЙСКИЙ', 'От правила —<br>к своей мысли.', 'Один понятный шаг за раз.')}
    <div class="home-course-layout"><div>
      <section class="next-lesson-card"><div class="next-lesson-top"><span class="chapter-pill">${c ? `${e(c.level)} · Глава ${chapters.indexOf(c) + 1}` : 'ТВОЙ КУРС'}</span>${buddy('course-buddy')}</div>
        <span class="eyebrow">${state.session ? 'ПРОДОЛЖИМ С ТОГО ЖЕ МЕСТА' : g ? 'СЕГОДНЯ РАЗБЕРЁМСЯ' : 'МАРШРУТ ПРОЙДЕН'}</span>
        <h2>${e(state.session?.title || g?.title || 'Продолжай применять английский')}</h2>
        <p>${state.session ? `Сохранено задание ${state.session.index + 1} из ${state.session.queue.length}. Ответы и черновик на месте.` : e(g?.guide.goal || 'Вернись к трудным темам, почитай или напиши свою историю.')}</p>
        ${btn((state.session ? 'Продолжить занятие' : g ? 'Начать занятие' : 'К практике') + icon('arrow'), state.session || g ? 'daily' : 'nav', 'primary full', g || state.session ? '' : 'data-page="practice"')}
        ${g && !state.session ? `<button class="text-button" data-action="lesson" data-id="${g.id}">Сначала посмотреть объяснение</button>` : ''}
        ${c ? `<div class="chapter-caption"><span>${e(c.title)}</span><strong>${chapterCount(state, c)} / ${c.lessons.length} тем</strong></div><progress class="course-meter" value="${chapterCount(state, c)}" max="${c.lessons.length}" aria-label="Пройдено тем в главе"></progress>` : ''}
      </section>
      <div class="home-shortcuts"><button class="practice-tile" data-action="due-practice"><span class="tile-icon">${icon('repeat')}</span><strong>${counts.due + due ? `${counts.due + due} к повторению` : 'Памяти нужна пауза'}</strong><span>${counts.due + due ? 'Слова и конструкции по расписанию' : 'Повторения появятся, когда придёт время'}</span></button><button class="practice-tile" data-action="nav" data-page="course"><span class="tile-icon">${icon('compass')}</span><strong>Моя карта курса</strong><span>8 глав · все темы открыты</span></button></div>
    </div><aside class="home-side"><section class="panel week-summary"><span class="eyebrow">ТВОЁ ДВИЖЕНИЕ</span><h2>Заметный шаг</h2><div class="learning-numbers"><div><strong>${learned}<small> / 48</small></strong><span>тем разобрано или пройдено ранее</span></div><div><strong>${applied}</strong><span>тем с самостоятельным применением</span></div></div><p>Каждое умение подтверждается практикой. Повторение помогает сохранить его.</p>${btn('Посмотреть прогресс', 'nav', 'outline full', 'data-page="progress"')}</section>
      <section class="habit-strip"><span>${icon('flame')} <strong>${game.streak}</strong> дней подряд</span><span>${counts.today} / ${state.dailyTarget} ответов сегодня</span><progress value="${Math.min(counts.today, state.dailyTarget)}" max="${state.dailyTarget}" aria-label="Дневная цель"></progress></section>
      <p class="course-footnote">Первые главы помогают восстановить основы грамматики. Слова и тексты — от B1. Начать можно с любой темы.</p></aside></div>`;
}

export function renderCourse(state, ui) {
  const { btn, icon } = ui;
  const current = currentLesson(state, grammar), active = state.openChapter || chapterFor(current?.id)?.id || chapters[0].id;
  const total = grammar.filter(g => done(state, g)).length;
  return `${header('КАРТА КУРСА', 'Вижу, куда иду.', 'Выбирай главу, разбирайся в теме и возвращайся к ней спустя время.')}
    <div class="course-overview"><div><strong>${total}<small> / ${grammar.length}</small></strong><span>тем пройдено</span></div><progress class="course-meter" value="${total}" max="${grammar.length}" aria-label="Тем пройдено в курсе"></progress>${btn('Каталог правил', 'nav', 'outline', 'data-page="grammar"')}</div>
    <div class="chapter-map">${chapters.map((c, i) => {
      const n = chapterCount(state, c);
      return `<details class="course-chapter ${c.id === chapterFor(current?.id)?.id ? 'current-chapter' : ''}" data-chapter="${c.id}" ${active === c.id ? 'open' : ''}><summary><span class="chapter-number">${String(i + 1).padStart(2, '0')}</span><span class="chapter-name"><span class="eyebrow">${c.level}</span><strong>${e(c.title)}</strong><span>${n} из ${c.lessons.length} тем пройдено</span></span><span class="chapter-chevron">${icon('arrow')}</span></summary>
      <div class="chapter-body"><p class="chapter-goal">${e(c.goal)}</p>
      <ol class="course-lessons">${c.lessons.map((id, j) => {
        const g = grammar.find(g => g.id === id), s = lessonStatus(state, g), isCurrent = current?.id === id;
        return `<li class="course-node ${isCurrent ? 'current-node' : ''}"><span class="course-node-dot">${s.applied ? icon('check') : j + 1}</span><button data-action="lesson" data-id="${id}"><span class="node-heading">${isCurrent ? '<span class="current-label">ТЕКУЩАЯ ТЕМА</span>' : ''}<strong>${e(g.title)}</strong><span>${e(g.subtitle)}</span></span><span class="node-status">${tag(s)}</span></button></li>`;
      }).join('')}</ol><div class="chapter-check"><span>${icon('layers')}</span><div><strong>Собери всё вместе</strong><p>Самостоятельные задания этой главы в одном занятии.</p></div>${btn('Проверить главу', 'chapter-check', 'outline', `data-id="${c.id}"`)}</div></div></details>`;
    }).join('')}</div><p class="course-footnote">Можно пропускать знакомые главы и возвращаться к ним. Метки A1–C1 обозначают сложность материала; они не присваивают тебе уровень языка.</p>`;
}

export function renderGuide(g, ui, compact = false) {
  const { btn } = ui, guide = g.guide;
  return `<div class="grammar-guide"><p class="guide-goal">${e(guide.goal)}</p><section class="guide-situation"><span class="eyebrow">ПРЕДСТАВЬ СИТУАЦИЮ</span><p>${e(guide.situation)}</p></section>
    <div class="contrast-examples">${guide.examples.map((ex, i) => `<section class="contrast-example"><span class="example-index">0${i + 1}</span><p lang="en">${e(ex.sentence)}</p><p class="example-translation" lang="ru">${e(ex.translation)}</p><p class="example-reason">${e(ex.why)}</p></section>`).join('')}</div>
    <section class="form-card"><span class="eyebrow">КАК СОБРАТЬ</span><p>${e(guide.form).replace(/\bV3\b/g, '<button class="inline-term" data-action="grammar-term" data-id="v3">V3</button>')}</p></section>
    <section class="decision-note"><h3>Как выбрать по смыслу</h3><p>${e(guide.decision)}</p></section>
    ${compact ? '' : `<details class="full-rule"><summary>Правило и дополнительные примеры</summary><p>${e(g.rule)}</p>${g.examples.map(ex => `<p>${e(ex)}</p>`).join('')}</details>`}
    <details class="grammar-glossary"><summary>Непонятен термин?</summary><div>${Object.entries(grammarTerms).map(([id, [title]]) => btn(title, 'grammar-term', 'term-button', `data-id="${id}"`)).join('')}</div><div class="term-definition" aria-live="polite"></div></details></div>`;
}

export function renderLesson(state, id, ui, writing) {
  const g = grammar.find(g => g.id === id); if (!g) return renderCourse(state, ui);
  const c = chapterFor(id), status = lessonStatus(state, g), pre = grammar.find(item => item.id === prerequisiteFor(g));
  const checks = g.checks.map((_, index) => state.grammarCards[grammarKey({ id, index, stage: 'apply' })]);
  const date = value => new Date(value).toLocaleString('ru', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  return `<article class="lesson-screen"><div class="lesson-screen-top">${ui.btn(ui.icon('back') + 'Назад', 'lesson-back', 'text-button')}<span>${g.level} · Глава ${chapters.indexOf(c) + 1}</span></div>
    <header class="lesson-screen-heading"><span class="eyebrow">${e(g.subtitle)}</span><h1>${e(g.title)}</h1><div class="lesson-state-tags">${tag(status)}</div></header>
    ${checks.some(t => t?.card) ? `<details class="full-rule"><summary>На чём основан прогресс</summary>${checks.map((t, i) => `<p><strong>Самостоятельное задание ${i + 1}.</strong> ${t?.card ? `${t.lastCorrect ? 'Последний самостоятельный ответ — верно.' : 'Стоит попробовать ещё раз без опоры.'} Успешных отсроченных дней после последней ошибки: ${t.successDays || 0}. Последняя проверка: ${e(date(t.card.last_review))}. Следующая: ${e(date(t.card.due))}.` : 'Ещё не проверялось.'}</p>`).join('')}<p>Досрочная практика и немедленное исправление не добавляют успешный день.</p></details>` : ''}
    <div class="lesson-stage-list"><span>01 Разобраться</span><span>02 С опорой</span><span>03 Самостоятельно</span></div>
    ${renderGuide(g, ui)}
    ${pre ? `<div class="prerequisite-note"><p>Будет проще, если знакома тема «${e(pre.subtitle)}».</p>${ui.btn('Освежить основу', 'lesson', 'text-button', `data-id="${pre.id}"`)}</div>` : ''}
    <div class="lesson-actions">${ui.btn('Разобрать и попробовать ' + ui.icon('arrow'), 'start-grammar', 'primary full', `data-id="${id}"`)}${ui.btn('Уже знакомо · проверить себя', 'check-grammar', 'outline full', `data-id="${id}"`)}</div>
    ${writing}<button class="text-button course-start" data-action="course-focus" data-id="${id}">Продолжать курс с этой темы</button>
    <p class="course-footnote">Сначала 4 задания с объяснением, затем 2 самостоятельных. Повторения возвращаются отдельно по расписанию.</p></article>`;
}

export function renderPractice(state, ui, mixed) {
  const due = chooseGrammar(state, grammar, 1000, Date.now(), 'all', true).length;
  return `${header('ПРАКТИКА', 'Применяй по-своему.', 'Повторение, чтение и свои тексты — всё в одном месте.')}
    <section class="practice-due"><div>${ui.icon('repeat')}<h2>Вспомнить сегодня</h2><p>${due} грамматических заданий по расписанию. Слова с наступившим сроком тоже войдут в занятие.</p></div>${ui.btn('Открыть повторение', 'due-practice', 'primary')}</section>
    <div class="practice-grid">${[
      ['layers', 'Слова и выражения', 'Контекст, перевод и самостоятельное воспроизведение.', 'nav', 'vocabulary'],
      ['book', 'Читать ради смысла', 'Тексты, вопросы и короткий пересказ.', 'nav', 'reading'],
      ['message', 'Писать своими словами', 'Восемь ситуаций, план и сохранённые черновики.', 'workshop-list', ''],
      ['link', 'Смешанная практика', 'B2–C1: выбрать конструкцию, смысл и стиль.', 'transfer', ''],
      ['compass', 'Мои трудные темы', 'Вернуться к конструкциям, в которых возникли ошибки.', 'difficult-grammar', ''],
      ['bookmark', 'Справочник грамматики', 'Все 48 тем, от простых фраз до нюансов.', 'nav', 'grammar'],
    ].map(([glyph, title, text, action, page]) => `<button class="practice-tile" data-action="${action}" ${page ? `data-page="${page}"` : ''}><span class="tile-icon">${ui.icon(glyph)}</span><strong>${title}</strong><span>${text}</span><span class="tile-arrow">${ui.icon('arrow')}</span></button>`).join('')}</div><details class="full-rule practice-mixed" data-section="mixed" ${state.practiceMixedOpen ? 'open' : ''}><summary>Настроить смешанную практику B2–C1</summary>${mixed}</details>`;
}

export function renderCourseProgress(state, ui) {
  const statuses = grammar.map(g => lessonStatus(state, g));
  return `<section class="course-progress"><div class="section-top"><h2>Умения становятся привычнее</h2>${ui.btn('К карте курса', 'nav', 'text-button', 'data-page="course"')}</div>
    <div class="skill-totals"><div><strong>${grammar.filter(g => done(state, g)).length}</strong><span>разобрано или пройдено ранее</span></div><div><strong>${statuses.filter(s => s.applied).length}</strong><span>применял самостоятельно</span></div><div><strong>${statuses.filter(s => s.confirmed).length}</strong><span>подтверждал спустя время</span></div></div>
    <p class="course-footnote">«Самостоятельно» — верные ответы на оба задания темы без опоры. «Спустя время» — каждое из них успешно повторено по расписанию в два разных последующих дня. Это история практики, не оценка свободной речи или уровня CEFR.</p>
    <div class="progress-chapters">${chapters.map(c => `<button data-action="course-chapter" data-id="${c.id}"><strong>${e(c.title)}</strong><span>${chapterCount(state, c)} / ${c.lessons.length}</span><progress class="course-meter" value="${chapterCount(state, c)}" max="${c.lessons.length}" aria-label="${e(c.title)}"></progress></button>`).join('')}</div>
    ${statuses.some(s => s.needsPractice) ? `<div class="needs-practice"><h3>Стоит разобрать ещё раз</h3>${grammar.filter(g => lessonStatus(state, g).needsPractice).slice(0, 5).map(g => ui.btn(g.subtitle, 'lesson', 'outline', `data-id="${g.id}"`)).join('')}</div>` : ''}
    </section>`;
}
