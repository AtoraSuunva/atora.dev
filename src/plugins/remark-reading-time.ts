import type { Root } from 'mdast'
import { toString as mdastToString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'
import type { Plugin } from 'unified'

export const remarkReadingTime: Plugin<[(null | undefined)?], Root> = () => {
  return (tree, { data }) => {
    const textOnPage = mdastToString(tree)
    const readingTime = getReadingTime(textOnPage)

    if (data.astro?.frontmatter) {
      data.astro.frontmatter.minutesRead = readingTime.text
      data.astro.frontmatter.words = readingTime.words
    }
  }
}
