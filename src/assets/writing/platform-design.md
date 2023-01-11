---
title: What does it mean to design a platform?
date: 2023-01-11

og:
    title: What does it mean to design a platform?

---

<div class="c--bg-highlight-1 l--pad-s l--rounded-corners">
<strong>Editor’s note:</strong> This essay was adapted from a post I wrote on an employees-only blog at Stripe.
</div>

After four months of parental leave, I came back to work and noticed something different. Many of the words, phrases, acronyms, and figures of speech I took for granted no longer held the same meanings. Specifically, the word "platform:" before my time off, I would breeze over it in any presentation or document without a second thought. Now, I find it totally devoid of any meaning. 

I decided to start sketching out some possible defintions, and quickly uncovered something exciting: platform design isn’t just another flavor of UX or product design. There are challenges, mental models, and requisite skills that set platform design apart. I lead the platform design team;the work that we can do as platform designers gives us extreme leverage in solving user problems. We have the opportunity to make an outsize difference in the experience of our users.

What follows is the result of my exploration of what sets platform design apart. If you are a platform designer, too, I hope it gives you an idea of the potential of your work.


## Interfaces

Application designers fit components, modules, containers, and data together to create the best user experience possible. Platform designers additionally focus on the layers between all those elements — the _interfaces_ — to ensure that _everything that can be possibly built on the platform_ has the same high bar of quality.

Developers use the concept of an API to plan the way two things fit together (“interface” is the I in API). Good APIs can change the world: TCP/IP enables every computer in the world to communicate with every other. Stripe’s famous “[7 lines of code](https://www.bloomberg.com/news/features/2017-08-01/how-two-brothers-turned-seven-lines-of-code-into-a-9-2-billion-startup)” could connect any piece of software to the complex global banking system. Jeff Bezos’ insistence on API design at Amazon allowed the company to turn its own infrastructure into its most profitable product (AWS).

Platform designers have to understand and plan experience APIs: interfaces both in space (how elements appear beside each other, in front of or behind each other, inside or surrounding each other) and in time (how elements or entire screens appear before or after each other, how to communicate causal relationships). With the right interfaces, any application built on the platform will have a great user experience.


## Incentives

Designing applications requires understanding the balance between motivation and friction. It’s almost mathematical: if a user’s motivation is greater than the friction they experience, the user will complete a task. If users aren’t completing a task, you can increase the motivation through marketing and guidance, or decrease the friction through usability improvements or automation.

Designing a platform involves the same balancing act, but with an additional variable: whether we intend to or not, we influence the _incentives_ for both application builders and end users. 

Platform incentives are complex. Take Spotify, for example: they create incentives for artists in the form of paying for each stream of a song. So, in 2014, funk band Vulfpeck released an album on Spotify called _Sleepify_ consisting entirely of 30-second-long silent “songs”. Vulfpeck encouraged fans to play the album on repeat while they slept. After it garnered 5 million streams, Spotify removed the album, but paid the band accordingly; Vulfpeck used the $20,000 it earned to go on tour.[^1]

Incentives are a powerful tool unique to platform design. To create a successful platform, we need to think deeply about all the ways in which incentives can lead to desired outcomes, or ways in which they motivate bad — or, in Vulfpeck’s case, merely mischievous — actors.


## Emergence

Application users usually behave in predictable ways. We can study their tendencies and preferences, then create experiences to fit our observations. Data like task success, retention rate, user sentiment, and engagement tells us how our predictions matched the real world. Over time, by researching and iterating, we come closer to meeting business goals.

We can’t always predict platform users’ behavior. The people building applications on the platform and the people using those applications form a feedback loop; both groups develop creative and unexpected ways to use (or abuse) the platform. Think of Twitter users inventing hashtags and @-mentions, or early bulletin board users using punctuation to create emoticons. These ideas spread far beyond their original application, becoming deeply-embedded cross-platform features. This is called _emergence_.

Emergence presents a unique opportunity in design. When behavior is predictable, we design tightly-tuned experiences (“happy paths”) to realize the best outcomes for users. When behavior is emergent, users’ creativity becomes a multiplier on top of our own, exponentially increasing the best outcomes for both users and business.


## Second-order thinking

Application design is all about first-order thinking. A user interacts with the application, and something happens as a result — cause and effect. Causes and effects can be separated by space and time, but their constant tick and tock drives the crucial engagement loop of every successful product.

Platform design requires second-order thinking, where first-order effects are causes, too. A great example of this is attributed to Warren Buffett: imagine a crowd watching a parade. A few people stand on their tiptoes — that’s a first-order cause. Now, they can see better — the first-order effect. What happens next? All the people behind them have to stand on their tiptoes, too — that’s the second-order effect. In the end, everyone is worse off, and nobody can see any better.[^2]

Second-order thinking requires creativity. Platform designers have to ask: how will interfaces and incentives create emergent behavior? How will those behaviors change the incentives? What can we build to channel these feedback loops towards our goals? Though these thought exercises will never fully predict the outcomes, without them, a platform is doomed.


## Case study: Lego

Let’s put all these pieces together.[^3]

Lego is one of the most successful toy companies of all time due to their rigorous approach to platform design. Lego bricks are clearly fun to play with, but Lego’s multi-generational success story goes deeper than that — to interfaces, incentives, emergence, and second-order thinking .


### Interfaces

Lego didn’t invent interlocking plastic bricks; Hilary Page, owner of Kidicraft, secured a patent for injection-molded building blocks in 1940. But Lego succeeded, and Kidicraft didn’t. It wasn’t the bricks themselves that mattered. It’s was the way they fit together — their interfaces.

The level of precision of a Lego brick is mesmerizing. Manufacturing tolerances (exact to 2 microns, less than the width of a human hair) are so rigorously maintained that every lego brick ever manufactured attaches to every other brick. Pieces fit together and lock tightly, but can be pulled apart easily by a child. Instructions for lego sets also keep children in mind, only using pictures to communicate.[^4] 

But the simplicity of the design is misleading: if you have 6 standard lego bricks, you can put them together in 915,103,765 different ways.[^5]

The ingenious design of standard interfaces, together with an ironclad commitment to precise adherence to those standards, is why Lego succeeds.


### Incentives

Lego incentivizes play. Specifically, they encourage builders to (literally) think outside the box, combining pieces from widely different sets to produce new and inventive designs. They do this in both _direct_ and _indirect_ ways, and through both _positive_ and _negative_ interventions:

<figure>
    <table>
        <thead>
            <tr>
                <th class="table--header-empty"></th>
                <th>Direct</th>
                <th>Indirect</th>
            </tr>
        </thead>
        <tbody>
            <tr class="l--border-btm-width-s l--border-btm-style-solid c--border-btm-gray-2">
                <th scope="row">Positive</th>
                <td> Sponsored events like <a href="https://www.lego.com/en-us/rebuild-the-world/build-day">Lego Build Day</a>, where builders are encouraged to explore ideas like “take a space ship and rebuild it into a panda bear hammock.”
                </td>
                <td>Allowing third parties to sell and resell individual Lego pieces, enabling builders in any part of the world to find any piece they want.</td>
            </tr>
            <tr>
                <th scope="row">Negative</th>
                <td>Setting clear rules for first-party designers of Lego sets that set the tone for builders: for example, sets can’t require bricks to be assembled in ways that can’t be disassembled later</td>
                <td>Using trade protections to keep low-quality third-party parts from entering the market, keeping the guarantee of quality for lego bricks high.</td>
            </tr>
        </tbody>
    </table>
</figure>



We can imagine a Lego that allows for parts with unique pieces that don’t fit with others, incentivizing consumers to constantly buy new kits, and locking third parties out of the market. But it’s hard to see how this version of Lego would be as successful.


### Emergence

There are many examples of how Lego users have adapted the system to do things the original designers never intended. In some cases, Lego has even brought those innovations back into the core system.

In 1985, a group of computer scientists had a big idea. What if they connected a programming language to physical machines, like Lego creations? Partnering with Lego through the MIT Media Lab, the researchers created Lego Logo, a beginner-friendly robotics programming language that was optimized for creativity. Since then, programmable Legos — “Mindstorms” and “Technics,” offshoots of the original Lego Logo products — have been used to build everything from a [Rubik's Cube-solving robot](https://www.youtube.com/watch?v=X0pFZG7j5cE) to c[ustomizable prosthetics for children](https://www.cnet.com/culture/lego-compatible-prosthetic-arm-lets-kids-build-their-own-hand/).

Lego also encourages emergence in passive ways. Take [Brickit](https://brickit.app/), an app created by Leonid Aleksandrov. Snap a photo of your Lego pieces and it'll show you what you can build, with 3D instructions. You can even scan finished creations and Brickit will reverse-engineer the instructions so you can share your ideas with others. Surprisingly, Lego hasn’t sued Aleksandrov – they've allowed Brickit and its community of creators to flourish.


### Second-order thinking

Lego is no stranger to second-order thinking. As a toy company, they are aware of the impact their decisions have on the lives of children and the planet.

Specifically, Lego has avoided selling sets that include military equipment or vehicles. No tanks, no bomber planes, no soldiers with guns. The ban extends beyond finished designs — for a long time, the company didn’t even sell gray-colored bricks, the first choice for making military machines. This self-imposed restriction is especially impressive in the light of how profitable war-like toys can be; think of Nerf guns, green army men, and first-person shooter video games.[^6]

Another example of second-order thinking lies in Lego’s plans for the future. Lego bricks are made of ABS, a petroleum-derived plastic. ABS can’t be recycled, meaning Lego produces more than 100,000 metric tons of single-use plastic every year. To reduce their environmental impact, Lego has invested hundreds of millions of dollars in sustainability, resulting in plant-derived plastic flora, and fully recycled paper packaging. And in 2021, after 3 years of research and 250 material tests, a fully recycled brick — made of PET from used water bottles — was ready for mass production.[^7]


## tl;dr

Interfaces, incentives, emergence, and second-order thinking constitute the biggest differences between platform and application design.

**Interfaces** are the points of contact between elements, where simplicity and flexibility can lead to efficiency at scale.

**Incentives** drive the motivation of both platform- and end- users. By designing incentives, we can re-invest users’ energy, amplifying desired outcomes and preventing undesired results.

**Emergence** is the open-ended feedback loop that platforms can create and maintain. By designing for emergence, not against it, we enable users to discover applications we never imagined.

**Second-order thinking** lets us plan for, and potentially tame, the complexities that threaten to turn platforms into dead ends — or worse.

By putting these concepts together, designers can take advantage of the unique leverage platform design provides, efficiently solving thorny problems at scale.


[^1]:
     “How Funk Band Vulfpeck Took on Spotify.” CNBC, 2 Apr. 2018, www.cnbc.com/video/2018/04/02/how-funk-band-vulfpeck-took-on-spotify.html. 

[^2]:
     “Second-Order Problem.” Farnam Street, April 7, 2019. https://fs.blog/second-order/. 

[^3]:
     Pun fully intended.

[^4]:
     [The instructions for the largest lego set](https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6218872.pdf) (The Millennium Falcon) run over 450 pages, all without a single word.

[^5]:
     Eilers, Søren. “A Lego Counting Problem.” University of Copenhagen, April 7, 2005. https://web.math.ku.dk/~eilers/lego.html. 

[^6]:
     Lendon, Brad. “Lego Won't Make Modern War Machines, but Others Are Picking up the Pieces.” CNN, December 13, 2020. https://www.cnn.com/style/article/lego-military-sets-intl-hnk-dst/index.html. 

[^7]:
     White, Jeremy. “How Lego Perfected the Recycled Plastic Brick.” Wired, July 11, 2021. https://www.wired.com/story/lego-recycled-plastic-brick/. 
