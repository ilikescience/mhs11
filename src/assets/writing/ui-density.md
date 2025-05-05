---
title: UI Density
subtitle: What UI density means and how to design for it
date: 2024-05-20
og:
  title: UI Density
  subtitle: What UI density means and how to design for it
stub: UI density is more than just the way things look; it's about the information they convey and how much value they generate.

---

Interfaces are becoming less dense.

I'm usually one to be skeptical of nostalgia and "we liked it that way" bias, but comparing websites and applications of 2024 to their 2000s-era counterparts, the spreading out of software is hard to ignore.

To explain this trend, and suggest how we might regain density, I started by asking what, exactly, UI density is. It's not just the way an interface looks at one moment in time; it's about the amount of information an interface can provide over a series of moments. It's about how those moments are connected through design decisions, and how those decisions are connected to the value the software provides.

I'd like to share what I found. Hopefully this exploration helps you define UI density in concrete and useable terms. If you're a designer, I'd like you to question the density of the interfaces you're creating; if you're not a designer, use the lens of UI density to understand the software you use.

## Visual density

We think about density first with our eyes. At first glance, density is just how many things we see in a given space. This is **visual density.** A visually dense software interface puts a lot of stuff on the screen. A visually sparse interface puts less stuff on the screen.

Bloomberg's Terminal is perhaps the most common example of this kind of density. On just a single screen, you'll see scrolling sparklines of the major market indices, detailed trading volume breakdowns, tables with dozens of rows and columns, scrolling headlines containing the latest news from agencies around the world, along with UI signposts for all the above with keyboard shortcuts and quick actions to take.

![A screenshot of Terminal's interface. <span class="figure--credit">Via [Objective Trade](https://www.youtube.com/watch?v=2ee-x6IXWK8) on YouTube</span>](/images/ui-density-01.jpg)

Craigslist is another visually dense example, with its hundreds of plain links to categories and spartan search-and-filter interface. McMaster-Carr's website shares similar design cues, listing out details for many product variations in a very small space.

</article>

<figure class="l--grid-wide">
    <div class="l--flex">
        <div class="l--flex-auto"><img src="/images/ui-density-02.jpg" alt="A screenshot of Craigslist's homepage"/></div>
        <div class="l--flex-auto"><img src="/images/ui-density-03.jpg" alt="A screenshot of McMaster-Carr's product page"/></div>
    </div>
    <figcaption>Screenshots of Craigslist's homepage and McMaster-Carr's product page circa 2024.</figcaption>
</figure>

<article class="post l--grid-narrow">

You can form an opinion about the density of these websites simply by looking at an image for a fraction of a second. This opinion is from our subconsciousness, so it's fast and intuitive. But like other snap judgements, it's biased and unreliable. For example, which of these images is more dense?

<figure>
    <img src="/images/ui-density-04.png" alt="Two rectangles. On the left, the rectangle is filled with many dots that are randomly arranged. On the right, the rectangle is filled with an equal number of dots, but they are arranged neatly in rows and columns.">
</figure>

Both images have the same number of dots (500). Both take up the same amount of space. But at first  glance, most people say image B looks more dense.[^1]

What about these two images?

<figure>
    <img src="/images/ui-density-05.png" alt="Two rectangles. On the left, the rectangle is filled with many dots that are neatly arranged in rows and columns. On the right, the rectangle is filled with an equal number of dots, arranged in two distinct groups of neatly-ordered dots.">
</figure>

Again, both images have the same number of dots, and are the same size. But organizing the dots into groups changes our perception of density. Visually density — our first, instinctual judgement of density — is unpredictable. 

It's impossible to be fully objective in matters of design. But if we want to have conversations about density, we should aim for the most consistent, meaningful, and useful definition possible. 

## Information density

In _The Visual Display of Quantitative Information,_ Edward Tufte approaches the design of charts and graphs from the ground up:

> Every bit of ink on a graphic requires reason. And nearly always that reason should be that the ink presents new information.

Tufte introduces the idea of "data-ink," defined as the useful parts of a given visualization. Tufte argues that visual elements that don't strictly communicate data, whether it's a scale value, a label, or the data itself — should be eliminated.

Data-ink isn't just the space a chart takes up. Some charts use very little extraneous ink, but still take up a lot of physical space. Tufte is talking about **information density**, not visual density.

Information density is a measurable quantity: to calculate it, you simply divide the amount of "data-ink" in a chart by the total amount of ink it takes to print it. Of course what is and is not data-ink is somewhat subjective, but that's not the point. The point is to get the ratio as close to 1 as possible.

You can increase the ratio in two ways:
1. Add data-ink: provide additional (useful) data
2. Remove non-data-ink: erase the parts of the graphic that don't communicate data

</article>

<figure class="l--grid-wide">
    <div class="l--flex">
        <div class="l--flex-auto"><img src="/images/ui-density-07.jpg" alt="An image of the periodicity of elements. It uses many superfluous visual elements such as grid marks that do not convey information."/></div>
        <div class="l--flex-auto"><img src="/images/ui-density-06.jpg" alt="An improved version of the image of the periodicity of elements. It removes the grid marks and adds additional information in the same space."/></div>
    </div>
    <figcaption>Tufte's examples of graphics with a low data-ink ratio (first) and a high one (second). <span class="figure--credit">Reproduced from Edward Tufte's <i>The Visual Display of Quantitative Information</i></span></figcaption>
    </figcaption>
</figure>

<article class="post l--grid-narrow">

There's an upper limit to information density, which means you can subtract too much ink, or add too much information. The audience matters, too: A bond trader at their 4-monitor desk will have a pretty high threshold; a 2nd grader reading a textbook will have a low one.

Information density is related to visual density. Usually, the higher the information density is, the more dense a visualization will look.

For example, take the train schedule published by E.J. Marey in 1885[^2]. It shows the arrival and departure times of dozens of trains across 13 stops from Paris to Lyon. The horizontal axis is time, and the vertical axis is space. The distance between stops on the chart reflects how far apart they are in the real world. 

The data-ink ratio is close to 1, allowing a huge amount of information — more than 260 arrival and departure times — to be packed into a relatively small space.

</article>

<figure class="l--grid-wide">
    <img src="/images/ui-density-08.jpg" alt="A visualization of train schedules from Paris to Lyon. The horizontal axis is time, and the vertical axis is space. The distance between stops on the chart reflects how far apart they are in the real world.">
    <figcaption>The train schedule visualization published by E.J. Marey in 1885. <span class="figure--credit">Reproduced from Edward Tufte's <i>The Visual Display of Quantitative Information</i></span></figcaption>
</figure>

<article class="post l--grid-narrow">

Tufte makes this idea explicit:

> Maximize data density and the \[amount of data\], within reason (but at the same time exploiting the *maximum resolution* of the available data-display technology).

He puts it more succinctly as the "Shrink Principle":

> Graphics can be shrunk way down

Information density is clearly useful for charts and graphs. But can we apply it to interfaces? 

The first half of the equation — information — applies to screens. We should maximize the amount of information that each part of our interface shows. 

But the second half of the equation — ink — is a bit harder to translate. It's tempting to think that pixels and ink are equivalent. But any interface with more than a few elements needs separators, structural elements, and signposts to help a user understand the relationship each piece has to the other. 

It's also tempting to follow Tufte's Shrink Principle and try to eliminate all the whitespace in UI. But some whitespace has meaning almost as salient as the darker pixels of graphic elements. And we haven't even touched on shadows, gradients, or color highlights; what role do they play in the data-ink equation?

So, while information density is a helpful stepping stone, it's clear that it's only part of the bigger picture. How can we incorporate _all_ of the design decisions in an interface into a more objective, quantitative understanding of density?

## Design density

You might have already seen the first challenge in defining density in terms of design decisons: what counts as a design decision? 

In UI, UX, and product design, we make many decisions, consciously and subconsciously, in order to communicate information and ideas. But  why do those particular choices convey the meaning that they do? Which ones are superlative or simply aesthetic, and which are actually doing the heavy lifting? 

These questions sparked 20th century German psychologists to explore how humans understand and interpret shapes and patterns. They called this field "gestalt," which in German means "form." In the course of their exploration, Gestalt psychologists described principles that describe how some things appear orderly, symmetrical, or simple, while others do not. While these psychologists weren't designers, in some sense, they discovered the fundamental laws of design:

1. **Proximity**: we perceive things that are close together a comprising a single group
2. **Similarity**: objects that are similar in shape, size, color, or in other ways, appear related to one another.
3. **Closure**: our minds fill in gaps in designs so that we tend to see whole shapes, even if there are none
4. **Symmetry**: if we see shapes that are symmetrical to each other, we perceive them as a group formed around a center point
5. **Common fate**: when objects move, we mentally group the ones that move in the same way
6. **Continuity**: we can perceive objects as separate even when they overlap
7. **Past experience**: we recognize familiar shapes and patterns even in unfamiliar contexts. Our expectations are based on what we've learned from our past experience of those shapes and patterns.
8. **Figure-ground relationship**: we interpret what we see in a three-dimensional way, allowing even flat 2d images to have foreground and background elements.

<figure class="l--mar-block-m">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 587 103"><path fill="#6BC041" d="M350.852 1.844c5.827 0 10.551 4.723 10.551 10.55 0 5.828-4.724 10.552-10.551 10.552s-10.551-4.724-10.551-10.551 4.724-10.551 10.551-10.551ZM376.955 1.844c5.827 0 10.551 4.723 10.551 10.55 0 5.828-4.724 10.552-10.551 10.552-5.828 0-10.552-4.724-10.552-10.551s4.724-10.551 10.552-10.551ZM350.852 27.946c5.827 0 10.551 4.724 10.551 10.552 0 5.827-4.724 10.55-10.551 10.55s-10.551-4.723-10.551-10.55c0-5.828 4.724-10.552 10.551-10.552ZM376.955 27.946c5.827 0 10.551 4.724 10.551 10.552 0 5.827-4.724 10.55-10.551 10.55-5.828 0-10.552-4.723-10.552-10.55 0-5.828 4.724-10.552 10.552-10.552ZM350.852 54.049c5.827 0 10.551 4.724 10.551 10.551 0 5.828-4.724 10.552-10.551 10.552s-10.551-4.725-10.551-10.552 4.724-10.551 10.551-10.551ZM376.955 54.049c5.827 0 10.551 4.724 10.551 10.551 0 5.828-4.724 10.552-10.551 10.552-5.828 0-10.552-4.725-10.552-10.552s4.724-10.551 10.552-10.551ZM350.852 80.151c5.827 0 10.551 4.725 10.551 10.552s-4.724 10.551-10.551 10.551-10.551-4.724-10.551-10.551c0-5.828 4.724-10.552 10.551-10.552ZM376.955 80.151c5.827 0 10.551 4.725 10.551 10.552s-4.724 10.551-10.551 10.551c-5.828 0-10.552-4.724-10.552-10.551 0-5.828 4.724-10.552 10.552-10.552Z"/><path fill="#C06B41" d="M288.095 1.844h21.103v21.102L288.095 1.844ZM314.198 1.844h21.103v21.102L314.198 1.844ZM288.095 27.946h21.103V49.05l-21.103-21.103ZM314.198 27.946h21.103V49.05l-21.103-21.103ZM288.095 54.049h21.103V75.15L288.095 54.05ZM314.198 54.049h21.103V75.15L314.198 54.05ZM288.095 80.151h21.103v21.103l-21.103-21.103ZM314.198 80.151h21.103v21.103l-21.103-21.103Z"/><path fill="#4180C0" d="M283.095 27.946V49.05h-21.102V27.946h21.102ZM256.993 27.946V49.05H235.89V27.946h21.103ZM283.095 1.844v21.102h-21.102V1.843h21.102ZM256.993 1.844v21.102H235.89V1.843h21.103ZM283.095 54.049V75.15h-21.102V54.05h21.102ZM256.993 54.049V75.15H235.89V54.05h21.103ZM283.095 80.151v21.103h-21.102V80.151h21.102ZM256.993 80.151v21.103H235.89V80.151h21.103Z"/><path fill="gray" d="M0 1.844h21.103v21.102H0V1.844ZM27.103 12.395c0-5.827 4.724-10.551 10.551-10.551s10.551 4.723 10.551 10.55c0 5.828-4.724 10.552-10.551 10.552s-10.551-4.724-10.551-10.551ZM0 27.946h21.103V49.05L0 27.946ZM27.103 27.946h21.102V49.05H27.103V27.946ZM0 64.6C0 58.773 4.724 54.05 10.551 54.05c5.828 0 10.552 4.724 10.552 10.551 0 5.828-4.724 10.552-10.552 10.552C4.724 75.151 0 70.427 0 64.6ZM27.103 54.049h21.102V75.15L27.103 54.05ZM0 80.151h21.103v21.103H0V80.151ZM27.103 90.703c0-5.828 4.724-10.552 10.551-10.552s10.551 4.725 10.551 10.552-4.724 10.551-10.551 10.551-10.551-4.724-10.551-10.551ZM126.654 1.844c5.827 0 10.551 4.723 10.551 10.55 0 5.828-4.724 10.552-10.551 10.552s-10.551-4.724-10.551-10.551 4.724-10.551 10.551-10.551ZM116.103 27.946h21.102V49.05l-21.102-21.103ZM137.205 54.049V75.15h-21.102V54.05h21.102ZM126.654 80.151c5.827 0 10.551 4.725 10.551 10.552s-4.724 10.551-10.551 10.551-10.551-4.724-10.551-10.551c0-5.828 4.724-10.552 10.551-10.552ZM90 1.844h21.103v21.102L90 1.844ZM111.103 27.946V49.05H90V27.946h21.103ZM100.551 54.049c5.828 0 10.552 4.724 10.552 10.551 0 5.828-4.724 10.552-10.552 10.552C94.724 75.151 90 70.427 90 64.6s4.724-10.551 10.551-10.551ZM90 80.151h21.103v21.103L90 80.151ZM513.387 23.326 536.713 0l23.325 23.326h-46.651ZM564.12 28.196l23.325 23.326-23.325 23.326V28.196ZM509.516 74.848l-23.325-23.326 23.325-23.326v46.652ZM560.144 77.928l-23.326 23.326-23.326-23.326h46.652Z"/></svg>
<figcaption>Examples of the princples of proximity (left), similarity (center), and closure (right).</figcaption>
</figure>

Gestalt principles explain why UI design goes beyond the pixels on the screen. For example:

- Because of the **principle of similarity**, users will understand that text with the same size, font, and color serves the same purpose in the interface. 
- The **principle of proximity** explains why when a chart is close to a headline, it's apparent that the headline refers to the chart. For the same reasons, a tightly packed grid of elements will look related, and separate from a menu above it separated by ample space. 
- Thanks to our **past experience** with switches, combined with the figure-ground principle, a skeuomorphic design for a toggle switch will make it obvious to a user how to instantly turn on a feature.

So, instead of focusing on the pixels, we think of design decisions as how we intentionally use gestalt principles to communicate meaning. And like Tufte's data-ink ratio compares the strictly necessary ink to the total ink used to print a chart, we can calculate a gestalt ratio which compares the strictly necessary design decisions to the total decisions used in a design. This is **design density.**

![Four different treatments of the same information, using different types and amounts of gestalt principles. Which is the most dense?](/images/ui-density-09.jpg)

This is still subjective: a design decision that seems necessary to some might be superfluous to others. Our biases will skew our assessment, whether they're personal tastes or cultural norms. But when it comes to user interfaces, counting design decisions is much more useful than counting the amount of data or "ink" alone.

Design density isn't perfect. User interfaces exist to do work, to have fun, to waste time, to create understanding, to facilitate personal connections, and more. Those things require the user to take one or more actions, and so density needs to look beyond components, layouts, and screens. Density should comprise all the actions a user takes in their journey — it should count in space and time.

## Density in time

Just like the amount of stuff in a given space dictates visual density, the amount of things a user can do in a given amount of time dictates **temporal** — time-wise — density.

Loading times are the biggest factor in temporal density. The faster the interface responds to actions and loads new pages or screens, the more dense the UI is. And unlike 2-dimensional whitespace, there's almost no lower limit to the space needed between moments in time. 

![Bloomberg's Terminal loads screens full of data instantaneously](/images/ui-density-10.gif)

With today's bloated software, making a UI more dense in time is more impactful than just squeezing more stuff onto each screen. That's why Bloomberg's Terminal is still such a dominant tool in the financial analysis space; it loads data almost instantaneously. A skilled Terminal user can navigate between dozens of charts and graphs in milliseconds. There are plenty of ways to cram tons of financial data into a table, but loading it with no latency is Terminal's real superpower.

But say you've squeezed every second out of the loading times of your app. What next? There are some things that just can't be sped up: you can't change a user's internet connection speed, or the computing speed of their CPU. Some operations, like uploading a file, waiting for a customer support response, or processing a payment, involve complex systems with unpredictable variables. In these cases, instead of changing the amount of time between tasks, you can change the **perception** of that time:

- Actions **less than 100 milliseconds** apart will feel simultaneous. If you tap on an icon and, 100ms later, a menu appears, it feels like no time at all passed between the two actions. So, if there's an animation between the two actions — the menu slides in, for example — the illusion of simultaneity might be broken. For the smallest temporal spaces, animations and transitions can make the app feel _slower_.[^4]
- Between **100 milliseconds and 1 second**, the connection between two actions is broken. If you tap on a link and there's no change for a second, doubt creeps in: did you actually tap on anything? Is the app broken? Is your internet working? Animations and transitions can bridge this perceptual gap. Visual cues in these spaces make the UI feel more dense in time.
- Gaps between **1 and 10 seconds** can't be bridged with animations alone; research[^3] shows that users are most likely to abandon a page within the first 10 seconds. This means that if two actions are far enough apart, a user will leave the page instead of waiting for the second action. If you can't decrease the time between these actions, show an indeterminate loading indicator — a small animation that tells the user that the system is operating normally.
- Gaps between **10 seconds and 1 minute** are even harder to fill. After seeing an indeterminate loader for more than 10 seconds, a user is likely to see it as static, not dynamic, and start to assume that the page isn't working as expected. Instead, you can use a determinate loading indicator — like a larger progress bar — that clearly indicates how much time is left until the next action happens. In fact, the right design can make the waiting time seem shorter than it actually is; the backwards-moving stripes that featured prominently in Apple's "Aqua" design system made waiting times seem 11% shorter.[^5]
- For gaps **longer than 1 minute,** it's best to let the user leave the page (or otherwise do something else), then notify them when the next action has occurred. Blocking someone from doing anything useful for longer than a minute creates frustration. Plus, long, complex processes are also susceptible to error, which can compound the frustration.

In the end, though, making a UI dense in time and space is just a means to an end. No UI is valuable because of the way it looks. Interfaces are valuable in the outcomes they enable — whether directly associated with some dollar value, in the case of business software, or tied to some intangible value like entertainment or education.

So what is density really about, then? It's about providing the highest value outcomes in the smallest amount of time, space, pixels, and ink.

## Density in value

Here's an example of how value density is manifested: a common suggestion for any form-based interface is to break long forms into smaller chunks, then put those chunks together in a wizard-type interface that saves your progress as you go. That's because there's no value in a partly-filled-in-form; putting all the questions on a single page might look more visually dense, but if it takes longer to fill out, many users won't submit it at all.

![This form is broken up into multiple parts, with clear errors and instructions for resolution.](/images/ui-density-11.jpg)

Making it possible for users to get to the end of a form with fewer errors might require the design to take up more space. It might require more steps, and take more time. But if the tradeoffs in visual and temporal density make the outcome more valuable — either by increasing submission rate or making the effort more worth the user's time — then we've increased the overall value density.

Likewise, if we can increase the visual and temporal density by making the form more compact, load faster, and less error-prone, _without_ subtracting value to the user or the business, then that's an overall increase in density. 

Channeling Tufte, we should try to increase value density as much as possible.

Solving this optimization problem can have some counterintuitive results. When the internet was young, companies like Craigslist created value density by aggregating and curating information and displaying it in pages of links. Companies like Yahoo and Altavista made it possible to search for that information, but still put aggregation at the fore. Google took a radically different approach: use information gleaned by the internet's long chains of linked lists to power a search box. Information was aggregating itself; a single text input was all users needed to access the entire web. 

</article>

<figure class="l--grid-wide">
    <div class="l--flex">
        <div class="l--flex-auto"><img class="l--border-style-solid l--border-width-s c--border-gray-50" src="/images/ui-density-12.jpg" alt="A screenshot of Google's homepage in 2001"/></div>
        <div class="l--flex-auto"><img class="l--border-style-solid l--border-width-s c--border-gray-50" src="/images/ui-density-13.jpg" alt="A screenshot of Yahoo's homepage in 2001"/></div>
    </div>
    <div class="l--flex">
         <div class="l--flex-auto"><img class="l--border-style-solid l--border-width-s c--border-gray-50" src="/images/ui-density-14.jpg" alt="A screenshot of Google's homepage in 2024"/></div>
        <div class="l--flex-auto"><img class="l--border-style-solid l--border-width-s c--border-gray-50" src="/images/ui-density-15.jpg" alt="A screenshot of Yahoo's homepage in 2024"/></div>
    </div>
    <figcaption>Google and Yahoo's approach to data, design, and value density hasn't changed from 2001 (when the first screenshots were archived) to 2024 (when the second set of screenshots were taken). The value of the two companies' stocks reflect the result of these differing approaches.</figcaption>
    </figcaption>
</figure>

<article class="post l--grid-narrow">

The UI was much less visually dense, but more value-dense by orders of magnitude. The results speak for themselves: Google went from a $23B valuation in 2004 to being worth over $2T today — closing in on a 100x increase. Yahoo went from being worth $125B in 2000 to being sold for $4.8B — less than 3% of its peak value.[^6]

## Conclusion

Designing for UI density goes beyond the visual aspects of an interface. It includes all the implicit and explicit design decisions we make, and all the information we choose to show on the screen. It includes all time and the actions a user takes to get something valuable out of the software.

So, finally, a concrete definition of UI density: **UI density is the value a user gets from the interface divided by the time and space the interface occupies.**

Speed, usability, consistency, predictability, information richness, and functionality all play an important role in this equation. By taking account of all these aspects, we can understand why some interfaces succeed and others fail. And by designing for density, we can help people get more value out of the software we build.

[^1]: This is a very unscientific statement based on a poll of 20 of my coworkers. Repeatability is questionable.
[^2]: The provenance of the chart is interesting. Not much is known about the original designer, Charles Ibry; but what we do know points to even earlier iterations of the design. If you're interested, read [Sandra Rendgen's fascinating history of the train schedule](https://sandrarendgen.wordpress.com/2019/03/15/data-trails-from-paris-with-love/).
[^3]: Nielsen, Jakob. "How Long Do Users Stay on Web Pages?" Nielsen Norman Group, 11 Sept. 2011, <https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/>
[^4]: I have no scientific backing for this claim, but I believe it's because a typical blink occurs in 100ms. When we blink, our brains fill in the gap with the last thing we saw, so we don't notice the blink. That's is why we don't notice the gap between two actions that are less than 100ms apart. You can read more about this effect here: [Visual Perception: Saccadic Omission — Suppression or Temporal Masking?](https://www.sciencedirect.com/science/article/pii/S0960982209011105)
[^5]: Harrison, Chris, Zhiquan Yeo, and Scott E. Hudson. "Faster Progress Bars: Manipulating Perceived Duration with Visual Augmentations." Carnegie Mellon University, 2010, <https://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf>
[^6]: HackerNews has pointed out that this is a ridiculous statement. And it is. Of course, value density isn't the _only_ reason why Google succeeded where Yahoo failed. But as a reflection of how each company thought about their products, it was a good leading indicator.