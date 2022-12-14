---
title: How to pick the least wrong colors
subtitle: An algorithm for creating color palettes for data visualization
og:
    title: How to pick the least wrong colors
    subtitle: An algorithm for creating color palettes for data visualization
    description: An algorithm for creating color palettes for data visualization
date: 2022-05-31
---

I’m a self-taught designer.[^1] This has its upsides: I learn at my own pace (in my case, slowly over decades and counting), I design my own curriculum, and I don’t have to do any homework or pass any tests. But it also has a serious downside: because I don’t have to learn anything, I skip the things that intimidate me. That’s why, for years and years, I’ve avoided learning much of anything about color.

But recently I picked up a pet project that forced me to fill in the gaps in my own knowledge. In the course of trying to solve a seemingly simple problem, I got a crash course in the fundamentals of color. It was (sorry, I have to get this out of my system) eye-opening.

I thought it might be worthwhile to recap my journey so far, not just to share an interesting result to a common challenge in data visualization, but also to help any other learners who have been shy about color.

[toc]

## The problem

Stripe’s dashboards use graphs to visualize data. While the color palettes we use are certainly passable, the team is always trying to improve them. A colleague was working on creating updated color palettes, and we discussed the challenges he was working through. The problem boiled down to this: **how do I pick nice-looking colors that cover a broad set of use cases for categorical data while meeting accessibility goals?**

![An example of Stripe's dashboard graphs showing categorical data](/images/annealing-1.jpg)

The domain of this problem is categorical data — data that can be compared by grouping it into two or more sets. In Stripe’s case, we’re often comparing payments from different sources, comparing the volume of payments between multiple time periods, or breaking down revenue by product.

The criteria for success are threefold:

1. **The colors should look nice.** In my case, they need to be similar to Stripe’s brand colors.
2. **The colors should cover a broad set of use cases.** In short, I need lots of colors in case I have lots of categories.
3. **The colors should meet accessibility goals.** WCAG 2.2 dictates that non-text elements like chart bars or lines should have a color contrast ratio of at least 3:1 with adjacent colors.

Put this way, the problem doesn’t seem so daunting. Surely, I thought, a smart person has already solved these problems.

### Prior art

There are, in fact, many ways to pick good colors for data visualizations. For example:

- [Viridis](http://bids.github.io/colormap/) is a sequential palette designed by Stéfan van der Walt and Nathaniel Smith.
- [ColorBrewer](https://colorbrewer2.org/) is a tool and set of color palettes created by Cynthia Brewer.
- [Colorgorical](http://vrl.cs.brown.edu/color) is a tool for selecting visually distinct colors created by Connor Gramazio with advisement from David Laidlaw and Karen Schloss.
- Companies like [Adobe](https://spectrum.adobe.com/page/color-for-data-visualization) and [IBM](https://carbondesignsystem.com/data-visualization/color-palettes/) have documented the color palettes they use in their design systems for data visualization.

### Why none of these solutions work for me

While most of the above palettes would serve as a good starting point, each has tradeoffs as an out-of-the-box solution. Using the ColorBrewer schemes sacrifices accessibility and applicability; using any of them fails to get to the harmony I want with Stripe’s brand colors.

There are many, many other approaches and palettes to try. As I looked through the research and material, I had a sinking feeling that I’d need to settle for something that wasn’t optimal.

That conclusion turned out to be a breakthrough.

## Optimizing

One night, I was watching a YouTube video called “[Algorithmic Redistricting: Elections made-to-order](https://www.youtube.com/watch?v=Lq-Y7crQo44).” My YouTube recommendation algorithm is very weird and finds things like this for me; I am also very weird and like watching other people program algorithms.

In the video, Brian Haidet describes a process he used to draw different election maps. The algorithm could draw unfair maps that looked normal because Haidet used something called simulated annealing.

The name stuck in my head because it sounded cool. Googling it later, I realized simulated annealing might help me find a color palette because it works well on problems with the following qualities:

- **Lots of possible solutions.** I mean LOTS. One of the reasons why picking a set of colors is hard is because there are so many possible colors: a typical computer monitor in 2022 can display 16,777,216 distinct colors. That means a color palette of just three colors has 4.7 sextillion possibilities.[^2]
- **Multiple competing success criteria.** Just as Haidet's maps had to be both unfair and normal-looking, my ideal color palettes had to be Stripe-y, accessible, and broadly applicable.
- **Room for error.** I’m not designing a space suit; if my palette isn’t perfect, nobody is going to die.

Simulated annealing is a very complex algorithm that I will now try to explain to the best of my (admittedly limited) abilities.

### How simulated annealing works

Simulated annealing is named after a process called annealing. Annealing involves getting a piece of metal white-hot, then carefully cooling it down. Metalsmiths use annealing to strengthen metals.

Here’s how it works:

![](/images/annealing-2.png)

1. Annealing starts with a weak piece of metal. In such a piece, the metal’s atoms are spread unevenly: Some atoms are close enough to share magnetic bonds, but others are too far apart to bond. The gaps that are left lead to microscopic deformities and cracks, weakening the metal.
2. When the weak metal is heated, the energy of heat breaks the bonds between atoms, and the atoms start to move around at random. Without the magnetic bonds between atoms, the metal is even weaker than before, making it easy to bend and reshape if needed; when the metal is glowing hot, its atoms are moving freely, spreading out evenly over time.
3. Next, the metal is placed in a special container to slowly cool. As the metal cools, the energy from heat decreases, and gradually, the atoms slow down enough to form magnetic bonds again. Because they’re more evenly spaced now, the atoms are more likely to share magnetic bonds with all their neighbors.
4. When fully cooled, the evenly-spaced atoms have many more bonds than they did before. This means there are far fewer imperfections; the metal is much stronger as a result.[^3]

_Simulated_ annealing is an optimization algorithm that operates on a set of data instead of a piece of metal. It follows a process similar to metallurgical annealing:

1. Simulating annealing starts with data that is in an unoptimized state.
2. The algorithm begins by making a new version of the data, changing elements at random. Changing the data is like adding heat, resulting in random variations of the data. The algorithm scores both the original and the changed data according to desired criteria, then makes a choice: keep the current state or go back to the previous one? Strangely, the algorithm doesn’t always pick the version with the better score. At first, the algorithm is “hot,” meaning it picks between the two options (the current state and the randomly-changed one) with a coin toss. This means the data can become even less optimal in the first stage of the process, just as the glowing-hot metal becomes weaker and more pliable than it was to start.
3. With each new iteration, the algorithm “cools down” a little. Here, temperature is a metaphor for how likely the algorithm is to choose a better-scoring iteration of the data. With each cycle, the algorithm is more and more likely to pick mutations that are more optimized.
4. The algorithm finishes when the data settles into a highly optimized state; random changes will almost always result in a worse-scoring iteration, so the process comes to a halt.

If we have a formula for comparing how optimized two versions of our data are, why don’t we always choose the better-scoring one? This is the key to simulated annealing. Hill-climbing algorithms, ones that _always_ pick iterations with better scores, can quickly get stuck in what are called “local maxima” or “local minima” — states which are surrounded by less optimal neighbors but aren’t as optimal as farther-away options.

<svg viewBox="0 0 1200 260">
  <text x="5" y="50" font-size="24" style="fill: var(--c--theme-gray-3)">More optimal</text>
  <text x="5" y="230" font-size="24" style="fill: var(--c--theme-gray-3)">Less optimal</text>
  <text x="340" y="120" font-size="30" style="fill: var(--c--theme-primary-3)"> Local maximum</text>
  <text x="770" y="60" font-size="30" style="fill: var(--c--theme-positive-3)"> Global maximum</text>
  <path d="M65,65 l-8,8 m8,-8 l8,8 m-8,-8 v140 l-8,-8 m8,8 l8,-8" style="stroke: var(--c--theme-gray-2)" fill="transparent" stroke-width="5px"></path>
  <path fill="transparent" style="stroke: var(--c--theme-gray-3)"  stroke-width="7px" d="M150,220 c154 0 169 -80 271 -80 c79 0 107 71 189 71 c100 0 120 -130 250 -130 c136 0 171 139 293 139"></path>
  <circle cx="420" cy="140" r="10" style="fill: var(--c--theme-primary-3)"></circle>
  <circle cx="860" cy="80" r="10" style="fill: var(--c--theme-positive-3)"></circle>
</svg>

So, by sometimes picking less-optimal iterations, simulated annealing can find good solutions to problems that have complicated sets of criteria, like my problem of picking color palettes.

### Choosing the right evaluation score

In applying simulated annealing to any set of data, the most important ingredient is a way of grading how optimal that data is. In my case, I needed to find a way to score a set of colors according to my desired criteria. Again, those were:

- Nice-looking (i.e., Stripe-y)
- Broadly applicable
- Accessible

For each criteria, I needed to come up with an algorithm-friendly way of numerically scoring a color palette.

#### Nice-looking

The first criteria was one of the most challenging to translate into an algorithmic score. What does it mean for a color to be “nice-looking?” I knew that I wanted the colors to look similar to Stripe’s brand colors because I thought Stripe’s brand colors look nice; but what makes Stripe’s brand colors look nice? I quickly realized that, in the face of hundreds of years of color theory and art history, I was way out of my depth.

And so I hope you’ll forgive me for one small cop-out: instead of figuring out a way to objectively measure how nice-looking a set of colors are, I decided it’d be much easier to start with a set of colors about which a human had already decided (for whatever reason) “these look nice.” The score for how nice-looking a set of colors is would be: “how similar they are to a given subjectively-determined-by-a-human-to-look-nice color palette?.”

Only it turns out that even the question of “how similar are these two colors” is itself a very, very deep rabbit hole. There are decades of research published in hundreds of papers on the dozens of ways to measure the distance between two colors. Fortunately for me, this particular rabbit hole was mostly filled with math.

All systems of color distance rely on the fact that colors can be expressed by numbers. The simplest way to find the distance between two colors is to measure the distance between the numbers that represent the colors. For example, you might be familiar with colors expressed in RGB notation, in which the values of the red, green, and blue components are represented by a number from 0 to 255. When the components are blended together by a set of red, green, and blue LEDs, we see the resulting light as the given color.

In programming languages like CSS, `rgb(255, 255, 255)` is a way to express the color white — the red, green, and blue components each have the value of 255, the maximum for this notation. Pure red is `rgb(255, 0, 0)`. One way to measure the distance between white and red is to add each component’s colors together — for white, 255 + 255 + 255 = 765, and for red, 255 + 0 + 0 = 255 — then subtract the two resulting numbers — 765 - 255 = 510.

For reasons beyond the scope of this essay, this simple measurement of distance doesn’t match the way people perceive colors[^4] — for example, darker colors are easier to tell apart than lighter colors, even if they have the same simple numeric difference in their RGB values. So scientists and artists have developed other ways to measure the difference between two colors, each with its own strengths and weaknesses. Some are better at matching our perception of paint on canvas, others are better at representing the ways colors look on computer monitors.

I spent a lot of time investigating these different color measurement systems. In the end, I settled on the International Commission on Illumination’s (CIE’s) ΔE* measurement.[^5] ΔE* is essentially a mathematical formula that measures the perceptual difference between two colors. Perceptual is the key word: The formula adjusts for some quirks in the way that we see and perceive color. It’s still somewhat subjective, but at least it’s subjective in a way that stands up to experimental scrutiny.

<div class="t--align-center">
$$
{\displaystyle \Delta E_{00}^{*}={\sqrt {\left({\frac {\Delta L'}{k_{L}S_{L}}}\right)^{2}+\left({\frac {\Delta C'}{k_{C}S_{C}}}\right)^{2}+\left({\frac {\Delta H'}{k_{H}S_{H}}}\right)^{2}+R_{T}{\frac {\Delta C'}{k_{C}S_{C}}}{\frac {\Delta H'}{k_{H}S_{H}}}}}}
$$
</div>

The ΔE* measurement between two colors ranges from zero to 100. Zero means “these colors are identical,” and 100 means “these colors are as different as possible.” For my algorithm, I wanted to minimize the ΔE* between my algorithmically selected colors and the nice-looking colors I hand-picked.

#### Broadly applicable

The “broadly applicable” criteria comes up most often when providing a list of colors for designers to pick from.

Colors that are **very different from one another** work in a wider variety of situations than colors that are from a similar family. Combining different hues and shades gives us a larger number of colors to use if we have many categories to visualize.

![](/images/annealing-3.jpg)

Colors that are  **equally different from one another** reduce the chance that someone viewing the chart will see a relationship that doesn’t exist in the data.

![](/images/annealing-4.jpg)

To come up with a way of numerically calculating how applicable a color palette is, my friend ΔE* came in handy. The “very different” criteria can be measured by taking the average distance between all the colors in the set — this should be as high as possible. The “equally different” criteria can be measured by taking the _range_ of the distances between all of the colors — this should be as small as possible.

#### Accessible

WCAG 2.2 dictates that non-text elements like chart bars or lines should have a color contrast ratio of at least 3:1 with adjacent colors.

There are lots of colors that have a 3:1 contrast ratio with 1 other color (like a white or black background). But for something like a stacked bar chart, pie chart, or a multi-line chart, it’s likely that there will be multiple elements adjacent to each other, all with their own color. Finding just three colors with a 3:1 contrast ratio to each other is extremely challenging. Anything beyond three colors is essentially impossible.

It’s important to note that WCAG is only concerned with color contrast, just one of the ways in which colors can be perceived as different. Color contrast measures the relative “brightness” of two colors; the relative brightness of colors depends highly on whether or not you have colorblindness. The way people perceive the amount of contrast between two colors varies greatly depending on the biology of their eyes and brains.

![](/images/annealing-5.jpg)

Fortunately, addressing the WCAG contrast requirement can be done without too much difficulty. Instead of finding colors that have a 3:1 contrast ratio, use a border around the colored chart elements. As long as the chart colors are of a 3:1 contrast ratio with the border color, you’re set.

![](/images/annealing-6.jpg)

For my color palettes, I wanted to go beyond the WCAG contrast requirement and find colors that work well for people with and without color blindness. Fortunately, there is (again) a deep body of published research on mathematical ways to simulate color blindness. Like our ΔE* formula earlier, there is a formula — created by Hans Brettel, Françoise Viénot, and John D. Mollon[^6] — for translating the color a person without color blindness sees into the (approximate) color a person with colorblindness would see.

<div class="t--align-center">
$$
\begin{pmatrix} L_{Q}
\\ M_{Q}
    \\ S_{Q}
  \end{pmatrix}
=
  \begin{bmatrix}
    L_R & L_G & L_B \\
    M_R & M_G & M_B \\
    S_R & S_G & S_B
  \end{bmatrix}
  \begin{pmatrix} R_{Q}
    \\ G_{Q}
    \\ B_{Q}
  \end{pmatrix}
$$
</div>

One bonus to this formula is that it comes with variations for the different types of colorblindness. When evaluating, we can adjust the score for each type of colorblindness, depending on how common or uncommon it is (more on this in a bit).

To determine whether a color palette works well for people with colorblindness, I first translate the colors into their color blindness equivalent using the matrix math above. Then, I measure the average of the distances between the colors using the ΔE* like we did above.

### Putting it all together

At this point, I had an algorithm that could optimize a set of data in a huge solution space, and quantitative measurements of each of the criteria I wanted to evaluate for. The last step was to crunch all the quantitative measurements down into a single number representing how “good” a color palette is.

The calculation that produces this single number is called the “loss function” or “cost function.” The resulting number is the “loss” or “cost” of a set of colors. It’s essentially just a measurement of how optimized the data is; the lower the loss, the better; a loss of zero means that we have the ideal solution.[^7]

In practice, optimizers stop long before they get to zero loss. In most optimization problems, there’s no such thing as the one right answer. There are only lots of wrong answers. Our goal is to find the least wrong one.

To that end, at the very end of my loss function, all the individual criteria scores are added together. Each is given a multiplier, which allows me to dial up or down how important a value is: Multiplying the “nice-looking” score by a higher value means that the optimizing algorithm will tend to pick nice-looking palettes, even if they aren’t as accessible or versatile.

<div class="t--align-center">
$$ 
\begin{align}
loss & = a * nice\newline
       & + b * applicable\newline
       & + c * protanopia\newline
       & + d * deuteranopia\newline
       & + e * tritanopia
\end{align}
$$
</div>

I'm calculating scores for three different types of colorblindness, each with its own multiplier. This means that the overall tradeoffs in the algorithm are in relation to how common each type of colorblindness is.

I plug the loss function into the simulated annealing algorithm and run it. On my 2016 MacBook, the algorithm ran in about three seconds. It’s far from optimized, but not too shabby considering it generates and evaluates around 16,000 color palettes.

</article>
<figure class="l--grid-wide">
<img src="/images/annealing-7.jpg" loading="lazy">
<figcaption>
The result of optimizing randomly-selected colors with simulated annealing
</figcaption>
</figure>
<article class="post l--grid-narrow">

## The result

The colors on the left (`#3ec240`<span class="swatch" style="background: #3ec240"></span>, `#65c590`<span class="swatch" style="background: #65c590"></span>, `#ac2444`<span class="swatch" style="background: #ac2444"></span>, `#b9a263`<span class="swatch" style="background: #b9a263"></span>, and `#ab088d`<span class="swatch" style="background: #ab088d"></span>) are the randomly-chosen starting point of the algorithm. Running them through my loss function results in a score of 217.8.

The colors on the right (`#004ebd`<span class="swatch" style="background: #004ebd"></span>, `#00825d`<span class="swatch" style="background: #00825d"></span>, `#7c0000`<span class="swatch" style="background: #7c0000"></span>, `#fe91fe`<span class="swatch" style="background: #fe91fe"></span>, and `#ff821f`<span class="swatch" style="background: #ff821f"></span>) are the result of the simulated annealing algorithm. The loss function scores this palette a 136.3.

According to the loss function, the optimized palette on the right is about 38% better than the random colors on the left I started with. Visually, that checks out: three of the initial colors are very closely clustered in the green part of the spectrum. If I said “the green portion of the bar,” you’d have a hard time guessing which one I was talking about. The optimized palette, by contrast, has a wide variety of shades and hues — there’s only one green part of each bar.

As for my accessibility criteria, you can visually check the results using a color blindness simulation[^8]:

![A simulation of how a person with protanopia might see the two color palettes](/images/annealing-8.jpg)

In the unoptimized palette, the differences between the greens becomes even harder to perceive. In the optimized palette, most of the colors are distinct. But the algorithm isn’t perfect; the orange and green become much more similar in the protanopia simulation. It’s a good reminder that no tool can replace the important step of testing your choices with real users.

Overall, the algorithm appears to be doing a great job of finding colors that fit the criteria I defined. You can see this in a chart of the loss function over time as the algorithm runs: Initially, when the algorithm is “hot,” the loss function fluctuates up and down; as the algorithm “cools,” more optimal palettes are chosen until the algorithm finds a stable solution and sticks to it.

<figure>
<svg viewBox="0 0 600 300">
  <text x="5" y="30" font-size="24" font-weight="600" style="fill: var(--c--theme-gray-4)">Loss function over time</text>
  <text x="5" y="70" font-size="18" style="fill: var(--c--theme-gray-3)">More optimal</text>
  <text x="5" y="270" font-size="18" style="fill: var(--c--theme-gray-3)">Less optimal</text>
  <text x="130" y="70" font-size="14" style="fill: var(--c--theme-gray-3)">100</text>
  <text x="130" y="136" font-size="14" style="fill: var(--c--theme-gray-3)">150</text>
  <text x="130" y="203" font-size="14" style="fill: var(--c--theme-gray-3)">200</text>
  <text x="130" y="270" font-size="14" style="fill: var(--c--theme-gray-3)">250</text>
  <path d="M160 65 h800" style="stroke: var(--c--theme-gray-2)"></path>
  <path d="M160 131 h800" style="stroke: var(--c--theme-gray-2)"></path>
  <path d="M160 198 h800" style="stroke: var(--c--theme-gray-2)"></path>
  <path d="M160 265 h800" style="stroke: var(--c--theme-gray-2)"></path>
  <g transform="translate(160, 100) ">
    <path d="M1 104v2h1c0-1 0-1 0 0h1c0-1 0-1 0 0l1 4v-6l1 2c0 1 0 1 0 0v-2h1V94h1c0 1 0 1 0 0l1-2v5h2v-2l1-1v-4h1v-1h1v-5h1v-1h1v-5s0-1 0 0h1v-2l1 4v3c0 1 0 1 0 0v-1h1v-1 1h1v1l1 4v-1c0-1 0-1 0 0h1v-1h1v2-3h1v2-1h1v-1h1v-6h1v4h1v-1h1v1h1v-7l1-1h1v7l1 1 1 3v2h1v5h1v-6l1-1v-7h1v-1h1v2h1v1h1v-6h1v-2l1 3v1-1h1v-1 3h1v-2h1v12h1v2-8h1v3l1 1v-2h1v1c0 1 0 1 0 0h1v3h1v1l1 2v8h1v-2h1v-7l1-2v1h1v-4l1-5v5h1v2h1v-6h1v-4l1-1v8l1 1v6h2v10h1v-5l1-2c0-1 0-1 0 0h1v-4l1-4v-9 8l1-6v-2c0-1 0-1 0 0h1v3l1 1v-4h1v-1c0-1 0-1 0 0v4l1 1v2l1 1v9l1-8v9l1 2v-4l1-2c0-1 0-1 0 0v-2l1-1v3h1v2h1v-3h1v-3h1v3c0 1 0 1 0 0v1l1 1v-1l1-1v6h1v1-1h1c0-1 0-1 0 0v-1l1-2v-3l1 2v8l1-1v-6l1 7v-3h1v8l1 3v-6h1v3h1v-4l1-2v-9l1-1v1h1v-1l1-2v-3 10h1v6h1c0-1 0-1 0 0h1v6l1 2v-1h1v-2l1 2v3h1v-5h1v1-1h1c0-1 0-1 0 0l1-4v3c0 1 0 1 0 0l1-2v-5l1 8h1v-5l1 2v1-4h1v-6h1v8h1v3-3l1-9v-5l1-3v7-5h1v9l1-1v-4l1 10v2h1v-1h1v-4l1 1v1c0-1 0-1 0 0h1v-3h1v-3h1v2l1-3v-2 2h1v-2l1-1V76h1v2c0-1 0-1 0 0l1-4v-4l1-6v-5h1v-6h1v1l1 2v1l1-6v6l1 3v10l1-3v-5h1v4l1-1v-2l1-1v3l1 5v5l1 4V68h1v11-12 3h1v-4c0-1 0-1 0 0l1-1v-1h1v-3l1-3c0 1 0 1 0 0v-3h1v6h1v5-6h1v-6l1-3c0-1 0-1 0 0v3h2v1-2h1v7-4l1-5v3l1 6v6-6h1v-4l1-6c0 1 0 1 0 0l1 4c0-1 0-1 0 0l1 3v6l1-4v-3l1-1v-2h1v-2 2h2v5-4l1-1v-2h1v-3h1c0 1 0 1 0 0v-1l1-2v-4l1 1v2h1v-1 11-3h1c0-1 0-1 0 0h1v3h1v-1s0-1 0 0h1v-4h1l1-2v4h1v1l1-3v11h1v2h1v-3h1v1c0-1 0-1 0 0h1v-4l1-1v-1l1-1v3h1v-7l1 1v2s0 1 0 0l1-4v-1h1v1-3c0-1 0-1 0 0h1c0-1 0-1 0 0h1v-3h1v1h1v-6l1-1h1l1-1v-1h1v1h1v-5l1-1v-3h2v2h2v1h1v-3l1-3v-4h1v1h1v3h1v-3l1 1h1v-1l1-1h1v-3h2v-1h1v-1h1l1 1v3h1v1h1l1-1c0-1 0-1 0 0l1-1v-1h1v-3h1v-1h1v-1h1v-1h1V9h1V8h1V7s0-1 0 0V6l1 1V6h4l1 1h2l1-1h1V5h2V4h1l1 1h5v1-1h4V4h6v1-1h2c0 1 0 0 0 0h1V3l1 1h1l1-1h6V2h15l1-1h194" style="stroke: var(--c--theme-primary-3)" stroke-width="2" stroke-miterlimit="10" fill="transparent"/>
  </g>
</svg>
<figcaption>A chart of the algorithm's loss function over time</figcaption>
</figure>


I’m not a computer scientist, and the parameters I’ve chosen for the simulated annealing algorithm probably aren’t quite right. Regardless, the results are promising.

## Stress test

With an optimization function in hand, I wanted to put it through a few tests to see if it was capable of matching the hand-picked and optimized palettes of IBM and Adobe.

To compare the palettes, I used “just-noticeable difference” (JND), the method that Elijah Meeks and Susie Lu implemented on the color evaluation tool Viz Palette. This approach recognizes the fact that when it comes to data visualization, large areas of color are easier to tell apart than small dots or lines.[^9] Viz Palette reports an issue with any pair of colors in a palette that would be indistinguishable when used in chart elements of various sizes.

The following table analyzes four 12-color palettes:

1. Adobe’s Spectrum design system 12-color palette
2. The first 12 colors of IBM’s 14-color palette
3. The first 12 colors of d3’s `d3.category20` palette
4. The best of five runs of my optimizer generating 12 random colors[^10]

<table class="table--responsive">
    <colgroup span="1"></colgroup>
    <colgroup span="4"></colgroup>
    <thead>
        <tr>
            <th class="table--group-header table--group-start table--group-end t--weight-bold" colspan="1">Color vision deficiency</th>
            <th class="table--group-header t--align-right table--group-start table--group-end t--weight-bold" colspan="4" scope="colgroup">JND issues</th>
        </tr>
        <tr>
            <th width="40%"></th>
            <th class="t--align-right" width="15%">Adobe</th>
            <th class="t--align-right" width="15%">IBM</th>
            <th class="t--align-right" width="15%">D3</th>
            <th class="t--align-right" width="15%">Mine</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">No color vision deficiency</th>
            <td data-label="Adobe" class="t--align-right t--numbers-tabular">2</td>
            <td data-label="IBM" class="t--align-right t--numbers-tabular">1</td>
            <td data-label="D3" class="t--align-right t--numbers-tabular">4</td>
            <td data-label="Mine" class="t--align-right t--numbers-tabular">0</td>
        </tr>
        <tr>
            <th scope="row">Protanopia</th>
            <td data-label="Adobe" class="t--align-right t--numbers-tabular">6</td>
            <td data-label="IBM" class="t--align-right t--numbers-tabular">9</td>
            <td data-label="D3" class="t--align-right t--numbers-tabular">13</td>
            <td data-label="Mine" class="t--align-right t--numbers-tabular">3</td>
        </tr>
        <tr>
            <th scope="row">Deuteranopia</th>
            <td data-label="Adobe" class="t--align-right t--numbers-tabular">6</td>
            <td data-label="IBM" class="t--align-right t--numbers-tabular">11</td>
            <td data-label="D3" class="t--align-right t--numbers-tabular">12</td>
            <td data-label="Mine" class="t--align-right t--numbers-tabular">4</td>
        </tr>
        <tr class="c--bg-gray-1">
            <th scope="row">Total</th>
            <td data-label="Adobe" class="t--align-right t--numbers-tabular">14</td>
            <td data-label="IBM" class="t--align-right t--numbers-tabular">21</td>
            <td data-label="D3" class="t--align-right t--numbers-tabular">29</td>
            <td data-label="Mine" class="t--align-right t--numbers-tabular">7</td>
        </tr>
    </tbody>
</table>

Looking at accessibility alone, my optimization function is much better at picking colors.

Another interesting feature of the algorithm is that you can “art direct” it. In my “nice looking” criteria, I measured how far the palette was from Stripe’s brand colors; if, instead, I use target colors from trendy color palettes from [Adobe Color](https://color.adobe.com/trends), I get other nice-looking — but still optimized — outcomes.

![](/images/annealing-9.jpg)

The algorithm finds colors that are close to the desired palette, along with appropriately contrasting colors. In each case, the colors are easy to see when stacked against one another. I’m really happy with the result; it’s taken a lot of manual tweaking out of exploring new palettes.

## Conclusion

Starting from a position of knowing very little color theory, I’ve been able to wander from concept to concept in search of a solution to a very tricky problem.

Color is complicated. Despite being one of the fundamental aspects of design, there’s a lot of theory that is still being discovered, debated, and defined. Some of the concepts I ended up using — like the CIE ΔE* formula and Brettel et al.’s colorblindness transformation — were first described in the last half century. Even newer concepts like wide-gamut colors are only being unlocked with this year’s technology.

The underlying problem — picking a color palette for a categorical data visualization — is just as complex. For just three colors, there are more possible palettes than there are atoms in the universe. Evaluating each one is impossible; besides, there may be no single best answer but millions of answers that are equally good enough.

With the right tools (like simulated annealing), a computer can perform a relatively lightweight series of calculations to find an acceptable answer. I’m sure a more knowledgeable computer scientist could point me to a dozen more powerful tools that may be able to find even better answers in even shorter amounts of time.

Regardless, this type of learning has given me two important things:

1. an immense amount of respect for designers who have an intuitive feeling for color
2. a lot of new information to bring to bear when making my own decisions about color

I’ve made the source code for the algorithm available [here](https://github.com/ilikescience/category-colors) — please take a look and let me know if you have ideas for how to improve the method. A month’s worth of nights and weekends exploring the problem might seem like overkill to end up here. But maybe these 4,000 words can help spark more journeys.

I hope you’ve found something new to explore.


[^1]: A misleading term. Lots of people taught me — but very few of them were professional teachers.
[^2]:  An absurdly large number. If you could program a computer to evaluate each and every one of these possibilities at a rate of 1 per nanosecond, it would take more than 10 thousand years to complete the task.
[^3]:  Annealing is much more complicated than this, and I hope any metalsmiths or physicists will forgive me for the simplifications I’ve made. As usual, you can get the full picture on Wikipedia.
[^4]: Maybe a future essay, though! In the meantime, try browsing [Wikipedia’s page on color difference](https://en.wikipedia.org/wiki/Color_difference).
[^5]: Sharma, Gaurav, Wencheng Wu, and Edul N. Dalal. "The CIEDE2000 Color-Difference Formula: Implementation Notes, Supplementary Test Data, and Mathematical Observations." _Color Research & Application_ 30, no. 1 (2005): 21–30, <http://www2.ece.rochester.edu/~gsharma/ciede2000/ciede2000noteCRNA.pdf>.
[^6]: Brettel, Hans, Françoise Viénot, and John D. Mollon. "Computerized simulation of color appearance for dichromats." Journal of the Optical Society of America A 14, no. 10 (1997): 2,647–2,655, <http://vision.psychol.cam.ac.uk/jdmollon/papers/Dichromatsimulation.pdf>.
[^7]: Data scientists use words like “loss” and “cost” instead of “gain” and “value,” not because they’re pessimists but because minimizing gives us a nice boundary to work toward: If we were maximizing a number instead, there would always be a hypothetically better solution, since there’s always a bigger number. But we’re minimizing, and we can stop at zero.
[^8]: In this case, I used the Brettel et al. method via [jsColorblindSimulator](http://mapeper.github.io/jsColorblindSimulator/). No color blindness simulation can accurately represent how people with color blindness see the world. Color blindness is not as strictly categorical as the various diagnoses make it out to be; people can have widely-varying degrees of color vision deficiencies in one or more categories. The tools I used to create these images are making educated approximations, but they’re still approximations.
[^9]: Stone, Maureen, Danielle Albers Szafir, and Vidya Setlur. "An engineering model for color difference as a function of size." Color and Imaging Conference, 2014, pp. 253–258. Society for Imaging Science and Technology, <https://research.tableau.com/sites/default/files/2014CIC_48_Stone_v3.pdf>.
[^10]: In these runs, I tuned the algorithm a bit to not care so much about finding colors that looked like Stripe’s brand colors. This results in slightly less aesthetically pleasing palettes, but if you need a functional 12-color palette, you’ll have to make that sacrifice.

