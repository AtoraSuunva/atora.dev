import { useComputed, useSignal } from '@preact/signals'
import { useMemo } from 'preact/hooks'
import Styles from './UnicodeViewer.module.css'

interface Props {
  initialString: string
}

const DOTTED_CIRCLE = '◌'

const MARK_REGEX = /\p{Mn}|\p{Mc}|\p{Me}/v

/**
 * Check if a character is in the Unicode category "Mark", which means it modifies the appearance of other characters
 * @param str The character to check
 */
function isMark(str: string): boolean {
  return MARK_REGEX.test(str)
}

/**
 * A component that breaks down a string into graphemes, graphical code point, code points, and UTF-8/16/32 code units.
 *
 * @example
 * "Ê" is broken down into:
 * Grapheme: Ê
 * Code Point: U+00CA
 * UTF-32: 000000CA
 * UTF-16: 00CA
 * UTF-8: C3 AA
 *
 * "Ê" is broken down into:
 * Grapheme: E ̂
 * Code Point: U+0045 | U+0302
 * UTF-32: 00000045 | 00000302
 * UTF-16: 0045 | 0302
 * UTF-8: 45 | CC 82
 * @param props Options for this component
 * @returns JSX.Element
 */
export function UnicodeViewer({ initialString }: Props) {
  const string = useSignal(initialString)
  const segmenter = useMemo(() => new Intl.Segmenter(), [])
  const encoder = useMemo(() => new TextEncoder(), [])

  // First create all of our arrays of graphemes, codepoints, utf-8/16/32 code units

  const graphemes = useComputed(() => {
    // We need special complicated code to split by graphemes, thankfully Intl once again saves the day so we don't have to write it ourselves
    return Array.from(segmenter.segment(string.value), (seg) => seg.segment)
  })

  const codePoints = useComputed(() => {
    // String[Symbol.iterator]() iterates by Unicode code points
    return Array.from(
      string.value,
      (char) =>
        // Code points are always padded to at least 4 characters
        char.codePointAt(0)?.toString(16).toUpperCase().padStart(4, '0') ||
        '0000',
    )
  })

  const stringCodePoints = useComputed(() => {
    return codePoints.value.map((cp) => {
      const str = String.fromCodePoint(Number.parseInt(cp, 16))
      const mark = isMark(str) ? DOTTED_CIRCLE : ''

      return mark + str
    })
  })

  const utf32Units = useComputed(() => {
    // UTF-32 corresponds 1:1 with code points. Fun fact, code points go from 0x0-0x10FFFF, so in UTF-32 0x110000-0xFFFFFFFF are left completely unused!
    return codePoints.value.map((c) => c.padStart(8, '0'))
  })

  const utf16Units = useComputed(() => {
    // Since JS uses UTF-16 internally, `String.split('')` splits by UTF-16 code units
    return string.value
      .split('')
      .map((c) => c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0'))
  })

  const utf8Units = useComputed(() => {
    // TextEncoder helpfully exists to encode text as UTF-8
    return Array.from(encoder.encode(string.value)).map((byte) =>
      byte.toString(16).toUpperCase().padStart(2, '0'),
    )
  })

  // Graphemes/Code Points/UTF-8/16/32 are not the same length, so we need to vary the width of each cell so everything lines up
  // UTF-8 code units are the smallest unit here, so everything else is measured in how many UTF-8 units it takes
  // UTF-16 takes 1-3 UTF-8 units
  // Code Points & UTF-32 takes 1-4 UTF-8 units (Code Points and UTF-32 always take up the same number of UTF-8 units)
  // Graphemes can take variable amounts of UTF-8 units

  /** Used to determine width of Code Point and UTF-32 rows */
  const utf8UnitCount = useComputed(() => {
    return codePoints.value.map((unit) =>
      utfCodePointToUtf8UnitCount(Number.parseInt(unit, 16)),
    )
  })

  /** Used to determine width of UTF-16 row */
  const utf8SplitUnitCount = useComputed(() => {
    return codePoints.value.flatMap((_, i) => {
      const u8 = utf8UnitCount.value[i]
      return u8 <= 3 ? [u8] : [2, u8 - 2]
    })
  })

  /** Determines width of Grapheme row */
  const utf8UnitsPerGrapheme = useComputed(() => {
    let i = 0
    return graphemes.value.map((grapheme) => {
      const codePoints = Array.from(grapheme).length

      let count = 0
      for (let j = i; j < i + codePoints; j++) {
        count += utf8UnitCount.value[j]
      }

      i += codePoints
      return count
    })
  })

  return (
    <table className={Styles['code-unit-viewer']}>
      <thead>
        <tr>
          <th className={Styles['cuv-input']}>
            String:{' '}
            <input
              name="inspect-string"
              type="text"
              value={string.value}
              onInput={(e) => {
                string.value = (e.target as HTMLInputElement).value
              }}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Grapheme</th>
          {graphemes.value.map((char, i) => (
            <td colSpan={utf8UnitsPerGrapheme.value[i]}>{char}</td>
          ))}
        </tr>
        <tr>
          <th scope="row">String.fromCodePoint</th>
          {stringCodePoints.value.map((cp, i) => (
            <td colSpan={utf8UnitCount.value[i]}>{cp}</td>
          ))}
        </tr>
        <tr>
          <th scope="row">Code Point</th>
          {codePoints.value.map((cp, i) => (
            <td colSpan={utf8UnitCount.value[i]}>
              <pre>U+{cp}</pre>
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">UTF-32</th>
          {utf32Units.value.map((unit, i) => (
            <td colSpan={utf8UnitCount.value[i]}>
              <pre>{unit}</pre>
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">UTF-16</th>
          {utf16Units.value.map((unit, i) => (
            <td colSpan={utf8SplitUnitCount.value[i]}>
              <pre>{unit}</pre>
            </td>
          ))}
        </tr>
        <tr>
          <th scope="row">UTF-8</th>
          {utf8Units.value.map((unit) => (
            <td>
              <pre>{unit}</pre>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

function utfCodePointToUtf8UnitCount(codePoint: number): number {
  if (codePoint <= 0x7f) return 1
  if (codePoint <= 0x7ff) return 2
  if (codePoint <= 0xffff) return 3
  return 4
}
