'use strict';
/**
 * The @11ty/eleventy configuration.
 *
 * For a full list of options, see: https://www.11ty.io/docs/config/
 */
module.exports = function (eleventyConfig) {
  const dirs = {
    input: 'src/assets/',
    data: `../data/`,
    includes: `../_includes/`,
  };

  // markdown config
  const markdownIt = require('markdown-it');
  const markdownItFootnote = require('markdown-it-footnote');
  const markdownItImplicitFigures = require('markdown-it-implicit-figures');
  const markdownItLinkAttributes = require('markdown-it-link-attributes');
  const markdownItAnchor = require('markdown-it-anchor');
  const markdownItToc = require('markdown-it-toc-done-right');
  const pluginRss = require('@11ty/eleventy-plugin-rss');
  const dateFilter = require('nunjucks-date-filter');
  const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
  const { parse } = require('node-html-parser');
  const Image = require('@11ty/eleventy-img');
  const mathjaxPlugin = require('eleventy-plugin-mathjax');
  const embedTwitter = require('eleventy-plugin-embed-twitter');

  const lazyImages = function lazyImages(eleventyConfig, userOptions = {}) {
    const options = {
      name: 'lazy-images',
      ...userOptions,
    };

    eleventyConfig.addTransform(options.extensions, (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        const root = parse(content);
        const images = root.querySelectorAll('img');
        images.forEach((img) => {
          img.setAttribute('loading', 'lazy');
        });
        return root.toString();
      }
      return content;
    });
  };
const saveOgImage = async (url) => {
  const options = {
    widths: [1200],
    formats: ['jpeg'],
    outputDir: 'dist/images/og/'
    };

  try {
    const metadata = await Image(url, options);
    if (metadata.jpeg && metadata.jpeg[0] && metadata.jpeg[0].outputPath) {
      return metadata.jpeg[0].outputPath;
    } else {
      console.error(
        `[saveOgImage] ERROR: Failed to get outputPath from eleventy-img for URL: ${url}.`
      );
      console.error(
        '[saveOgImage] Received metadata (or error object if fetch failed):',
        JSON.stringify(metadata, null, 2)
      );
      return undefined;
    }
  } catch (error) {
    console.error(
      `[saveOgImage] ERROR: Exception during eleventy-img processing for URL: ${url}.`
    );
    console.error('[saveOgImage] Full error details:', error);
    return undefined;
  }
};

const saveOgImages = async function setOgImages(eleventyConfig) {
  eleventyConfig.addTransform(
    'save-og-images',
    async (content, outputPath) => {
      if (outputPath && outputPath.endsWith('.html')) {
        const root = parse(content);
        const ogImageMeta = root.querySelector('meta[property="og:image"]');
        const twitterImageMeta = root.querySelector(
          'meta[property="twitter:image"]'
        );

        if (ogImageMeta) { // Only proceed if an og:image tag exists
          const ogImageContent = ogImageMeta.getAttribute('content');
          if (!ogImageContent || ogImageContent.trim() === '') {
            console.warn(
              `[Transform] WARNING: Empty og:image content in ${outputPath}`
            );
          } else {
            try {
              const ogURL = new URL(ogImageContent);
              // Check if it's one of your dynamic OG URLs
              if (ogURL.pathname === '/og') {
                const urlToFetch = new URL(ogURL.href);
                const cacheBuster = `${Date.now()}_${Math.random()
                  .toString(36)
                  .substring(2, 7)}`;
                urlToFetch.searchParams.append('build_cb', cacheBuster);

                let newLocalImagePath = await saveOgImage(urlToFetch.href);

                if (newLocalImagePath) {
                  let publicImagePath = newLocalImagePath.startsWith('dist/')
                    ? newLocalImagePath.substring('dist/'.length)
                    : newLocalImagePath;
                  const finalOgImageUrl = `https://matthewstrom.com/${publicImagePath}`;
                  ogImageMeta.setAttribute('content', finalOgImageUrl);
                  if (twitterImageMeta) {
                    twitterImageMeta.setAttribute('content', finalOgImageUrl);
                  }
                } else {
                  console.error(
                    `[Transform] ERROR: Failed to update meta tags for dynamic OG image from ${ogURL.href} in ${outputPath} (image save failed).`
                  );
                }
              }
              // If not a dynamic URL (pathname !== '/og'), it's skipped silently, no counter incremented
            } catch (urlError) {
              console.warn(
                `[Transform] WARNING: Invalid URL in og:image content "${ogImageContent}" in ${outputPath}. Error: ${urlError.message}`
              );
            }
          }
        }
        // If no ogImageMeta, it's skipped silently
        return root.toString();
      }
      return content;
    }
  );
};

  let mdOptions = {
    html: true,
    typographer: true,
  };
  let mdLib = markdownIt(mdOptions)
    .use(markdownItFootnote)
    .use(markdownItImplicitFigures, {
      dataType: true,
      figcaption: true,
    })
    .use(markdownItLinkAttributes, {
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    })
    .use(markdownItAnchor)
    .use(markdownItToc);

  // set footnote renderer content
  mdLib.renderer.rules.footnote_caption = (tokens, idx) => {
    var n = Number(tokens[idx].meta.id + 1).toString();

    if (tokens[idx].meta.subId > 0) {
      n += ':' + tokens[idx].meta.subId;
    }

    return n;
  };

  mdLib.renderer.rules.footnote_block_open = (
    tokens,
    idx,
    options
  ) => `<section class="footnotes">
<div class="sectionHeader">
<div class="sectionHeader--name">Footnotes & References</div>
<div class="sectionHeader--divider"></div>
</div>
<ol class="footnotes-list">`;

  eleventyConfig.setLibrary('md', mdLib);

  // pass through static assets
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/assets/favicon.png');
  eleventyConfig.addPassthroughCopy('src/assets/tokens');
  eleventyConfig.addPassthroughCopy('src/_redirects');

  eleventyConfig.addFilter('readingTime', function (text) {
    const wordBound = (c) => {
      return ' ' === c || '\n' === c || '\r' === c || '\t' === c;
    };

    let start = 0,
      end = text.length - 1,
      words = 0;

    while (wordBound(text[start])) start++;
    while (wordBound(text[start])) end--;

    for (let i = start; i <= end; ) {
      for (; i <= end && !wordBound(text[i]); i++);
      words++;
      for (; i <= end && wordBound(text[i]); i++);
    }

    const minutes = words / 200;

    return Math.ceil(minutes.toFixed(2));
  });

  // year filter for posts
  eleventyConfig.addFilter('year', function (date) {
    const dateObj = new Date(date);
    return dateObj.getFullYear();
  });

  eleventyConfig.addNunjucksFilter('date', dateFilter);

  // deep merge data
  eleventyConfig.setDataDeepMerge(true);

  // add rss plugins
  eleventyConfig.addPlugin(pluginRss);

  // syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // lazy load images
  eleventyConfig.addPlugin(lazyImages, {});

  // trigger for og images function
  eleventyConfig.addPlugin(saveOgImages);

  // mathjax plugin
  eleventyConfig.addPlugin(mathjaxPlugin, {
    tex: {
      inlineMath: [['$$', '$$']],
      displayMath: [['$$$', '$$$']],
    },
    svg: {
      scale: 0.9,
    },
  });

  // twitter embed
  eleventyConfig.addPlugin(embedTwitter, {
    cacheText: true,
  });

  // collection for next/prev posts
  eleventyConfig.addCollection('writing', function (collection) {
    const coll = collection.getFilteredByTag('writing');

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data['prevPost'] = prevPost;
      coll[i].data['nextPost'] = nextPost;
    }

    return coll;
  });

  // collection for next/prev projects
  eleventyConfig.addCollection('projects', function (collection) {
    const coll = collection.getFilteredByTag('projects');

    for (let i = 0; i < coll.length; i++) {
      const prevProject = coll[i - 1];
      const nextProject = coll[i + 1];

      coll[i].data['prevProject'] = prevProject;
      coll[i].data['nextProject'] = nextProject;
    }

    return coll;
  });

  eleventyConfig.addShortcode('swatch', function (hex) {
    return `<span class="swatch" style="background: ${hex}"></span> <span class="t--family-mono">${hex}</span>`;
  });

  eleventyConfig.addPairedShortcode(
    'gallery',
    function (content, type = 'post', width = 'wide') {
      let output = '';
      if (type === 'post') {
        output = `</article>
            <div class="gallery gallery--${width}">${content}</div>
        <article class="l--grid-narrow post">`;
      } else {
        output = `</div>
            <div class="gallery gallery--${width}">${content}</div>
        <div class="l--grid-narrow">`;
      }
      return output;
    }
  );

  eleventyConfig.addShortcode(
    'image',
    async function (src, alt, caption, credit) {
      return `<figure>
        <img src="${src}" alt="${alt}" loading="lazy"/>
        <figcaption>
          ${caption ? caption : ''} ${
        credit ? `<span class="figure--credit">${credit}</span>` : ''
      }
        </figcaption>
        </figure>`;
    }
  );

  eleventyConfig.addShortcode('linkArrow', function () {
    return `<svg class="linkArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <g fill-rule="evenodd">
                        <path class="linkArrow--line" d="M0 5h7"></path>
                        <path class="linkArrow--tip" d="M1 1l4 4-4 4"></path>
                    </g>
                </svg>`;
  });

  eleventyConfig.addShortcode(
    'stub',
    function (post, showExcerpt = true, showYear = false) {
      const isProject = post.data.tags.includes('projects');
      const { DateTime } = require('luxon');
      const date = showYear
        ? DateTime.fromJSDate(post.date).toFormat('LLL dd, yyyy')
        : DateTime.fromJSDate(post.date).toFormat('LLL dd');
      const title = post.data.title;
      const url = post.url;
      const stub = post.data.stub;
      let thumbnail = '';
      if (post.data.thumbnail) {
        thumbnail = `<div class="stub--thumbnail"><img class="figure--themeable-light" src="${post.data.thumbnail.light}" alt="${title}" loading="lazy"/>
        <img class="figure--themeable-dark" src="${post.data.thumbnail.dark}" alt="${title}" loading="lazy"/></div>`;
      }

      // If the post is a project, use the project template
      if (isProject) {
        return `<a class="stub stub--project unstyled" href="${url}">
        <div class="stub--projectHeader">
          <div class="stub--header">
          <div class="stub--date">${DateTime.fromJSDate(post.date).toFormat(
            'yyyy'
          )}</div>
          <h2 class="stub--title">
            ${title}
            ${eleventyConfig.getShortcodes().linkArrow()}
          </h2>
          </div>
          <div class="stub--text">${post.data.subtitle}</div>
        </div>
        ${thumbnail}
          </a>`;
      } else {
        return `<a class="stub stub--post unstyled" href="${url}">
    <div class="stub--header">
      <div class="stub--date">${date}</div>
      <h2 class="stub--title">
        ${title}
        ${eleventyConfig.getShortcodes().linkArrow()}
      </h2>
    </div>
    ${showExcerpt && stub ? `<div class="stub--text">${stub}</div>` : ''}
  </a>`;
      }
    }
  );

  const fs = require('fs');

  eleventyConfig.addTransform(
    'injectEmailBeforeFootnotes',
    function (content, outputPath) {
      if (outputPath && outputPath.endsWith('.html')) {
        const emailPartial = fs.readFileSync(
          './src/_includes/components/email.html',
          'utf-8'
        );

        // Try injecting before footnotes
        const footnotesRegex = /<section[^>]*class=["']?footnotes["'][^>]*>/i;
        if (footnotesRegex.test(content)) {
          return content.replace(footnotesRegex, `${emailPartial}\n$&`);
        }

        // Fallback: replace emailFallback div
        const fallbackRegex =
          /<div[^>]*class=["']?emailFallback["'][^>]*>\s*<\/div>/i;
        if (fallbackRegex.test(content)) {
          return content.replace(fallbackRegex, emailPartial);
        }

        // If neither exists, remove unused fallback container
        const unusedFallbackRegex =
          /<div[^>]*class=["']?emailFallback["'][^>]*>\s*<\/div>/i;
        return content.replace(unusedFallbackRegex, '');
      }

      return content;
    }
  );

  return {
    dir: dirs,
    pathPrefix: '/',
  };
};
