// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCallouts from 'rehype-callouts';
// @ts-ignore
import rehypeFigure from 'rehype-figure';
import rehypeSemanticBlockquotes from "rehype-semantic-blockquotes";
import { remarkReadingTime } from './src/plugins/remark-reading-time';

// https://astro.build/config
export default defineConfig({
	site: 'https://atora.dev',
	integrations: [mdx(), sitemap()],
	prefetch: {
		prefetchAll: true,
	},
	vite: {
		server: {
			allowedHosts: ['giraffeduck-wsl.owl-pirate.ts.net']
		},
	},
	markdown: {
		shikiConfig: {
			theme: 'dark-plus'
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
		remarkPlugins: [
			remarkReadingTime,
		]
	},
	image: {
		experimentalLayout: 'responsive',
	},
	experimental: {
		responsiveImages: true,
		contentIntellisense: true,
		preserveScriptOrder: true,
	},
});
