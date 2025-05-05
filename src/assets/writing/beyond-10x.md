---
title: Beyond 10×
date: 2021-11-01
og:
    title: Beyond 10×
    description: Unlocking impact through design systems and automation
    image: /images/beyond10x.jpg
    image_width: 2880
    image_height: 1800
---

In the January 1968 issue of computer science trade magazine _Communications of the ACM_, a paper appeared under the unassuming title “Exploratory experimental studies comparing online and offline programming performance.” “Programming is a multibillion dollar industry,” the paper begins, but given just how much money is spent on on their salaries, nobody had yet bothered to study how programmers work. So the authors broke new ground, creating a set of experiments to measure programmer productivity. Across different skill levels, years of experience, and task types, they found “large individual differences between high and low performers.” The differences were as large as “an order of magnitude”—that is, the most effective programmers were 10 times more productive than the least effective ones.[^1]

The myth of the 10&times; programmer was born.

The Communications of the ACM paper was widely cited and spread, most notably in Fredrick Brooks’ The Mythical Man-Month. From there, it was re-interpreted and re-hashed. An [infamous example from 2019](https://twitter.com/skirani/status/1149302838746464256) is a Twitter thread describing a 10&times; programmer as someone who:

1. Hates meetings
2. Works irregular hours
3. Uses a dark theme for their IDE
4. Rarely looks at help documentation
5. Etc.

The thread was swiftly parodied mercilessly. What made the parodies hit home, though, is self-awareness: we all want to be the 10&times; programmer. Or the 10&times; designer. Or the 10&times; product manager. I definitely want to be a 10&times; design leader ! Maybe then I’d get my annual reviews done without an extra weekend of work. It’d make the case for a promotion or a raise much easier; maybe I’d get invited to speak at more conferences, or be given a bigger budget, or more headcount.

I don’t think that a 1,000% increase in productivity is outrageous. It’s just a matter of looking at the problem a little differently, applying some sound (but clever) technology, and looking for the markers of a good feedback loop. In fact, with the right approach, 10&times; is just the start.

## 10&times; what?

First of all, let’s get something straight: no software product is built by a single person. It doesn’t matter if they’re a 10, 100, or 1,000x-er. Modern software is complex. It comprises rich features, complicated user flows, and elaborate technical systems, all coming together seamlessly. Teams, sometimes teams of teams, come together to build software by combining expertise from design, research, UI, software architecture, QA, and more. So, if we are going to consider any huge leaps in the efficiency of producing software, we have to think about the efficiency of the team.

Second, a key to unlocking productivity is to shift focus away from output and towards outcomes. One of my favorite anecdotes about this shift comes from Andy Hertzfeld: In 1982, a team at Apple was working on Lisa, the often-forgotten predecessor to the Macintosh. “Some of the managers decided,” Andy explains, “to track the progress of each individual engineer in terms of the amount of code that they wrote.” Every Friday, the programmers would submit a form recording how much code they wrote that week. The designer of the user interface, Bill Atkinson, was a prolific contributor to the codebase; one week, he completely re-wrote his UI code to be faster and more efficient, resulting in a 6x performance improvement. His rewrite also happened to be 2,000 lines shorter than the original. When filling out his productivity report for the week, he stopped at the part about lines of code. “He thought about it for a second,” Hertzfeld writes, “and then wrote in the number: -2000. I'm not sure how the managers reacted to that, but I do know that after a couple more weeks, they stopped asking Bill to fill out the form, and he gladly complied.”[^2]

The key insight is this: **what matters is your team’s outcomes, not the raw amount of work they do**. Bill Atkinson’s contributions were reflected in the performance of his code and the innovativeness of his interface, not in the number of lines of code he wrote. Similarly, your team’s value is in the great things they enable your users, customers, and business stakeholders to achieve.

## Moving over the line

Let’s take a look at some common tasks for a software development team, in terms of effort—how much time and energy the task takes—and outcome—the value that the task produces for users and stakeholders.

<svg viewbox="0 0 1000 1000">
     <style>
          .axis-text {
               fill: var(--c--gray-200);
          }
          .label-text {
               fill: var(--c--theme-fg);
          }
     </style>
     <!-- axes -->
     <line x1="500" y1="0" x2="500" y2="1000" stroke="var(--c--gray-500)" stroke-width="0.1"></line>
     <line x1="0" y1="500" x2="1000" y2="500" stroke="var(--c--gray-500)" stroke-width="0.1"></line>
     <!-- axis labels -->
     <text transform="rotate(-90) translate(-230 480)" font-size="25" class="axis-text">High Value Outcome</text>
     <text transform="rotate(-90) translate(-990 480)" font-size="25" class="axis-text">Low Value Outcome</text>
     <text transform="translate(0 480)" font-size="25" class="axis-text">Low effort</text>
     <text transform="translate(880 480)" font-size="25" class="axis-text">High effort</text>
     <!-- data points -->
     <g transform="translate(100 300)">
          <text font-size="25" class="label-text">
               <tspan>Enforcing accessible</tspan>
               <tspan x="0" y="25">color combinations</tspan>
          </text>
          <circle cx=250 cy=-7.5 r=10 fill="#F2C94C"></circle>
     </g>
     <g transform="translate(700 80)">
          <text font-size="25" class="label-text">
               <tspan>Internationalization</tspan>
          </text>
          <circle cx=230 cy=-7.5 r=10 fill="#9B51E0"></circle>
     </g>
     <g transform="translate(550 150)">
          <text font-size="25" class="label-text">
               <tspan>Creating automated</tspan>
               <tspan x="0" y="25">accessibility tests</tspan>
          </text>
          <circle cx=240 cy=-7.5 r=10 fill="#9B51E0"></circle>
     </g>
     <g transform="translate(630 240)">
          <text font-size="25" class="label-text">
               <tspan>Qualitative user research</tspan>
          </text>
          <circle cx=285 cy=-7.5 r=10 fill="#9B51E0"></circle>
     </g>
     <g transform="translate(600 300)">
          <text font-size="25" class="label-text">
               <tspan>Multivariate testing</tspan>
          </text>
          <circle cx=230 cy=-7.5 r=10 fill="#9B51E0"></circle>
     </g>
     <g transform="translate(550 400)">
          <text font-size="25" class="label-text">
               <tspan>Building a custom</tspan>
               <tspan x="0" y="25">design system</tspan>
          </text>
          <circle cx=220 cy=-7.5 r=10 fill="#9B51E0"></circle>
     </g>
     <g transform="translate(50 550)">
          <text font-size="25" class="label-text">
               <tspan>Using an open-source</tspan>
               <tspan x="0" y="25">design system</tspan>
          </text>
          <circle cx=270 cy=-7.5 r=10 fill="#2D9CDB"></circle>
     </g>
     <g transform="translate(150 750)">
          <text font-size="25" class="label-text">
               <tspan>Tracking user metrics</tspan>
          </text>
          <circle cx=250 cy=-7.5 r=10 fill="#2D9CDB"></circle>
     </g>
     <g transform="translate(550 580)">
          <text font-size="25" class="label-text">
               <tspan>Fixing visual regressions</tspan>
          </text>
          <circle cx=280 cy=-7.5 r=10 fill="#6FCF97"></circle>
     </g>
     <g transform="translate(650 700)">
          <text font-size="25" class="label-text">
               <tspan>Fully documenting the</tspan>
               <tspan x="0" y="25">design system</tspan>
          </text>
          <circle cx=270 cy=-7.5 r=10 fill="#6FCF97"></circle>
     </g>
     <g transform="translate(550 850)">
          <text font-size="25" class="label-text">
               <tspan>Presenting the product</tspan>
               <tspan x="0" y="25">roadmap to stakeholders</tspan>
          </text>
          <circle cx=270 cy=-7.5 r=10 fill="#6FCF97"></circle>
     </g>
</svg>

Of course, the placement of tasks in this spectrum is highly subjective and varies from team to team. But all tasks fall somewhere on this spectrum. And there’s a 45-degree angle line down the middle dividing tasks into net positive—where the value of the outcome is greater than the effort — and net negative — where the effort is greater than the outcome.

<svg viewbox="0 0 1000 1000">
     <style>
          .axis-text {
               fill: var(--c--gray-200);
          }
          .label-text {
               fill: var(--c--theme-fg);
          }
     </style>
     <!-- axes -->
     <line x1="500" y1="0" x2="500" y2="1000" stroke="var(--c--gray-500)" stroke-width="1"></line>
     <line x1="0" y1="500" x2="1000" y2="500" stroke="var(--c--gray-500)" stroke-width="1"></line>
     <!-- axis labels -->
     <text transform="rotate(-90) translate(-230 480)" font-size="25" class="axis-text">High Value Outcome</text>
     <text transform="rotate(-90) translate(-990 480)" font-size="25" class="axis-text">Low Value Outcome</text>
     <text transform="translate(0 480)" font-size="25" class="axis-text">Low effort</text>
     <text transform="translate(880 480)" font-size="25" class="axis-text">High effort</text>
     <!-- shapes -->
     <path d="M 30 30 L 940 30 L 30 940 Z" fill="rgba(242, 153, 74, 0.2)"></path>
     <path d="M 970 60 L 970 970 L 60 970 Z" fill="rgba(33, 150, 83, 0.2)"></path>
     <path d="M 955 45 L 45 955" stroke="var(--c--gray-200)" stroke-width="10" stroke-dasharray="30 30"></path>
     <!-- text -->
     <text text-anchor="middle" font-size="70" font-weight="var(--t--weight-bold)" transform="translate(250 250)" fill="#F2994A">
          <tspan x=0 y=0>Net</tspan>
          <tspan x=0 y=0 dy="60">Positive</tspan>
     </text>
     <text text-anchor="middle" font-size="70" font-weight="var(--t--weight-bold)" transform="translate(750 750)" fill="#219653">
          <tspan x=0 y=0>Net</tspan>
          <tspan x=0 y=0 dy="60">Negative</tspan>
     </text>
</svg>

Sometimes, “10&times;” conversations focus too much on picking and choosing work, only doing things that have a high value-to-effort ratio. But to go _beyond_ 10&times;, your team has to figure out how to move tasks from one side of the dividing line to the other. It’s important to recognize that there are times where seemingly net negative work is called for. Business requirements, legal compliance, and risk-limiting all sometimes call for work that doesn’t have a clearly positive outcome. High-performing teams know how to make any work a net positive.

And the neat thing about this paradigm shift is that net-negative work can turn net-positive two different ways: by increasing the **value of the outcome**, or by **decreasing the effort required**. The increase or decrease doesn’t have to be by much; by finding tasks on the borders, and nudging them across to be net positive, a team can transform their productivity.

<svg viewbox="0 0 1000 1000">
     <style>
          .axis-text {
               fill: var(--c--gray-200);
          }
          .label-text {
               fill: var(--c--theme-fg);
          }
     </style>
     <!-- axes -->
     <line x1="500" y1="0" x2="500" y2="1000" stroke="var(--c--gray-500)" stroke-width="1"></line>
     <line x1="0" y1="500" x2="1000" y2="500" stroke="var(--c--gray-500)" stroke-width="1"></line>
     <!-- axis labels -->
     <text transform="rotate(-90) translate(-230 480)" font-size="25" class="axis-text">High Value Outcome</text>
     <text transform="rotate(-90) translate(-990 480)" font-size="25" class="axis-text">Low Value Outcome</text>
     <text transform="translate(0 480)" font-size="25" class="axis-text">Low effort</text>
     <text transform="translate(880 480)" font-size="25" class="axis-text">High effort</text>
     <!-- shapes -->
     <path d="M 30 30 L 940 30 L 30 940 Z" fill="rgba(242, 153, 74, 0.2)"></path>
     <path d="M 970 60 L 970 970 L 60 970 Z" fill="rgba(33, 150, 83, 0.2)"></path>
     <path d="M 955 45 L 45 955" stroke="var(--c--gray-200)" stroke-width="10" stroke-dasharray="30 30"></path>
     <!-- points -->
     <circle cx=500 cy=350 r=20 fill="#F2994A"></circle>
     <circle cx=800 cy=350 r=20 fill="#219653"></circle>
     <circle cx=350 cy=500 r=20 fill="#F2994A"></circle>
     <circle cx=350 cy=800 r=20 fill="#219653"></circle>
     <!-- lines -->
     <path d="M 350 750 L 350 550 M 330 570 L 350 550 L 370 570" stroke="var(--c--theme-fg)" stroke-width="10" fill="transparent"></path>
     <path d="M 750 350 L 550 350 M 570 330 L 550 350 L 570 370" stroke="var(--c--theme-fg)" stroke-width="10" fill="transparent"></path>
     <!-- labels -->
     <text class="label-text" font-size="40" transform="translate(530 300)">Decrease Effort</text>
     <text class="label-text" font-size="40" transform="translate(300 770) rotate(-90)">Increase Value</text>
</svg>

One of the biggest innovations in high-performing software development teams has been the use of design systems. That’s because design systems do exactly what I’ve been outlining: they increase the value or decrease the effort of many of the common tasks that teams have to do. Some of those shifts—like reusing components — are well-known. But other shifts — like automations — are just being explored.

### Increasing value through re-use

Some work can be pushed over the dividing line by increasing its value. Design systems do this primarily by allowing you to re-use the same component multiple times; every time you use a design system component, you’re driving up the value with very little extra effort.

There’s a number of ways that your design system can be geared towards re-use without a ton of effort:

-   **Document how to use a component, don’t just provide a mockup.** A lot of design system documentation is focused on how a component looks or works. A button, say, has 10 pixels of padding, and has such and such a hover state. And while that documentation might make it easy for a developer to implement the button the first time around, it doesn’t make it any more reusable. If your design system doesn’t have it, work on documentation that helps designers and developers use your components: include the package dependencies, required configuration variables, and potential errors. Make the component easy to find in Figma or Sketch or XD, and provide some clear guidance on how it interacts with other components or plugins.
-   **Don’t over-specialize. Don’t over-generalize.** Extremely general components — I’m looking at you, &lt;box> — require a ton of configuration and finessing to become useful in a real-world feature. Extremely specialized components — &lt;SecondaryAutoCompleteModalCloseButton> — will never be re-used and become a drag on maintainers. Find a sweet spot in between. I like to use the [rule of three](https://blog.codinghorror.com/rule-of-three/) to tell me when a component is ready for the design system.
-   **Use systems thinking**. Once your work goes from one-off specs and buildouts to reusable systems of components, you’re treading in a complex and unpredictable current. Systems thinking is a broad umbrella of tools and techniques for dealing with uncertainty. Grappling with concepts like [interconnectedness, synthesis, emergence, feedback loops, and causality](https://medium.com/disruptive-design/tools-for-systems-thinkers-the-6-fundamental-concepts-of-systems-thinking-379cdac3dc6a) can help you anticipate the counterintuitive outcomes of long-lived design systems.

If you’ve spent much time with design systems, you are probably familiar with just how effective re-use can be at increasing the value of your work. But like we saw earlier, that’s not the only way to get to 10&times; and beyond. How do design systems decrease the effort involved with software development?

### Decreasing effort through automation

Automation is a scary word. In many conversations, automation is associated with people losing their jobs to machines that can do the same work for far less money. However, in design and development, automation allows us to remove repetitive, low-effort, low-value work from our day-to-day, enabling us to work together on the high-value or high-effort end of the scale.

Automation is still a new frontier for design systems, and there’s lots to explore:

-   **Design tokens** are ways of automating the tedious work of converting common values between different units of measurement, operating system contexts, or presentational modes. The work that was started by the folks behind [Salesforce’s Theo](https://github.com/salesforce-ux/theo) is being continued by tools like [Style Dictionary](https://amzn.github.io/style-dictionary/#/), [Knapsack](https://www.knapsack.cloud), [Diez](https://diez.org), and more. Recently, the [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/) finished its first editor’s draft, signaling the start to a new phase in the standardization of design token technology. Soon, any design tool will be able to create and share tokens in a standard, interoperable way, reducing the effort required to maintain tokens between tools and teams.
-   **Design APIs** reduce the effort required to move decisions and specifications between designers, developers, and user-facing applications. I recently went through the exercise of [building a design API](https://matthewstrom.com/writing/design-api-in-practice/) as a proof of concept; while the technology is still very nascent, it’s extremely promising to see how a fully automated design system can push design and code out to users with minimal effort. Tools like [Specify](https://specifyapp.com) are sprouting up to make design APIs even more accessible to teams.
-   **Testing and continuous integration** tools like [Storybook](https://storybook.js.org) are beginning to explore what automated tests look like for design systems. By running tests for accessibility issues, design consistency, functionality, and visual regression, Storybook substantially reduces the effort required to maintain big design systems; tests run in the background as components are being built and shipped, freeing designers and developers up to focus on functionality.

If there’s one thing automation does well, it’s eliminating repetition. Some of the most frequent day-to-day tasks of collaboration between designers and developers — copying and pasting, double-checking values, inspecting and testing — all but disappear from the work with just a touch of automation. Decreasing the effort of our work, even a little, can shift our net-negative work across the line into net-positive.

## Putting it all together

Forget 10&times;. With a focus on outcomes and an eye towards the border between net-positive and net-negative work, any team can push their productivity beyond their previous limits. And with the innovations in design systems, there is a vast array of high-leverage tools and techniques that are ready to be applied to designer-developer collaboration.

That’s why design systems are becoming instrumental to building software products: not because they look nice (some don’t) or are more elegant (most aren’t) or organized (definitely not). It’s because they make so much of our work slightly more valuable, or take slightly less effort, or some combination of both.

If you can perform one task better than most people, you might be a 10&times; designer or developer or product manager (or whatever you are). But if your team can find small ways to make many of their tasks net-positive, 10&times; is just the start.

[^1]: Sackman, H., et al. “Exploratory Experimental Studies Comparing Online and Offline Programming Performance.” Communications of the ACM, vol. 11, no. 1, Jan. 1968, pp. 3–11. DOI.org (Crossref), doi:10.1145/362851.362858.
[^2]: Folklore.Org: -2000 Lines Of Code. https://www.folklore.org/StoryView.py?story=Negative_2000_Lines_Of_Code.txt. Accessed 10 May 2021.
