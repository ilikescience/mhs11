---
layout: layouts/home.html
---

<div class="l--row">
    <div class="l--col-half">
        <header class="h-card">
            <div class="l--space-flush">
                <h1 class="t--size-l t--family-serif t--leading-small t--tracking-tight t--weight-bold">
                    Hi, my name is <a href="https://matthewstrom.com" class="u-url" rel="me">Matthew Ström</a>.
                </h1>
                <h2 class="t--size-m t--family-sans t--weight-normal">
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

</div>
<div class="l--col-half">

**Things I've written:**

<div class="posts l--space-flush">
{%- for post in collections.writing reversed -%}
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">{{ post.date | date: "%m/%d/%y" }}</span>
        <span>
            <a href="{{ post.url }}"> 
                {{ post.data.title }} 
            </a>
        </span>
    </div>
{%- endfor -%}
</div>

**Talks I've given:**
<div class="post l--space-flush">
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">10/15/18</span>  
        <span>Tech Inclusion SF</span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">09/18/18</span>  
        <span>Design Driven NYC <a rel="noopener" target="_blank" href="https://www.youtube.com/watch?v=Av8GXFcqOqc">(video)</a> </span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">05/27/18</span>
        <span>Tech Inclusion NYC</span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">08/15/17</span>
        <span>Data Storytelling NY</span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">11/02/16</span>
        <span>Graphical Web 2016: Tiny Data Visualizations <a href="https://slides.com/matthewstrom/tinycharts" rel="noopener" target="_blank">(slides)</a></span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">10/09/16</span>
        <span>OpenCamp 2016: Datum Ipsum <a href="http://slides.com/matthewstrom/datumipsum" rel="noopener" target="_blank">(slides)</a></span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">07/21/16</span>
        <span>Brooklyn.JS: WebVR with aframe.js</span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">01/25/16</span>
        <span>
            D3.js NYC: Tiny Data visualizations <a href="https://www.youtube.com/watch?v=Gtlb8VIszrU" rel="noopener" target="_blank">(video)</a>
        </span>
    </div>
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">04/18/13</span>
        <span>Pecha Kucha: The Creatives Must Be Crazy <a href="https://www.youtube.com/watch?v=xpb_0Tadu6g" rel="noopener" target="_blank">(video)</a></span>
    </div>
</div>
</div>