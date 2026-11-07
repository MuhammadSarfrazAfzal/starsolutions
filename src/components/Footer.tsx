import footerLogo from '../assets/icons/footer-logo.svg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#top" className="footer__brand" aria-label="Star Solutions home">
          <img src={footerLogo} alt="" width={40} height={40} className="footer__icon" />
          <span className="footer__brand-title">STAR SOLUTIONS</span>
        </a>
        <p className="t-body-m footer__legal">
          All rights reserved © 2026 Star Solutions. Near Opera Cinema, Star Plaza, Citi Housing, Jhelum. WhatsApp: +92 334 2221063 |{' '}
          <a href="#services">Services</a> | <a href="#contact">Contact</a>
        </p>
      </div>
    </footer>
  )
}
