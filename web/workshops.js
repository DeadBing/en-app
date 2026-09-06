export const workshops = [
  {id:'friendly-plan',level:'B2',title:'Договориться с другом',audience:'Друг, который впервые приезжает в твой город',formal:false,min:100,max:170,
    prompt:'Your friend has one free afternoon and a limited budget. Suggest a plan, explain why it suits them and offer an alternative if it rains.',
    criteria:['Предложи конкретный план и объясни, почему он подходит другу.','Учти ограниченный бюджет и время.','Предложи вариант на случай дождя и задай уточняющий вопрос.'],
    model:`Hi Alex,

It will be great to see you on Saturday! I suggest meeting at the station at one and walking to the river. There is a small food market on the way, so we can get something inexpensive for lunch. You mentioned that you enjoy taking photos, and the old bridge has a lovely view.

If it rains, we could visit the local museum instead. Entry is free, and it is only ten minutes from the station. We would still have time for a coffee before your train home.

Does that sound good? Let me know what time your train arrives and whether there is anything you would particularly like to see.

See you soon!`,
    notes:'Разговорный тон, причины выбора и запасной план. Вопрос в конце помогает согласовать реальные детали.'},
  {id:'work-deadline',level:'B2',title:'Обсудить срок без конфликта',audience:'Коллега, ожидающий готовый отчёт',formal:true,min:100,max:180,
    prompt:'A colleague expects your report tomorrow. One data source is unavailable. Explain the effect, propose a useful interim delivery and agree on the next update without inventing a recovery date.',
    criteria:['Объясни конкретное препятствие и его влияние на результат.','Предложи полезный промежуточный результат с датой.','Укажи время следующей связи, не обещая неизвестное.'],
    model:`Hello Maya,

I wanted to update you on the report due tomorrow. The sales database is currently unavailable, so I cannot verify the figures for the final section. The earlier sections are complete, but sending the whole report as final would give a misleading impression of its accuracy.

I can send you a draft by noon tomorrow, with the unverified figures clearly marked. This should allow you to review the structure and prepare your questions while we wait for access to return.

I do not yet have a confirmed recovery time. I will check with the support team and update you by three tomorrow, even if there is no change. Would the draft be useful for your meeting?

Best wishes,
Sam`,
    notes:'Факт, влияние, доступное действие и срок связи разделены. Автор не подменяет неизвестный срок восстановления обещанием.'},
  {id:'support-report',level:'B2',title:'Помочь поддержке воспроизвести ошибку',audience:'Сотрудник поддержки приложения',formal:true,min:100,max:180,
    prompt:'On your Android phone, editing a saved note and tapping Save closes the app. New notes save normally. Write a support request with steps, expected and actual behaviour, and a question about a workaround. Use fictional device details.',
    criteria:['Укажи контекст и последовательность воспроизведения.','Различи ожидаемый результат, фактический и работающий сценарий.','Сформулируй просьбу без предположений о причине сбоя.'],
    model:`Hello,

I am having a problem editing saved notes in version 2.4 of your Android app. I am using a fictional Model A phone with Android 14 for this example.

To reproduce the issue, I open an existing note, add a sentence and tap Save. I expect the updated note to remain open. Instead, the app closes, and the new sentence is missing when I open it again. I have tried this with two different saved notes and obtained the same result.

Creating and saving a new note still works normally. I have not identified what causes the difference. Is there a temporary way to edit existing notes without losing changes? Please let me know what additional information would help your investigation.

Thank you.`,
    notes:'Шаги и наблюдения помогают проверке; предположение о внутренней причине не выдаётся за факт.'},
  {id:'service-complaint',level:'B2',title:'Добиться решения проблемы с заказом',audience:'Служба поддержки магазина',formal:true,min:100,max:180,
    prompt:'You ordered a desk lamp, but the parcel contained a different model. The packaging is undamaged. Ask for the correct item or a refund and clarify who arranges the return. Invent an order reference.',
    criteria:['Опиши заказ и наблюдаемое несоответствие без обвинений.','Назови желаемое решение и приемлемую альтернативу.','Уточни организацию возврата и следующий шаг.'],
    model:`Hello,

I am writing about order RW-204, which arrived yesterday. I ordered the adjustable desk lamp shown in my confirmation email, but the parcel contained the smaller fixed model. The packaging was undamaged, and the label displayed my order reference.

I would prefer to receive the model I ordered. If it is no longer available, please arrange a refund instead. I can provide photographs of the item and the order confirmation if needed.

Could you also explain how the incorrect item should be returned? Please confirm whether you will supply a prepaid return label or arrange collection. I have kept the original packaging and can make the parcel available on a weekday.

Thank you for your help. I look forward to hearing what the next step will be.`,
    notes:'Спокойный тон совместим с ясным требованием. Автор уточняет детали, необходимые для исполнения решения.'},
  {id:'balanced-proposal',level:'C1',title:'Предложить изменение с условиями',audience:'Руководитель небольшой команды',formal:true,min:140,max:230,
    prompt:'Your team wants fewer interruptions. Propose two meeting-free mornings per week. Discuss a likely benefit, a disadvantage for another group, an exception and how a four-week trial should be reviewed.',
    criteria:['Свяжи предлагаемое изменение с конкретной проблемой.','Рассмотри содержательный недостаток и разумное исключение.','Задай ограниченный эксперимент и критерии пересмотра.'],
    model:`I propose reserving Tuesday and Thursday mornings for individual work during a four-week trial. Several tasks require sustained attention, and the current pattern of short meetings makes it difficult to complete them without repeated restarts.

The main benefit would be greater predictability: colleagues could plan demanding work around a period that is usually protected. However, the arrangement could inconvenience people who depend on quick decisions from another team. It should therefore include an exception for urgent customer incidents and a clear way to request a decision that cannot wait.

The trial should be reviewed using both completed work and feedback from colleagues affected by slower responses. Counting cancelled meetings alone would not show whether the change was useful. We should also check whether meetings simply moved into already crowded afternoons.

If the benefits are uneven, we could keep one protected morning or vary the schedule by team. The proposal is a test of a working pattern, rather than a permanent rule agreed in advance.`,
    notes:'Аргумент учитывает чужие ограничения. Критерии оценивают результат работы, а не только число отменённых встреч.'},
  {id:'reasoned-argument',level:'C1',title:'Аргументировать без категоричности',audience:'Читатели городского дискуссионного сайта',formal:false,min:140,max:230,
    prompt:'Should all local services become digital by default? Present your position, develop a counterargument fairly and explain which exceptions or conditions would change your recommendation.',
    criteria:['Сформулируй позицию и развей аргумент с примером.','Передай сильный встречный довод без карикатуры.','Уточни условия рекомендации и сделай связный вывод.'],
    model:`Making local services digital by default could save residents time, provided that “default” does not become another word for “compulsory”. Booking an appointment online is convenient for someone who cannot call during office hours. It can also reduce repetitive administrative work.

Supporters of a fully digital system reasonably point out that maintaining several channels costs money. If almost everyone uses the website, keeping an alternative open may appear inefficient. That argument deserves attention, but the remaining users may be precisely those who need the most assistance. A small number of visits does not necessarily imply a small social benefit.

I would support a digital default for routine requests if residents could still obtain practical help by phone or in person. The council should assess failed attempts and abandoned applications, not just successfully completed forms.

Where a service involves urgent needs or difficult personal decisions, a more direct route may remain essential. Efficiency matters, but it should be measured partly by whether people can actually obtain the service.`,
    notes:'Встречный довод изложен добросовестно. Вывод ограничен условиями; цифровое удобство не объявлено универсальным.'},
  {id:'source-synthesis',level:'C1',title:'Свести два источника в одну рекомендацию',audience:'Совет, принимающий решение о библиотеке',formal:true,min:160,max:260,sourceIds:['c1-library-pilot','c1-library-access'],
    prompt:'Read Sources A and B. Write a briefing that identifies their shared position, explains a meaningful difference and recommends how the council should evaluate the pilot. Paraphrase and attribute the ideas; do not invent results.',
    criteria:['Передай общую позицию обоих авторов своими словами.','Сохрани существенное различие и укажи, какому источнику принадлежит идея.','Сформулируй рекомендацию, не подменяя предложение результатами эксперимента.'],
    model:`Both sources support trying longer evening hours, but neither treats a pilot as a commitment to permanent expansion. Source A focuses on designing a limited experiment whose findings can inform a specific decision. Source B places greater emphasis on the barriers that attendance figures may fail to reveal.

The difference is therefore mainly about what useful evidence should include. Source A recommends collecting information from visitors and checking that daytime service remains reliable. Source B adds that people who stay away should also be consulted, since transport or caring responsibilities may prevent attendance despite genuine interest. It also asks the council to compare evening opening with alternative uses of a permanent budget.

The council should retain the proposed twelve-week period and temporary staffing budget while broadening the review to include non-users. Attendance, costs and the experience of daytime visitors would provide a starting point, but the final report should distinguish lack of demand from practical barriers.

A decision on permanent funding should then consider other ways to improve access. Neither source provides results from an actual trial, so claims that the change has already succeeded would be premature.`,
    notes:'Общее и различие объединены в аргумент, а не пересказаны двумя изолированными блоками. Источникам не приписаны несуществующие результаты.'},
  {id:'reader-focused-review',level:'C1',title:'Написать полезную рецензию',audience:'Читатель, выбирающий приложение для заметок',formal:false,min:140,max:230,
    prompt:'Review a fictional notes app for someone who writes on a phone and shares notes with colleagues. Explain a strength and a limitation with examples, then say who would benefit most. Separate your observations from assumptions about other users.',
    criteria:['Свяжи оценку с потребностями конкретного читателя.','Подкрепи преимущество и недостаток наблюдениями или примерами.','Дай условную рекомендацию, различая свой опыт и предположения.'],
    model:`Pocket Notes is a fictional app with a clear strength: getting a short thought onto the screen takes very little effort. In my example trial, I could open a new note from the home screen and save it without choosing a folder first. That made it useful for ideas captured between other tasks.

Sharing was less convincing. Sending a copy to a colleague was straightforward, but later edits did not appear in the copy they had already received. This was manageable for a shopping list, but it could cause confusion when several people were working from changing instructions.

I would recommend the app primarily to people who write for themselves and occasionally share a finished note. Someone who expects a continuously updated team document would probably need a different tool. That judgement concerns the workflow described here; it does not establish that every user would experience the same difficulty.

Before relying on it for work, I would suggest trying the sharing process with one colleague and checking how updates are handled.`,
    notes:'Рекомендация объясняет, кому продукт подходит и почему. Пример личного использования не превращается в универсальный вывод.'},
];

// Deliberately narrow checks. These observations cannot grade meaning or CEFR.
export function reviewWriting(text,task) {
  const words = text.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || [];
  const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).length : 0;
  const observations = [];
  const patterns = [
    [/\bdiscuss(?:ed|ing|es)?\s+about\b/gi,'После discuss обычно не нужен about: discuss the problem.'],
    [/\bdepend(?:s|ed|ing)?\s+of\b/gi,'Проверь предлог: depend on.'],
    [/\b(?:informations|advices|equipments)\b/gi,'В обычном значении information, advice и equipment неисчисляемые: без -s.'],
    [/\blook(?:ing)?\s+forward\s+to\s+(?:meet|hear|see)\b/gi,'После look forward to нужна форма -ing: hearing, meeting, seeing.'],
    [/\bmore\s+(?:better|easier|cheaper|faster)\b/gi,'Сравнительная форма уже выражена: обычно достаточно better, easier, cheaper или faster.'],
  ];
  for (const [pattern,advice] of patterns) for (const match of text.matchAll(pattern)) observations.push({excerpt:match[0],advice});
  if (task.formal) for (const match of text.matchAll(/\b(?:gonna|wanna|ASAP|stuff)\b/gi)) observations.push({excerpt:match[0],advice:'Проверь уместность для этого адресата: возможно, точное или более нейтральное выражение подойдёт лучше.'});
  if (/[А-Яа-яЁё]/.test(text)) observations.push({excerpt:'Кириллица в черновике',advice:'Проверь, все ли мысли уже сформулированы по-английски. Имена и цитаты могут быть исключением.'});
  return {words:words.length,paragraphs,inRange:words.length>=task.min && words.length<=task.max,observations};
}
