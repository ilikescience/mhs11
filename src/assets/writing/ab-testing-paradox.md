---
title: The Paradox at the Heart of A/B Testing
tags: [marketing, growth]
og:
  title: The Paradox at the Heart of A/B Testing
  description: The fundamental ideas of A/B tests contain a contradiction that calls their value into question.
  image: /images/paradox-ab-testing.jpg
  image_width: 1200
  image_height: 675
date: 2020-01-09
---

![](/images/paradox-ab-testing.jpg)

A/B testing began with beer. 

In 1908, the head brewer at Guinness, William Sealy Gosset, was exploring new ways of running experiments on his production line. Gosset was trying to improve the quality of Guinness’s signature stout but couldn’t afford to run large-scale experiments on all the variables in play. Fortunately, in addition to being a master brewer, Gosset was a statistician; he had a hunch that there was a way of studying data to uncover insights in the small snatches of data he had. By comparing samples and applying new statistical methods, Gosset was able to increase the amount of barley Guinness could produce. The t test, a cornerstone of modern statistical analysis, was born.[^1]

Since its early days as a tool of science (and beer), the t test has gone supernova. Today it is used by every major tech company to make hundreds of thousands of decisions every year. T tests decide everything from the [effectiveness of political ads](https://www.nytimes.com/2014/12/23/upshot/facebook-says-experiments-prove-ads-on-its-site-can-spur-donations.html) [to a link’s particular shade of blue](https://www.theguardian.com/technology/2014/feb/05/why-google-engineers-designers). New methods like Fisher testing, multivariate testing, and multi-armed bandit testing are all descendants of the humble t test. The most popular of these statistical tests is one of the oldest: A/B testing.

An A/B test is a measurement of what happens when you make a single, small, controlled change. In product design, this means changing something in the interface like the color of a button or the placement of a headline. To run an A/B test, show an unchanged version of the interface (“A”) to a randomly-selected group of users. Show a changed version (“B”) to another randomly-selected group. Measure the difference in the behavior of the two groups using a t test, and you can confidently predict how the changed version will perform when shown to all your users.

A/B tests are easy to understand, which explains their popularity in modern software development. But their simplicity is deceptive. The fundamental ideas of A/B tests contain a paradox that calls their value into question.


## Fredkin’s paradox

In _The Society Of Mind_, Marvin Minsky explored a phenomenon that I experience every day as a designer: people often prefer one thing over another, even when they can’t explain their preference.

> We often speak of this with mixtures of defensiveness and pride.<br/>“Art for Art’s sake."<br/>“l find it aesthetically pleasing."<br/>"l just like it."<br/>“There's no accounting for it."<br/>Why do we take refuge in such vague, defiant declarations? ”There's no accounting for it" sounds like a guilty child who's been told to keep accounts. And “I just like it" sounds like a person who is hiding reasons too unworthy to admit.

Minsky recognized that our capriciousness serves a few purposes: We tend to prefer familiar things over unfamiliar. We prefer consistency to avoid distraction. We prefer the convenience of order to the vulnerability of individualism. All of these explanations boil down to one observation, which Minsky attributes to Edward Fredkin:

> **Fredkin's Paradox:** The more equally attractive two alternatives seem, the harder it can be to choose between them—no matter that, to the same degree, the choice can only matter less.

Fredkin’s Paradox is about equally attractive options. Picking between a blue shirt and a black shirt is hard when they both look good on you. Choices can be hard when the options are extremely similar, too — see the previous link to Google’s infamous “50 shades of blue” experiment. The paradox is that you spend the most time deliberating when your choice makes no difference.

## Parkinson’s law of triviality

In 1955, C. Northcote Parkinson wrote a book called _Parkinson’s Law_. It’s a satire of government bureaucracy, written when the British Colonial Office was expanding despite the British Empire itself shrinking. In one chapter, Parkinson describes a fictional 11-person meeting with two agenda items: the plans for a nuclear power plant, and the plans for an employee bike shed.

The power plant is estimated to cost $10,000,000. Due to the technical complexity involved, many experts have weighed in. Only two attendees have a full grasp of the budget’s accuracy. These two struggle to discuss the plans, since none of the other attendees can contribute. After a two-minute discussion, the budget is approved.

The group moves on to the bike shed, estimated to cost $2,350. Everyone in the meeting can understand how the bike shed is built. They debate the material the roof is made of — is aluminum too expensive? — and the need for a bike shed at all — what will the employees want next, a garage? — for forty-five minutes. This budget is also approved.

This allegory illustrates what’s called “Parkinson’s law of triviality”: 

> The time spent on any item of the agenda will be in inverse proportion to the sum [of money] involved.

We can generalize Parkinson’s law: **The effort spent discussing a decision will be inversely proportional to the value of making that decision.**


## Putting it together: when A/B testing is the wrong tool for the job

When faced with two similar alternatives, Fredkin’s paradox predicts you’ll have a hard time choosing. This is when A/B testing is most appealing: A/B tests settle debates with data instead of deliberation. But our generalization of Parkinson’s law of triviality says that this kind of A/B testing — testing as an alternative to difficult decisions — results in the least value.

Most of the time, A/B testing is worthless. The time spent designing, running, analyzing, and taking action on an A/B test will usually outweigh the value of picking the more desirable option.


### Alternatives to A/B testing

Instead of A/B testing, I’ll offer two suggestions. Both are cheaper and more impactful.


#### Alternative 1: observe five users

Tom Landauer and Jakob Nielsen demonstrated in [Why You Only Need to Test with 5 Users](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) that insights about design happen logarithmically — that is, the first five users you study will reveal more than 75% of your usability issues. Doing a simple observation study with five users is an affordable way of understanding not just how to improve your design, but also why those improvements work. That knowledge will inform future decisions where a single A/B test can’t.


#### Alternative 2: A → B testing

The cheapest way to test a small change is to simply make that change and see what happens. Think of it like a really efficient A/B test: instead of showing a small percentage of visitors the variation and waiting patiently for the results to be statistically significant,[^2] you’re showing 100% of visitors the variation and getting the results immediately. 

A → B testing does not have the statistical rigor that A/B testing claims. But when the changes are small, they can be easily reversed or iterated on. A → B testing embraces the uncertainty of design, and opens the door to faster learning.


## When A/B testing is the right tool for the job

A/B testing is worthless most of the time, but there are a few situations where it can be the right tool to use.

1. **When you only have one shot.** Sales, event-based websites and apps, or debuts are not the time to iterate. If you’re working against the clock, an A/B test can allow you to confidently make real-time decisions and resolve usability problems.
2. **When there’s a lot of money on the line.** If Amazon A → B tested the placement of their checkout button, they could lose millions of dollars in a single minute. High-value user behaviors have slim margins of error. They benefit from the risk mitigation that A/B testing provides.


## Conclusion

If there’s a lot on the line in the form of tight timelines or lots of revenue at stake, A/B testing can be useful. When settling a debate over which color of button is better for your email newsletter, leave A/B testing on the shelf. Don’t get caught by the one-two punch of Fredkin’s paradox and Parkinson’s law of triviality — avoid these counterintuitive tendencies by diversifying your testing toolkit.


[^1]: A t test is a statistical method that can be used to show that two sets of data are significantly different. Say you run a small test on your ecommerce website: 1% of users see a green ‘buy now’ button next to each item. You measure two data sets: purchases made by people who see the new button and purchases by people who don’t see the button. Your data shows a slightly higher-than-average purchase rate among people who see the new button. You’d use a t test (probably with Excel or Google Sheets) to determine if the result is a meaningful one with a solid conclusion, or just the result of random fluctuations. [This Khan Academy video](https://www.khanacademy.org/math/ap-statistics/estimating-confidence-ap/one-sample-t-interval-mean/v/introduction-to-t-statistics) is an excellent introduction to t tests.

[^2]: Statistical significance is the hallmark of the t test. It's the value that tells you if your results are likely to be an accurate observation instead of a fluke or anomaly. Statistical significance, despite its scientific name, is subject to bias in the form of something called p-hacking. If you’re interested in learning more about p-hacking, [this paper](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002106) is a great deep dive.
