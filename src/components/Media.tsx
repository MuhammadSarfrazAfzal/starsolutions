import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './Media.css'

/**
 * Real photography and short looping video (sources and licences in MEDIA_CREDITS.md).
 * Every photo ships as AVIF + WebP at two widths; every video ships with a poster in the same formats.
 */
const FILES = import.meta.glob<string>('../assets/media/*', { eager: true, query: '?url', import: 'default' })

const file = (name: string) => FILES[`../assets/media/${name}`]

/** Width variants and aspect ratio (w / h) of each photo, matching how they were exported */
const PHOTOS = {
  'service-ads': { widths: [720, 1080], ratio: 4 / 3 },
  'service-tiktok': { widths: [720, 1080], ratio: 4 / 3 },
  'service-calling-poster': { widths: [720, 1080], ratio: 4 / 3 },
  'service-software-poster': { widths: [720, 1080], ratio: 4 / 3 },
  'service-ebay-poster': { widths: [720, 1080], ratio: 4 / 3 },
  'gallery-calling': { widths: [320, 480], ratio: 4 / 5 },
  'gallery-software': { widths: [320, 480], ratio: 4 / 5 },
  'gallery-ads': { widths: [320, 480], ratio: 4 / 5 },
  'gallery-live': { widths: [320, 480], ratio: 4 / 5 },
  'gallery-ringlight': { widths: [320, 480], ratio: 4 / 5 },
  'gallery-packing': { widths: [320, 480], ratio: 4 / 5 },
  'story-phone': { widths: [400, 720], ratio: 3 / 4 },
  'process-team': { widths: [960, 1600], ratio: 16 / 9 },
  'problem-leads': { widths: [480, 880], ratio: 4 / 5 },
  'problem-ads': { widths: [480, 880], ratio: 4 / 5 },
  'problem-software': { widths: [480, 880], ratio: 4 / 5 },
  'problem-tiktok': { widths: [480, 880], ratio: 4 / 5 },
  'problem-ebay': { widths: [480, 880], ratio: 4 / 5 },
  'compare-without': { widths: [960, 1600], ratio: 16 / 10 },
  'compare-with': { widths: [960, 1600], ratio: 16 / 10 },
  'bento-reports': { widths: [560, 880], ratio: 4 / 3 },
  'bento-iphones': { widths: [560, 880], ratio: 4 / 3 },
  'bento-chat': { widths: [560, 880], ratio: 4 / 3 },
}

export type PhotoName = keyof typeof PHOTOS
export type VideoName = 'service-calling' | 'service-software' | 'service-ebay'

const srcSet = (name: PhotoName, ext: string) =>
  PHOTOS[name].widths.map((w) => `${file(`${name}-${w}.${ext}`)} ${w}w`).join(', ')

type PhotoProps = {
  name: PhotoName
  /** CSS `sizes` hint: how wide the photo is drawn at each breakpoint */
  sizes: string
  alt?: string
  className?: string
  /** Load straight away instead of when it nears the viewport */
  eager?: boolean
}

export function Photo({ name, sizes, alt = '', className, eager }: PhotoProps) {
  const { widths, ratio } = PHOTOS[name]
  const largest = widths[widths.length - 1]
  return (
    <picture className={`media ${className ?? ''}`}>
      <source type="image/avif" srcSet={srcSet(name, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(name, 'webp')} sizes={sizes} />
      <img
        src={file(`${name}-${largest}.webp`)}
        alt={alt}
        width={largest}
        height={Math.round(largest / ratio)}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  )
}

type LoopVideoProps = { name: VideoName; sizes: string; className?: string }

/**
 * Muted looping clip that only downloads and plays while it is on screen.
 * Visitors who prefer reduced motion get the still poster instead.
 */
export function LoopVideo({ name, sizes, className }: LoopVideoProps) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = file(`${name}.mp4`)
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px 0px' },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [name, reduced])

  if (reduced) return <Photo name={`${name}-poster`} sizes={sizes} className={className} />

  return (
    <video
      ref={ref}
      className={`media ${className ?? ''}`}
      poster={file(`${name}-poster-1080.webp`)}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      disablePictureInPicture
    />
  )
}
