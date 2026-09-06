// Frequent phrases: meanings belong to the complete expression, not just its verb.
const rows = `
tech|run a test|провести тест|B1|Let's run a test before we publish the update.|Давай проведём тест перед публикацией обновления.|Can you run a test with a larger file?|Можешь провести тест с файлом побольше?
work|run a business|управлять бизнесом|B2|It takes more than a good idea to run a business.|Чтобы управлять бизнесом, одной хорошей идеи недостаточно.|They run a business together from home.|Они вместе управляют бизнесом из дома.
thoughts|get the point|понять суть|B2|I get the point, but I still disagree.|Я понимаю суть, но всё ещё не согласен.|Did you get the point of her story?|Ты понял суть её истории?
thoughts|make a point|высказать мысль; привести довод|B2|Let me make a point before we vote.|Позволь мне высказать мысль перед голосованием.|You can make a point without raising your voice.|Можно привести довод, не повышая голоса.
everyday|at some point|в какой-то момент|B1|We all need help at some point.|В какой-то момент всем нам нужна помощь.|At some point, we will have to replace the roof.|В какой-то момент нам придётся заменить крышу.
everyday|take place|происходить; состояться|B1|The meeting will take place online.|Встреча состоится онлайн.|Where does the story take place?|Где происходит действие истории?
work|take responsibility|взять на себя ответственность|B2|We need someone to take responsibility for the decision.|Нам нужен кто-то, кто возьмёт ответственность за решение.|I will take responsibility if anything goes wrong.|Я возьму на себя ответственность, если что-то пойдёт не так.
everyday|make progress|добиваться прогресса; продвигаться|B1|You can make progress without studying for hours.|Можно продвигаться вперёд, не занимаясь часами.|We need better tools to make progress on this project.|Нам нужны инструменты получше, чтобы продвинуться в этом проекте.
society|make a difference|повлиять; изменить что-то к лучшему|B2|Small changes can make a difference.|Небольшие изменения могут повлиять на результат.|Would another volunteer make a difference?|Помог бы ещё один доброволец изменить ситуацию?
everyday|make up for|компенсировать|B2|I will cook tonight to make up for missing your birthday.|Сегодня я приготовлю ужин, чтобы загладить то, что пропустил твой день рождения.|A discount cannot make up for poor service.|Скидка не может компенсировать плохое обслуживание.
work|raise a concern|высказать опасение|B2|May I raise a concern about the schedule?|Можно высказать опасение по поводу графика?|You should be able to raise a concern without being blamed.|У тебя должна быть возможность высказать опасение без обвинений в свой адрес.
everyday|raise a child|растить ребёнка|B1|It is expensive to raise a child in this city.|Растить ребёнка в этом городе дорого.|They want to raise a child near their families.|Они хотят растить ребёнка рядом со своими семьями.
money|raise money|собирать деньги|B1|We hope to raise money for the library.|Мы надеемся собрать деньги для библиотеки.|The concert will help raise money for new equipment.|Концерт поможет собрать деньги на новое оборудование.
thoughts|raise a question|поднять вопрос|B2|The results raise a question about our method.|Результаты поднимают вопрос о нашем методе.|Can I raise a question that we have not discussed?|Можно поднять вопрос, который мы ещё не обсуждали?
tech|set up|настроить; организовать|B1|Can you set up an account for me?|Можешь настроить для меня учётную запись?|We should set up a meeting with the new team.|Нам стоит организовать встречу с новой командой.
money|set aside|отложить; выделить про запас|B2|Try to set aside a little money each month.|Старайся каждый месяц откладывать немного денег.|We need to set aside an hour for questions.|Нам нужно выделить час на вопросы.
work|set a deadline|назначить крайний срок|B2|Let's set a deadline that everyone can meet.|Давай назначим срок, в который все смогут уложиться.|Before you set a deadline, check how much work remains.|Прежде чем назначать срок, проверь, сколько работы осталось.
society|set an example|подавать пример|B2|Managers should set an example by taking breaks.|Руководителям стоит подавать пример и делать перерывы.|You can set an example without telling others what to do.|Можно подавать пример, не указывая другим, что делать.
everyday|keep in touch|поддерживать связь|B1|Let's keep in touch after the course.|Давай поддерживать связь после курса.|How do you keep in touch with your old friends?|Как ты поддерживаешь связь со старыми друзьями?
everyday|keep an eye on|присматривать за; следить за|B2|Could you keep an eye on my bag?|Не мог бы ты присмотреть за моей сумкой?|We need to keep an eye on the delivery status.|Нам нужно следить за статусом доставки.
work|turn down|отклонить; убавить|B2|Why did you turn down the offer?|Почему ты отклонил предложение?|Could you turn down the music?|Не мог бы ты сделать музыку потише?
everyday|turn up|появиться; прибавить|B2|She might turn up later.|Возможно, она появится позже.|Please turn up the heating.|Пожалуйста, прибавь отопление.
everyday|turn into|превратиться в|B2|A small argument can turn into a serious conflict.|Небольшой спор может превратиться в серьёзный конфликт.|They want to turn the garage into a studio.|Они хотят превратить гараж в студию.
everyday|work out|разобраться; тренироваться|B2|We need to work out why the price changed.|Нам нужно разобраться, почему изменилась цена.|I prefer to work out before breakfast.|Я предпочитаю тренироваться до завтрака.
work|work on|работать над|B1|I need to work on my writing.|Мне нужно поработать над своим письмом.|Can we work on this together?|Можем поработать над этим вместе?
work|work for|работать на; устраивать кого-то|B1|Would Tuesday work for you?|Тебе подошёл бы вторник?|I work for a small design company.|Я работаю в небольшой дизайнерской компании.
tech|work around|обойти затруднение; приспособиться к|B2|We can work around the bug until the update arrives.|Мы можем обходить эту ошибку до выхода обновления.|We will have to work around her schedule.|Нам придётся подстроиться под её график.
work|put together|собрать; составить|B2|Could you put together a short report?|Не мог бы ты составить короткий отчёт?|The instructions explain how to put together the desk.|Инструкция объясняет, как собрать стол.
work|come to an agreement|прийти к соглашению|B2|We need to come to an agreement on the price.|Нам нужно прийти к соглашению о цене.|They managed to come to an agreement after a long discussion.|После долгого обсуждения им удалось договориться.
everyday|get around to|наконец найти время для|B2|I never get around to sorting these photos.|Я никак не нахожу времени разобрать эти фотографии.|When will you get around to reading the report?|Когда ты наконец найдёшь время прочитать отчёт?
society|get away with|избежать последствий; остаться безнаказанным за|B2|You cannot get away with blaming someone else.|Тебе не удастся безнаказанно свалить вину на другого.|How did they get away with charging that much?|Как им сошло с рук то, что они взяли столько денег?
work|get back to|снова связаться с; вернуться к|B1|I will get back to you with an answer tomorrow.|Завтра я снова свяжусь с тобой и дам ответ.|Let's get back to the main question.|Давай вернёмся к главному вопросу.
everyday|get used to|привыкнуть к|B1|It takes time to get used to living alone.|Чтобы привыкнуть жить одному, нужно время.|You will get used to the new layout.|Ты привыкнешь к новому расположению элементов.
`;
export const practicalWords = rows.trim().split('\n').map(row => {
  const [topic,term,ru,level,example,translation,second,secondRu] = row.split('|');
  return {id:`${topic}:${term}`,topic,term,ru,level,example,translation,examples:[{example,translation},{example:second,translation:secondRu}]};
});
export const phraseFamilies = [
  ['run','run a test','run a business','run out of','run into'],
  ['point','get the point','make a point','point out','at some point'],
  ['take','take a break','take place','take into account','take responsibility'],
  ['make','make sense','make progress','make a difference','make up for'],
  ['raise','raise a concern','raise a child','raise money','raise a question'],
  ['set','set up','set aside','set a deadline','set an example'],
  ['keep','keep in touch','keep track of','keep an eye on','keep in mind'],
  ['turn','turn down','turn up','turn out','turn into'],
  ['work','work out','work on','work for','work around'],
  ['put','put off','put up with','put forward','put together'],
  ['come','come across','come up with','come to an agreement','come in handy'],
  ['get','get around to','get away with','get back to','get used to'],
];
