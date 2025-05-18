---
title:  "Spacetime"
eleventyExcludeFromCollections: true
---

[Spacetime](https://spacetime.am) is a tool for remote teams. It visualizes and translates time zones to make coordinating easier, and brings teams closer together.

![The Spacetime team overview page](/images/spacetime-1.png)

We built Spacetime at [Planetary](https://planetary.io) to make working across time zones easier. At any given time, we'd have teammates in 5 different time zones on 3 different continents — understanding where (and when) each person was helped us feel more like a traditional office.

![At this particular moment, we were in only 2 time zones, but in 5 very different locations.](/images/spacetime-2.png)

Spacetime made it very easy for us to plan and track our time, without needing to do the mental math of time zone conversion. Even better, we didn't have to remember the various differences in daylight savings time or other anomolies.

Initial prototypes had teammates' availability stay static, with a red line marching across the screen according to the time.

![An initial prototype built in 2015.](/images/spacetime-3.png)

By centering the current timeline, and letting the team's work hours scroll past, Spacetime echoes the shared digital workspace that remote teams occupy.

<p>
    <video autoplay>
    <source src="/images/spacetime-v.mp4" type="video/mp4">
    <source src="/images/spacetime-v.ogv" type="video/ogg">
    Your browser does not support the video tag.
    </video>
</p>

In addition to the web interface, we also built a Slack bot to provide time translations.

![An example of the Slack bot's response.](/images/spacetime-4.png)

In October of 2016, we opened registration for Spacetime. In order to provide a first-class experience to users, we extended the design language to emails, notifications, documentation, and other interactive elements.

![The first email we sent to users.](/images/spacetime-5.png)

In addition to being a great tool to use on desktops and laptops, we wanted to make sure it was easy for users to have the exact same functionality on mobile devices.

![The Spacetime team page on mobile.](/images/spacetime-6.png)

One of the biggest challenges of building Spacetime is keeping the interface simple. With many other Planetary projects, users are accomplishing more complex tasks, and so complex interaction may be warranted. With Spacetime, the goal was to keep configuration and settings as simple as possible.
 
![Configuration & Settings](/images/spacetime-7.png)

Another challenge was dealing with Slack's complex authentication system — instead of surfacing confusing permissions management to users, we created a reslient system of action screens to get users properly oriented.

![Configuration & Settings](/images/spacetime-8.png)

As we move ahead past 2000 users, we're constantly adding features and understanding user feedback.