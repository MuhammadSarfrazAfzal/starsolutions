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
        <nav className="header__nav">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="header__link t-btn-m">
              {item.label}
            </a>
          ))}
        </nav>
        <OutlineButton href="https://wa.me/923342221063" className="header__phone">
          +92 334 2221063
        </OutlineButton>
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
