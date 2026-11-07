import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import confetti from 'canvas-confetti'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContactPage.css'

const SERVICES_OPTIONS = [
  'Enterprise POS Systems',
  'Custom Mobile App (iOS / Android)',
  'Web Platform / E-Commerce',
  'Retail Marketing & SEO',
  'Hardware Integration',
  'Complete Digital Ecosystem',
]

const CONTACT_FAQS = [
  {
    q: 'How fast can we begin our project?',
    a: 'We usually begin technical discovery within 24–48 hours of your inquiry. For POS setups and hardware evaluations, our team can review your store specs immediately.',
  },
  {
    q: 'Can we meet in person at your office in Jhelum?',
    a: 'Absolutely! Our engineering headquarters is located at Star Plaza, Near Opera Cinema, Citi Housing, Jhelum. Feel free to message us on WhatsApp to schedule an in-person session.',
  },
  {
    q: 'How do you handle client support and time zones?',
    a: 'With 15 years running physical iPhone retail stores in the USA, our systems engineering team supports USA, European, and local Pakistani time zones with 24/7 critical uptime guarantees.',
  },
  {
    q: 'Do we own the source code and software rights?',
    a: 'Yes, 100%. Upon project completion, all intellectual property, source code repositories, and documentation belong completely to your business with zero vendor lock-in.',
  },
]

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedService, setSelectedService] = useState('Enterprise POS Systems')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      })
    } catch {
      // Confetti fallback
    }

    setSubmitted(true)
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Star Solutions team! My name is ${name || 'there'}. I am interested in ${selectedService}. Details: ${message || 'I would like to discuss a project.'}`
    )
    window.open(`https://wa.me/923342221063?text=${text}`, '_blank')
  }

  return (
    <div className="page-container">
      <Navbar standalone />

      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <motion.div
            className="page-hero__badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            📞 Get in Touch
          </motion.div>
          <motion.h1
            className="page-hero__title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Engineer Your{' '}
            <span className="page-hero__accent">Software & Retail Growth</span>
          </motion.h1>
          <motion.p
            className="page-hero__desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect directly with our engineering team in Star Plaza, Citi Housing, Jhelum or launch an instant
            WhatsApp conversation for real-time architecture advice and free project estimates.
          </motion.p>
          <motion.div
            className="page-hero__actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://wa.me/923342221063"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp: +92 334 2221063
            </a>
            <a href="tel:+923342221063" className="btn-secondary">
              Direct Call: +92 334 2221063
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Main Grid */}
      <section className="contact-main">
        <div className="contact-layout-grid">
          {/* Sidebar Channels */}
          <div className="contact-sidebar">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/923342221063"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="contact-channel-icon contact-channel-icon--wa">💬</div>
              <div className="contact-channel-body">
                <h4>WhatsApp Quick Connect</h4>
                <p>Instant chat with our senior software engineers. Average reply time: under 15 minutes.</p>
                <span className="contact-channel-link contact-channel-link--wa">
                  +92 334 2221063 →
                </span>
              </div>
            </a>

            {/* Office Card */}
            <div className="contact-channel-card">
              <div className="contact-channel-icon">📍</div>
              <div className="contact-channel-body">
                <h4>Headquarters Office</h4>
                <p>Near Opera Cinema, Star Plaza, Citi Housing, Jhelum, Punjab, Pakistan.</p>
                <span className="contact-channel-link">Open for in-person meetings</span>
              </div>
            </div>

            {/* Phone & Schedule Card */}
            <div className="contact-channel-card">
              <div className="contact-channel-icon">🕒</div>
              <div className="contact-channel-body">
                <h4>Working Hours & Support</h4>
                <p>Office Hours: Monday – Saturday, 9:00 AM – 8:00 PM PKT.</p>
                <span className="contact-channel-link">USA Client Support: 24/7 Available</span>
              </div>
            </div>

            {/* Experience Card */}
            <div className="contact-channel-card">
              <div className="contact-channel-icon">⭐</div>
              <div className="contact-channel-body">
                <h4>15 Years of US Retail Provenance</h4>
                <p>Every solution backed by real retail store management and high-volume transaction reliability.</p>
                <span className="contact-channel-link">Battle-tested architecture</span>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <h3>Send Us a Project Inquiry</h3>
              <p>Tell us what you are looking to build and receive a detailed breakdown and estimate.</p>
            </div>

            {submitted ? (
              <div className="form-success-card">
                <span className="form-success-icon">🎉</span>
                <h4>Thank You, {name}!</h4>
                <p>
                  Your message has been received by our engineering team. We will review your requirements and reach out
                  promptly.
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn-whatsapp"
                  style={{ marginTop: '10px' }}
                >
                  Send Details Directly to WhatsApp Now →
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '6px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="interactive-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="form-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+92 334 2221063"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Service Required</label>
                  <div className="form-service-chips">
                    {SERVICES_OPTIONS.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        className={`service-chip ${
                          selectedService === srv ? 'service-chip--active' : ''
                        }`}
                        onClick={() => setSelectedService(srv)}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Project Details & Goals
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your retail store count, software requirements, or application vision..."
                    className="form-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  Submit Project Inquiry →
                </button>

                <p style={{ fontSize: '12.5px', color: 'var(--blue-gray-500)', textAlign: 'center', marginTop: '6px' }}>
                  🔒 Your information is confidential and never shared. We reply within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="contact-faq-section">
        <div className="contact-faq-inner">
          <div className="contact-faq-header">
            <h2>Frequently Asked Questions</h2>
            <p className="page-hero__desc">
              Everything you need to know about starting an engagement with Star Solutions.
            </p>
          </div>
          <div className="contact-faq-grid">
            {CONTACT_FAQS.map((faq) => (
              <div key={faq.q} className="contact-faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
