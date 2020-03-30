'use strict'

const glob = require('fast-glob')
const path = require('path')

/**
 * The @11ty/eleventy configuration.
 *
 * For a full list of options, see: https://www.11ty.io/docs/config/
 */
module.exports = function(eleventyConfig) {
    const dirs = {
        input: 'src/assets/',
        data: `../data/`,
        includes: `../includes/`,
    }

    // markdown config
    const markdownIt = require('markdown-it')
    const markdownItFootnote = require('markdown-it-footnote')
    const markdownItImplicitFigures = require('markdown-it-implicit-figures')
    const markdownItLinkAttributes = require('markdown-it-link-attributes')
    const markdownItAnchor = require('markdown-it-anchor')
    const markdownItToc = require('markdown-it-toc-done-right')
    const pluginRss = require('@11ty/eleventy-plugin-rss')
    const dateFilter = require('nunjucks-date-filter')
    const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

    let mdOptions = {
        html: true,
        typographer: true,
    }
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
        .use(markdownItToc)

    // set footnote renderer content
    mdLib.renderer.rules.footnote_caption = (tokens, idx) => {
        var n = Number(tokens[idx].meta.id + 1).toString()

        if (tokens[idx].meta.subId > 0) {
            n += ':' + tokens[idx].meta.subId
        }

        return n
    }

    mdLib.renderer.rules.footnote_block_open = (tokens, idx, options) =>
        '<hr/>\n' +
        '<section class="footnotes l--space-compact">\n' +
        '<div class="t--weight-bold l--pad-btm-s">Footnotes & References</div>\n' +
        '<ol class="footnotes-list">\n'

    eleventyConfig.setLibrary('md', mdLib)

    // pass through static assets
    eleventyConfig.addPassthroughCopy('src/assets/images')
    eleventyConfig.addPassthroughCopy('src/assets/fonts')
    eleventyConfig.addPassthroughCopy('src/assets/js')
    eleventyConfig.addPassthroughCopy('src/assets/favicon.ico')
    eleventyConfig.addPassthroughCopy('src/assets/favicon.png')


    eleventyConfig.addFilter('readingTime', function(text) {
        const wordBound = c => {
            return ' ' === c || '\n' === c || '\r' === c || '\t' === c
        }

        let start = 0,
            end = text.length - 1,
            words = 0

        while (wordBound(text[start])) start++
        while (wordBound(text[start])) end--

        for (let i = start; i <= end; ) {
            for (; i <= end && !wordBound(text[i]); i++);
            words++
            for (; i <= end && wordBound(text[i]); i++);
        }

        const minutes = words / 200

        return Math.ceil(minutes.toFixed(2))
    })

    // year filter for posts
    eleventyConfig.addFilter('year', function(date) {
        const dateObj = new Date(date)
        return dateObj.getFullYear()
    })

    eleventyConfig.addNunjucksFilter('date', dateFilter)

    // deep merge data
    eleventyConfig.setDataDeepMerge(true)

    // add rss plugins
    eleventyConfig.addPlugin(pluginRss)

    // syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight)

    // collection for next/prev posts
    eleventyConfig.addCollection("writing", function(collection) {
        const coll = collection.getFilteredByTag("writing");
      
        for(let i = 0; i < coll.length ; i++) {
          const prevPost = coll[i-1];
          const nextPost = coll[i + 1];
      
          coll[i].data["prevPost"] = prevPost;
          coll[i].data["nextPost"] = nextPost;
        }
      
        return coll;
      });

    return {
        dir: dirs,
        pathPrefix: '/',
    }
}
