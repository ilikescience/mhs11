---
title: Responsive Roadmaps
tags:
  - product
  - process
og:
  title: Responsive Roadmaps
  description: How to chart a course through uncertainty
  image: /images/recipe-0.jpg
  image_width: 1400 
  image_height: 933
date: 2019-05-07
---

Shane Parrish's essay [_The Map is Not the Territory_](https://fs.blog/2015/11/map-and-territory/) begins:

> The map of reality is not reality. Even the best maps are imperfect. That’s because they are reductions of what they represent.

The same is true for product roadmaps. Understanding and applying Parrish's mental model is the key to designing a more usable, more maintainable, and more accurate roadmap.

## **What maps miss**

Returning to Parish's quote: "[Maps are] reductions of what they represent." Map makers have choices when reducing the information they are representing. Take a map of the earth's surface, for example:

![The Mercator Projection](/images/maps-0.jpg)

**The Mercator projection** keeps information about straight lines of travel, but reduces information about areas of land. As a result, the map works great for ocean navigation, but grossly distorts the actual size of the continents[^1].

![The Robinson Projection](/images/maps-1.jpg)

[^1]: My favorite tool for un-learning the biases of the Mercator Projection is the website [The True Size Of](https://thetruesize.com/#?borders=1~!MTY5MjMxNzk.MjI1MTQwMQ*MzM0ODUzMjI(NDAwNjgwNw~!CONTIGUOUS_US*MTAwMjQwNzU.MjUwMjM1MTc(MTc1)MA~!IN*NTI2NDA1MQ.Nzg2MzQyMQ)MQ~!CN*OTkyMTY5Nw.NzMxNDcwNQ(MjI1)Mg). The default view — showing that the area of China, India, and the contiguous US all fit within the landmass of Africa — is stunning.

**The Robinson projection** keeps information about the general shape, size, and location of the continents, but reduces the accuracy of measurements over long distances. This results in a map that's great for teaching children about geography, but would be useless as a navigational aid.

Product roadmaps are reductions, too. Roadmaps reduce product strategy down to a very digestible (and very power-pointable) format. In doing so, roadmap-makers ask questions: who will be using this map? Is it for education, or navigation? Which information should be preserved, and which can be distorted?

## What traditional roadmaps miss

![A modern roadmap in Gantt chart format](/images/maps-2.jpg)

Most modern product roadmaps look like this: One axis is time, the other is goals. Each goal is painted across a span of time, representing when the goal is to be achieved.

This format, called a Gantt chart, was invented more than 100 years ago. By visualizing complicated processes over long periods of time, Gantt charts enabled factory managers to identify and eliminate inefficiency.

![How a Gantt chart looked 100 years ago](/images/maps-3.jpg)

The measurement-driven approach to work (sometimes called _scientific management_ or _Taylorism_) was a major innovation during the second industrial revolution. Precise planning and management enabled workers to understand and control the intricacies of mass manufacturing.

Over the past century, the nature of work has changed for most people. Instead of overseeing assembly lines of human-operated machines with interchangeable parts, most managers oversee cross-functional teams comprising knowledge workers and specialized technicians.

But we still use Gantt charts. We think our roadmap looks like this:

![A tidy (but naive) roadmap](/images/maps-4.jpg)

When in reality, it looks like this:

![An ugly (but realistic) roadmap](/images/maps-5.jpg)