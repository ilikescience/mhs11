---
title: Hockey sticks don't look like hockey sticks
og:
    title: Hockey sticks don't look like hockey sticks
    description: How exponential growht hides in plain sight
date: 2022-02-26
---

“Hockey stick” growth has long been the elusive goal of Silicon Valley (and Valley-esque) venture-capital-backed startups. It’s so named because the graph of some company metric — users, revenue, retention, orders — starts low and flat, then slowly lifts, then turns steeper and steeper into a near-vertical line representing thunderous growth.

For example, here’s two hockey-stick graphs showing the revenues of Alphabet (Google), and Meta (Facebook).

<figure>
    <div class="l--flex">
        <div class="l--flex-auto">
            <svg viewBox="0 0 900 820">
                <text x="10" y="30" style="font-size: 2em; font-weight: var(--t--weight-bold); fill: var(--c--gray-600);">Alphabet</text>
                <g transform="translate(0 0)">
                <path style="stroke:var(c--gray-100)" d="M90 70h760" />
                <path style="stroke:var(c--gray-100)" d="M90 170h760" />
                <path style="stroke:var(c--gray-100)" d="M90 270h760" />
                <path style="stroke:var(c--gray-100)" d="M90 370h760" />
                <path style="stroke:var(c--gray-100)" d="M90 470h760" />
                <path style="stroke:var(c--gray-100)" d="M90 570h760" />
                <path style="stroke:var(c--gray-100)" d="M90 670h760" />
                <path style="stroke:var(c--gray-100)" d="M90 770h760" />
                </g>
                <g transform="translate(25, 400)">
                    <text text-anchor="middle" transform="rotate(-90)" style="font-size:1.5em; fill: var(--c--gray-500)">Revenue, billions</text>
                </g>
                <g text-anchor="end" transform="translate(30 30)" style="font-size:1.5em; fill: var(--c--gray-500)">
                    <text x="40" y="150">3</text>
                    <text x="40" y="350">2</text>
                    <text x="40" y="550">1</text>
                    <text x="40" y="750">0</text>
                </g>
                <g transform="translate(20 35)" style="font-size:1.5em; fill: var(--c--gray-500)">
                    <text x="50" y="780">Year 1</text>
                    <text x="170" y="780">Year 2</text>
                    <text x="290" y="780">Year 3</text>
                    <text x="410" y="780">Year 4</text>
                    <text x="530" y="780">Year 5</text>
                    <text x="650" y="780">Year 6</text>
                    <text x="770" y="780">Year 7</text>
                </g>
                <g transform="translate(0 20)" style="fill: var(--c--green-500)">
                    <circle cx="110" cy="750" r="10"/>
                    <circle cx="230" cy="750" r="10"/>
                    <circle cx="350" cy="740" r="10"/>
                    <circle cx="470" cy="710" r="10"/>
                    <circle cx="590" cy="660" r="10"/>
                    <circle cx="710" cy="440" r="10"/>
                    <circle cx="830" cy="110" r="10"/>
                </g>
                <path transform="translate(0 20)" fill="transparent" style="stroke: var(--c--green-500)" stroke-width="5" d="M110 750 h120l120-10 120-30 120-50 120-220 120-330" />
            </svg>
        </div>
        <div class="l--flex-auto">
            <svg viewBox="0 0 900 820">
                <text x="10" y="30" style="font-size: 2em; font-weight: var(--t--weight-bold); fill: var(--c--gray-600);">Meta</text>
                <g transform="translate(0 0)">
                    <path style="stroke:var(c--gray-100)" d="M90 70h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 157h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 244h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 331h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 418h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 505h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 592h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 679h760" />
                    <path style="stroke:var(c--gray-100)" d="M90 770h760" />
                </g>
                <g transform="translate(25, 400)">
                    <text text-anchor="middle" transform="rotate(-90)" style="font-size:1.5em; fill: var(--c--gray-500)">Revenue, billions</text>
                </g>
                <g text-anchor="end" transform="translate(30 10)" style="font-size:1.5em; fill: var(--c--gray-500)">
                    <text x="40" y="70">2</text>
                    <text x="40" y="244">1.5</text>
                    <text x="40" y="418">1</text>
                    <text x="40" y="592">0.5</text>
                    <text x="40" y="770">0</text>
                </g>
                <g transform="translate(20 35)" style="font-size:1.5em; fill: var(--c--gray-500)">
                    <text x="50" y="780">Year 1</text>
                    <text x="170" y="780">Year 2</text>
                    <text x="290" y="780">Year 3</text>
                    <text x="410" y="780">Year 4</text>
                    <text x="530" y="780">Year 5</text>
                    <text x="650" y="780">Year 6</text>
                    <text x="770" y="780">Year 7</text>
                </g>
                <g transform="translate(0 20)" style="fill: var(--c--blue-500)">
                    <circle cx="110" cy="750" r="10"/>
                    <circle cx="230" cy="750" r="10"/>
                    <circle cx="350" cy="740" r="10"/>
                    <circle cx="470" cy="710" r="10"/>
                    <circle cx="590" cy="660" r="10"/>
                    <circle cx="710" cy="490" r="10"/>
                    <circle cx="830" cy="110" r="10"/>
                </g>
                <path transform="translate(0 20)" fill="transparent" style="stroke: var(--c--blue-500)" stroke-width="5" d="M110 750 h120l120-10 120-30 120-50 120-170 120-380" />
            </svg>
        </div>
    </div>
    <figcaption>Source: <a href="https://hockeystickprinciples.com/charts/" target="_blank" rel="noopener">https://hockeystickprinciples.com/charts/</a></figcaption>
</figure>

Looking at a hockey-stick graph, it’s not hard to see why it’s so desirable. Once a business hits the handle side of the stick, any investment made on the low end is quickly multiplied to astronomical returns. This is particularly alluring to venture capitalists who see the potential for rocket-ship growth as justification for risky investments in early-stage companies.

But once the hockey-stick dream is dreamt and the big checks get written, the investors start scrutinizing the graphs. “We had lackluster growth last quarter,” they say. “We need to start moving the needle.”

I’ve heard those words from investors. They get passed down to CEOs, to VPs, to middle managers, and to the people on the ground. The push for accelerating growth starts showing up in every planning meeting, every metrics review, every standup and check-in.

“Incremental” becomes a dirty word. Incremental changes — small, continuous ones — won’t win the race. We need hockey-stick changes. Blue-sky thinking. Out-of-the-box innovation. Big swings.

The great irony of this mindset is it almost guarantees that the company will not achieve the hockey-stick growth that it so desires. That’s because the very incremental changes that growth-hungry executives are avoiding are the key to reaching the prize at the end of the graph.

I can’t be too hard on them, though; hockey sticks are deceptive. It’s almost impossible to know you’re on one until you’re already leaving the stratosphere. But with a little knowledge of statistics and some patience, you can learn to foster the right mindset to not ignore the one that may be right under your nose.

## Embrace the incremental

Let’s try an experiment: I’m going to start two savings accounts, accounts A and B. Both accounts start with $100.

At the beginning of every **week**, I’ll deposit $20,000 into account A.

At the beginning of every **day**, I’ll make a deposit to account B equal to 3% of the account’s value (for example, today, the account has $100, so I’ll deposit 3% of $100, or $3.00. Tomorrow, the account will have $103.00 in it, so I'll deposit 3% of $103, or $3.09).

After a year, I’ll give you all the money in one account. Which do you want?

Right off the bat, what’s your intuition of how _different_ the accounts are?

You can probably quickly figure out that account A will have a little over a million dollars in it at the end of the experiment ($20k × 52 weeks = $1,040,100). But I probably wouldn’t be setting up this thought experiment if that was the right choice. So what about account B? Without sitting down to do the math, it’s very hard to even guess how much money it will accrue.

So let’s do the math. Here are the numbers:

<table class="table--responsive">
    <thead> 
        <tr>
            <th></th>
            <th class="t--align-right t--weight-bold">Account A</th>
            <th class="t--align-right t--weight-bold">Account B</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Week 1</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$20,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$122.99</td>
        </tr>
        <tr>
            <th scope="row">Week 2</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$40,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$151.26</td>
        </tr>
        <tr>
            <th scope="row">Week 3</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$60,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$186.03</td>
        </tr>
        <tr>
            <th scope="row">Week 4</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$80,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$228.79</td>
        </tr>
    </tbody>
</table>

After the first month, account A has grown by \\$80,000, while account B has grown by $128.79. You’d be right to suspect that account A was the right choice.

Now, the first four months:[^1]

<table class="table--responsive">
    <thead> 
        <tr>
            <th></th>
            <th class="t--align-right t--weight-bold">Account A</th>
            <th class="t--align-right t--weight-bold">Account B</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Month 1</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$100,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$250.01</td>
        </tr>
        <tr>
            <th scope="row">Month 2</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$180,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$589.16</td>
        </tr>
        <tr>
            <th scope="row">Month 3</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$260,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$1,472.95</td>
        </tr>
        <tr>
            <th scope="row">Month 4</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$340,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$3,575.23</td>
        </tr>
    </tbody>
</table>

Account A is worth over 100× account B. If you picked account B and were checking the balances every day, you’d be crying.

In fact, things look pretty bleak the whole year. But after week 34 — that’d be August 21, if we started the experiment on January 1 — something exciting happens. Here’s that moment, with a little extra data:

<table class="table--responsive l--mar-top-m l--mar-btm-m">
  <colgroup></colgroup>
  <colgroup span="2"></colgroup>
  <colgroup span="2"></colgroup>
  <thead>
    <tr>
      <th class="table--header-empty" rowspan="2"></th>
      <th class="table--group-header t--align-right table--group-start table--group-end t--weight-bold" colspan="2" scope="colgroup">Account A</th>
      <th class="table--group-header t--align-right table--group-start table--group-end t--weight-bold" colspan="2" scope="colgroup">Account B</th>
    </tr>
    <tr>
      <th class="t--align-right table--group-start" scope="col">Total</th>
      <th class="t--align-right table--group-end" scope="col">Weekly change</th>
      <th class="t--align-right table--group-start" scope="col">Total</th>
      <th class="t--align-right table--group-end" scope="col">Weekly Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Week 34</th>
      <td data-label="Account A total " class="t--align-right t--numbers-tabular table--group-start">$680,100.00</td>
      <td data-label="Account A weekly change" class="t--align-right t--numbers-tabular table--group-end">$20,000.00</td>
      <td data-label="Account B total " class="t--align-right t--numbers-tabular table--group-start">$92,341.92</td>
      <td data-label="Account B weekly change" class="t--align-right t--numbers-tabular table--group-end">$17,777.27</td>
    </tr>
     <tr>
      <th scope="row">Week 35</th>
      <td data-label="Account A total " class="t--align-right t--numbers-tabular table--group-start">$700,100.00</td>
      <td data-label="Account A weekly change" class="t--align-right t--numbers-tabular table--group-end">$20,000.00</td>
      <td data-label="Account B total " class="t--align-right t--numbers-tabular table--group-start">$113,568.92</td>
      <td data-label="Account B weekly change" class="t--align-right t--numbers-tabular table--group-end">$21,863.80</td>
    </tr>
     <tr>
      <th scope="row">Week 36</th>
      <td data-label="Account A total " class="t--align-right t--numbers-tabular table--group-start">$720,100.00</td>
      <td data-label="Account A weekly change" class="t--align-right t--numbers-tabular table--group-end">$20,000.00</td>
      <td data-label="Account B total " class="t--align-right t--numbers-tabular table--group-start">$139,675.44</td>
      <td data-label="Account B weekly change" class="t--align-right t--numbers-tabular table--group-end">$26,889.72</td>
    </tr>
  </tbody>
</table>

Account A has over a half a million dollars _more_ than Account B. But in that last column — look! — account B has started to get more money per week than account A. But we’re two thirds of the way through the year, and with a half-million-dollar difference, account A still looks like the clear winner.

But on day 310 (November 7 if we started on January 1), Christmas comes early:

<table class="table--responsive">
    <thead> 
        <tr>
            <th></th>
            <th class="t--align-right t--weight-bold">Account A</th>
            <th class="t--align-right t--weight-bold">Account B</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Day 308</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$880,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$873,027.62</td>
        </tr>
        <tr>
            <th scope="row">Day 309</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$900,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$899,218.45</td>
        </tr>
        <tr>
            <th scope="row">Day 310</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$900,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$926,195.00</td>
        </tr>
    </tbody>
</table>

Account B now has more money and is growing faster than account A.

And there’s one more trick up account B’s sleeve: It continues to grow even faster. When the year comes to an end, the winner is clear:

<table class="table--responsive">
    <thead> 
        <tr>
            <th></th>
            <th class="t--align-right t--weight-bold">Account A</th>
            <th class="t--align-right t--weight-bold">Account B</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Day 365</th>
            <td class="t--align-right t--numbers-tabular" data-label="Account A">$1,060,100.00</td>
            <td class="t--align-right t--numbers-tabular" data-label="Account B">$4,848,272.45</td>
        </tr>
    </tbody>
</table>

In retrospect, it’s a no brainer. But before — and even during — the experiment, it’s fuzzy. Hockey-stick growth is just plain hard to have an intuitive feel for. For example, at 2% growth per day, account B is an awful pick, topping out at $132,392. At 4% growth, account B winds up with more than 100× that, over $152 million. Tiny changes in the initial conditions, repeated many times over, swing the results wildly.

## The second half of the chessboard

There’s another parable that illustrates the surprising nature of hockey-stick growth: the story of the inventor of chess.

The legend goes that soon after chess was invented, it became wildly popular. The ruler of the kingdom (some versions say China, others say India) was a big fan himself and wanted to thank the inventor. The ruler called the inventor to court and told him: “Name your reward.”

The inventor replied: “One grain of wheat on the first square of the chessboard. Two on the second square, four on the third square, doubling each time, for each of the 64 squares.”

The ruler was amazed that such a genius would also be so humble, and immediately granted his request.

Later, the court treasurers delivered bad news: The kingdom would be bankrupt.

While the amount of wheat on the chessboard was minuscule at first, it quickly grew. In the end, the total number of grains over all the squares was 18,446,744,073,709,551,615 — over 1.4 trillion metric tons of wheat.[^2]

In some versions of the story, the inventor pays the ultimate price by losing his head.

On the face of it, this story makes it clear that hockey-stick growth is good for business. But the inventor Ray Kurzweil points out a hidden fact of the story (in Kurzweil’s version, the inventor asks for rice):

> … there is one thing we should note: [the story] was fairly uneventful as the emperor and the inventor went through the first half of the chessboard. After thirty-two squares, the emperor had given the inventor about 4 billion grains of rice. That's a reasonable quantity — about one large field's worth — and the emperor did start to take notice.

> But the emperor could stay an emperor. And the inventor could still retain his head. It was as they headed into the second half of the chessboard that at least one of them got into trouble.[^3]

The “second half of the chessboard” effect shows up in our earlier thought experiment, too — especially when we plot out the results.

<figure>
    <svg viewBox="0 0 900 620">
    <text x="10" y="30" style="font-size: 1.5em; font-weight: var(--t--weight-bold); fill: var(--c--gray-600);"><tspan style="fill: var(--c--yellow-600)">Account A</tspan> vs. <tspan style="fill: var(--c--blue-500)">Account B</tspan>, entire year</text>
        <path style="stroke:var(c--gray-100)" d="M90,70h 760" />
        <path style="stroke:var(c--gray-100)" d="M90,170 h760" />
        <path style="stroke:var(c--gray-100)" d="M90,270 h760" />
        <path style="stroke:var(c--gray-100)" d="M90,370 h760" />
        <path style="stroke:var(c--gray-100)" d="M90,470 h760" />
        <path style="stroke:var(c--gray-100)" d="M90,570 h760" />
        <g text-anchor="end" transform="translate(30 25)" style="font-size:1em; fill: var(--c--gray-500)">
            <text x="40" y="50">$5M</text>
            <text x="40" y="150">$4M</text>
            <text x="40" y="250">$3M</text>
            <text x="40" y="350">$2M</text>
            <text x="40" y="450">$1M</text>
            <text x="40" y="550">$0</text>
        </g>
        <g style="font-size:1em; fill: var(--c--gray-500)">
            <text x="85" y="600">Month 1</text>
            <text x="415" y="600">Month 6</text>
            <text  x="765" y="600">Month 12</text>
        </g>
        <path transform="translate(0 20)" fill="transparent" style="stroke: var(--c--yellow-600)" stroke-width="5" d="M100,550 l740,-105 " />
        <path transform="translate(0 20)" fill="transparent" style="stroke: var(--c--blue-500)" stroke-width="5" d="M100,550 c600,0 700,0 740,-480 " />
    </svg>
</figure>

Looking at the entire year, it’s easy to focus only on the end state. The difference between accounts A and B at the end of the year is clear; the graph’s horizontal lines show that account B is roughly 5× account A.

But what if we look at the graph only halfway through the year? Not only was account B worth less; it _wasn’t even close._

<figure>
    <svg viewBox="0 0 900 420">
    <text x="10" y="30" style="font-size: 1.5em; font-weight: var(--t--weight-bold); fill: var(--c--gray-600);"><tspan style="fill: var(--c--yellow-600)">Account A</tspan> vs. <tspan style="fill: var(--c--blue-500)">Account B</tspan>, first half of the year</text>
        <path style="stroke:var(c--gray-100)" d="M90,70h 760" />
        <path style="stroke:var(c--gray-100)" d="M90,170 h760" />
        <path style="stroke:var(c--gray-100)" d="M90,270 h760" />
        <path style="stroke:var(c--gray-100)" d="M90,370 h760" />
        <g text-anchor="end" transform="translate(30 25)" style="font-size:1em; fill: var(--c--gray-500)">
            <text x="40" y="50">$0.3M</text>
            <text x="40" y="150">$0.2M</text>
            <text x="40" y="250">$0.1M</text>
            <text x="40" y="350">$0.0M</text>
        </g>
        <g style="font-size:1em; fill: var(--c--gray-500)">
            <text x="85" y="400">Month 1</text>
            <text  x="765" y="400">Month 6</text>
        </g>
        <path transform="translate(0 20)" fill="transparent" style="stroke: var(--c--yellow-600)" stroke-width="5" d="M100,350 l740,-305 " />
        <path transform="translate(0 20)" fill="transparent" style="stroke: var(--c--blue-500)" stroke-width="5" d="M100,350 c600,-10 600,-10 740,-20 " />
    </svg>
</figure>

We tend to look at examples of hockey-stick growth through the rearview mirror, when the trend is obvious and growth is booming. But to the people who experienced it, most of the time their charts looked like the one above — mostly flat, with a bit of a lift toward the end.

## Patience, focus, tenacity

I’ve been in many strategic discussions where very smart people talk disparagingly of incremental growth. They want to go straight to the steep end of the hockey stick. What they don’t realize is that the only way to get there is through the shallow end.

The 1997 letter to Amazon shareholders reported the following:

> ... by year-end, we had served more than 1.5 million customers, yielding 838% revenue growth to $147.8 million.

In 1998, that number would grow to $610 million. In 1999, they passed $1 billion in revenue. Their growth rate appeared to be slowing — 838% annually, then 313%, then 169%. The company was highly valued by investors, but was operating at a loss to the tune of $390 million. The leaders of Amazon believed they were on the slow ramp at the beginning of a hockey stick; the investor letter each year would carry a copy of the original 1997 letter. It spelled out the long-term strategy in no uncertain terms:

> We believe that a fundamental measure of our success will be the shareholder value we create over the _long term_.

Through patience, focus, and tenacity, along with a commitment to constant, incremental growth, Amazon succeeded. In 2021, they reported almost $470 billion of revenue, resulting in a profit of $26.2 billion.[^4]

True, sustainable, explosive growth requires patience. It won’t be obvious on charts or graphs, and working with it can be unwieldy and unintuitive. Most times it will appear only in retrospect.

The kind of growth that most businesses want is also the kind of growth that is the easiest to ignore; you have to [learn how to see it](https://matthewstrom.com/writing/learning-how-to-see/).

[^1]: In our thought experiment, a year is composed of 12 equal months of 30.417 days each. Boy, time is weird. 

[^2]: In 2020, the total production of wheat (globally!) was estimated at 772.64 million metric tons, or 0.2% of the inventor’s request.

[^3]: Kurzweil, Ray. _The Age of Spiritual Machines: When Computers Exceed Human Intelligence_. United Kingdom: Penguin Publishing Group, 2000.

[^4]: “Amazon's original 1997 letter to shareholders,” Amazon News, Amazon, March 21, 1997, <https://www.aboutamazon.com/news/company-news/amazons-original-1997-letter-to-shareholders>.