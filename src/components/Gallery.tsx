import { SITE } from '../site'
import { PinIcon, WhatsAppIcon } from './Icons'
import { Photo, type PhotoName } from './Media'
import logoIcon from '../assets/icons/logo-icon.svg'
import './Gallery.css'

type Tile = { kind: 'photo'; name: PhotoName; label: string } | { kind: 'chat' | 'years' | 'place' | 'brand' }

/** Stock photography of the kind of work behind each service (see MEDIA_CREDITS.md) */
const COLUMNS: Tile[][] = [
  [
    { kind: 'photo', name: 'gallery-calling', label: 'Cold calling' },
    { kind: 'years' },
    { kind: 'photo', name: 'gallery-software', label: 'Software development' },
    { kind: 'chat' },
  ],
  [
    { kind: 'chat' },
    { kind: 'photo', name: 'gallery-ads', label: 'Google & Facebook ads' },
    { kind: 'place' },
    { kind: 'photo', name: 'gallery-live', label: 'TikTok Shop' },
  ],
  [
    { kind: 'photo', name: 'gallery-ringlight', label: 'Live selling' },
    { kind: 'brand' },
    { kind: 'photo', name: 'gallery-packing', label: 'eBay orders' },
    { kind: 'years' },
  ],
]

const TILE_SIZES = '(max-width: 700px) 46vw, (max-width: 1100px) 31vw, 18vw'

function TileContent({ tile }: { tile: Tile }) {
  switch (tile.kind) {
    case 'photo':
      return (
        <>
          <Photo name={tile.name} sizes={TILE_SIZES} />
          <span className="g-photo__label">{tile.label}</span>
        </>
      )
    case 'chat':
      return (
        <div className="g-chat">
          <div className="g-chat__head">
            <span className="g-chat__avatar">
              <WhatsAppIcon size={18} />
            </span>
            <span>
              <b>{SITE.name}</b>
              <small>online</small>
            </span>
          </div>
          <p className="g-chat__bubble g-chat__bubble--in">Hi! I want to grow my eBay store.</p>
          <p className="g-chat__bubble g-chat__bubble--out">Great, let’s plan it together. When suits you for a quick call?</p>
          <p className="g-chat__bubble g-chat__bubble--in">Tomorrow works 👍</p>
        </div>
      )
    case 'years':
      return (
        <div className="g-years">
          <span className="g-years__num">15</span>
          <span className="t-h5">years running our own iPhone store business in the USA</span>
        </div>
      )
    case 'place':
      return (
        <div className="g-place">
          <span className="g-place__pin">
            <PinIcon size={24} />
          </span>
          <p>
            <b>Star Plaza</b>
            <span>City Housing Society, Jhelum</span>
          </p>
        </div>
      )
    case 'brand':
      return (
        <div className="g-brand">
          <img src={logoIcon} alt="" width={88} height={88} />
          <p className="t-btn-s">Calls · Code · Campaigns · Commerce</p>
        </div>
      )
  }
}

/** Three columns of work tiles that travel up and down as the section scrolls past */
export default function Gallery() {
  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <div className="gallery__text">
        <p className="t-btn-s eyebrow" data-reveal>
          Every channel, one partner
        </p>
        <h2 className="t-h1" id="gallery-title" data-reveal>
          From the first call to the <span className="gallery__accent">final delivery.</span>
        </h2>
        <p className="t-body-l gallery__lead" data-reveal>
          Leads from the phone, customers from search and social, sales from TikTok and eBay, and the software that
          ties it all together. We run each piece, and we make them work as one.
        </p>
      </div>

      <div className="gallery__cols" aria-hidden>
        {COLUMNS.map((col, i) => (
          <div className="gallery__col" key={i} data-gallery-col={i % 2 ? 'down' : 'up'}>
            {col.map((tile, j) => (
              <div className={`g-tile g-tile--${tile.kind}`} key={j}>
                <TileContent tile={tile} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
