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
    let markdownIt = require('markdown-it')
    let markdownItFootnote = require('markdown-it-footnote')
    let markdownItImplicitFigures = require('markdown-it-implicit-figures')
    let markdownItLinkAttributes = require('markdown-it-link-attributes')
    let markdownItAnchor = require('markdown-it-anchor');
    let markdownItToc = require('markdown-it-toc-done-right');

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
        .use(markdownItToc);

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
        '<div>Footnotes:</div>\n' +
        '<ol class="footnotes-list">\n'

    eleventyConfig.setLibrary('md', mdLib)

    // pass through images
    eleventyConfig.addPassthroughCopy('src/assets/images')
    eleventyConfig.addPassthroughCopy('src/assets/fonts')

    // deep merge data
    eleventyConfig.setDataDeepMerge(true)

    return {
        dir: dirs,
        pathPrefix: '/',
    }
}
