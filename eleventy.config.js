import markdownItAnchor from 'markdown-it-anchor'
import markdownItTOC from 'markdown-it-toc-done-right'

import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import pluginNavigation from '@11ty/eleventy-navigation'
import pluginBundle from '@11ty/eleventy-plugin-bundle'
import pluginRss from '@11ty/eleventy-plugin-rss'
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'

import pluginDrafts from './eleventy.config.drafts.js'
import pluginFilters from './eleventy.config.filters.js'
import pluginPicture from './eleventy.config.picture.js'
import pluginTagPages from './eleventy.config.tagPages.js'

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
    './node_modules/prismjs/themes/prism-okaidia.css':
      '/resources/styles/prism.css',
  })

  eleventyConfig.addWatchTarget('public/**/*.{svg,webp,png,jpeg}')
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough')

  // App plugins
  eleventyConfig.addPlugin(pluginDrafts)
  eleventyConfig.addPlugin(pluginPicture)
  eleventyConfig.addPlugin(pluginFilters)
  eleventyConfig.addPlugin(pluginTagPages)

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
      level: [2, 3, 4],
      slugify: eleventyConfig.getFilter('slugify'),
    })

    mdLib.use(markdownItTOC, {
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
