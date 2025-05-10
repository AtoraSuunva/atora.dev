import { getImage } from 'astro:assets'
import FeatherPNG from '@images/feather.png'
import type { APIRoute } from 'astro'
import { SITE_COLOR, SITE_DESCRIPTION, SITE_ID, SITE_TITLE } from 'src/consts'

const faviconPngSizes = [192, 512]

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: FeatherPNG,
        width: size,
        height: size,
        format: 'png',
      })

      console.log(image)

      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`,
      }
    }),
  )

  const manifest = {
    id: SITE_ID,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: SITE_COLOR,
    theme_color: SITE_COLOR,
    icons,
  }

  return new Response(JSON.stringify(manifest))
}
