const markdownItAnchor = require('markdown-it-anchor')

const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginBundle = require('@11ty/eleventy-plugin-bundle')
const pluginNavigation = require('@11ty/eleventy-navigation')
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

const pluginDrafts = require('./eleventy.config.drafts.js')
const pluginPicture = require('./eleventy.config.picture.js')
const pluginFilters = require('./eleventy.config.filters.js')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
    './node_modules/prismjs/themes/prism-okaidia.css': '/css/prism-okaidia.css',
  })

  eleventyConfig.addWatchTarget('public/**/*.{svg,webp,png,jpeg}')

  // App plugins
  eleventyConfig.addPlugin(pluginDrafts)
  eleventyConfig.addPlugin(pluginPicture)
  eleventyConfig.addPlugin(pluginFilters)

  // Official plugins
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  })
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(pluginBundle)

  // Customize Markdown library settings:
  eleventyConfig.amendLibrary('md', (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: 'after',
        class: 'header-anchor',
        symbol: '#',
        ariaHidden: false,
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter('slugify'),
    })
  })

  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    pathPrefix: '/',
  }
}
