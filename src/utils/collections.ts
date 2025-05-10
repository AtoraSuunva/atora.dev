import type { CollectionEntry } from 'astro:content'

type BlogPost = CollectionEntry<'blog'>

const isDev = import.meta.env.DEV

export function sortByPubDate(a: BlogPost, b: BlogPost): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
}

export function isPublishedPost(post: BlogPost): boolean {
  return isDev || !post.data.draft
}
