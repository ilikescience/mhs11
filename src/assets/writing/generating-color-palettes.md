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

**Lab** is an example of a perceptually uniform color space. Developed by the International Commission on Illumination, or CIE, the Lab color space is designed to be device-independent, encompassing all perceivable colors. Its three dimensions depict lightness (L), and color opponents (a and b) — the latter two varying between green-red and blue-yellow axes respectively. This makes it useful for measuring the differences between colors. However, it’s not very intuitive; for example, unless you’ve spent a lot of time working with the lab color space, it’s probably hard to imagine what a pair of (a, b) values like (70, -15), represents.[^1]

LCh (**L**uminosity, **C**hroma, **h**ue) is more ergonomic, but still perceptually uniform color space. It’s a cylindrical color space, which means that along the hue axis, colors change from red to blue to green, and then back to red — like traveling on a roundabout. Along the way, each color appears equally bright and colorful. Moving along the luminosity axis, a color appears brighter or dimmer but equally colorful, like adjusting a flashlight's distance from a painted wall. Along the chroma axis, a color stays equally bright but looks more or less colorful, like it’s being mixed with different amounts of gray paint.

LCh trades off some of lab’s functionality for being more intuitive. But LCh can be clunky, too, because the C (chroma) axis starts at 0 and don’t have a strict upper limit. Chroma is meant to be a relative measure of a color’s “colorfulness”. Some colors are brighter and more colorful than others: is a light aqua blue as colorful as a neon lime green? How does a brick red compare to a grape soda purple? The chroma scale is meant to make these comparisons possible.

But try for a moment to imagine a sea green as rich and deep as an ultraviolet blue. Lab and LCh both let you specify these “impossible” colors that don’t have a real-world representation. In technical parlance, they’re called “out of gamut,” since they can’t be produced by screens, or seen by human eyes.

The existence of out-of-gamut colors makes it hard to reliably build a color system in LCh or lab color space. Finding colors with consistent properties is a manual rocess; when Stripe was building its previous color system using lab, the team built a specialized tool for visualizing the boundaries of possible colors, allowing designers to tweak each shade to maximize its saturation. This isn’t a tenable solution for most teams; what if there was a color space that combined the simplicity of RGB and HSL with the perceptual uniformity of lab and LCh?

Björn Ottosson, creator of the [OKLab color space](https://bottosson.github.io/posts/oklab/), did just that in his blog post “[OKHsv and OKHsl — two new color spaces for color picking](https://bottosson.github.io/posts/colorpicker/).” OKHsl is similar to Lch in that it has three components, one for hue, one for colorfulness, and one for lightness. Like LCh, the hue axis is a circle with 360 degrees. The lightness axis is similar to Lch’s luminosity, going from 0 to 1 for every hue. In place of Lch’s chroma channel, though, OKHsl uses an absolute saturation axis that goes from 0 to 1 for every hue, at every lightness. 0 represents the least saturated color (grays ranging from white to black), and 1 represents the most saturated color available in the sRGB gamut.

Practically, OKHsl allows for easier color selection and manipulation. It bypasses the issues found in LCh or lab, creating an intuitive, straightforward, and user-friendly system that can produce the desired colors without worrying about out-of-gamut colors. That’s why it’s the best space for generating color pallettes for design systems.

## Using OKHsl

Practically speaking, to use OKHsl, you need to be able to convert colors to and from sRGB. This is a fairly straightforward calculation, but it’s not built into most design tools. Bjorn Ottosson linked the [javascript code to do this conversion](https://github.com/bottosson/bottosson.github.io/blob/master/misc/colorpicker/colorconversion.js) in his blog post, and the library colorjs.io will soon have support for OKHsl.

Going forward, I'll assume you have a way to convert colors to and from OKHsl. If you don’t, you can use the code I’ve written to generate a color palette in OKHsl, and then convert it to sRGB for use in your design system.

## First steps with generated scales

To get started generating our color scales, we need a few values:

1. The hue of the color we want to generate
2. The saturation of the color we want to generate
3. A list of lightness values we want to generate

For example, we can generate a cool neutral color scale by choosing these values:

1. Hue: 250
2. Saturation: 5
3. Lightness values:
    - Light: 85
    - Medium: 50
    - Dark: 15

Using those values to pick colors in the OKHsl color space, we get the following palette:

<table class="table--responsive">
    <colgroup span=2"></colgroup>
    <thead>
        <tr>
            <th class="table--group-header table--group-start table--group-end t--weight-bold" colspan="2">Neutral</th>
        </tr>
        <tr>
            <th class="table--group-start">OKHsl</th>
            <th class="table-group-end">sRGB Hex</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="table--group-start">250, 5, 85</td>
            <td class="table--group-end">{% swatch '#d2d5d8' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">250, 5, 50</td>
            <td class="table--group-end">{% swatch '#73787c' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">250, 5, 15</td>
            <td class="table--group-end">{% swatch '#212325' %}</td>
        </tr>
    </tbody>
</table>

We can do the same thing for all our colors, picking numbers to build out the entire system.

<table class="table--responsive">
  <thead>
    <tr>
      <th
        class="table--group-header table--group-start table--group-end t--weight-bold"
        colspan="2"
      >
        Neutral
      </th>
      <th
        class="table--group-header table--group-start table--group-end t--weight-bold"
        colspan="2"
      >
        Blue
      </th>
    </tr>
    <tr>
      <th class="table--group-start">OKHsl</th>
      <th class="table-group-end">sRGB Hex</th>
      <th class="table--group-start">OKHsl</th>
      <th class="table-group-end">sRGB Hex</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="table--group-start">250, 5, 85</td>
      <td class="table--group-end">{% swatch '#d2d5d8' %}</td>
      <td class="table--group-start">250, 90, 85</td>
      <td class="table--group-end">{% swatch '#b6d9fd' %}</td>
    </tr>
    <tr>
      <td class="table--group-start">250, 5, 50</td>
      <td class="table--group-end">{% swatch '#73787c' %}</td>
      <td class="table--group-start">250, 90, 50</td>
      <td class="table--group-end">{% swatch '#1a7acb' %}</td>
    </tr>
    <tr>
      <td class="table--group-start">250, 5, 15</td>
      <td class="table--group-end">{% swatch '#252628' %}</td>
      <td class="table--group-start">250, 90, 15</td>
      <td class="table--group-end">{% swatch '#022342' %}</td>
    </tr>
  </tbody>
</table>

<table class="table--responsive">
  <thead>
    <tr>
      <th
        class="table--group-header table--group-start table--group-end t--weight-bold"
        colspan="2"
      >
        Green
      </th>
      <th
        class="table--group-header table--group-start table--group-end t--weight-bold"
        colspan="2"
      >
        Red
      </th>
      <th
        class="table--group-header table--group-start table--group-end t--weight-bold"
        colspan="2"
      >
        Yellow
      </th>
    </tr>
    <tr>
      <th class="table--group-start">OKHsl</th>
      <th class="table-group-end">sRGB Hex</th>
      <th class="table--group-start">OKHsl</th>
      <th class="table-group-end">sRGB Hex</th>
      <th class="table--group-start">OKHsl</th>
      <th class="table-group-end">sRGB Hex</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="table--group-start">145, 90, 85</td>
      <td class="table--group-end">{% swatch '#6af778' %}</td>
      <td class="table--group-start">20, 90, 85</td>
      <td class="table--group-end">{% swatch '#fec3ca' %}</td>
      <td class="table--group-start">100, 90, 85</td>
      <td class="table--group-end">{% swatch '#eed63d' %}</td>
    </tr>
    <tr>
      <td class="table--group-start">145, 90, 50</td>
      <td class="table--group-end">{% swatch '#388b3f' %}</td>
      <td class="table--group-start">20, 90, 50</td>
      <td class="table--group-end">{% swatch '#d32d43' %}</td>
      <td class="table--group-start">100, 90, 50</td>
      <td class="table--group-end">{% swatch '#877814' %}</td>
    </tr>
    <tr>
      <td class="table--group-start">145, 90, 15</td>
      <td class="table--group-end">{% swatch '#0c2a0e' %}</td>
      <td class="table--group-start">20, 90, 15</td>
      <td class="table--group-end">{% swatch '#45060f' %}</td>
      <td class="table--group-start">100, 90, 15</td>
      <td class="table--group-end">{% swatch '#282302' %}</td>
    </tr>
  </tbody>
</table>

## Scaling up

For bigger projects, you'll often need more than just three shades per color. Choosing the right number can be tricky: too few shades limit your options, but too many can cause confusion.

This can seem daunting, particularly in the early stages of your design system. But there's a method to simplify this: use a consistent numbering system, ensuring your color choices remain versatile no matter how your system evolves.

This system is often referred to as 'magic numbers.' If you're familiar with Tailwind CSS or Material Design, you've seen this in action. Instead of naming shades like 'light' or 'dark,' each shade gets a number. For instance, in Tailwind, the scale goes from 0 to 1,000, and in Material Design, it's 0 to 100. The extremes often correspond to near-white or near-black, with middle numbers denoting pure hues.

The beauty of this system is its flexibility. If you initially use shades named 'red 500' and 'red 700', and later need something in between, you can simply introduce 'red 600'. This keeps your design adaptable and intuitive.
Another bonus of magic numbers is that we can often plug the number directly into a color picker to scale the lightness of the shade. That’s why, for the rest of this essay, I’ll call these scale numbers.

For example, if we wanted to create a more extensive color scale for our blues, we could use the following values in the OKHsl color space:

<table class="table--responsive">
    <colgroup span=2"></colgroup>
    <thead>
        <tr>
            <th class="table--group-header table--group-start table--group-end t--weight-bold" colspan="3">Blue</th>
        </tr>
        <tr>
            <th class="table--group-start">Scale Number</th>
            <th>OKHsl</th>
            <th class="table-group-end">sRGB Hex</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="table--group-start">0</td>
            <td>250, 90, 100</td>
            <td class="table--group-end">{% swatch '#ffffff' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">10</td>
            <td>250, 90, 90</td>
            <td class="table--group-end">{% swatch '#cfe5fe' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">20</td>
            <td>250, 90, 80</td>
            <td class="table--group-end">{% swatch '#9dccfd' %}</td>
        </tr>
         <tr>
            <td class="table--group-start">30</td>
            <td>250, 90, 70</td>
            <td class="table--group-end">{% swatch '#68b1f9' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">40</td>
            <td>250, 90, 60</td>
            <td class="table--group-end">{% swatch '#3395ed' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">50</td>
            <td>250, 90, 50</td>
            <td class="table--group-end">{% swatch '#1b7acb' %}</td>
        </tr>
         <tr>
            <td class="table--group-start">60</td>
            <td>250, 90, 40</td>
            <td class="table--group-end">{% swatch '#0f60a3' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">70</td>
            <td>250, 90, 30</td>
            <td class="table--group-end">{% swatch '#08477c' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">80</td>
            <td>250, 90, 20</td>
            <td class="table--group-end">{% swatch '#032f55' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">90</td>
            <td>250, 90, 10</td>
            <td class="table--group-end">{% swatch '#01172e' %}</td>
        </tr>
        <tr>
            <td class="table--group-start">100</td>
            <td>250, 90, 0</td>
            <td class="table--group-end">{% swatch '#000000' %}</td>
        </tr>
    </tbody>
</table>

We’ve turned the scale number into the lightness value with the function $$L(n) = 1-n$$. In this formula, n is a normalized value — one that goes from 0 to 1 — that represents our scale number, and L(n) is the lightness value in OKHsl.

It turns out that using functions and formulas in combination with scale numbers is a powerful way to create expressive color scales that can power beautiful design systems.

## Making scales expressive: Leveraging hue and saturation

One advantage of scale numbers is the ability to plug them directly into a color picker to dictate the lightness of a shade. But scale numbers really show their usefulness and versatility when you leverage them across every component of your color system. That means venturing beyond lightness to explore hue and saturation, too.

### Hue

When using scale numbers to control lightness, it's easy to assume hue and saturation will behave consistently across the lightness range. However, our perception of color doesn't work that simply.

Hue can appear to shift dramatically between light and dark shades of the same color due to a phenomenon called the Bezold–Brücke effect: colors tend to look more purplish in shadows and more yellowish in highlights.
  
So if we want to maintain consistent hue perception, we can use scale numbers for adapting the hues of our color scales. As lightness decreases, blues and reds should shift slightly towards more violet/purple tones to counteract the Bezold–Brücke effect. Likewise, as lightness increases, yellows, oranges, and reds should shift towards more yellowish hues. [^2][^3]

<figure>
  <img src="/images/generating-color-palettes-1.png">
  <img src="/images/generating-color-palettes-2.png">
  <figcaption>Purple without (top) and with (bottom) accounting for the Bezold–Brücke shift</figcaption>
</figure>

<figure>
  <img src="/images/generating-color-palettes-3.png">
  <img src="/images/generating-color-palettes-4.png">
  <figcaption>Red without (top) and with (bottom) accounting for the Bezold–Brücke shift</figcaption>
</figure>

In both examples above, we've used the scale number to shift the hue slightly as the lightness increases. This looks like the following formula: $$H(n) = H_{base} + 5*(1 - n)$$. H(n) is the hue at a given normalized scale value; H<sub>base</sub> is the "base hue" of the color. The 5*(1 - n) term means the hue will change by 5 degrees as the scale number goes from one end to the other. If you’re using this formula, you should tweak the numbers to your liking.

By making hue a function of lightness, with the scale number adjusting hue accordingly, hues look more consistent and harmonious across the entire scale. The shifts don’t need to be large – even subtle hue variations of a few percentage points can perceptually compensate for natural hue shifts with changing brightness.

## Saturation/Chroma

From our understanding of the CIE LCh color space and its sibling, the OKHsl color space, we know that colors generally attain their peak chroma around the middle of the lightness scale.[^4]

In design, this presents a fantastic opportunity. By designing our color scales such that the midpoint is the most chromatically rich, we can make sure that our colors are the most vibrant and saturated where it matters most. Conversely, as we veer towards the lightness extremes, we can have chroma values that taper off, ensuring that our brightest and darkest shades remain subtle and balanced.

OKHsl gives us a saturation component that goes from 0% to 100% of the possible chroma at a given hue and lightness value. We can take advantage of this by using the normalized scale number as an input to a function that goes from a minimum saturation to a maximum and back again.

<figure>
  <img src="/images/generating-color-palettes-5.png">
  <img src="/images/generating-color-palettes-6.png">
  <figcaption>Green with constant saturation (top) and varying saturation (bottom)</figcaption>
</figure>

In practice, the formula for achieving this looks like this: $$S(n) = -4n^2 + 4n$$, where S(n) is the saturation at a given (normalized, as before) scale value n. The formula is an upside-down parabola, which starts at 0% and peaks at 100% when the scale value is 0.5. 

You can add a few terms to adjust the minimum and maximum saturation if you’d like to adjust the scale further:

<div class="t--align-center">
$$S(n) = -4(S_{\text{max}} - S_{\text{min}})n^2 + 4(S_{\text{max}} - S_{\text{min}})n + S_{\text{min}}$$
</div>

Neutrals, for example, don’t need a high maximum saturation. But most colors do well moving between 0% and 100% saturation.

## In practice: Crafting colors with functions

Let’s put this into practice and generate an extensive color scale with only a handful of functions. Functions allow us to build a flexible framework that is resilient to change and can be easily adapted to new requirements; if we need to add colors, tweak hues, or adjust saturation, we can do so without rewriting the entire system.

### Pick base hues

First, let’s pick a handful of base hues. At the very least, you’ll need a blue for interactive elements like links and buttons, and green, red, and yellow for statuses. Your neutrals need a hue, too; though it won’t show up much, a cool neutral and a warm neutral have very different effects on the overall system.

<table class="table--responsive table--bordered">
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th>Neutral</th>
      <th>Blue</th>
      <th>Green</th>
      <th>Red</th>
      <th>Yellow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Base hue (H<sub>base</sub>)</th>
      <td>250</td>
      <td>250</td>
      <td>145</td>
      <td>20</td>
      <td>70</td>
    </tr>
  </tbody>
</table>

### Add functions for hue, saturation, and lightness

Next, let’s use the functions we came up with earlier to indicate how the colors should change depending on scale numbers. 

<table class="table--responsive table--bordered">
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th>Neutral</th>
      <th>Blue</th>
      <th>Green</th>
      <th>Red</th>
      <th>Yellow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Base hue (H<sub>base</sub>)</th>
      <td>250</td>
      <td>250</td>
      <td>145</td>
      <td>20</td>
      <td>70</td>
    </tr>
    <tr>
      <th scope="row">Hue function</th>
      <td>$$H(n) = 250$$</td>
      <td colspan="4">$$H(n) = H_{base} + 5*(1 - n)$$</td>
    </tr>
    <tr>
      <th scope="row">Saturation function</th>
      <td>$$S(n) = -0.8n^2 + 0.8n$$</td>
      <td colspan="4">$$S(n) = -4n^2 + 4n$$</td>
    </tr>
    <tr>
      <th scope="row">Lightness function</th>
      <td colspan="5">$$L(n) = 1-n$$</td>
    </tr>
  </tbody>
</table>

The hue function is a constant for neutrals, and for the colors we use the function that accounts for the Bezold–Brücke shift.

As for saturation, the neutral colors have a maximum saturation of 20% instead of the full 100%; the rest of the colors use the function that goes from 0% to 100% and back.

The lightness function is the same for all colors.

### Calculate the colors for each scale number

Now let’s let the math work its magic. For each scale number, for every color, we have all the information we need from the base hue, hue function, saturation function, and lightness function.

<table class="table--responsive">
  <thead>
    <tr>
      <th class="table--header-empty"></th>
      <th colspan="5" class="t--align-center table--group-header">sRGB Hex</th>
    </tr>
    <tr>
      <th> Scale Number</th>
            <th>Neutral</th>
      <th>Blue</th>
      <th>Green</th>
      <th>Red</th>
      <th>Yellow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">0</th>
      <td>{% swatch '#ffffff' %}</td>
      <td>{% swatch '#ffffff' %}</td>
      <td>{% swatch '#ffffff' %}</td>
      <td>{% swatch '#ffffff' %}</td>
      <td>{% swatch '#ffffff' %}</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>{% swatch '#e0e3e6' %}</td>
      <td>{% swatch '#dae4f0' %}</td>
      <td>{% swatch '#d8e8d4' %}</td>
      <td>{% swatch '#f9d1d6' %}</td>
      <td>{% swatch '#f7e9a3' %}</td>
    </tr>
  </tbody>
</table>


[^1]: (70, -15) is the coordinate for pink in lab colors space.

[^2]: R. W. Pridmore, "Bezold–Brücke Hue-Shift as Functions of Luminance Level, Luminance Ratio, Interstimulus Interval and Adapting White for Aperture and Object Colors," *Vision Research* 39, no. 19 (1999): 3873-3891.

[^3]: Jesús Lillo et al., "Lightness and Hue Perception: The Bezold-Brücke Effect and Colour Basic Categories," *Psicológica* 25, no. 1 (2004): 23-43.

[^4]: However, it's important to note that this peak can vary slightly depending on the specific hue in question.