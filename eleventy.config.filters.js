import { DateTime } from 'luxon'

export default function filters(eleventyConfig) {
  eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(
      format || 'dd LLLL yyyy',
    )
  })

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd')
  })

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return []
    }

    if (n < 0) {
      return array.slice(n)
    }

    return array.slice(0, n)
  })

  // Return the smallest number argument
  eleventyConfig.addFilter('min', (...numbers) => {
    return Math.min.apply(null, numbers)
  })

  // Return all the tags used in a collection
  eleventyConfig.addFilter('getAllTags', (collection) => {
    const tagSet = new Set()
    for (const item of collection) {
      // biome-ignore lint/complexity/noForEach: performance: not chained with any other methods, readability: simple callback, debugging: macro :(
      item.data?.tags?.forEach((tag) => tagSet.add(tag))
    }
    return Array.from(tagSet)
  })

  eleventyConfig.addFilter('filterTagList', (tags) =>
    (tags ?? []).filter(
      (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1,
    ),
  )

  eleventyConfig.addCollection('tags', (collection) =>
    eleventyConfig.getFilter('filterTagList')(
      eleventyConfig.getFilter('getAllTags')(collection.getAll()),
    ),
  )

  eleventyConfig.addShortcode('formatDate', (date, format) =>
    DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(format ?? 'yyyy'),
  )

  eleventyConfig.addShortcode('formatNow', (format) =>
    DateTime.now().toFormat(format ?? 'yyyy'),
  )

  eleventyConfig.addFilter('stringify', (data) => {
    return JSON.stringify(data, null, '\t')
  })
}
