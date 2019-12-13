---
title: Product Thinking is a Lifeline for Struggling Design Systems
og:
  title: Product Thinking is a Lifeline for Struggling Design Systems
  description: Treat your design system like a standalone product and watch it grow
  image: /images/product-thinking-1.jpg
  image_width: 1600
  image_height: 988
date: 2019-12-12
tags: [product, design systems]
---

![](/images/product-thinking-1.jpg)

Here’s a common problem: a design team creates a design system. They craft beautiful documentation, crystal-clear guidelines, and meticulously organized files. But the design system never gains traction. Engineers don’t use it, and other designers quickly stop maintaining it. It fails to deliver the outcomes described in myriad case studies, blog posts, and conference talks.

This has happened to me. If you’re a designer, it’s probably happened to you.

The ubiquity of design systems is a double-edged sword. On one hand, designers have many examples to justify the need for a design system. On the other hand, it’s easy to take design systems for granted. Design systems often fail because we — their creators — don’t treat them like products.

Using ideas and tools from product development, we can revive a struggling design system.


## Idea 1: Market analysis

When building a new product, product managers often conduct something called market analysis. The goal of market analysis is to understand the opportunity at hand. Market analysis tries to answer the following questions:

*   How many people use products like this today?
*   How many people could potentially use this product in the future?
*   What kinds of people use this product?
*   What are the competitors in this market today?
*   What will prevent a competitor from entering the market in the future?

Doing market analysis helps product makers plan. If the market is large and relatively free of competition, it might make sense to go fast and take risks. If the market is smaller and more crowded, success might follow a slower, more careful path.

Some markets are challenging to analyze. But if you’re working on a struggling design system, market analysis is relatively straightforward. Here are the questions you need to answer:


### 1. Is anyone at your company using a competing design system?

If your company is small — fewer than 100 people — you can likely answer this question without any research. If your company is larger, do a quick round of investigating. A competing design system might be a formal, previous iteration in Sketch or Figma projects. It might be components from an external library like Material UI or Bootstrap used by developers.


### 2. How many people at your company could benefit from using your design system?

Think big. Design systems aren’t just helpful to designers and developers; product managers, executive stakeholders, marketers, and strategists can all benefit from understanding your product through the lens of a design system. The key concept here is a _[total addressable market](https://blog.hubspot.com/marketing/total-addressable-market)_ — this is an aspirational number, a long-term horizon for the success of the design system.


### 3. What kinds of people at your company might use your design system?

Identify the categories of potential users. This is what’s called _market segmentation,_ the process of dividing potential customers into groups. Your market segmentation might comprise front-end developers, designers, and content strategists. If you’re focused more narrowly on developers, your segmentation might consist of web, iOS, and Android developers.


### 4. If anyone is using a competing design system today, what is it? What does it do well? What does it do poorly?

Having a competitor to study is a valuable opportunity. Survey the people at your company who use a design system and ask them about the strengths and weaknesses of the system. This information will not only help you build a better system, but will also define your _market position,_ or the way you present your system as a superior alternative.

A market analysis using these four questions serves as a foundation for the other decisions you’ll make. The size of your market gives you indications of the right effort to put into reviving the system; competitive analysis helps you learn from existing use cases; segmentation allows you to create and position your design system’s components in a consistent manner.


## Idea 2: Jobs to be Done

“Jobs to be Done” is a framework developed by leaders like Tony Ulwick and Clayton Christiansen to address a fundamental question in product development: how do you build something that customers want? The Jobs to be Done approach starts with a straightforward mission: build something that helps users achieve a meaningful outcome. The simplest illustration of this approach is a quote popularized by Theodore Levitt: “People don't want to buy a quarter-inch drill. They want a quarter-inch hole!” Jobs to be Done says that people only buy a drill because it helps them make a hole. “Make a hole” is the job that a customer asks — “hires,” in Jobs-to-be-Done parlance — the drill to do.

What jobs could your design system do for the people who use it (the people you identified in your market analysis)? What do they currently use to do those jobs instead? When working on your design system, write down some of these jobs and consider if your product is going to be hired or not. Here are some examples of jobs your design system might do:

*   Make a date picker appear on the page
*   Decide which fonts and colors to use
*   Keep the accessibility of the search page high

Think about what a user might reach for to do these jobs. Keep in mind that users sometimes choose to use nothing at all — this is a key concept in Clayton Christensen’s book on Jobs to be Done, _Competing Against Luck: The Story of Innovation and Customer Choice_. Think of an Egg McMuffin from McDonald’s; not only does it compete against the breakfast burrito from Taco Bell and the donut from Dunkin’, it also has to be more appealing than _not eating breakfast at all._ In my case, I’d rather not eat.

Nothing at all is usually a design system’s biggest competitor. When an engineer is writing code for a new feature, or when a designer is proposing an update to a workflow, often they’ll start from scratch. Another possible tool to hire is copying and pasting; developers might copy a component from a popular open-source library, whereas designers might see how another designer solved the problem by searching on Dribbble.

For your design system to succeed, it has to be better at users’ jobs than nothing at all, along with any other existing tools, even if they don’t look like design systems at all.


## Idea 3: Data-driven product development

Data is the defining tool of modern management. The more data a manager can utilize, the better their decisions are — at least, that’s the theory. In [“Big Data: The Management Revolution](https://hbr.org/2012/10/big-data-the-management-revolution),” Andrew McAfee and Erik Brynjolfsson write that “data … allows more-accurate predictions, better decisions, and precise interventions, and can enable these things at seemingly limitless scale.” The authors provide examples of what they consider a “fundamental transformation of the economy,” predicting that “almost no sphere of business activity will remain untouched by this movement.”

If this prognosis is correct, we should expect data to drive better outcomes for design systems as well.

To improve your design system, start by collecting baseline data on how many people at your company are using it. You can get lots of insight from a survey: the [Single Ease Question](https://measuringu.com/seq10/) alone can inform your product strategy just as well as more sophisticated survey techniques.

Going further, you can define usability metrics to measure your progress over time. Google’s HEART framework is a great way to track important data related to five high-level attributes:


### Happiness

How satisfied are your design system’s users? Similar to the single ease question, a simple survey of satisfaction with the design system can give you a consistent way of understanding the very highest level of success.


### Engagement

How frequently is your design system used? One way to measure engagement is to track the number of times the design system is referenced in your team’s code base. Another engagement metric might be the number of updates done to design system files, tracked via version history in Dropbox or Abstract.


### Adoption

How many designers, developers, product managers, and content strategists used your design system for the first time this week? If you’ve analyzed the total addressable market for your design system, you should have a good sense of how well you’re doing.


### Retention

Once your design system is adopted, does it tend to stick around? Do your teammates often abandon the system after initial trials? Measuring retention in your design system can be tricky; using the [Design System Analytics](https://www.figma.com/blog/introducing-design-system-analytics/) features in Figma, you might track retention by seeing how often a symbol is detached from its parent. Github or NPM can provide data on how frequently your design system’s code is re-used. Keeping an eye on data like this will tell you how well the system satisfies your team’s Jobs to be Done.


### Task success

How easy is it to do basic tasks with your design system? If you have online documentation, you can use web analytics tools to measure how long it takes your team to find common components or specifications. Task success is helpful to compare to happiness; it’s possible that you have one or two users who are very content, but most of the team has difficulty using the system.

Identifying and regularly reviewing your design system’s HEART metrics will help you make progress towards your team’s full investment. Gathering this kind of data currently requires some assembly, but with new developments in design system analytics, data about your design system will soon be much easier to track and analyze. And with the competitive nature of the design tool marketplace, I imagine that Figma’s first steps will soon find comparable features in Sketch, Adobe XD, Framer, Abstract, Invision, and Zeplin.


## Conclusion

It’s easy to take design systems for granted. The ubiquity and popularity of design systems sometimes dooms them to fail to achieve the outcomes that many designers expect. But by applying product thinking, you can avoid this fate and help your design system take root. 

Through the lenses of market analysis, Jobs to be Done, and data-driven decision making, a design system is just like any other product, and just like any other product, it can be tailored to be a success.
