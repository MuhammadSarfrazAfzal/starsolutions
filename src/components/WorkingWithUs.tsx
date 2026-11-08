import { useState, type CSSProperties } from 'react'
import arrowUpRightDark from '../assets/icons/arrow-up-right-dark.svg'
import { COMPARE, SERVICES, SITE, whatsappLink } from '../site'
import { BrandIcon } from './BrandIcons'
import { CheckIcon, CodeIcon, CrossIcon, PhoneIcon, WhatsAppIcon } from './Icons'
import { Photo } from './Media'
import './WorkingWithUs.css'

/**
 * Drag (or arrow-key) slider between life with separate vendors and life with one partner.
 * --p is how far the divider sits from the left, in percent.
 */
function Compare() {
  const [p, setP] = useState(42)

  return (
    <div className="compare" style={{ '--p': p } as CSSProperties} data-reveal>
      <div className="compare__layer compare__layer--without">
        <Photo name="compare-without" sizes="(max-width: 1100px) calc(100vw - 48px), 1200px" />
      </div>
      <div className="compare__layer compare__layer--with">
        <Photo name="compare-with" sizes="(max-width: 1100px) calc(100vw - 48px), 1200px" />
      </div>

      <span className="compare__tag compare__tag--without">On your own</span>
      <span className="compare__tag compare__tag--with">With {SITE.name}</span>

      <div className="compare__panel compare__panel--without">
        <h3 className="t-h4">Juggling it all yourself</h3>
        <ul>
          {COMPARE.without.map((t) => (
            <li key={t} className="t-body-m">
              <CrossIcon size={18} />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="compare__panel compare__panel--with">
        <h3 className="t-h4">One partner for every channel</h3>
        <ul>
          {COMPARE.with.map((t) => (
            <li key={t} className="t-body-m">
              <CheckIcon size={18} />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="compare__handle" aria-hidden>
        <span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>
      <input
        className="compare__range"
        type="range"
        min={0}
        max={100}
        value={p}
        onChange={(e) => setP(Number(e.target.value))}
        aria-label={`Compare working on your own with working with ${SITE.name}`}
        aria-valuetext={p < 50 ? `Showing more of working with ${SITE.name}` : 'Showing more of working on your own'}
      />
    </div>
  )
}

export default function WorkingWithUs() {
  return (
    <section className="working">
      <div className="working__head">
        <h2 className="t-xl working__title" data-reveal>
          <span className="text-outline">Working</span>
          <br />
          <span className="working__solid">With</span> <span className="text-outline">Us</span>
        </h2>
        <p className="t-sub1 working__lead" data-reveal>
          Drag the divider to see what changes when one team runs your calls, code, ads and stores.
        </p>
      </div>

      <Compare />

      <div className="bento" data-stagger>
        <article className="bento__tile bento__tile--team">
          <span className="bento__count">
            <b>{SERVICES.length}</b> services, one team
          </span>
          <h3 className="t-h3">One partner, every channel</h3>
          <p className="t-body-m">
            No juggling agencies. Your campaigns, listings and leads are planned together, so every channel pushes the
            same goals.
          </p>
          <ul className="bento__chips" aria-label="Our services">
            <li>
              <PhoneIcon size={18} /> Cold calling
            </li>
            <li>
              <CodeIcon size={18} /> Software
            </li>
            <li>
              <BrandIcon brand="googleAds" size={16} /> Google &amp; Facebook ads
            </li>
            <li>
              <BrandIcon brand="tiktok" size={16} /> TikTok Shop
            </li>
            <li>
              <BrandIcon brand="ebay" size={18} /> eBay
            </li>
          </ul>
        </article>

        <article className="bento__tile bento__tile--photo bento__tile--reports">
          <Photo name="bento-reports" sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1100px) 50vw, 45vw" />
          <div className="bento__copy">
            <h3 className="t-h4">Clear, honest reporting</h3>
            <p className="t-body-m">
              Calls made, leads booked, ad spend and sales, in plain language. You always know where your money goes.
            </p>
          </div>
        </article>

        <article className="bento__tile bento__tile--photo bento__tile--years">
          <Photo name="bento-iphones" sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1100px) 50vw, 23vw" />
          <div className="bento__copy">
            <span className="bento__big">15</span>
            <p className="t-body-m">years running our own iPhone store business in the USA. Advice from real selling.</p>
          </div>
        </article>

        <a
          className="bento__tile bento__tile--photo bento__tile--chat"
          href={whatsappLink('Hi Starsolutions! I have a question.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Photo name="bento-chat" sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1100px) 50vw, 23vw" />
          <div className="bento__copy">
            <span className="bento__wa">
              <WhatsAppIcon size={22} />
            </span>
            <h3 className="t-h4">Talk to us on WhatsApp</h3>
            <p className="t-body-m">{SITE.whatsappDisplay}</p>
          </div>
        </a>
      </div>

      <div className="working__cta" data-reveal>
        <a
          className="cta-pill"
          href={whatsappLink('Hi Starsolutions! I would like to book a free consultation.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="t-btn-l">Book a free consultation on WhatsApp</span>
          <span className="cta-pill__arrow">
            <img src={arrowUpRightDark} alt="" width={20} height={20} />
          </span>
        </a>
      </div>
    </section>
  )
}
