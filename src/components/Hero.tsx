import { useState } from 'react'
import heroBg from '../assets/images/hero-bg.jpg'
import crystal from '../assets/images/crystal-hero.png'
import logoIcon from '../assets/icons/logo-icon.svg'
import { EmailForm, OutlineButton } from './ui'
import './Hero.css'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden>
        <img src={heroBg} alt="" />
      </div>

      <header className="header">
        <a href="#top" className="logo" aria-label="Star Solutions home">
          <img src={logoIcon} alt="" width={29.963} height={29.963} className="logo__icon" />
          <span className="logo__title">STAR SOLUTIONS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="header__link t-btn-m">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Phone / WhatsApp */}
        <OutlineButton href="https://wa.me/923342221063" className="header__phone">
          +92 334 2221063
        </OutlineButton>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`header__menu-btn ${menuOpen ? 'header__menu-btn--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={menuOpen}
        >
          <span className="header__menu-bar"></span>
          <span className="header__menu-bar"></span>
          <span className="header__menu-bar"></span>
        </button>

        {/* Mobile Dropdown Drawer */}
        <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="header__mobile-link"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__mobile-actions">
            <a
              href="https://wa.me/923342221063"
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-whatsapp t-btn-s"
              onClick={handleLinkClick}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
              </svg>
              WhatsApp: +92 334 2221063
            </a>
            <a
              href="tel:+923342221063"
              className="header__mobile-call t-btn-s"
              onClick={handleLinkClick}
            >
              Call: +92 334 2221063
            </a>
            <span className="header__mobile-location">
              📍 Star Plaza, Near Opera Cinema, Citi Housing, Jhelum
            </span>
          </div>
        </div>
      </header>

      <div className="hero__content">
        <div className="hero__heading">
          <h1 className="t-h1">
            <span className="hero__accent">15 Years Delivering</span>{' '}
            <br />
            POS & Software Solutions
          </h1>
          <p className="t-sub1 hero__sub">
            Star Solutions is a software development company specializing in delivering high-performance POS systems, mobile apps, web development, and digital marketing. Backed by 15 years in business and our own physical iPhone stores across the USA.
          </p>
        </div>
        <EmailForm />
      </div>

      <img className="hero__crystal" src={crystal} alt="" width={834} height={1139} aria-hidden />
    </section>
  )
}
