---
title: 'Introducing design system functions'
og:
  title: 'Introducing design system functions'
  description: A new way of thinking about the elements of a design system
  image: /images/design-api-5.jpg
  image_width: 1520
  image_height: 855
date: 2022-01-10
tags: [design]
---

The importance and efficiency of design systems is well established. And while we’ve seen some major innovations and evolutions in the content, organization, and delivery of design systems (design tokens, interoperability, handoff automation, CSS-in-JS, atomic styles), there’s one aspect that’s stayed remarkably consistent: from the very beginning, design systems have been  **dictionary mappings**. 

What do I mean by “dictionary mappings?” Well, let’s look at a dictionary. Here’s the entry for “design”:  

<div class="c--bg-gray-1 l--rounded-corners l--pad-s t--family-serif">

<span class="t--size-l"><strong>de·sign</strong></span> <span class="c--gray">| dəˈzīn |</span>

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

The remarkable efficiency of a dictionary comes from the way it connects (maps) a single word to a collection of information. Look up a word up in the dictionary, and you’ll find:

1. Its pronunciation (useful when learning a new language, or in languages with complicated pronunciation rules like English)
2. Its part of speech (useful when trying to parse unfamiliar words in the context of a sentence)
3. A number of possible definitions (useful when encountering new words)
4. Examples of how that word might be used in a sentence (useful in covering the nuances of meaning that are difficult to articulate in a short definition)

Some dictionaries include additional information, like the word’s etymology (what language or languages it comes from), synonyms, antonyms, common phrases, or regional dialects and variations.

By looking up the word “design,” a dictionary user can find a set of the information necessary to use that word effectively in speech, writing, or language research.

Design systems work in much the same way.

## Dictionary maps in design systems

The users of the design system agree to standardize components, which in turn enables efficient collaboration work without anyone having to make design decisions from scratch. An app without a design system is kind of like a village without a dictionary: if I use the word “design” to mean “to plan the shape of a hut” but you use the word “design” to mean “a tasty animal that’s easy to catch,” we won’t be able to figure out how to talk about hunting food or building new homes. Similarly, if I think of a button as being blue with round corners and white text, and you think of a button as being green with square corners and an icon, then we’ll have a hard time building a consistent, user-friendly interface.

The dictionary that maps the names of components to their design, functional, and code specifications is a critical part of any design system. Without this source of truth, design and engineering teams can’t do much to realize the promise of a design system.

I want to go deeper on the “dictionary” model for a moment.

Design systems are composed of discrete parts; each specification has a one-to-one relationship with a kind of name or signifier. In Material Design, for example, there are 15 different signifiers for types of text. The signifier ‘Display large’ maps to text with the following qualities:

<div class="l--pad-s c--bg-gray-1 l--rounded-corners" markdown>

**Display large**
- Typeface: 
	- System token: md.sys.typescale.display-large.font
	- Reference token: md.ref.typeface.brand-regular
	- Default value: Roboto Regular
- Line Height: 
	- System token: md.sys.typescale.display-large.line-height
	- Reference token: -
	- Default value: 64
- Size: 
	- System token: md.sys.typescale.display-large.size
	- Reference token: -
	- Default value: 57
- Tracking: 
	- System token: md.sys.typescale.display-large.tracking
	- Reference token: -
	- Default value: 0
- Weight: 
	- System token: md.sys.typescale.display-large.weight
	- Reference token: -
	- md.ref.typeface.weight-regular
	- Default value: 400
</div>

When you see ‘display large’ referenced in design or code, you can look it up in the Material Design dictionary and find out everything you need to know to implement that text correctly.

Likewise, colors in Material Design are mapped in a dictionary format. The signifiers ‘md.sys.color.primary’ and ‘md.sys.color.primary-container’ are defined like this:

**Primary**
- System token: md.sys.color.primary
- Light scheme reference token: md.ref.palette.primary40
- Light scheme default value: #6750A4
- Dark scheme reference token: md.ref.palette.primary80
- Dark scheme default value: #D0BCFF
** Primary container**
- System token: md.sys.color.primary-container
- Light scheme reference token: md.ref.palette.primary90
- Light scheme default value: #EADDFF
- Dark scheme reference token: md.ref.palette.primary30
- Dark scheme default value: #4F378B

It’s worth noting that the word ‘token’ shows up in these definition. This refers to **design tokens**, another way to talk about these kinds of dictionary mappings. Design tokens are machine-readable dictionary maps between keys (signifiers) and values (definitions); a design token version of the ‘Primary’ color above might like this:

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

Design systems have hundreds of these dictionary mappings. Salesforce’s Lightning Design System, for example, has over 200 mappings for single-value design tokens alone — that doesn’t include larger components or layouts.[^1]

As design systems grow more sophisticated and more complicated, the dictionaries they rely on grow larger and more difficult to maintain. Like I illustrated earlier, a design system without a dictionary isn’t very useful.

But there’s a different kind of mapping that is perfectly suited for systems that grow larger and larger. It’s one we learned about as children, one we have a very intuitive sense of, even if writing it out gets a little confusing.

It’s called a continuous function.

## How continuous functions work

When you first learned how to do multiplication in grade school, how was it taught? If your school was like mine, you learned two ways to multiply numbers; the first was by memorizing a table that looked something like this:

![](https://www.activityshelter.com/wp-content/uploads/2016/06/times-table-1-12-for-kids.png)

Essentially, it’s just a dictionary mapping between a number, its multiplier, and the resulting product. A table is a nice way to look at the information, since a more traditional dictionary would look like this:

**1**:
- 1 ✕ 1 = 1
- 1 ✕ 2 = 2
- 1 ✕ 3 = 3
- 1 ✕ 4 = 4

… and so on. 

You memorized the table for the numbers 1-12[^2] so you could quickly recall the products when tested.

Now, if I asked you to multiply 250 ✕ 10, you’d probably be able to come up with the answer quickly. But you didn’t memorize a multiplication table from 1-250! You’re able to multiply large numbers because you learned a second way to do multiplication, which looked something like this:

![](https://www.wikihow.com/images/5/55/Multiply-Step-11-Version-3.jpg)

Using a simple set of rules (simple enough to teach to young children), you can multiply any two numbers together. And I mean any; while it might take a while, a 10-year-old can calculate 294,038 ✕ 9,203,989 (which is 2,706,322,517,582, by the way). If that 10-year-old had to look up the answer in a multiplication dictionary, they’d need a very large book.

Both a multiplication table and longhand multiplication are **functions**. The technical definition of a function is pretty simple: it’s a connection from one set of things (like words or numbers) to another set of things (like definitions or products). 

A dictionary is a  _discrete_ function: it connects a word to its definition. Discrete functions have limitations: If you looked up the word “quarfle" in an English dictionary, you’d come up empty-handed. Dictionaries don’t have an output for every word you might try to look up. Discrete functions don’t have an output for every input.

Multiplication, on the other hand, can handle any number you throw at it; it’s is a _continuous_ function. For anything that counts as a number (15, 0.25, 3/8ths, the square root of pi), you can multiply it by another number (or itself) and get a product.

## The evolution of functions

The continuous functions for adding, subtracting, multiplying, and dividing numbers have been known and used for a very long time. While we teach children to memorize multiplication tables, most people can do simple calculations in their head without needing to look up the results.

Over time, however, mathematicians and scientists discovered more complicated functions. Take, for example, the logarithm function discovered in the 17th century, which is used in calculating things like the loudness of a sound or the brightness of a star. Calculating a logarithm by hand is an arduous process - while it’s possible to boil it down to a combination of simpler operations, it takes a lot of time. Instead, mathematicians in the 17th century published books of pre-calculated logarithms, similar to multiplication tables.

These reference books (along with similar ones for trigonometric functions like sine, cosine, and tangent) were used by scientists and mathematicians for hundreds of years. Tools like slide rules were created to make it a bit easier to look up a logarithm, but the limitations remained: you couldn’t look up the logarithm of a number that wasn’t in your reference book or on your slide rule.

Then, in 1819, Charles Babbage began constructing prototypes of a machine that could perform complicated arithmetic for any whole number; he called it the _difference engine_, and it immediately caught the attention of scientists and engineers. Over the next 60 years, Babbage would design and build many influential prototypes of machines that could perform the continuous functions for many mathematical operations. His work, and that of his collaborator Ada Lovelace, formed the basis for the modern computer.

Babbage’s prototypes and their successors made huge tables of products, logarithms, and square roots obsolete. Computers made it possible to skip the process of calculating and publishing discrete functions; it made continuous functions available to the end user directly.

## How functions work in design systems

Now, back to design systems. I hope you’ll see how the metaphor of discrete and continuous functions applies: as design systems get bigger and more complicated, their reference manuals are also getting more unwieldy. Meanwhile, new technology (well, old technology being used in new ways - nothing like the invention of the computer) can skip the steps of manually computing the values for a part of the system.

Take Material Design’s color palettes, for example. Version 2 of Material Design had a dictionary of colors that you could reference. The set of reds looked like this:

**Red**
- 50: #FFEBEE
- 100: #FFCDD2
- 200: #EF9A9A
- 300: #E57373
- ...etc.

There were 240 colors available; it was up to the end user to select the correct colors for their use case.

In version 3 of Material Design, these color tables are nowhere to be found. They’re replaced, instead, by what Google calls **dynamic color**. Dynamic color is a continuous function that takes a single input color and returns a set of 46 labeled colors (that is, design tokens) that are ready to plug into a Material Design component. The guesswork of which colors to use is gone; the dynamic color function creates the colors to satisfy accessibility and usability criteria, taking much of the guesswork out of the end user’s hands.

The dynamic color function is _continuous_, where Material Design v2’s color tables were _discrete_. Dynamic color can turn any input color into a color palette, allowing for far greater customization and differentiation between apps.

Adobe has taken a similar approach to the colors in their design system, Spectrum. Its concept of “adaptive color” is essentially a function that generates a set of colors at specific contrast ratios from two inputs: a “key color” — the hue basis for the color palettes — and a “base color” — the background color used for calculating contrast ratio. Like Material Design v3, the output of the function is a set of discrete colors, but the input can be any possible color, meaning the system can be customized to a huge number of applications.

### Writing a design system function

The color functions in Material Design and Spectrum are a little cryptic, since they involve a lot of calculation behind the scenes. So to understand functions better, let’s look at a simpler function that is commonly manually computed in design systems: font size.

In 2010, Tim Brown introduced the concept of a **modular scale** to the audience at the Build conference. A modular scale is a discrete function that scales font sizes so that as text grows larger, the proportion between the sizes remains the same; it takes a base size and a ratio, then returns a series of font sizes that can be used. Since then, through websites like the eponymous [modularscale.com](https://www.modularscale.com), designers have been able to use discrete, pre-computed values in their systems.

However, the process of implementing a type scale across many text styles is complicated. A header should be much smaller on a phone than it is on a TV, so designers and engineers write media queries to re-define text sizes for each screen size.  The process gets even harder when introducing user-defined customizations and variations for different font families. 

To solve this challenge, we can implement a continuous function for type size. And thanks to recent additions to the W3C’s CSS specification, it’s possible to do this directly in a browser, with no javascript or server-side scripting.

The first ingredient is the `vw` and `vh` units; these are css units that represent 1/100th of the browser’s width or height, respectively.[^3] This gives us a value that will be small on small screens and large on large screens.

The second ingredient is the `calc()` function. `calc()` allows us to add, subtract, multiply and divide units of length together on the fly.

The last ingredient is the `max()`, `min()`, and `clamp()` functions. `max()` picks the larger of two values, `min()` picks the smaller of two values, and `clamp()` defines a minimum _and_ a maximum, keeping the value between the two extremes.

Putting it all together, we can design a function to achieve a set of desired properties. Say I wanted to the size of my text to be no smaller than 16px on small screens and no larger than 24px on large screens. The following line of code does that:

```css
--dynamic-font-size: clamp(16px, calc(1vw + 12px), 24px); 
```

On an 800-pixel wide screen, the `calc(1vw + 12px)` part of our code evaluates to 22px (at 800px wide, 1vw is equal to 8px, plus 12px equals 22px). Since that is between the lower bound of 16px and the upper bound of 24px set by the `clamp()` function, the entire custom property is defined as 22px.

On a 375-pixel wide screen, the `calc(1v + 12px)` part of our code evaluates to 15.75px.  Since that’s below the 16px lower bound set in `clamp()`, the custom property is defined as 16px.

On a 1400px wide screen, `calc(1v + 12px)` evaluates to 26px. That’s larger than 24px, so the property is defined as 24px.

Altogether, this one line of code replaces the dozen or so that would have been required to do the same with discrete media queries. And it has the bonus of being continuous when the screen is between 400px and 1200px wide; the font size is adjusted smoothly for every possible value.

## Implementing functions in design systems

Similar to the change from a dictionary of logarithms to the electronic calculator, using functions in design system requires a slightly different set of tools than using discrete, pre-computed values.

There are a few ways to implement a function in your design system. The first is (as we explored in the previous section) to take advantage of features of the language you’re working in. This works for applications with a small set of target platforms; a web app can use CSS functions like `calc()`, `clamp()`, and upcoming functions like `color()` and `mix()`. Or, if the app is using javascript, it can take advantage of libraries like [chroma.js](https://gka.github.io/chroma.js/) or [Typetura](https://typetura.com) to provide functions to the design system.

Another other way to implement functions in a design system is with a **[design api](https://matthewstrom.com/writing/design-apis/)**. In short, a design api is a way for an application (like this website) to interact with a design system to set or retrieve design decisions (like tokens). A design API allows the application requesting a token to work independently of the application that defines the token.

In the case of a function, the design system application can handle the computation and formatting of a given token according to a function. The application that is rendering a design would simply request the token, providing any information the system needs to calculate it. Material Design, for example, might send a `GET` request to `https://material.design/api/color?token=md.sys.color.secondary&primaryColor=#6750A4`, and receive some json back like `{name: 'md.sys.color.secondary', value: '#625B71'}`. 


[^1]:	[https://www.lightningdesignsystem.com/design-tokens/](https://www.lightningdesignsystem.com/design-tokens/)

[^2]:	Why 12? I’ve never thought about this before, but it’s an awfully strange place to stop.

[^3]:	We can also use the fancier `vmax` and `vmin` units, which reflect whichever of `vw` and `vh` are largest or smallest.