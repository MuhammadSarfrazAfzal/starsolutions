import heroBg from '../assets/images/hero-bg.jpg'
import crystal from '../assets/images/crystal-hero.png'
import { EmailForm, OutlineButton } from './ui'
import './Hero.css'

const NAV = [
  { label: 'POS & Services', href: '#services' },
  { label: '15 Years Experience', href: '#about' },
  { label: 'USA Retail Presence', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden>
        <img src={heroBg} alt="" />
        <div className="hero__bg-gradient"></div>
      </div>

      <header className="header">
        <a href="#top" className="logo" aria-label="Star Solutions home">
          <div className="logo__star-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.9 8.6L22 9.3L16.8 14.1L18.3 21.2L12 17.6L5.7 21.2L7.2 14.1L2 9.3L9.1 8.6L12 2Z" />
            </svg>
          </div>
          <div className="logo__text-group">
            <span className="logo__brand-name">STAR SOLUTIONS</span>
            <span className="logo__tagline">15 YEARS OF EXCELLENCE</span>
          </div>
        </a>

        <nav className="header__nav">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="header__link t-btn-m">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a
            href="https://wa.me/923342221063"
            target="_blank"
            rel="noopener noreferrer"
            className="header__whatsapp-btn t-btn-s"
            aria-label="WhatsApp Contact"
          >
            <span className="header__whatsapp-dot"></span>
            WhatsApp: +92 334 2221063
          </a>
          <OutlineButton href="tel:+923342221063" className="header__phone">
            Call Us
          </OutlineButton>
        </div>
      </header>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-pulse"></span>
          <span>15 Years Own Business • USA Retail & Global Software</span>
        </div>

        <div className="hero__heading">
          <h1 className="t-h1">
            <span className="hero__accent">Software & POS Systems</span>
            <br />
            Built for Real-World Scale
          </h1>
          <p className="t-sub1 hero__sub">
            Leading software development company specializing in mission-critical POS systems, custom mobile apps, web development, and digital marketing. Tested & proven in our own physical iPhone stores across America.
          </p>
        </div>

        <div className="hero__highlights">
          <div className="hero__pill">
            <span className="hero__pill-icon">⚡</span>
            <span>Enterprise POS Systems</span>
          </div>
          <div className="hero__pill">
            <span className="hero__pill-icon">📱</span>
            <span>Multiple iPhone Stores in USA</span>
          </div>
          <div className="hero__pill">
            <span className="hero__pill-icon">🚀</span>
            <span>App, Web & Marketing</span>
          </div>
          <div className="hero__pill">
            <span className="hero__pill-icon">📍</span>
            <span>Star Plaza, Citi Housing Jhelum</span>
          </div>
        </div>

        <div className="hero__cta-group">
          <EmailForm />
          <a
            href="https://wa.me/923342221063"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__whatsapp-cta t-btn-l"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.41C16.31 14.28 15.1 13.69 14.88 13.61C14.65 13.52 14.49 13.48 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.7C13.4 14.86 13.25 14.89 13 14.76C12.75 14.64 11.94 14.37 10.99 13.52C10.25 12.86 9.75 12.05 9.61 11.8C9.46 11.55 9.59 11.42 9.72 11.29C9.83 11.18 9.97 11 10.1 10.85C10.22 10.7 10.26 10.59 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.87 9.76 8.64 9.56 8.13C9.36 7.63 9.15 7.7 9 7.7C8.85 7.69 8.69 7.69 8.52 7.69C8.35 7.69 8.08 7.75 7.85 8C7.62 8.25 7 8.83 7 10.01C7 11.19 7.87 12.33 8 12.49C8.12 12.66 9.7 15.1 12.16 16.16C12.75 16.41 13.2 16.56 13.56 16.68C14.15 16.86 14.69 16.84 15.12 16.77C15.6 16.7 16.59 16.17 16.8 15.58C17.01 14.99 17.01 14.49 16.95 14.41C16.89 14.33 16.81 14.53 16.56 14.41Z" />
            </svg>
            Quick WhatsApp Chat
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <img className="hero__crystal" src={crystal} alt="Star Solutions Technology" width={834} height={1139} aria-hidden />
        <div className="hero__floating-card hero__floating-card--1">
          <span className="floating-card__num">15+</span>
          <span className="floating-card__label">Years in Business</span>
        </div>
        <div className="hero__floating-card hero__floating-card--2">
          <span className="floating-card__tag">USA Retail Tech</span>
          <span className="floating-card__label">Multi-Store iPhone POS</span>
        </div>
      </div>
    </section>
  )
}
