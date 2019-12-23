---
title: All the books I read in 2019
og:
  title: All the books I read in 2018
  description: Mostly historical non-fiction, sci-fi, and pop psychology
  image: /images/book-cover.png
  image_width: 1024 
  image_height: 768
date: 2019-12-20
---
{%- assign books = collections.reading -%}
{% for book in books %}
{% assign year = book.data.date|year %}
{% if year == 2019 %}
{%- include components/book.html with book.data -%}
{% endif %}
{% endfor %}