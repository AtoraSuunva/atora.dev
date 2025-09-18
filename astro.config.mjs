// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCallouts from 'rehype-callouts';
import rehypeSemanticBlockquotes from 'rehype-semantic-blockquotes';
import { remarkReadingTime } from './src/plugins/remark-reading-time';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import rehypeCodeGroup from 'rehype-code-group';
import remarkFlexibleCodeTitles from 'remark-flexible-code-titles';
import astroExpressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import preact from '@astrojs/preact';

const expressiveCode = astroExpressiveCode({
  themes: ['dark-plus', 'light-plus'],
  styleOverrides: {
    codeFontFamily: 'var(--font-source-code-pro)',
    codeFontSize: '1em',
    codeBackground: 'var(--code-background)',
    frames: {
      editorTabBarBackground: 'var(--background-darken)',
      editorActiveTabBackground: 'var(--code-background)',
      editorActiveTabIndicatorTopColor: 'var(--secondary-color)',
      editorActiveTabIndicatorHeight: '2px',
      editorActiveTabIndicatorBottomColor: 'transparent',
      terminalBackground: 'var(--code-background)',
      editorBackground: 'var(--code-background)',
      terminalTitlebarBackground: 'var(--background-darken)',
    }
  },
  defaultProps: {
    wrap: true,
  },
  plugins: [
    pluginLineNumbers(),
  ],
})

// https://astro.build/config
export default defineConfig({
  site: 'https://atora.dev',
  integrations: [expressiveCode, mdx(), sitemap(), preact()],
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    remarkRehype: {
      clobberPrefix: '',
    },
    rehypePlugins: [
      [rehypeSlug, { prefix: '' }],
      [rehypeAutolinkHeadings, { behavior: 'append' }],
      [rehypeCallouts, { theme: 'github' }],
      rehypeSemanticBlockquotes,
      rehypeMathjax,
      rehypeCodeGroup,
    ],
    remarkPlugins: [
      remarkFlexibleCodeTitles,
      remarkReadingTime,
      remarkMath,
    ],
  },
  image: {
    responsiveStyles: true,
    layout: 'full-width',
  },
  experimental: {
    // csp: {
    //   directives: [
    //     "frame-ancestors 'none'",
    //   ],
    //   styleDirective:{
    //     resources: [
    //       "'self'",
    //       "'unsafe-inline'",
    //       "'strict-dynamic'",
    //     ]
    //   }
    // },
    contentIntellisense: true,
    preserveScriptOrder: true,
    fonts: [{
      provider: fontProviders.fontsource(),
      name: 'Roboto',
      cssVariable: '--font-roboto',
      fallbacks: ['sans-serif'],
      weights: ['200 900'],
    }, {
      provider: fontProviders.fontsource(),
      name: 'Source Code Pro',
      cssVariable: '--font-source-code-pro',
      fallbacks: ['monospace'],
      weights: ['100 900'],
    }]
  },
});
