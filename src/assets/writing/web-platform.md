---
title:  "Why the Web Will Win"
date:   2018-01-06
tags:
  - the internet
---

197 billion apps were downloaded in 2017[^1]: that's almost 26 per human being on the planet Earth. 6 apps per second. In the 10 years since Apple opened the App Store, app downloads have doubled, on average, every two years.[^2]

Given the numbers, it's not surprising that many veterans of the web platform have declared it as second-rate:

> I feel it’s time to revisit the web vs. native debate, and concede defeat — or, at least, concede that the web cannot, and should not, compete with native when it comes to complex, app-like structures.  
> -- _Peter-Paul Koch, 2015_[^3]

> Websites are just services, and what you see in a browser tab is merely one possible interface to that service. The best possible interface to that service is often, if not usually, going to be a native app, not a web app.  
> -- _John Gruber, 2013_[^4]

To Mr. Gruber's credit, things were looking pretty grim for the web platform in 2013. But the web did what the web does: it grew. Looking ahead, it's clear to me that the web is, and will continue to be, the platform of record. The web will win.

---

## The web has already won

The web is designed to be open-source, and therefore it is designed to last.

Tim Berners-Lee's 1989 proposal for the World Wide Web wasn't the most technically sophisticated vision of the early internet, nor was it the most popular at the time. However, in 1993, Berners-Lee and CERN open-sourced all of the technology associated with the World Wide Web.[^5] The open nature of the World Wide Web meant it could be implemented by anyone, anywhere, on any computer.

The web platform as we know it today — HTML, JavaScript, and CSS — has existed since 1996 and the release of Internet Explorer 3. In the 22 years since, Facebook, Google, Amazon[^8], and Alibaba all launched first on the web platform.

Since then, other platforms have come and gone. Blackberry once controlled 50% of the smartphone market — now, it has just 0.048%.[^6] Windows Mobile accounted for 23% of smartphone sales in 2004. By 2017, it had dropped to 0.3%.[^7] All the while, the largest companies in the world continued to invest in the web.

This level of investment is only possible because of the web’s open-source nature. Collaboration between major companies shapes the web today:

- Google and Apple are the two largest contributors to **WebKit**, the foundation of Safari.[^9]
- Google Chrome is built on **Blink**, itself an offshoot of WebKit.
- **V8**, Chrome’s JavaScript rendering engine, also powers **Node.js**, which is quickly becoming lingua franca for server-side applications.
- **React**, Facebook’s JavaScript interface builder, has contributors and users at Airbnb, Uber, Netflix, Twitter, Pinterest, Reddit, and more.[^10]

All of these frameworks are open source. Hundreds of thousands of developers, from thousands of companies, collaborate on and contribute to the ongoing development of the bedrock of the web platform.

## The next billion users

In 2015, there were 3 billion internet users. In 2020, that number is projected to reach 4.1 billion.[^11] Each of those 1.1 billion people will have access to the web platform, no matter what device or operating system they use.

Google and Facebook pour resources into connecting new users to the web. Facebook alone claims to have put 40 million new users on the web in the last 5 years, through their Internet.org initiative.[^12] Google’s Project Loon goes further, putting flocks of balloons into the stratosphere to broadcast the internet anywhere on earth. While initially dismissed as mad science, Project Loon recently proved itself a viable technology by providing internet access to 100,000 Puerto Ricans after Hurricane Maria destroyed the island’s data infrastructure.[^13]

Providing rich experiences to new internet users through the web platform has proven valuable to the world’s largest companies:

-  Alibaba **increased conversions from web 76%** by building a web app. Their monthly active users subsequently increased 14% on iOS and 30% on Android.[^14]
-  Twitter now sends all of its mobile web traffic through a web app called Twitter Lite. Twitter Lite weighs in at **600KB**, compared to the 23MB load of the native Android app. Its introduction came with a **65% increase in pages-per-session**, along with a **75% increase in tweets sent.**[^16]
-  Uber launched m.uber, a fully-featured progressive web app, in 2017. It allows a user to book a ride, regardless of location, network speed, or device. The initial app load is just **50kb,** making it significantly smaller and faster than the native equivalents.[^17]
- Starbucks launched a web app to enable mobile ordering on any device. Users can now find local stores, create and customize food and drink orders, and complete the checkout process from the web platform. The progressive web app uses **99.84% less data** — 233kb, compared to the 148mb iOS app[^18].

For these companies, optimizing for new internet users by building on the web platform has paid significant dividends.

## The next big platform

Back to John Gruber’s argument: “The best possible interface [is] going to be a native app.” In 2013, that might have been true; in 2018, it’s questionable. The web platform has quietly evolved to match, if not surpass, the capabilities of native apps.

**Progressive Web Apps** are one of the most exciting developments of the web platform in the last 10 years.[^19] PWAs work with low internet connectivity, or no internet connectivity at all. They have access to device hardware like the camera and accelerometer, enabling native functionality. Some platforms — notably Android — make no distinction between native apps and PWAs.

**WebGL** is a web API that allows developers to render 2d and 3d graphics without any additional plugins. With WebGL 1.0 implemented in every major browser, web apps can use the same hardware as native apps to create rich visual experiences. Autodesk recently ported all of their flagship applications to web apps using WebGL, including industry standard AutoCAD.[^20] Figma, a new design application, runs entirely in the browser. It performs equally to or better than its competitors, Sketch, Illustrator, and Adobe XD.

**WebAssembly** is a relatively new concept, but it promises to revolutionize how web applications are built. In a nutshell, WebAssembly allows developers to run code in an extremely high-performance and high-security environment, all inside a browser[^21]. Additionally, code written in C++ can be efficiently and automatically translated into WebAssembly; apps written for native platforms can be easily converted and distributed on the web platform.[^22]

**Payment Request API** is a new specification with a bold mission: _eliminate checkout forms[^23]._ The Payment Request API hooks into platform payment systems — think Apple Pay and Google Wallet/Android Pay — and securely handles the exchange of credentials.

**React Native and Electron** are two examples of  how web platform technology is invading other platforms:

- React Native is an extension of Facebook’s React library. It allows developers to write a single code base (in Javascript), and compile to other native platforms (like Objective C and Java).[^24] In addition to making it easy to write the same code for both iOS and Android, the newer React Native Web library introduces the idea of a single code base for _every_ platform, including the web[^25].
- Electron, on the other hand, runs web platform code _inside_ desktop platforms, hooking into low-level functionality to run efficiently.[^26]

---

## The web is dead, long live the web

The first 22 years of the web platform were revolutionary. The open, accessible, and feature-rich applications that exist on the platform continue to drive the global economy. The next 5 years look like they’ll be filled with more innovation and growth than ever.

The web will be the platform of the Next Big Thing. Not just as the distribution network many see it as today; the web platform will deliver the most innovative experiences. They’ll be innovative not just for how they use new technology, but also because of how easy it will be for new users to experience.

The web is alive, and better than ever.

[^1]: <https://www.statista.com/statistics/271644/worldwide-free-and-paid-mobile-app-store-downloads/>

[^2]: <https://www.statista.com/statistics/263794/number-of-downloads-from-the-apple-app-store/>

[^3]: <https://www.quirksmode.org/blog/archives/2015/05/web_vs_native_l.html>

[^4]: <https://daringfireball.net/2013/04/web_apps_native_apps>

[^5]: <https://www.inverse.com/article/14959-celebrating-23-years-of-the-www-how-tim-berners-lee-open-sourced-the-internet>

[^6]: <http://nymag.com/selectall/2017/02/blackberrys-global-market-share-is-now-0-0.html>

[^7]: <https://adtmag.com/articles/2017/02/16/windows-mobile.aspx>

[^8]: Amazon, in fact, existed before CSS (but not Javascript).

[^9]: <http://appleinsider.com/articles/13/02/11/apple-google-nearly-tied-as-top-contributors-to-webkit-as-adoption-expands>

[^10]: <https://github.com/facebook/react/wiki/Sites-Using-React>

[^11]: <https://www.huffingtonpost.com/john-garrity/internet-user-growth-over_b_10603196.html>

[^12]: <https://techcrunch.com/2016/11/02/omnipresent/>

[^13]: <https://www.engadget.com/2017/11/09/project-loon-delivers-internet-100-000-people-puerto-rico/>

[^14]: <https://developers.google.com/web/showcase/2016/alibaba>

[^15]: <https://developers.google.com/web/showcase/2017/bookmyshow>

[^16]: <https://developers.google.com/web/showcase/2017/twitter>

[^17]: <https://eng.uber.com/m-uber/>

[^18]: <https://formidable.com/work/starbucks-progressive-web-app/>

[^19]: To learn more about progressive web apps, Check out this [excellent Smashing Magazine essay](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/).

[^20]: <https://www.3dcadworld.com/autodesk-fusion-360-the-future-of-cad-part-1/>

[^21]: A great intro to WebAssembly is [this post by Mozilla](https://blog.mozilla.org/blog/2017/11/13/webassembly-in-browsers/), which coincidentally marks a big milestone in the technology’s development.

[^22]: Figma switched to WebAssembly to compile their C++ code, resulting in a [3x performance improvement](https://blog.figma.com/webassembly-cut-figmas-load-time-by-3x-76f3f2395164).

[^23]: <https://developers.google.com/web/fundamentals/payments/>

[^24]: <https://facebook.github.io/react-native/>

[^25]: <https://github.com/necolas/react-native-web>

[^26]: In fact, modern code editors — the tools developers are using to write all other applications — are being built on the web platform. See [Atom](https://atom.io/) and [VS Code](https://code.visualstudio.com/).
