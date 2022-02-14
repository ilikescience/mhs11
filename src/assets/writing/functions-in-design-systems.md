---
title: 'Functions and the future of design systems'
og:
  title: 'Functions and the future of design systems'
  description: A new paradigm powering the next generation of design systems
date: 2022-02-12
---

<span class="t--weight-bold t--variant-smallcaps t--transform-lowercase t--tracking-loose">New kinds of computers and interfaces</span> are becoming ubiquitous: in our cars, on our wrists, in our ears, at our desks at work, on our TVs at home. In response, we’ve seen innovations in the content, organization, and delivery of design systems: design tokens, interoperability, handoff automation, CSS-in-JS, and atomic styles, to name a few. But these may not be enough to match the pace at which new kinds of experiences are brought to market. As digital interfaces become more personal, more customizable, and more accessible, many design systems are being stretched thin, groaning under the weight of exponential possibilities.

That’s because, despite their name, most design systems aren’t all that much like systems. Granted, they are _designed according to a system_, and there’s a logical consistency to how their components and tokens are defined, but  really, most design systems work like a dictionary: look up a component, get the instructions for using that component. 

The most sophisticated design systems can provide instructions in multiple coding languages, with detailed documentation, with orderly, regular updates. But they’re still relatively static, needing a designer or engineer to interpret the documents and use them in the correct context. Today, when we put a design system to work, there’s no coupling; pushing one part doesn’t cause another to pull. There’s no interlocking or interconnection; no networks, feedback loops, or forces at play. And without those mechanisms, there’s no leverage, no simple machines multiplying force, no power in the output.

But there’s a glimmer of hope in design systems at the forefront of scale and complexity. It’s a new way of managing the growing diversity of users and interfaces. It has the potential to not only keep up with the current pace of innovation, but to enable new levels of customization and specificity.

In this essay, I’d like to analyze why the dictionary model of design systems is reaching its limit, then look ahead to imagine the tools and paradigms that are waiting for us just over the horizon. 

[toc]

## The remarkable efficiency of dictionaries

Comparing design systems to dictionaries isn’t a slight. Dictionaries often show up in languages and cultures during golden ages of learning or periods of substantial cultural change.

Let’s look at the first part of the New Oxford American Dictionary entry for “design”: 

<div class="c--bg-gray-1 l--rounded-corners l--pad-s t--family-serif">

<span class="t--size-l"><strong>de·sign</strong></span> <span class="c--gray">| dəˈzīn </span>

<dl class="l--space-compact">
    <dt class="t--weight-bold">noun</dt>
    <dd class="l--mar-left-s" style="display: list-item; list-style:decimal">a plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made: <em>he has just unveiled his design for the new museum.</em> <br/>
    • the art or action of conceiving of and producing a plan or drawing: <em>good design can help the reader understand complicated information</em> | <em>the cloister is of late-twelfth-century design.</em>
    </dd>
    <dd style="display: list-item; list-style:decimal">an arrangement of lines or shapes created to form a pattern or decoration: <em>pottery with a lovely blue and white design.</em></dd>
    <dd style="display: list-item; list-style:decimal">purpose, planning, or intention that exists or is thought to exist behind an action, fact, or material object: the appearance of design in the universe.</dd>
</dl>

<dl class="l--space-compact">
    <dt><span class="t--weight-bold">verb</span> [with object]</dt>
    <dd>decide upon the look and functioning of (a building, garment, or other object), by making a detailed drawing of it: <em>a number of architectural students were designing a factory.</em><br/>
    • do or plan (something) with a specific purpose or intention in mind: <em>[with object and infinitive] : the tax changes were designed to stimulate economic growth.</em></dd>
</dl>
</div>

The entry packs an amazing amount of information into a small space:

1. Its pronunciation (useful when learning a new language, or in languages with complicated pronunciation rules like English)
2. Its part of speech (useful when trying to parse unfamiliar words in the context of a sentence)
3. A number of possible definitions (useful when encountering new words)
4. Examples of how that word might be used in a sentence (useful in covering the nuances of meaning that are difficult to articulate in a short definition)

Some dictionaries[^1] include even more information, like the word’s etymology (what language or languages it comes from), synonyms, antonyms, common phrases, or regional dialects and variations.

The power of a dictionary comes from the way it connects (maps) a single word to a collection of information. By looking up the word “design,” a dictionary user can find a set of the information necessary to use that word effectively in speech, writing, or language research.

## Dictionaries and design systems

Most modern design systems work like dictionaries.

The users of a design system agree to standardize components in exchange for efficiency and consistency. Work speeds up, since nobody has to make design decisions from scratch. Additionally, users can look up a component or fundamental value and use it in a consistent way, without needing to coordinate with all the other end users. Ambiguity is reduced or eliminated altogether.

Ambiguity hurts collaboration. Here’s an example: If you’re American, you probably know what a “sloppy joe” is (if you’re not American, it’s a sandwich with ground beef and tomato sauce). But in the small region of New Jersey where my wife is from, a sloppy joe is an entirely different sandwich (turkey on rye with coleslaw, swiss cheese, and Russian dressing). If she and I don’t consult a recipe book before making sloppy joes for lunch, one of us will be very disappointed.

Similarly, if I think of a button as being blue with round corners and white text, and you think of a button as being green with square corners and an icon, then we’ll have a hard time building a consistent, user-friendly interface.

The dictionary that maps the names of components to their design, functional, and code specifications is a critical part of any design system. Without this source of truth, design and engineering teams can’t do much to realize the promise of a design system.

## A deeper dive on design systems as dictionaries

Design systems are composed of discrete parts; each specification has a one-to-one relationship with a kind of name or signifier. In Material Design, for example, there are 15 different signifiers for types of text. The signifier ‘Display large’ maps to text with the following qualities:

<div class="c--bg-gray-1 l--rounded-corners l--pad-s">

<span class="t--size-l t--weight-bold">Display large</span>

* Typeface: 
    * System token: md.sys.typescale.display-large.font
    * Reference token: md.ref.typeface.brand-regular
    * Default value: Roboto Regular
* Line Height: 
    * System token: md.sys.typescale.display-large.line-height
    * Reference token: -
    * Default value: 64
* Size: 
    * System token: md.sys.typescale.display-large.size
    * Reference token: -
    * Default value: 57
* Tracking: 
    * System token: md.sys.typescale.display-large.tracking
    * Reference token: -
    * Default value: 0
* Weight: 
    * System token: md.sys.typescale.display-large.weight
    * Reference token: -
    * md.ref.typeface.weight-regular
    * Default value: 400

</div>

When you see ‘display large’ referenced in design or code, you can look it up in the Material Design dictionary and find out everything you need to know to implement that text correctly.

Likewise, colors in Material Design are mapped in a dictionary format. The signifiers ‘md.sys.color.primary’ and ‘md.sys.color.primary-container’ are defined like this:

<div class="c--bg-gray-1 l--rounded-corners l--pad-s">

<span class="t--size-l t--weight-bold">Primary</span>

* System token: md.sys.color.primary
* Light scheme reference token: md.ref.palette.primary40
* Light scheme default value: #6750A4 <div class="swatch" style="background: #6750A4"></div>
* Dark scheme reference token: md.ref.palette.primary80
* Dark scheme default value: #D0BCFF <div class="swatch" style="background: #D0BCFF"></div>

</div>

<div class="c--bg-gray-1 l--rounded-corners l--pad-s">

<span class="t--size-l t--weight-bold">Primary container</span>

* System token: md.sys.color.primary-container
* Light scheme reference token: md.ref.palette.primary90
* Light scheme default value: #EADDFF <div class="swatch" style="background: #EADDFF"></div>
* Dark scheme reference token: md.ref.palette.primary30
* Dark scheme default value: #4F378B <div class="swatch" style="background: #4F378B"></div>

</div>

It’s worth noting that the word ‘token’ shows up in these definitions. This refers to **design tokens**, another way to talk about these kinds of dictionary mappings. Design tokens are machine-readable dictionary maps between keys (signifiers) and values (definitions); a design token version of the ‘Primary’ color above might like this:


```json
{"Primary": 
  {
    "systemToken": "md.sys.color.primary",
    "value": [
      {
        "theme": "light",
        "refToken": "md.ref.palette.primary40",
        "defaultValue": "#6750A4"
      }, {
        "theme": "dark",
        "refToken": "md.ref.palette.primary80",
        "defaultValue": "#4F378B"
      }
    ]
  }
}
```

Design systems have hundreds of these dictionary mappings. Salesforce’s Lightning Design System, for example, lists over 200 single-value design tokens alone — that doesn’t include larger components or layouts.[^2]

As design systems grow more sophisticated and more complicated, the dictionaries they rely on have to grow larger and more difficult to maintain. Like I illustrated earlier, a design system without a dictionary isn’t very useful.

But there’s a different kind of approach that is perfectly suited for systems that grow larger and larger. It’s one we learned about as children, one we have a very intuitive sense of, even if writing it out gets a little confusing.

It’s called a function.

## What is a function?

When you first learned how to do multiplication in grade school, how was it taught? If your school was like mine, you learned two ways to multiply numbers; the first was by memorizing a table that looked something like this:

<table style="table-layout: fixed">
    <thead>
        <tr>
            <th class="table--header-empty"></th>
            <th class="t--align-center">1</th>
            <th class="t--align-center">2</th>
            <th class="t--align-center">3</th>
            <th class="t--align-center">4</th>
            <th class="t--align-center">5</th>
            <th class="t--align-center">6</th>
            <th class="t--align-center">7</th>
            <th class="t--align-center">8</th>
            <th class="t--align-center">9</th>
            <th class="t--align-center">10</th>
            <th class="t--align-center">11</th>
            <th class="t--align-center">12</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td class="t--align-center c--bg-gray-1">1</td>
            <td class="t--align-center">2</td>
            <td class="t--align-center">3</td>
            <td class="t--align-center">4</td>
            <td class="t--align-center">5</td>
            <td class="t--align-center">6</td>
            <td class="t--align-center">7</td>
            <td class="t--align-center">8</td>
            <td class="t--align-center">9</td>
            <td class="t--align-center">10</td>
            <td class="t--align-center">11</td>
            <td class="t--align-center">12</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td class="t--align-center">2</td>
            <td class="t--align-center c--bg-gray-1">4</td>
            <td class="t--align-center">6</td>
            <td class="t--align-center">8</td>
            <td class="t--align-center">10</td>
            <td class="t--align-center">12</td>
            <td class="t--align-center">14</td>
            <td class="t--align-center">16</td>
            <td class="t--align-center">18</td>
            <td class="t--align-center">20</td>
            <td class="t--align-center">22</td>
            <td class="t--align-center">24</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td class="t--align-center">3</td>
            <td class="t--align-center">6</td>
            <td class="t--align-center c--bg-gray-1">9</td>
            <td class="t--align-center">12</td>
            <td class="t--align-center">15</td>
            <td class="t--align-center">18</td>
            <td class="t--align-center">21</td>
            <td class="t--align-center">24</td>
            <td class="t--align-center">27</td>
            <td class="t--align-center">30</td>
            <td class="t--align-center">33</td>
            <td class="t--align-center">36</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td class="t--align-center">4</td>
            <td class="t--align-center">8</td>
            <td class="t--align-center">12</td>
            <td class="t--align-center c--bg-gray-1">16</td>
            <td class="t--align-center">20</td>
            <td class="t--align-center">24</td>
            <td class="t--align-center">28</td>
            <td class="t--align-center">32</td>
            <td class="t--align-center">36</td>
            <td class="t--align-center">40</td>
            <td class="t--align-center">44</td>
            <td class="t--align-center">48</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td class="t--align-center">5</td>
            <td class="t--align-center">10</td>
            <td class="t--align-center">15</td>
            <td class="t--align-center">20</td>
            <td class="t--align-center c--bg-gray-1">25</td>
            <td class="t--align-center">30</td>
            <td class="t--align-center">35</td>
            <td class="t--align-center">40</td>
            <td class="t--align-center">45</td>
            <td class="t--align-center">50</td>
            <td class="t--align-center">55</td>
            <td class="t--align-center">60</td>
        </tr>
        <tr>
            <th scope="row">6</th>
            <td class="t--align-center">6</td>
            <td class="t--align-center">12</td>
            <td class="t--align-center">18</td>
            <td class="t--align-center">24</td>
            <td class="t--align-center">30</td>
            <td class="t--align-center c--bg-gray-1">36</td>
            <td class="t--align-center">42</td>
            <td class="t--align-center">48</td>
            <td class="t--align-center">54</td>
            <td class="t--align-center">60</td>
            <td class="t--align-center">66</td>
            <td class="t--align-center">72</td>
        </tr>
        <tr>
            <th scope="row">7</th>
            <td class="t--align-center">7</td>
            <td class="t--align-center">14</td>
            <td class="t--align-center">21</td>
            <td class="t--align-center">28</td>
            <td class="t--align-center">35</td>
            <td class="t--align-center">42</td>
            <td class="t--align-center c--bg-gray-1">49</td>
            <td class="t--align-center">56</td>
            <td class="t--align-center">63</td>
            <td class="t--align-center">70</td>
            <td class="t--align-center">77</td>
            <td class="t--align-center">84</td>
        </tr>
        <tr>
            <th scope="row">8</th>
            <td class="t--align-center">8</td>
            <td class="t--align-center">16</td>
            <td class="t--align-center">24</td>
            <td class="t--align-center">32</td>
            <td class="t--align-center">40</td>
            <td class="t--align-center">48</td>
            <td class="t--align-center">56</td>
            <td class="t--align-center c--bg-gray-1">64</td>
            <td class="t--align-center">72</td>
            <td class="t--align-center">80</td>
            <td class="t--align-center">88</td>
            <td class="t--align-center">96</td>
        </tr>
        <tr>
            <th scope="row">9</th>
            <td class="t--align-center">9</td>
            <td class="t--align-center">18</td>
            <td class="t--align-center">27</td>
            <td class="t--align-center">36</td>
            <td class="t--align-center">45</td>
            <td class="t--align-center">54</td>
            <td class="t--align-center">63</td>
            <td class="t--align-center">72</td>
            <td class="t--align-center c--bg-gray-1">81</td>
            <td class="t--align-center">90</td>
            <td class="t--align-center">99</td>
            <td class="t--align-center">108</td>
        </tr>
        <tr>
            <th scope="row">10</th>
            <td class="t--align-center">10</td>
            <td class="t--align-center">20</td>
            <td class="t--align-center">30</td>
            <td class="t--align-center">40</td>
            <td class="t--align-center">50</td>
            <td class="t--align-center">60</td>
            <td class="t--align-center">70</td>
            <td class="t--align-center">80</td>
            <td class="t--align-center">90</td>
            <td class="t--align-center c--bg-gray-1">100</td>
            <td class="t--align-center">110</td>
            <td class="t--align-center">120</td>
        </tr>
        <tr>
            <th scope="row">11</th>
            <td class="t--align-center">11</td>
            <td class="t--align-center">22</td>
            <td class="t--align-center">33</td>
            <td class="t--align-center">44</td>
            <td class="t--align-center">55</td>
            <td class="t--align-center">66</td>
            <td class="t--align-center">77</td>
            <td class="t--align-center">88</td>
            <td class="t--align-center">99</td>
            <td class="t--align-center">110</td>
            <td class="t--align-center c--bg-gray-1">121</td>
            <td class="t--align-center">132</td>
        </tr>
        <tr>
            <th scope="row">12</th>
            <td class="t--align-center">12</td>
            <td class="t--align-center">24</td>
            <td class="t--align-center">36</td>
            <td class="t--align-center">48</td>
            <td class="t--align-center">60</td>
            <td class="t--align-center">72</td>
            <td class="t--align-center">84</td>
            <td class="t--align-center">96</td>
            <td class="t--align-center">108</td>
            <td class="t--align-center">120</td>
            <td class="t--align-center">132</td>
            <td class="t--align-center c--bg-gray-1">144</td>
        </tr>
    </tbody>
</table>

Essentially, it’s a dictionary for multiplication.[^3]

In school, you memorized the table for the numbers 1–12[^4] so you could quickly recall the products when tested. Now, if I asked you to multiply 250 &times; 10, you’d probably be able to come up with the answer quickly. But I’ll bet you didn’t memorize a multiplication table from 1–250! 

You’re able to multiply large numbers because you learned a second way to do multiplication, which looked something like this:

<svg viewBox="0 0 500 160" style="font-variant-numeric: tabular-nums; fill: currentColor;">
    <g transform="translate(200 40)">
        <text>
            <tspan x="30">187</tspan>
            <tspan x="0" y="21" style="fill: var(--c--gray-50)">&times;</tspan>
            <tspan x="42" y="22">54</tspan>
        </text>
        <line x1="0" y1="28" x2="70" y2="28" style="stroke: var(--c--gray-50)"></line>
        <text>
            <tspan x="30" y="50">748</tspan>
            <tspan x="0" y="68" style="fill: var(--c--gray-50)">&plus;</tspan>
            <tspan x="18" y="69">9350</tspan>
        </text>
        <line x1="0" y1="76" x2="70" y2="76" style="stroke: var(--c--gray-50)"></line>
        <text>
            <tspan x="6" y="97">10098</tspan>
        </text>
    </g>
</svg>



Using a simple set of rules (simple enough to teach to young children), you can multiply any two numbers together. And I mean any; it might take a while, but a 10-year-old can calculate 294,038 &times; 9,203,989 (which is 2,706,322,517,582, by the way). If that 10-year-old had to look up the answer in a multiplication dictionary, they’d need a very large book.

Technically, both a multiplication table and longhand multiplication are **functions**. The definition of a function is pretty simple: it’s a connection from one set of things (like words or numbers) to another set of things (like definitions or products). 

A dictionary is a _discrete_ function: it connects a word to its definition. Discrete functions have limitations: If you looked up the word “quarfle" in an English dictionary, you’d come up empty-handed. Dictionaries don’t have an output for every word you might try to look up. Discrete functions don’t have an output for every input.

Multiplication, on the other hand, can handle any number you throw at it; it is a _continuous_ function. For anything that counts as a number (15, 0.25, 3/8ths, the square root of pi), you can multiply it by another number (or itself) and get a product.

<div class="c--bg-highlight-1 l--rounded-corners l--pad-s">

_N.B.: For the rest of the essay, I’ll be focusing on continuous functions. Continuous functions are so ubiquitous and useful that mathematicians and scientists will often use the word “functions” to mean “continuous functions”; I’ll follow that convention for ease of reading._ 

</div>

## A brief history of functions

The functions for adding, subtracting, multiplying, and dividing numbers have been known and used for a very long time. While we teach children to memorize multiplication tables, most people can do simple calculations in their heads without needing to look up the results.

Over time, however, mathematicians and scientists discovered more complicated functions. For example, the logarithm function was discovered in the 17th century; it’s used in calculating things like the loudness of a sound or the brightness of a star. Unlike multiplication and division, calculating a logarithm by hand is an arduous process; while it’s possible to boil it down to a combination of simpler operations, it takes a lot of time. Likewise, memorizing more than a handful of the most common logarithms is pretty cumbersome. Instead, mathematicians in the 17th century published books full of pre-calculated logarithms, tables upon tables of them, to save time and effort.

These reference books (along with similar ones for trigonometric functions like sine, cosine, and tangent) were used by scientists and mathematicians for hundreds of years. Later, tools like slide rules were created to make it a bit easier to look up a logarithm, but the limitations remained: you couldn’t look up the logarithm of a number that wasn’t in your reference book or on your slide rule.

Then, in 1819, Charles Babbage began constructing prototypes of a machine that could perform complicated functions like logarithms for any whole number; he called it the _difference engine_, and it immediately caught the attention of scientists and engineers. Over the next 60 years, Babbage would design and build many influential prototypes of machines that could perform the continuous functions for many mathematical operations. His work, and that of his collaborator Ada Lovelace, formed the basis for the modern computer.

Babbage’s prototypes and their successors made huge tables of products, logarithms, and square roots obsolete. Computers made it possible to skip the process of calculating and publishing discrete functions; people could now use complicated functions directly, no dictionary needed.

## How functions work in design systems

Now, back to design systems. I hope you’ll see how the metaphor of dictionaries and functions applies: As design systems get bigger and more complicated, their reference manuals are also getting more unwieldy. Meanwhile, new technology (well, old technology being used in new ways — nothing like the invention of the computer) can skip the steps of manually computing the values for a part of the system.

Take Material Design’s color palettes, for example. version 2 of Material Design has a dictionary of colors. The set of reds looked like this:

**Red**
* 50: #FFEBEE <div class="swatch" style="background: #FFEBEE"></div>
* 100: #FFCDD2 <div class="swatch" style="background: #FFCDD2"></div>
* 200: #EF9A9A <div class="swatch" style="background: #EF9A9A"></div>
* 300: #E57373 <div class="swatch" style="background: #E57373"></div>
* ...etc.

There are 240 colors available; it’s up to the user to select the right colors for their case.

In version 3 of Material Design, these tables are replaced by what Google calls **dynamic color**. Dynamic color is a function that takes a single input color and returns a set of 46 labeled colors (that is, design tokens) that are ready to plug into a Material Design component. The guesswork of which colors to use is gone; the dynamic color function creates the colors to satisfy accessibility and usability criteria, taking much of the effort out of the end user’s hands.

The dynamic color function is _continuous_, where Material Design v2’s color tables were _discrete_. Dynamic color can turn any input color into a color palette, allowing for far greater customization and differentiation between apps.

Adobe has taken a similar approach to the colors in their design system, Spectrum. Its concept of “adaptive color” is essentially a function that generates a set of colors at specific contrast ratios from two inputs: a “key color” — the hue basis for the color palettes — and a “base color” — the background color used for calculating contrast ratio. Like Material Design v3, the output of the function is a set of discrete colors, but the input can be any possible color, meaning the system can be customized to a huge number of applications.

## Let’s write a design system function

The color functions in Material Design and Spectrum are a little cryptic, since they involve a lot of calculation behind the scenes. So to understand functions better, let’s look at a simpler function that is commonly manually computed in design systems: font size.

In 2010, Tim Brown introduced the concept of a **modular scale** to the audience at the Build conference. A modular scale is a discrete function that scales font sizes so that as text grows larger, the proportion between the sizes remains the same; it takes a base size and a ratio, then returns a series of font sizes that can be used. Since then, through websites like the eponymous [modularscale.com](https://www.modularscale.com), designers have been able to use discrete, pre-computed values in their systems.

However, the process of implementing a type scale across many text styles is complicated. A header should be much smaller on a phone than it is on a TV, so designers and engineers write media queries to re-define text sizes for each screen size. The process gets even harder when introducing user-defined customizations and variations for different font families. 

To solve this challenge, we can implement a continuous function for type size. And thanks to recent additions to the World Wide Web Consortium’s (W3C’s) CSS specification, it’s possible to do this directly in a browser, with no JavaScript or server-side scripting.

The first ingredient is the vw and vh units; these are CSS units that represent 1/100th of the browser’s width or height, respectively.[^5] This gives us a value that will be small on small screens and large on large screens.

The second ingredient is the calc() function. calc() allows us to add, subtract, multiply and divide units of length together on the fly.

The last ingredient is the max(), min(), and clamp() functions. max() picks the larger of two values, min() picks the smaller of two values, and clamp() defines a minimum _and_ a maximum, keeping the value between the two extremes.

Putting it all together, we can design a function to achieve a set of desired properties. Say I wanted the size of my text to be no smaller than 16px on small screens and no larger than 24px on large screens. The following line of code does that:


```css
--dynamic-font-size: clamp(16px, calc(1vw + 12px), 24px); 
```


On an 800-pixel-wide screen, the calc(1vw + 12px) part of our code evaluates to 20px (at 800px wide, 1vw is equal to 8px, plus 12px equals 20px). Since that is between the lower bound of 16px and the upper bound of 24px set by the clamp() function, the entire custom property is defined as 20px.

On a 375-pixel-wide screen, the calc(1v + 12px) part of our code evaluates to 15.75px. Since that’s below the 16px lower bound set in clamp(), the custom property is defined as 16px.

On a 1,400-pixel-wide screen, calc(1v + 12px) evaluates to 26px. That’s larger than 24px, so the property is defined as 24px.

Altogether, this one line of code replaces the dozen or so that would have been required to do the same with discrete media queries. And it has the bonus of being continuous when the screen is between 400px and 1,200px wide; the font size is adjusted smoothly for every possible value.

## How to use functions in design systems

Similar to the change from a dictionary of logarithms to the electronic calculator, using functions in design systems requires a slightly different set of tools than using discrete, pre-computed values.

There are a few ways to implement a function in your design system. The first is (as we explored in the previous section) to take advantage of features of the language you’re working in. This works for applications with a small set of target platforms; a web app can use CSS functions like calc(), clamp(), and upcoming functions like color() and mix(). Or, if the app is using JavaScript, it can take advantage of libraries like [chroma.js](https://gka.github.io/chroma.js/) or [Typetura](https://typetura.com) to provide functions to the design system.

Another way to implement functions in a design system is with a [design API](https://matthewstrom.com/writing/design-apis/). In short, a design API is a way for an application (like this website) to interact with a design system to set or retrieve design decisions (like tokens). A design API allows the application requesting a token to work independently of the application that defines the token.

In the case of a function, the server side of the API can handle the computation and formatting of a given token according to a function. The client that is rendering a design would simply request the token through the API, providing any information the system needs to calculate it. An app using Material Design, for example, might send a GET request to `https://material.design/api/color?token=md.sys.color.secondary&primaryColor=#6750A4` and receive some JSON back like `{name: 'md.sys.color.secondary', value: '#625B71'}`. 

In some ways, this isn’t so different from the dictionary mappings we started with: look up a key or signifier, get back a value or definition. But the important difference is that, unlike traditional design systems, a function-powered API will give a response for _any_ value you look up. Our hypothetical Material Design API would never reply with `404: token not found`. It’s like a dictionary that will return a definition for any word you look up, even ones that don’t exist yet. 

## The future of functions in design systems

Today, most design systems work like dictionaries, composed of a finite set of definitions. But there’s a new page turning, one that ushers in the age of functions. Design systems are evolving to survive in a world where applications and experiences exist on vastly different screen sizes, for different accessibility needs, language modes, hardware specifications, and spatial dimensions. For these complex interfaces, dictionaries just can’t cut it.

Design systems are starting to use functions that recreate the design decision making process, responding appropriately to any input they are given. The early uses of functions do a great job of extending the reach of design systems. But the potential is vast. 

Currently, Apple develops a huge range of software interfaces: iOS for phones, iPadOS for tablets, macOS for personal computers, watchOS for its watches, tvOS for large screens, CarPlay for vehicle infotainment systems, and on and on. Each OS has its own set of interface queues and paradigms, suited to its use case. Each requires a discrete and well-defined dictionary of design decisions.

But imagine if Apple’s software could tailor an experience to a person’s exact needs at any moment in time. Think of the same app moving seamlessly from watch to tablet to car screen to laptop to big screen TV. The font, margins, and line height are tuned to the user’s reading speed, the colors and labels of charts and graphics changed to reflect their cultural norms[^6], animations and color contrast adjusted to respect accessibility preferences, and affordances and signifiers suited to the user’s input device, be it keyboard, touchscreen, voice commands, eye tracker, mouse pointer, or game controller.  

We’re seeing the whisperings of this future in features like dark mode, dynamic font size, Apple’s accessibility features like assistive touch, and Google’s Material Design dynamic color. But this is just the beginning. Functions are how design systems will meet the challenges of the next phase of user experience design, and I’m excited to start exploring. 


[^1]: I’ll never miss a chance to link to one of my favorite blog posts about dictionaries, [James Somers’ “You’re probably using the wrong dictionary.”](http://jsomers.net/blog/dictionary)

[^2]: <https://www.lightningdesignsystem.com/design-tokens/>

[^3]: A table is a nice way to look at the information, since a more traditional dictionary would look like this: **1**: 1 ✕ 1 = 1, 1 ✕ 2 = 2, 1 ✕ 3 = 3, 1 ✕ 4 = 4  … and so on.

[^4]: Why 12? I’ve never thought about this before, but it’s an awfully strange place to stop.

[^5]: We can also use the fancier vmax and vmin units, which reflect whichever of vw and vh are largest or smallest.

[^6]: In East Asian countries, the color red is associated with good luck and fortune — when stocks are listed on the Nikkei index, they’re shown in red. This is the opposite of European or American norms, which show negative numbers in red.