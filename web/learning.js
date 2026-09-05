import { normalize } from './store.js';

// Deliberately local pattern notes, not a syntactic parser. Only matched
// constructions are explained; arbitrary custom text is not assigned a full parse.
const patterns = [
  [/\b(?:have|has|had) been [a-z]+ing\b/i, 'Длительный процесс', 'Been + -ing выделяет процесс. Have/has связывает его с настоящим, had — с прошлым моментом.', 'perfect-continuous'],
  [/\b(?:is|are|was|were) being [a-z]+ed\b/i, 'Процесс в пассиве', 'Действие совершается над подлежащим; being показывает процесс.', 'passive-advanced'],
  [/\b(?:will|would|may|might|must|should|could|cannot|can.t) have (?:been|[a-z]+ed|seen|gone|done|known|written|taken|left|lost|found|bought|kept)\b/i, 'Модальный глагол + have + V3', 'Perfect относит действие к более раннему моменту. Модальный глагол добавляет вероятность, оценку или условность.', 'past-modals'],
  [/\b(?:have|has|had) (?:already |never |just |not )?(?:[a-z]+ed|seen|gone|done|known|written|taken|left|lost|found|bought|kept)\b/i, 'Perfect', 'Have/has/had + V3 связывает действие с точкой отсчёта. Перевод выбираем по смыслу всего предложения.', 'perfect'],
  [/\b(?:is|are|was|were|be|been) (?:[a-z]+ed|written|known|taken|seen|built|kept|made)\b/i, 'Be + причастие', 'Такая форма может описывать действие над объектом или его состояние. Исполнитель может быть не назван.', 'passive'],
  [/\b(?:will|would|could|should|must|may|might|can) (?:not )?(?:be |have )?[a-z]+\b/i, 'Модальность', 'После модального глагола идёт начальная форма. Сравни возможность, обязанность, прогноз или гипотезу по контексту.', 'modals'],
  [/\b(?:am|is|are|was|were) (?:not )?[a-z]+ing\b/i, 'Процесс', 'Be + -ing выделяет действие в процессе. Форма be задаёт настоящее или прошлое.', 'continuous'],
  [/\b(?:did|does|do) not [a-z]+\b/i, 'Отрицание', 'Not отрицает действие. После do/does/did основной глагол остаётся в начальной форме.', 'present'],
  [/\b(?:seems?|appears?) to (?:have )?[a-z]+\b/i, 'Осторожное наблюдение', 'Seem/appear to передаёт впечатление, а не установленный факт.', 'hedging'],
  [/\b(?:is|are|was|were) likely to [a-z]+\b/i, 'Вероятность', 'Be likely to — «вероятно». Это оценка вероятности, а не гарантия.', 'hedging'],
  [/\b(?:tend|tends) to [a-z]+\b/i, 'Тенденция', 'Tend to — «обычно», «иметь склонность». Фраза допускает исключения.', 'hedging'],
  [/\b(?:is|are|was|were) used to [a-z]+ing\b/i, 'Привычность', 'Be used to + -ing означает «быть привычным к действию», а не прошлую привычку.', 'used-to'],
  [/\b(?:if|unless|as long as|provided that)\b/i, 'Условие', 'Найди условие и его результат. Unless обычно означает «если не», as long as — «при условии, что».', 'conditionals'],
  [/\b(?:although|even though|whereas|while)\b/i, 'Связь частей', 'Although/even though вводят уступку, whereas — противопоставление. While может обозначать и время, и контраст: смотри перевод.', 'contrast'],
  [/\b(?:despite|in spite of)\b/i, 'Уступка через предлог', 'После despite/in spite of обычно стоит существительное или -ing: «несмотря на».', 'contrast'],
  [/\b(?:because|because of|due to)\b/i, 'Причина', 'Because связывает предложения; because of и due to обычно вводят именную группу.', 'contrast'],
  [/\b(?:in order to|so that|in case)\b/i, 'Цель или предосторожность', 'In order to и so that объясняют цель; in case — действие заранее на случай возможной ситуации.', 'contrast-purpose'],
  [/\b(?:who|whose|which)\b/i, 'Уточнение или вопрос', 'Проверь, относится ли слово к человеку/предмету, вводит вопрос или связывает части. Whose обозначает принадлежность.', 'relative-advanced'],
  [/\b(?:after|before|without|by) [a-z]+ing\b/i, 'Предлог + -ing', 'После предлога действие оформлено через -ing: время, способ или отсутствие действия.', 'gerund'],
  [/\b(?:enjoy|enjoys|avoid|avoids|consider|considered|suggest|suggested) [a-z]+ing\b/i, 'Глагол + -ing', 'Этот глагольный шаблон требует -ing у следующего действия.', 'gerund'],
  [/\b(?:decide|decided|plan|planned|want|wanting|hope|hoping) to [a-z]+\b/i, 'Глагол + инфинитив', 'To вводит следующее действие: решение, план или желание.', 'gerund'],
  [/\b(?:rather than|instead of)\b/i, 'Альтернатива', 'Сравни два действия или варианта: что выбирают и что заменяют.', 'contrast-purpose'],
  [/\b(?:not only|never have|only after|hardly had)\b/i, 'Выделение и возможная инверсия', 'Если ограничительная часть вынесена вперёд, проверь положение вспомогательного глагола перед подлежащим.', 'negative-inversion'],
  [/\b(?:having [a-z]+ed|having been)\b/i, 'Предшествующее действие', 'Having + V3 вводит действие до основного; проверь общего исполнителя.', 'participle-clauses'],
  [/\b(?:further down|higher up)\b/i, 'Положение в тексте', 'В обсуждении это положение относительно других сообщений: ниже или выше по ветке.', null],
];

const sentenceNotes = {
  'I found the answer in this thread.': [
    ['I → found → the answer', 'Кто → что сделал → что нашёл. Found — прошедшая форма find: «нашёл».', 'past'],
    ['in this thread', 'Где найден ответ: в этой ветке обсуждения. This указывает на конкретную ветку.', 'prepositions'],
  ],
  'Someone posted a detailed guide further down the thread.': [
    ['Someone → posted → a detailed guide', 'Кто-то → опубликовал → подробное руководство. Posted — завершённое действие в прошлом.', 'past'],
    ['further down the thread', 'Ниже в ветке обсуждения. Down здесь обозначает положение сообщения, а не движение предмета вниз.', null],
  ],
};

const contains = (sentence, term) => {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(?<![a-z])${escaped}(?![a-z])`, 'i').test(sentence);
};
export function sentenceAnalysis(sentence, word, vocabulary = []) {
  const notes = [];
  if (word) notes.push({ text: word.term, explanation: word.ru, lessonId: null });
  for (const w of vocabulary) {
    if (w.term !== word?.term && w.term.includes(' ') && contains(sentence, w.term)) notes.push({ text: w.term, explanation: w.ru, lessonId: null });
    if (notes.length >= 4) break;
  }
  if (sentenceNotes[sentence]) return [...notes, ...sentenceNotes[sentence].map(([text, explanation, lessonId]) => ({ text, explanation, lessonId }))];
  let count = 0;
  for (const [pattern, title, explanation, lessonId] of patterns) {
    const match = sentence.match(pattern);
    if (match) { notes.push({ text: match[0], explanation: `${title}. ${explanation}`, lessonId }); if (++count === 3) break; }
  }
  return notes;
}

// One insertion, deletion, substitution or adjacent transposition. Only a
// spelling hint, never an automatic pass or a semantic judgement.
function oneEdit(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0; while (i < a.length && a[i] === b[i]) i++;
  if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1) || a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2);
  return a.length < b.length ? a.slice(i) === b.slice(i + 1) : a.slice(i + 1) === b.slice(i);
}
export function answerDiagnosis(value, question, kind, vocabulary = []) {
  const actual = normalize(value), expected = normalize(String(question.answer));
  const mistake = question.mistakes?.find(([wrong]) => normalize(wrong) === actual);
  if (mistake) return { title: 'Почему эта форма не подходит', text: mistake[1] };
  if (kind === 'reading') return { title: 'Вернись к аргументу автора', text: question.why };
  if (kind === 'grammar') return { title: 'Проверь конструкцию', text: question.why };
  const known = vocabulary.find(w => normalize(w.term) === actual);
  if (known) return { title: 'Другое выражение', text: `«${known.term}» в словаре: ${known.ru}. Здесь закрепляем «${question.answer}». Это сравнение с целевой карточкой, а не проверка всех возможных синонимов.` };
  const a = actual.split(' '), b = expected.split(' ');
  const changed = a.map((word, i) => [word, b[i]]).filter(([x,y]) => x !== y);
  if (a.length === b.length && changed.length === 1 && Math.min(changed[0][0].length, changed[0][1].length) >= 4 && oneEdit(...changed[0])) {
    return { title: 'Похоже на опечатку', text: `Сравни написание: «${value}» → «${question.answer}». Ответ пока отмечен как ошибка; повтор поможет проверить точное написание.` };
  }
  return { title: 'Вспомни целевое выражение', text: `В этой карточке ожидается «${question.answer}». Сравни значение и пример; свободные синонимы не оцениваются автоматически.` };
}
