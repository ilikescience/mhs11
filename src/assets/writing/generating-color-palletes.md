---
title: How to generate color palettes for design systems
date: 2024-04-20

og:
    title: How to generate color palettes for design systems
    description: A guide on how to generate color palettes for design systems
---

It used to be easy to pick colors for design systems. Years ago, we could simply pick colors to match the brand's ethos. Each hue and shade could serve a purpose, and usually had a quirky name like "idea yellow" or "innovation blue". This hands-on approach allowed for control and creativity, resulting in color schemes that could convey any mood or style.

But as design systems have evolved to accommodate ever-expanding software needs, the demands on our color palette grow exponentially too. Accessibility, adaptability, and consistency across dozens of devices, themes, and contexts are required. Picking colors by hand has become practically impossible.

At Stripe, we faced this problem. In “[Designing accessible color systems](https://stripe.com/blog/accessible-color-systems),” Daryl Koopersmith and Wilson Miner presented Stripe’s approach: using perceptually uniform color spaces to create aesthetically pleasing and accessible systems. Their method offered a new approach to selection to enhance beauty and usability, grounded in scientific understanding of human vision. 

In the four years since that post, Stripe has stretched those colors to the limit. The design system’s resilience through massive growth is a testament to the team’s original approach, but last year we started to see the need for a more flexible, scalable, and inclusive color system. This means both an expansion of our color palette and a rethinking of how we generate and apply these colors to accommodate our still-growing products.

This essay will take you through my journey in solving this problem, from realizing that manual color selection was no longer viable, through exploring existing tools and their limitations, to developing a new approach that reconciles aesthetic appeal with accessibility and system scalability.

Finally, I’ll share the full code of my solution. I’ve created a tool for generating expressive, functional, and accessible color systems for any design system. This represents not just a technical solution but a philosophical shift in how we think about color in design systems, emphasizing the balance between creativity and inclusivity.


## What makes a good color palette?

Before we get to the technical aspects of building a great design system color palette, let’s lay out some ground rules. A great color palette is like a Swiss Army knife, built to address a wide array of needs. But that same flexibility can make the system unwieldy and clunky. Through years of working on design systems, two principles have emerged as a constant benchmark for quality color palettes: utility and consistency.

A color palette with high **utility** is vital for a robust design system, encompassing both adaptability and functionality. It should offer a wide array of shades and hues to cater to diverse use cases, such as status changes—reds for errors, greens for successes, and yellows for warnings—and interaction states like hovering, disabled, or active selections. It's also essential for signifying actionable items like links and buttons. Beyond functionality, an adaptable palette enables smooth transitions between light, dark, and high contrast modes, supporting the evolution of your product and differing brand expressions. This ensures that your user interfaces remain consistent and recognizable across various platforms and usage contexts. Moreover, an adaptable palette underscores a commitment to accessibility—it should provide accessible contrast ratios across all components, accommodating users with visual impairments, and offer high-contrast modes that enhance visibility and functionality without sacrificing style.

**Consistency** is another crucial aspect of a well-designed color palette. Despite the diverse range of components and their variants, a consistent palette maintains a coherent visual language throughout the system. This coherence ensures that elements like badges retain a consistent visual weight, avoiding misleading emphasis, and the relative contrast of components remains balanced between dark and light modes. This consistency helps preserve clarity and hierarchy, further enhancing the user experience and the overall aesthetics of the design system.

With that in mind, we can start off on our journey, and generate color palettes that have many expressive hues, each with many consistent shades. However, as you’ll shortly see, even simple questions about these goals reveals a deep rabbit hole of possible solutions.

## Through the looking glass: perceptual uniformity

The principles of utility and consistency make selecting a color palette more complex. There’s a question at the heart of both constraints: what makes two colors look different? We have an intuitive sense that yellow and orange are more similar than green and blue, but can we prove it objectively? Scientists and artists have spent the last decade puzzling this out, and their answer is the concept of perceptual uniformity.

Perceptual uniformity is rooted in how our eyes work. Humans see colors because of the interaction between wavelengths of light and cells in our eyes. In 1850, before we could look at cells under a microscope, scientist Hermann von Helmholtz theorized that there were three color vision cells (now known as cones) for blue, green, and red light.

Most modern screens depend on this century-old theory, mixing red, green, and blue light to produce colors. Every combination of these colors produces a distinct one; 10% red, 50% green, and 25% blue light create the cartoon green of the Simpson’s yard. 75% red, 85% green, and 95% blue is the blindingly pale blue of the snow in Game of Thrones.

Von Helmholtz was amazingly close to the truth, but until 1983, we didn’t have a full understanding of the exact way that each cell in our eyes responds to light. While it’s true that we have three kinds of color vision cells, and that each responds strongly to either red, green, or blue light, the full mechanism of color vision is much more nuanced. So, while it’s technologically simple to mix red, green, and blue lights to reproduce color, the red, green, and blue coordinate system — the RGB color space — isn’t perceptually uniform.

## Picking the right color space

Despite not being perceptually uniform, many design systems still use RGB color space (and its derivative, HSL space) for picking colors. But over the past century, scientists and artists have invented more useful ways to map the landscape of color. Whether it's capturing skin tones accurately in photographs or creating smooth gradients for data visualization, these different color spaces give us perceptually uniform paths through a gamut.

**Lab** is an example of a perceptually uniform color space. Developed by the International Commission on Illumination, or CIE, the Lab color space is designed to be device-independent, encompassing all perceivable colors. Its three dimensions depict lightness (L), and color opponents (a and b) — the latter two varying between green-red and blue-yellow axes respectively. This makes it useful for measuring the differences between colors. However, it’s not very intuitive; for example, unless you’ve spent a lot of time working with the lab color space, it’s probably hard to imagine what a pair of (a, b) values like (70, -15), represents. [^1]

LCh (**L**uminosity, **C**hroma, **h**ue) is more ergonomic, but still perceptually uniform color space. It’s a cylindrical color space, which means that along the hue axis, colors change from red to blue to green, and then back to red — like traveling on a roundabout. Along the way, each color appears equally bright and colorful. Moving along the luminosity axis, a color appears brighter or dimmer but equally colorful, like adjusting a flashlight's distance from a painted wall. Along the chroma axis, a color stays equally bright but looks more or less colorful, like it’s being mixed with different amounts of gray paint.

LCh trades off some of lab’s functionality for being more intuitive. But LCh can be clunky, too, because the C (chroma) axis starts at 0 and don’t have a strict upper limit. Chroma is meant to be a relative measure of a color’s “colorfulness”. Some colors are brighter and more colorful than others: is a light aqua blue as colorful as a neon lime green? How does a brick red compare to a grape soda purple? The chroma scale is meant to make these comparisons possible.

But try for a moment to imagine a sea green as rich and deep as an ultraviolet blue. Lab and LCh both let you specify these “impossible” colors that don’t have a real-world representation. In technical parlance, they’re called “out of gamut,” since they can’t be produced by screens, or seen by human eyes.

The existence of out-of-gamut colors makes it hard to reliably build a color system in LCh or lab color space. Finding colors with consistent properties is a manual rocess; when Stripe was building its previous color system using lab, the team built a specialized tool for visualizing the boundaries of possible colors, allowing designers to tweak each shade to maximize its saturation. This isn’t a tenable solution for most teams; what if there was a color space that combined the simplicity of RGB and HSL with the perceptual uniformity of lab and LCh?

Björn Ottosson, creator of the [OKLab color space](https://bottosson.github.io/posts/oklab/), did just that in his blog post “[OKHsv and OKHsl — two new color spaces for color picking](https://bottosson.github.io/posts/colorpicker/).” OKHsl is similar to Lch in that it has three components, one for hue, one for colorfulness, and one for lightness. Like LCh, the hue axis is a circle with 360 degrees. The lightness axis is similar to Lch’s luminosity, going from 0 to 1 for every hue. In place of Lch’s chroma channel, though, OKHsl uses an absolute saturation axis that goes from 0 to 1 for every hue, at every lightness. 0 represents the least saturated color (grays ranging from white to black), and 1 represents the most saturated color available in the sRGB gamut.

Practically, OKHsl allows for easier color selection and manipulation. It bypasses the issues found in LCh or lab, creating an intuitive, straightforward, and user-friendly system that can produce the desired colors without worrying about out-of-gamut colors. That’s why it’s the best space for generating color pallettes for design systems.

[^1]: (70, -15) is the coordinate for pink in lab colors space.