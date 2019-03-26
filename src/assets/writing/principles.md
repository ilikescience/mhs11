---
title:  "What makes a good design principle?"
date: 2017-11-14
tags: writing
---

Like many design teams, the Wall Street Journal team has been thinking through our design principles. Writing design principles comes pretty naturally (especially if you read this [excellent list by Jeremy Keith](https://principles.adactio.com/)). As we collaborate, we end up with a lot of candidates. However, it's unclear what exactly a _good_ design principle is.

To that end, here's a set of criteria I've been working with:

### Good design principles are memorable.
What good is a design principle if it’s hard to internalize?

✓ **“Good design is as little design as possible”** - [Dieter Rams](https://www.vitsoe.com/us/about/good-design)  
✕ **“Design with an intention to conserve effort and produce as little material output as is necessary to accomplish your goals”** - Go home, drunk Dieter Rams

### Good design principles help you say no.
You should be able to use your design principles to prioritize and focus.

✓ **“One primary action per screen”** - [Joshua Porter](http://bokardo.com/principles-of-user-interface-design/)  
✕ **“Keep the number of actions per screen to a minimum”** - It's hard to say 'no' to a vague measure like 'a minimum.'

### Good design principles aren’t truisms.
A good test of truism is the **reversibility test.**[^1] A principle passes the test if the opposite of that principle is something a reasonable person might believe.

✓ **“Don’t solve every edge case”** - Look at the opposite: “Solve every edge case.” It’s reasonable for a design organization to take this opposite approach.  
✕ **“Make users happy”** - The opposite is: “Make users unhappy.” Nobody in their right mind would think that was a good design principle; thus, “Make users happy” is a truism.  

### Good design principles are applicable.
They should give everyone on the team ideas of how to best practice them, and they shouldn’t be specific to one particular platform or discipline.

✓ **“Solicit and respect user feedback”** - For any given product (native, web, off-platform) or discipline (ui, ux), it's possible to get user feedback.  
✕ **“Use an 8 pixel grid”** - this is only applicable to screens, and only applicable to ui, and it’s not immediately obvious what exactly an 8-pixel grid is.

## A shortcut to good principles: Even Over statements

Some years ago, I was introduced to the [Even Over](http://futureofwork.nobl.io/future-of-work/how-to-distill-a-strategy-into-simple-rules-of-thumb-for-busy-teams) statement by some close friends and collaborators[^2]. Even Over statements are constructed as follows:

**(Choice A) even over (Choice B)**

"Tastiness even over healthiness" is an example of an Even Over statement that might help you choose what to eat.

"Durability even over style" is an Even Over statement that might help you shop at Ikea.

Both of these Even Over statements pass the **truism test**. Lots of folks choose their furniture based on style, not durability (and pay more for it!); even more folks choose healthiness over tastiness.

Some general design principles that are formatted as Even Over statements:

- Accessibility even over aesthetics
- Platform conventions even over cross-platform consistency
- User preference even over business preference

As we continue to refine our principles at WSJ, I hope to use Even Over statements, along with the criteria above, as tools to quickly get to a working foundation.

[^1]: The reversibility test has been shared and adapted by many folks, so credit goes to [Jared Spool, Cennydd Bowles, and Jeremy Keith](https://twitter.com/Cennydd/status/809553086322737152).

[^2]: Jordan Husney recently wrote [an excellent blog post](https://focus.parabol.co/strategic-prioritization-using-even-over-statements-fb63e78e7b4d) about using Even Over statements to prioritize product work.
