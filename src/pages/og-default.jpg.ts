import sharp from 'sharp';
import ogSvg from '../assets/og-default.svg?raw';

export async function GET() {
  const image = await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 90 })
    .toBuffer();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/jpeg',
    },
  });
}
