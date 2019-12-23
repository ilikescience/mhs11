---
title: All the books I read in 2019
og:
  title: All the books I read in 2019
  description: Mostly historical non-fiction, sci-fi, and pop psychology
  image: /images/books-2019.jpg
  image_width: 2000 
  image_height: 1333
date: 2019-12-20
tags: books
---

![](/images/books-2019.jpg)

I read 25 books in 2019. That's slightly more than last year, largely due to my discovery of the Kindle iOS and MacOS apps. The iOS can scroll continuously instead of flipping between discrete pages, which is ideal for the kind of non-fiction books I like to read. I still read on the Kindle itself, but that's reserved for fiction and text I want to spend a little more time with.

I've also started sharing the my thoughts on these books when I finish them. You can see the full list over [here](/reading).

{%- assign books = collections.reading -%}
{% for book in books %}
{% assign year = book.data.date|year %}
{% if year == 2019 %}
<hr class="l--mar-top-m"/>
{%- include components/book.html with book.data -%}
{% endif %}
{% endfor %}