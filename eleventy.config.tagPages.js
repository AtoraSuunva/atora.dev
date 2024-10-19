// Adapted from https://desmondrivet.com/2022/03/23/eleventy-pagination
function classify(collection, tagExtractor) {
  const classified = {}

  for (const item of collection.items) {
    const tags = tagExtractor(item)

    for (const tag of tags) {
      if (!classified[tag]) {
        classified[tag] = []
      }
      classified[tag].push(item)
    }
  }

  return classified
}

/**
 * Return object map of tag -> posts
 */
function indexByTag(collection) {
  return classify(collection, (item) => item.data.tags ?? [])
}

/**
 * Take a map of tags to items, return flat list of paged item objects like this:
 * { tagName, pageNumber, items }
 *
 * page starts from 0
 */
function flatPaginate(indexedCollection, size) {
  const pages = []

  for (const tagName of Object.keys(indexedCollection)) {
    const sortedCollection = indexedCollection[tagName].sort((a, b) => {
      return b.date - a.date
    })
    const pagedItems = toChunks(sortedCollection, size)

    for (let pageNumber = 0; pageNumber < pagedItems.length; pageNumber++) {
      const page = {
        name: tagName,
        page: pageNumber,
        total: pagedItems.length,
        items: pagedItems[pageNumber],
      }

      pages.push(page)
    }
  }

  return pages
}

export default function tagPages(eleventyConfig) {
  eleventyConfig.addCollection('tagPages', (collection) =>
    flatPaginate(indexByTag(collection), 12),
  )

  eleventyConfig.addFilter('getTaggedNavigation', (collection, page) => {
    const first = collection.find(
      (item) => item.name === page.name && item.page === 0,
    )

    const lastPage = page.total - 1
    const last = collection.find(
      (item) => item.name === page.name && item.page === lastPage,
    )

    const prevPage = page.page - 1
    const prev = collection.find(
      (item) => item.name === page.name && item.page === prevPage,
    )

    const nextPage = page.page + 1
    const next = collection.find(
      (item) => item.name === page.name && item.page === nextPage,
    )

    return {
      first: first?.url,
      last: last?.url,
      previous: prev?.url,
      next: next?.url,
    }
  })
}

function toChunks(array, size) {
  const chunks = []

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }

  return chunks
}
