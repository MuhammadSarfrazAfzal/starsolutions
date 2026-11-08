import arrowUpRightDark from '../assets/icons/arrow-up-right-dark.svg'
import { NAV, SERVICES, SITE, mailtoLink, whatsappLink } from '../site'
import { PinIcon, WhatsAppIcon } from './Icons'
import { Logo } from './ui'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <Logo tone="light" />
          <p className="t-body-m">
            Cold calling, software development, Google &amp; Facebook ads, TikTok Shop and eBay store management, from a
            team with 15 years of US e-commerce behind it.
          </p>
          <a className="cta-pill" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <span className="t-btn-m">Chat on WhatsApp</span>
            <span className="cta-pill__arrow">
              <img src={arrowUpRightDark} alt="" width={16} height={16} />
            </span>
          </a>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <p className="t-btn-s">Explore</p>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="t-body-m">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <p className="t-btn-s">Services</p>
          {SERVICES.map((s) => (
            <a key={s.id} href="#services" className="t-body-m">
              {s.title}
            </a>
          ))}
        </div>

        <div className="footer__col footer__col--contact">
          <p className="t-btn-s">Contact</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="t-body-m">
            <WhatsAppIcon size={18} />
            {SITE.whatsappDisplay}
          </a>
          <a href={mailtoLink()} className="t-body-m">
            <span className="footer__at">@</span>
            {SITE.email}
          </a>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="t-body-m">
            <PinIcon size={18} />
            {SITE.address}
          </a>
        </div>
      </div>

      <p className="footer__wordmark" aria-hidden data-footer-wordmark>
        {SITE.name}
      </p>

      <div className="footer__bottom">
        <p className="t-body-m">
          All rights reserved © {YEAR} {SITE.name}.
        </p>
        <a href="#top" className="t-btn-s footer__top-link">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
