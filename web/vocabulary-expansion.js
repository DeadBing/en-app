// Original learning material. Levels describe intended study difficulty, not certification.
// term | Russian meaning | level | English example | Russian translation | second context
const groups = {
thoughts: `
argument|довод; аргумент|B2|Her argument rests on two facts.|Её довод опирается на два факта.|A loud voice does not strengthen an argument.
assumption|предположение, принятое за основу|B2|That assumption may be wrong.|Это исходное предположение может быть ошибочным.|We should test the assumption before changing anything.
conclusion|вывод|B2|The data supports a different conclusion.|Данные подтверждают другой вывод.|I reached that conclusion after reading both reports.
reasoning|ход рассуждений|B2|Explain the reasoning behind your choice.|Объясни ход рассуждений, стоящий за твоим выбором.|I agree with the result but question the reasoning.
convincing|убедительный|B2|She gave a convincing explanation.|Она дала убедительное объяснение.|The first paragraph is convincing, but the ending is weak.
convince|убеждать|B2|The figures did not convince me.|Цифры меня не убедили.|You need more than a promise to convince her.
justify|обосновывать; оправдывать|B2|Can you justify the extra cost?|Можешь обосновать дополнительные расходы?|A small improvement would not justify that risk.
interpret|толковать; интерпретировать|B2|Readers may interpret this phrase differently.|Читатели могут по-разному истолковать эту фразу.|How should we interpret the sudden change?
interpretation|толкование; трактовка|B2|That is one possible interpretation.|Это одна из возможных трактовок.|The final sentence changes my interpretation of the letter.
distinguish|различать; отличать|B2|We must distinguish facts from guesses.|Нужно отличать факты от догадок.|It is difficult to distinguish irony from anger online.
contradict|противоречить; опровергать сказанное|B2|These results contradict the earlier report.|Эти результаты противоречат предыдущему отчёту.|The two witnesses appear to contradict each other.
contradiction|противоречие|B2|There is a contradiction in your account.|В твоём изложении есть противоречие.|The editor asked about the contradiction between the headlines.
objection|возражение|B2|My main objection concerns the timing.|Моё главное возражение касается сроков.|She raised no objection to the revised proposal.
alternative|альтернатива; другой вариант|B2|We need a cheaper alternative.|Нам нужен более дешёвый вариант.|Walking is a practical alternative to driving here.
acknowledge|признавать; принимать во внимание|B2|We should acknowledge the limitations.|Нам следует признать ограничения.|He refused to acknowledge his part in the mistake.
evaluate|оценивать по критериям|B2|How do you evaluate a reliable source?|Как ты оцениваешь надёжность источника?|The team will evaluate each proposal against the same criteria.
assess|оценивать; определять степень|B2|It is too early to assess the damage.|Пока рано оценивать ущерб.|We need time to assess whether the change helped.
criterion|критерий|B2|Price is not our only criterion.|Цена — не единственный наш критерий.|Each candidate must meet this basic criterion.
valid|обоснованный; действительный|B2|That is a valid objection.|Это обоснованное возражение.|The comparison is only valid under similar conditions.
objective|объективный|B2|Try to give an objective assessment.|Постарайся дать объективную оценку.|An objective account includes facts that challenge its author.
subjective|субъективный|B2|Our impression of beauty is subjective.|Наше представление о красоте субъективно.|A subjective review can still be informative.
assert|утверждать уверенно|C1|The authors assert that demand will grow.|Авторы уверенно утверждают, что спрос вырастет.|You cannot simply assert that the other side is wrong.
assertion|категорическое утверждение|C1|This assertion lacks supporting data.|Этому утверждению не хватает подтверждающих данных.|Her opening assertion became the focus of the debate.
premise|исходная посылка|C1|The argument starts from a false premise.|Рассуждение начинается с ложной посылки.|Accepting the premise does not settle the whole question.
inference|умозаключение; вывод по косвенным данным|C1|That inference goes beyond the evidence.|Такое умозаключение выходит за пределы имеющихся доказательств.|A reasonable inference is still different from direct observation.
infer|делать вывод по косвенным данным|C1|What can we infer from this pattern?|Что можно вывести из этой закономерности?|Readers may infer her attitude from the final sentence.
imply|подразумевать; косвенно указывать|B2|A delay does not imply rejection.|Задержка не подразумевает отказа.|Does the author imply that the policy has failed?
implication|следствие; подразумеваемый смысл|C1|Consider the wider implication of that rule.|Рассмотри более широкое следствие этого правила.|I understood the implication without an explicit warning.
plausible|правдоподобный|C1|It is a plausible explanation, not proof.|Это правдоподобное объяснение, а не доказательство.|The detective searched for a more plausible motive.
implausible|неправдоподобный|C1|His account sounds increasingly implausible.|Его рассказ звучит всё менее правдоподобно.|The novel makes an implausible coincidence feel natural.
coherent|связный; логически последовательный|C1|She presented a coherent account.|Она представила связное изложение.|These notes do not yet form a coherent argument.
inconsistent|непоследовательный; противоречивый|C1|The advice is inconsistent across chapters.|Советы в разных главах противоречат друг другу.|His current position seems inconsistent with his earlier promise.
ambiguity|неоднозначность|C1|The wording leaves room for ambiguity.|Формулировка допускает неоднозначность.|A precise definition would remove this ambiguity.
ambiguous|двусмысленный; неоднозначный|C1|The final sentence is deliberately ambiguous.|Последнее предложение намеренно двусмысленно.|An ambiguous instruction can produce several different results.
explicit|явный; прямо выраженный|C1|We need explicit agreement from both sides.|Нам нужно явно выраженное согласие обеих сторон.|The article contains no explicit criticism of the manager.
implicit|неявный; подразумеваемый|C1|There is an implicit warning here.|Здесь содержится неявное предупреждение.|Their silence was treated as implicit approval.
underlying|лежащий в основе|C1|We disagree about the underlying cause.|Мы расходимся во мнении об основной причине.|The examples differ, but the underlying principle is the same.
nuance|смысловой оттенок; нюанс|C1|The summary loses an important nuance.|В кратком изложении теряется важный смысловой оттенок.|Translation can change the nuance of a polite refusal.
substantiate|подкреплять доказательствами|C1|Can you substantiate this allegation?|Можешь подкрепить это обвинение доказательствами?|The report provides figures to substantiate its main claim.
refute|опровергать доказательствами|C1|The experiment may refute the hypothesis.|Эксперимент может опровергнуть гипотезу.|It takes evidence to refute a specific factual claim.
rebuttal|аргументированное возражение|C1|She published a detailed rebuttal.|Она опубликовала подробное аргументированное возражение.|The second half of the essay is a rebuttal of that view.
concede|признавать с неохотой; уступать в споре|C1|I concede that the plan has advantages.|Признаю, что у плана есть преимущества.|He would not concede even this minor point.
qualify a statement|оговорить пределы утверждения|C1|You may need to qualify a statement that broad.|Возможно, столь широкое утверждение нужно уточнить оговорками.|Writers qualify a statement when the evidence is limited.
counterargument|контраргумент|C1|The essay ignores a strong counterargument.|Эссе игнорирует сильный контраргумент.|Addressing a counterargument can make your position clearer.
fallacy|ошибка в рассуждении|C1|That conclusion relies on a familiar fallacy.|Этот вывод основан на известной логической ошибке.|The lecturer used an everyday example to explain the fallacy.
overgeneralize|делать чрезмерно широкие обобщения|C1|Do not overgeneralize from one example.|Не делай чрезмерно широких выводов из одного примера.|People sometimes overgeneralize after a bad experience.
generalization|обобщение|C1|This generalization has several exceptions.|У этого обобщения есть несколько исключений.|A useful generalization should not erase important differences.
speculate|строить предположения без достаточных данных|C1|We can only speculate about their motives.|Мы можем лишь строить предположения об их мотивах.|The article invites readers to speculate about what happened next.
speculation|предположения без достаточных данных|C1|The explanation is mostly speculation.|Объяснение по большей части состоит из предположений.|There is a clear difference between evidence and speculation.
scrutiny|тщательная проверка; пристальное изучение|C1|The proposal deserves closer scrutiny.|Предложение заслуживает более тщательного изучения.|The figures did not survive independent scrutiny.
scrutinize|тщательно изучать; проверять|C1|Reviewers will scrutinize the methodology.|Рецензенты тщательно изучат методологию.|She likes to scrutinize the details before agreeing.
tentative|предварительный; неуверенный|C1|This is a tentative conclusion.|Это предварительный вывод.|They offered a tentative explanation while awaiting more data.
definitive|окончательный; исчерпывающий|C1|We do not have a definitive answer.|У нас нет окончательного ответа.|The book aims to provide a definitive account of the event.
inconclusive|не позволяющий сделать однозначный вывод|C1|The results remain inconclusive.|Результаты по-прежнему не позволяют сделать однозначный вывод.|An inconclusive test does not establish either explanation.
compromise|компромисс|B2|Both sides accepted the compromise.|Обе стороны приняли компромисс.|The final design is a compromise between cost and comfort.
consensus|общее согласие; консенсус|C1|There is no consensus on the cause.|По поводу причины нет общего согласия.|The group reached a consensus after discussing the objections.
contention|спорное утверждение; предмет спора|C1|Her central contention concerns fairness.|Её основное спорное утверждение касается справедливости.|The cost remains a point of contention.
stance|позиция по вопросу|C1|The newspaper changed its stance.|Газета изменила свою позицию.|She explained her stance without attacking her opponents.
viewpoint|точка зрения|B2|The story offers another viewpoint.|История предлагает другую точку зрения.|Try rewriting the scene from the neighbour's viewpoint.
to some extent|в некоторой степени|B2|I agree to some extent.|Я согласен в некоторой степени.|The outcome depends to some extent on timing.
in principle|в принципе; в теории|B2|We support the idea in principle.|В принципе мы поддерживаем идею.|It works in principle, but the practical details matter.
in practice|на практике|B2|The rule is harder to apply in practice.|На практике правило применять сложнее.|A small apartment can feel spacious in practice.
bear in mind|учитывать; помнить о|B2|Bear in mind that prices may vary.|Учитывай, что цены могут различаться.|We must bear in mind the size of the original sample.
questionable|сомнительный; спорный|C1|The comparison rests on questionable assumptions.|Сравнение опирается на сомнительные предположения.|Using one review as proof seems questionable.
unfounded|безосновательный|C1|The accusation turned out to be unfounded.|Обвинение оказалось безосновательным.|Their initial fears were largely unfounded.
irrespective of|независимо от|C1|The rule applies irrespective of rank.|Правило действует независимо от должности.|Applicants are assessed irrespective of their previous employer.
not necessarily|не обязательно; не непременно|B2|More features are not necessarily better.|Больше функций не обязательно означает лучше.|A short reply is not necessarily an unfriendly one.
on balance|взвесив все обстоятельства|C1|On balance, the change seems worthwhile.|Взвесив всё, изменение кажется стоящим.|I would choose the quieter option on balance.
by contrast|для сравнения; в противоположность|B2|The second account, by contrast, is detailed.|Второе изложение, напротив, подробное.|The village is quiet; the harbour, by contrast, is crowded.
on the contrary|напротив; как раз наоборот|B2|It is not a burden; on the contrary, I enjoy it.|Это не обуза; напротив, мне это нравится.|The results did not weaken her case; on the contrary, they helped.
in essence|по существу; в сущности|C1|The two proposals are identical in essence.|По существу эти два предложения одинаковы.|In essence, the question is who should decide.
to put it simply|проще говоря|B2|To put it simply, we need more time.|Проще говоря, нам нужно больше времени.|The service failed because, to put it simply, demand doubled.
for the sake of argument|допустим ради обсуждения|C1|For the sake of argument, assume it works.|Допустим ради обсуждения, что это работает.|Let us accept that figure for the sake of argument.
with that in mind|с учётом этого|B2|With that in mind, we changed the plan.|С учётом этого мы изменили план.|Read the final paragraph with that in mind.
at face value|без проверки; за чистую монету|C1|Do not accept every promise at face value.|Не принимай каждое обещание за чистую монету.|The remark sounds harmless if taken at face value.
in hindsight|оглядываясь назад|C1|In hindsight, the warning was obvious.|Оглядываясь назад, предупреждение было очевидным.|The choice looks easier in hindsight than it felt then.
by no means|ни в коем случае; отнюдь не|C1|This is by no means the only option.|Это отнюдь не единственный вариант.|A detailed explanation is by no means always a clear one.
to the contrary|свидетельствующий об обратном|C1|We have no evidence to the contrary.|У нас нет доказательств обратного.|She kept working despite rumours to the contrary.
open to interpretation|допускающий разные трактовки|C1|The ending is open to interpretation.|Концовка допускает разные трактовки.|That phrase remains open to interpretation without more context.
common ground|общая позиция; точки соприкосновения|C1|We found common ground on funding.|Мы нашли общую позицию по финансированию.|Finding common ground does not require agreement on everything.
burden of proof|обязанность доказывания|C1|Who carries the burden of proof here?|На ком здесь лежит обязанность доказывания?|The debate shifted toward the burden of proof.
cherry-pick|выбирать только удобные факты|C1|It is easy to cherry-pick successful examples.|Легко выбрать только удачные примеры.|A fair review should not cherry-pick positive comments.
causation|причинная связь|C1|The chart alone cannot establish causation.|Один график не может установить причинную связь.|The discussion confuses association with causation.
correlation|статистическая взаимосвязь|C1|The study found a weak correlation.|Исследование обнаружило слабую статистическую взаимосвязь.|A correlation does not by itself explain the mechanism.
deduce|выводить логическим путём|C1|What can you deduce from these facts?|Что ты можешь логически вывести из этих фактов?|The reader can deduce the answer before the detective does.
hypothesis|проверяемое предположение; гипотеза|C1|The experiment tests a specific hypothesis.|Эксперимент проверяет конкретную гипотезу.|A useful hypothesis should be open to testing.
falsifiable|допускающий проверку на опровержение|C1|A scientific claim should be falsifiable.|Научное утверждение должно допускать опровержение проверкой.|The seminar asked whether the explanation was falsifiable.
reasonably|обоснованно; в разумной степени|B2|We can reasonably expect a reply.|Мы можем обоснованно ожидать ответа.|The estimate is reasonably accurate for a first attempt.
arguably|можно утверждать, что|C1|This is arguably the strongest chapter.|Можно утверждать, что это самая сильная глава.|The smaller change is arguably more useful.
admittedly|надо признать|C1|Admittedly, the sample is small.|Надо признать, выборка мала.|The method is simple, admittedly, but it works here.
presumably|предположительно; надо полагать|B2|Presumably, they have already discussed it.|Надо полагать, они это уже обсудили.|The missing page presumably contains the explanation.
undoubtedly|несомненно|B2|The delay undoubtedly affected the result.|Задержка несомненно повлияла на результат.|Her experience undoubtedly helped the team.
nonetheless|тем не менее|C1|The risk is small; nonetheless, it exists.|Риск невелик; тем не менее он существует.|The draft is rough but nonetheless useful.
notwithstanding|несмотря на; невзирая на|C1|Notwithstanding these concerns, the plan was approved.|Несмотря на эти опасения, план одобрили.|The ending works, its flaws notwithstanding.
account for|объяснять причину; служить объяснением|B2|How do you account for this difference?|Как ты объясняешь это различие?|The change in method may account for the higher figure.
attribute to|приписывать чему-либо причину|C1|Which improvements can we attribute to better planning?|Какие улучшения можно объяснить более тщательным планированием?|The gains we attribute to the new tool may have other causes.
weigh up|взвешивать варианты или доводы|B2|Take time to weigh up the alternatives.|Найди время взвесить альтернативы.|We need to weigh up the costs against the benefits.
rule out|исключать возможность|B2|We cannot rule out another explanation.|Мы не можем исключить другое объяснение.|The evidence may rule out a simple technical failure.
call into question|ставить под сомнение|C1|These errors call into question the conclusion.|Эти ошибки ставят вывод под сомнение.|One incident can call into question a long-standing assumption.
put into perspective|помочь оценить в более широком контексте|C1|The figures put into perspective how small the project is.|Цифры помогают понять, насколько мал этот проект.|Historical comparisons can put into perspective a sudden change.
`,
internet: `
upvote|голос в поддержку публикации|B2|Her explanation received an upvote from me.|Я поставил её объяснению голос в поддержку.|An upvote does not always mean complete agreement.
downvote|голос против публикации|B2|The rude reply received a downvote.|Грубый ответ получил голос против.|Some readers use a downvote to mark irrelevant content.
moderator|модератор сообщества|B2|A moderator removed the duplicate post.|Модератор удалил повторную публикацию.|Ask a moderator if the community rules are unclear.
moderation|проверка соблюдения правил сообщества|B2|The forum relies on volunteer moderation.|На форуме правила поддерживают добровольцы.|Consistent moderation can keep a discussion readable.
guideline|рекомендация; руководящее правило|B2|Read the posting guideline before replying.|Прочитай правило публикации перед ответом.|This guideline explains when a link needs a description.
ban|запрет доступа; блокировка участника|B2|The account received a temporary ban.|Учётная запись получила временную блокировку.|The moderator explained the reason for the ban.
mute|отключать показ сообщений или уведомлений|B2|You can mute this conversation.|Можно отключить уведомления этой беседы.|I usually mute noisy group chats during work.
block|блокировать контакт|B2|She decided to block the abusive account.|Она решила заблокировать оскорбляющую её учётную запись.|The platform lets users block unwanted messages.
report a post|пожаловаться на публикацию|B2|You can report a post that breaks the rules.|Можно пожаловаться на публикацию, нарушающую правила.|The help page explains how to report a post.
repost|повторная публикация чужого материала|B2|This looks like a repost from yesterday.|Похоже, это повторная публикация вчерашнего материала.|A repost can reach people who missed the original.
cross-post|публиковать в нескольких сообществах|C1|Please do not cross-post the same question everywhere.|Пожалуйста, не публикуй один вопрос сразу во всех сообществах.|Authors sometimes cross-post an update to related forums.
pinned post|закреплённая публикация|B2|The answer is in the pinned post.|Ответ находится в закреплённой публикации.|A pinned post explains how the weekly discussion works.
feed|лента публикаций|B2|My feed contains too many adverts.|В моей ленте слишком много рекламы.|The feed changed after I followed several photographers.
follower|подписчик|B2|A follower asked for the original source.|Подписчик попросил исходный источник.|Each new follower receives the same welcome message.
engagement|активность аудитории; вовлечённость|C1|The post attracted little engagement.|Публикация вызвала мало активности аудитории.|High engagement does not establish that a claim is true.
reach|охват аудитории|C1|The campaign had a limited reach.|У кампании был ограниченный охват.|A short video can have a surprisingly broad reach.
viral|быстро распространяющийся в интернете|B2|The clip went viral overnight.|Ролик разлетелся по интернету за ночь.|A viral story may still need careful checking.
clickbait|приманка для кликов|C1|The headline is obvious clickbait.|Заголовок — явная приманка для кликов.|I expected clickbait but found a useful explanation.
rage bait|контент, намеренно вызывающий злость|C1|That post looks like rage bait.|Этот пост похож на намеренную провокацию злости.|The account gets attention by sharing rage bait.
misinformation|недостоверная информация|C1|The correction addressed widespread misinformation.|Исправление касалось широко распространённой недостоверной информации.|People can share misinformation without intending to deceive.
disinformation|намеренно распространяемая ложная информация|C1|The report examined a disinformation campaign.|Отчёт изучал кампанию намеренного распространения ложной информации.|The researchers distinguished disinformation from honest mistakes.
fact-check|проверять достоверность утверждений|B2|We should fact-check the quoted numbers.|Нам следует проверить достоверность приведённых чисел.|The editors fact-check every public claim in the article.
debunk|разоблачать ложное утверждение|C1|The article aims to debunk a popular myth.|Статья призвана разоблачить популярный миф.|A clear demonstration can debunk a misleading explanation.
context collapse|смешение аудиторий с разным контекстом|C1|Context collapse made the private joke confusing.|Из-за смешения аудиторий частная шутка стала непонятной.|The essay explores context collapse on large social platforms.
echo chamber|среда, где повторяют схожие взгляды|C1|The group became an echo chamber.|Группа превратилась в среду одинаковых мнений.|Following different sources may reveal an echo chamber.
filter bubble|информационный пузырь персональной выдачи|C1|The article discusses the filter bubble.|Статья обсуждает информационный пузырь персональной выдачи.|A filter bubble can make a narrow topic seem universal.
algorithmic|определяемый алгоритмом|C1|The platform uses algorithmic recommendations.|Платформа использует рекомендации, определяемые алгоритмом.|An algorithmic feed may hide posts from familiar accounts.
chronological|расположенный по времени|B2|I prefer a chronological feed.|Я предпочитаю ленту в хронологическом порядке.|The archive presents updates in chronological order.
anonymity|анонимность|C1|Anonymity can encourage honest questions.|Анонимность может поощрять откровенные вопросы.|The discussion considered both benefits and costs of anonymity.
pseudonym|вымышленное имя; псевдоним|C1|The writer publishes under a pseudonym.|Писатель публикуется под псевдонимом.|She has used the same pseudonym for years.
username|имя пользователя|B2|Your username appears beside each comment.|Твоё имя пользователя появляется рядом с каждым комментарием.|I recognised the username from another discussion.
impersonate|выдавать себя за другого|C1|Some accounts impersonate well-known creators.|Некоторые учётные записи выдают себя за известных авторов.|The warning describes attempts to impersonate support staff.
authenticity|подлинность|C1|Readers questioned the screenshot's authenticity.|Читатели усомнились в подлинности скриншота.|The original file helped establish the photograph's authenticity.
verified|проверенный; подтверждённый|B2|The update came from a verified account.|Обновление пришло с подтверждённой учётной записи.|A verified identity does not make every opinion accurate.
disclaimer|оговорка об ограничениях или ответственности|C1|The review begins with a disclaimer.|Обзор начинается с оговорки об ограничениях.|A small disclaimer states that the products were supplied free.
disclosure|раскрытие существенной информации|C1|The post includes a sponsorship disclosure.|Публикация содержит указание на спонсорство.|Readers asked for clearer disclosure of the author's connections.
sponsored|оплаченный спонсором|B2|This is a sponsored article.|Это статья, оплаченная спонсором.|The newsletter clearly labels sponsored links.
affiliate link|партнёрская ссылка с вознаграждением|C1|The description contains an affiliate link.|Описание содержит партнёрскую ссылку с вознаграждением.|The creator explained how an affiliate link supports the channel.
paywall|платное ограничение доступа к материалу|B2|The full interview is behind a paywall.|Полное интервью находится за платным ограничением доступа.|The newspaper moved its archive behind a paywall.
archive|архив материалов|B2|The old discussion remains in the archive.|Старое обсуждение остаётся в архиве.|I searched the archive for an earlier announcement.
bookmark|закладка для возвращения к материалу|B2|I saved the guide as a bookmark.|Я сохранил руководство в закладки.|That bookmark leads to a useful collection of examples.
permalink|постоянная ссылка на материал|C1|Use the permalink to cite this comment.|Используй постоянную ссылку для цитирования комментария.|The permalink still opens the original discussion.
caption|подпись к изображению|B2|The caption changes the meaning of the photo.|Подпись меняет смысл фотографии.|She added a caption to explain where it was taken.
alt text|текстовое описание изображения|B2|The diagram needs useful alt text.|Диаграмме нужно полезное текстовое описание.|Good alt text conveys information that the image adds.
transcript|текстовая запись речи|B2|I read the interview transcript.|Я прочитал текстовую запись интервью.|The transcript made the technical terms easier to check.
livestream|прямая интернет-трансляция|B2|The announcement appeared during a livestream.|Объявление прозвучало во время интернет-трансляции.|The livestream chat moved too quickly to follow.
backlash|резкая отрицательная реакция|C1|The decision caused an immediate backlash.|Решение вызвало немедленную резкую отрицательную реакцию.|The company revised the message after the backlash.
outrage|сильное возмущение|C1|The misleading quote sparked outrage.|Вводящая в заблуждение цитата вызвала сильное возмущение.|The replies expressed outrage at the unfair comparison.
pile-on|массовая травля в комментариях|C1|One rude reply turned into a pile-on.|Один грубый ответ превратился в массовую травлю.|The moderator closed the thread to stop the pile-on.
troll|провокатор в интернет-обсуждении|B2|The regulars recognised the troll.|Постоянные участники узнали провокатора.|A troll may pretend to misunderstand every explanation.
provocative|провокационный|C1|The title is deliberately provocative.|Заголовок намеренно провокационный.|A provocative question can start a serious discussion.
inflammatory|разжигающий вражду или сильные эмоции|C1|The moderator removed inflammatory remarks.|Модератор удалил высказывания, разжигающие вражду.|The article uses inflammatory language to attract attention.
hostile|враждебный|B2|The replies became increasingly hostile.|Ответы становились всё более враждебными.|A hostile tone can drive new members away.
civil|вежливый и сдержанный в общении|C1|Please keep the discussion civil.|Пожалуйста, обсуждайте вежливо и сдержанно.|They managed a civil exchange despite their disagreement.
constructive|конструктивный; направленный на улучшение|B2|That was a constructive suggestion.|Это было конструктивное предложение.|Constructive criticism usually explains what could be improved.
snarky|язвительный; насмешливо резкий|C1|His snarky reply added nothing useful.|Его язвительный ответ не добавил ничего полезного.|The review is funny but occasionally snarky.
condescending|снисходительно-высокомерный|C1|The explanation sounded condescending.|Объяснение прозвучало снисходительно-высокомерно.|A helpful answer need not adopt a condescending tone.
patronizing|покровительственно-высокомерный|C1|She found the comment patronizing.|Она сочла комментарий покровительственно-высокомерным.|The writer apologised for the patronizing wording.
defensive|защитный; болезненно реагирующий на критику|C1|He became defensive about the mistake.|Он занял оборонительную позицию из-за ошибки.|A defensive response can make a simple question feel hostile.
passive-aggressive|косвенно выражающий враждебность|C1|The message sounded passive-aggressive.|Сообщение прозвучало пассивно-агрессивно.|The group discussed how to avoid passive-aggressive replies.
deadpan|невозмутимый при шутке|C1|Her deadpan comment confused some readers.|Её невозмутимая шутка смутила некоторых читателей.|The review mixes serious observations with deadpan humour.
tongue-in-cheek|шутливый под видом серьёзного|C1|The title is tongue-in-cheek.|Заголовок шутливый, хотя выглядит серьёзным.|He wrote a tongue-in-cheek guide to surviving long meetings.
ironic|ироничный|B2|That is an ironic choice of words.|Это ироничный выбор слов.|The caption was intended to be ironic, not literal.
literal|буквальный|B2|Do not take the joke in a literal sense.|Не воспринимай шутку буквально.|A literal reading misses the writer's frustration.
figurative|переносный; образный|C1|The phrase has a figurative meaning.|У фразы переносное значение.|The author uses figurative language to describe the debate.
hyperbole|намеренное преувеличение|C1|The complaint relies on obvious hyperbole.|Жалоба строится на явном преувеличении.|Readers understood the hyperbole as a joke.
understatement|преуменьшение|C1|Calling it inconvenient is an understatement.|Назвать это неудобным — значит преуменьшить.|Her dry understatement made the story funnier.
inside joke|шутка, понятная только своим|B2|That phrase is an inside joke.|Эта фраза — шутка для своих.|New members may not understand the inside joke.
meme|интернет-мем; узнаваемый шуточный образ|B2|The comment refers to an old meme.|Комментарий отсылает к старому мему.|A familiar meme can express a complicated reaction.
copypasta|многократно копируемый шаблонный текст|C1|The long reply is a copypasta.|Длинный ответ — многократно копируемый шаблонный текст.|Someone recognised the copypasta from another forum.
low-effort|сделанный без заметных усилий|C1|The community discourages low-effort posts.|Сообщество не приветствует публикации без заметных усилий.|A low-effort reply rarely answers a detailed question.
off-topic|не относящийся к теме|B2|That question is slightly off-topic.|Этот вопрос немного не по теме.|The moderator moved the off-topic discussion elsewhere.
derail|уводить обсуждение от темы|C1|Personal insults derail the discussion.|Личные оскорбления уводят обсуждение от темы.|One unrelated argument can derail a useful thread.
lurk|читать сообщество, не участвуя|C1|I tend to lurk before posting.|Обычно я сначала читаю сообщество, не участвуя.|Many members lurk for months before asking a question.
newcomer|новичок в сообществе|B2|The guide welcomes every newcomer.|Руководство приветствует каждого новичка.|A newcomer may not know the local abbreviations.
regular|постоянный участник|B2|A forum regular explained the joke.|Постоянный участник форума объяснил шутку.|Each regular has a favourite weekly discussion.
gatekeeping|ограничение доступа по неформальным критериям|C1|The argument turned into gatekeeping.|Спор превратился в навязывание критериев допуска.|Beginners described the attitude as unnecessary gatekeeping.
bad-faith|заведомо недобросовестный|C1|She refused to engage with bad-faith arguments.|Она отказалась обсуждать заведомо недобросовестные доводы.|A bad-faith question may hide an attempt to provoke.
good-faith|добросовестный; искренне направленный на понимание|C1|This seems like a good-faith question.|Похоже, этот вопрос задан добросовестно.|The moderator encouraged a good-faith exchange of views.
takeaway|главный вывод; основная мысль|B2|What is your main takeaway from the post?|Какой твой главный вывод из публикации?|My takeaway was that the problem needs more context.
TL;DR|краткое изложение длинного текста|B2|The TL;DR appears above the full explanation.|Краткое изложение находится над полным объяснением.|Please add a TL;DR for readers in a hurry.
AFAIK|насколько мне известно; неформальное сокращение|B2|AFAIK, the guide has not changed.|Насколько мне известно, руководство не изменилось.|The feature is still available, AFAIK.
IIRC|если я правильно помню; неформальное сокращение|B2|IIRC, we discussed this last month.|Если я правильно помню, мы обсуждали это в прошлом месяце.|The author mentioned a follow-up, IIRC.
YMMV|у вас результат может отличаться|C1|The workaround helped me, but YMMV.|Мне обходное решение помогло, но у вас результат может отличаться.|YMMV depending on the device and settings.
ETA|добавлено позже; пометка правки в посте|C1|ETA: I found the original source.|Добавлено позже: я нашёл исходный источник.|The author used ETA to mark a correction to the post.
DM|личное сообщение; неформальное сокращение|B2|Send me a DM with the link.|Пришли мне ссылку личным сообщением.|I received a helpful DM after posting the question.
FAQ|ответы на часто задаваемые вопросы|B2|The FAQ covers this exact problem.|Раздел частых вопросов разбирает именно эту проблему.|We updated the FAQ after several similar requests.
NSFW|не подходит для просмотра на работе|B2|The image carries an NSFW warning.|Изображение помечено как не подходящее для просмотра на работе.|The community requires an NSFW label for certain content.
throwaway account|временная учётная запись без связи с основной|C1|She posted from a throwaway account.|Она написала с временной учётной записи.|The question explains why the writer used a throwaway account.
brigading|организованный массовый набег на обсуждение|C1|The moderators reported suspected brigading.|Модераторы сообщили о подозрении на организованный набег.|A sudden wave of hostile votes raised concerns about brigading.
dog whistle|завуалированный сигнал определённой аудитории|C1|The columnist called the phrase a dog whistle.|Обозреватель назвал фразу завуалированным сигналом своей аудитории.|The discussion examined whether the slogan was a dog whistle.
straw man|искажённая версия чужого аргумента|C1|That reply attacks a straw man.|Этот ответ атакует искажённую версию чужого довода.|Quoting the full statement helps reveal the straw man.
whataboutism|уход от критики через встречное обвинение|C1|The discussion dissolved into whataboutism.|Обсуждение свелось к встречным обвинениям вместо ответа на критику.|The moderator asked participants to avoid whataboutism.
seal of approval|знак одобрения|C1|A share is not always a seal of approval.|Перепубликация не всегда означает одобрение.|Readers treated the recommendation as a seal of approval.
blown out of proportion|чрезмерно раздутый по значению|C1|A minor disagreement was blown out of proportion.|Значение мелкого разногласия чрезмерно раздули.|The typo was blown out of proportion in the replies.
read the room|понимать настроение окружающих|C1|You need to read the room before joking.|Перед шуткой нужно понять настроение окружающих.|The reply showed that the writer had failed to read the room.
double down|ещё упорнее настаивать на своей позиции|C1|He chose to double down after the correction.|После исправления он решил ещё упорнее настаивать на своём.|Some accounts double down instead of admitting an error.
walk back|смягчать или брать назад сказанное|C1|The author tried to walk back the claim.|Автор попытался смягчить своё утверждение.|The company had to walk back its promise of free access.
go off on a tangent|отклоняться от основной темы|C1|We tend to go off on a tangent.|Мы склонны отклоняться от основной темы.|One comparison made the whole thread go off on a tangent.
food for thought|повод задуматься|C1|Your comment gave me food for thought.|Твой комментарий дал мне повод задуматься.|Even the replies I disagreed with offered food for thought.
`,
everyday: `
arrange|организовывать; договариваться о|B2|Can we arrange a different delivery time?|Можем договориться о другом времени доставки?|She offered to arrange transport for everyone.
arrangement|договорённость; организация чего-либо|B2|We agreed on a temporary arrangement.|Мы согласовали временную договорённость.|The new arrangement gives us more room in the kitchen.
accommodate|размещать; учитывать потребности|C1|The flat can accommodate three guests.|Квартира может разместить трёх гостей.|We changed the schedule to accommodate her working hours.
adjust|корректировать; приспосабливаться|B2|You can adjust the shelf height.|Можно отрегулировать высоту полки.|It took me a week to adjust to the new routine.
adjustment|корректировка; приспособление|B2|The chair needs a small adjustment.|Кресло нуждается в небольшой регулировке.|Moving in together required an adjustment on both sides.
adapt|приспосабливаться; адаптировать|B2|We had to adapt to a smaller kitchen.|Нам пришлось приспособиться к меньшей кухне.|You can adapt the recipe to the ingredients you have.
alternative route|другой маршрут|B2|We found an alternative route home.|Мы нашли другой маршрут домой.|The sign suggests an alternative route during repairs.
errand|небольшое бытовое поручение|B2|I have one more errand to run.|Мне нужно выполнить ещё одно бытовое поручение.|Buying stamps was the only errand on her list.
chore|регулярная домашняя обязанность|B2|Laundry is my least favourite chore.|Стирка — моя самая нелюбимая домашняя обязанность.|Each person chose a household chore for the week.
household|домохозяйство; все живущие вместе|B2|Our household uses very little paper.|В нашем доме расходуется очень мало бумаги.|The survey counted each household only once.
appliance|бытовой прибор|B2|This appliance fits under the counter.|Этот бытовой прибор помещается под столешницей.|The manual explains how to clean the appliance.
utensil|кухонная принадлежность|C1|Use a wooden utensil with this pan.|Используй деревянную кухонную принадлежность с этой сковородой.|Every utensil has a place in the drawer.
storage|место или система хранения|B2|The bed has storage underneath.|Под кроватью есть место для хранения.|We need more storage for winter clothes.
clutter|беспорядочное скопление вещей|C1|The desk disappeared under the clutter.|Стол скрылся под беспорядочной кучей вещей.|Removing visual clutter made the room feel calmer.
declutter|избавляться от лишних вещей|C1|I plan to declutter the hallway.|Я планирую убрать лишние вещи из прихожей.|We decided to declutter before buying more shelves.
misplace|положить не туда и временно потерять|C1|I often misplace my reading glasses.|Я часто кладу очки не туда и потом ищу.|It is easy to misplace a receipt in this bag.
retrieve a parcel|забрать посылку из места хранения|B2|I need to retrieve a parcel from the locker.|Мне нужно забрать посылку из ячейки.|The code lets you retrieve a parcel without waiting in line.
receipt|чек; подтверждение оплаты|B2|Keep the receipt until you try it.|Сохрани чек, пока не попробуешь покупку.|The receipt lists a delivery charge I did not expect.
warranty|гарантия на товар|B2|The repair is covered by the warranty.|Ремонт покрывается гарантией.|I checked the warranty before contacting the shop.
replacement|замена; предмет взамен|B2|The shop sent a replacement yesterday.|Магазин вчера отправил замену.|Finding a replacement for this handle took weeks.
defective|бракованный; неисправный|C1|The shop replaced the defective lamp.|Магазин заменил неисправную лампу.|A defective switch caused the problem.
faulty|неисправный|B2|The door has a faulty lock.|У двери неисправный замок.|We reported the faulty socket to the landlord.
wear and tear|естественный износ|C1|The table shows normal wear and tear.|На столе виден обычный естественный износ.|The agreement distinguishes damage from wear and tear.
durable|прочный; долговечный|B2|We chose a durable kitchen surface.|Мы выбрали долговечную кухонную поверхность.|A durable bag may last through several moves.
fragile|хрупкий|B2|The parcel contains fragile glassware.|В посылке находится хрупкая стеклянная посуда.|Please put the fragile cups on the top shelf.
sturdy|крепкий; устойчивый|C1|The stool looks surprisingly sturdy.|Табурет выглядит на удивление крепким.|We needed a sturdy box for the books.
flimsy|хлипкий|C1|The plastic handle feels flimsy.|Пластиковая ручка кажется хлипкой.|That flimsy umbrella did not survive the wind.
spacious|просторный|B2|The flat has a spacious hallway.|В квартире просторная прихожая.|Large windows make the small room feel spacious.
cramped|тесный|C1|The kitchen feels cramped with four people.|Вчетвером на кухне тесно.|We moved the table to make the room less cramped.
cosy|уютный|B2|The reading corner is warm and cosy.|Уголок для чтения тёплый и уютный.|Soft lighting made the room feel cosy.
draught|сквозняк|C1|There is a draught under the door.|Под дверью дует сквозняк.|A curtain helped reduce the cold draught.
leak|протечка|B2|We found a leak under the sink.|Мы обнаружили протечку под раковиной.|The plumber came to inspect the leak.
stain|пятно, которое трудно удалить|B2|The coffee left a stain.|Кофе оставил пятно.|I noticed a small stain on the sofa.
scratch|царапина|B2|There is a scratch on the screen.|На экране есть царапина.|The moving box left a scratch on the floor.
dent|вмятина|C1|The delivery left a dent in the fridge.|После доставки на холодильнике осталась вмятина.|We photographed the dent before unpacking the rest.
maintenance|поддержание в исправном состоянии|B2|The lift needs regular maintenance.|Лифту нужно регулярное обслуживание.|The rent includes basic building maintenance.
upkeep|текущее содержание в порядке|C1|The garden requires constant upkeep.|Сад требует постоянного ухода.|We underestimated the upkeep of an older house.
renovation|ремонт с обновлением помещения|B2|The renovation took three months.|Ремонт с обновлением занял три месяца.|They lived elsewhere during the kitchen renovation.
landlord|арендодатель жилья|B2|The landlord agreed to replace the lock.|Арендодатель согласился заменить замок.|Our landlord lives in another city.
tenant|арендатор жилья|B2|The new tenant arrives on Monday.|Новый арендатор приезжает в понедельник.|Each tenant received a copy of the building rules.
tenancy|аренда жилья; срок найма|C1|The tenancy begins next month.|Срок аренды начинается в следующем месяце.|They asked about extending the tenancy.
deposit|залог; обеспечительный платёж|B2|We paid a deposit for the flat.|Мы внесли залог за квартиру.|The owner returned the deposit after the inspection.
utilities|коммунальные услуги|B2|Utilities are included in the rent.|Коммунальные услуги включены в аренду.|We split the cost of utilities each month.
meter reading|показание счётчика|B2|Please submit a meter reading today.|Пожалуйста, передай сегодня показание счётчика.|The bill changed after the correct meter reading arrived.
standing order|регулярный платёж по поручению плательщика|C1|I set up a standing order for rent.|Я настроил регулярный платёж за аренду.|The standing order sends the same amount every month.
overdue|просроченный|B2|The library book is overdue.|Срок возврата библиотечной книги истёк.|I found an overdue bill behind the drawer.
pending|ожидающий решения или завершения|C1|The repair request is still pending.|Заявка на ремонт ещё ожидает решения.|Two household tasks remain pending until the parts arrive.
reschedule|переносить на другое время|B2|Can we reschedule the visit?|Можем перенести визит на другое время?|The installer called to reschedule after a delay.
cancel out|взаимно компенсировать|C1|The two changes cancel out the savings.|Два изменения сводят экономию на нет.|The extra travel costs cancel out the cheaper rent.
inconvenience|неудобство|B2|The closure caused a minor inconvenience.|Закрытие вызвало небольшое неудобство.|We accepted the inconvenience because the repairs were necessary.
hassle|морока; хлопоты|C1|Returning it was a real hassle.|Возвращать это было настоящей морокой.|A spare key can save a lot of hassle.
nuisance|досадная помеха; неприятность|C1|The broken buzzer is a nuisance.|Сломанный звонок — досадная помеха.|Wet shoes became a daily nuisance that winter.
tedious|утомительно однообразный|C1|Sorting the papers was tedious.|Разбирать бумаги было утомительно однообразно.|The task is tedious but only takes a few minutes.
mundane|обыденный; прозаичный|C1|The diary records mundane details.|Дневник фиксирует обыденные подробности.|Even a mundane errand can lead to an interesting conversation.
trivial|незначительный; пустяковый|C1|The delay seemed trivial at first.|Поначалу задержка казалась пустяковой.|They argued over a trivial difference in colour.
essential|необходимый; важнейший|B2|Good lighting is essential in this room.|В этой комнате необходимо хорошее освещение.|The bag contains only the essential items.
optional|необязательный|B2|The extra shelf is optional.|Дополнительная полка необязательна.|Delivery tracking is an optional service here.
practical|практичный; удобный в использовании|B2|The folding table is a practical choice.|Складной стол — практичный выбор.|Her suggestion was simple and practical.
impractical|непрактичный; неудобный в реальных условиях|C1|White fabric is impractical for this chair.|Белая ткань для этого кресла непрактична.|The plan became impractical once winter arrived.
feasible|осуществимый|C1|Is a weekend move feasible?|Осуществим ли переезд за выходные?|We checked whether the cheaper option was feasible.
manageable|посильный; поддающийся управлению|C1|The remaining work looks manageable.|Оставшаяся работа выглядит посильной.|Splitting the task made it more manageable.
time-consuming|требующий много времени|B2|Packing books is time-consuming.|Упаковка книг требует много времени.|The cheaper route is much more time-consuming.
time-saving|позволяющий экономить время|B2|This is a useful time-saving feature.|Это полезная функция для экономии времени.|We shared a few time-saving ideas for weekday cooking.
last-minute|сделанный в последний момент|B2|A last-minute change delayed the move.|Изменение в последний момент задержало переезд.|She dislikes last-minute shopping before a trip.
at short notice|с небольшим предупреждением заранее|C1|They found a room at short notice.|Они нашли комнату почти без предварительной подготовки.|It is difficult to arrange a delivery at short notice.
beforehand|заранее|B2|We measured the doorway beforehand.|Мы заранее измерили дверной проём.|I wish someone had explained the process beforehand.
afterwards|после этого; потом|B2|We can tidy the kitchen afterwards.|Мы можем потом прибрать кухню.|The meal was simple, and washing up afterwards was easy.
eventually|в конце концов|B2|We eventually found the missing key.|В конце концов мы нашли пропавший ключ.|The parcel eventually arrived at the right address.
occasionally|время от времени|B2|I occasionally work from the kitchen.|Время от времени я работаю на кухне.|The old door occasionally sticks in wet weather.
frequently|часто|B2|We use this cupboard frequently.|Мы часто пользуемся этим шкафом.|The bus stops here more frequently during the day.
rarely|редко|B2|We rarely need the spare room.|Нам редко нужна свободная комната.|That shop is rarely crowded before noon.
barely|едва; с трудом|B2|The sofa barely fits through the door.|Диван едва проходит в дверь.|I could barely hear the buzzer from the bedroom.
hardly ever|почти никогда|B2|I hardly ever use the front entrance.|Я почти никогда не пользуюсь парадным входом.|We hardly ever need to heat the spare room.
sooner or later|рано или поздно|B2|Sooner or later, we need more shelves.|Рано или поздно нам понадобятся дополнительные полки.|The loose handle will need attention sooner or later.
every now and then|время от времени|B2|We rearrange the room every now and then.|Время от времени мы переставляем мебель.|Every now and then, the neighbour brings us apples.
for the time being|пока; на данный момент|C1|This arrangement works for the time being.|Пока эта договорённость подходит.|We are keeping the old fridge for the time being.
in the meantime|тем временем; пока|B2|In the meantime, use the spare key.|Пока пользуйся запасным ключом.|The shelves arrive tomorrow; the boxes can stay here in the meantime.
on a regular basis|регулярно|B2|We check the supplies on a regular basis.|Мы регулярно проверяем запасы.|The shared kitchen is cleaned on a regular basis.
out of the blue|совершенно неожиданно|C1|The neighbour called out of the blue.|Сосед позвонил совершенно неожиданно.|An offer of a larger flat arrived out of the blue.
all of a sudden|вдруг; внезапно|B2|All of a sudden, the lights went out.|Вдруг погас свет.|The quiet hallway became crowded all of a sudden.
take turns|делать по очереди|B2|We take turns cooking dinner.|Мы готовим ужин по очереди.|The neighbours take turns watering the shared garden.
split the bill|разделить счёт|B2|Shall we split the bill equally?|Разделим счёт поровну?|The group decided to split the bill after lunch.
make room for|освободить место для|B2|We need to make room for the desk.|Нам нужно освободить место для стола.|I moved the coats to make room for your bag.
get rid of|избавляться от|B2|We should get rid of these empty boxes.|Нам стоит избавиться от этих пустых коробок.|She found a way to get rid of the smell.
make do with|обходиться имеющимся|C1|We can make do with two chairs.|Мы можем обойтись двумя стульями.|Until the parcel arrives, I will make do with the old one.
do without|обходиться без|B2|We can do without a second television.|Мы можем обойтись без второго телевизора.|I find it difficult to do without a proper desk.
put up with|мириться с; терпеть|B2|We cannot put up with this noise forever.|Мы не можем вечно мириться с этим шумом.|She was willing to put up with the small kitchen.
get the hang of|освоиться с; понять, как делать|C1|You will get the hang of the lock.|Ты освоишься с этим замком.|It took a few tries to get the hang of folding the table.
give it a go|попробовать|B2|The recipe looks easy; give it a go.|Рецепт выглядит простым; попробуй.|I had never repaired a zip but decided to give it a go.
on hand|под рукой; в наличии|C1|Keep a clean towel on hand.|Держи чистое полотенце под рукой.|We had no spare batteries on hand.
out of reach|вне досягаемости|B2|The top shelf is out of reach.|Верхняя полка находится вне досягаемости.|The fallen key was out of reach behind the cupboard.
at hand|под рукой; непосредственно рассматриваемый|C1|Use the tools you have at hand.|Используй инструменты, которые есть под рукой.|We focused on the task at hand rather than the whole move.
in a row|подряд|B2|The delivery was delayed twice in a row.|Доставку задержали два раза подряд.|We had guests three weekends in a row.
on and off|с перерывами; время от времени|C1|It rained on and off all afternoon.|Дождь шёл с перерывами весь день.|I worked on the cupboard on and off for a month.
once in a while|изредка|B2|We order dinner once in a while.|Изредка мы заказываем ужин.|Once in a while, the lift makes a strange noise.
take up space|занимать место|B2|Those boxes take up space we need.|Эти коробки занимают нужное нам место.|Folded chairs take up space too, just much less.
come in handy|пригодиться|C1|That spare cable may come in handy.|Этот запасной кабель может пригодиться.|The small torch did come in handy during the move.
in working order|в исправном состоянии|C1|The old cooker is still in working order.|Старая плита всё ещё исправна.|We checked that every appliance was in working order.
out of order|не работает; неисправен|B2|The lift is out of order again.|Лифт снова не работает.|A sign says the ticket machine is out of order.
make a habit of|завести привычку|B2|I make a habit of checking my keys.|Я привык проверять, на месте ли ключи.|We should make a habit of noting shared expenses.
`,
work: `
proposal|предложение для рассмотрения|B2|The team rejected the first proposal.|Команда отклонила первое предложение.|Her proposal includes a clear timetable.
agenda|повестка встречи|B2|The agenda contains three main questions.|В повестке встречи три основных вопроса.|Please add the delivery issue to the agenda.
minutes|протокол встречи|B2|The minutes record every agreed action.|Протокол фиксирует все согласованные действия.|I checked the minutes to confirm the deadline.
brief|краткое описание задачи и требований|B2|The design brief is only one page.|Краткое описание задачи дизайна занимает одну страницу.|The writer asked for a clearer brief.
briefing|инструктаж; краткое информирование|B2|The morning briefing lasted ten minutes.|Утренний инструктаж длился десять минут.|New staff receive a safety briefing before entering the site.
debrief|обсуждать итоги выполненной работы|C1|We should debrief after the event.|Нам следует обсудить итоги после мероприятия.|The team will debrief once everyone returns.
stakeholder|заинтересованная сторона|C1|Each stakeholder has different priorities.|У каждой заинтересованной стороны свои приоритеты.|We invited a stakeholder from the customer support team.
deliverable|конкретный сдаваемый результат работы|C1|The final deliverable is a written report.|Итоговый сдаваемый результат — письменный отчёт.|Every deliverable needs an owner and a due date.
milestone|важный промежуточный этап|B2|The first prototype is a major milestone.|Первый прототип — важный промежуточный этап.|We reviewed progress at each milestone.
timeline|график этапов и сроков|B2|The timeline leaves little room for delays.|График почти не оставляет места для задержек.|A simple timeline made the sequence clearer.
roadmap|план развития по этапам|C1|The roadmap covers the next six months.|План развития охватывает следующие шесть месяцев.|The team revised the roadmap after customer interviews.
workload|объём работы; нагрузка|B2|My workload increased after the launch.|Моя нагрузка выросла после запуска.|We need to distribute the workload more evenly.
capacity|имеющиеся возможности выполнить работу|C1|We have no capacity for another project.|У нас нет ресурсов для ещё одного проекта.|The estimate exceeds the team's current capacity.
allocation|распределение ресурсов|C1|The budget allocation changed this week.|Распределение бюджета изменилось на этой неделе.|Clear allocation of time helps avoid hidden overtime.
allocate|выделять; распределять|C1|We need to allocate time for review.|Нам нужно выделить время на проверку.|The manager will allocate tasks after the briefing.
delegate|передавать выполнение задачи другому|C1|You can delegate some routine tasks.|Ты можешь передать часть рутинных задач другим.|She learned to delegate without losing track of progress.
accountability|обязанность отвечать за результат|C1|The process needs clear accountability.|Процессу нужно чёткое распределение ответственности за результат.|Shared work does not remove individual accountability.
ownership|ответственность за ведение задачи|C1|Who has ownership of this decision?|Кто отвечает за ведение этого решения?|The handover should make ownership clear.
handover|передача дел|C1|The handover includes a list of open issues.|Передача дел включает список открытых вопросов.|A rushed handover caused confusion the next morning.
onboarding|введение нового сотрудника в работу|C1|The onboarding process takes a week.|Введение нового сотрудника в работу занимает неделю.|We added a glossary to the onboarding materials.
probation|испытательный срок на работе|C1|Her probation ends in June.|Её испытательный срок заканчивается в июне.|The review took place near the end of probation.
appraisal|оценка работы сотрудника|C1|The annual appraisal focused on clear examples.|Ежегодная оценка работы опиралась на конкретные примеры.|He prepared a list of achievements for the appraisal.
promotion|повышение по должности|B2|She received a promotion last year.|В прошлом году она получила повышение.|The promotion involved more responsibility, not just a new title.
vacancy|вакантная должность|B2|The company advertised a new vacancy.|Компания объявила о новой вакансии.|This vacancy requires experience with international teams.
applicant|соискатель; подавший заявку|B2|Each applicant received a written reply.|Каждый соискатель получил письменный ответ.|The applicant asked a thoughtful question about the role.
recruitment|подбор сотрудников|B2|Recruitment is taking longer than expected.|Подбор сотрудников занимает больше времени, чем ожидалось.|The recruitment process includes a practical task.
retain|удерживать; сохранять|C1|The company wants to retain experienced staff.|Компания хочет удержать опытных сотрудников.|We should retain the parts of the process that work.
turnover|текучесть кадров|C1|Staff turnover fell after the schedule changed.|Текучесть кадров снизилась после изменения графика.|High turnover can make it hard to preserve team knowledge.
redundancy|сокращение должности или штата|C1|The restructuring led to redundancy for some staff.|Реструктуризация привела к сокращению части сотрудников.|She asked for clarification about the redundancy process.
resign|увольняться по собственному желанию|B2|He decided to resign in September.|Он решил уволиться в сентябре.|She did not resign until she had discussed the handover.
notice period|срок предупреждения об увольнении|C1|My notice period is one month.|Мой срок предупреждения об увольнении — один месяц.|The handover will happen during the notice period.
remuneration|вознаграждение за труд|C1|The offer describes the total remuneration.|В предложении описано общее вознаграждение за труд.|Applicants asked whether remuneration included an annual bonus.
benefit package|набор дополнительных льгот от работодателя|B2|The benefit package includes extra leave.|Набор льгот включает дополнительный отпуск.|She compared the benefit package as well as the salary.
overtime|сверхурочная работа|B2|The team recorded all overtime.|Команда учла всю сверхурочную работу.|Frequent overtime suggested that the schedule was unrealistic.
flexible hours|гибкий рабочий график|B2|Flexible hours help me avoid rush hour.|Гибкий график помогает мне избегать часа пик.|The role offers flexible hours after the initial training.
hybrid working|сочетание работы из офиса и удалённо|B2|Hybrid working changed how we plan meetings.|Смешанный формат изменил то, как мы планируем встречи.|The team wrote clear expectations for hybrid working.
asynchronous|не требующий одновременного участия|C1|We use asynchronous updates across time zones.|Мы используем обновления без одновременного участия в разных часовых поясах.|An asynchronous discussion gives everyone time to consider the question.
alignment|согласованность целей и действий|C1|The meeting improved alignment between teams.|Встреча улучшила согласованность между командами.|We need alignment on the goal before choosing a method.
align|согласовывать; приводить в соответствие|C1|We should align the schedule with demand.|Нам следует согласовать график со спросом.|Their priorities do not align with the current plan.
coordinate|координировать|B2|She will coordinate the three teams.|Она будет координировать три команды.|It is difficult to coordinate deliveries from different suppliers.
collaborate|сотрудничать в работе|B2|The two departments rarely collaborate.|Эти два отдела редко сотрудничают.|We can collaborate on the draft without another meeting.
liaise|поддерживать рабочую связь между сторонами|C1|I will liaise with the finance team.|Я буду поддерживать связь с финансовой командой.|The coordinator must liaise with both organisers and suppliers.
negotiate|вести переговоры; согласовывать условия|B2|We need to negotiate a realistic deadline.|Нам нужно согласовать реалистичный срок.|She helped negotiate an agreement both teams could accept.
negotiation|переговоры|B2|The negotiation lasted several weeks.|Переговоры длились несколько недель.|Preparation made the negotiation more productive.
concession|уступка|C1|Both sides made a small concession.|Обе стороны пошли на небольшую уступку.|The final concession concerned delivery rather than price.
leeway|свобода действий; допустимый запас|C1|The schedule gives us little leeway.|График почти не оставляет нам запаса.|Managers have some leeway in arranging local shifts.
constraint|ограничение|C1|Time is our main constraint.|Время — наше главное ограничение.|The design works within a strict space constraint.
dependency|зависимость от другого этапа или условия|C1|This dependency could delay the launch.|Эта зависимость может задержать запуск.|The plan lists each dependency before assigning dates.
bottleneck|узкое место, задерживающее процесс|C1|Manual approval became the bottleneck.|Ручное согласование стало узким местом.|Removing one bottleneck revealed another in the delivery process.
blocker|препятствие, останавливающее работу|C1|Missing access is the only blocker.|Отсутствие доступа — единственное блокирующее препятствие.|Please describe the blocker rather than marking the task late.
escalate|передавать вопрос на более высокий уровень|C1|We may need to escalate the complaint.|Возможно, нам нужно передать жалобу на более высокий уровень.|The team agreed when to escalate unresolved problems.
contingency|непредвиденная ситуация; запасной вариант|C1|The plan includes a contingency budget.|План включает бюджет на непредвиденные обстоятельства.|We discussed a contingency if the venue became unavailable.
mitigate|смягчать отрицательное воздействие|C1|Extra training could mitigate the risk.|Дополнительное обучение могло бы снизить риск.|The team tried to mitigate disruption during the move.
implement|внедрять; осуществлять|B2|We can implement the change next week.|Мы можем внедрить изменение на следующей неделе.|A simple idea can still be difficult to implement well.
execute|выполнять намеченный план|C1|The team must execute the agreed plan.|Команда должна выполнить согласованный план.|We have enough people to execute the first phase.
oversee|осуществлять надзор за работой|C1|She will oversee the office move.|Она будет руководить переездом офиса.|A senior editor will oversee the final review.
streamline|упрощать и ускорять процесс|C1|We want to streamline the approval process.|Мы хотим упростить и ускорить процесс согласования.|One shared form could streamline routine requests.
prioritization|определение приоритетов|C1|The backlog needs careful prioritization.|Список задач требует внимательного определения приоритетов.|Good prioritization makes trade-offs visible.
backlog|накопленный список невыполненных задач|C1|The support backlog is shrinking.|Очередь нерешённых запросов поддержки сокращается.|We reviewed the backlog before accepting more work.
rework|переделка выполненной работы|C1|Clear requirements reduce unnecessary rework.|Понятные требования уменьшают ненужные переделки.|The late change created two days of rework.
scope creep|незаметное расширение объёма задачи|C1|The project suffered from scope creep.|Проект пострадал от незаметного расширения объёма.|A clear change process can make scope creep easier to spot.
sign-off|окончательное согласование|C1|We need written sign-off before printing.|Перед печатью нам нужно письменное окончательное согласование.|The draft is waiting for the client's sign-off.
approval|одобрение; согласование|B2|The purchase requires manager approval.|Покупка требует согласования руководителя.|Approval arrived after the team had revised the estimate.
endorse|публично или официально поддерживать|C1|The board may endorse the proposal.|Совет может официально поддержать предложение.|She would not endorse a plan she had not read.
commitment|обязательство; приверженность|B2|We cannot make that commitment yet.|Пока мы не можем взять на себя это обязательство.|Her commitment to the project remained strong.
commit to|обязаться; твёрдо решиться на|B2|Can you commit to the revised date?|Можешь взять на себя обязательство по новому сроку?|We should not commit to work beyond our capacity.
deliver on|выполнять обещанное|C1|We need to deliver on our promises.|Нам нужно выполнить обещания.|The new process failed to deliver on its main goal.
fall behind|отставать от графика|B2|We may fall behind if the parts arrive late.|Мы можем отстать от графика, если детали опоздают.|It is easier to ask early than to fall behind silently.
catch up|наверстать; догнать|B2|I need an hour to catch up.|Мне нужен час, чтобы наверстать.|The team can catch up once the missing information arrives.
keep me posted|держать меня в курсе|B2|Please keep me posted about the delivery.|Пожалуйста, держи меня в курсе доставки.|You can keep me posted by email while I am away.
touch base|кратко связаться для сверки дел|C1|Let us touch base on Friday.|Давай коротко сверимся в пятницу.|I will touch base after reviewing the notes.
circle back|вернуться к вопросу позже|C1|We can circle back after lunch.|Мы можем вернуться к вопросу после обеда.|The manager promised to circle back with a clearer estimate.
loop in|подключать к обсуждению|C1|Please loop in the support team.|Пожалуйста, подключи к обсуждению команду поддержки.|We should loop in anyone affected by the change.
up to speed|в курсе текущего положения дел|C1|The notes brought everyone up to speed.|Заметки помогли всем войти в курс дела.|She was up to speed before joining the meeting.
get the ball rolling|запустить дело; начать работу|C1|A first draft will get the ball rolling.|Первый черновик поможет начать работу.|We booked a short meeting to get the ball rolling.
move forward|двигаться дальше; продолжать работу|B2|We need a decision to move forward.|Нам нужно решение, чтобы двигаться дальше.|The team can move forward with the agreed version.
put on hold|временно приостановить|B2|The project was put on hold.|Проект временно приостановили.|Hiring may be put on hold until the review is complete.
in the pipeline|в разработке; на подходе|C1|Several improvements are in the pipeline.|Несколько улучшений находятся в разработке.|We cannot promise dates for everything in the pipeline.
on track|идущий по плану|B2|The project is still on track.|Проект всё ещё идёт по плану.|A weekly review helps us stay on track.
ahead of schedule|раньше намеченного срока|B2|The team finished ahead of schedule.|Команда закончила раньше намеченного срока.|The early delivery put us ahead of schedule.
behind schedule|с отставанием от графика|B2|The installation is behind schedule.|Установка отстаёт от графика.|We were behind schedule before the extra request arrived.
under pressure|под давлением обстоятельств|B2|People make mistakes under pressure.|Под давлением обстоятельств люди ошибаются.|She remained clear and polite under pressure.
at stake|под угрозой; на кону|C1|More than money is at stake.|На кону не только деньги.|The team discussed what was at stake if delivery failed.
bottom line|главный итог; суть|C1|The bottom line is that we need time.|Суть в том, что нам нужно время.|The report's bottom line is clear despite its length.
action point|конкретное действие по итогам встречи|B2|Every action point needs an owner.|У каждого действия по итогам встречи должен быть ответственный.|The minutes include one action point for our team.
follow-through|доведение начатого до конца|C1|The idea needs better follow-through.|Идее не хватает последовательного доведения до результата.|Her careful follow-through made the agreement useful.
oversight|недосмотр; упущение|C1|The missing attachment was an oversight.|Отсутствующее вложение было недосмотром.|A simple checklist could have prevented the oversight.
setback|неудача, задерживающая продвижение|B2|The delay was a temporary setback.|Задержка была временной неудачей.|One setback does not erase the team's progress.
disruption|нарушение нормальной работы|C1|The move caused minimal disruption.|Переезд почти не нарушил нормальную работу.|Customers received a warning about possible disruption.
resilience|способность восстанавливаться после трудностей|C1|The team showed resilience after the setback.|После неудачи команда показала способность восстановиться.|The exercise tested organisational resilience under pressure.
initiative|самостоятельное начинание; инициатива|B2|She took the initiative to rewrite the guide.|Она сама взялась переписать руководство.|The initiative started with a small group of volunteers.
proactive|действующий заранее, предупреждая проблемы|C1|A proactive approach saved us time.|Заблаговременный подход сэкономил нам время.|The support team became more proactive about recurring questions.
resourceful|находчивый|C1|Our resourceful colleague found another venue.|Наш находчивый коллега нашёл другое помещение.|A resourceful team can make good use of limited equipment.
thorough|тщательный|B2|The review was unusually thorough.|Проверка была необычайно тщательной.|We need a thorough handover before she leaves.
meticulous|скрупулёзный; внимательный к деталям|C1|He keeps meticulous project notes.|Он ведёт скрупулёзные заметки по проекту.|Meticulous preparation made the event run smoothly.
competent|компетентный; способный хорошо выполнять работу|B2|She is a competent project coordinator.|Она компетентный координатор проектов.|A competent response explains both the result and its limits.
conscientious|добросовестный|C1|He is a conscientious colleague.|Он добросовестный коллега.|The conscientious reviewer checked every reference.
transparent|прозрачный; открыто объясняемый|B2|We need a transparent selection process.|Нам нужен прозрачный процесс отбора.|The team was transparent about the reasons for the delay.
confidential|конфиденциальный|B2|The document contains confidential information.|Документ содержит конфиденциальную информацию.|She marked the interview notes as confidential.
discretion|осмотрительность; право решать самостоятельно|C1|Please handle the complaint with discretion.|Пожалуйста, разбери жалобу деликатно и осмотрительно.|Local managers have discretion over minor schedule changes.
`,
tech: `
endpoint|адрес обращения к определённой функции API|B2|This endpoint returns the current settings.|Этот адрес API возвращает текущие настройки.|The documentation lists a separate endpoint for each operation.
payload|полезное содержимое сообщения или запроса|C1|The payload contains three required fields.|Полезное содержимое запроса содержит три обязательных поля.|We compared the payload with the documented example.
header|заголовок запроса или ответа|B2|The header specifies the content type.|Заголовок указывает тип содержимого.|A missing header changed how the server handled the request.
parameter|параметр|B2|This parameter controls the page size.|Этот параметр управляет размером страницы.|The function ignores an optional parameter when it is absent.
argument value|значение аргумента функции|B2|The argument value must be positive.|Значение аргумента должно быть положительным.|The error message includes the invalid argument value.
return value|возвращаемое функцией значение|B2|The return value is an empty list.|Возвращаемое значение — пустой список.|The caller checks the return value before continuing.
callback|функция, вызываемая после события|C1|The callback runs after loading finishes.|Функция обратного вызова выполняется после завершения загрузки.|We pass a callback to handle the user's selection.
event handler|обработчик события|B2|The event handler saves the new setting.|Обработчик события сохраняет новую настройку.|Removing the event handler stopped the duplicate action.
middleware|промежуточный обработчик запросов|C1|The middleware adds a request identifier.|Промежуточный обработчик добавляет идентификатор запроса.|This middleware runs before the application route.
authentication|проверка подлинности пользователя|C1|Authentication happens before protected data loads.|Проверка подлинности проходит до загрузки защищённых данных.|The error concerns authentication rather than the query format.
authorization|проверка прав на действие или ресурс|C1|Authorization determines which files are accessible.|Проверка прав определяет, какие файлы доступны.|The service checks authorization for every protected operation.
credential|данные или средство подтверждения доступа|C1|The credential has expired.|Данные доступа утратили срок действия.|The application does not print the credential in its logs.
token|токен доступа или другой служебный маркер|B2|The token expires after a short period.|Срок действия токена истекает через короткое время.|The response includes a token for the next page.
encryption|шифрование|C1|Encryption protects the contents during transmission.|Шифрование защищает содержимое при передаче.|The document explains where encryption is applied.
checksum|контрольная сумма|C1|The checksum did not match the download.|Контрольная сумма не совпала с загруженным файлом.|We compared the checksum before opening the archive.
hash|хеш; результат хеш-функции|C1|The file hash changed after the edit.|Хеш файла изменился после правки.|The tool prints a hash for each generated artifact.
certificate|цифровой сертификат|B2|The certificate identifies the server.|Сертификат подтверждает идентичность сервера.|The browser rejected the expired certificate.
cache|кеш; временно сохранённые данные|B2|The cache still contains the old image.|В кеше всё ещё хранится старое изображение.|The second request was served from the cache.
invalidate|делать недействительным; сбрасывать кеш|C1|The update will invalidate the cached result.|Обновление сделает сохранённый результат недействительным.|Changing that setting can invalidate an earlier assumption.
expiration|истечение срока действия|C1|The token has an expiration date.|У токена есть срок окончания действия.|The cache policy controls expiration of stored responses.
latency|задержка до получения результата|C1|Network latency increased during the test.|Сетевая задержка выросла во время проверки.|Low latency matters for interactive applications.
throughput|объём работы за единицу времени|C1|The queue improved overall throughput.|Очередь повысила общий объём обработки за единицу времени.|We measured throughput separately from response time.
bandwidth|пропускная способность канала|B2|Large images consume extra bandwidth.|Большие изображения расходуют дополнительную пропускную способность.|The download slowed when available bandwidth fell.
timeout|истечение времени ожидания|B2|The request ended with a timeout.|Запрос завершился по истечении времени ожидания.|A longer timeout may hide a slow dependency.
retry|повторная попытка операции|B2|The second retry succeeded.|Вторая повторная попытка удалась.|The client waits briefly before each retry.
backoff|увеличение паузы между повторными попытками|C1|The client uses exponential backoff.|Клиент использует экспоненциальное увеличение пауз.|A backoff policy reduces repeated pressure on the service.
rate limit|ограничение частоты запросов|B2|The client exceeded the rate limit.|Клиент превысил ограничение частоты запросов.|The response explains when the rate limit resets.
throttle|ограничивать скорость обработки|C1|The server may throttle excessive requests.|Сервер может ограничивать чрезмерно частые запросы.|We throttle background work to keep the interface responsive.
batch|пакет объектов для совместной обработки|B2|The next batch contains fifty records.|Следующий пакет содержит пятьдесят записей.|Processing a batch reduced the number of database calls.
queue|очередь задач или сообщений|B2|The queue contains three pending jobs.|В очереди находятся три ожидающие задачи.|A failed job returns to the queue for a later attempt.
concurrency|одновременное продвижение нескольких задач|C1|The setting limits concurrency to four tasks.|Настройка ограничивает одновременную работу четырьмя задачами.|Higher concurrency did not improve this workload.
parallelism|выполнение нескольких задач одновременно|C1|The benchmark benefits from parallelism.|Этот нагрузочный пример выигрывает от параллельного выполнения.|Parallelism can reduce elapsed time when resources are available.
race condition|ошибка из-за непредсказуемого порядка выполнения|C1|A race condition caused the stale result.|Ошибка порядка выполнения привела к устаревшему результату.|The bug only appeared during a race condition between two requests.
deadlock|взаимная блокировка|C1|The transaction ended in a deadlock.|Транзакция завершилась взаимной блокировкой.|The trace shows how the deadlock developed.
thread-safe|безопасный при доступе из нескольких потоков|C1|This collection is thread-safe.|Эта коллекция безопасна для нескольких потоков.|The documentation does not claim that the wrapper is thread-safe.
atomic|выполняемый как неделимая операция|C1|The counter update must be atomic.|Обновление счётчика должно быть неделимым.|An atomic operation prevents observers from seeing a partial change.
idempotent|дающий тот же эффект при повторении|C1|The update operation is idempotent.|Операция обновления даёт тот же эффект при повторении.|An idempotent request can simplify recovery from uncertain delivery.
transaction|транзакция; согласованная группа операций|C1|The transaction updates both records.|Транзакция обновляет обе записи.|The database rolled back the transaction after the failure.
rollback|откат изменений|B2|The team prepared a rollback plan.|Команда подготовила план отката.|The rollback restored the previous application version.
migration|перенос или изменение структуры данных|B2|The migration preserves existing progress.|Миграция сохраняет существующий прогресс.|We tested the migration with an older database copy.
schema|схема структуры данных|C1|The schema defines the required fields.|Схема определяет обязательные поля.|The incoming data no longer matches the expected schema.
query|запрос к данным|B2|The query returns only active records.|Запрос возвращает только активные записи.|We inspected the query before changing the interface.
index|индекс для ускорения поиска данных|B2|The new index speeds up this query.|Новый индекс ускоряет этот запрос.|The database can use the index to find matching rows.
pagination|разбиение результатов на страницы|C1|Pagination keeps the result list manageable.|Разбиение на страницы делает список результатов удобным.|The endpoint supports pagination through a continuation token.
cursor|указатель позиции в наборе результатов|C1|The response includes the next cursor.|Ответ содержит указатель следующей позиции.|Passing the cursor retrieves the following page.
serialize|преобразовывать структуру данных в сохраняемый формат|C1|We serialize the state as JSON.|Мы преобразуем состояние в JSON для сохранения.|The library can serialize dates into text.
deserialize|восстанавливать структуру из сохранённого формата|C1|The client will deserialize the response.|Клиент восстановит структуру из ответа.|We deserialize the saved state when the app starts.
parse|разбирать текст в структурированные данные|B2|The function can parse a valid date.|Функция умеет разбирать корректную дату.|The application could not parse the malformed response.
validate|проверять соответствие требованиям|B2|We validate the input before saving.|Мы проверяем ввод перед сохранением.|The server must validate the field independently of the browser.
sanitize|очищать ввод от нежелательных элементов|C1|The renderer will sanitize imported markup.|Средство отображения очистит импортированную разметку.|The function is intended to sanitize text for this specific context.
escape|экранировать специальные символы|C1|We escape special characters in the label.|Мы экранируем специальные символы в подписи.|The output helper must escape text before inserting it into HTML.
malformed|неправильно сформированный|C1|The server received a malformed request.|Сервер получил неправильно сформированный запрос.|A malformed date should produce a useful error message.
nullable|допускающий отсутствие значения|C1|The middle-name field is nullable.|Поле второго имени допускает отсутствие значения.|A nullable result needs an explicit check before use.
immutable|неизменяемый после создания|C1|This object is immutable.|Этот объект нельзя изменить после создания.|An immutable value can be shared without accidental modification.
mutable|изменяемый после создания|C1|The function updates a mutable list.|Функция обновляет изменяемый список.|Sharing mutable state made the error difficult to reproduce.
deprecated API|интерфейс, использование которого больше не рекомендуется|C1|The guide still uses a deprecated API.|Руководство всё ещё использует устаревающий интерфейс.|We replaced the deprecated API before upgrading the library.
backward-compatible|совместимый с предыдущими версиями|C1|The update is backward-compatible.|Обновление совместимо с предыдущими версиями.|A backward-compatible change preserves existing callers.
breaking change|изменение, нарушающее совместимость|C1|Renaming this field is a breaking change.|Переименование этого поля нарушает совместимость.|The release notes highlight one breaking change.
regression|повторно возникшая ошибка после изменения|B2|The update introduced a scrolling regression.|Обновление внесло повторную ошибку прокрутки.|The test reproduces the regression seen in the previous build.
edge case|редкий случай на границе условий|C1|An empty list is an important edge case.|Пустой список — важный граничный случай.|The report describes an edge case involving midnight.
reproducible|воспроизводимый при повторной проверке|C1|The failure is reproducible on this device.|Сбой воспроизводится на этом устройстве.|A reproducible example helped the maintainer locate the problem.
intermittent|проявляющийся время от времени|C1|The network failure is intermittent.|Сетевой сбой проявляется время от времени.|An intermittent bug may disappear during a short demonstration.
deterministic|дающий определённый результат при тех же условиях|C1|The calculation is deterministic.|Расчёт даёт определённый результат при одинаковых условиях.|A deterministic test is easier to compare across runs.
flaky|нестабильный; то проходящий, то падающий|C1|The test is flaky under heavy load.|Тест нестабилен при высокой нагрузке.|A flaky check can hide a real regression.
stack trace|цепочка вызовов в момент ошибки|C1|The stack trace points to the parser.|Цепочка вызовов указывает на средство разбора.|We saved the stack trace without including private data.
log entry|запись в журнале событий|B2|This log entry marks the failed request.|Эта запись журнала отмечает неудачный запрос.|The first log entry appears before the database call.
diagnostic|относящийся к выяснению причины сбоя|C1|The build includes a diagnostic screen.|Сборка включает диагностический экран.|Diagnostic output helped separate network and interface failures.
observability|возможность понять состояние по внешним сигналам|C1|The service needs better observability.|Сервису нужна лучшая наблюдаемость состояния.|Useful logs and metrics improved observability during the incident.
telemetry|автоматически собираемые данные о работе|C1|Telemetry is disabled in this build.|Сбор данных о работе отключён в этой сборке.|The settings page explains what telemetry the service collects.
profiling|измерение затрат ресурсов по участкам программы|C1|Profiling revealed a slow rendering step.|Профилирование обнаружило медленный этап отображения.|We used profiling before rewriting the loop.
memory leak|утечка памяти|B2|A memory leak slowed the application.|Утечка памяти замедляла приложение.|The memory leak appeared after opening the screen repeatedly.
garbage collection|автоматическое освобождение ненужных объектов|C1|Garbage collection briefly paused the process.|Автоматическая очистка памяти ненадолго приостановила процесс.|The profile showed frequent garbage collection during rendering.
footprint|объём потребляемых ресурсов|C1|The update reduced the memory footprint.|Обновление уменьшило объём используемой памяти.|A smaller storage footprint leaves room for more content.
overhead|дополнительные затраты ресурсов|C1|The wrapper adds little overhead.|Обёртка добавляет небольшие накладные расходы.|Creating a new connection each time introduces overhead.
runtime|среда или время выполнения программы|B2|The error occurs at runtime.|Ошибка возникает во время выполнения.|The bundled runtime works without a separate installation.
compile|преобразовывать исходный код в исполняемую форму|B2|The project will not compile yet.|Проект пока не компилируется.|We compile the native package after building the interface.
build artifact|результат сборки программы|C1|The APK is the final build artifact.|APK — итоговый результат сборки.|The build artifact includes all required learning material.
bundle|объединённый пакет ресурсов|B2|The bundle includes the font files.|Пакет включает файлы шрифтов.|The new bundle is slightly larger because it contains more examples.
package manager|средство установки программных зависимостей|B2|The package manager restored the exact versions.|Средство зависимостей восстановило точные версии.|The package manager uses the lockfile during installation.
lockfile|файл с зафиксированными версиями зависимостей|C1|The lockfile changed after installation.|Файл зафиксированных версий изменился после установки.|Keeping the lockfile helps make builds reproducible.
versioning|назначение и ведение версий|C1|The project uses semantic versioning.|Проект использует семантическое назначение версий.|Consistent versioning makes compatibility changes easier to follow.
changelog|список изменений по версиям|B2|The changelog explains the new behaviour.|Список изменений объясняет новое поведение.|I checked the changelog before updating the dependency.
release candidate|предварительная сборка перед выпуском|C1|The release candidate passed the smoke checks.|Предварительная сборка прошла основные проверки.|The team fixed one issue before publishing the release candidate.
hotfix|срочное исправление выпущенной версии|C1|The hotfix addresses the login failure.|Срочное исправление устраняет сбой входа.|The hotfix contains only the necessary change.
feature flag|переключатель доступности функции|C1|A feature flag controls the new view.|Переключатель управляет доступностью нового экрана.|The team disabled the feature flag while investigating.
environment variable|переменная среды выполнения|B2|The path comes from an environment variable.|Путь берётся из переменной среды.|The build reads an environment variable to locate the SDK.
configuration|настройки системы|B2|The configuration differs between devices.|Настройки отличаются на разных устройствах.|We compared the configuration before changing the code.
provision|подготавливать и выделять ресурсы|C1|The script can provision a test database.|Сценарий может подготовить тестовую базу данных.|We provision a separate environment for the demonstration.
container|изолированная среда запуска приложения|C1|The service runs in a container.|Сервис работает в контейнере.|The container includes the runtime but uses external storage.
sandbox|ограниченная среда выполнения|C1|The sandbox prevents access to that folder.|Ограниченная среда не позволяет обратиться к этой папке.|The command works outside the sandbox with the required permission.
mounted|подключённый как файловая система или том|C1|The data directory is mounted separately.|Каталог данных подключён отдельно.|The mounted volume remains after the container stops.
read-only|доступный только для чтения|B2|The report uses a read-only connection.|Отчёт использует соединение только для чтения.|A read-only view prevents accidental edits.
persist|сохраняться между запусками|C1|The settings persist after a restart.|Настройки сохраняются после перезапуска.|The app must persist progress before leaving the lesson.
restore|восстанавливать прежнее состояние|B2|The backup can restore the old settings.|Резервная копия может восстановить прежние настройки.|We restore the session when the app opens.
backup|резервная копия|B2|The backup contains yesterday's records.|Резервная копия содержит вчерашние записи.|We checked the backup before changing the data format.
corrupted|повреждённый, о данных|C1|The archive appears to be corrupted.|Похоже, архив повреждён.|The reader reports a corrupted file without overwriting it.
stale|устаревший, о сохранённых данных|C1|The interface displayed a stale response.|Интерфейс показал устаревший ответ.|A stale cache entry explained the difference between devices.
upstream|расположенный раньше в цепочке поставки данных|C1|The upstream service returned incomplete data.|Предшествующий сервис вернул неполные данные.|The failure began upstream of the interface.
downstream|расположенный дальше в цепочке обработки|C1|The change affected several downstream systems.|Изменение затронуло несколько последующих систем.|A downstream cache continued to serve the older result.
graceful degradation|сохранение части функций при сбое|C1|The design supports graceful degradation offline.|Проект предусматривает сохранение части функций без сети.|Graceful degradation keeps essential actions available during a failure.
`,
feelings: `
affection|тёплая привязанность|B2|She spoke about her uncle with affection.|Она говорила о дяде с тёплой привязанностью.|Small gestures can express affection without many words.
attachment|эмоциональная привязанность|C1|He felt a strong attachment to the house.|Он чувствовал сильную привязанность к дому.|The story explores her attachment to familiar places.
fond of|испытывающий тёплую симпатию к|B2|I am fond of our quiet neighbour.|Я тепло отношусь к нашему тихому соседу.|She grew fond of the little town.
admire|восхищаться; уважать качества|B2|I admire her patience.|Я восхищаюсь её терпением.|You can admire someone without agreeing with every opinion.
admiration|восхищение|B2|His honesty earned their admiration.|Его честность вызвала их восхищение.|She described the achievement with quiet admiration.
respectful|уважительный|B2|The reply was firm but respectful.|Ответ был твёрдым, но уважительным.|A respectful disagreement leaves room for further conversation.
mutual|взаимный|B2|The friendship rests on mutual respect.|Дружба основана на взаимном уважении.|They reached a mutual understanding after the conversation.
reciprocal|обоюдный; основанный на взаимном обмене|C1|Their support was reciprocal.|Их поддержка была обоюдной.|The story shows how reciprocal kindness builds trust.
empathy|способность понимать чужие чувства|C1|The response showed real empathy.|Ответ показал настоящее понимание чужих чувств.|Empathy does not require having lived the same experience.
sympathy|сочувствие|B2|She expressed sympathy for his loss.|Она выразила сочувствие его утрате.|The character gains the reader's sympathy early in the story.
compassion|сострадание|C1|The nurse treated him with compassion.|Медсестра отнеслась к нему с состраданием.|The novel asks how compassion changes difficult decisions.
empathetic|понимающий чувства другого|C1|Her empathetic response helped me relax.|Её понимающий ответ помог мне расслабиться.|An empathetic listener does not rush to give advice.
supportive|оказывающий поддержку|B2|My friends were supportive during the move.|Друзья поддерживали меня во время переезда.|A supportive environment makes it easier to ask questions.
reassure|успокаивать; возвращать уверенность|B2|The clear explanation helped reassure her.|Понятное объяснение помогло её успокоить.|He called to reassure us that everyone had arrived.
reassurance|поддерживающее заверение|C1|She needed reassurance before the interview.|Перед собеседованием ей нужно было поддерживающее заверение.|The message offered reassurance without making unrealistic promises.
comforting|утешающий; успокаивающий|B2|The familiar routine felt comforting.|Знакомый распорядок успокаивал.|A comforting message arrived at exactly the right moment.
vulnerable|уязвимый|C1|Admitting the mistake made him feel vulnerable.|Признание ошибки заставило его почувствовать себя уязвимым.|The memoir describes a vulnerable period in her life.
vulnerability|уязвимость|C1|Her honesty revealed unexpected vulnerability.|Её откровенность раскрыла неожиданную уязвимость.|The conversation changed when he acknowledged his vulnerability.
insecure|неуверенный в себе|B2|I felt insecure in the new group.|Я чувствовал себя неуверенно в новой группе.|He becomes insecure when he compares himself with others.
self-conscious|скованный из-за внимания к себе|C1|She felt self-conscious about her accent.|Она стеснялась своего акцента.|The camera made everyone unusually self-conscious.
self-esteem|самооценка; чувство собственной ценности|C1|The experience affected his self-esteem.|Этот опыт повлиял на его самооценку.|The article distinguishes confidence from self-esteem.
self-doubt|сомнения в себе|C1|She struggled with self-doubt before the talk.|Перед выступлением она мучилась сомнениями в себе.|Even an experienced writer can feel self-doubt.
assertive|уверенно отстаивающий свои интересы|C1|Her tone was assertive rather than rude.|Её тон был уверенным, а не грубым.|An assertive request states the need clearly.
reserved|сдержанный; замкнутый|B2|He seems reserved until you know him.|Он кажется замкнутым, пока не узнаешь его.|The reserved character reveals little about her past.
outgoing|общительный|B2|My sister is more outgoing than I am.|Моя сестра общительнее меня.|His outgoing manner helped him meet the neighbours.
introverted|предпочитающий менее интенсивное общение|C1|She is introverted but enjoys close friendships.|Она интровертна, но ценит близкую дружбу.|The book gives an introverted character a convincing inner voice.
approachable|располагающий к общению|C1|The new teacher seems approachable.|Новый преподаватель кажется располагающим к общению.|An approachable manager makes questions easier to ask.
aloof|отстранённый; холодный в общении|C1|His formal reply seemed aloof.|Его официальный ответ показался отстранённым.|The character appears aloof but is actually shy.
indifferent|безразличный|C1|She was indifferent to their praise.|Она была безразлична к их похвале.|An indifferent response hurt more than an honest disagreement.
apathy|апатия; отсутствие интереса|C1|The story captures his growing apathy.|История передаёт его растущую апатию.|The campaign struggled to overcome public apathy.
enthusiastic|полный энтузиазма|B2|They were enthusiastic about the trip.|Они с энтузиазмом отнеслись к поездке.|Her enthusiastic reply made the invitation feel welcome.
eager|сильно желающий; полный ожидания|B2|I am eager to hear your story.|Мне очень хочется услышать твою историю.|The children were eager to explore the garden.
reluctant|делающий что-либо неохотно|B2|He was reluctant to ask for help.|Он неохотно просил о помощи.|She remained reluctant to discuss the argument.
hesitant|колеблющийся; нерешительный|C1|Her answer was hesitant at first.|Поначалу её ответ был нерешительным.|I felt hesitant about joining a group of strangers.
ambivalent|испытывающий противоречивые чувства|C1|She felt ambivalent about leaving home.|Она испытывала противоречивые чувства по поводу отъезда.|His ambivalent response reflected both excitement and worry.
apprehensive|опасающийся предстоящего|C1|I was apprehensive before the first meeting.|Перед первой встречей я испытывал опасения.|They felt apprehensive about such a major change.
uneasy|испытывающий беспокойство или неловкость|B2|The silence made me uneasy.|Молчание заставило меня почувствовать беспокойство.|She felt uneasy about accepting such an expensive gift.
unsettled|выбитый из привычного состояния|C1|I felt unsettled after the conversation.|После разговора я чувствовал себя выбитым из колеи.|The unexpected news left the family unsettled.
disconcerting|смущающий; вызывающий растерянность|C1|His sudden silence was disconcerting.|Его внезапное молчание сбивало с толку.|It was disconcerting to meet someone who knew so much about me.
bewildered|растерянный; совершенно озадаченный|C1|She looked bewildered by the reaction.|Она выглядела совершенно озадаченной реакцией.|The bewildered visitor asked where everyone had gone.
perplexed|недоумевающий|C1|I was perplexed by his change of tone.|Я недоумевал из-за изменения его тона.|The message left several readers perplexed.
overjoyed|чрезвычайно обрадованный|C1|They were overjoyed to see her.|Они были чрезвычайно рады её видеть.|He sounded overjoyed when he called with the news.
delighted|очень довольный; обрадованный|B2|I am delighted that you can come.|Я очень рад, что ты сможешь прийти.|She was delighted with the thoughtful present.
content|довольный своим положением|B2|He seems content with a quieter life.|Он, кажется, доволен более спокойной жизнью.|I felt content simply sitting with old friends.
fulfilled|чувствующий удовлетворение и реализованность|C1|She feels fulfilled by teaching.|Преподавание даёт ей чувство удовлетворения и реализованности.|The character is successful but does not feel fulfilled.
disappointed|разочарованный|B2|I was disappointed by the abrupt ending.|Я был разочарован резкой концовкой.|He looked disappointed but accepted the decision.
disillusioned|утративший прежние иллюзии|C1|She became disillusioned with the organisation.|Она утратила прежние иллюзии об организации.|The narrator sounds disillusioned rather than simply angry.
disheartened|павший духом|C1|The rejection left him disheartened.|Отказ заставил его пасть духом.|They felt disheartened after several unsuccessful attempts.
devastated|потрясённый горем или сильным разочарованием|C1|She was devastated by the news.|Она была потрясена этой новостью.|The loss left the family devastated.
heartbroken|с разбитым сердцем|C1|He sounded heartbroken when he called.|Когда он позвонил, было слышно, что его сердце разбито.|The heartbroken character returns to her childhood home.
grief|глубокое горе, особенно после утраты|C1|The novel treats grief with sensitivity.|Роман деликатно обращается с темой горя.|Her letter describes grief without trying to simplify it.
bereavement|утрата близкого человека|C1|She took leave after a bereavement.|Она взяла отпуск после утраты близкого.|The story follows a family through bereavement.
nostalgia|ностальгия|C1|The old photographs filled him with nostalgia.|Старые фотографии наполнили его ностальгией.|The essay mixes nostalgia with honest criticism of the past.
longing|сильная тоска или стремление к чему-либо|C1|She felt a longing for home.|Она чувствовала сильную тоску по дому.|The final scene conveys longing without any dialogue.
homesick|тоскующий по дому|B2|I felt homesick during the first week.|В первую неделю я тосковал по дому.|A familiar meal helped the homesick student feel less alone.
loneliness|одиночество как переживание|B2|The book explores loneliness in a large city.|Книга исследует переживание одиночества в большом городе.|Company does not always remove a sense of loneliness.
solitude|уединение|C1|She enjoys the solitude of early mornings.|Ей нравится уединение ранним утром.|The character seeks solitude after weeks of constant company.
belonging|чувство принадлежности к группе или месту|C1|The club gave him a sense of belonging.|Клуб дал ему чувство принадлежности.|Shared routines can create belonging in an unfamiliar place.
alienated|чувствующий отчуждение|C1|He felt alienated from his old friends.|Он чувствовал отчуждение от старых друзей.|The impersonal message left new members alienated.
excluded|оставленный за пределами группы или участия|B2|She felt excluded from the conversation.|Она чувствовала себя исключённой из разговора.|The game made sure nobody felt excluded.
resentment|стойкая обида; недовольство несправедливостью|C1|Unequal effort created resentment.|Неравные усилия породили обиду.|The letter reveals resentment beneath its polite language.
bitterness|озлобленность; горечь обиды|C1|He spoke without bitterness about the past.|Он говорил о прошлом без озлобленности.|The ending offers reconciliation instead of bitterness.
envy|зависть к тому, что есть у другого|B2|She admitted feeling envy at his success.|Она призналась, что завидует его успеху.|Admiration and envy can appear in the same sentence.
jealousy|ревность; страх потерять привязанность|B2|The argument began with jealousy.|Ссора началась из-за ревности.|The play shows how jealousy distorts ordinary events.
guilt|чувство вины|B2|He felt guilt about missing the visit.|Он чувствовал вину за пропущенный визит.|The apology came from guilt as well as affection.
remorse|глубокое раскаяние|C1|She expressed genuine remorse for the harm.|Она выразила искреннее раскаяние за причинённый вред.|The character's remorse becomes clear through his actions.
regret|сожаление|B2|My only regret is leaving too soon.|Моё единственное сожаление — что я ушёл слишком рано.|The letter contains both gratitude and regret.
ashamed|испытывающий стыд|B2|I felt ashamed of my rude reply.|Мне было стыдно за мой грубый ответ.|He was ashamed to admit that he had not listened.
embarrassed|смущённый; испытывающий неловкость|B2|She looked embarrassed by the attention.|Она выглядела смущённой из-за внимания.|I was embarrassed when I forgot his name.
humiliated|униженный|C1|He felt humiliated by the public criticism.|Он почувствовал себя униженным публичной критикой.|The scene explains why the character leaves feeling humiliated.
offended|задетый; оскорблённый|B2|She was offended by the careless joke.|Её задела неосторожная шутка.|He seemed more surprised than offended.
outraged|сильно возмущённый|C1|They were outraged by the unfair treatment.|Они были сильно возмущены несправедливым обращением.|The outraged replies focused on the lack of an explanation.
irritated|раздражённый|B2|I felt irritated by the constant interruptions.|Меня раздражали постоянные перебивания.|She sounded irritated but remained polite.
exasperated|крайне раздражённый после повторяющихся трудностей|C1|He gave an exasperated sigh.|Он вздохнул с крайним раздражением.|The repeated misunderstanding left everyone exasperated.
agitated|взволнованный и беспокойный|C1|She became agitated while waiting.|Ожидая, она стала взволнованной и беспокойной.|His agitated manner contrasted with the calm letter.
composed|сохраняющий самообладание|C1|She remained composed during the disagreement.|Она сохраняла самообладание во время разногласия.|He looked composed even though the news surprised him.
level-headed|рассудительный; не теряющий голову|C1|We needed a level-headed response.|Нам нужна была рассудительная реакция.|Her level-headed advice helped the group decide.
easy-going|лёгкий в общении; спокойный|B2|My flatmate is easy-going.|Мой сосед по квартире лёгок в общении.|His easy-going manner made the visit relaxed.
short-tempered|вспыльчивый|C1|He becomes short-tempered when tired.|Устав, он становится вспыльчивым.|The short-tempered character gradually learns to listen.
impulsive|действующий под влиянием порыва|C1|It was an impulsive decision.|Это было импульсивное решение.|She is less impulsive when she has time to reflect.
sensitive|чувствительный; восприимчивый|B2|He is sensitive to changes in tone.|Он чувствителен к изменениям тона.|The topic needs a sensitive response.
insensitive|нечуткий|C1|That was an insensitive remark.|Это было нечуткое замечание.|She apologised for sounding insensitive to his worries.
tactful|тактичный|C1|Her refusal was clear and tactful.|Её отказ был ясным и тактичным.|A tactful question gave him room to explain.
blunt|прямолинейный до резкости|C1|His blunt answer surprised me.|Его резко прямой ответ удивил меня.|She prefers a blunt explanation to an evasive one.
frank|откровенный; прямой|C1|We had a frank conversation.|У нас состоялся откровенный разговор.|His frank account includes mistakes as well as successes.
sincere|искренний|B2|The apology sounded sincere.|Извинение прозвучало искренне.|She made a sincere effort to understand his position.
insincere|неискренний|C1|The compliment felt insincere.|Комплимент показался неискренним.|An insincere apology can make a disagreement worse.
deceptive|обманчивый; создающий ложное впечатление|C1|His calm expression was deceptive.|Его спокойное выражение лица было обманчивым.|The apparent simplicity of the conversation is deceptive.
manipulative|пытающийся управлять другими скрытым давлением|C1|She found the message manipulative.|Она сочла сообщение манипулятивным.|The novel gradually reveals his manipulative behaviour.
possessive|стремящийся контролировать близкого человека|C1|His possessive attitude worried her.|Его собственническое отношение её беспокоило.|The story contrasts affection with possessive behaviour.
reconcile|восстанавливать отношения; примирять|C1|They hoped to reconcile after the argument.|Они надеялись помириться после ссоры.|The meeting helped reconcile two old friends.
make amends|загладить причинённый вред|C1|He wanted to make amends for the mistake.|Он хотел загладить свою ошибку.|A sincere apology was the first step to make amends.
clear the air|прояснить напряжённую ситуацию разговором|C1|We met to clear the air.|Мы встретились, чтобы прояснить напряжённую ситуацию.|An honest question helped clear the air between them.
hold a grudge|долго держать обиду|C1|She does not hold a grudge.|Она не держит обиду подолгу.|I did not expect him to hold a grudge over that.
see eye to eye|сходиться во взглядах|C1|We do not always see eye to eye.|Мы не всегда сходимся во взглядах.|They see eye to eye on how to treat new members.
open up|начать откровенно говорить о чувствах|B2|He found it difficult to open up.|Ему было трудно начать говорить откровенно.|A quiet walk gave her space to open up.
bottle up|сдерживать и не выражать чувства|C1|He tends to bottle up his frustration.|Он склонен держать раздражение в себе.|The character tries to bottle up feelings that eventually become obvious.
take it to heart|принимать это близко к сердцу|C1|I value the advice and will take it to heart.|Я ценю совет и приму его близко к сердцу.|When criticism is fair, I try to take it to heart.
put yourself in someone's shoes|поставить себя на место другого|B2|Try to put yourself in someone's shoes before judging.|Попробуй поставить себя на место другого, прежде чем судить.|A novel can help you put yourself in someone's shoes.
benefit of the doubt|доверие при отсутствии доказательств обратного|C1|She gave him the benefit of the doubt.|Она решила довериться ему за отсутствием доказательств обратного.|The newcomer deserves the benefit of the doubt.
`,
society: `
legislation|законодательство; принимаемые законы|C1|The article discusses proposed legislation.|Статья обсуждает предлагаемые законы.|The debate focused on how the legislation would be applied.
regulation|официальное правило регулирования|B2|The new regulation changed the reporting process.|Новое правило изменило порядок отчётности.|The report explains the purpose of the regulation.
reform|реформа; изменение системы|B2|The proposal calls for education reform.|Предложение призывает к реформе образования.|Public support for the reform grew after the debate.
amendment|поправка к тексту или закону|C1|The committee accepted one amendment.|Комитет принял одну поправку.|An amendment clarified the meaning of the disputed clause.
statutory provision|положение, установленное законом|C1|This statutory provision concerns access to information.|Это установленное законом положение касается доступа к информации.|The report asks whether the statutory provision is clear enough.
enforcement|обеспечение выполнения правил|C1|The discussion focused on consistent enforcement.|Обсуждение касалось последовательного обеспечения выполнения правил.|A written rule and its enforcement are different questions.
compliance|соблюдение установленных требований|C1|The review examined compliance with the rules.|Проверка изучала соблюдение правил.|The organisation published its compliance findings.
governance|система управления и принятия решений|C1|The report calls for better governance.|Отчёт призывает улучшить систему управления.|Transparent governance can make decisions easier to understand.
institution|общественный институт; учреждение|B2|The museum is an important local institution.|Музей — важное местное учреждение.|Trust in an institution can change after a public failure.
authority|орган власти; право принимать решения|B2|The local authority published a response.|Местный орган власти опубликовал ответ.|The article asks who has authority over the decision.
jurisdiction|область полномочий органа|C1|The dispute concerns overlapping jurisdiction.|Спор касается пересекающихся полномочий.|The article explains which jurisdiction the case falls under.
bureaucracy|бюрократия; громоздкая административная система|C1|Residents complained about unnecessary bureaucracy.|Жители жаловались на ненужную бюрократию.|The story follows one family through a maze of bureaucracy.
red tape|излишние формальные процедуры|C1|The project was delayed by red tape.|Проект задержался из-за излишних формальностей.|The article distinguishes useful checks from red tape.
public sector|государственный сектор|B2|She works in the public sector.|Она работает в государственном секторе.|The survey compared public sector and private sector employment.
private sector|частный сектор|B2|The project received private sector funding.|Проект получил финансирование частного сектора.|Several private sector organisations joined the consultation.
civil society|гражданское общество|C1|Civil society groups submitted a joint letter.|Группы гражданского общества подали совместное письмо.|The chapter explores the role of civil society in public debate.
grassroots|возникший по инициативе обычных участников|C1|The campaign began as a grassroots effort.|Кампания началась как инициатива обычных участников.|Grassroots groups organised meetings in several neighbourhoods.
advocacy|публичное отстаивание интересов или идеи|C1|Her work combines research and advocacy.|Её работа объединяет исследования и публичное отстаивание интересов.|The report separates its findings from its advocacy goals.
advocate|выступать в поддержку|C1|The authors advocate a more open process.|Авторы выступают за более открытый процесс.|Some residents advocate keeping the old library.
lobby|добиваться решения через влияние на принимающих его|C1|The group plans to lobby for better transport.|Группа планирует добиваться улучшения транспорта.|Several organisations lobby on behalf of small businesses.
petition|петиция; коллективное обращение|B2|The petition asks for a public meeting.|Петиция требует публичной встречи.|Residents delivered the petition to the town hall.
campaign|общественная кампания|B2|The campaign focused on local services.|Кампания была сосредоточена на местных услугах.|A small campaign attracted attention beyond the neighbourhood.
manifesto|публичная программа намерений|C1|The manifesto sets out five priorities.|Программа излагает пять приоритетов.|Readers compared the manifesto with earlier promises.
constituency|избирательный округ|C1|The candidate visited the whole constituency.|Кандидат посетил весь избирательный округ.|The report describes changing concerns within the constituency.
electorate|совокупность избирателей|C1|The speech addressed a divided electorate.|Речь была обращена к разделённому электорату.|The survey asked which issues mattered most to the electorate.
turnout|доля или число пришедших участников|C1|Voter turnout was higher in the city.|Явка избирателей была выше в городе.|The organisers were surprised by the turnout at the meeting.
ballot|бюллетень; тайное голосование|B2|The ballot lists all candidates.|Бюллетень содержит всех кандидатов.|Members chose the new chair by secret ballot.
referendum|референдум|C1|The referendum became the main news story.|Референдум стал главной новостью.|The documentary examines the debate before the referendum.
mandate|полученные полномочия на действие|C1|The committee has a limited mandate.|У комитета ограниченные полномочия.|The election result was presented as a mandate for change.
coalition|союз групп для общей цели|C1|A coalition of local groups supported the plan.|Союз местных групп поддержал план.|The coalition disagreed on how quickly to act.
opposition|политическая оппозиция; противодействие|B2|The proposal faced strong opposition.|Предложение встретило сильное противодействие.|The opposition asked for more detailed figures.
incumbent|действующий обладатель должности|C1|The incumbent defended her record.|Действующая обладательница должности защищала результаты своей работы.|The challenger criticised the incumbent during the debate.
polarization|усиление разделения на противоположные лагеря|C1|The study examines political polarization.|Исследование рассматривает политическую поляризацию.|The writer argues that the platform increases polarization.
partisan|пристрастный в пользу одной политической стороны|C1|The coverage took a partisan tone.|Освещение приобрело партийно-пристрастный тон.|A partisan source can still contain facts worth checking.
bipartisan|поддерживаемый двумя политическими партиями|C1|The proposal gained bipartisan support.|Предложение получило поддержку двух партий.|The article describes a rare bipartisan agreement.
deliberation|взвешенное обсуждение перед решением|C1|The decision followed careful deliberation.|Решение последовало после тщательного обсуждения.|Public deliberation took longer than the organisers expected.
consultation|обсуждение с заинтересованными сторонами|B2|The city opened a public consultation.|Город начал общественное обсуждение.|Residents wanted consultation before the final design was chosen.
representation|представительство интересов|C1|The group asked for better representation.|Группа потребовала лучшего представительства.|The debate concerns representation as well as funding.
marginalized|оттеснённый от участия и возможностей|C1|The project records marginalized voices.|Проект фиксирует голоса людей, оттеснённых от участия.|The article asks whose experiences remain marginalized.
disadvantaged|находящийся в менее благоприятных условиях|C1|The programme supports disadvantaged communities.|Программа поддерживает сообщества в неблагоприятных условиях.|The report compares access in disadvantaged areas.
privilege|преимущество, доступное не всем|C1|The essay examines inherited privilege.|Эссе рассматривает унаследованные преимущества.|The discussion asks how privilege shapes opportunity.
equity|справедливость с учётом различий условий|C1|The policy debate centres on equity.|Обсуждение политики сосредоточено на справедливости условий.|The report distinguishes equity from identical treatment.
equality|равенство|B2|The campaign calls for greater equality.|Кампания призывает к большему равенству.|The chapter traces changing ideas about equality.
inclusion|включённость; обеспечение участия|C1|The project puts inclusion at its centre.|Проект ставит обеспечение участия в центр внимания.|Genuine inclusion requires more than an invitation.
exclusion|исключение из участия или доступа|C1|Digital exclusion affects access to services.|Цифровая исключённость влияет на доступ к услугам.|The study explores exclusion in everyday institutions.
diversity|разнообразие состава или взглядов|B2|The city is known for cultural diversity.|Город известен культурным разнообразием.|The panel did not reflect the diversity of the community.
discrimination|неравное обращение по групповому признаку|B2|The report documents workplace discrimination.|Отчёт фиксирует дискриминацию на работе.|The article describes how participants experienced discrimination.
prejudice|предвзятое мнение о группе|C1|The novel challenges a familiar prejudice.|Роман оспаривает распространённое предубеждение.|The speaker asked listeners to examine their own prejudice.
stereotype|упрощённое устойчивое представление о группе|B2|The character challenges the usual stereotype.|Персонаж нарушает привычный стереотип.|A single example cannot represent everyone within a stereotype.
stigma|общественное клеймо; осуждающий ярлык|C1|The campaign aims to reduce social stigma.|Кампания стремится уменьшить общественное клеймение.|The memoir describes the stigma attached to poverty.
demographic|относящийся к составу населения|C1|The report identifies a demographic shift.|Отчёт выявляет изменение состава населения.|Demographic data helps explain differences between regions.
census|перепись населения|C1|The census records household information.|Перепись фиксирует сведения о домохозяйствах.|The article compares two successive census reports.
population density|плотность населения|B2|Population density varies across the region.|Плотность населения различается по региону.|The map shows population density rather than total population.
urbanization|рост городов и доли городского населения|C1|Rapid urbanization changed the coastline.|Быстрая урбанизация изменила побережье.|The chapter links urbanization with demand for housing.
infrastructure|базовые системы транспорта и обслуживания|B2|The town needs better infrastructure.|Городу нужна лучшая инфраструктура.|The storm exposed weaknesses in local infrastructure.
public transport|общественный транспорт|B2|Public transport connects the outer districts.|Общественный транспорт связывает окраинные районы.|The survey asked why residents rarely use public transport.
housing shortage|нехватка жилья|B2|The city faces a housing shortage.|Город сталкивается с нехваткой жилья.|The article compares several responses to the housing shortage.
affordability|доступность по цене|C1|Housing affordability became a major concern.|Доступность жилья по цене стала серьёзной проблемой.|The report measures affordability against local incomes.
gentrification|преобразование района с ростом цен и сменой жителей|C1|The documentary follows neighbourhood gentrification.|Документальный фильм отслеживает преобразование района с ростом цен.|Residents described both benefits and costs of gentrification.
displacement|вынужденное перемещение или вытеснение|C1|The project led to residential displacement.|Проект привёл к вытеснению жителей.|The report documents displacement after the disaster.
migration pattern|характерное направление перемещения населения|C1|The map reveals a changing migration pattern.|Карта показывает меняющийся характер миграции.|Researchers compared the migration pattern with employment opportunities.
refugee|беженец|B2|The story follows a young refugee.|История следует за молодым беженцем.|A refugee described the difficulty of rebuilding everyday routines.
asylum|защита, запрашиваемая в другой стране|C1|The article discusses applications for asylum.|Статья обсуждает заявления о предоставлении убежища.|The interview describes her journey to seek asylum.
integration|включение в более широкое общество|C1|Language classes can support social integration.|Языковые занятия могут поддерживать социальную интеграцию.|The report explores integration from several perspectives.
social mobility|возможность менять положение в обществе|C1|Education features in debates about social mobility.|Образование фигурирует в спорах о социальной мобильности.|The study asks how social mobility differs across regions.
welfare|общественная поддержка благополучия людей|C1|The debate concerns the welfare system.|Спор касается системы общественной поддержки.|The report considers child welfare alongside housing conditions.
poverty|бедность|B2|The report examines rural poverty.|Отчёт рассматривает бедность в сельской местности.|The story describes poverty through ordinary daily choices.
deprivation|лишённость необходимых условий жизни|C1|The map identifies areas of deprivation.|Карта выделяет районы с нехваткой необходимых условий.|The researchers used several measures of deprivation.
prosperity|благосостояние; процветание|C1|The port brought prosperity to the town.|Порт принёс городу благосостояние.|The essay asks who benefited from the period of prosperity.
inequitable|несправедливый по распределению условий или благ|C1|Residents described the arrangement as inequitable.|Жители назвали распределение условий несправедливым.|An inequitable process can deepen existing disadvantage.
livelihood|источник средств к существованию|C1|Fishing is their main livelihood.|Рыболовство — их главный источник средств к существованию.|The closure threatened the livelihood of several families.
labour market|рынок труда|B2|The labour market changed after the factory closed.|Рынок труда изменился после закрытия фабрики.|The report analyses young people's entry into the labour market.
unemployment|безработица|B2|Unemployment became the central campaign issue.|Безработица стала центральной темой кампании.|The chart compares unemployment across age groups.
income disparity|разрыв в доходах|C1|The study found a wide income disparity.|Исследование обнаружило большой разрыв в доходах.|The article explores reasons for the regional income disparity.
tax revenue|поступления от налогов|C1|The budget depends on local tax revenue.|Бюджет зависит от местных налоговых поступлений.|The report compares spending with expected tax revenue.
subsidy|финансовая поддержка из общественных средств|C1|The project received a transport subsidy.|Проект получил транспортную субсидию.|The debate concerns who benefits from the subsidy.
public spending|государственные расходы|B2|The chart shows public spending by category.|График показывает государственные расходы по категориям.|The article questions the priorities behind public spending.
fiscal|относящийся к государственным доходам и расходам|C1|The report outlines the fiscal outlook.|Отчёт описывает перспективы государственных финансов.|The debate focused on fiscal constraints.
allegation|обвинение, ещё не доказанное|C1|The newspaper reported the allegation carefully.|Газета осторожно сообщила о пока недоказанном обвинении.|The official denied the allegation in a written statement.
corruption|коррупция; злоупотребление положением|C1|The inquiry examined allegations of corruption.|Расследование изучало обвинения в коррупции.|The report describes measures intended to reduce corruption.
whistleblower|сообщивший о нарушениях внутри организации|C1|A whistleblower provided the documents.|О нарушениях сообщил человек, предоставивший документы.|The article describes the pressure faced by the whistleblower.
inquiry|официальное расследование|C1|The inquiry will examine the decision.|Официальное расследование изучит решение.|Witnesses gave evidence to the public inquiry.
testimony|свидетельские показания|C1|Her testimony contradicted the written record.|Её показания противоречили письменной записи.|The documentary includes testimony from several residents.
verdict|итоговое решение суда или жюри|C1|The verdict drew widespread attention.|Решение суда привлекло широкое внимание.|The report explains the reasoning behind the verdict.
precedent|предыдущий случай, служащий ориентиром|C1|The decision may create a precedent.|Решение может создать прецедент.|The article compares the case with an earlier precedent.
civil liberty|гражданская свобода|C1|The debate centres on a basic civil liberty.|Спор сосредоточен на основной гражданской свободе.|The essay traces the history of that civil liberty.
freedom of expression|свобода выражения мнения|B2|The panel discussed freedom of expression.|Участники обсуждали свободу выражения мнения.|The article explores tensions around freedom of expression.
censorship|цензура|C1|The novel examines artistic censorship.|Роман рассматривает цензуру искусства.|The interview asks how censorship affected the writer's work.
surveillance|систематическое наблюдение|C1|The proposal expanded public surveillance.|Предложение расширяло общественное наблюдение.|The debate weighed surveillance against expectations of privacy.
privacy|приватность; неприкосновенность частной жизни|B2|The survey asked about online privacy.|Опрос спрашивал о приватности в интернете.|The article explains why privacy matters to ordinary users.
consent|согласие на конкретное действие|B2|The study sought informed consent.|Исследование запрашивало информированное согласие.|The discussion asks whether the consent was freely given.
public interest|общественный интерес|C1|The editor argued that publication served the public interest.|Редактор утверждал, что публикация служила общественному интересу.|The inquiry considered whether the decision was in the public interest.
transparency|открытость информации и решений|C1|Residents demanded greater transparency.|Жители потребовали большей открытости.|The website improved transparency by publishing meeting records.
credibility|достоверность; способность вызывать доверие|C1|The errors damaged the report's credibility.|Ошибки подорвали доверие к отчёту.|Independent checks can strengthen the credibility of a source.
impartial|беспристрастный|C1|The panel should remain impartial.|Комиссия должна оставаться беспристрастной.|An impartial account includes evidence from opposing sides.
balanced coverage|сбалансированное освещение темы|C1|Readers asked for more balanced coverage.|Читатели попросили более сбалансированное освещение.|Balanced coverage requires attention to the strength of the evidence.
sensationalism|погоня за сенсационностью|C1|The review criticises the paper's sensationalism.|Рецензия критикует погоню газеты за сенсациями.|Sensationalism can obscure the actual scale of an event.
editorial|редакционная статья с позицией издания|C1|The editorial supports the transport plan.|Редакционная статья поддерживает транспортный план.|An editorial expresses a position rather than only reporting events.
op-ed|авторская статья с мнением|C1|She wrote an op-ed about public libraries.|Она написала авторскую колонку об общественных библиотеках.|The op-ed prompted replies from several researchers.
newsworthy|заслуживающий освещения в новостях|C1|The discovery was considered newsworthy.|Открытие сочли достойным новостного освещения.|Editors disagree about what makes a local event newsworthy.
`,
culture: `
narrative|повествование; способ изложения истории|C1|The narrative moves between two cities.|Повествование перемещается между двумя городами.|Her account challenges the familiar narrative of easy success.
narrator|рассказчик|B2|The narrator knows less than the reader.|Рассказчик знает меньше читателя.|An unreliable narrator makes the ending more complicated.
protagonist|главный действующий персонаж|C1|The protagonist refuses to leave home.|Главный персонаж отказывается покинуть дом.|The protagonist changes slowly throughout the novel.
antagonist|персонаж, противостоящий главному герою|C1|The antagonist has understandable motives.|У противостоящего герою персонажа понятные мотивы.|The story does not present a single clear antagonist.
supporting character|второстепенный персонаж|B2|My favourite is a supporting character.|Мой любимый герой — второстепенный персонаж.|A supporting character supplies an important missing detail.
character development|развитие характера персонажа|C1|The sequel offers strong character development.|Продолжение предлагает хорошее развитие персонажей.|The review praises character development but criticises the pacing.
characterization|создание образа персонажа|C1|The dialogue provides subtle characterization.|Диалог тонко раскрывает образы персонажей.|Her careful characterization makes the family believable.
motivation|побуждение; причина поступка|B2|His motivation remains unclear.|Его побуждение остаётся неясным.|The final chapter reveals the character's real motivation.
conflict|столкновение интересов; конфликт|B2|The central conflict concerns family loyalty.|Главный конфликт касается верности семье.|A quiet scene can reveal a deep conflict.
resolution|разрешение конфликта или сюжетной проблемы|C1|The resolution felt too convenient.|Развязка конфликта показалась слишком удобной.|The novel ends without a complete resolution.
climax|кульминация|C1|The climax takes place in an empty station.|Кульминация происходит на пустой станции.|The earlier details become important at the climax.
anticlimax|разочаровывающе слабая развязка|C1|The final confrontation was an anticlimax.|Последнее столкновение оказалось разочаровывающе слабой развязкой.|After so much tension, the ending felt like an anticlimax.
suspense|напряжённое ожидание дальнейших событий|B2|The author builds suspense gradually.|Автор постепенно создаёт напряжённое ожидание.|Knowing the ending did not remove all the suspense.
tension|напряжение между людьми или в сюжете|B2|The silence increases the tension.|Молчание усиливает напряжение.|Small disagreements create tension long before the argument.
foreshadowing|предвосхищающие намёки в сюжете|C1|The broken clock is subtle foreshadowing.|Сломанные часы — тонкий намёк на будущие события.|On a second reading, the foreshadowing becomes obvious.
flashback|сцена из более ранних событий|B2|A flashback explains their first meeting.|Сцена из прошлого объясняет их первую встречу.|The film uses a flashback instead of a long explanation.
subplot|второстепенная сюжетная линия|C1|The subplot concerns the missing neighbour.|Второстепенная линия касается пропавшего соседа.|That subplot adds warmth to an otherwise dark story.
plot twist|неожиданный поворот сюжета|B2|The plot twist changes everything.|Неожиданный поворот меняет всё.|The review avoids revealing the final plot twist.
cliffhanger|обрыв сюжета на напряжённом моменте|C1|The episode ends on a cliffhanger.|Эпизод обрывается на напряжённом моменте.|The cliffhanger made me want to read the next chapter.
pacing|темп развития повествования|C1|The pacing slows in the middle.|В середине темп повествования замедляется.|Careful pacing gives the emotional scenes room to develop.
chronology|временная последовательность событий|C1|The chronology is deliberately confusing.|Временная последовательность намеренно запутана.|A second reading helped me reconstruct the chronology.
linear|развивающийся в прямой последовательности|C1|The story follows a linear structure.|История следует линейной структуре.|A linear account would make the mystery less interesting.
fragmented|состоящий из разрозненных фрагментов|C1|The narrator offers a fragmented memory.|Рассказчик предлагает фрагментарное воспоминание.|The fragmented structure reflects the character's uncertainty.
perspective shift|смена точки зрения повествования|C1|The perspective shift reveals another motive.|Смена точки зрения раскрывает другое побуждение.|Each perspective shift changes our understanding of the same event.
first-person|ведущийся от первого лица|B2|The novel uses a first-person narrator.|В романе используется рассказчик от первого лица.|A first-person account can feel intimate but limited.
third-person|ведущийся от третьего лица|B2|The third-person narration follows one character.|Повествование от третьего лица следует за одним персонажем.|A third-person narrator describes the scene from outside.
omniscient|всеведущий, о рассказчике|C1|The omniscient narrator knows everyone's thoughts.|Всеведущий рассказчик знает мысли всех.|An omniscient voice connects the otherwise separate stories.
unreliable narrator|рассказчик, чьей версии нельзя полностью доверять|C1|The unreliable narrator changes his account.|Ненадёжный рассказчик меняет свою версию.|The book invites us to question its unreliable narrator.
dialogue|диалог|B2|The dialogue sounds natural.|Диалог звучит естественно.|One line of dialogue reveals years of resentment.
monologue|длинная речь одного персонажа|C1|The play opens with a short monologue.|Пьеса начинается с короткого монолога.|Her monologue gives the audience access to private doubts.
inner life|внутренний мир человека|C1|The novel explores the character's inner life.|Роман исследует внутренний мир персонажа.|A quiet plot can still contain a rich inner life.
subtext|подтекст|C1|The polite exchange has a bitter subtext.|У вежливого обмена репликами горький подтекст.|The actor conveys the subtext through pauses.
theme|основная тема произведения|B2|Forgiveness is the central theme.|Прощение — центральная тема.|The same theme appears in several different stories.
motif|повторяющийся значимый образ или элемент|C1|Rain becomes a recurring motif.|Дождь становится повторяющимся значимым образом.|The reviewer traces the motif through the whole novel.
symbolism|использование символических образов|C1|The film's symbolism is easy to miss.|Символические образы фильма легко не заметить.|The essay explains the symbolism of the locked room.
metaphor|метафора; образное перенесение смысла|B2|The bridge is a metaphor for reconciliation.|Мост — метафора примирения.|The author extends the metaphor across several paragraphs.
simile|образное сравнение через как или словно|C1|The opening simile makes the scene vivid.|Начальное образное сравнение делает сцену яркой.|A simple simile can express a complex feeling.
imagery|система образов и чувственных описаний|C1|The poem uses vivid coastal imagery.|В стихотворении яркие образы побережья.|The imagery appeals to touch as well as sight.
allusion|косвенная отсылка к известному тексту или событию|C1|The title contains a literary allusion.|В заголовке есть литературная отсылка.|I missed the allusion until I read the note.
allegory|иносказательная история|C1|The story works as a political allegory.|История работает как политическое иносказание.|An allegory can be read on more than one level.
satire|сатирическое высмеивание|C1|The novel is a satire of office life.|Роман — сатира на офисную жизнь.|The satire is sharp without making every character foolish.
parody|пародия|C1|The short film is a parody of detective dramas.|Короткий фильм — пародия на детективные драмы.|The parody imitates the style as well as the plot.
irony|ирония; несоответствие ожидания и смысла|B2|The narrator's irony is easy to overlook.|Иронию рассказчика легко не заметить.|There is painful irony in the character's final promise.
juxtaposition|сопоставление через соседство образов|C1|The juxtaposition makes the difference striking.|Сопоставление делает различие разительным.|The film uses juxtaposition instead of direct commentary.
contrast|контраст; подчёркнутое различие|B2|The contrast between the sisters drives the plot.|Контраст между сёстрами движет сюжет.|Light and silence create a powerful contrast in the scene.
tone|тон; отношение, выраженное стилем|B2|The tone becomes more hopeful.|Тон становится более обнадёживающим.|A small change in wording alters the tone of the letter.
mood|настроение произведения или сцены|B2|The music creates an uneasy mood.|Музыка создаёт тревожное настроение.|The bright setting contrasts with the mood of the conversation.
atmosphere|атмосфера места или произведения|B2|The empty streets create a tense atmosphere.|Пустые улицы создают напряжённую атмосферу.|The reviewer loved the atmosphere but not the story.
evocative|вызывающий яркие образы или воспоминания|C1|The description is brief but evocative.|Описание краткое, но вызывает яркие образы.|Her evocative prose makes the village feel familiar.
poignant|щемяще трогательный|C1|The farewell is especially poignant.|Прощание особенно щемяще трогательно.|A poignant detail changes how we read the final letter.
moving|трогающий чувства|B2|I found the ending deeply moving.|Концовка глубоко меня тронула.|The scene is moving because it avoids easy answers.
gripping|захватывающий|B2|It is a gripping account of the expedition.|Это захватывающий рассказ об экспедиции.|The first chapter is gripping despite its slow pace.
immersive|создающий ощущение погружения|C1|The exhibition offers an immersive experience.|Выставка создаёт ощущение погружения.|Detailed sound and lighting make the setting immersive.
engaging|удерживающий интерес; увлекательный|B2|The narrator has an engaging voice.|У рассказчика увлекательная манера повествования.|An engaging introduction made the difficult topic approachable.
accessible|понятный и доступный для восприятия|B2|The book makes the subject accessible.|Книга делает тему понятной.|The style is accessible without avoiding complex ideas.
dense|насыщенный и трудный для быстрого чтения|C1|The opening chapter is quite dense.|Первая глава довольно насыщенная и трудная.|Dense prose can reward a slower second reading.
verbose|излишне многословный|C1|The narrator is deliberately verbose.|Рассказчик намеренно многословен.|The review criticises the verbose explanations between scenes.
concise|краткий и ёмкий|C1|Her concise review captures the main problem.|Её краткая рецензия передаёт главную проблему.|A concise description can still be vivid.
eloquent|красноречивый; выразительный|C1|The speech is simple and eloquent.|Речь проста и выразительна.|Her eloquent account gave shape to a shared experience.
lyrical|лиричный; поэтически выразительный|C1|The novel mixes lyrical prose with dry humour.|Роман сочетает лиричную прозу с сухим юмором.|The lyrical descriptions slow the action but deepen the mood.
understated|сдержанный; без явного преувеличения|C1|His performance is beautifully understated.|Его исполнение прекрасно своей сдержанностью.|Understated humour gives the serious scene some warmth.
melodramatic|чрезмерно драматичный|C1|The argument feels melodramatic.|Ссора кажется чрезмерно драматичной.|The ending avoids the melodramatic reunion I expected.
sentimental|излишне умилительный или чувствительный|C1|The final scene is a little sentimental.|Последняя сцена немного сентиментальна.|The review finds the book warm without being sentimental.
bleak|мрачный; почти без надежды|C1|The story offers a bleak view of the future.|История предлагает мрачный взгляд на будущее.|A bleak setting does not prevent moments of kindness.
light-hearted|лёгкий и несерьёзный по настроению|B2|We chose a light-hearted comedy.|Мы выбрали лёгкую комедию.|The light-hearted opening gives way to a serious question.
uplifting|поднимающий дух|C1|The ending is quietly uplifting.|Концовка ненавязчиво поднимает дух.|An uplifting story need not ignore real difficulties.
haunting|надолго остающийся в памяти и тревожащий|C1|The final image is haunting.|Последний образ надолго остаётся в памяти и тревожит.|Her haunting account stayed with me after the book ended.
unsettling|тревожащий; вызывающий дискомфорт|C1|The scene is unsettling rather than frightening.|Сцена скорее тревожит, чем пугает.|An unsettling detail appears in every version of the story.
plodding|тягучий и скучно медленный|C1|The middle section feels plodding.|Средняя часть кажется тягучей и скучной.|Strong characters could not rescue the plodding plot.
far-fetched|маловероятный; натянутый|C1|The explanation seems far-fetched.|Объяснение кажется натянутым.|Even a far-fetched premise can support an engaging story.
contrived|искусственно подстроенный|C1|Their reunion feels contrived.|Их воссоединение кажется искусственно подстроенным.|The plot depends on a contrived misunderstanding.
cliché|избитый образ или выражение|C1|The character begins as a familiar cliché.|Персонаж начинается со знакомого избитого образа.|The writer turns a romantic cliché into something surprising.
formulaic|построенный по шаблону|C1|The sequel is entertaining but formulaic.|Продолжение развлекательное, но шаблонное.|A formulaic plot can still contain memorable dialogue.
derivative|подражательный; несамостоятельный|C1|The design feels derivative.|Дизайн кажется подражательным.|The reviewer found the style derivative of earlier films.
originality|самобытность; оригинальность|B2|The novel stands out for its originality.|Роман выделяется своей оригинальностью.|Originality matters here more than a surprising ending.
authentic|правдоподобно передающий реальный опыт|B2|The family conversations feel authentic.|Семейные разговоры кажутся правдоподобными.|Small everyday details make the setting authentic.
believable|правдоподобный; вызывающий веру|B2|The characters are flawed but believable.|Персонажи несовершенны, но правдоподобны.|A believable reaction matters more than a clever twist.
relatable character|персонаж, в котором узнаёшь себя|B2|She becomes a relatable character through small mistakes.|Через мелкие ошибки она становится узнаваемым персонажем.|A relatable character need not share the reader's background.
flawed|имеющий недостатки|B2|The hero is deeply flawed.|У героя серьёзные недостатки.|A flawed plan leads to the novel's most interesting scenes.
ambiguous ending|неоднозначная концовка|C1|The ambiguous ending divided readers.|Неоднозначная концовка разделила читателей.|I preferred the ambiguous ending to a neat explanation.
open-ended|оставляющий исход открытым|C1|The conclusion is deliberately open-ended.|Завершение намеренно оставляет исход открытым.|An open-ended story can invite readers to imagine what follows.
interpretive|связанный с толкованием|C1|The essay offers an interpretive reading.|Эссе предлагает трактовку текста.|The museum includes interpretive notes beside each object.
adapted from|созданный на основе другого произведения|B2|The film is adapted from a short story.|Фильм создан по короткому рассказу.|The play was adapted from the author's letters.
faithful to|верный исходному тексту или замыслу|B2|The film remains faithful to the novel.|Фильм остаётся верным роману.|The translation is faithful to the tone of the original.
creative licence|художественная свобода менять детали|C1|The director uses considerable creative licence.|Режиссёр пользуется значительной художественной свободой.|The review separates historical claims from creative licence.
abridged|сокращённый, о версии текста|C1|This is an abridged edition.|Это сокращённое издание.|The abridged version omits several secondary stories.
unabridged|полный, без сокращений|C1|I prefer the unabridged novel.|Я предпочитаю полный роман без сокращений.|The library has an unabridged edition of the memoir.
anthology|сборник произведений разных авторов|C1|The anthology includes ten short stories.|Сборник включает десять коротких рассказов.|Each writer contributes a different voice to the anthology.
memoir|мемуары; повествование о личном опыте|C1|Her memoir focuses on the years abroad.|Её мемуары сосредоточены на годах за границей.|The memoir combines personal memory with historical context.
biography|описание жизни человека|B2|The biography draws on private letters.|Биография опирается на личные письма.|A new biography questions the familiar account of his childhood.
non-fiction|литература о фактах и реальном опыте|B2|I read mostly non-fiction.|Я читаю преимущественно нехудожественную литературу.|Good non-fiction can use many of the techniques of storytelling.
historical fiction|художественная проза о прошлом|B2|She enjoys historical fiction.|Ей нравится историческая художественная проза.|Historical fiction often mixes invented characters with real events.
speculative fiction|художественные миры с допущением иных условий|C1|The collection explores speculative fiction.|Сборник исследует фантастическую прозу с необычными допущениями.|Speculative fiction can examine ordinary fears through unfamiliar worlds.
genre|жанр|B2|The book crosses more than one genre.|Книга пересекает несколько жанров.|Knowing the genre changes what the reader expects.
convention|принятое правило или приём жанра|C1|The film breaks a familiar genre convention.|Фильм нарушает привычное правило жанра.|The writer uses the convention before turning it upside down.
tribute|произведение в знак уважения|C1|The exhibition is a tribute to local artists.|Выставка — дань уважения местным художникам.|The final chapter reads as a tribute to her teacher.
homage|творческая дань уважения другому автору|C1|The scene is an homage to silent cinema.|Сцена — творческая дань уважения немому кино.|The director describes the film as an homage rather than a remake.
legacy|оставшееся влияние; наследие|C1|The book examines the artist's legacy.|Книга рассматривает наследие художника.|Her legacy extends beyond the works she published.
canon|совокупность общепризнанных значимых произведений|C1|The course questions the traditional literary canon.|Курс ставит под вопрос традиционный литературный канон.|The essay asks which voices were excluded from the canon.
curate|отбирать и организовывать материалы для показа|C1|She will curate the photography exhibition.|Она отберёт и организует материалы фотовыставки.|The magazine invites writers to curate a reading list.
resonate|вызывать отклик|C1|The story may resonate with new parents.|История может вызвать отклик у молодых родителей.|A simple line can resonate long after the ending.
`,
money: `
income|доход|B2|Her income varies from month to month.|Её доход меняется от месяца к месяцу.|The form asks about income from different sources.
earnings|заработанные деньги; прибыль компании|B2|His earnings increased after the move.|Его заработок вырос после переезда.|The report compares earnings with the previous year.
revenue|выручка до вычета расходов|C1|Ticket sales provide most of the revenue.|Продажа билетов обеспечивает большую часть выручки.|Revenue rose while delivery costs also increased.
profit|прибыль после вычета расходов|B2|The shop made a small profit.|Магазин получил небольшую прибыль.|Higher revenue did not lead to higher profit.
loss|денежный убыток|B2|The event ended with a small loss.|Мероприятие закончилось небольшим убытком.|The report explains the loss in a separate section.
profit margin|доля прибыли в выручке|C1|The profit margin fell this quarter.|Доля прибыли в выручке снизилась в этом квартале.|The business sells more products but has a narrow profit margin.
markup|надбавка к закупочной стоимости|C1|The retailer applies a standard markup.|Продавец применяет стандартную торговую надбавку.|The article distinguishes markup from profit margin.
overheads|регулярные общие расходы бизнеса|C1|Rent is one of our largest overheads.|Аренда — одна из крупнейших статей общих расходов.|The company reduced overheads by sharing an office.
expenditure|расходование средств; совокупные расходы|C1|Travel accounts for much of the expenditure.|На поездки приходится значительная часть расходов.|The budget separates planned expenditure from actual spending.
outgoings|регулярные личные или хозяйственные расходы|C1|Our monthly outgoings are fairly stable.|Наши ежемесячные расходы довольно стабильны.|The worksheet compares income with regular outgoings.
cash flow|движение поступающих и уходящих денег|C1|Late payments affected cash flow.|Поздние платежи повлияли на движение денежных средств.|The forecast shows cash flow for the next quarter.
inflow|приток средств|C1|The company recorded a steady cash inflow.|Компания зафиксировала устойчивый приток денег.|The report separates each inflow by its source.
outflow|отток средств|C1|Equipment purchases caused a large cash outflow.|Покупка оборудования вызвала большой отток средств.|The chart compares the outflow with incoming payments.
asset|актив; имеющий стоимость ресурс|C1|The building is the company's largest asset.|Здание — крупнейший актив компании.|The balance sheet lists each major asset.
liability|финансовое обязательство|C1|The loan remains a long-term liability.|Кредит остаётся долгосрочным обязательством.|The accountant recorded the unpaid amount as a liability.
debt|денежный долг|B2|The business reported less debt this year.|В этом году компания сообщила о меньшем долге.|The document lists the debt separately from current expenses.
loan|заём; кредит|B2|The loan helped pay for new equipment.|Кредит помог оплатить новое оборудование.|The agreement describes the term of the loan.
borrow|брать деньги взаймы|B2|They had to borrow money for the repairs.|Им пришлось занять деньги на ремонт.|The form asks how much the applicant wants to borrow.
lend|давать деньги взаймы|B2|He offered to lend me the small amount.|Он предложил одолжить мне небольшую сумму.|The story begins when two friends agree to lend each other money.
repay|возвращать заёмные деньги|B2|She plans to repay the loan next year.|Она планирует вернуть кредит в следующем году.|The schedule shows when she will repay each amount.
repayment|возврат займа; очередной платёж по нему|B2|The next repayment is due on Friday.|Следующий платёж по займу должен быть внесён в пятницу.|The statement shows the repayment alongside other transactions.
instalment|одна из частей поэтапной оплаты|B2|We paid the first instalment yesterday.|Мы вчера внесли первую часть оплаты.|The final instalment appears on next month's statement.
interest rate|процентная ставка|B2|The document states the annual interest rate.|В документе указана годовая процентная ставка.|The example uses a fixed interest rate throughout.
compound interest|начисление процентов с учётом прошлых процентов|C1|The lesson explains compound interest.|Урок объясняет начисление процентов на проценты.|The chart illustrates compound interest using hypothetical figures.
principal|исходная сумма займа или вложения|C1|The payment reduces the remaining principal.|Платёж уменьшает оставшуюся основную сумму долга.|The example separates principal from accumulated interest.
collateral|имущество в обеспечение обязательства|C1|The agreement lists the property as collateral.|В договоре имущество указано как обеспечение обязательства.|The article explains why the lender requested collateral.
secured loan|заём под обеспечение имуществом|C1|The example describes a secured loan.|В примере описывается заём под обеспечение.|The report distinguishes a secured loan from other borrowing.
unsecured|не обеспеченный залогом|C1|The balance includes an unsecured loan.|Баланс включает необеспеченный заём.|The document labels that debt as unsecured.
arrears|накопившиеся просроченные платежи|C1|The statement lists two months of arrears.|В выписке указана просрочка за два месяца.|The letter asks about the outstanding arrears.
default on|не исполнить платёжные обязательства по|C1|The report explains why firms default on loans.|Отчёт объясняет, почему компании не исполняют обязательства по кредитам.|The fictional company may default on its debt in the scenario.
solvent|способный выполнять долговые обязательства|C1|The report says the business remains solvent.|В отчёте говорится, что компания остаётся платёжеспособной.|The accountant examined whether the company was solvent.
insolvent|неспособный выполнять долговые обязательства|C1|The fictional firm becomes insolvent in the case study.|В учебном примере компания становится неплатёжеспособной.|The article describes how the business became insolvent.
bankruptcy|банкротство|C1|The biography describes the family's bankruptcy.|Биография описывает банкротство семьи.|The report follows the company through bankruptcy.
liquidity|доступность денег или быстро обращаемых средств|C1|The report raises concerns about liquidity.|Отчёт выражает опасения по поводу ликвидности.|The example distinguishes liquidity from overall profitability.
liquid asset|актив, легко обращаемый в деньги|C1|The example treats cash as a liquid asset.|В примере деньги рассматриваются как ликвидный актив.|The worksheet asks which item is a liquid asset.
investment|вложение средств|B2|The project needs an initial investment.|Проекту нужно начальное вложение средств.|The report compares the investment with its stated goals.
investor|вкладывающий средства человек или организация|B2|An investor asked about the business model.|Инвестор спросил о бизнес-модели.|Each investor received the same written update.
return on investment|результат вложения относительно его размера|C1|The report estimates the return on investment.|Отчёт оценивает результат относительно размера вложений.|The example calculates return on investment using hypothetical numbers.
yield|доходность; доход относительно стоимости|C1|The table lists an estimated yield.|В таблице указана расчётная доходность.|The article explains how the stated yield was calculated.
dividend|выплата владельцам долей из прибыли|C1|The company announced a smaller dividend.|Компания объявила о меньшей выплате акционерам.|The statement shows the dividend as a separate entry.
shareholder|владелец доли или акции компании|C1|A shareholder questioned the new strategy.|Акционер поставил под вопрос новую стратегию.|Each shareholder received the annual report.
stake|доля участия в бизнесе|C1|She sold her stake in the company.|Она продала свою долю в компании.|The report states the size of the founder's stake.
portfolio|совокупность вложений или активов|C1|The exercise describes a fictional portfolio.|Упражнение описывает вымышленный портфель вложений.|The portfolio contains several different types of assets.
diversification|распределение по разным направлениям|C1|The report discusses revenue diversification.|Отчёт обсуждает распределение выручки по разным направлениям.|The lesson uses a fictional portfolio to explain diversification.
volatility|степень изменчивости показателя или цены|C1|The chart shows a period of high volatility.|График показывает период высокой изменчивости.|The article compares price volatility across two examples.
fluctuation|колебание величины|C1|The sudden fluctuation surprised the analyst.|Внезапное колебание удивило аналитика.|A seasonal fluctuation appears in the sales figures.
appreciation|рост стоимости актива|C1|The example shows gradual currency appreciation.|Пример показывает постепенный рост стоимости валюты.|The report separates price appreciation from income payments.
depreciation|снижение стоимости; учёт износа|C1|The accounts include equipment depreciation.|Отчётность включает амортизацию оборудования.|The example explains depreciation over the machine's useful life.
inflation|общее повышение уровня цен|B2|The article compares wages with inflation.|Статья сравнивает зарплаты с инфляцией.|The chart presents inflation over several years.
purchasing power|покупательная способность денег|C1|The report examines changes in purchasing power.|Отчёт рассматривает изменения покупательной способности.|The example compares purchasing power rather than nominal income.
cost of living|стоимость повседневной жизни|B2|The cost of living differs between cities.|Стоимость жизни различается между городами.|The survey asks which part of the cost of living rose most.
recession|спад экономической активности|C1|The novel takes place during a recession.|Действие романа происходит во время экономического спада.|The report describes the recession's effect on local shops.
downturn|ухудшение экономической ситуации|C1|The business survived a sharp downturn.|Компания пережила резкое ухудшение экономической ситуации.|The article links the downturn with falling orders.
recovery|восстановление после экономического спада|B2|The report describes a slow recovery.|Отчёт описывает медленное восстановление.|The recovery was uneven across different regions.
forecast|прогноз|B2|The forecast assumes stable demand.|Прогноз предполагает стабильный спрос.|We compared the forecast with the actual results.
projection|расчётное предположение о будущих показателях|C1|The projection uses last year's sales figures.|Расчётный прогноз использует прошлогодние продажи.|Changing one assumption alters the entire projection.
estimate|приблизительная оценка|B2|The estimate includes delivery costs.|Приблизительная оценка включает стоимость доставки.|The final bill was close to the original estimate.
quotation|предложение цены за конкретную работу|C1|We requested a written quotation.|Мы запросили письменное ценовое предложение.|The quotation lists labour and materials separately.
invoice|счёт на оплату|B2|The invoice arrived after delivery.|Счёт на оплату пришёл после доставки.|Please include the order number on the invoice.
billing|выставление счетов и учёт оплаты|B2|The billing cycle begins on Monday.|Платёжный период начинается в понедельник.|The customer contacted support about a billing error.
surcharge|дополнительная надбавка к цене|C1|The bill includes a weekend surcharge.|Счёт включает дополнительную плату за выходной день.|The booking page clearly explains the surcharge.
rebate|частичный возврат уже уплаченной суммы|C1|The promotion offers a small rebate.|Акция предлагает небольшой частичный возврат оплаты.|The customer received the rebate several weeks later.
reimbursement|возмещение понесённых расходов|C1|Travel reimbursement requires the receipts.|Для возмещения поездки нужны чеки.|She submitted the form for reimbursement after returning.
deductible|часть страхового убытка за счёт клиента|C1|The example uses a fixed deductible.|В примере используется фиксированная страховая франшиза.|The policy summary lists the deductible separately.
premium|страховой взнос|C1|The annual premium appears in the summary.|Годовой страховой взнос указан в сводке.|The example compares the premium with other policy terms.
coverage|объём страховой защиты|C1|The summary describes the insurance coverage.|Сводка описывает объём страховой защиты.|The traveller asked what the coverage included.
claim form|заявление на страховое возмещение|B2|She completed the claim form online.|Она заполнила заявление на страховое возмещение онлайн.|The claim form asks for the date of the incident.
exemption|освобождение от правила или платежа|C1|The document describes a limited exemption.|Документ описывает ограниченное освобождение от требования.|The applicant asked whether the exemption applied in this example.
allowance|выделенная сумма на определённые расходы|B2|The job includes a travel allowance.|Работа предусматривает выделенную сумму на поездки.|The allowance covers only the categories listed in the agreement.
entitlement|право на определённую выплату или услугу|C1|The letter explains her entitlement.|Письмо объясняет её право на выплату.|The example asks how the entitlement is calculated.
means-tested|зависящий от доходов и имущества получателя|C1|The article discusses a means-tested benefit.|Статья обсуждает выплату, зависящую от средств получателя.|The example contrasts a means-tested payment with a universal one.
lump sum|единовременная крупная сумма|C1|They paid the fee as a lump sum.|Они оплатили сбор одной суммой.|The contract offers a lump sum instead of monthly payments.
disposable income|доход после обязательных налогов|C1|The chart compares household disposable income.|График сравнивает располагаемый доход домохозяйств.|The article explains which deductions affect disposable income.
discretionary spending|расходы на необязательные нужды|C1|The budget separates discretionary spending.|Бюджет отдельно выделяет необязательные расходы.|Entertainment is listed under discretionary spending in the example.
frugal|экономный; избегающий лишних трат|C1|She has always been fairly frugal.|Она всегда была довольно экономной.|A frugal lifestyle did not stop them enjoying the city.
thrifty|бережливый|C1|My thrifty uncle repairs almost everything.|Мой бережливый дядя чинит почти всё.|The guide shares stories from thrifty households.
extravagant|расточительный; чрезмерно дорогой|C1|The gift seemed extravagant.|Подарок показался чрезмерно дорогим.|They planned a modest meal instead of an extravagant celebration.
stingy|скупой|C1|The character is wealthy but stingy.|Персонаж богат, но скуп.|She thought the small portions were rather stingy.
impulse purchase|покупка под влиянием порыва|C1|The lamp was an impulse purchase.|Лампа была импульсивной покупкой.|The article asks why an impulse purchase can feel appealing.
bargain|выгодная покупка|B2|The second-hand desk was a bargain.|Подержанный стол оказался выгодной покупкой.|It looked like a bargain until we included delivery.
value for money|соотношение пользы и цены|B2|The repair offered good value for money.|Ремонт оказался выгодным по соотношению пользы и цены.|The review compares value for money across three products.
cost-effective|дающий нужный результат за разумные затраты|C1|The shared office was a cost-effective option.|Общий офис оказался экономически оправданным вариантом.|A cost-effective solution still has to meet the actual need.
economical|экономичный в использовании ресурсов|B2|The smaller model is more economical.|Меньшая модель экономичнее.|The review measures how economical the appliance is in use.
economies of scale|снижение удельных затрат при росте объёма|C1|The case study illustrates economies of scale.|Учебный пример иллюстрирует экономию от масштаба.|The report asks whether economies of scale offset transport costs.
break even|выйти на нулевой финансовый результат|C1|The event needs more tickets to break even.|Мероприятию нужно продать больше билетов, чтобы окупиться.|The café did not expect to break even in its first month.
break-even point|объём, при котором доходы равны расходам|C1|The chart marks the break-even point.|График отмечает точку безубыточности.|The example shows how rent changes the break-even point.
shortfall|нехватка относительно необходимой суммы|C1|The budget shows a small shortfall.|Бюджет показывает небольшую нехватку средств.|The organisers explained how the shortfall arose.
surplus|избыток средств после покрытия потребностей|C1|The club ended the year with a surplus.|Клуб завершил год с избытком средств.|The report states how the surplus will be used.
deficit|превышение расходов над поступлениями|C1|The accounts show an annual deficit.|Отчётность показывает годовой дефицит.|The article compares the deficit with previous years.
contingency fund|запас средств на непредвиденные расходы|C1|The project includes a contingency fund.|Проект предусматривает резерв на непредвиденные расходы.|The unexpected repair was paid from the contingency fund.
sunk cost|уже понесённые невозвратные затраты|C1|The example treats the old fee as a sunk cost.|В примере старый сбор считается невозвратной затратой.|The lesson explains why a sunk cost differs from a future expense.
opportunity cost|ценность лучшей упущенной альтернативы|C1|The exercise asks about opportunity cost.|Упражнение спрашивает об альтернативной стоимости.|The example compares time as well as money when discussing opportunity cost.
price-sensitive|сильно реагирующий на изменение цены|C1|The survey describes price-sensitive customers.|Опрос описывает покупателей, чувствительных к цене.|A price-sensitive market may respond strongly to a small increase.
competitive pricing|цены, привлекательные относительно конкурентов|C1|The advert emphasises competitive pricing.|Реклама подчёркивает конкурентные цены.|The review considers service quality as well as competitive pricing.
hidden charge|неочевидная дополнительная плата|B2|The final bill revealed a hidden charge.|Итоговый счёт выявил скрытую доплату.|The reviewer complained about a hidden charge at checkout.
upfront cost|первоначальная стоимость до использования|B2|The upfront cost includes installation.|Первоначальная стоимость включает установку.|The comparison separates upfront cost from running expenses.
running cost|текущие расходы на использование|B2|Electricity is the main running cost.|Электричество — основной текущий расход.|The smaller appliance has a lower running cost in the example.
subscription renewal|продление платной подписки|B2|The email confirms the subscription renewal.|Письмо подтверждает продление подписки.|The settings show the next subscription renewal date.
cooling-off period|срок для отказа от обдумываемого решения|C1|The agreement describes a cooling-off period.|В соглашении описан срок для отказа от решения.|The example asks when the cooling-off period begins.
terms and conditions|условия соглашения|B2|The terms and conditions explain the fee.|Условия соглашения объясняют сбор.|The customer asked for a clearer summary of the terms and conditions.
fine print|малозаметные подробности условий|C1|The exception appears in the fine print.|Исключение находится в малозаметных подробностях условий.|The article examines the difference between the headline offer and the fine print.
`,
health: `
fatigue|усталость; утомление|C1|She described persistent fatigue.|Она описала постоянное утомление.|The diary records changes in fatigue throughout the week.
exhaustion|крайнее утомление|B2|He fell asleep from exhaustion.|Он заснул от крайнего утомления.|The memoir describes the exhaustion of working two jobs.
drained|лишённый сил|C1|I felt drained after the long journey.|После долгой поездки я чувствовал себя без сил.|The intense conversation left everyone drained.
weary|утомлённый|C1|The weary travellers finally reached the hotel.|Утомлённые путешественники наконец добрались до отеля.|She sounded weary after a week of interrupted sleep.
sluggish|вялый; медленно действующий|C1|I felt sluggish all morning.|Всё утро я чувствовал себя вялым.|The character's sluggish movements reveal how tired he is.
lethargic|апатично вялый; без энергии|C1|He felt lethargic after the sleepless night.|После бессонной ночи он чувствовал вялость.|The diary describes a lethargic afternoon.
alert|бодрствующий и внимательный|B2|She remained alert during the long shift.|Она оставалась внимательной во время длинной смены.|The driver did not feel sufficiently alert to continue.
refreshed|отдохнувший; восстановивший бодрость|B2|I woke up feeling refreshed.|Я проснулся отдохнувшим.|The short holiday left her refreshed.
rested|выспавшийся; отдохнувший|B2|He looked rested after the weekend.|После выходных он выглядел отдохнувшим.|She wanted to arrive rested rather than rush overnight.
restorative|помогающий восстановить силы|C1|The quiet weekend felt restorative.|Тихие выходные помогли восстановить силы.|She described the familiar walk as restorative.
recharge|восстанавливать энергию и силы|B2|I need some time to recharge.|Мне нужно немного времени, чтобы восстановить силы.|A quiet evening gives him space to recharge.
unwind|расслабляться после напряжения|B2|She reads to unwind after work.|Она читает, чтобы расслабиться после работы.|It took him a while to unwind after the journey.
wind down|постепенно снижать активность и расслабляться|C1|We usually wind down in the evening.|Вечером мы обычно постепенно расслабляемся.|The house became quiet as everyone began to wind down.
switch off|отвлечься от забот и работы|B2|I find it hard to switch off.|Мне трудно отвлечься от забот.|The holiday helped her switch off from work.
overexertion|чрезмерное физическое или умственное напряжение|C1|The report mentions fatigue after overexertion.|В отчёте упоминается утомление после чрезмерного напряжения.|He described the weekend as a period of overexertion.
strain|нагрузка, вызывающая напряжение|B2|The long journey put strain on everyone.|Долгая поездка стала нагрузкой для всех.|The diary describes the strain of caring for two relatives.
stamina|способность долго сохранять силы|C1|The hike tested her stamina.|Поход проверил её способность долго сохранять силы.|He admired the dancers' stamina during the long performance.
endurance|выносливость|C1|The event is a test of endurance.|Событие — проверка выносливости.|The coach discussed endurance rather than speed.
mobility|способность свободно передвигаться|C1|The building provides access for people with limited mobility.|Здание обеспечивает доступ людям с ограниченной подвижностью.|The assessment included questions about everyday mobility.
flexibility|гибкость движений или подхода|B2|The class focuses on flexibility.|Занятие сосредоточено на гибкости.|Her injury temporarily affected her flexibility.
posture|положение тела; осанка|B2|The illustration shows a relaxed posture.|На иллюстрации показано расслабленное положение тела.|The physiotherapist asked about her working posture.
sedentary|преимущественно сидячий|C1|He describes his job as sedentary.|Он описывает свою работу как сидячую.|The survey asked about sedentary time during a normal day.
physical activity|движение, требующее физических усилий|B2|The diary includes daily physical activity.|Дневник включает ежедневную физическую активность.|Participants described the physical activity involved in their work.
exertion|физическое или умственное усилие|C1|The climb required considerable exertion.|Подъём потребовал значительных усилий.|She noticed the difference between ordinary movement and heavy exertion.
soreness|болезненность, особенно мышц|C1|He reported soreness in his shoulders.|Он сообщил о болезненности плеч.|The questionnaire asks how long the soreness lasted.
stiffness|скованность движений|C1|She noticed stiffness in the morning.|Утром она заметила скованность движений.|The assessment records stiffness as well as pain.
discomfort|неприятное физическое ощущение|B2|The tight shoes caused discomfort.|Тесная обувь вызывала дискомфорт.|She described discomfort without a sharp pain.
ache|тупая ноющая боль|B2|He felt a dull ache in his back.|Он чувствовал тупую ноющую боль в спине.|The diary records when the ache began.
tenderness|болезненность при прикосновении|C1|The examination noted tenderness near the bruise.|Осмотр отметил болезненность рядом с синяком.|She was asked whether the tenderness had changed.
swelling|припухлость; отёк|B2|The nurse asked about the swelling.|Медсестра спросила о припухлости.|The report describes swelling around the ankle.
bruise|синяк|B2|A small bruise appeared on his arm.|На его руке появился небольшой синяк.|She could not remember how she got the bruise.
sprain|растяжение связок сустава|C1|The report describes an ankle sprain.|В отчёте описано растяжение связок голеностопа.|The player missed the match because of a sprain.
fracture|перелом кости|C1|The scan showed a small fracture.|Исследование показало небольшой перелом.|The article follows her recovery from the fracture.
inflammation|воспаление|C1|The report mentions signs of inflammation.|В отчёте упоминаются признаки воспаления.|The clinician explained the term inflammation during the visit.
infection|инфекция|B2|The appointment concerned a suspected infection.|Визит касался предполагаемой инфекции.|The report distinguishes infection from other possible causes.
immune system|иммунная система|B2|The chapter describes the immune system.|Глава описывает иммунную систему.|The speaker used a diagram to explain the immune system.
chronic|длительный или постоянно возвращающийся|C1|The study focuses on chronic pain.|Исследование сосредоточено на хронической боли.|She described the effect of a chronic condition on daily life.
acute|быстро возникший или кратковременный, о состоянии|C1|The report describes an acute episode.|В отчёте описан острый эпизод.|The lesson contrasts acute symptoms with a long-term condition.
persistent|продолжающийся долго; упорный|C1|She mentioned a persistent cough.|Она упомянула долго не проходящий кашель.|The questionnaire asks about persistent discomfort.
recurring|повторяющийся время от времени|C1|The diary tracks a recurring headache.|Дневник отслеживает повторяющуюся головную боль.|A recurring problem prompted him to book another appointment.
underlying condition|основное или ранее существовавшее заболевание|C1|The form asks about an underlying condition.|Форма спрашивает об основном или ранее существовавшем заболевании.|The clinician considered whether an underlying condition was relevant.
diagnosis|установленное определение заболевания|B2|The diagnosis was explained at the appointment.|Диагноз объяснили на приёме.|The memoir describes the uncertainty before a diagnosis.
prognosis|предполагаемое дальнейшее течение состояния|C1|The doctor discussed the prognosis.|Врач обсудил предполагаемое течение состояния.|The article distinguishes a prognosis from a diagnosis.
assessment|оценка состояния по установленным признакам|B2|The assessment included several questions.|Оценка состояния включала несколько вопросов.|She received a written summary of the assessment.
screening|проверка на возможное заболевание до явных признаков|C1|The leaflet describes the screening programme.|Буклет описывает программу скрининга.|The appointment letter explains the purpose of screening.
check-up|плановый осмотр|B2|I booked a routine check-up.|Я записался на плановый осмотр.|The check-up took longer than expected.
referral|направление к другому специалисту|C1|She received a referral to a specialist.|Она получила направление к специалисту.|The letter explains the reason for the referral.
consultation appointment|приём для обсуждения состояния со специалистом|B2|The consultation appointment is next Tuesday.|Консультационный приём назначен на следующий вторник.|She prepared questions for the consultation appointment.
practitioner|практикующий специалист|C1|The practitioner asked about her daily routine.|Практикующий специалист спросил о её распорядке.|The form includes the name of the referring practitioner.
specialist|специалист в определённой области|B2|A specialist reviewed the results.|Специалист изучил результаты.|She waited for a letter from the specialist.
prescription|назначение лекарственного средства|B2|The pharmacy received the prescription.|Аптека получила рецепт.|He asked the clinician to explain the prescription.
dosage|назначенное количество и режим применения|C1|The label includes the prescribed dosage.|Этикетка содержит назначенную дозировку.|The patient asked a pharmacist to clarify the dosage.
side effect|нежелательный дополнительный эффект лечения|B2|The leaflet lists a possible side effect.|Буклет указывает возможный побочный эффект.|She asked whether the sensation could be a side effect.
adverse reaction|неблагоприятная реакция на воздействие|C1|The report records an adverse reaction.|Отчёт фиксирует неблагоприятную реакцию.|The clinician asked when the adverse reaction began.
treatment|лечение|B2|They discussed the purpose of the treatment.|Они обсудили цель лечения.|The memoir describes how treatment affected everyday routines.
therapy|метод лечения или психологической помощи|B2|The article describes her experience of therapy.|Статья описывает её опыт терапии.|The clinician explained what the therapy would involve.
rehabilitation|восстановление функций после нарушения|C1|The book follows his rehabilitation.|Книга рассказывает о его восстановлении функций.|The rehabilitation team included several specialists.
recuperate|восстанавливать силы после болезни или нагрузки|C1|She stayed home to recuperate.|Она осталась дома восстанавливать силы.|He needed time to recuperate after the operation.
relapse|возвращение болезни или прежнего состояния|C1|The report mentions a later relapse.|В отчёте упоминается последующий рецидив.|The memoir describes the uncertainty surrounding a relapse.
remission|ослабление или исчезновение проявлений болезни|C1|The letter states that the condition is in remission.|В письме говорится, что состояние находится в ремиссии.|The article follows life during a period of remission.
alleviate|облегчать выраженность неприятного состояния|C1|The consultation focused on ways to alleviate discomfort.|На консультации обсуждались способы облегчить дискомфорт.|The character hoped that rest would alleviate his exhaustion.
aggravate|усиливать неприятное состояние|C1|The diary notes what seemed to aggravate the discomfort.|В дневнике отмечено, что, по ощущениям, усиливало дискомфорт.|He asked whether the long journey might aggravate the problem.
susceptible|подверженный определённому воздействию|C1|The study asks who is more susceptible.|Исследование спрашивает, кто более подвержен воздействию.|The article describes factors that may make a group susceptible.
precaution|предварительная мера предосторожности|C1|The leaflet explains each precaution.|Буклет объясняет каждую меру предосторожности.|The extra check was described as a precaution.
preventive|направленный на предотвращение проблемы|C1|The clinic offers preventive services.|Клиника предлагает профилактические услуги.|The report compares preventive care with later treatment.
nutrient|питательное вещество|C1|The table lists the amount of each nutrient.|В таблице указано количество каждого питательного вещества.|The lesson explains what the word nutrient means in food labels.
nutrition|питание и его связь с организмом|B2|The course includes a chapter on nutrition.|Курс включает главу о питании.|The interview discusses nutrition in everyday terms.
dietary|относящийся к питанию|C1|The form asks about dietary requirements.|Форма спрашивает об особенностях питания.|The study collected dietary information through a questionnaire.
portion|отдельная порция еды|B2|The menu offers a smaller portion.|Меню предлагает меньшую порцию.|She saved half the portion for later.
serving|указанное количество продукта на один приём|B2|The label gives values per serving.|Этикетка указывает значения на одну порцию.|The recipe says one serving fills a small bowl.
appetite|аппетит|B2|The long walk gave me an appetite.|Долгая прогулка пробудила аппетит.|The questionnaire asks about changes in appetite.
craving|сильное желание определённой еды или вещи|C1|She had a sudden craving for something sweet.|Ей внезапно очень захотелось сладкого.|The diary records when the craving was strongest.
hydration|обеспеченность организма жидкостью|C1|The leaflet discusses hydration during travel.|Буклет обсуждает обеспеченность жидкостью в поездках.|The study recorded hydration alongside other measures.
dehydration|недостаток жидкости в организме|C1|The report mentions possible dehydration.|В отчёте упоминается возможное обезвоживание.|The lesson explains the term dehydration without discussing treatment.
digestive|связанный с пищеварением|C1|The appointment concerned digestive discomfort.|Приём касался дискомфорта пищеварения.|The chapter introduces the main digestive organs.
metabolism|обмен веществ|C1|The textbook explains metabolism.|Учебник объясняет обмен веществ.|The interview describes how researchers study metabolism.
intolerance|непереносимость определённого вещества|C1|The form asks about food intolerance.|Форма спрашивает о пищевой непереносимости.|The clinician explained how intolerance differs from an allergy.
allergy|аллергия|B2|She mentioned an allergy on the form.|Она указала аллергию в форме.|The label includes information relevant to her allergy.
insomnia|бессонница|C1|He described a period of insomnia.|Он описал период бессонницы.|The memoir discusses how insomnia affected his concentration.
sleep deprivation|недостаток сна|C1|The article examines sleep deprivation.|Статья рассматривает недостаток сна.|She described the strain of repeated sleep deprivation.
sleep pattern|привычное распределение сна по времени|B2|The journey disrupted my sleep pattern.|Поездка нарушила мой привычный режим сна.|The diary helped describe her changing sleep pattern.
circadian rhythm|суточный биологический ритм|C1|The lecture explains the circadian rhythm.|Лекция объясняет суточный биологический ритм.|The diagram shows one cycle of the circadian rhythm.
drowsy|сонливый|C1|He felt drowsy during the afternoon.|Днём он чувствовал сонливость.|The long, warm bus journey made her drowsy.
groggy|сонно-заторможенный|C1|I felt groggy after waking suddenly.|После внезапного пробуждения я чувствовал сонную заторможенность.|The groggy traveller could barely find his bag.
restorative sleep|сон, после которого восстанавливаются силы|C1|She described the need for restorative sleep.|Она описала потребность в восстанавливающем сне.|The study asked participants how often they experienced restorative sleep.
mental well-being|психологическое благополучие|B2|The survey includes questions about mental well-being.|Опрос включает вопросы о психологическом благополучии.|The discussion connected mental well-being with everyday support.
mindfulness|внимательное осознание текущего опыта|C1|The workshop introduced the idea of mindfulness.|Занятие познакомило участников с идеей осознанного внимания.|She wrote about her experience of learning mindfulness.
self-care|забота о собственных потребностях|C1|The essay explores what self-care means to her.|Эссе исследует, что для неё значит забота о себе.|The interview treats self-care as more than buying products.
coping strategy|способ справляться с трудностью|C1|Writing became her main coping strategy.|Письмо стало её главным способом справляться с трудностью.|The study asks which coping strategy participants used.
stressful|вызывающий напряжение и стресс|B2|The move was more stressful than expected.|Переезд оказался напряжённее, чем ожидалось.|She described a stressful week at work.
overwhelming|настолько сильный или большой, что трудно справиться|C1|The amount of information felt overwhelming.|Объём информации казался непосильным.|A new routine can feel overwhelming at first.
draining|отнимающий много сил|C1|The constant uncertainty was draining.|Постоянная неопределённость отнимала силы.|He found the repeated arguments emotionally draining.
work-life balance|соотношение работы и личной жизни|B2|The new schedule improved her work-life balance.|Новый график улучшил соотношение работы и личной жизни.|The interview asked what work-life balance meant to each person.
boundary|граница допустимого или личного пространства|C1|She explained the boundary clearly.|Она чётко объяснила границу допустимого.|The conversation helped establish a boundary around working hours.
sustainable routine|распорядок, который можно поддерживать долго|C1|She wanted a sustainable routine.|Она хотела распорядок, который можно долго поддерживать.|The essay contrasts a sustainable routine with a short burst of effort.
in moderation|в меру; в умеренных количествах|C1|He enjoys coffee in moderation.|Он пьёт кофе в умеренных количествах.|She says she enjoys most foods in moderation.
consistency|последовательность и регулярность действий|C1|Her main difficulty was consistency.|Главной трудностью для неё была регулярность.|The diary helped her notice changes in consistency.
gradual progress|постепенное продвижение|B2|She found encouragement in gradual progress.|Она находила поддержку в постепенном продвижении.|The story follows gradual progress over several months.
plateau|период без заметного дальнейшего изменения|C1|His progress reached a plateau.|Его продвижение вышло на период без заметных изменений.|The chart shows a plateau after the initial improvement.
lapse|краткий срыв привычного порядка|C1|One lapse did not end the routine.|Один краткий срыв не прекратил привычный порядок.|She described the missed week as a lapse rather than a final failure.
perseverance|настойчивое продолжение усилий|C1|Her perseverance helped her finish the long project.|Её настойчивость помогла ей закончить долгий проект.|Learning a language takes patience and perseverance.
`,
world: `
itinerary|план поездки с маршрутом и остановками|C1|Our itinerary includes two small towns.|Наш маршрут включает два небольших города.|We changed the itinerary after the road closed.
accommodation|жильё на время поездки|B2|We booked accommodation near the station.|Мы забронировали жильё рядом со станцией.|The guide lists accommodation for different budgets.
reservation|предварительное бронирование|B2|The restaurant could not find our reservation.|Ресторан не смог найти нашу бронь.|I received confirmation of the reservation by email.
availability|наличие свободных мест или вариантов|B2|Room availability changes throughout the week.|Наличие свободных номеров меняется в течение недели.|The website shows availability for the selected dates.
vacancy sign|табличка о наличии свободных номеров|B2|The motel had a vacancy sign.|У мотеля была табличка о свободных номерах.|We looked for a vacancy sign as it grew dark.
amenity|удобство или полезный объект на месте|C1|The shared kitchen is a useful amenity.|Общая кухня — полезное удобство.|The description lists each amenity included in the price.
facility|помещение или оборудование для определённой цели|B2|The station has a luggage storage facility.|На станции есть помещение для хранения багажа.|The guide explains which facility remains open at night.
accessible entrance|вход, удобный для людей с ограниченной подвижностью|B2|The accessible entrance is beside the garden.|Доступный вход находится рядом с садом.|A sign directs visitors toward the accessible entrance.
boarding pass|посадочный талон|B2|My boarding pass was saved on the phone.|Мой посадочный талон был сохранён в телефоне.|The screen displayed the boarding pass without an internet connection.
departure|отправление; вылет|B2|The departure was delayed by an hour.|Отправление задержали на час.|The board shows the departure time and platform.
arrival|прибытие|B2|Our arrival was later than planned.|Мы прибыли позже запланированного.|The hotel asked for an approximate arrival time.
layover|перерыв между рейсами|C1|We had a long layover overnight.|У нас была долгая ночная пересадка.|The layover gave us time to read and have lunch.
stopover|промежуточная остановка в поездке|C1|The trip includes a two-day stopover.|Поездка включает двухдневную промежуточную остановку.|We used the stopover to visit an old friend.
connecting flight|следующий рейс при пересадке|B2|We nearly missed the connecting flight.|Мы едва не пропустили стыковочный рейс.|The airline changed the connecting flight after the delay.
transfer|пересадка; перевозка между пунктами|B2|The ticket includes one transfer.|Билет включает одну пересадку.|A shuttle provides a transfer from the station to the hotel.
shuttle|транспорт, регулярно курсирующий между пунктами|B2|The shuttle leaves every half hour.|Трансферный автобус отправляется каждые полчаса.|We waited for the shuttle outside the terminal.
fare|плата за проезд|B2|The fare includes a small suitcase.|Плата за проезд включает небольшой чемодан.|The evening fare is listed beside the timetable.
toll|плата за проезд по дороге или мосту|C1|The bridge has a small toll.|За проезд по мосту берут небольшую плату.|The route planner showed where the toll applied.
customs|таможенный контроль|B2|Our bags were checked at customs.|Наши сумки проверили на таможне.|The signs directed arriving passengers toward customs.
border crossing|место или процесс пересечения границы|B2|The border crossing was quiet that morning.|Утром на пограничном переходе было спокойно.|The diary describes a long wait at the border crossing.
visa requirement|условие получения разрешения на въезд|B2|The guide links to the current visa requirement.|Путеводитель ссылается на актуальное визовое требование.|The traveller checked the visa requirement before booking.
validity|срок или состояние действительности документа|C1|The clerk checked the ticket's validity.|Сотрудник проверил действительность билета.|The document states its period of validity.
expired|с истёкшим сроком действия|B2|The travel card had expired.|Срок действия проездной карты истёк.|An expired document appeared in the folder by mistake.
detour|объезд; отклонение от маршрута|C1|The roadworks forced a long detour.|Дорожные работы вынудили сделать большой объезд.|We took a short detour to see the old bridge.
diversion|временный изменённый маршрут|C1|The bus followed a temporary diversion.|Автобус следовал временному изменённому маршруту.|The sign explains the diversion around the closed street.
congestion|затор; перегруженность транспорта|C1|Traffic congestion delayed the bus.|Дорожные заторы задержали автобус.|The report compares congestion at different times of day.
pedestrian|пешеход|B2|A pedestrian asked us for directions.|Пешеход спросил у нас дорогу.|The bridge provides a separate path for each pedestrian.
pedestrianized|закрытый для обычного движения автомобилей|C1|The old square is now pedestrianized.|Старая площадь теперь стала пешеходной.|We stayed near a pedestrianized shopping street.
intersection|перекрёсток|B2|Turn left at the next intersection.|Поверни налево на следующем перекрёстке.|The café stands beside a busy intersection.
roundabout|кольцевая транспортная развязка|B2|The hotel is just beyond the roundabout.|Отель находится сразу за кольцевой развязкой.|We recognised the roundabout from the map.
landmark|заметный ориентир; достопримечательность|B2|The clock tower is a useful landmark.|Часовая башня — полезный ориентир.|The guide describes a landmark that most visitors overlook.
outskirts|окраина города|B2|They live on the outskirts of town.|Они живут на окраине города.|The path begins near the outskirts and follows the river.
suburb|пригород; жилой район за центром|B2|We stayed in a quiet suburb.|Мы остановились в тихом пригороде.|The railway connects the suburb with the city centre.
rural|сельский|B2|The bus serves several rural communities.|Автобус обслуживает несколько сельских поселений.|The memoir describes a rural childhood.
urban|городской|B2|The exhibition explores urban life.|Выставка исследует городскую жизнь.|The route passes through urban areas before reaching the coast.
isolated|изолированный; удалённый от других мест|B2|The village becomes isolated in heavy snow.|В сильный снег деревня оказывается отрезанной.|We rented an isolated cabin for the weekend.
secluded|уединённый; скрытый от людных мест|C1|The path leads to a secluded beach.|Тропа ведёт к уединённому пляжу.|They found a secluded corner of the garden.
scenic|живописный|B2|We chose the scenic route.|Мы выбрали живописный маршрут.|The train follows a scenic stretch of coastline.
spectacular|впечатляющий своим видом|B2|The view from the ridge is spectacular.|Вид с хребта впечатляет.|A spectacular sunset ended the long day.
breathtaking|захватывающий дух|C1|The valley looked breathtaking in the morning light.|Долина выглядела захватывающе в утреннем свете.|The photographs hardly capture the breathtaking scale of the cliffs.
picturesque|картинно живописный|C1|The guide describes a picturesque harbour.|Путеводитель описывает картинно живописную гавань.|The picturesque village was busier than we expected.
unspoilt|сохранивший естественный вид|C1|The island has several unspoilt beaches.|На острове несколько пляжей, сохранивших естественный вид.|The writer remembers an unspoilt valley from childhood.
rugged|скалистый и неровный, о местности|C1|The path crosses rugged terrain.|Тропа пересекает неровную скалистую местность.|The rugged coastline appears throughout her photographs.
terrain|характер поверхности местности|C1|The terrain changes beyond the river.|За рекой характер местности меняется.|The map gives little sense of the difficult terrain.
altitude|высота над уровнем моря|C1|The sign shows the current altitude.|Знак показывает текущую высоту над уровнем моря.|The landscape changed as the train gained altitude.
elevation|высотное положение или изменение высоты|C1|The route involves a large change in elevation.|Маршрут предполагает большой перепад высоты.|The map marks the elevation of the highest point.
ridge|горный хребет; вытянутый гребень|C1|The trail follows a narrow ridge.|Тропа проходит по узкому гребню.|We could see the village from the ridge.
valley|долина|B2|A river runs through the valley.|Через долину течёт река.|The whole valley filled with mist before sunrise.
peninsula|полуостров|C1|The peninsula has a long coastal road.|На полуострове длинная прибрежная дорога.|The ferry saves a drive around the peninsula.
archipelago|группа островов; архипелаг|C1|The boat visits three islands in the archipelago.|Лодка посещает три острова архипелага.|The map shows how widely the archipelago is spread.
coastline|береговая линия|B2|The coastline curves around a sheltered bay.|Береговая линия огибает защищённую бухту.|The exhibition compares photographs of the changing coastline.
estuary|расширенное устье реки под влиянием моря|C1|Birds gathered around the estuary.|Птицы собрались вокруг устья реки.|The walking route ends where the estuary meets the sea.
wetland|заболоченная или регулярно затопляемая территория|C1|The wetland supports many bird species.|Заболоченная территория поддерживает множество видов птиц.|A raised path allows visitors to cross the wetland.
habitat|естественная среда обитания|B2|The forest provides an important habitat.|Лес служит важной средой обитания.|The project studies changes in the animal's habitat.
ecosystem|система живых организмов и окружающей среды|C1|The guide explains the local ecosystem.|Путеводитель объясняет местную экосистему.|The study examines how one change affects the wider ecosystem.
biodiversity|разнообразие живых организмов|C1|The report measures forest biodiversity.|Отчёт оценивает биологическое разнообразие леса.|The exhibition shows biodiversity at different scales.
conservation|охрана и сохранение природных объектов|B2|The project combines research and conservation.|Проект сочетает исследования и охрану природы.|Local volunteers take part in conservation work.
endangered|находящийся под угрозой исчезновения|B2|The island shelters an endangered species.|Остров служит убежищем для исчезающего вида.|The display explains why the animal is considered endangered.
extinction|исчезновение биологического вида|C1|The chapter examines several causes of extinction.|Глава рассматривает несколько причин исчезновения видов.|The museum traces the extinction of ancient animals.
native species|вид, естественно обитающий в регионе|C1|The garden contains several native species.|В саду есть несколько местных видов.|The project records how each native species is doing.
invasive species|заносной вид, распространяющийся с ущербом|C1|The report tracks an invasive species.|Отчёт отслеживает инвазивный вид.|The sign explains how the invasive species reached the island.
deforestation|сведение лесов|C1|The images reveal extensive deforestation.|Снимки показывают масштабное сведение лесов.|The article compares deforestation across different periods.
reforestation|восстановление леса|C1|The valley has a reforestation project.|В долине идёт проект восстановления леса.|The report reviews the progress of reforestation over ten years.
erosion|разрушение и перенос почвы или породы|C1|The cliff shows clear signs of erosion.|На утёсе видны явные следы эрозии.|The guide explains how erosion shaped the valley.
degradation|ухудшение состояния природной среды|C1|The study documents soil degradation.|Исследование фиксирует ухудшение состояния почвы.|The report links degradation with several interacting pressures.
depletion|истощение запасов|C1|The report describes groundwater depletion.|Отчёт описывает истощение запасов подземной воды.|The chapter discusses depletion as well as pollution.
renewable|возобновляемый естественным образом|B2|The region is expanding renewable energy.|Регион расширяет использование возобновляемой энергии.|The exhibition explains several renewable energy sources.
non-renewable|не возобновляющийся в обозримые сроки|C1|The lesson compares non-renewable resources.|Урок сравнивает невозобновляемые ресурсы.|The report tracks dependence on non-renewable energy.
fossil fuel|ископаемое топливо|B2|The chart shows fossil fuel consumption.|График показывает потребление ископаемого топлива.|The article discusses alternatives to fossil fuel use.
emission|выброс вещества в окружающую среду|C1|The sensor recorded an unusual emission.|Датчик зафиксировал необычный выброс.|The report lists each emission source separately.
carbon footprint|объём связанных с деятельностью парниковых выбросов|C1|The report estimates the event's carbon footprint.|Отчёт оценивает углеродный след мероприятия.|The comparison explains what is included in the carbon footprint.
greenhouse gas|газ, участвующий в удержании тепла атмосферой|C1|The diagram labels each greenhouse gas.|На схеме подписан каждый парниковый газ.|The report compares greenhouse gas emissions by sector.
climate change|долгосрочное изменение климатических условий|B2|The exhibition explores climate change.|Выставка исследует изменение климата.|The chapter examines how climate change affects local planning.
mitigation measure|мера по уменьшению отрицательного воздействия|C1|The plan includes one mitigation measure.|План включает одну меру по снижению отрицательного воздействия.|The review asks whether the mitigation measure achieved its goal.
climate adaptation|приспособление к меняющимся климатическим условиям|C1|The city published a climate adaptation plan.|Город опубликовал план адаптации к климатическим изменениям.|The report separates climate adaptation from emissions reduction.
resilient|способный выдерживать нарушения и восстанавливаться|C1|The project aims to create resilient infrastructure.|Проект стремится создать устойчивую к нарушениям инфраструктуру.|The study asks what makes a coastal community resilient.
ecological|относящийся к взаимосвязям живого и среды|C1|The proposal needs an ecological assessment.|Предложению нужна экологическая оценка.|The article describes the ecological role of wetlands.
environmental impact|воздействие на окружающую среду|B2|The report examines the environmental impact.|Отчёт рассматривает воздействие на окружающую среду.|The comparison includes environmental impact alongside financial cost.
pollution|загрязнение окружающей среды|B2|The study measured river pollution.|Исследование измеряло загрязнение реки.|Residents raised concerns about noise pollution.
contamination|попадание нежелательного вещества в среду или продукт|C1|The test checked for contamination.|Проверка искала загрязнение посторонним веществом.|The report traces the source of contamination.
landfill|полигон захоронения отходов|C1|The old landfill is outside the town.|Старый полигон отходов находится за городом.|The report measures how much material ends up in landfill.
recycling|переработка использованных материалов|B2|The building has a shared recycling area.|В здании есть общая зона для вторсырья.|The article explains the local recycling process.
biodegradable|способный разлагаться биологическим путём|C1|The label describes the material as biodegradable.|Этикетка описывает материал как биоразлагаемый.|The report asks under which conditions the packaging is biodegradable.
compostable|пригодный для разложения в условиях компостирования|C1|The café tested compostable packaging.|Кафе испытало упаковку, пригодную для компостирования.|The label explains the conditions required for the item to be compostable.
reusable|пригодный для многократного использования|B2|The bottle comes with a reusable case.|Бутылка поставляется с многоразовым футляром.|The event offered reusable cups instead of disposable ones.
disposable|предназначенный для однократного использования|B2|The shop stopped offering disposable bags.|Магазин перестал предлагать одноразовые пакеты.|The report counts disposable items used during the festival.
resource scarcity|ограниченность доступных природных ресурсов|C1|The course examines resource scarcity.|Курс рассматривает ограниченность природных ресурсов.|The report links resource scarcity with changes in demand.
drought|длительный недостаток осадков; засуха|B2|The region experienced a prolonged drought.|Регион пережил длительную засуху.|The photographs document the effects of drought on the valley.
flood|затопление территории|B2|The flood damaged the old bridge.|Наводнение повредило старый мост.|The museum records the town's response to the flood.
flash flood|быстро возникающее затопление|C1|A flash flood interrupted the journey.|Быстрое наводнение прервало поездку.|The report describes how the flash flood developed.
heatwave|период необычно жаркой погоды|B2|The city experienced a week-long heatwave.|Город пережил недельную волну жары.|The diary describes daily life during the heatwave.
cold snap|краткий период резкого похолодания|C1|A cold snap arrived in early spring.|В начале весны резко похолодало.|The unexpected cold snap changed the travel plans.
precipitation|атмосферные осадки|C1|The chart shows monthly precipitation.|График показывает месячные осадки.|The forecast includes precipitation as well as temperature.
humidity|влажность воздуха|B2|The room felt warmer because of the humidity.|Из-за влажности комната казалась теплее.|The weather report lists humidity near the bottom.
forecast uncertainty|неопределённость прогноза|C1|The report explains the forecast uncertainty.|Отчёт объясняет неопределённость прогноза.|The map represents forecast uncertainty with a shaded area.
evacuation|организованный вывоз из опасного места|C1|The film follows the town's evacuation.|Фильм рассказывает об эвакуации города.|The report reviews how the evacuation was organised.
relief effort|организованная помощь после бедствия|C1|Volunteers joined the relief effort.|Добровольцы присоединились к помощи после бедствия.|The article describes the coordination of the relief effort.
humanitarian|направленный на помощь людям в тяжёлых условиях|C1|The organisation arranged humanitarian assistance.|Организация организовала гуманитарную помощь.|The report examines the challenges of humanitarian work.
remote area|местность далеко от центров и услуг|B2|The guide describes travel in a remote area.|Путеводитель описывает поездки по удалённой местности.|A small clinic serves the remote area.
off the beaten track|в стороне от популярных маршрутов|C1|The village lies off the beaten track.|Деревня находится в стороне от популярных маршрутов.|We wanted a quiet place off the beaten track.
`,
connections: `
nevertheless|тем не менее|C1|The task was difficult; nevertheless, we finished.|Задача была сложной; тем не менее мы закончили.|The evidence is limited but nevertheless worth examining.
moreover|более того|C1|The room is quiet; moreover, it is cheap.|Комната тихая; более того, она недорогая.|The plan is expensive and, moreover, difficult to maintain.
furthermore|кроме того; в дополнение к сказанному|C1|The guide is clear; furthermore, it is free.|Руководство понятное; кроме того, оно бесплатное.|Furthermore, the author explains the limits of the method.
consequently|вследствие этого|C1|Demand fell; consequently, production slowed.|Спрос упал; вследствие этого производство замедлилось.|The road closed, and consequently we arrived late.
hence|следовательно; отсюда|C1|The file is missing, hence the error.|Файл отсутствует, отсюда и ошибка.|The room was unheated, hence our decision to leave early.
thus|таким образом; следовательно|C1|The deadline passed; thus, the offer expired.|Срок прошёл; таким образом, предложение истекло.|The evidence is incomplete and thus supports only a tentative conclusion.
thereby|тем самым|C1|We reduced duplication, thereby saving time.|Мы сократили дублирование, тем самым сэкономив время.|The change removes one step, thereby simplifying the process.
accordingly|соответственно; с учётом этого|C1|The forecast changed, so we planned accordingly.|Прогноз изменился, поэтому мы скорректировали планы.|The requirements differ; the examples were adjusted accordingly.
conversely|и наоборот; с противоположной стороны|C1|High demand raises prices; conversely, low demand may lower them.|Высокий спрос повышает цены; и наоборот, низкий может их снизить.|The first group preferred speed; conversely, the second valued detail.
likewise|аналогично; также|C1|The second report likewise questions the figures.|Второй отчёт также ставит цифры под вопрос.|She thanked me, and I did likewise.
similarly|подобным образом|B2|The second example works similarly.|Второй пример работает подобным образом.|The two reviewers responded similarly to the ending.
alternatively|как другой вариант|B2|We can walk or, alternatively, take the tram.|Мы можем пойти пешком или, как вариант, сесть на трамвай.|Alternatively, you could discuss the idea in writing.
subsequently|впоследствии; после этого|C1|The error was subsequently corrected.|Впоследствии ошибку исправили.|She read the article and subsequently changed her opinion.
previously|ранее|B2|We had previously discussed a smaller project.|Ранее мы обсуждали меньший проект.|The guide explains a feature that was previously undocumented.
ultimately|в конечном итоге|C1|The choice ultimately depends on your needs.|Выбор в конечном итоге зависит от твоих потребностей.|The changes looked promising but ultimately caused more work.
meanwhile|тем временем|B2|Meanwhile, the other team checked the figures.|Тем временем другая команда проверила цифры.|The train was delayed; meanwhile, we found somewhere to eat.
henceforth|с этого момента и впредь|C1|The document will henceforth use the shorter name.|Далее в документе будет использоваться короткое название.|The agreement states that updates will henceforth be sent monthly.
thereafter|после этого; в дальнейшем|C1|They met once and rarely spoke thereafter.|Они встретились один раз и затем редко общались.|The opening is slow, but the pace improves thereafter.
provided that|при условии что|B2|We can proceed provided that everyone agrees.|Мы можем продолжить при условии всеобщего согласия.|The room is available provided that we finish by six.
insofar as|в той мере, в какой|C1|The claim is useful insofar as it can be tested.|Утверждение полезно в той мере, в какой его можно проверить.|I agree insofar as the proposal addresses the main problem.
in light of|в свете; с учётом новой информации|C1|We revised the plan in light of your feedback.|Мы пересмотрели план с учётом твоих замечаний.|The earlier conclusion seems weaker in light of these results.
in view of|ввиду; принимая во внимание|C1|The event was moved in view of the forecast.|Мероприятие перенесли с учётом прогноза.|In view of the delay, we chose a simpler route.
owing to|вследствие; из-за|C1|The station closed owing to repairs.|Станцию закрыли из-за ремонта.|Owing to limited space, the display includes only selected works.
due to|из-за; вследствие|B2|The delay was due to heavy traffic.|Задержка произошла из-за плотного движения.|The difference may be due to a change in the sample.
as a result|в результате|B2|The route changed; as a result, we arrived early.|Маршрут изменился; в результате мы приехали раньше.|She practised regularly and became more confident as a result.
on account of|по причине|C1|The path was closed on account of flooding.|Тропу закрыли по причине затопления.|On account of the short notice, several people could not attend.
in response to|в ответ на|B2|The guide changed in response to reader questions.|Руководство изменилось в ответ на вопросы читателей.|The company published a statement in response to the report.
by virtue of|в силу; благодаря обладанию определённым качеством|C1|She joined the panel by virtue of her experience.|Она вошла в комиссию благодаря своему опыту.|The document is public by virtue of the organisation's own rules.
in accordance with|в соответствии с|C1|The work proceeded in accordance with the plan.|Работа продолжалась в соответствии с планом.|The labels were updated in accordance with the agreed terminology.
with regard to|что касается; в отношении|C1|I have one question with regard to timing.|У меня один вопрос относительно сроков.|The report is cautious with regard to future demand.
as regards|что касается|C1|As regards cost, the options are similar.|Что касается стоимости, варианты похожи.|We still need a decision as regards the final format.
pertaining to|относящийся к|C1|The folder contains documents pertaining to the project.|Папка содержит документы, относящиеся к проекту.|Please include only information pertaining to this request.
in relation to|по отношению к; в связи с|B2|Consider the price in relation to durability.|Рассмотри цену по отношению к долговечности.|The article discusses the decision in relation to earlier promises.
in addition to|помимо; в дополнение к|B2|The fee covers transport in addition to meals.|Сбор покрывает транспорт помимо питания.|In addition to the text, the guide includes diagrams.
apart from|кроме; за исключением|B2|Everyone agreed apart from one reviewer.|Все согласились, кроме одного рецензента.|Apart from the slow opening, I enjoyed the book.
except for|за исключением|B2|The room was empty except for a chair.|Комната была пуста, за исключением стула.|The two versions are identical except for the final paragraph.
other than|кроме; помимо|B2|I have no questions other than this one.|У меня нет вопросов, кроме этого.|The report gives no reason other than limited time.
as opposed to|в противоположность; в отличие от|C1|We need an example as opposed to a definition.|Нам нужен пример, а не определение.|The article examines actual use as opposed to intended use.
in contrast to|в отличие от; по контрасту с|B2|The ending is calm in contrast to the opening.|Концовка спокойная в отличие от начала.|In contrast to the first survey, this one includes rural residents.
compared with|по сравнению с|B2|The room is quiet compared with the hallway.|В комнате тихо по сравнению с коридором.|The result improved compared with our previous attempt.
for instance|например|B2|Some tasks, for instance translation, take longer.|Некоторые задачи, например перевод, занимают больше времени.|A small change can help; for instance, a clearer label.
namely|а именно|C1|One issue remains, namely the delivery date.|Остаётся один вопрос, а именно дата доставки.|The guide covers two skills, namely reading and writing.
in particular|в частности; особенно|B2|I liked the dialogue in particular.|Мне особенно понравились диалоги.|The report focuses on transport and, in particular, rural bus routes.
above all|прежде всего; важнее всего|B2|Above all, the explanation should be clear.|Прежде всего объяснение должно быть понятным.|She valued honesty above all.
in other words|другими словами|B2|The plan is provisional; in other words, it may change.|План предварительный; другими словами, он может измениться.|In other words, we have identified a question rather than an answer.
that is to say|то есть; иначе говоря|C1|The service is local, that is to say, it runs here.|Сервис локальный, то есть работает здесь.|The claim is narrow, that is to say, it applies only to this example.
in short|коротко говоря|B2|In short, we need a clearer explanation.|Коротко говоря, нам нужно более понятное объяснение.|The route is longer but, in short, much easier.
all in all|в целом, подводя итог|B2|All in all, the trip went well.|В целом поездка прошла хорошо.|The book has flaws but is rewarding all in all.
to sum up|подводя итог|B2|To sum up, the evidence is mixed.|Подводя итог, доказательства неоднозначны.|The reviewer used the final paragraph to sum up the main strengths.
on the whole|в общем и целом|B2|On the whole, I agree with the review.|В общем и целом я согласен с рецензией.|The new arrangement works well on the whole.
carry out|выполнять; проводить|B2|We will carry out the checks tomorrow.|Мы проведём проверки завтра.|The team needs more time to carry out the survey.
carry on|продолжать начатое|B2|You can carry on while I check.|Ты можешь продолжать, пока я проверяю.|The interruption did not stop her from trying to carry on.
carry over|переносить в следующий период или этап|C1|Unused time may carry over to next week.|Неиспользованное время может перейти на следующую неделю.|We decided to carry over the unfinished discussion.
come up with|придумать; предложить решение|B2|Can you come up with a better title?|Можешь придумать заголовок получше?|The group will come up with several options before choosing one.
come down to|в конечном счёте сводиться к|C1|The decision may come down to cost.|Решение может в итоге свестись к стоимости.|Small disagreements often come down to different expectations.
come up against|столкнуться с препятствием|C1|We may come up against a space constraint.|Мы можем столкнуться с ограничением места.|The researchers did not expect to come up against such resistance.
come into play|начать влиять; вступить в действие|C1|Other factors come into play at this stage.|На этом этапе начинают влиять другие факторы.|Price is not the only concern that can come into play.
come to terms with|принять трудную реальность|C1|She needed time to come to terms with the change.|Ей нужно было время принять перемену.|The novel follows his effort to come to terms with the past.
bring about|вызывать; приводить к изменению|C1|The conversation could bring about a useful change.|Разговор может привести к полезному изменению.|A small discovery can bring about a new way of thinking.
bring forward|переносить на более ранний срок|C1|Can we bring forward the meeting?|Можем перенести встречу на более ранний срок?|The organisers decided to bring forward the announcement.
bring out|выявлять; подчёркивать качество|B2|The new lighting will bring out the colours.|Новое освещение подчеркнёт цвета.|A good question can bring out the uncertainty in an argument.
back up|подкреплять; подтверждать доказательствами|B2|Can you back up that claim?|Можешь подкрепить это утверждение?|The article needs figures to back up its conclusion.
back out|отказываться от ранее принятого обязательства|C1|He decided to back out of the trip.|Он решил отказаться от согласованной поездки.|They were reluctant to back out after everyone had prepared.
back down|переставать настаивать на своей позиции|C1|Neither side wanted to back down.|Ни одна сторона не хотела уступать.|He chose to back down after seeing the full report.
break down|разбивать сложное целое на части|B2|Please break down the total cost.|Пожалуйста, разбей общую стоимость на составляющие.|We can break down the task into smaller steps.
break through|преодолевать преграду|C1|The team hoped to break through the deadlock.|Команда надеялась преодолеть тупик.|A new example helped break through the confusion.
break off|резко прекращать действие или отношения|C1|They may break off the talks.|Они могут прервать переговоры.|She had to break off the conversation when the train arrived.
build on|развивать, опираясь на уже достигнутое|B2|The next lesson will build on this idea.|Следующий урок будет развивать эту идею.|We should build on what already works.
build up|постепенно накапливать или усиливать|B2|Small tasks can build up quickly.|Мелкие задачи могут быстро накопиться.|Regular practice helps build up a useful vocabulary.
call for|требовать; делать необходимым|C1|The findings call for further investigation.|Результаты требуют дальнейшего изучения.|A major change may call for a different approach.
call off|отменять запланированное|B2|We had to call off the picnic.|Нам пришлось отменить пикник.|The organisers may call off the event if the venue closes.
check in|отмечаться по прибытии; регистрироваться|B2|We can check in after three.|Мы можем зарегистрироваться после трёх.|The email explains where to check in for the event.
check out|посмотреть; проверить из интереса|B2|You should check out the new exhibition.|Тебе стоит посмотреть новую выставку.|I want to check out the source before sharing the quote.
cut out|удалять; исключать ненужное|B2|We can cut out the repeated paragraph.|Мы можем убрать повторяющийся абзац.|The editor asked me to cut out unrelated details.
cut off|прерывать связь или доступ|B2|The storm may cut off the village.|Буря может отрезать деревню от связи с другими местами.|The weak signal began to cut off parts of the conversation.
draw on|использовать имеющийся опыт или материал|C1|The essay will draw on several interviews.|Эссе будет опираться на несколько интервью.|She can draw on years of experience in the field.
draw up|составлять официальный план или документ|C1|We need to draw up a new agreement.|Нам нужно составить новое соглашение.|The team will draw up a schedule after the site visit.
fall apart|разрушаться; переставать работать как целое|B2|The plan began to fall apart.|План начал разваливаться.|Without that assumption, the argument can fall apart.
fall back on|прибегать к запасному варианту|C1|We can fall back on the original plan.|Мы можем вернуться к первоначальному плану как запасному.|He had a small reserve to fall back on.
fill in|заполнять недостающие сведения|B2|Please fill in the missing details.|Пожалуйста, заполни недостающие сведения.|The final interview helped fill in gaps in the story.
fill out|заполнять форму|B2|You can fill out the form later.|Ты можешь заполнить форму позже.|The website asks visitors to fill out a short questionnaire.
get across|ясно передавать мысль|B2|I could not get across what I meant.|Я не смог ясно передать, что имел в виду.|A diagram may get across the idea more quickly.
get by|справляться имеющимися ограниченными средствами|B2|We can get by with a smaller car.|Мы можем обойтись машиной поменьше.|He knows enough English to get by during short trips.
get over|преодолевать переживание или трудность|B2|She needed time to get over the disappointment.|Ей нужно было время пережить разочарование.|I could not get over how different the town looked.
give in|уступать давлению|B2|He refused to give in to pressure.|Он отказался уступать давлению.|The group eventually agreed to give in on the minor point.
give up|прекращать попытки или занятие|B2|I do not want to give up yet.|Я пока не хочу прекращать попытки.|She decided to give up the course that no longer suited her.
go ahead|начинать или продолжать с разрешения|B2|You can go ahead with the changes.|Ты можешь приступать к изменениям.|We need confirmation before we go ahead.
go through|тщательно просматривать или разбирать|B2|Let us go through the notes together.|Давай вместе разберём заметки.|She asked for time to go through the full report.
hold back|сдерживать; не сообщать всё|C1|Do not hold back useful feedback.|Не сдерживай полезные замечания.|The narrator seems to hold back one important detail.
hold off|откладывать действие на время|C1|We should hold off until the figures arrive.|Нам стоит подождать, пока придут цифры.|The team decided to hold off on the announcement.
keep track of|отслеживать; не терять из виду|B2|It is hard to keep track of every change.|Трудно отслеживать каждое изменение.|The notebook helps me keep track of new expressions.
leave out|пропускать; не включать|B2|Do not leave out the main limitation.|Не пропускай главное ограничение.|The summary had to leave out several interesting examples.
look back on|вспоминать и оценивать прошлое|B2|I look back on that year fondly.|Я с теплотой вспоминаю тот год.|We may look back on this choice differently later.
look up|искать справочную информацию|B2|I need to look up this expression.|Мне нужно найти значение этого выражения.|You can look up the term after trying to infer its meaning.
make out|разобрать; суметь понять|C1|I could barely make out the handwriting.|Я едва мог разобрать почерк.|Can you make out what the final sentence means?
pass on|передавать дальше|B2|Please pass on the updated instructions.|Пожалуйста, передай обновлённые инструкции.|She did not want to pass on an unverified rumour.
phase out|постепенно выводить из использования|C1|The team will phase out the old format.|Команда постепенно выведет старый формат из использования.|The plan explains how to phase out the outdated equipment.
pick up|усвоить попутно, без формального обучения|B2|You can pick up expressions while reading.|Можно попутно усваивать выражения при чтении.|I tend to pick up new phrases from written discussions.
put forward|выдвигать идею или довод|C1|She will put forward a different explanation.|Она выдвинет другое объяснение.|The article does not put forward a single clear solution.
run into|неожиданно столкнуться с проблемой или человеком|B2|We may run into a few problems.|Мы можем столкнуться с несколькими проблемами.|I did not expect to run into my old teacher there.
`,
};

export const expandedWords = Object.entries(groups).flatMap(([topic, data]) => data.trim().split('\n').map(row => {
  const [term, ru, level, example, translation, secondExample] = row.split('|');
  return { id: `${topic}:${term}`, topic, term, ru, level, example, translation, secondExample };
}));
