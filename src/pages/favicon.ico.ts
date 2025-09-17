import path from 'node:path'
import type { APIRoute } from 'astro'
import sharp from 'sharp'
import ico from 'sharp-ico'

const featherSrc = path.resolve('src/images/feather.svg')

export const GET: APIRoute = async () => {
  const buffer = await sharp(featherSrc).resize(32).toFormat('png').toBuffer()
  const icoBuffer = ico.encode([buffer])

  return new Response(new Uint8Array(icoBuffer), {
    headers: {
      'Content-Type': 'image/x-icon',
    },
  })
}
