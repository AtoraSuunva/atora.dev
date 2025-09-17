// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCallouts from 'rehype-callouts';
// @ts-expect-error
import rehypeFigure from 'rehype-figure';
import rehypeSemanticBlockquotes from 'rehype-semantic-blockquotes';
import { remarkReadingTime } from './src/plugins/remark-reading-time';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import rehypeCodeGroup from 'rehype-code-group';
import remarkFlexibleCodeTitles from 'remark-flexible-code-titles';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://atora.dev',
  integrations: [mdx(), sitemap(), preact()],
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true,
    },
    remarkRehype: {
      clobberPrefix: '',
    },
    rehypePlugins: [
      [rehypeSlug, { prefix: '' }],
      [rehypeAutolinkHeadings, { behavior: 'append' }],
      [rehypeCallouts, { theme: 'github' }],
      [rehypeFigure, { className: 'figure-image' }],
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
