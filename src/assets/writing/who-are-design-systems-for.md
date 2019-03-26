---
title: Who Are Design Systems For?
tags: [design systems, design]
og:
  title: Who Are Design Systems For?
  description: Design Systems aren't just for designers anymore.
  image: /images/default.png
  image_width: 750 
  image_height: 420
date: 2018-12-14
---

I've spent the past few days feeling an immense amount of FOMO. A major design conference called Clarity happened here in New York, and my twitter feed has been full of pictures and quotes from the very talented and articulate speakers. Lesson learned: go to more conferences. To help process some of my regret, I want to pick out a particular thread that I saw frequently amplified and repeated by the attendees of the conference: not the Why, What, or How of design systems, but the Who.

Who are design systems for?

## Design systems are for designers

[Laura Hahn](https://twitter.com/lauradhahn) recently said something that I think is an important — and unspoken — truth in product design. It went something like this:

> "The worst use of your time is in Sketch, especially if you start with File → New."

There's a whole essay (or a book) in that one statement, which I'll patiently wait for Laura to write. For now, I'll only add that this is why design systems are for designers.

A common set of guidelines, principles, components, sketch files, abstract libraries, data sets, plugins, and integrations means less time in Sketch, Figma, XD, Studio, and Framer.

Less time in design tools can mean one of two things:

1. Ship more, faster
2. Ship less, better

Depending on the needs of your team, both outcomes can be valuable. Both are only possible with a design system.

## Design systems are for developers

Straight from [Dan Mall](https://twitter.com/danmall)'s presentation at Clarity:

!['Design systems are for developers.' - photo by [Nelly Hempel](https://twitter.com/Hejnelly_)](https://pbs.twimg.com/media/DuOuaMFWoAAHIcv.jpg)

By many measures, one of the most successful design systems is [Bootstrap](https://getbootstrap.com/).[^1] It's so ubiquitous that there is an entire canon of blog posts on why not to use it. It is first and foremost a coding framework — good design is just one feature, not the whole product.  It has been successful (and so long-lived) because it **makes developers' jobs easier**. 

Design systems have three benefits for developers:

**Efficiency**: Design systems enable developers to re-use the code that delivers the most common front-end components in their application.

**Quality**: Design systems provide parity between the plan and the final product, making QA checks faster and more successful

**Simplicity**: Design systems handle the complexity of delivering code by organizing and abstracting low-level problems. It's much easier to work with syntactically simple code like `{Button}` than the underlying HTML, CSS, and JS.

## Design systems are for users

Another picture from [Adekunle Oduye](https://twitter.com/adekunleoduye)'s presentation at Clarity:

!['A design system doesn't exist until it's in code' - photo by [Nicolette Tran](https://twitter.com/designicolette) ](https://pbs.twimg.com/media/DuKOjHmX4AExTeq?format=jpg&name=small)

[Julie Horvath](https://twitter.com/nrrrdcore) takes this one step further:

> "A design system doesn't exist until it's in production."[^2]

Ultimately, the users of our applications are the ones who decide whether our design system is a success or a failure. All of the design consistency and developer efficiency in the world doesn't matter if the end product can't keep you employed.

Unfortunately, this means that sometimes, design systems aren't the solution. Theodore Levitt's famous quote serves us well:

> "People don't want to buy a quarter-inch drill, they want a quarter-inch hole."

Design systems are toolboxes, full of drills and saws and hammers and wrenches. When building your own, make sure you don't forget that they're just tools.

## Design systems are for the children

<div>
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/XuxXSw_4R_c' frameborder='0' allowfullscreen></iframe></div>
</div>

ODB said it best.

## Design systems are for everybody

To end on a serious note: design systems often fail to include many of the people who would benefit from them. When working on design systems, thinking about design systems, or writing about design systems, try to expand your understand of who will benefit. Consider the end users first, and figure out the rest as you go.

[^1]: Material design has taken top billing in recent years, but Bootstrap has probably been used by more engineers.

[^2]: <https://twitter.com/keymholio/status/1073051533644890113>