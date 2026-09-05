// Original texts for reading practice, not excerpts from external publications.
export const advancedReadings = [
  {
    id:'c1-migration', title:'A successful migration, on paper', category:'Документация', level:'C1', time:5, color:'blue', author:'Engineering notes / Decision review',
    intro:'Отдели измеренный результат от предположений и восстанови условия решения.',
    body:`The migration was declared successful because the new service returned the same results as the old one in every automated test. That statement was accurate, but narrower than several readers of the announcement assumed. The tests covered the requests we had chosen to record; they did not establish that every request a customer might send would behave identically.

Having reviewed the test set, the team found that unusually large requests were barely represented. This was not evidence that the new service would fail. It was evidence that an important part of its behaviour remained uncertain. The distinction mattered: postponing the launch indefinitely would have imposed a cost without necessarily reducing that uncertainty.

The team therefore proposed a gradual rollout. A small proportion of requests would reach the new service, while the old one remained available as a [[fallback]]. Error rates would be compared within similar request groups, rather than only across the entire system. An apparently stable average could otherwise conceal a substantial deterioration for a small group of users.

There was a further [[trade-off]]. Keeping two systems available made recovery easier, but it also increased operational complexity. The proposal included a date for reviewing whether the fallback was still needed and assigned responsibility for that decision. Without an owner, a temporary safeguard could quietly become a permanent maintenance burden.

Only after these conditions had been written down did the announcement change. The migration was now described as ready for a limited rollout, subject to monitoring and a tested recovery procedure. The revised wording sounded less impressive. It was also considerably more useful to the people who would have to decide what to do if the results changed.`,
    questions:[
      {prompt:'Чего совпадение результатов в автоматических тестах НЕ доказывало?',options:['Что тесты вообще выполнялись','Что все возможные запросы будут вести себя одинаково','Что старый сервис существовал'],answer:1,why:'Набор охватывал только выбранные запросы; unusually large requests почти отсутствовали.'},
      {prompt:'Почему автор не считает неопределённость достаточной причиной бессрочно откладывать запуск?',options:['Отсрочка сама по себе не обязательно уменьшает неопределённость','Ошибки клиентов не имеют значения','Любое тестирование бесполезно'],answer:0,why:'Текст сопоставляет стоимость бессрочной отсрочки с ограниченным rollout, который позволяет получить новые наблюдения.'},
      {prompt:'Зачем сравнивать похожие группы запросов?',options:['Чтобы исключить всех редких пользователей','Чтобы сделать средний показатель красивее','Чтобы общий средний показатель не скрыл ухудшение в небольшой группе'],answer:2,why:'An apparently stable average could conceal deterioration — агрегирование может скрывать различия.'},
      {prompt:'Какова позиция автора по отношению к менее впечатляющему объявлению?',options:['Оно слабее, потому что не обещает абсолютной надёжности','Оно полезнее, поскольку уточняет условия и действия при изменении результатов','Оно означает, что миграция уже провалилась'],answer:1,why:'Автор ценит точность для принятия решений: limited rollout, monitoring и recovery, а не силу обещания.'},
    ],
    gist:'Passing the chosen tests supports a limited claim. A gradual rollout can reduce uncertainty while preserving a way to recover, provided that monitoring and responsibility are clearly defined. Accurate conditions are more useful than an unconditional success announcement.',
  },
  {
    id:'c1-disagreement', title:'The useful part of a disagreement', category:'Эссе', level:'C1', time:5, color:'peach', author:'Work & communication / Discussion',
    intro:'Пойми намерение собеседника, оговорки и разницу между несогласием и отказом.',
    body:`When a colleague says that a proposal is too complicated, the obvious response is to explain it more carefully. Sometimes that helps. Sometimes it merely produces a longer explanation of a plan the colleague already understands and still considers inappropriate.

The word “complicated” may refer to several different concerns. The implementation might be difficult, the maintenance cost might be high, or the number of decisions imposed on users might be unreasonable. Unless those possibilities are separated, both participants can leave the discussion believing that the other has ignored the central issue.

In one design review, our team spent half an hour defending a feature that would let customers customise every stage of a process. Only when someone asked which decisions customers actually wanted to make did the discussion become productive. The objection had not been to flexibility itself. It had been to making flexibility a prerequisite for completing a routine task.

We eventually kept the advanced controls but provided a default route that required fewer decisions. That [[compromise]] was not proof that both original positions had been equally good. It was a response to a more precise statement of the problem. Had we treated the objection as simple resistance to change, we would probably have shipped the original design and described later confusion as a training problem.

There are limits to this approach. Not every disagreement can be resolved by finding a better question; people may value genuinely different outcomes. Nevertheless, asking what an objection would look like in practice often reveals whether the dispute concerns evidence, priorities or terminology. It also gives the other person something specific to confirm or correct. “What would become harder for the user?” is usually easier to answer than “Why are you against this?”`,
    questions:[
      {prompt:'Почему более подробное объяснение иногда не помогает?',options:['Коллега может понимать предложение, но возражать против его последствий','Сложные идеи невозможно объяснить','Автор советует игнорировать возражения'],answer:0,why:'Автор различает непонимание плана и осознанное несогласие с его уместностью.'},
      {prompt:'Что на самом деле было предметом возражения в примере?',options:['Существование любых расширенных настроек','Необходимость выбирать настройки для выполнения обычной задачи','Право клиентов менять продукт'],answer:1,why:'Flexibility had become a prerequisite: проблема в обязательности сложного выбора.'},
      {prompt:'Что автор подразумевает под воображаемым training problem?',options:['Обучение всегда решает недостатки интерфейса','Команда действительно уже провела успешный тренинг','Команда могла бы ошибочно возложить последствия дизайна на подготовку пользователей'],answer:2,why:'Had we treated… we would probably have… описывает предотвращённый сценарий и возможное самооправдание команды.'},
      {prompt:'Какую оговорку автор делает в конце?',options:['Любое несогласие вызвано терминологией','У людей могут оставаться разные ценности и приоритеты даже после уточнения вопроса','Уточняющие вопросы уместны только в программировании'],answer:1,why:'Not every disagreement…: уточнение помогает, но не гарантирует согласия по желаемому результату.'},
    ],
    gist:'Before defending a proposal, clarify what the objection means in practice. A more precise question can reveal a design problem or a difference in priorities. It may improve the decision without guaranteeing that everyone will agree.',
  },
  {
    id:'c1-measurement', title:'When a target becomes a definition', category:'Новости', level:'C1', time:5, color:'sage', author:'Public life / Critical reading',
    intro:'Проследи, как показатель меняет поведение, и отдели критику метрики от отказа от измерений.',
    body:`A public library introduced a target for the number of books borrowed each month. The intention was straightforward: encourage more people to use the collection. Staff began preparing displays, recommending shorter books and reminding visitors that several items could be borrowed at once. Within a few months, the target had been exceeded.

Whether the policy had achieved its broader purpose was less obvious. Borrowing was easy to count; reading, understanding and discovering an unfamiliar subject were not. A visitor who borrowed one demanding book and discussed it with a librarian might benefit more than someone who carried home five books and opened none of them. The records treated the second visit as a larger success.

This does not mean that borrowing figures were useless, or that staff had acted dishonestly. They had responded to the signal the institution gave them. The difficulty arose when a convenient indicator gradually became the definition of the outcome it had originally been chosen to represent.

The library later added brief visitor interviews and reviewed how different groups used the building. These sources were imperfect too. People willing to be interviewed might not represent those who had stopped visiting, and a pleasant conversation did not establish a lasting benefit. Nevertheless, the additional evidence made it harder to confuse one rising number with an improvement in every aspect of the service.

The revised approach required judgement, which some managers found uncomfortable. A single target had offered a clear answer to the question of whether a branch was doing well. Several incomplete sources produced a less tidy picture. Yet that untidiness reflected the work itself: a library can be a place to borrow, study, seek help or simply read in peace. A useful measure should illuminate those purposes without silently replacing them.`,
    questions:[
      {prompt:'Какой факт установлен в начале текста?',options:['Все посетители стали читать больше','Количество выданных книг превысило целевой показатель','Все сотрудники намеренно искажали отчётность'],answer:1,why:'Установлен рост borrowing, но не reading или understanding.'},
      {prompt:'Зачем сопоставлены один сложный том и пять непрочитанных книг?',options:['Чтобы показать возможное расхождение между количеством и пользой','Чтобы доказать, что короткие книги вредны','Чтобы запретить брать несколько книг'],answer:0,why:'Пример показывает границы показателя, а не устанавливает пользу каждой конкретной книги.'},
      {prompt:'Как автор оценивает интервью с посетителями?',options:['Как безошибочную замену цифрам','Как бесполезную трату времени','Как дополнительный, тоже ограниченный источник сведений'],answer:2,why:'Автор отмечает отбор согласившихся посетителей и невозможность доказать долговременную пользу беседой.'},
      {prompt:'Что лучше всего передаёт вывод автора?',options:['Нужно полностью отказаться от измерений','Один показатель должен определять назначение библиотеки','Измерения должны помогать оценивать цели, сохраняя их сложность'],answer:2,why:'Illuminate those purposes without replacing them: показатель помогает суждению, но не подменяет саму цель.'},
    ],
    gist:'A rise in borrowing does not automatically demonstrate a rise in the benefits a library provides. Combining imperfect sources can support better judgement. The purpose of measurement is to inform the goal, not redefine it around what is easiest to count.',
  },
  {
    id:'c1-review', title:'A narrator who leaves room for doubt', category:'Рецензия', level:'C1', time:5, color:'sand', author:'Reading room / Interpretation',
    intro:'Найди расхождение между словами рассказчика и выводами, которые предлагает рецензент.',
    body:`The narrator of this short novel insists that he has always been a considerate neighbour. He mentions returning lost parcels, keeping the shared hallway clean and offering advice to newcomers. None of these actions sounds objectionable in isolation. What gradually unsettles the reader is the precision with which he records every failure to thank him.

The story contains no dramatic revelation that proves him a liar. Instead, small details complicate his account. A neighbour appears relieved when he is away; a friendly conversation ends as soon as he begins explaining how it ought to have been conducted. He reports these incidents as evidence of other people's poor manners. The reader is invited to consider another possibility without being told exactly what to conclude.

This restraint is the novel's principal strength. Had the author inserted a final confession, the earlier scenes would have become clues leading to a single solution. As written, they remain open to several interpretations. The narrator may be lonely, controlling, painfully insecure, or some mixture of all three. Recognising his limitations does not require dismissing every kind thing he has done.

The approach will not satisfy everyone. Several conversations repeat a pattern, and the narrow viewpoint leaves other characters less fully developed. Those weaknesses are not cancelled out by the subtlety of the narration. They do, however, seem connected to the book's central interest: the gap between a person's description of their intentions and the experience of the people around them.

I would recommend the novel to readers who enjoy revising an impression rather than waiting for a verdict. Its ambiguity is productive when it makes us weigh details more carefully. It would be less convincing if “anything is possible” became an excuse to disregard the evidence the story actually gives us.`,
    questions:[
      {prompt:'Что постепенно заставляет сомневаться в самооценке рассказчика?',options:['Его внимание к каждой неполученной благодарности','Признание в подделке посылок','Прямое заявление автора, что он злодей'],answer:0,why:'Precision about every failure to thank him осложняет образ бескорыстного соседа.'},
      {prompt:'Зачем упомянуто возможное финальное признание?',options:['Оно действительно происходит в последней главе','Чтобы объяснить, как однозначная разгадка изменила бы смысл ранних сцен','Чтобы доказать, что автор забыл дописать концовку'],answer:1,why:'Had the author inserted… — нереализованная альтернатива, сопоставленная с нынешней неоднозначностью.'},
      {prompt:'Как рецензент относится к недостаткам книги?',options:['Отрицает их существование','Считает их доказательством полной неудачи','Признаёт их, даже считая повествование тонким'],answer:2,why:'Those weaknesses are not cancelled out: достоинство не отменяет повторяемость и ограниченность других персонажей.'},
      {prompt:'Какая интерпретация НЕ соответствует позиции рецензента?',options:['Разные объяснения нужно соотносить с деталями текста','При неоднозначности любое мнение одинаково обоснованно','Рассказчик может сочетать заботу и неприятные черты'],answer:1,why:'Финал прямо отвергает anything is possible как оправдание игнорирования свидетельств текста.'},
    ],
    gist:'The novel complicates a self-flattering account through small details rather than a final verdict. The reviewer values this ambiguity while acknowledging repetition and limited characterisation. Interpretations should remain answerable to evidence, not become equally valid by default.',
  },
];
