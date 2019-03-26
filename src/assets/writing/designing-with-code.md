---
title: Designing With Code
tags: [design, code]
og:
  title: Designing With Code
  description: Two cases for code as a design tool
  image: /images/code-0.jpg
  image_width: 1200 
  image_height: 600
date: 2018-08-31
---

![](/images/code-0.jpg)

We're in the middle of a design tool renaissance. In the 8 years since Sketch 1.0 was released, there's been a wave of competition among traditional design tools. And as the number of tools available to designers grows exponentially, ideas that were once considered fringe are finding a broader audience. 

One of these ideas will significantly change the way digital products are designed: integrating design and code at a deep level. Figma can update a React code base in real time; InVision, Abstract, and Zeplin have done away with design-developer handoff documents; Framer's new Framer X can render interactive React components directly into its workspace. These examples are just a hint of what's to come.

For designers like me who enjoy coding, this revolution was inevitable. My own work is shaped by my knowledge of CSS, HTML, and Javascript. But for me — and many other designers — design usually comes before code. Rarely (if ever) does it happen the other way around.

Recently I've had a few opportunities to use code to create design. In two of my bigger projects at The Wall Street Journal, writing code has led to new ideas. Problems that typically plague early designs — e.g. “how does this look with real content?” — are easy to solve. By exploring visual ideas directly in code, I've started to see the amazing potential of code as a design tool.

# Case 1: WSJ. Magazine

I started at The Wall Street Journal in August of 2017. One of the first projects I began was the re-design of the WSJ. Magazine homepage.

WSJ. Magazine is a premium fashion, art, and lifestyle magazine. The content is first-rate: regular features on film and tv celebrities, the biggest names in fashion and art, and trend-setting food and culture. Until this re-design, the magazine had no presence of its own online.

## Designing, the old way

As my initial ideas took shape in Sketch, I was using a mouse pointer to draw rectangles full of text and images. Pixel perfection was easy and rewarding, and I had the luxury of millions of tiny adjustments. I fussed over whether 10 pixels is too much space for a gutter, or if 14-point type is too small for a byline. I did designer stuff.

![My first pass at the WSJ. Magazine Homepage](/images/code-1.jpg)

I filled the whole page with these small, rectangular pieces. Everything was aligned to a grid. I was subconsciously selecting photography and headlines that suited my very space-conscious tendencies, and ignoring the content that upset the balance.

![While still progressing, my design was stuck in rectangles](/images/code-2.jpg)

This way of designing should be familiar to anyone who's used Sketch, Adobe Illustrator, Photoshop, or even newer products like Inivision Studio or Framer. It's the status quo of product design.

## Breaking the grid

One weekend, I decided it'd be fun to prototype my design ideas in code (and it was!). The symbol system I'd set up in Sketch was starting to slow under the weight of all the content, and I figured a browser might perform better. Also, I’d been wanting to try out the new css grid specifications, and hone my growing experience with flexbox.

After a few hours, things were _almost_ perfect. I put my computer down, intending to come back later to put the finishing touches on the prototype.

![My imperfect, but ultimately more unique, prototype](/images/code-3.jpg)

The next time I opened the project, I was struck by how much better the page looked in its unfinished state. I was seeing it through a traditional design lens: because it didn't match the Sketch file, it was incomplete.

The areas for the stories didn't adhere to a strict grid. There was asymmetrical and unusual space around the elements, and a ragged edge was drawing my focus. But the more time I spent with the code, the more ways I found to experiment. Eventually, rather than fiddling with the exact pixels, I was taking screen shots from my browser and pasting them back into Sketch.

![Instead of filling all the available space, I started letting images display at their native resolution](/images/code-4.jpg)

## Happy accidents

In my inexperience, I neglected to write media queries to indicate how the page should adapt to small screens. As a result, stories overflowed the edge of the browser, requiring a user to swipe across the page to see more content.

Bob Ross was right: we don't make mistakes, we have happy accidents.

![Scrolling elements that overflow the page](/images/code-5.gif)

This “accident” felt exciting and new. In Sketch, I work with static screens full of an infinite canvas, so overflow just doesn’t happen — everything is always on the virtual table. However, swiping left and right is a comfortable navigation pattern on small touchscreen devices (thanks Tinder), especially if content is obviously falling out of frame. Without seeing this happen in a browser on my phone, I might never have thought to try it.

# Case 2: A new homepage for WSJ.com

The homepage of WSJ.com is one of the most important parts of the Wall Street Journal's web product. It's hard to overstate this: in an average month, the WSJ.com homepage is seen tens of millions of times by millions of people. Over the summer of 2018, I began to completely re-build the design language of the WSJ.com homepage. Naturally, I felt overwhelmed. Where should I start? 

In taking stock of the work to be done, I realized that one component — the story card that links to each article — accounts for 80% of the page. With that in mind, I set out to create a simple, flexible system that could unify the 100+ stories on the homepage.

## Background: Story cards

The current WSJ.com homepage was built in 2014. During that project, the engineering team decided to take a risk on a new piece of technology from Facebook called React. Building with React meant having extremely configurable components; stories could be displayed in a huge variety of ways, depending on a host of variables.

![A card component from the current home page](/images/code-6.jpg)

As new card configurations were designed and developed, they were named and categorized; "LS-LEAD" was followed by "LS-LEAD-NO-IMAGE" and "LS-LEAD-ALT," and layouts like "SPOTLIGHT-SEVEN" were built with these components.

![A layout variation of the current home page](/images/code-7.jpg)

As more layers were built up on top of the story cards, the low-level concepts — headline size, media position, timestamps and related stories — were abstracted away in favor of coarser, bigger-picture changes. Editors could make major changes to the layout of the page by updating 1 value instead of 100.

## Taking it down to the studs

Right away, I again found Sketch to be lacking. In preparing for user testing, I spent more time copying and pasting content than actually designing. Ideally, I wanted to provide a list of stories to my designs, and have the page rendered with the content of those stories, with as little tweaking as possible.

So again, one weekend, I rolled up my sleeves and built (from scratch!) a terribly inefficient application that would render a version of the WSJ homepage in HTML and CSS.

![An updated homepage layout using my new card component system](/images/code-8.jpg)

In the process, I exposed the low-level configurations of individual story cards. Tweaking them was **fun.** It was **unpredictable.** It was everything that pixel perfection in Sketch was not.

I could send a story into a component with some options like this:

```json
{
  "headline": {
    "size": "l"
  },
  "byline": false,
  "media": false,
  "bullets": false
}
```

And get a card back that looked like this:

![A variation of a story card with a standard headline, but no image](/images/code-9.jpg)

But if I changed those parameters slightly, I could render a completely different variation in less than 60 seconds:

![A variation of a story card with a centered headline and an image](/images/code-10.jpg)

## Design by multiplication

In my simple prototype, there are **26 configurable features** for each article card. That means, for just one story, there are **well over 1,000,000 possible cards** (truly, closer to 60 million)! Managing this system in Sketch would be an unmaintainable nightmare.

![Ten of the possible millions of variations of a single card](/images/code-11.jpg)

But in code, this component is roughly 300 lines between CSS and HTML. A tiny bit of NodeJS fills in the cards with live data from the WSJ.com home page. I can make small changes to parts of the component and see how the system reacts in a matter of seconds. This multiplicative process means that small changes have a huge output, making my designs much more comprehensive in the process.[^1]

# Conclusion

As new design software begins to emerge, code will be a central part of the tools available to designers. But don't wait for a Framer X invite — or whatever new beta program comes next. You can get started using code as a design tool now. Here's some recommendations for ways to start exploring:

- Wes Bos has some [fantastic courses](https://wesbos.com/courses/) on CSS and Javascript, including an intro to React and Node. His classes revolve around fun projects, and his style of teaching is highly entertaining.
- Daniel Schiffman has a [ton of great videos](https://shiffman.net/videos/) on creative coding. The way he demonstrates his process — thinking through problems and working out solutions — and revels in what he makes is earnest and delightful.
- [Codecademy](https://www.codecademy.com/learn/paths/web-development) has very thorough courses and interactive lessons. I've occasionally gone back and done their intro series on Javascript just to brush up.

There's also a vibrant community of engineers and designers on twitter who have inspired me to use code as a design tool. If you find yourself coding to design, feel free to say hi; I'm [@ilikescience](https://twitter.com/ilikescience).

[^1]: I want to dig into this process more in a future essay, but for now I'd suggest reading Jon Gold's excellent [Declarative Design Tools](https://jon.gold/2016/06/declarative-design-tools/)
