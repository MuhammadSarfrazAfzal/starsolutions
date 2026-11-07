import heroBg from '../assets/images/hero-bg.jpg'
import crystal from '../assets/images/crystal-hero.png'
import logoIcon from '../assets/icons/logo-icon.svg'
import logoText from '../assets/icons/logo-text.svg'
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
        <a href="#top" className="logo" aria-label="Conscellence home">
          <img src={logoIcon} alt="" width={29.963} height={29.963} />
          <img src={logoText} alt="Conscellence" width={156.41} height={13.303} />
        </a>
        <nav className="header__nav">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="header__link t-btn-m">
              {item.label}
            </a>
          ))}
        </nav>
        <OutlineButton href="tel:+19877495403" className="header__phone">
          (987)-749-5403
        </OutlineButton>
      </header>

      <div className="hero__content">
        <div className="hero__heading">
          <h1 className="t-h1">
            <span className="hero__accent">Unlock Your Potential</span>{' '}
            <br />
            with Strategic Consulting
          </h1>
          <p className="t-sub1 hero__sub">Guiding Your Success Journey Through Expertise and Innovation</p>
        </div>
        <EmailForm />
      </div>

      <img className="hero__crystal" src={crystal} alt="" width={834} height={1139} aria-hidden />
    </section>
  )
}
