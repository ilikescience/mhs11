---
layout: layouts/default.html
---

<header class="h-card">
    <div class="l--space-flush">
        <h1 class="t--size-xl t--family-serif t--leading-small t--tracking-tight t--weight-bold">
            Hi, my name is <a href="https://matthewstrom.com" class="u-url" rel="me">Matthew Ström</a>.
        </h1>
        <h2 class="t--size-l t--tracking-tight t--family-serif">
            I'm a design lead at <a href="https://bit.ly" target="_blank">Bitly</a>.
        </h2>
    </div>
    <div>
        <a href="https://twitter.com/ilikescience" rel="me" target="_blank">Twitter</a>
        <span>&nbsp;·&nbsp;</span>
        <a href="https://github.com/ilikescience" rel="me" target="_blank">Github</a>
        <span>&nbsp;·&nbsp;</span>
        <a href="https://instagram.com/ilikescience" rel="me" target="_blank">Instagram</a>
        <span>&nbsp;·&nbsp;</span>
        <a href="https://medium.com/@ilikescience" rel="me" target="_blank">Medium</a>
    </div>
</header>

Previously, I worked at:  
[The Wall Street Journal](https://wsj.com), [SoundCloud](https://soundcloud.com/go), [Planetary](https://planetary.io), [CTY](/projects/cty), and [Eleven](/projects/eleven).

**Things I've written:**

<table class="posts-table"> 
{%- for post in collections.writing reversed -%}
    <tr>
        <td>
            <span class="c--gray l--mar-right-s t--numbers-tabular">{{ post.date | date: "%m/%d/%y" }}</span>
        </td>
        <td>
            <a href="{{ post.url }}"> 
                {{ post.data.title }} 
            </a>
        </td>
    </tr>
{%- endfor -%}
</table>

**Talks I've given:**
| | |
|-|-|
|<span class="c--gray l--mar-right-s t--numbers-tabular">10/15/18</span> | Tech Inclusion SF |
|<span class="c--gray l--mar-right-s t--numbers-tabular">09/18/18</span> | Design Driven NYC [(video)](https://www.youtube.com/watch?v=Av8GXFcqOqc) |
|<span class="c--gray l--mar-right-s t--numbers-tabular">05/27/18</span> | Tech Inclusion NYC |
|<span class="c--gray l--mar-right-s t--numbers-tabular">08/15/17</span> | Data Storytelling NY |
|<span class="c--gray l--mar-right-s t--numbers-tabular">11/02/16</span> | Graphical Web 2016: Tiny Data Visualizations [(slides)](https://slides.com/matthewstrom/tinycharts) |
|<span class="c--gray l--mar-right-s t--numbers-tabular">10/09/16</span> | OpenCamp 2016: Datum Ipsum [(slides)](http://slides.com/matthewstrom/datumipsum) |
|<span class="c--gray l--mar-right-s t--numbers-tabular">07/21/16</span> | Brooklyn.JS: WebVR with aframe.js |
|<span class="c--gray l--mar-right-s t--numbers-tabular">01/25/16</span> | D3.js NYC: Tiny Data visualizations [(video)](https://www.youtube.com/watch?v=Gtlb8VIszrU) |
|<span class="c--gray l--mar-right-s t--numbers-tabular">04/18/13</span> | Pecha Kucha: The Creatives Must Be Crazy [(video)](https://www.youtube.com/watch?v=xpb_0Tadu6g) |