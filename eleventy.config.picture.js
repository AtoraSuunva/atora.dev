const path = require('path')
const eleventyImage = require('@11ty/eleventy-img')

/**
 * Resolve a src passed to the shortcode, depending on if the src should be:
 * - `/`: "absolute", resolve to the `src/img/<src>` directory
 * - else: "relative", resolve based on the input path, `<input dir>/<src>`
 * @param {string} inputPath The page to the input file (.md, .html, .njk)
 * @param {string} src The image src passed to the shortcode, `/image.png` resolves to the `src/img/` dir, other paths are resolved relative to the input path
 * @returns The resolved absolute path
 */
function resolvePath(inputPath, src) {
  if (src.startsWith('/')) {
    return path.resolve('./src/img', src.slice(1))
  } else {
    return path.resolve(path.dirname(inputPath), src)
  }
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
  eleventyConfig.addShortcode(
    'picture',
    async function (src, alt, className, widths, sizes) {
      const file = resolvePath(this.page.inputPath, src)
      const metadata = await eleventyImage(
        file,
        imageOptions(widths, outputDir(eleventyConfig)),
      )
      return generateHTML(alt, sizes ?? widths, className, metadata)
    },
  )

  eleventyConfig.addShortcode(
    'picturesync',
    function (src, alt, className, widths, sizes) {
      // TODO: this.path.inputPath -> this.path is undefined in macros, possible workaround?
      const file = resolvePath('./src/img/placeholder', src)
      const options = imageOptions(widths, outputDir(eleventyConfig))

      // Async, but we don't wait
      eleventyImage(file, options)

      const metadata = eleventyImage.statsSync(file, options)
      return generateHTML(alt, sizes ?? widths, className, metadata)
    },
  )
}
