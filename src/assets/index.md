---
layout: layouts/home.html
---

<header class="h-card l--mar-top-l">
    <div class="l--space-compact">
        <h1 class="t--size-xl t--family-serif t--leading-small t--tracking-tight t--weight-bold">
            I'm <a href="https://matthewstrom.com" class="u-url" rel="me">Matthew Ström</a>.
        </h1>
        <p>
            I'm a design lead at <a href="https://bit.ly" target="_blank">Bitly</a>. Previously, I led design teams at The Wall Street Journal, SoundCloud, Planetary, <a href="/projects/cty">CTY</a>, and <a href="/projects/eleven">Eleven Magazine</a>. I live in Brooklyn.
        </p>
    </div>
    <div>
        <a href="https://twitter.com/ilikescience" rel="me" target="_blank">Twitter</a> · <a href="/feed.xml" rel="me">RSS Feed</a>
    </div>
</header>

<div class="posts l--space-flush l--mar-top-m">
<strong>Latest writing:</strong>
{%- for post in collections.writing reversed -%}
    {%- if forloop.index0 == 0 -%}
    <div class="post l--mar-top-s l--mar-btm-s">
        <div class="c--gray t--numbers-tabular">{{ post.date | date: "%m/%d/%y" }}</div>
        <h2>
            <a href="{{ post.url }}"> 
                {{ post.data.title }} 
            </a>
        </h2>
    </div>
    {%- elsif forloop.index0 < 4 -%}
    <div class="post">
        <span class="c--gray l--mar-right-s t--numbers-tabular">{{ post.date | date: "%m/%d/%y" }}</span>
        <span>
            <a href="{{ post.url }}"> 
                {{ post.data.title }} 
            </a>
        </span>
    </div>
    {%- else -%}
    {% continue %}
    {%- endif -%}
{%- endfor -%}
</div>


<div class="post l--space-flush l--mar-top-m">
    <strong>Past Speaking:</strong>
    <div class="post l--mar-top-s l--mar-btm-s">
        <div class="c--gray l--mar-right-s t--numbers-tabular">09/18/18</div>  
        <h2><a rel="noopener" target="_blank" href="https://www.youtube.com/watch?v=Av8GXFcqOqc">Design Driven NYC</a> </h2>
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