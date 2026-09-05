import { expandedWords } from './vocabulary-expansion.js';
import { contextTranslations } from './context-translations.js';
// A second original context for each built-in expression, independent of its study example.
export const contexts = Object.fromEntries(`
claim|Your claim needs a source, not just a confident tone.
evidence|The screenshots provide evidence that the feature used to work.
assume|I would not assume that a higher price means better quality.
point out|Several readers were quick to point out the mistake.
reasonable|A week seems like a reasonable amount of time to wait.
misleading|A technically correct statement can still be misleading.
take into account|The comparison does not take into account battery life.
perspective|Moving abroad gave me a different perspective on home.
disagree|We can disagree without turning this into an argument.
likely|People are more likely to reply when the question is specific.
unlikely|A single setting is unlikely to explain every failure.
relevant|Your experience is relevant to the discussion.
accurate|The map is useful, but not entirely accurate.
in my view|There is, in my view, a simpler solution.
draw a conclusion|We cannot draw a conclusion from one unusual example.
make sense|The instructions did not make sense until I saw the diagram.
thread|Someone posted a detailed guide further down the thread.
take|What is your take on working four days a week?
relatable|The awkward conversation in this comic is very relatable.
rant|I expected a review, but got a long rant about the delivery.
apparently|The café is apparently closed on Mondays now.
overrated|Calling a book overrated does not mean it is bad.
underrated|Walking is an underrated way to explore a new city.
genuinely|Was that a joke, or were you genuinely asking?
fair enough|If the cost matters more to you, fair enough.
IMO|IMO, the comments are more useful than the article.
TBH|TBH, I only read the first half of the thread.
TIL|TIL why my phone gets warm during an update.
FWIW|FWIW, the free version has everything I need.
OP|Did anyone actually read what the OP asked?
sarcasm|Without the last sentence, I would have missed the sarcasm.
out of context|A screenshot can make an ordinary reply look rude out of context.
afford|We can afford the tickets if we book them early.
avoid|To avoid confusion, give each file a clear name.
bother|Do not bother downloading it; there is a browser version.
convenient|Online shopping is convenient when you have little free time.
effort|Writing a clear error report takes some effort.
habit|Checking the source has become a habit.
manage to|How do you manage to read so many books?
notice|Most readers will not notice a tiny change in the layout.
otherwise|Save a local copy; otherwise, you may lose your notes.
owe|You do not owe strangers on the internet a reply.
prefer|Some readers prefer short chapters.
remind|These old photos remind me of our first flat.
run out of|Charge your phone before you run out of battery.
sort out|Can we sort out the details after lunch?
worthwhile|Learning a few local phrases made the trip more worthwhile.
roughly|The two plans cost roughly the same.
deadline|The deadline was moved to the end of the month.
feedback|Specific feedback is easier to act on.
follow up|Could you follow up with the support team?
clarify|The author added a note to clarify what she meant.
available|A written summary will be available after the call.
responsible|Every team is responsible for keeping its notes up to date.
prioritize|When everything feels important, it is difficult to prioritize.
requirement|An internet connection is not a requirement for this lesson.
approach|His approach to learning focuses on short daily sessions.
scope|We reduced the scope so we could finish on time.
trade-off|Living in the centre involves a trade-off between space and convenience.
on the same page|A short written summary keeps everyone on the same page.
reach out|You can reach out to the organiser directly.
in advance|The venue must be booked in advance.
postpone|I would rather postpone the launch than release a broken app.
outcome|A useful discussion does not always have an obvious outcome.
request|Send one request at a time to avoid hitting the limit.
response|An empty response is different from a network error.
issue|Please describe the issue before suggesting a fix.
deprecated|The deprecated option still works, but may be removed later.
workaround|This workaround helps until the official fix arrives.
reproduce|Include the exact steps needed to reproduce the bug.
deploy|It is safer to deploy this change during working hours.
retrieve|The app cannot retrieve your old notes without the backup file.
fallback|Printed tickets are a useful fallback if your phone stops working.
permission|The app should explain why it needs that permission.
reliable|A reliable tool does the ordinary things consistently well.
handle|This function must handle an empty list.
enable|The update will enable users to export their notes.
by default|Notifications are turned off by default.
ensure|Tests help ensure that old features keep working.
regardless of|Everyone can join, regardless of their experience.
overwhelmed|New users may feel overwhelmed by a page full of options.
relieved|I was relieved when the missing file turned up.
frustrated|Readers get frustrated when a link leads to a different article.
anxious|Waiting for a reply made me anxious.
confident|She sounds confident, but she has not checked the numbers.
awkward|Asking the same question twice felt awkward.
grateful|We are grateful to everyone who reported a problem.
thoughtful|A thoughtful reply can change the tone of a discussion.
stubborn|Being stubborn is not the same as being confident.
considerate|It is considerate to warn people before sharing spoilers.
trust|Would you trust a review with no examples?
resent|People may resent rules that nobody explains.
cope with|A simple routine helps me cope with unexpected changes.
let down|The ending will let down anyone expecting a mystery.
take for granted|It is easy to take for granted a service that always works.
set boundaries|You can set boundaries without being rude.
policy|Read the cancellation policy before paying.
concern|My main concern is how the data will be used.
impact|Small design decisions can have a surprising impact.
research|More research is needed before making a strong recommendation.
survey|The survey only included people who already used the product.
bias|Asking a leading question can introduce bias.
source|An anonymous comment is not always a reliable source.
headline|The headline makes a much stronger claim than the study does.
raise awareness|Sharing personal stories can raise awareness of a problem.
inequality|Better public transport may help reduce inequality.
access|You will still have access to your files after cancelling.
community|A small community can be more helpful than a large audience.
trend|One popular post does not prove there is a trend.
despite|The app is easy to use despite its many features.
whereas|The first plan includes support, whereas the second does not.
long-term|A short delay may prevent a long-term problem.
plot|The plot takes a surprising turn halfway through.
character|Each character sees the same event differently.
setting|The unusual setting makes an ordinary story memorable.
compelling|She makes a compelling argument for keeping the library open.
predictable|The jokes are predictable, but the actors are excellent.
subtle|There is a subtle difference between the two translations.
portray|The article does not fairly portray the opposing view.
insight|The comments offer an insight into how people use the app.
review|A useful review explains who the product is for.
spoiler|The title itself contains a spoiler.
recommend|I would recommend starting with the shorter essays.
stand out|Clear examples help this guide stand out.
reference|You do not need to understand every reference to enjoy the story.
adaptation|The film is a loose adaptation of the original novel.
live up to|It is difficult to live up to that much praise.
thought-provoking|The discussion was more thought-provoking than the film.
budget|Choose a course that fits your budget.
expense|Replacing the screen was an unexpected expense.
subscription|Does the subscription renew automatically?
refund|Support offered a full refund after the second failure.
fee|The final price includes a small service fee.
value|Extra features do not always add value.
purchase|This was my first purchase from that shop.
discount|The discount only applies to the first month.
affordable|An affordable repair is better than replacing the whole device.
overpriced|A useful product can still be overpriced.
hidden cost|The time spent learning a complicated tool is a hidden cost.
save up|It took six months to save up enough money.
cut back on|I decided to cut back on online shopping.
in the long run|Repairing it now could save time in the long run.
worth it|The extra effort was worth it when I could read the original.
drawback|Another drawback is that you cannot use it offline.
well-being|Constant notifications can affect your well-being.
exhausted|By Friday, the whole team felt exhausted.
recover|It can take time to recover from a stressful month.
routine|The trick is to make reading part of your routine.
consistent|A consistent layout makes the app easier to understand.
gradually|You will gradually rely less on the translation.
struggle|Many beginners struggle with articles.
symptom|A slow response may be a symptom of a larger issue.
appointment|You can change your appointment online.
balanced|The article gives a balanced account of the debate.
take a break|If every word feels difficult, take a break.
cut down on|Turning off alerts helped me cut down on screen time.
keep up|I cannot keep up with every new post.
burnout|Working longer hours is not a solution to burnout.
restless|The children became restless during the long wait.
pay attention to|When reading a review, pay attention to the examples.
destination|Choose a destination where you can travel without a car.
surroundings|Learning the street names helped me understand my surroundings.
remote|A remote team needs clear written communication.
crowded|I prefer visiting museums when they are less crowded.
commute|Reading on my commute became a daily habit.
delay|The delay gave us time to check the instructions.
nearby|Ask someone nearby if you cannot find the stop.
abroad|Living abroad changed how I thought about language learning.
sustainable|A shorter daily lesson is often a more sustainable habit.
waste|Buying a tool you never use is a waste of money.
shortage|A shortage of staff caused longer waiting times.
wildlife|Visitors are asked not to feed the wildlife.
landscape|The landscape looks completely different in winter.
preserve|Save a copy to preserve the original formatting.
settle in|A friendly neighbour helped us settle in.
get around|A local map makes it much easier to get around.
although|The guide is useful although some examples are old.
however|I liked the idea; however, the price was too high.
therefore|The sample is small; therefore, the results may not apply to everyone.
unless|Do not share the screenshot unless you remove the private details.
as long as|The free plan is enough as long as you only need basic features.
even though|I understood the joke even though two words were unfamiliar.
in terms of|The options are similar in terms of cost.
rather than|Try to explain the meaning rather than translate every word.
figure out|The comments helped me figure out why it happened.
turn out|An ordinary conversation can turn out to be useful practice.
bring up|I did not expect anyone to bring up that example.
come across|Save useful phrases whenever you come across them.
put off|It is easy to put off a task that feels too large.
look into|The team promised to look into the missing feature.
end up|Without a clear question, the discussion may end up going nowhere.
keep in mind|When comparing prices, keep in mind the total cost.
`.trim().split('\n').map(row => row.split('|')));
Object.assign(contexts, Object.fromEntries(expandedWords.map(w => [w.term, w.secondExample])));

// Keep the sentence and its translation together, including restored sessions.
export function wordContext(word, exampleIndex = 0) {
  if (exampleIndex && !word.id.startsWith('custom:') && contexts[word.term]) {
    return { example: contexts[word.term], translation: contextTranslations[word.term] || '' };
  }
  return { example: word.example, translation: word.translation || '' };
}

export const readingGists = {
  'quiet-internet': 'A hobby does not have to make money. The author values enjoying it without turning it into another job.',
  'api-retry': 'Check the type of error before retrying. Some repeated requests can create duplicates, and shared logs must not contain private information.',
  productivity: 'Planning and doing are different. A simple tool and a few real priorities can be more useful than a complicated system.',
  'remote-work': 'Remote work offers flexibility, but clear boundaries and shared expectations are needed to avoid being available all the time.',
  'book-review': 'The reviewer likes the subtle characters and conversations. Some criticism may come from expecting a mystery instead of a quiet story.',
  headline: 'The survey shows an association, not proof that reading causes happiness. The headline claims more than the evidence supports.',
  subscription: 'Compare the total cost and your actual needs. A low monthly price or a discount does not automatically make a product good value.',
  'new-city': 'Everyday exploration and familiar faces gradually made the new city feel like home, even though getting around was difficult at first.',
};

export const grammarVariants = {
  be: [['The instructions ___ clear.', 'are'], ['My phone ___ offline.', 'is'], ['___ she available?', 'Is'], ['I ___ ready to start.', 'am']],
  present: [['The system ___ logs every night. (save)', 'saves'], ['___ these files contain private data? (Do / Does)', 'Do'], ['She does not ___ this shortcut. (use)', 'use'], ['We ___ articles every weekend. (read)', 'read']],
  articles: [['I received ___ email. (Впервые упоминаем письмо.)', 'an'], ['She posted a reply. ___ reply was helpful.', 'The'], ['He is ___ university student.', 'a'], ['We waited for ___ hour.', 'an']],
  quantity: [['How ___ feedback did you receive? (much / many)', 'much'], ['How ___ requests failed? (much / many)', 'many'], ['There are not ___ updates yet. (some / any)', 'any'], ['I found useful ___. (information / informations)', 'information']],
  continuous: [['He is ___ a report at the moment. (write)', 'writing'], ['We ___ waiting for the reply right now.', 'are'], ['She ___ more time. (needs / is needing)', 'needs'], ['The app usually ___ quickly. (load)', 'loads']],
  past: [['She ___ the error last night. (see)', 'saw'], ['Did they ___ your message? (receive / received)', 'receive'], ['We ___ online yesterday. (was / were)', 'were'], ['He ___ the file two days ago. (download)', 'downloaded']],
  future: [['She is ___ to study tonight. (Заранее решила.)', 'going'], ['We will ___ the source tomorrow. (check)', 'check'], ['We ___ going to leave early. (be)', 'are'], ['The update will not ___ ready today. (be)', 'be']],
  modals: [['You should ___ a local copy. (keep)', 'keep'], ['Visitors ___ not enter this room. (Строгий запрет: must / should)', 'must'], ['We do not ___ to pay. (Платить необязательно.)', 'have'], ['He can ___ the problem clearly. (explain)', 'explain']],
  comparison: [['This route is ___ than the other one. (short)', 'shorter'], ['The instructions are ___ detailed now. (Более подробные: more / most)', 'more'], ['It is the ___ explanation I have read. (good)', 'best'], ['The new version is simpler ___ the old one.', 'than']],
  prepositions: [['The meeting is ___ Thursday.', 'on'], ['The lesson begins ___ 6 pm.', 'at'], ['She is interested ___ this discussion.', 'in'], ['The result depends ___ the input.', 'on']],
  perfect: [['He ___ never tried this app. (have / has)', 'has'], ['Have you ___ this error before? (see)', 'seen'], ['She has worked here ___ March. (since / for)', 'since'], ['We ___ the guide last week. (read / have read)', 'read']],
  conditionals: [['If the app ___, I will report it. (crash)', 'crashes'], ['If you press this button, the window ___. (close; общее правило)', 'closes'], ['If I have time, I ___ read the article.', 'will'], ['I will wait ___ you tell me to leave. (если не)', 'unless']],
  passive: [['The notes ___ saved automatically. (am / is / are)', 'are'], ['The message ___ deleted last night. (is / was)', 'was'], ['The file will ___ checked tomorrow.', 'be'], ['The invitation was ___ by email. (send)', 'sent']],
  relative: [['The colleague ___ wrote the guide is here. (who / which)', 'who'], ['The article ___ I read was useful. (which / who)', 'which'], ['A developer ___ app I use answered my question.', 'whose'], ['The advice ___ you gave me was helpful. (that / whose)', 'that']],
  gerund: [['She enjoys ___ new places. (visit)', 'visiting'], ['They decided ___ stay. (to / for)', 'to'], ['Avoid ___ private details. (share)', 'sharing'], ['Thanks for ___. (wait)', 'waiting']],
  contrast: [['___ the app is old, it still works. (Although / Despite)', 'Although'], ['___ the delay, we arrived on time. (Although / Despite)', 'Despite'], ['I checked the source ___ the claim seemed strange. (because / despite)', 'because'], ['Despite ___ busy, he replied. (be)', 'being']],
};
