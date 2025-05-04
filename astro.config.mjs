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

// https://astro.build/config
export default defineConfig({
  site: 'https://atora.dev',
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
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
    ],
    remarkPlugins: [remarkReadingTime],
  },
  image: {
    experimentalLayout: 'full-width',
  },
  experimental: {
    responsiveImages: true,
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
