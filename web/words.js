import { expandedWords } from './vocabulary-expansion.js';
import { practicalWords } from './practical-vocabulary.js';
// Original teaching examples. Topic IDs and terms form stable progress keys.
export const topics = [
  { id: 'thoughts', name: 'Мысли и аргументы', en: 'Make your point', icon: 'message', color: 'sage', description: 'Понимать позицию автора и выражать свою' },
  { id: 'internet', name: 'Reddit & X', en: 'Between the lines', icon: 'hash', color: 'peach', description: 'Комментарии, сокращения и живые обсуждения' },
  { id: 'everyday', name: 'Каждый день', en: 'Life happens', icon: 'sun', color: 'sand', description: 'Привычки, планы и бытовые ситуации' },
  { id: 'work', name: 'Работа и общение', en: 'On the same page', icon: 'briefcase', color: 'blue', description: 'Переписка, проекты и работа в команде' },
  { id: 'tech', name: 'Технический английский', en: 'Under the hood', icon: 'code', color: 'sage', description: 'Документация, ошибки и инструкции' },
  { id: 'feelings', name: 'Люди и эмоции', en: 'How it feels', icon: 'heart', color: 'peach', description: 'Отношения, характер и оттенки чувств' },
  { id: 'society', name: 'Общество и новости', en: 'The bigger picture', icon: 'globe', color: 'blue', description: 'События, исследования и общественные вопросы' },
  { id: 'culture', name: 'Книги и культура', en: 'A different perspective', icon: 'book', color: 'sand', description: 'Рецензии, сюжеты и впечатления' },
  { id: 'money', name: 'Деньги и выбор', en: 'Worth it?', icon: 'wallet', color: 'sage', description: 'Покупки, расходы и сравнение вариантов' },
  { id: 'health', name: 'Здоровье и привычки', en: 'A little better', icon: 'leaf', color: 'peach', description: 'Самочувствие, отдых и образ жизни' },
  { id: 'world', name: 'Мир вокруг', en: 'Out in the world', icon: 'compass', color: 'blue', description: 'Поездки, города, природа и перемены' },
  { id: 'connections', name: 'Связки и фразовые глаголы', en: 'Connect the dots', icon: 'link', color: 'sand', description: 'Связывать идеи и понимать устойчивые обороты' },
];

const groups = {
thoughts: `
claim|утверждение|B1|That is a bold claim.|Это смелое утверждение.
evidence|доказательства|B1|There is no evidence to support the story.|Нет доказательств в поддержку этой истории.
assume|предполагать без проверки|B1|Do not assume everyone agrees.|Не предполагай, что все согласны.
point out|обратить внимание на|B1|Let me point out one small detail.|Позволь обратить внимание на одну небольшую деталь.
reasonable|разумный; обоснованный|B1|That sounds like a reasonable explanation.|Это звучит как разумное объяснение.
misleading|вводящий в заблуждение|B2|The title is misleading.|Заголовок вводит в заблуждение.
take into account|принимать во внимание|B2|We need to take into account the cost.|Нам нужно принять во внимание стоимость.
perspective|точка зрения|B2|Try to see it from her perspective.|Попробуй взглянуть на это с её точки зрения.
disagree|не соглашаться|B1|I disagree with the conclusion.|Я не согласен с выводом.
likely|вероятный; вероятно|B1|The update is likely to arrive tomorrow.|Обновление, вероятно, выйдет завтра.
unlikely|маловероятный|B1|That outcome seems unlikely.|Такой исход кажется маловероятным.
relevant|относящийся к делу|B2|Please share only relevant details.|Пожалуйста, делись только относящимися к делу подробностями.
accurate|точный; достоверный|B2|Is this description accurate?|Это описание точное?
in my view|на мой взгляд|B1|The plan, in my view, needs more work.|План, на мой взгляд, требует доработки.
draw a conclusion|сделать вывод|B2|It is too early to draw a conclusion.|Ещё слишком рано делать вывод.
make sense|иметь смысл; быть понятным|B1|Does this explanation make sense?|Это объяснение понятно?
`,
internet: `
thread|ветка обсуждения|B1|I found the answer in this thread.|Я нашёл ответ в этой ветке обсуждения.
take|мнение; трактовка|B2|That is an interesting take on the issue.|Это интересный взгляд на проблему.
relatable|знакомый по собственному опыту|B2|This post is painfully relatable.|Этот пост до боли знаком по собственному опыту.
rant|эмоциональная тирада|B2|Sorry for the rant about the update.|Извините за эмоциональную тираду об обновлении.
apparently|судя по всему|B1|The feature is apparently still in testing.|Судя по всему, функцию всё ещё тестируют.
overrated|переоценённый|B2|I think this show is overrated.|Думаю, этот сериал переоценён.
underrated|недооценённый|B2|This is an underrated feature.|Это недооценённая функция.
genuinely|искренне; действительно|B2|I am genuinely curious about your answer.|Мне действительно любопытен твой ответ.
fair enough|справедливо; принимается|B1|That seems fair enough to me.|Мне это кажется вполне справедливым.
IMO|по моему мнению; неформальное сокращение|B1|IMO, the old design was easier to use.|По моему мнению, старым дизайном было проще пользоваться.
TBH|если честно; неформальное сокращение|B1|TBH, I have never tried it.|Если честно, я никогда это не пробовал.
TIL|сегодня я узнал; неформальное сокращение|B1|TIL that this shortcut exists.|Сегодня я узнал, что такое сочетание клавиш существует.
FWIW|если это имеет значение; неформальное сокращение|B2|FWIW, it works on my phone.|Если это имеет значение, на моём телефоне это работает.
OP|автор исходного поста|B1|The OP has already answered this question.|Автор исходного поста уже ответил на этот вопрос.
sarcasm|сарказм|B2|It is hard to notice sarcasm in a short message.|В коротком сообщении трудно заметить сарказм.
out of context|вне контекста|B2|That quote was taken out of context.|Эту цитату вырвали из контекста.
`,
everyday: `
afford|позволить себе по средствам|B1|I cannot afford a new laptop yet.|Пока я не могу позволить себе новый ноутбук.
avoid|избегать|B1|I try to avoid busy shops.|Я стараюсь избегать переполненных магазинов.
bother|беспокоить; утруждаться|B1|Does the noise bother you?|Тебя беспокоит шум?
convenient|удобный|B1|Is Friday convenient for you?|Тебе удобно в пятницу?
effort|усилие|B1|Learning a language takes effort.|Изучение языка требует усилий.
habit|привычка|B1|Reading before bed is a useful habit.|Чтение перед сном — полезная привычка.
manage to|суметь|B1|Did you manage to fix it?|Тебе удалось это починить?
notice|замечать|B1|Did you notice the new sign?|Ты заметил новую вывеску?
otherwise|иначе|B1|Leave now; otherwise, you will be late.|Выходи сейчас, иначе опоздаешь.
owe|быть должным|B1|I owe you an explanation.|Я должен тебе объяснение.
prefer|предпочитать|B1|I prefer quiet places.|Я предпочитаю тихие места.
remind|напоминать|B1|Please remind me to call her.|Пожалуйста, напомни мне ей позвонить.
run out of|исчерпать запас; остаться без|B1|We might run out of time.|У нас может закончиться время.
sort out|разобраться с; уладить|B1|I need to sort out my schedule.|Мне нужно разобраться со своим расписанием.
worthwhile|стоящий затраченных усилий|B2|The long walk was worthwhile.|Долгая прогулка стоила затраченных усилий.
roughly|примерно|B1|It takes roughly twenty minutes.|Это занимает примерно двадцать минут.
`,
work: `
deadline|крайний срок|B1|We need to meet the deadline.|Нам нужно уложиться в срок.
feedback|обратная связь; отзыв|B1|Thanks for the helpful feedback.|Спасибо за полезный отзыв.
follow up|вернуться к вопросу; уточнить|B2|I will follow up tomorrow.|Я вернусь к этому вопросу завтра.
clarify|прояснить|B2|Could you clarify the last point?|Не могли бы вы прояснить последний пункт?
available|доступный; свободный|B1|Are you available after lunch?|Ты свободен после обеда?
responsible|ответственный|B1|Who is responsible for this task?|Кто отвечает за эту задачу?
prioritize|расставлять приоритеты|B2|We need to prioritize urgent tasks.|Нам нужно отдать приоритет срочным задачам.
requirement|требование|B1|This is a basic requirement.|Это основное требование.
approach|подход|B2|We need a different approach.|Нам нужен другой подход.
scope|объём; границы задачи|B2|This change is outside the scope of the project.|Это изменение выходит за рамки проекта.
trade-off|компромисс между преимуществами и недостатками|B2|There is a trade-off between speed and quality.|Приходится выбирать между скоростью и качеством.
on the same page|одинаково понимать ситуацию|B2|Let us make sure we are on the same page.|Давайте убедимся, что мы одинаково понимаем ситуацию.
reach out|связаться; обратиться|B2|Feel free to reach out if you need help.|Смело обращайся, если нужна помощь.
in advance|заранее|B1|Please let me know in advance.|Пожалуйста, сообщи мне заранее.
postpone|отложить|B1|We may have to postpone the meeting.|Возможно, нам придётся отложить встречу.
outcome|результат; исход|B2|We are happy with the outcome.|Мы довольны результатом.
`,
tech: `
request|запрос|B1|The server rejected the request.|Сервер отклонил запрос.
response|ответ|B1|The response contains three items.|Ответ содержит три элемента.
issue|проблема|B1|We found an issue in the latest version.|Мы нашли проблему в последней версии.
deprecated|устаревший и не рекомендуемый к использованию|B2|This method is deprecated.|Этот метод устарел и не рекомендуется к использованию.
workaround|временное обходное решение|B2|Restarting the app is a temporary workaround.|Перезапуск приложения — временное обходное решение.
reproduce|воспроизвести|B2|I cannot reproduce the error locally.|Я не могу воспроизвести ошибку локально.
deploy|развернуть; выложить приложение|B2|We deploy updates every Tuesday.|Мы выкладываем обновления каждый вторник.
retrieve|получить; извлечь данные|B2|Use this endpoint to retrieve the list.|Используй этот эндпоинт, чтобы получить список.
fallback|запасной вариант|B2|The app uses a local fallback.|Приложение использует локальный запасной вариант.
permission|разрешение|B1|You need permission to edit this file.|Для редактирования этого файла нужно разрешение.
reliable|надёжный|B1|We need a reliable connection.|Нам нужно надёжное соединение.
handle|обрабатывать; справляться с|B1|The server can handle more traffic.|Сервер может обработать больше трафика.
enable|включить; сделать возможным|B1|You can enable this option in settings.|Ты можешь включить эту опцию в настройках.
by default|по умолчанию|B1|The feature is disabled by default.|Функция отключена по умолчанию.
ensure|обеспечить; убедиться|B2|Please ensure that the file exists.|Пожалуйста, убедись, что файл существует.
regardless of|независимо от|B2|The app works regardless of your connection.|Приложение работает независимо от соединения.
`,
feelings: `
overwhelmed|перегруженный; подавленный|B2|I feel overwhelmed by all the choices.|Я чувствую себя перегруженным из-за обилия вариантов.
relieved|испытывающий облегчение|B1|She was relieved to hear the news.|Она почувствовала облегчение, услышав новости.
frustrated|раздосадованный|B1|He was frustrated with the slow progress.|Его расстраивал медленный прогресс.
anxious|тревожный; обеспокоенный|B2|I feel anxious before presentations.|Я тревожусь перед презентациями.
confident|уверенный|B1|I feel more confident now.|Сейчас я чувствую себя увереннее.
awkward|неловкий|B2|There was an awkward silence.|Повисла неловкая тишина.
grateful|благодарный|B1|I am grateful for your support.|Я благодарен за твою поддержку.
thoughtful|внимательный; заботливый|B2|That was a thoughtful gift.|Это был подарок, выбранный с заботой.
stubborn|упрямый|B2|He is too stubborn to ask for help.|Он слишком упрям, чтобы попросить о помощи.
considerate|внимательный к другим|B2|It was considerate of you to ask.|С твоей стороны было внимательным спросить.
trust|доверять|B1|I trust your judgment.|Я доверяю твоему мнению.
resent|негодовать; обижаться на|B2|I resent being treated like a child.|Меня возмущает, когда со мной обращаются как с ребёнком.
cope with|справляться с трудностями|B2|How do you cope with stress?|Как ты справляешься со стрессом?
let down|подвести; разочаровать|B1|I do not want to let down my team.|Я не хочу подвести свою команду.
take for granted|принимать как должное|B2|We often take for granted the things we have.|Мы часто принимаем как должное то, что имеем.
set boundaries|устанавливать личные границы|B2|It is healthy to set boundaries at work.|Полезно устанавливать границы на работе.
`,
society: `
policy|политика; установленное правило|B2|The company changed its refund policy.|Компания изменила правила возврата денег.
concern|беспокойство; важный вопрос|B1|Privacy is a major concern.|Приватность вызывает серьёзное беспокойство.
impact|влияние|B1|The change had a big impact.|Изменение оказало большое влияние.
research|исследование|B1|The article refers to recent research.|Статья ссылается на недавнее исследование.
survey|опрос|B1|The survey included a thousand people.|В опросе участвовала тысяча человек.
bias|предвзятость; смещение|B2|The sample may contain bias.|Выборка может содержать смещение.
source|источник|B1|Always check the original source.|Всегда проверяй первоисточник.
headline|заголовок новости|B1|The headline leaves out an important detail.|В заголовке упущена важная подробность.
raise awareness|повышать осведомлённость|B2|The campaign aims to raise awareness.|Цель кампании — повысить осведомлённость.
inequality|неравенство|B2|The report discusses income inequality.|В отчёте обсуждается неравенство доходов.
access|доступ|B1|Everyone should have access to education.|У каждого должен быть доступ к образованию.
community|сообщество|B1|The local community helped rebuild the park.|Местное сообщество помогло восстановить парк.
trend|тенденция|B1|This is part of a wider trend.|Это часть более широкой тенденции.
despite|несмотря на|B1|The event went ahead despite the rain.|Мероприятие состоялось, несмотря на дождь.
whereas|тогда как|B2|Some people agree, whereas others are unsure.|Некоторые согласны, тогда как другие сомневаются.
long-term|долгосрочный|B2|We need to consider the long-term effects.|Нам нужно учитывать долгосрочные последствия.
`,
culture: `
plot|сюжет|B1|The plot is surprisingly simple.|Сюжет на удивление прост.
character|персонаж|B1|The main character is a teacher.|Главный персонаж — учитель.
setting|место и время действия|B2|The setting is a small coastal town.|Место действия — небольшой приморский город.
compelling|увлекательный; убедительный|B2|It is a compelling story about friendship.|Это увлекательная история о дружбе.
predictable|предсказуемый|B2|The ending was too predictable.|Концовка была слишком предсказуемой.
subtle|тонкий; неочевидный|B2|The film uses subtle humour.|В фильме используется тонкий юмор.
portray|изображать|B2|The novel tries to portray everyday life.|Роман пытается изобразить повседневную жизнь.
insight|глубокое понимание; наблюдение|B2|The book offers an insight into her life.|Книга позволяет лучше понять её жизнь.
review|рецензия; обзор|B1|I read a positive review of the book.|Я прочитал положительную рецензию на книгу.
spoiler|раскрытие сюжетных событий|B1|Please add a spoiler warning.|Пожалуйста, добавь предупреждение о спойлерах.
recommend|рекомендовать|B1|Would you recommend this book?|Ты бы рекомендовал эту книгу?
stand out|выделяться|B2|The illustrations really stand out.|Иллюстрации действительно выделяются.
reference|отсылка; ссылка|B2|That joke is a reference to an old film.|Эта шутка — отсылка к старому фильму.
adaptation|экранизация; адаптация|B2|The adaptation changes the ending.|В экранизации изменена концовка.
live up to|оправдывать ожидания|B2|Did the film live up to your expectations?|Фильм оправдал твои ожидания?
thought-provoking|заставляющий задуматься|B2|It was a thought-provoking essay.|Это было эссе, заставляющее задуматься.
`,
money: `
budget|бюджет|B1|We have a limited budget.|У нас ограниченный бюджет.
expense|расход|B1|Rent is my biggest expense.|Аренда — мой самый большой расход.
subscription|подписка|B1|I cancelled my monthly subscription.|Я отменил свою ежемесячную подписку.
refund|возврат денег|B1|Can I get a refund?|Могу я получить возврат денег?
fee|плата; сбор|B1|There is no delivery fee.|Плата за доставку отсутствует.
value|ценность; соотношение цены и качества|B1|This laptop offers good value.|У этого ноутбука хорошее соотношение цены и качества.
purchase|покупка|B1|Keep the receipt after your purchase.|Сохрани чек после покупки.
discount|скидка|B1|Students get a small discount.|Студенты получают небольшую скидку.
affordable|доступный по цене|B1|We need more affordable housing.|Нам нужно больше доступного жилья.
overpriced|с завышенной ценой|B2|The food was good but overpriced.|Еда была хорошей, но цена завышена.
hidden cost|скрытый расход|B2|Maintenance is a hidden cost.|Обслуживание — скрытый расход.
save up|накопить|B1|I want to save up for a bicycle.|Я хочу накопить на велосипед.
cut back on|сократить потребление или расходы|B2|We need to cut back on unnecessary spending.|Нам нужно сократить ненужные расходы.
in the long run|в долгосрочной перспективе|B2|It is cheaper in the long run.|В долгосрочной перспективе это дешевле.
worth it|стоит того|B1|The repair was expensive but worth it.|Ремонт был дорогим, но стоил того.
drawback|недостаток|B2|The main drawback is the short battery life.|Главный недостаток — малое время работы от батареи.
`,
health: `
well-being|благополучие; хорошее самочувствие|B2|Sleep matters for your well-being.|Сон важен для твоего самочувствия.
exhausted|измотанный|B1|I was exhausted after the trip.|Я был измотан после поездки.
recover|восстанавливаться|B1|I need time to recover.|Мне нужно время, чтобы восстановиться.
routine|привычный распорядок|B1|A simple routine helps me focus.|Простой распорядок помогает мне сосредоточиться.
consistent|последовательный; регулярный|B2|Small, consistent steps are useful.|Небольшие регулярные шаги полезны.
gradually|постепенно|B1|Things are gradually getting better.|Всё постепенно налаживается.
struggle|испытывать трудности|B1|I struggle to fall asleep early.|Мне трудно рано засыпать.
symptom|симптом|B2|A headache can be a symptom of many things.|Головная боль может быть симптомом многого.
appointment|запись на приём; встреча|B1|I have an appointment on Monday.|У меня запись на приём в понедельник.
balanced|сбалансированный|B1|I try to eat a balanced diet.|Я стараюсь питаться сбалансированно.
take a break|сделать перерыв|B1|Remember to take a break.|Не забудь сделать перерыв.
cut down on|сократить употребление|B1|I want to cut down on coffee.|Я хочу пить меньше кофе.
keep up|поддерживать; продолжать|B1|It is hard to keep up this pace.|Трудно поддерживать такой темп.
burnout|выгорание|B2|The article discusses burnout at work.|В статье обсуждается выгорание на работе.
restless|беспокойный|B2|I felt restless after sitting all day.|Я чувствовал беспокойство, просидев весь день.
pay attention to|обращать внимание на|B1|Try to pay attention to how you feel.|Старайся обращать внимание на своё самочувствие.
`,
world: `
destination|место назначения|B1|We finally reached our destination.|Мы наконец добрались до места назначения.
surroundings|окружение; окрестности|B2|Take time to explore your surroundings.|Удели время изучению окрестностей.
remote|удалённый|B1|They live in a remote village.|Они живут в отдалённой деревне.
crowded|переполненный людьми|B1|The train was crowded.|Поезд был переполнен.
commute|дорога на работу или учёбу|B2|My daily commute takes an hour.|Моя ежедневная дорога на работу занимает час.
delay|задержка|B1|There was a short delay.|Была небольшая задержка.
nearby|поблизости|B1|There is a small café nearby.|Поблизости есть маленькое кафе.
abroad|за границей|B1|She spent a year abroad.|Она провела год за границей.
sustainable|экологически и экономически устойчивый|B2|We need more sustainable transport.|Нам нужен более устойчивый транспорт.
waste|отходы; напрасная трата|B1|The new process produces less waste.|Новый процесс производит меньше отходов.
shortage|нехватка|B2|The town faces a water shortage.|Город столкнулся с нехваткой воды.
wildlife|дикая природа; дикие животные|B2|The area is home to diverse wildlife.|В этом районе обитают разнообразные дикие животные.
landscape|пейзаж; ландшафт|B1|The landscape changed as we travelled north.|По мере поездки на север пейзаж менялся.
preserve|сохранять|B2|We should preserve these old buildings.|Нам следует сохранить эти старые здания.
settle in|освоиться на новом месте|B2|It took a month to settle in.|Потребовался месяц, чтобы освоиться.
get around|передвигаться; ориентироваться|B1|It is easy to get around by bus.|На автобусе легко передвигаться.
`,
connections: `
although|хотя|B1|I went outside although it was raining.|Я вышел на улицу, хотя шёл дождь.
however|однако|B1|The room is small; however, it is comfortable.|Комната маленькая, однако удобная.
therefore|поэтому; следовательно|B2|The file is missing; therefore, the app cannot start.|Файл отсутствует, поэтому приложение не запускается.
unless|если не|B1|I will come unless I have to work.|Я приду, если мне не придётся работать.
as long as|при условии что; пока|B1|You can stay as long as you are quiet.|Ты можешь остаться, при условии что будешь вести себя тихо.
even though|хотя; несмотря на то что|B2|She helped even though she was busy.|Она помогла, хотя была занята.
in terms of|с точки зрения; в отношении|B2|It is better in terms of speed.|Это лучше с точки зрения скорости.
rather than|вместо того чтобы; а не|B1|I chose to walk rather than drive.|Я решил идти пешком, а не ехать.
figure out|разобраться; понять|B1|I need to figure out what happened.|Мне нужно разобраться, что произошло.
turn out|оказаться в итоге|B1|How did things turn out?|Как всё в итоге сложилось?
bring up|поднять тему|B1|Do not bring up that topic at dinner.|Не поднимай эту тему за ужином.
come across|случайно наткнуться на|B1|Did you come across anything useful?|Тебе попалось что-нибудь полезное?
put off|откладывать|B1|Do not put off the decision.|Не откладывай решение.
look into|изучить; разобраться в|B2|We will look into the problem.|Мы разберёмся в проблеме.
end up|в итоге оказаться; закончить тем что|B1|You might end up spending more.|Ты можешь в итоге потратить больше.
keep in mind|иметь в виду|B1|Please keep in mind that this is a draft.|Пожалуйста, имей в виду, что это черновик.
`,
};

export const words = Object.entries(groups).flatMap(([topic, data]) => data.trim().split('\n').map(row => {
  const [term, ru, level, example, translation] = row.split('|');
  return { id: `${topic}:${term}`, topic, term, ru, level, example, translation };
})).concat(expandedWords, practicalWords);
