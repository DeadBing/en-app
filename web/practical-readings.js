// Original contrasting sources, also used by the synthesis writing workshop.
export const practicalReadings = [
  {
    id:'c1-library-pilot',title:'A longer evening, a smaller experiment',category:'Эссе',level:'C1',time:6,color:'blue',author:'Community decisions / Source A',
    intro:'Разбери предложение об изменении часов работы библиотеки: что проверит эксперимент, а чего он не докажет?',
    body:`When the council asked residents what they wanted from the library, longer evening hours appeared near the top of the list. The obvious response was to keep the building open later. Yet the survey established a preference, not how often people would actually visit. That distinction should shape the next step without becoming an excuse for doing nothing.

The proposed pilot would open the library until nine on two weekdays for twelve weeks. It would use a temporary budget for additional staff rather than shorten existing daytime hours. Visitors would still be able to borrow books, use computers and ask for help. The proposal would therefore test an ordinary library service at a different time, rather than an evening room in which little assistance was available.

Supporters expect the change to benefit people whose working hours overlap with the current timetable. They also mention students who lack a quiet place at home. These are plausible reasons for trying the idea, but neither group is uniform. Some workers finish late, others have caring responsibilities, and a quiet building is of limited use to someone who cannot get home afterwards. Recording only the number of visitors would leave those differences unexplored.

The council should therefore collect a small amount of optional information about why people came, alongside attendance and staffing costs. It should also ask daytime visitors whether the pilot affected their experience. More evening visits would be less encouraging if they came at the expense of unreliable service during the day. The aim is to increase useful access, not merely move an impressive total from one column to another.

A successful pilot would justify discussing a permanent budget. It would not automatically justify opening every branch late, since travel options and local demand vary. Nor would a disappointing first month settle the issue: residents need time to learn that the service exists. The review should consider the whole twelve weeks and explain any unusual events that affected attendance.

There is a risk in demanding perfect evidence before a modest change can be attempted. There is also a risk in treating every trial as a promise of permanent expansion. A limited experiment with published criteria offers a way between those positions. Residents deserve to know both what the council hopes to learn and which decision the findings will actually inform.`,
    questions:[
      {prompt:'Что, по мнению автора, показал опрос?',options:['Предпочтение жителей, но не будущую частоту посещений','Гарантированный спрос каждую неделю','Необходимость сразу открыть все филиалы допоздна'],answer:0,why:'Первый абзац прямо различает preference и actual visits.'},
      {prompt:'Почему важно сохранить помощь сотрудников вечером?',options:['Чтобы отказаться от дневного обслуживания','Чтобы проверить полноценную услугу в другое время','Чтобы ограничить выдачу книг'],answer:1,why:'Пилот сравнивает обычную библиотечную услугу в другое время, а не просто доступ в помещение.'},
      {prompt:'Какую опасность скрывает рост числа вечерних посещений?',options:['Он всегда означает рост затрат на транспорт','Он доказывает бесполезность дневного обслуживания','Он может сопровождаться ухудшением дневного сервиса или переносом посещений'],answer:2,why:'Автор просит выяснить, не получен ли вечерний рост at the expense of дневного обслуживания.'},
      {prompt:'Какой вывод соответствует позиции автора?',options:['Ограниченный пилот полезен при заранее понятных критериях и границах вывода','Для любого эксперимента сначала нужны безупречные доказательства','Любой пилот обязывает сохранить услугу навсегда'],answer:0,why:'Последний абзац поддерживает эксперимент между требованием идеальной уверенности и обещанием постоянного расширения.'},
    ],
    gist:'Source A supports a twelve-week evening pilot funded without reducing daytime hours. It proposes measuring useful access, service quality and costs, and limits the conclusions that can be drawn about other branches or permanent funding.',
  },
  {
    id:'c1-library-access',title:'Open doors are only part of access',category:'Эссе',level:'C1',time:6,color:'peach',author:'Community decisions / Source B',
    intro:'Отдели возражение против способа проверки от отказа от самой идеи. Сопоставь текст с Source A.',
    body:`The library's proposed evening pilot is welcome news for residents who cannot visit during working hours. Nevertheless, an open door is not the same thing as an accessible service. Before celebrating longer hours, the council should consider who will remain unable to use them and whether the trial will make those people visible.

Our neighbourhood group spoke to residents who depend on the bus route serving the library. On two evenings each week, the last convenient return bus leaves shortly after seven. A nine o'clock closing time may help someone who drives, while giving a bus passenger little additional time. These conversations do not establish how common the problem is across the town. They do establish that attendance at the pilot cannot be interpreted as a simple measure of desire to visit.

There is a similar issue with the word “quiet”. Students often ask for quiet study space, but some parents can only visit with young children. Providing one undivided room may leave both groups dissatisfied. The building already has a small meeting room that could be used for group activities, although doing so would reduce availability for existing bookings. An apparently straightforward extension of hours involves choices about the service itself.

We are not proposing that the council solve every transport and space problem before trying anything. Instead, the pilot should include a short consultation with people who do not attend, using paper forms at local shops as well as an online form. Asking only visitors why they came is useful, but it cannot explain why others stayed away. Questions should distinguish lack of interest from practical barriers, and respondents should be able to leave them unanswered.

The temporary funding is a sensible safeguard for daytime services. However, a permanent decision will involve competing uses of money. If the same budget could provide an earlier weekend opening or more reliable computer support, the relevant question is which option improves access most for the people currently excluded. A successful evening trial would inform that comparison, rather than remove the need to make it.

We therefore support the pilot, subject to a broader review of access and a clear account of alternatives. Low attendance should not automatically be described as indifference, just as high attendance should not automatically establish that evening hours are the best use of the permanent budget. A public explanation of those distinctions would make the eventual decision easier to trust, even for residents who preferred a different outcome.`,
    questions:[
      {prompt:'Какую оговорку автор делает относительно разговоров с жителями?',options:['Они доказывают проблему во всём городе','Они выявляют возможный барьер, но не измеряют его распространённость','Они не имеют отношения к посещаемости'],answer:1,why:'Do not establish how common the problem is ограничивает вывод из бесед.'},
      {prompt:'Почему автор предлагает опрашивать непосетителей?',options:['Чтобы заменить все данные о посетителях','Чтобы заранее получить отрицательный ответ','Чтобы различить отсутствие интереса и препятствия к посещению'],answer:2,why:'Опрос посетителей не объясняет, почему другие остались дома: lack of interest отличается от practical barriers.'},
      {prompt:'Что демонстрирует пример с отдельной комнатой?',options:['Даже расширение часов включает компромиссы между разными услугами','Все студенты против семей','Любое изменение здания невозможно'],answer:0,why:'Разделение пространства может помочь двум группам, но сократить доступность существующих бронирований.'},
      {prompt:'В чём позиция Source B отличается от простого отказа от пилота?',options:['Автор требует сначала решить все проблемы города','Автор поддерживает пилот с более широким анализом барьеров и альтернатив','Автор считает посещаемость единственным критерием'],answer:1,why:'We therefore support the pilot, subject to… — поддержка с условиями, а не отрицание самой идеи.'},
    ],
    gist:'Source B supports the pilot conditionally. It highlights transport and space barriers, recommends consulting non-users and asks the council to compare permanent evening funding with alternative ways of improving access.',
  },
];
