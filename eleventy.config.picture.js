const path = require('path')
const eleventyImage = require('@11ty/eleventy-img')

function resolvePath(src) {
  return path.resolve('./src/img', src)
}

function outputDir(eleventyConfig) {
  return path.join(eleventyConfig.dir.output, 'img')
}

function imageOptions(widths, outputDir) {
  return {
    widths: widths ?? ['auto'],
    formats: ['avif', 'webp', 'auto'],
    outputDir,
    filenameFormat(id, src, width, format) {
      const name = path.basename(src, path.extname(src))
      return `${name}-${id}-${width}w.${format}`
    },
  }
}

function generateHTML(alt, sizes, className, metadata) {
  const imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  }

  const html = eleventyImage.generateHTML(metadata, imageAttributes)
  // lol
  return className ? html.replace(/^<(\w+)/, `<$1 class="${className}"`) : html
}

module.exports = (eleventyConfig) => {
  // https://www.11ty.dev/docs/plugins/image/
  eleventyConfig.addAsyncShortcode(
    'picture',
    async function (src, alt, className, widths, sizes) {
      const file = resolvePath(src)
      const metadata = await eleventyImage(
        file,
        imageOptions(widths, outputDir(eleventyConfig)),
      )
      return generateHTML(alt, sizes ?? widths, className, metadata)
    },
  )

  eleventyConfig.addNunjucksShortcode(
    'picturesync',
    function (src, alt, className, widths, sizes) {
      const file = resolvePath(src)
      const options = imageOptions(widths, outputDir(eleventyConfig))

      // Async, but we don't wait
      eleventyImage(file, options)

      const metadata = eleventyImage.statsSync(file, options)
      return generateHTML(alt, sizes ?? widths, className, metadata)
    },
  )
}
