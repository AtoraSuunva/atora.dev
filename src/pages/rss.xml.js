import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { isPublishedPost } from '../utils/collections';

export async function GET(context) {
	const posts = await getCollection('blog');

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.filter(isPublishedPost).map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
