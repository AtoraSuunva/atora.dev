const { DateTime } = require('luxon')

module.exports = function (eleventyConfig) {
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
    } else if (n < 0) {
      return array.slice(n)
    } else {
      return array.slice(0, n)
    }
  })

  // Return the smallest number argument
  eleventyConfig.addFilter('min', (...numbers) => {
    return Math.min.apply(null, numbers)
  })

  // Return all the tags used in a collection
  eleventyConfig.addFilter('getAllTags', (collection) => {
    let tagSet = new Set()
    for (let item of collection) {
      item.data?.tags?.forEach((tag) => tagSet.add(tag))
    }
    return Array.from(tagSet)
  })

  eleventyConfig.addFilter('filterTagList', (tags) =>
    (tags ?? []).filter(
      (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1,
    ),
  )

  eleventyConfig.addShortcode('formatDate', (date, format) =>
    DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(format ?? 'yyyy'),
  )

  eleventyConfig.addShortcode('formatNow', (format) =>
    DateTime.now().toFormat(format ?? 'yyyy'),
  )
}
