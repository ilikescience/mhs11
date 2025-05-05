---
title: The micromanager's dilemma
date: 2022-12-13
og:
    title: The micromanager's dilemma
    description: Why micromanagement isn't going away, and how to thrive despite it
---

Here’s a riddle: Nobody I’ve ever worked with likes micromanagement. Yet, on every team I’ve been on, there is at least one micromanager. How is this possible?

_Harvard Business Review_ says, “[Micromanage at Your Peril.](https://hbr.org/2008/02/micromanage-at-your-peril.html)” _Forbes_ says “[Micromanaging is one of the most damaging habits an executive can have](https://www.forbes.com/sites/forbescoachescouncil/2017/05/19/micromanaging-heres-how-and-why-you-should-stop/?sh=5d9b4d4c7518).” _Inc._ says “[Micromanagement is a major source of inefficiency and frustration in most work environments](https://www.inc.com/kevin-daum/5-ways-to-successfully-deal-with-a-micromanager.html).”

If micromanagement is so bad, why does it persist? At a time where companies monitor and quantify every aspect of employees’ productivity, how can such a harmful practice survive?

Business journals and management books tend to focus exclusively on the psychological and interpersonal causes of micromanagement: anxiety, performance pressure, politics, and misaligned incentives combine to bring out the worst in managers. The experts say that with the right training, micromanagement can be avoided.

But this doesn’t solve the riddle. The story falls short of explaining why micromanagement is so pervasive, even (especially!) at today’s top-performing companies.

So I want to take a different path. In this essay, I’ll show you that micromanagement isn’t just a nagging habit; it’s an inevitability. That’s the paradox: micromanagement is both bad management practice _and_ a key component of the best management strategies. So in addition to explaining this paradox, I’ll offer some lessons from similar paradoxical problems. In the end, I want to demonstrate that, with the right approach to micromanagement, managers and their reports can thrive.

## What is micromanagement?

First, it’s important to clear up some confusion and misconceptions about micromanagement.

In _My Way or the Highway: The Micromanagement Survival Guide,_ Harry Chambers shares a survey of 261 workers on management styles. 79% said they had experienced micromanagement from their current or past managers. 72% said that micromanagement had interfered with their job performance. 65% said that they had considered changing jobs because of micromanagement.[^1]

But how do you define micromanagement? The name itself is misleading: “micro” implies an attention to small-scale details, and “detail-oriented” is a very common phrase that shows up on job requirements and positive performance reviews. If attention to detail was all that defined micromanagement, I don’t think it would be so universally reviled.

Instead, a micromanager is best defined as **a manager who is highly involved in the work of their subordinates.** This can manifest as controlling behavior, insisting on making decisions or producing work on behalf of other people — “if you want it done right, you have to do it yourself.” It can also look like omnipresence, a manager who expects to be included in every meeting, on every email, and in every Slack channel.

It also might help to describe what micromanagement is not. It isn’t manipulative. Machiavellian behavior like backstabbing, gaslighting, politicking, and prejudice is definitely bad management, but these behaviors aren’t necessarily concomitant with micromanagement.

Most micromanagers have good intentions. They might not identify their behavior as micromanagement at all; if they can see the negative impact of their actions, they may consider it a necessary sacrifice for a greater good.

## The psychology of micromanagement

Management requires weighing tradeoffs: trading cost for speed, trading short-term benefits for long-term debts, trading concrete capital for intangible quality. A good manager can maintain the balances between employee engagement, hiring and retention, productivity, innovation, and profitability.

Micromanagement is just one of many possible tactics that a manager might utilize in pursuit of the right balance. We can think of these strategies in the context of a game between two players: on one side, the manager, and on the other, their report. At stake is the value that their work creates, in both company profit and personal fulfillment.

It might seem reductive to compare management to a game, but this thought exercise is at the center of one of the most practical innovations in pure mathematics in the last century: game theory. Game theorists see human behavior through the lens of abstract mathematical reductions — “games.” The search for winning strategies to these games has led economists and politicians to breakthroughs in diplomacy and policy; role-playing moves and counter-moves was at the heart of the Cuban Missile Crisis in 1962.[^2]

Game theory has been used to analyze and optimize nearly every aspect of business. But while entire books, conferences, and even business school departments are dedicated to the application of game theory to corporate strategy, there are very few examples of how game theory can improve the relationship between a manager and their reports.

Game theory is the key to understanding the paradox of micromanagement and seeing the pathway to winning management strategies.

## The Prisoner’s Dilemma

If you’ve ever studied game theory, you know about the Prisoner's Dilemma. If you haven’t, or if you’re a bit rusty, here’s a recap, as described by William Poundstone in his 1993 book _Prisoner's Dilemma_:

> Two members of a criminal gang are arrested and imprisoned. Each prisoner is in solitary confinement with no means of speaking to or exchanging messages with the other. The police admit they don't have enough evidence to convict the pair on the principal charge. They plan to sentence both to a year in prison on a lesser charge. Simultaneously, the police offer each prisoner a Faustian bargain.[^3]

The prisoners (call them A and B) choose either to blame their partner for the crime or stay silent. They have to make their decision without consulting each other.

Depending on their decisions, the possible outcomes are:

-   If A and B blame each other, both will be sentenced to two years in prison
-   If A points the finger but B stays silent, A will be set free and B will serve three years in prison
-   If A stays silent but B casts the blame, A will serve three years and B will be set free
-   If A and B both stay silent, each will serve one year

Here are those options laid out in a table game theorists call a “payoff matrix.” In each cell, the outcome is listed as “A’s score, B’s score”.

<figure>
<table class="table--layout-fixed">
    <tr>
        <td></td>
        <td></td>
        <th colspan="2" class="t--align-center"><strong>B’s strategy</strong></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <th class="t--align-center c--bg-gray-25 l--border-right-width-s l--border-right-style-solid c--border-right-gray-50">Stay silent</th>
        <th class="t--align-center c--bg-gray-25">Blame A</th>
    </tr>
    <tr>
        <th rowspan="2" class="t--align-right"><strong>A’s strategy</strong></th>
        <th class="t--align-center c--bg-gray-25 l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-50">Stay silent</th>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">-1, -1</td>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">-3, 0</td>
    </tr>
    <tr>
        <th class="t--align-center c--bg-gray-25">Blame B</th>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">0, -3</td>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">-2, -2</td>
    </tr>
</table>
<figcaption>
Payout matrix for the Prisoner’s Dilemma. Scores are negative to follow the convention that a higher score (i.e., fewer years of prison) is better.
</figcaption>
</figure>

What’s the winning play?[^4]

The Prisoner’s Dilemma is so commonly taught because it’s one of the simplest examples of a “non-zero-sum” game. In a non-zero-sum game, the total payoff depends on the strategies the players choose. In the Prisoner’s Dilemma, for example, if both players cooperate, a total of two years of prison are doled out. If one player defects, three years result; when both defect, four.

Compare that to a zero-sum game like chess: In a chess tournament, a win is worth one point, a loss is worth zero, and a tie is worth half a point. Your loss is your opponent’s gain, and winning the most games always results in winning the tournament. No matter what opening, middle game, or endgame you play, the total points awarded in the tournament are the same. In zero-sum games, one side’s loss is another side’s gain.

In non-zero-sum games, both sides can lose — or win. For example, towards the end of the Cold War, the USSR and the US shifted their thinking from zero-sum to non-zero sum. Before, having fewer nuclear weapons meant losing, so both sides spent decades building up their arsenal, rattling sabers in a deadly game of chicken. But during the Nixon administration, the USSR and the US agreed to the policy of detente — dismantling their warheads at an equal rate, “losing” the game simultaneously. Without the threat of mutually assured destruction, both sides could afford to focus their resources on domestic economic and social issues.

Studying non-zero-sum games, researchers have made surprising conclusions about the nature of friendship, culture, evolution, and ecosystems. Counter to centuries of theories of evolution and “survival of the fittest,” it seems that nature rewards cooperation.

## Why Cooperation Works

In 1980, Robert Axelrod, a political scientist, was studying the Prisoner’s Dilemma. Axelrod’s review of the existing research left him feeling unsatisfied: most researchers had only studied a few games at a time, denying players the chance to develop sophisticated tactics. So he decided to run a tournament, inviting academics who were experts in game theory (thus well-versed in the mechanics of the Prisoner’s Dilemma).

For his tournament, Axelrod decided to use a variant of the Prisoner’s Dilemma called the _Iterated_ Prisoner’s Dilemma. In the iterated version, players compete in back-to-back rounds of the game. At the beginning of each round, each player chooses a strategy (stay silent or blame their partner); then, the outcome (including the strategies each player chose) is revealed, and the next round begins. At the end of a predetermined number of rounds, the players’ scores from each round are summed to a final result.

Fifteen people ended up answering the call. Participants wrote their strategies as computer programs, allowing for an unprecedented competition: each pair of strategies would duel an even 1,000 times over five consecutive round-robin rotations. The player with the most points at the end of the tournament won.

Axelrod set the payoffs as follows. Following a game theory convention, staying silent is called “cooperating” (since mutual silence results in the best collective outcome), and blaming your opponent is called “defecting” (since blaming a trusting partner can result in a bigger individual payoff):

<figure>
<table class="table--layout-fixed">
    <tr>
        <td></td>
        <td></td>
        <th colspan="2" class="t--align-center"><strong>B’s strategy</strong></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <th class="t--align-center c--bg-gray-25 l--border-right-width-s l--border-right-style-solid c--border-right-gray-50">Stay silent</th>
        <th class="t--align-center c--bg-gray-25">Blame A</th>
    </tr>
    <tr>
        <th rowspan="2" class="t--align-right"><strong>A’s strategy</strong></th>
        <th class="t--align-center c--bg-gray-25 l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-50">Stay silent</th>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">3, 3</td>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">0, 5</td>
    </tr>
    <tr>
        <th class="t--align-center c--bg-gray-25">Blame B</th>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">5, 0</td>
        <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">1, 1</td>
    </tr>
</table>
<figcaption>
Axelrod’s payoff matrix sets the outcomes to be all positive — this just makes the math a bit easier but doesn’t change the nature of the game.
</figcaption>
</figure>

Axelrod’s payoff matrix sets the outcomes to be all positive — this just makes the math a bit easier but doesn’t change the nature of the game.

The programs ran, the dust settled, and a clear victor emerged. It was called “tit for tat.”

Tit for tat was a program written by Professor Anatol Rapoport of the University of Toronto. Here’s the whole of it:

1. In the first round, cooperate
2. In all other rounds, copy what your opponent did in the previous round

That’s it. Tit for tat wasn’t just the best strategy; it was also the simplest program submitted.

And here’s the most confusing thing about tit for tat: in every match it played, it _never_ scored higher than its opponent.

How could it win the overall tournament? Because the Prisoner’s Dilemma is a non-zero-sum game, tit for tat was able to play games that resulted in high scores for _both_ players. As Axelrod put it, “in a non-zero-sum world you do not have to do better than the other player to do well for yourself.”[^5]

It’s important to emphasize that the effectiveness of tit for tat does not come from an altruistic willingness to sacrifice its own gain for the collective good. Axelrod’s tournaments weren’t team sports; each player was out to win for themselves. That’s why cooperation is so counterintuitive. Cooperative strategies may lose in head-to-head matches against more aggressive strategies, but over time, groups who cooperate maximize their own outcomes.[^6]

## An ideal management strategy

At work, our relationships with our bosses and subordinates are like a zero-sum game. Trust is the basis of a healthy partnership, but it’s not a given; misaligned incentives, miscommunication, and ego can result in trust-destroying selfishness. A healthy company culture is a multiplier on the output of a team. A rotten culture can destroy profits and sink a company.

So let’s imagine a version of the Prisoner’s Dilemma for workers and bosses instead of criminals. How do “cooperate” and “defect” map to workplace strategies?

In this game, a defecting boss is a micromanager. They stay close to their subordinates, either doing their work themselves or insisting on onerous reporting and quality assurance. By contrast, a cooperative boss delegates work, trusting reports to follow assignments unsupervised; they believe workers will always adhere to company policy and culture.

Workers defect by being apprehensive of their boss’s leadership. They interpret instructions according to their own beliefs about what’s important, bending policy and process when it’s convenient to their ends. A cooperative worker, on the other hand, follows their manager’s lead unquestioningly. They do what’s delegated to them, look to company goals to gain context on decisions, and always use established processes.

A micromanaging (defecting) boss and a questioning (defecting) worker will struggle to be productive. A micromanager may lead a cooperative worker to productivity, but at the cost of their own time and effort. On the other hand, a trusting (cooperative) boss may enable a strong-willed (defecting) worker, but they might not be pulling in the same direction as the rest of the team. The cooperative boss and employee have the most to gain, using less of their personal energy to work toward the company’s goals.

Just like in the Prisoner’s Dilemma, we can analyze this game to develop an optimal strategy. In _The Evolution of Cooperation,_ Robert Axelrod analyzes all the strategies that competed in his tournament and identifies the following qualities of the top performers:

1. Nice — a nice strategy is never the first one to defect
2. Forgiving — a forgiving strategy will “forget” about its opponents’ defections quickly
3. Clear — a clear strategy makes it easy for opponents to know when cooperation is in their best interest

If you described your management style as “nice, forgiving, and clear,” most people would agree that you’re a good boss. But these aspects alone don’t add up to a winning strategy. Imagine a manager who always cooperates, no matter what. The strategy pays off when managing a cooperative worker, but a defecting worker will be able to take advantage of it.

Here are the results of a 100-round tournament between “always cooperate,” “tit for tat,” and “always defect.”

<figure>
    <table class="table--layout-fixed t--size-s">
        <tr>
            <td></td>
            <td></td>
            <th colspan="3" class="t--align-center"><strong>B’s strategy</strong></th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <th class="t--align-center c--bg-gray-25 l--border-right-width-s l--border-right-style-solid c--border-right-gray-50">Always cooperate</th>
            <th class="t--align-center c--bg-gray-25 l--border-right-width-s l--border-right-style-solid c--border-right-gray-50">Tit for tat</th>
            <th class="t--align-center c--bg-gray-25">Always defect</th>
        </tr>
        <tr>
            <th rowspan="3" class="t--align-right"><strong>A’s strategy</strong></th>
            <th class="t--align-center c--bg-gray-25 l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-50">Always cooperate</th>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">0, 500</td>
        </tr>
        <tr>
            <th class="t--align-center c--bg-gray-25 l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-50">Always Tit for tat</th>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">99, 104</td>
        </tr>
        <tr>
            <th class="t--align-center c--bg-gray-25">Always defect</th>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">500, 0</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">104, 99</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">100, 100</td>
        </tr>
    </table>
</figure>


Despite being nice, forgiving, and clear, “always cooperate” never does better than tit for tat. Against always-defectors, always cooperating is substantially worse. To account for this, Axelrod added a fourth quality to his formula:

4. Retaliatory — a retaliatory strategy responds to defection with defection

This means that, for a manager, micromanagement (defection) _has_ to be a part of a strategy in order for it to be successful. A successful manager uses the threat of defection, combined with a clear preference for cooperation, to encourage their reports to cooperate in kind.

In the management game, being willing to micromanage — and demonstrating that willingness in response to uncooperative actions — is a necessary evil.

## Why micromanagers persist

So, hopefully, I’ve convinced you that micromanagement is a real possibility in even the healthiest and most cooperative manager–report relationship. And in those ideal relationships, a manager using a tit-for-tat strategy with like-minded employees never has to actually micromanage. Unfortunately, most workplace relationships aren't ideal.

That’s because the optimal strategy is so counterintuitive: tit for tat looks worse when compared to other strategies. Here are a few strategies that beat tit for tat in head-to-head comparisons:

**Grim**: **Cooperate until your opponent defects. Then, in every turn afterwards, defect.** This strategy is appealing because it satisfies most of Axelrod’s criteria (it’s nice, retaliatory, and clear). And in my experience, it’s the most common manifestation of a micromanaging boss: they start off cooperative but become jaded after a single incident in which their report fails to meet their expectations.

**Bully**: **Defect until your opponent cooperates. Then, cooperate as long as your opponent does.** This is another appealing strategy — it’s retaliatory, forgiving, and clear. But it’s not nice (it doesn’t start off by cooperating). Because the bully starts off by defecting, the rewards for cooperation are always promised in the _next_ round. Many strategies never manage to fully cooperate with a bully. It’s another common micromanager persona: the boss that says, “You need to earn my trust,” but is unable to solicit the trust of their reports.

**Prober**: **Cooperate as long as your opponent cooperates. Occasionally, defect to see what your opponent does**. Again, prober meets three out of four criteria: nice, retaliatory, and forgiving. But it’s not clear. This type of micromanagement is sneaky; at first, a boss looks like they’re setting their employees up for success. But then they throw out a challenge, like asking the team to 10x their quarterly goals or hit an impossible deadline. And when the team inevitably fails to meet the challenge, they switch to micromanagement mode, believing that they have an uncooperative group on their hands.

I’ve worked with all three kinds of micromanagers.

Here’s the outcomes of 100 games with Axelrod’s payoff matrix:[^7]

<figure>
    <table class="table--layout-fixed t--size-s">
        <tr>
            <td></td>
            <td></td>
            <th colspan="4" class="t--align-center"><strong>B’s strategy</strong></th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <th class="t--align-center c--bg-gray-25 l--border-right-width-s l--border-right-style-solid c--border-right-gray-50">Grim</td>
            <th class="t--align-center c--bg-gray-25 l--border-right-width-s l--border-right-style-solid c--border-right-gray-50">Bully</td>
            <th class="t--align-center c--bg-gray-25 l--border-right-width-s l--border-right-style-solid c--border-right-gray-50">Prober</td>
            <th class="t--align-center c--bg-gray-25">Tit for tat</td>
        </tr>
        <tr>
            <th rowspan="4" class="t--align-right"><strong>A’s strategy</strong></th>
            <th class="t--align-center c--bg-gray-25 l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-50">Grim</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">103, 103</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">107, 112</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
        </tr>
        <tr>
            <th class="t--align-center c--bg-gray-25 l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-50">Bully</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">103, 103</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">100, 100</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">250, 250</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">250, 250</td>
        </tr>
        <tr>
            <th class="t--align-center c--bg-gray-25 l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-50">Prober</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">112, 107</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">250, 250</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">108, 108</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">112, 107</td>
        </tr>
        <tr>
            <th class="t--align-center c--bg-gray-25">Tit for Tat</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">250, 250</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">107, 112</td>
            <td class="t--align-center l--border-width-s l--border-style-solid c--border-gray-50">300, 300</td>
        </tr>
    </table>
</figure>


You can see that the grim, bully, and prober all manage to tie or beat tit for tat. But because tit for tat is nice, retaliatory, forgiving, and clear, it coaxes the most cooperation from each of its opponents. In two cases, it never has to defect at all.

It follows that a manager who only sees their own actions and reactions may assume that their suboptimal strategy is, in fact, working. Prober “beats” nice strategies like grim and tit for tat in head-to-head matchups; overall, however, it comes in last place.

## How to play the long game

In non-zero-sum games, cooperation may look like a sucker’s choice. But over time, players who figure out how to cooperate — without being taken advantage of — come out on top.

Managers should study games like the Prisoner’s Dilemma to craft their own approach to cooperation. Putting David Axelrod’s research to use, here are four characteristics of a winning management strategy:

1. **Be nice.** Show vulnerability and trust right out of the gate. Delegate and give your reports opportunities even if they haven’t “earned” your trust.
2. **Respond to issues immediately**. If your report needs more oversight to get their work done, more coaching to advance their skillset, or needs to be put on an improvement plan, take the appropriate action right away.
3. **Forgive and forget**. As soon as things are back on the right track, go back to a pattern of trust and cooperation.
4. **Be clear**. Give your reports an exact roadmap to how you work, and stick to it. If your team knows that you’ll do all the above, they’ll know that cooperation is the way to get the most out of your relationship.

With these rules in mind, there may be times that micromanagement is unavoidable. Otherwise, always-defectors would be rewarded for their stubbornness. But as part of a balanced strategy, micromanagement can be kept to an absolute minimum. That way, everyone — bosses and workers alike — can benefit from the outsized rewards of cooperation.

[^1]: Chambers, Harry E. _My Way or the Highway: The Micromanagement Survival Guide_. ReadHowYouWant, 2009.
[^2]: Brams, Steven J. Theory of Moves. Cambridge University Press, 1994.
[^3]: Poundstone, William. _Prisoner’s Dilemma_. 1st ed. New York: Doubleday, 1992.
[^4]:
    A quick analysis shows that it almost always pays to defect.
    Let’s say you defect. In that case, if your partner cooperates, it’s the best case scenario: no prison time at all. Even if your partner defects, you only spend two years in prison. On the other hand, If you choose to cooperate, the best you can do is one year of prison for mutual cooperation, and the worst is three years for getting fleeced. Knowing that your partner is doing the same calculations, it seems inevitable that they’ll defect. So you have no choice but to defect, too — two years in prison for mutual defection is better than the three you’ll get if you try to cooperate with a defector.
    This roundabout reasoning is what makes the game so interesting. A complex argument weaves the two players’ decisions into a bind that almost always results in mutual defection. Curiously, when people really play this game, the most logical strategy isn’t the most popular one: In real-world trials, players tend to cooperate with their partner more often than not.

[^5]: Axelrod, Robert M. _The Evolution of Cooperation_. New York: Basic Books, 1984.
[^6]: Tit for tat is not the only collectively stable strategy. In fact, always defect is collectively stable, too! Imagine a group of always-defectors. Their games all end in ties, just like the group of tit-for-tatters, albeit with the lowest collective outcome instead of the highest. Now, in comes a tit-for-tatter: as we saw before, it scores fewer points than the always-defector, since it always loses the first round of the match. The tit-for-tatter will never score higher than the collective of always-defectors.
[^7]: In this case, prober defects once after it has cooperated four times in a row.
