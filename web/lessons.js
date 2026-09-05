function lesson(id, level, title, subtitle, rule, examples, tasks) {
  return { id, level, title, subtitle, rule, examples, tasks: tasks.map(([prompt, answer, why, alternatives = []]) => ({ prompt, answer, why, alternatives })) };
}

export const grammar = [
  lesson('be', 'A1', 'Кто, что и какой', 'Глагол be и порядок слов',
    'В английском предложении обычно нужны подлежащее и глагол. Там, где по-русски «сервер доступен», по-английски нужен be: I am, he/she/it is, you/we/they are. В вопросе be идёт перед подлежащим, в отрицании после него ставится not.',
    ['The server is available. → Сервер доступен.', 'Are these details correct? → Эти данные верны?', 'I am not sure. → Я не уверен.'], [
      ['The file ___ ready. (Файл готов.)', 'is', 'File — единственное число, как it: нужна форма is.'],
      ['These comments ___ helpful.', 'are', 'Comments — множественное число: they are.'],
      ['___ you sure?', 'Are', 'В вопросе are стоит перед you.'],
      ['I ___ not a developer.', 'am', 'С I используется am.'],
    ]),
  lesson('present', 'A1', 'Как это обычно работает', 'Present Simple',
    'Для привычек, фактов и регулярных действий используем Present Simple. С he/she/it к глаголу обычно добавляется -s. Для вопросов нужны do/does, для отрицаний — do not/does not. После does основной глагол уже без -s.',
    ['The app works offline. → Приложение работает без интернета.', 'Does it save progress? → Оно сохраняет прогресс?', 'I do not agree. → Я не согласен.'], [
      ['She ___ from home every day. (work)', 'works', 'Регулярное действие, she: work + s.'],
      ['___ this app work offline? (Do / Does)', 'Does', 'This app = it, поэтому does.'],
      ['He does not ___ the answer. (know)', 'know', 'После does not используется начальная форма без -s.'],
      ['They ___ the news every morning. (read)', 'read', 'С they окончание -s не добавляется.'],
    ]),
  lesson('articles', 'A1', 'О каком именно предмете', 'Артикли a, an и the',
    'A/an — один предмет, который впервые вводим или не уточняем. The — тот самый, уже известный из контекста. An выбирается перед гласным звуком: an hour, но a user. Перед неисчисляемым существительным в общем значении артикль часто не нужен.',
    ['I found an issue. The issue is minor. → Я нашёл проблему. Эта проблема небольшая.', 'She is a user. → Она пользователь.', 'I need information. → Мне нужна информация.'], [
      ['I found ___ error. (Впервые сообщаем об ошибке.)', 'an', 'Error начинается с гласного звука; впервые вводим одну ошибку.'],
      ['I opened a file. ___ file was empty.', 'The', 'Речь о том самом файле из предыдущего предложения.'],
      ['She is ___ user of this app.', 'a', 'User начинается со звука /j/, поэтому a.'],
      ['It takes ___ hour.', 'an', 'В hour буква h не произносится, первый звук гласный.'],
    ]),
  lesson('quantity', 'A1', 'Сколько и чего', 'Исчисляемое и неисчисляемое',
    'Many и a few сочетаются с исчисляемыми существительными во множественном числе. Much и a little — с неисчисляемыми. Information, advice, feedback и research обычно неисчисляемые: не говорим an advice или informations. Some — некоторое количество, any часто используется в вопросах и отрицаниях.',
    ['How many comments? → Сколько комментариев?', 'How much time? → Сколько времени?', 'Some useful advice. → Несколько полезных советов.'], [
      ['How ___ time do we have? (much / many)', 'much', 'Time в значении количества времени неисчисляемое.'],
      ['How ___ files are missing? (much / many)', 'many', 'Files можно посчитать.'],
      ['I do not have ___ questions. (some / any)', 'any', 'В этом отрицательном предложении используется any.'],
      ['Can you give me some ___? (advice / advices)', 'advice', 'Advice — неисчисляемое, множественного advices здесь нет.'],
    ]),
  lesson('continuous', 'A2', 'Обычно или прямо сейчас', 'Present Simple / Continuous',
    'Present Continuous — am/is/are + глагол с -ing: действие происходит сейчас или временно. Present Simple — привычка или факт. Глаголы know, want, need, believe обычно не используются в Continuous в этих значениях.',
    ['I work remotely. → Я работаю удалённо.', 'I am working on a fix. → Сейчас я работаю над исправлением.', 'I know the answer. → Я знаю ответ.'], [
      ['She is ___ a comment right now. (write)', 'writing', 'Сейчас: is + writing. В write конечная e убирается.'],
      ['They ___ testing the update at the moment.', 'are', 'Continuous с they: are + testing.'],
      ['I ___ the answer. (know / am knowing)', 'know', 'Know в значении «знать» обычно не употребляется в Continuous.'],
      ['He usually ___ the bus. (take)', 'takes', 'Usually указывает на привычку. He → takes.'],
    ]),
  lesson('past', 'A2', 'Что произошло', 'Past Simple',
    'Past Simple описывает завершённое действие в прошлом: yesterday, last week, two days ago. У правильных глаголов окончание -ed, неправильные формы нужно запоминать: go → went, see → saw. В вопросах и отрицаниях did/did not + начальная форма. У be свои формы was/were.',
    ['The update failed yesterday. → Вчера обновление завершилось ошибкой.', 'Did you see the message? → Ты видел сообщение?', 'We were busy. → Мы были заняты.'], [
      ['I ___ the message yesterday. (see)', 'saw', 'Неправильный глагол: see → saw.'],
      ['Did you ___ the file? (save / saved)', 'save', 'После did нужна начальная форма.'],
      ['They ___ late yesterday. (was / were)', 'were', 'Прошедшая форма be с they — were.'],
      ['She ___ the app last week. (install)', 'installed', 'Завершённое действие в прошлом: install + ed.'],
    ]),
  lesson('future', 'A2', 'Планы и решения', 'Will / going to',
    'Will часто используется для решения в момент речи, обещания или прогноза. Be going to — для заранее принятого намерения или прогноза по видимым признакам. В реальной речи значения могут пересекаться; ориентируйся на контекст.',
    ['I will check it now. → Сейчас проверю.', 'We are going to move next month. → Мы собираемся переехать в следующем месяце.', 'It will probably work. → Вероятно, это сработает.'], [
      ['I am ___ to start a course next week. (План.)', 'going', 'Запланированное намерение: am going to.'],
      ['I will ___ you tomorrow. (call)', 'call', 'После will — начальная форма глагола.'],
      ['They ___ going to update the app. (be)', 'are', 'They are going to.'],
      ['She will not ___ late. (be)', 'be', 'После will not остаётся начальная форма be.'],
    ]),
  lesson('modals', 'A2', 'Можно, нужно, стоит', 'Can, should, must, have to',
    'После can, should, must глагол идёт без to и без -s. Should — совет, must/have to — необходимость. Must not — запрет. Do not have to — отсутствует необходимость, а не запрет. Can — способность или разрешение.',
    ['You should check the source. → Стоит проверить источник.', 'You must not share passwords. → Нельзя делиться паролями.', 'You do not have to reply. → Ты не обязан отвечать.'], [
      ['You should ___ the instructions. (read)', 'read', 'После should — начальная форма без to.'],
      ['You ___ not share this password. (Строгий запрет: must / should)', 'must', 'Must not — прямой запрет.'],
      ['You do not ___ to register. (Регистрироваться необязательно.)', 'have', 'Do not have to обозначает отсутствие необходимости.'],
      ['She can ___ this issue. (handle)', 'handle', 'После can не добавляем -s даже с she.'],
    ]),
  lesson('comparison', 'A2', 'Сравнивать варианты', 'Comparatives & superlatives',
    'Короткие прилагательные часто получают -er/-est: faster, fastest. Более длинные — more/most: more reliable. После сравнительной степени — than. Исключения: good → better → best, bad → worse → worst. Равенство: as ... as.',
    ['This version is faster than the old one.', 'It is more reliable.', 'This is the best option.'], [
      ['This app is ___ than that one. (fast)', 'faster', 'Короткое прилагательное: fast → faster.'],
      ['This connection is ___ reliable. (Более надёжная: more / most)', 'more', 'Для reliable сравнительная степень образуется с more.'],
      ['This is the ___ option. (good)', 'best', 'Превосходная степень good — best.'],
      ['It is cheaper ___ the other model.', 'than', 'После сравнительной степени используется than.'],
    ]),
  lesson('prepositions', 'A2', 'Время и место', 'In, on, at + устойчивые сочетания',
    'Для времени: at 5 pm, on Monday, in September. Для места: in a room, on a page, at a station. Многие сочетания лучше учить целиком: interested in, depend on, responsible for. Не переводи предлог отдельно от выражения.',
    ['The meeting is on Friday.', 'I am interested in this topic.', 'It depends on the context.'], [
      ['The update arrives ___ Monday.', 'on', 'С днями недели — on.'],
      ['The call starts ___ 10 am.', 'at', 'С точным временем — at.'],
      ['I am interested ___ learning more.', 'in', 'Устойчивое сочетание: interested in.'],
      ['It depends ___ your settings.', 'on', 'Устойчивое сочетание: depend on.'],
    ]),
  lesson('perfect', 'B1', 'Прошлое связано с настоящим', 'Present Perfect',
    'Have/has + третья форма глагола: опыт к настоящему моменту, результат сейчас, период, который ещё продолжается. При конкретном завершённом времени (yesterday, in 2020) обычно нужен Past Simple. Since — с начального момента; for — в течение периода.',
    ['I have already read it. → Я уже это прочитал.', 'She has never used this app. → Она никогда не пользовалась этим приложением.', 'I have lived here for two years. → Я живу здесь два года.'], [
      ['She ___ already fixed the issue. (have / has)', 'has', 'С she — has + третья форма.'],
      ['I have never ___ this film. (see)', 'seen', 'Третья форма see — seen.'],
      ['I have lived here ___ 2022. (since / for)', 'since', '2022 — начальный момент периода.'],
      ['I ___ it yesterday. (read / have read)', 'read', 'Yesterday — конкретное завершённое время, нужен Past Simple.'],
    ]),
  lesson('conditionals', 'B1', 'Если — то', 'Zero & First Conditional',
    'Общее правило: if + Present Simple, Present Simple. Реальное условие в будущем: if + Present Simple, will + глагол. В обычном условии после if не ставим will. Unless означает if not.',
    ['If you heat ice, it melts.', 'If it works, I will let you know.', 'I will stay unless you need help.'], [
      ['If it ___, I will stay home. (rain)', 'rains', 'В условии будущего после if используем Present Simple.'],
      ['If you click here, the menu ___. (open; общее правило)', 'opens', 'Общее правило: Present Simple в обеих частях.'],
      ['If I find the answer, I ___ tell you.', 'will', 'В главной части реального будущего условия — will.'],
      ['I will go ___ it rains. (если не)', 'unless', 'Unless = if not.'],
    ]),
  lesson('passive', 'B1', 'Важен результат, а не исполнитель', 'Passive voice',
    'Пассив: be в нужном времени + третья форма глагола. Используем, когда важнее действие над предметом, чем тот, кто его выполняет. Это часто встречается в документации: is required, was removed, will be updated.',
    ['The file is saved automatically.', 'The feature was removed yesterday.', 'The issue will be fixed.'], [
      ['The files ___ stored locally. (am / is / are)', 'are', 'Files — множественное число, нужен are.'],
      ['The feature ___ removed yesterday. (is / was)', 'was', 'Yesterday указывает на прошлое: was removed.'],
      ['The update will ___ released tomorrow.', 'be', 'Будущий пассив: will be + третья форма.'],
      ['The message was ___. (send)', 'sent', 'Третья форма send — sent.'],
    ]),
  lesson('relative', 'B1', 'Уточнять без лишних предложений', 'Who, which, that, whose',
    'Who относится к людям, which — к предметам; that часто заменяет их в определяющих придаточных без запятой. Whose указывает на принадлежность. Эти конструкции помогают читать длинные предложения по частям.',
    ['The person who wrote this is a teacher.', 'The app that I use works offline.', 'A writer whose books I enjoy.'], [
      ['A person ___ helps others. (who / which)', 'who', 'Для человека подходит who.'],
      ['The tool ___ I use is free. (which / who)', 'which', 'Для предмета — which; в таком контексте также допустимо that.', ['that']],
      ['The author ___ book I read lives nearby.', 'whose', 'Whose book = чью книгу.'],
      ['The post ___ you shared was helpful. (that / whose)', 'that', 'That связывает post с уточнением you shared.'],
    ]),
  lesson('gerund', 'B1', 'Второй глагол в предложении', 'Doing / to do',
    'После enjoy, avoid, finish — форма с -ing. После want, decide, hope — to + глагол. После предлогов тоже обычно -ing: interested in learning, without asking. Сочетания стоит запоминать целиком.',
    ['I enjoy reading long posts.', 'We decided to wait.', 'Thanks for pointing that out.'], [
      ['I enjoy ___ in English. (read)', 'reading', 'После enjoy — форма с -ing.'],
      ['We decided ___ wait. (to / for)', 'to', 'Decide to do something.'],
      ['Avoid ___ the same password. (use)', 'using', 'После avoid — -ing; use → using.'],
      ['Thank you for ___. (help)', 'helping', 'После предлога for — helping.'],
    ]),
  lesson('contrast', 'B1', 'Связывать мысли', 'Although, despite, however, because',
    'Although + полноценная часть предложения: although it is expensive. Despite + существительное или -ing: despite the price. Because объясняет причину. However вводит противопоставление; его обычно отделяют пунктуацией.',
    ['Although it is old, it works well.', 'Despite the price, I bought it.', 'It is useful. However, it takes time.'], [
      ['___ it was raining, we went out. (Although / Despite)', 'Although', 'После пропуска полное предложение it was raining.'],
      ['___ the rain, we went out. (Although / Despite)', 'Despite', 'После пропуска существительное the rain.'],
      ['I stayed home ___ I was tired. (because / despite)', 'because', 'Вторая часть объясняет причину.'],
      ['Despite ___ tired, she finished the work. (be)', 'being', 'После despite можно использовать форму с -ing.'],
    ]),
];

// Original educational texts inspired by formats, not copied social posts.
export const readings = [
  {
    id: 'quiet-internet', title: 'Maybe the internet needs to be a little quieter', category: 'Reddit', level: 'B1', time: 3, color: 'sage', author: 'r / everydaythoughts',
    intro: 'Мнение, оговорки и смысл между строк.',
    body: `Hot [[take]]: not every hobby needs to become a side business.\n\nI started taking photos because I liked walking around my city. Then I joined a photography group, and [[apparently]] I needed a personal brand, a posting schedule, and a better camera.\n\n[[TBH]], I just wanted an excuse to go outside. I do not [[disagree]] with people who sell their work. I just think we should stop taking a quiet hobby and turning it into another job.\n\nMaybe this sounds [[relatable]]. Maybe you think I am being dramatic. [[Fair enough]]. But the next time someone shows you something they made, try asking whether they enjoyed making it before asking how much they could sell it for.`,
    questions: [
      { prompt: 'Что автор хочет сказать?', options: ['Любое хобби должно приносить доход', 'Хобби может быть ценным без заработка', 'Фотография требует дорогой камеры'], answer: 1, why: 'Автор защищает удовольствие от хобби без обязанности превращать его в работу.' },
      { prompt: 'Зачем автор пишет «Fair enough»?', options: ['Допускает, что читатель может не согласиться', 'Объявляет конкурс', 'Подтверждает стоимость камеры'], answer: 0, why: 'Здесь fair enough признаёт допустимость чужой реакции: «ладно, принимается».' },
    ],
  },
  {
    id: 'api-retry', title: 'When a request fails', category: 'Документация', level: 'B1', time: 3, color: 'blue', author: 'Developer notes / Networking',
    intro: 'Условия, ограничения и важные детали инструкции.',
    body: `A failed [[request]] does not always mean the server is unavailable. Your connection may have been interrupted before the [[response]] arrived.\n\nBefore you retry, check the error code. If you receive a permission error, sending the same request again will not solve the [[issue]]. You need the correct [[permission]] first.\n\nThis client retries read requests twice [[by default]]. It does not automatically retry requests that create a payment or a new record. Repeating those requests may create duplicates.\n\nYou can [[enable]] additional logging in settings. Logs should include the time and the request identifier. [[Ensure]] that you remove passwords and other private information before sharing them. A useful error report helps other people [[reproduce]] the problem.`,
    questions: [
      { prompt: 'Почему запросы на создание платежа не повторяются автоматически?', options: ['Они всегда успешны', 'Повтор может создать дубликат', 'У них нет ответа'], answer: 1, why: 'В тексте прямо сказано: repeating those requests may create duplicates.' },
      { prompt: 'Что сделать перед публикацией логов?', options: ['Удалить время запроса', 'Повторить платёж', 'Убрать пароли и личные данные'], answer: 2, why: 'Ensure that you remove passwords and other private information.' },
    ],
  },
  {
    id: 'productivity', title: 'The most useful productivity tool I own', category: 'X / тред', level: 'B1', time: 2, color: 'sand', author: '@slowprogress · учебный тред',
    intro: 'Короткие посты, юмор и неожиданный вывод.',
    body: `1/ I tried six apps to [[sort out]] my schedule. The most useful tool turned out to be a piece of paper.\n\n2/ Every Sunday, I write down three things that matter for the week. Not thirty. Three. It helps me [[prioritize]] instead of pretending everything is urgent.\n\n3/ The main [[drawback]]? Paper cannot send reminders. [[FWIW]], neither can an app if I turn off all its notifications.\n\n4/ This is not a [[claim]] that everyone should stop using digital tools. Use whatever works for you. Just [[keep in mind]] that organising work and doing work are different things.\n\n5/ My next goal is to [[take a break]] without adding it to a task list.`,
    questions: [
      { prompt: 'Какую проблему описывает автор?', options: ['Планирование может подменять выполнение работы', 'Приложения не умеют отправлять уведомления', 'Бумага слишком дорогая'], answer: 0, why: 'Organising work and doing work are different things — основной вывод треда.' },
      { prompt: 'Как понимать последний пост?', options: ['Как техническую инструкцию', 'Как ироничное замечание о чрезмерном планировании', 'Как отказ от отдыха'], answer: 1, why: 'Автор шутит о привычке превращать в задачу даже отдых.' },
    ],
  },
  {
    id: 'remote-work', title: 'A shorter commute, a longer day?', category: 'Эссе', level: 'B2', time: 3, color: 'peach', author: 'Work & life / Opinion',
    intro: 'Взвесить преимущества и заметить противопоставление.',
    body: `Working from home removed my daily [[commute]], but it did not automatically improve my [[well-being]]. At first, I used the extra hour to finish more tasks. Then I started checking messages during dinner.\n\nI was always [[available]], yet I often felt [[overwhelmed]]. The problem was not remote work itself. It was the idea that being at home meant I could always do one more thing.\n\nEventually, I learned to [[set boundaries]]. I told my team when I would be online and stopped apologising for replying the next morning.\n\nThere is a [[trade-off]] here. Flexibility is valuable, but it also requires clear agreements. A [[reasonable]] schedule does not look the same for everyone. What matters is that people are [[on the same page]] about what to expect.`,
    questions: [
      { prompt: 'Что автор считает источником проблемы?', options: ['Любую удалённую работу', 'Отсутствие границ рабочего времени', 'Долгую дорогу до офиса'], answer: 1, why: 'Автор прямо отделяет remote work itself от ожидания постоянной доступности.' },
      { prompt: 'Что означает on the same page в конце?', options: ['Открыть одну страницу сайта', 'Работать по одинаковому расписанию', 'Одинаково понимать договорённости'], answer: 2, why: 'Устойчивое выражение описывает общее понимание ожиданий.' },
    ],
  },
  {
    id: 'book-review', title: 'A book where almost nothing happens', category: 'Рецензия', level: 'B2', time: 3, color: 'sage', author: 'Reading room / Books',
    intro: 'Разобрать оценочную лексику и отношение автора.',
    body: `If you need a fast [[plot]], this novel may not be for you. The main [[character]] spends most of the book running a small shop and talking to her neighbours. The [[setting]] is ordinary, and the ending is not a surprise.\n\nYet I found the story [[compelling]]. Small conversations slowly reveal what the characters are afraid to say directly. The humour is [[subtle]], and several scenes stayed with me for days.\n\nSome reviews call the book [[overrated]]. I can see why: the cover promises a mystery, [[whereas]] the story is really about loneliness and [[community]]. Those are different expectations.\n\nWould I [[recommend]] it? Yes, if you enjoy noticing small changes in people rather than waiting for a dramatic twist. Just do not read the publisher's description too carefully: it contains a [[spoiler]].`,
    questions: [
      { prompt: 'Почему автору понравилась книга?', options: ['Из-за неожиданной концовки', 'Из-за увлекательных боевых сцен', 'Из-за тонкого изображения людей и разговоров'], answer: 2, why: 'Автор выделяет small conversations, subtle humour и перемены в людях.' },
      { prompt: 'С чем автор связывает часть негативных отзывов?', options: ['С неверными ожиданиями от обложки', 'С плохим переводом', 'С высокой ценой'], answer: 0, why: 'Обложка обещает mystery, а содержание — о loneliness and community.' },
    ],
  },
  {
    id: 'headline', title: 'What the headline left out', category: 'Новости', level: 'B2', time: 3, color: 'blue', author: 'Media notes / Critical reading',
    intro: 'Отделить наблюдение от слишком смелого вывода.',
    body: `A [[headline]] said that people who read before bed are happier. It sounded like useful advice, so I checked the original [[source]].\n\nThe article described a [[survey]], not an experiment. People reported their own reading habits and how they felt. Readers reported higher satisfaction, but the [[research]] did not show that reading caused the difference.\n\nOther factors might matter. People with more free time may be more [[likely]] to read and less stressed in general. We should [[take into account]] those possibilities before we [[draw a conclusion]].\n\nThis does not mean the results are worthless. It means the [[evidence]] supports a narrower claim than the title suggests. A result can be interesting without proving that one simple [[habit]] will change everyone's life.`,
    questions: [
      { prompt: 'Чего исследование НЕ установило?', options: ['Что участники читали книги', 'Что именно чтение вызвало улучшение самочувствия', 'Что читатели сообщали об удовлетворённости'], answer: 1, why: 'The research did not show that reading caused the difference.' },
      { prompt: 'Как автор оценивает результаты?', options: ['Полностью бессмысленные', 'Доказательство универсального рецепта', 'Интересные, но вывод заголовка слишком широкий'], answer: 2, why: 'Автор не отбрасывает результаты, а ограничивает обоснованный вывод.' },
    ],
  },
  {
    id: 'subscription', title: 'Is the cheaper option really cheaper?', category: 'Повседневное', level: 'B1', time: 2, color: 'sand', author: 'Everyday decisions / Money',
    intro: 'Сравнить варианты и понять условия покупки.',
    body: `I wanted to [[cut back on]] my monthly spending, so I compared two note-taking apps. One had a low monthly [[subscription]]. The other required a single [[purchase]].\n\nThe subscription looked more [[affordable]] at first. But after two years, I would pay much more. There was also a small [[fee]] to export my notes. That was a [[hidden cost]] I had almost missed.\n\nThe second app had fewer features, but it worked offline and let me keep my files. For my needs, it offered better [[value]] [[in the long run]].\n\nBefore paying, I checked the [[refund]] policy and tried the free version. A [[discount]] is only useful if you actually need the product. Otherwise, you are still spending money you could keep.`,
    questions: [
      { prompt: 'Какой скрытый расход заметил автор?', options: ['Плату за экспорт заметок', 'Покупку нового телефона', 'Плату за офлайн-режим'], answer: 0, why: 'В тексте упомянута a small fee to export my notes.' },
      { prompt: 'Почему автор предпочёл второе приложение?', options: ['В нём больше функций', 'Оно бесплатное', 'Оно лучше подходит по потребностям и общей стоимости'], answer: 2, why: 'Автор учитывает офлайн-работу, владение файлами и стоимость за длительный период.' },
    ],
  },
  {
    id: 'new-city', title: 'Learning a city one bus ride at a time', category: 'История', level: 'B1', time: 3, color: 'peach', author: 'Out in the world / Personal story',
    intro: 'Фразовые глаголы в истории о переезде.',
    body: `When I moved [[abroad]], I expected the language to be the hardest part. Instead, I struggled with small things: finding a quiet shop, understanding the bus routes, and deciding where to spend a free afternoon.\n\nIt took a while to [[settle in]]. My first bus trip ended at the wrong [[destination]]. I was [[frustrated]], but a woman at the stop helped me [[figure out]] the route home.\n\nAfter that, I started exploring my [[surroundings]] without planning every minute. I found a park [[nearby]], a library, and a café where the owner remembered my order.\n\nThe city did not suddenly become easy to understand. I just [[gradually]] stopped feeling like a visitor. Knowing how to [[get around]] helped, but recognising a few familiar faces mattered even more.`,
    questions: [
      { prompt: 'Что оказалось неожиданно трудным?', options: ['Бытовая ориентация в новом месте', 'Изучение алфавита', 'Поиск работы'], answer: 0, why: 'Автор перечисляет магазины, автобусные маршруты и досуг.' },
      { prompt: 'Что особенно помогло почувствовать себя своим?', options: ['Строгое расписание', 'Знакомые лица', 'Отказ от поездок на автобусе'], answer: 1, why: 'В конце автор выделяет recognising a few familiar faces.' },
    ],
  },
];
