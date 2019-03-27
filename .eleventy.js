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
        '<div>Footnotes:</div>\n' +
        '<ol class="footnotes-list">\n'

    eleventyConfig.setLibrary('md', mdLib)

    // pass through images
    eleventyConfig.addPassthroughCopy('src/assets/images')
    eleventyConfig.addPassthroughCopy('src/assets/fonts')
    eleventyConfig.addPassthroughCopy('src/assets/js')


    // deep merge data
    eleventyConfig.setDataDeepMerge(true)

    // add rss plugins
    eleventyConfig.addPlugin(pluginRss)

    return {
        dir: dirs,
        pathPrefix: '/',
    }
}
