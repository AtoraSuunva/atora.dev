import type { CollectionEntry } from 'astro:content'

type BlogPost = CollectionEntry<'blog'>

export function sortByPubDate(a: BlogPost, b: BlogPost): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
}
