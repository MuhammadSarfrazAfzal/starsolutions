import { useEffect, useState } from 'react'
import { NAV, SITE, whatsappLink } from '../site'
import { CloseIcon, MenuIcon } from './Icons'
import { Logo, OutlineButton } from './ui'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="header__bar">
        <Logo />
        <nav className="header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="header__link t-btn-m">
              {item.label}
            </a>
          ))}
        </nav>
        <OutlineButton href={whatsappLink()} className="header__phone" external>
          {SITE.whatsappDisplay}
        </OutlineButton>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      <span className="header__progress" data-scroll-progress aria-hidden />

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="mobile-menu__link t-h3" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <OutlineButton href={whatsappLink()} external>
          WhatsApp {SITE.whatsappDisplay}
        </OutlineButton>
      </div>
    </header>
  )
}
