---
title: Intuition vs. data
og:
  title: Intuition vs. data
  description: In a data-driven world, learn when to trust your intuition
  image: /images/intuition-1.jpg?v=1
  image_width: 1200
  image_height: 600
date: 2019-09-16
tags: [design]
---

![](/images/intuition-1.png)

At a time when data is king, product designers should place more trust in their intuition.

Recently I attended Front, a product management conference in Salt Lake City. There, Maggie Crowley, product manager for a company called [Drift](https://www.drift.com/), presented a case study in redesigning a complex feature: the chatbot builder. It helped users build their own interactive chatbots without coding or design. The team had been iterating on the design of the chatbot builder for a while, but thought it could be greatly improved by a substantial overhaul. Here's how she recounts the process of getting buy-in from her stakeholders:

>  We had a feeling we could make our builder better. And you can't really say "I have a feeling." **No one's gonna listen to you.** So like every good product manager, I tried to find some data ... But unfortunately, I didn't see anything. Our metrics looked perfectly fine.

Lacking data, Maggie and her team interviewed users, gathering anecdotes and qualitative insights. They used this research to get the permission needed to redesign the chatbot builder. When they launched, their users were ecstatic. One called the improvements "life-changing."

At the end of the talk, an audience member asked "How did you know your redesign was better?" Maggie's response surprised me:

>  It came down to a feeling. It was just so stupidly obvious that we needed to make that change.

Maggie's story perfectly captures the modern expectation that data drives decision-making. And if Maggie had let that expectation dictate her decision, her team wouldn't have improved the product. The difference between success and the status quo started with a feeling.

I can relate to Maggie: my stakeholders expect data to compel every design decision I make. Even when the decision is "so stupidly obvious," we gather data. But our insistence on data-driven design holds us back. It slows down iterations and limits innovation.

Instead of relying on data to guide our decisions, we should be more willing to follow our gut.


## The data dilemma

Data-driven design is not a new concept. Its origins can be traced back to the late 19th century, with the rise of scientific management. Since Fredrick Taylor first used scientific methods to maximize steelworkers' productivity in 1882, data has been vital to business. 

![](/images/intuition-3.jpg)

In 2014, Walter Frick summed it up in the [Harvard Business Review](https://hbr.org/2014/05/an-introduction-to-data-driven-decisions-for-managers-who-dont-like-math):

> Not a week goes by without us publishing something here at HBR about the value of data in business. Big data, small data, internal, external, experimental, observational — everywhere we look, information is being captured, quantified, and used to make business decisions.

Data brings a feeling of objectivity to decisions. It settles disputes. Data can demystify the past and predict the future. As Wall Street's quantitative analysts know, the right data in the right hands can make fortunes. But the wrong data, even in the right hands, can be disastrous. And with data it's hard to tell right from wrong.

For example: We're in the middle of what scientists call the reproducibility crisis. Psychologists, clinical researchers, economists, and other data-centric academics have discovered that historic standards for proof aren't rigorous enough. Findings that were once seen as conclusive are now regarded with doubt[^1]. While it's unlikely that we'll have to rewrite everything we know about the world, the replicability crisis tells us that even data can lead us to the wrong conclusions.

## The case for intuition

If you design — or code, or write strategy, or make decisions of any kind — you probably have some kind of intuition about the work you do. Depending on how much experience you have, that intuition might just be a tiny whisper in a noisy room. But you should still listen to it.

In his book _Thinking, Fast and Slow_, Daniel Kahneman references Herbert Simon:

> The psychology of accurate intuition involves no magic. Perhaps the best short statement of it is by the great Herbert Simon, who studied chess masters and showed that after thousands of hours of practice they come to see the pieces on the board differently from the rest of us. You can feel Simon’s impatience with the mythologizing of expert intuition when he writes: “The situation has provided a cue; this cue has given the expert access to information stored in memory, and the information provides the answer. Intuition is nothing more and nothing less than recognition.”

Put another way, intuition is a hint that helps us navigate problems based on experience; it's a compass needle wiggling towards the north pole. This kind of effortless thinking is what Kahneman calls “System 1” thinking. System 1 operates "automatically and quickly, with little or no effort and no sense of voluntary control." Even when System 1 is biased (and it often is), it's a useful tool in decision-making.

![](/images/intuition-2.png)

## When to trust your gut

When making a decision, you'll likely have some intuition about the potential outcome. You'll have to decide whether or not to gather data to guide your decision-making. Those are the two possible starting points: either you gather data or you don't. And then there are two outcomes: either you're right or you're wrong.

The four possible scenarios are:

1. Trust your intuition → your decision is wrong
2. Gather data → your decision is wrong
3. Trust your intuition → your decision is right
4. Gather data → your decision is right

There are lots of variables at play, too. Gathering data is an additional step, and comes at some cost (&#8203;c), whether it's in real expense or in the cost of delaying your decision. And while there's a chance your intuition is right (p<sub>i</sub>), it's worth considering the likelihood that your data leads you to the correct decision (p<sub>d</sub>). Finally, the value of the decision (v) is important: it can be almost negligible (what color should our company T-shirts be?) or career-defining (at what price should we set our IPO?).

We can put all these variables into an equation:

<svg class="intuition--equation" viewBox='0 0  188 28' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path id="g" d="M16.3-5.7c.5 0 .9 0 .9-.5s-.4-.5-.9-.5H3c-.4 0-.8 0-.8.5s.4.5.8.5h13.4z"/>
    <path id="j" d="M6.8-10.6c0-.3 0-1-.6-1-.4 0-.7.4-.6.7v.3l.3 3.9L2.7-9l-.4-.2c-.4 0-.7.4-.7.7 0 .4.3.5.5.6l3.5 1.7-3.4 1.7c-.4.2-.6.3-.6.6s.3.7.7.7l.8-.4 2.8-2-.4 4.1c0 .5.5.7.7.7.3 0 .6-.2.6-.7l-.3-4.2 3.1 2.4.5.1c.3 0 .7-.3.7-.7 0-.3-.3-.5-.6-.6L6.7-6.2l3.5-1.6c.4-.2.6-.3.6-.7s-.4-.7-.7-.7l-.9.5-2.7 2 .3-3.9z"/>
    <use id="l" xlink:href="#a"/>
    <use id="e" xlink:href="#b"/>
    <use id="k" xlink:href="#c"/>
    <path id="d" d="M7.6 6C6.4 4.8 3.3 1.7 3.3-6s3-11 4.2-12.2V-18.5C7-18.6 5-16.7 3.7-14a18.7 18.7 0 0 0-1.6 7.8c0 1.8.2 4.8 1.7 8C5 4.4 7 6.2 7.4 6.2c.1 0 .2 0 .2-.2z"/>
    <path id="i" d="M6.5-6.2a20 20 0 0 0-1.6-8 10.4 10.4 0 0 0-3.6-4.4l-.1.2v.1C2.4-17 5.4-13.9 5.4-6.2c0 7.7-3 10.9-4.2 12.1V6l.1.2c.3 0 2.4-1.8 3.6-4.6C6.2-1 6.5-3.8 6.5-6.2z"/>
    <path id="a" d="M8-7.8c-.3 0-.5 0-.8.3-.1 0-.3.4-.3.7 0 .4.3.7.7.7.5 0 1-.4 1-1.3 0-1-1-1.7-2.4-1.7-2.7 0-5.4 3-5.4 5.9C.8-1.4 2 .2 4 .2 7 .2 8.6-2 8.6-2.3c0 0 0-.2-.2-.2l-.2.2A5.3 5.3 0 0 1 4-.3c-1.4 0-1.9-1.1-1.9-2.2 0-.7.4-2.7 1.1-4.1.5-1 1.7-2.1 3-2.1.2 0 1.4 0 1.8 1z"/>
    <path id="h" d="M10.4-13.8v-.3c0-.2-.2-.2-.2-.2H9.1l-1 .1c-.6 0-.7.1-.7.5 0 .2.1.2.4.2 1 0 1 .2 1 .4v.3l-1.3 5C7.3-8.2 6.8-9 5.7-9 3.3-9 .8-6 .8-3 .8-1 2 .3 3.4.3c1.2 0 2.1-.9 2.7-1.6C6.3 0 7.3.2 8 .2S9-.2 9.4-.9l.6-2c0-.2 0-.2-.2-.2s-.2 0-.3.4C9.2-1.5 8.8-.2 8-.2c-.6 0-.7-.5-.7-1l.2-1 2.9-11.6zM6.2-2.5c0 .4 0 .4-.4.8C5.4-1 4.5-.2 3.5-.2c-.9 0-1.3-.8-1.3-2 0-1.1.6-3.4 1-4.3.7-1.5 1.7-2.2 2.5-2.2C7-8.7 7.3-7 7.3-6.8v.3l-1 4z"/>
    <path id="f" d="M5.8-3h-.2c-.1 0-.2 0-.3.4C4.8-.8 4-.2 3.3-.2c-.3 0-.6 0-.6-.7 0-.5.3-1.2.5-1.8l1.4-3.8c.1-.2.3-.6.3-1 0-.8-.7-1.6-1.7-1.6C1.3-9.1.6-6.1.6-6c0 .1 0 .2.2.2S1-5.8 1-6c.6-2 1.4-2.7 2-2.7.2 0 .6 0 .6.7 0 .5-.3 1.2-.4 1.7L1.8-2.5l-.2 1c0 1 .6 1.7 1.6 1.7 1.9 0 2.6-3 2.6-3.2zm-.1-9.9c0-.3-.3-.7-.7-.7-.5 0-1 .5-1 1s.4.7.6.7c.6 0 1-.5 1-1z"/>
    <path id="b" d="M.9 2.6c-.2.6-.2.8-1 .8-.3 0-.5 0-.5.4 0 0 0 .2.2.2h3.6c.2 0 .4 0 .4-.4 0-.2-.1-.2-.5-.2-1 0-1-.1-1-.3 0-.2 1-3.8 1-4.3.3.6.8 1.4 2 1.4 2.3 0 4.8-3 4.8-6 0-2-1.1-3.3-2.6-3.3-1.4 0-2.5 1.3-2.7 1.6-.2-1-1-1.6-1.8-1.6-.6 0-1 .3-1.5 1L.7-6c0 .1 0 .2.2.2s.2 0 .3-.5c.3-1.2.7-2.4 1.5-2.4.5 0 .7.3.7 1 0 .4 0 .7-.2 1L1 2.6zm3.6-9c.1-.6.7-1.2 1-1.5.2-.2 1-.8 1.7-.8 1 0 1.3 1 1.3 2s-.5 3.3-1 4.4C6.8-1.2 6-.3 5-.3 3.6-.2 3.4-2 3.4-2v-.3l1-4z"/>
    <path id="c" d="M9.4-7.7c0-1.3-.6-1.4-.8-1.4-.5 0-1 .5-1 .9 0 .2.2.4.3.5.2.2.7.7.7 1.8C8.6-5 7.4-.2 5-.2c-1.2 0-1.5-1-1.5-1.8 0-1 .5-2.5 1-4 .4-.8.5-1 .5-1.5 0-.8-.7-1.6-1.7-1.6-2 0-2.7 3-2.7 3.1 0 .1 0 .2.2.2S1-5.8 1-6c.6-2 1.4-2.7 2-2.7.2 0 .6 0 .6.7a6 6 0 0 1-.5 1.9c-1 2.6-1 3.3-1 3.8 0 .4 0 1.3.7 1.9.7.6 1.7.6 2 .6 3.4 0 4.5-6.8 4.5-8z"/>
  </defs>
  <g fill="currentColor" transform="matrix(1.13 0 0 1.13 -64 -61.1)">
    <use x="56.4" y="72.4" xlink:href="#d"/>
    <use x="65.2" y="72.4" xlink:href="#e"/>
    <use x="77.3" y="77.4" xlink:href="#f"/>
    <use x="90.2" y="72.4" xlink:href="#g"/>
    <use x="114.9" y="72.4" xlink:href="#e"/>
    <use x="127.1" y="78.2" xlink:href="#h"/>
    <use x="138.1" y="72.4" xlink:href="#i"/>
    <use x="152.3" y="72.4" xlink:href="#j"/>
    <use x="170.2" y="72.4" xlink:href="#k"/>
    <use x="188.3" y="72.4" xlink:href="#g"/>
    <use x="213" y="72.4" xlink:href="#l"/>
  </g>
</svg>

If the result of this equation is a **positive number**, follow your intuition. If the result is a **negative number**, gather data before deciding. Use the calculator below to experiment with different variables to see how they impact the value of intuition.

<script src="/js/intuition.js"></script>
<div class="intuition--container">
<div class="intuition--results l--space-flush">
    <div class="intuition--label">Value of intuition</div>
    <div class="intuition--value t--size-xxl">100.00</div>
</div>
<div class="intuition--slider l--space-flush">
    <div class="intuition--header">Likelihood that your intuition is correct (p<sub>i</sub>)</div>
    <input class="intuition--slider" type="range" value="0.5" min="0" max="1" step="0.01" id="intuition">
    <div class="intuition--labels">
        <div class="intuition--label">0%</div>
        <div class="intuition--label">50%</div>
        <div class="intuition--label">100%</div>
    </div>
</div>
<div class="intuition--slider l--space-flush">
    <div class="intuition--header">Likelihood that the data is correct (p<sub>d</sub>)</div>
    <input class="intuition--slider" type="range" value="0.5" min="0" max="1" step="0.01" id="data">
    <div class="intuition--labels">
        <div class="intuition--label">0%</div>
        <div class="intuition--label">50%</div>
        <div class="intuition--label">100%</div>
    </div>
</div>
<div class="intuition--slider l--space-flush">
    <div class="intuition--header">Value of being correct (v)</div>
    <input class="intuition--slider" type="range" value="2" min="0" max="4" id="correct">
    <div class="intuition--labels intuition--rotated">
        <div class="intuition--label">$1</div>
        <div class="intuition--label">$10</div>
        <div class="intuition--label">$100</div>
        <div class="intuition--label">$1,000</div>
        <div class="intuition--label">$10,000</div>
    </div>
</div>
<div class="slider l--space-flush">
    <div class="intuition--header">Cost of gathering data (c)</div>
    <input class="intuition--slider" type="range" value="2" min="0" max="4" id="cost">
    <div class="intuition--labels intuition--rotated">
        <div class="intuition--label"><span>$1</span></div>
        <div class="intuition--label"><span>$10</span></div>
        <div class="intuition--label"><span>$100</span></div>
        <div class="intuition--label"><span>$1,000</span></div>
        <div class="intuition--label"><span>$10,000</span></div>
    </div>
</div>
</div>

Of course, you can't know the exact chance that your intuition is right, or how likely the data is to be right. But just by estimating the difference — that is, how much more confidence you gain by gathering data — you can get a good sense of whether you should go with your gut.

## A real-world application

Let's revisit Maggie's decision to redesign Drift's chatbot builder. The cost of gathering data was high since the team would be starting from scratch. The change was "stupidly obvious," meaning there was a very small difference between an intuition-based approach and a data-based one. The value of the decision was substantial: a successful redesign would mean a real increase in engagement. Here's what that looks like:

- Very small difference in likelihood of being correct between intuition and data (p<sub>i</sub> ≈ p<sub>d</sub>)
- High decision value
- High cost of gathering data

Because the large positive cost of gathering data outweighs the small product of the first two terms, Maggie was right to go with her gut.

So when should you trust your intuition?

- When gathering data won't greatly increase your odds of being right, and
- When your decision doesn't high stakes, and
- When the cost of gathering data is high.

It can be hard to know when these conditions are present. But when you can identify them, trust your intuition.

[^1]: <https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002106>