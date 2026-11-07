import footerLogo from '../assets/icons/footer-logo.svg'
import logoText from '../assets/icons/logo-text.svg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="footer__brand" aria-label="Conscellence home">
        <img src={footerLogo} alt="" width={40} height={40} />
        {/* Wordmark in the "Angry" typeface — reuses the vector wordmark, tinted white */}
        <img src={logoText} alt="Conscellence" width={208} height={17.69} className="footer__wordmark" />
      </a>
      <p className="t-body-m footer__legal">
        All rights reserved © 2024 Cons Consulting.{'  '}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </p>
    </footer>
  )
}
