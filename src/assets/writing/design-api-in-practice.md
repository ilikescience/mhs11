---
title: 'A design API in practice'
og:
  title: 'A design API in practice'
  description: A proof-of-concept of an API for design decisions
  image: /images/design-apis-02.jpg
  image_width: 1600
  image_height: 988
date: 2020-06-22
tags: [design]
---

A few months ago I wrote an essay titled "[Design APIs: the evolution of design systems](/writing/design-apis)". The API model for design systems resonated with design systems practitioners. The response blew me away. 

Since then, I’ve had lots of conversations (and [one podcast](https://www.digitale-leute.de/interview/design-systems-into-design-api/)) about the concept of a design API. One question comes up over and over again: what does a design API actually look like? Good question.

So I built one. It’s up and running at [https://matthewstrom.com/api](https://matthewstrom.com/api). It’s very rudimentary, but makes an excellent proof of concept. In this essay I’ll describe how it works, how I built it, and what it can (and can’t yet) do.

## How it works
My design API consists of a few libraries and frameworks, connected by pieces of my own code:

1. The foundation of the API is an **Express.js** application, running as a **serverless function** via **Netlify functions.**
2. The API accepts and responds to **JSON** queries, using **GraphQL** to interpret requests and compose responses.
3. The application uses **Theo** to read and compose **design tokens** on the fly.

I won’t go through the technical implementation of those libraries and frameworks in this essay, and after this point they’re not that important. I wrote a companion piece for this essay, and CSS-Tricks was kind enough to publish; check out that article if you’re interested in the nuts and bolts. If you’ve never written a line of code, keep reading — let’s take a more abstract look.

---- 

Like most design systems, the one that styles this website has a broad range of colors (gray, blue, green, yellow, and red). Each color has a range of lightness values running from 10 to 90 in increments of 10. So when I refer to `blue-50`, I mean the blue color in the middle of the lightness range.

The design API allows me to (1) request for the **design token** for `blue-50`. The token contains some information about the color, including the exact hsl color code in a format ready to be used by CSS to style the page.

![A high-level overview of a design API](/images/design-api-1.jpg)

When I (2) get the token back, I can use it however I want. If I’m working with old-school CSS, that value might go in a custom property. If I’m using new-fangled CSS-in-JS, maybe it’ll become a variable or a property passed to a component.

But what’s really going on inside the API? Let’s peek inside.

![A closer look at the internal process of the design API](/images/design-api-2.jpg)

Inside the API, there are three processes happening. The first (A) **looks up** the token from a database (`blue-50`). In my rudimentary proof-of-concept, the database is a lowly text file sitting on the server. An API with more traffic will probably need a proper database.

The second process (B) **transforms** the token into whatever format I’ve requested. In my demo API, I’m using Theo to accomplish this. There are other tools like Style Dictionary which have the same features; you could even build your own transformer. The premise is: take the value stored in the database (In my example, the value of `blue-50` is `#274dd8`) and transform it into the desired format. 

This is the magic of design tokens: if we want the color in a web-friendly format, we transform it to rgb (`rgb(39, 77, 216) `). If we are using the color in an iOS app, we need a UIColor object (`red: 0.15, green: 0.30, blue: 0.85, alpha: 1.00`).  Android apps need an 8-digit hex value with the alpha channel first (`#ff274dd8`) and so on. The (B) transform process of the API is where this is done.

Lastly, the third process (C) **formats** the response. Here, we can choose to wrap the output token (or list of tokens)’s value in some extra code to make it easier to incorporate into our own program or use case. For instance: if I’m working on a documentation site that uses SASS, it’d be nice to have the color formatted as a SASS variable (`$blue-50: rgb(39, 77, 216)`). But if my production app uses CSS custom properties, the formatting should be in vanilla CSS ( `:root {--blue-50: rgb(39, 77, 216);`). At the moment, my own proof-of-concept can only format the response as JSON - more on that later.

After looking up, transforming, and formatting the token, the API (2) sends the token back to me. This all happens in milliseconds.

---- 

Here’s a few examples of requests and responses:

### Example 1: list all tokens

**Request**
```graphql
{
	tokens {
		name
		value
		category
	}
}
```

**Response**
```json
{
	"data": {
		"tokens": [
			{
				"name": "gray-10",
				"value": "rgb(249, 247, 246)",
				"category": "color"
			},
			{ ... }
		]
	}
}
```

This example lists all of the tokens in the database. This might be useful for a documentation site or Sketch/Figma plugin. An optional filter can be passed in (`tokens(category:"color")`) to only return a subset of tokens.

### Example 2: Get a single token

**Request**
```graphql
{
	token(name: "blue-50") {
		value
	}
}
```

**Response**
```json
{
	"data": {
		"token": {
			"value": "rgb(39, 77, 216)"
    	}
	}
}
```

This is how you’d retrieve a single token. It’s useful for styling an element directly, or looking up metadata about the token.

### Transform a token

**Request**
```graphql
{
	token(name: "blue-50", transform: "android") {
		value
	}
}
```

**Response**
```json
{
	"data": {
		"token": {
			"value": "#ff274dd8"
		}
	}
}
```

This is an example of how you can request a token in a specific format - in this case, the eight-digit hex code used in Android app development.

## One-to-one → One-to-many

There’s an idea buried in my approach and implementation of a design API that warrants a closer look. It’s the move to a **one-to-many** model for design tokens.

In my original Design APIs essay, I used the metaphor of a phone book to describe modern design systems:

> A dedicated design system team is required [to maintain a design system] because a design system is only a low-level abstraction of the design process.
> This means the design system’s documentation — the website or wiki or design file that describes it — is its most useful application.
> … Think of this like a phone book. A phone book is a low-level abstraction of a phone number directory. To find someone’s number, you flip through the pages of the phone book until you find their name. A whole team of people produces the phone book, printing and distributing it on a regular basis to ensure it is up to date.

And later, I mentioned that while tools like Theo and Style Dictionary are innovative in their own right, they are still just printing phone books:

> However, [design tokens] are generated and distributed in bulk. If you only need one token, you need to import the whole library. That means they’re still a type of phone book, albeit one that is formatted in a way that software can easily read.

A package generated by Theo contains many copies of each design token, pre-formatted for each platform and format the end users need. When a new use case emerges, a whole new package needs to be compiled and distributed. As users’ needs grow, so does the package size. This is a **many-to-many** model: many tokens, many use cases.

![A many-to-many model](/images/design-api-3.jpg)

The database of my design API (it’s just a text file, really … you can see the source file [here](https://github.com/ilikescience/mhs11/blob/master/src/assets/tokens/tokens.json)) contains just a single copy of each token. Custom-tailored copies are generated on demand — whenever a request to the API is made. Handling new use cases doesn’t require a new print run: a new query or argument is added to the API and each end user continues to get request what they need. This is a **one-to-many** model: one token, many use cases.

![A one-to-many model](/images/design-api-4.jpg)

The one-to-many model is a powerful evolution of design tokens, one that enables a small team (or, in my case, a single person) to support a huge number of use cases and client applications.

## Limitations

As proud as I am of my little proof-of-concept design API, there’s a lot it can’t do. Most of its limitations are due to my own limitations as a developer - if you have ideas for how to solve these, get in touch!

1. **It can only serve JSON.** Currently, I can only respond with a JSON containing the desired code. This means that unless the client or end user can use JSON directly, it has to take an extra step to get usable code. Ideally, I’d be able to provide whatever format the client application wants. For example: even though I can query the API with a URL like `http://matthewstrom.com/api?query={tokens{value}}`, I can’t use that URL in a css import or tag like `<link href="http://matthewstrom.com/api?query={tokens{value}}">`.
2. **It’s read-only.** To keep things simple in this proof-of-concept, I didn’t implement any way of updating tokens via the API. This is fairly straightforward with GraphQL - since the API operates on the one-to-many model, there’s only one token to update.
3. **It has a limited set of transformation options.** when building the API, I started off with Style Dictionary handling the token transformations. Style Dictionary has a ton of built-in transformation options, allowing for many use cases out of the box. However, Style Dictionary is geared towards producing large, static bundles of tokens, not single tokens on demand. So, I switched to Theo. Theo is also intended to produce bundles of tokens in static files, but has enough wiggle room to be adapted to this token-on-demand approach. The downside is that Theo has far fewer transformation options built in.

## Where do we go from here?

There’s lots of room for experimentation and exploration. Here’s a list of ideas for future updates:
- More tokens: spacing, typography, shadows, and easing
- Aliases: component-based naming and theme-based naming
- Accessibility: programmatically listing accessible color combinations
- Components: providing specifications for higher-order design decisions

There’s also inspiration to be found in the experimental API for Shopify’s [Polaris design system](https://polaris.shopify.com/resources/graphql-api).[^1]

As for the future of design APIs in general: it’s closely tied to the work being done to write a specification for design tokens, and the [W3C design tokens community group](https://www.w3.org/community/design-tokens/) is just getting started. Having a stable specification for design tokens will make it possible to write applications that consume tokens without needing to coordinate directly with the services that provide tokens. This kind of collaboration is what made the web so resilient and flexible, so I have high hopes for the future of design tokens as a standardized web technology.

An [interoperable](https://jxnblk.com/blog/interoperability/), [guessable](https://johno.com/guessable/) design API is the foundation of a fully networked design system — one that takes the rote and error-prone aspects out of designers and engineers collaborating and iterating on design. It’s the next step in the evolution of design systems.

[^1]:	However, based on my experiments with it, the API seems to be mostly a way of communicating with an underlying CMS — for example, the design tokens query only provides a single list of values tailored for the web.