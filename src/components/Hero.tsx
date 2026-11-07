import { useState, useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
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
  const heroRef = useRef<HTMLElement>(null)

  // 3D Mouse Parallax on Desktop
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const crystalX = useTransform(smoothX, [-0.5, 0.5], [-20, 20])
  const crystalY = useTransform(smoothY, [-0.5, 0.5], [-20, 20])
  const crystalRotate = useTransform(smoothX, [-0.5, 0.5], [-2.5, 2.5])

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 900) return
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <section
      ref={heroRef}
      className="hero"
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.41C16.31 14.28 15.1 13.69 14.88 13.61C14.65 13.52 14.49 13.48 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.7C13.4 14.86 13.25 14.89 13 14.76C12.75 14.64 11.94 14.37 10.99 13.52C10.25 12.86 9.75 12.05 9.61 11.8C9.46 11.55 9.59 11.42 9.72 11.29C9.83 11.18 9.97 11 10.1 10.85C10.22 10.7 10.26 10.59 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.87 9.76 8.64 9.56 8.13C9.36 7.63 9.15 7.7 9 7.7C8.85 7.69 8.69 7.69 8.52 7.69C8.35 7.69 8.08 7.75 7.85 8C7.62 8.25 7 8.83 7 10.01C7 11.19 7.87 12.33 8 12.49C8.12 12.66 9.7 15.1 12.16 16.16C12.75 16.41 13.2 16.56 13.56 16.68C14.15 16.86 14.69 16.84 15.12 16.77C15.6 16.7 16.59 16.17 16.8 15.58C17.01 14.99 17.01 14.49 16.95 14.41C16.89 14.33 16.81 14.53 16.56 14.41Z" />
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

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero__heading">
          <motion.h1
            className="t-h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__accent">15 Years Delivering</span>{' '}
            <br />
            POS & Software Solutions
          </motion.h1>
          <motion.p
            className="t-sub1 hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Star Solutions is a software development company specializing in delivering high-performance POS systems, mobile apps, web development, and digital marketing. Backed by 15 years in business and our own physical iPhone stores across the USA.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <EmailForm />
        </motion.div>
      </motion.div>

      {/* Crystal with Spring Parallax */}
      <motion.img
        className="hero__crystal"
        src={crystal}
        alt="Star Solutions Crystal"
        width={834}
        height={1139}
        aria-hidden
        style={{
          x: crystalX,
          y: crystalY,
          rotate: crystalRotate,
        }}
      />
    </section>
  )
}
