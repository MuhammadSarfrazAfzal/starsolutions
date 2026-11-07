import arrowDownRight from '../assets/icons/arrow-down-right-white-80.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'
import phoneIcon from '../assets/icons/contact-phone.svg'
import mailIcon from '../assets/icons/contact-mail.svg'
import locationBg from '../assets/icons/contact-location-bg.svg'
import locationPin from '../assets/icons/contact-location-pin.svg'
import { EmailForm } from './ui'
import './Contact.css'

const SOCIALS = [
  { name: 'Facebook', icon: facebook, href: '#' },
  { name: 'Instagram', icon: instagram, href: '#' },
  { name: 'LinkedIn', icon: linkedin, href: '#' },
  { name: 'YouTube', icon: youtube, href: '#' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__left">
          <div className="contact__intro">
            <div>
              <div className="contact__title-row">
                <img src={arrowDownRight} alt="" width={80} height={80} className="contact__arrow-icon" />
                <h2 className="t-xl">Contact </h2>
              </div>
              <h2 className="t-xl">us today</h2>
            </div>
            <p className="t-body-l contact__lead">
              Ready to transform your retail operations and software? Contact Star Solutions today for custom POS systems, mobile apps, web development, and digital marketing.
            </p>
          </div>

          <div className="contact__socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} className="social" aria-label={s.name}>
                <img src={s.icon} alt="" width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="contact__right">
          <div className="contact__form">
            <p className="t-h4">Get a Free consultation</p>
            <EmailForm fluid />
          </div>

          <ul className="contact__details">
            <li>
              <img src={phoneIcon} alt="" width={40} height={40} />
              <a href="https://wa.me/923342221063" target="_blank" rel="noopener noreferrer" className="t-h5 contact__whatsapp-link">
                WhatsApp: +92 334 2221063
              </a>
            </li>
            <li>
              <img src={phoneIcon} alt="" width={40} height={40} />
              <a href="tel:+923342221063" className="t-h5">
                Call: +92 334 2221063
              </a>
            </li>
            <li>
              <img src={mailIcon} alt="" width={40} height={40} />
              <a href="mailto:info@starsolutions.com" className="t-h5">
                info@starsolutions.com
              </a>
            </li>
            <li>
              <span className="contact__location-icon">
                <img src={locationBg} alt="" width={40} height={40} />
                <img src={locationPin} alt="" width={24} height={24} className="contact__location-pin" />
              </span>
              <span className="t-h5">Near Opera Cinema, Star Plaza, Citi Housing, Jhelum</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
