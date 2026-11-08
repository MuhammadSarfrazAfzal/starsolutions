import { useState, type FormEvent } from 'react'
import arrowDownRight from '../assets/icons/arrow-down-right-white-80.svg'
import arrowUpRightDark from '../assets/icons/arrow-up-right-dark.svg'
import whatsappGlyph from '../assets/icons/whatsapp.svg'
import mailGlyph from '../assets/icons/mail-white.svg'
import whatsappIcon from '../assets/icons/contact-whatsapp.svg'
import mailIcon from '../assets/icons/contact-mail.svg'
import locationBg from '../assets/icons/contact-location-bg.svg'
import locationPin from '../assets/icons/contact-location-pin.svg'
import { SERVICES, SITE, mailtoLink, whatsappLink } from '../site'
import './Contact.css'

const CHANNELS = [
  { name: 'Chat on WhatsApp', icon: whatsappGlyph, href: whatsappLink(), external: true },
  { name: 'Send us an email', icon: mailGlyph, href: mailtoLink(), external: false },
]

/** No backend: the message opens in WhatsApp (or the visitor's email app) ready to send */
function ContactForm() {
  const [name, setName] = useState('')
  const [service, setService] = useState(SERVICES[0].title)
  const [message, setMessage] = useState('')

  const text = [
    `Hi Starsolutions! ${name.trim() ? `I'm ${name.trim()}. ` : ''}I'm interested in ${service}.`,
    message.trim(),
  ]
    .filter(Boolean)
    .join('\n\n')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <p className="t-h4">Get a Free consultation</p>
      <label className="contact-field">
        <span className="t-btn-s">Your name</span>
        <input
          className="t-body-m"
          name="name"
          autoComplete="name"
          placeholder="e.g. Ali Khan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="contact-field">
        <span className="t-btn-s">Service</span>
        <select className="t-body-m" name="service" value={service} onChange={(e) => setService(e.target.value)}>
          {SERVICES.map((s) => (
            <option key={s.id}>{s.title}</option>
          ))}
        </select>
      </label>
      <label className="contact-field">
        <span className="t-btn-s">Message</span>
        <textarea
          className="t-body-m"
          name="message"
          rows={4}
          placeholder="Tell us about your business and goals"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <div className="contact-form__actions">
        <button type="submit" className="cta-pill">
          <span className="t-btn-l">Send on WhatsApp</span>
          <span className="cta-pill__arrow">
            <img src={arrowUpRightDark} alt="" width={20} height={20} />
          </span>
        </button>
        <a className="outline-btn outline-btn--light" href={mailtoLink(`Enquiry: ${service}`, text)}>
          <span className="t-btn-m">Send by email</span>
        </a>
      </div>
      <p className="t-body-xs contact-form__note">
        Your message opens in WhatsApp or your email app, ready to send. Nothing is stored on this website.
      </p>
    </form>
  )
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__left" data-reveal>
          <div className="contact__intro">
            <div>
              <div className="contact__title-row">
                <img src={arrowDownRight} alt="" width={80} height={80} />
                <h2 className="t-xl">Contact </h2>
              </div>
              <h2 className="t-xl">us today</h2>
            </div>
            <p className="t-body-l contact__lead">
              Tell us what you are working on. We usually start on WhatsApp, and we are happy to continue by email or
              in person at our office in Jhelum.
            </p>
          </div>

          <ul className="contact__details">
            <li>
              <img src={whatsappIcon} alt="" width={40} height={40} />
              <a href={whatsappLink()} className="t-h5" target="_blank" rel="noopener noreferrer">
                WhatsApp: {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <img src={mailIcon} alt="" width={40} height={40} />
              <a href={mailtoLink()} className="t-h5">
                {SITE.email}
              </a>
            </li>
            <li>
              <span className="contact__location-icon">
                <img src={locationBg} alt="" width={40} height={40} />
                <img src={locationPin} alt="" width={24} height={24} className="contact__location-pin" />
              </span>
              <a href={SITE.mapsUrl} className="t-h5" target="_blank" rel="noopener noreferrer">
                {SITE.address}
              </a>
            </li>
          </ul>

          <div className="contact__socials">
            {CHANNELS.map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="social"
                aria-label={c.name}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <img src={c.icon} alt="" width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="contact__right" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
