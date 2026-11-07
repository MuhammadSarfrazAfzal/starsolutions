import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Star,
  Zap,
  ShieldCheck,
  Users,
  Smartphone,
  Code2,
  TrendingUp,
  MapPin,
  MessageCircle,
  Clock,
  ArrowRight,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutPage.css'

const VALUES = [
  {
    icon: Zap,
    title: 'Zero-Lag Checkout Philosophy',
    desc: 'In retail, every extra second of register lag costs customer satisfaction and revenue. We architect systems tuned for microsecond response times and immediate synchronization.',
  },
  {
    icon: ShieldCheck,
    title: 'Real-Store Battlefield Tested',
    desc: 'We never deploy untested theories to our clients. Every POS feature, app workflow, and marketing tactic is vetted and proven inside our own physical iPhone stores in the USA.',
  },
  {
    icon: Users,
    title: 'Founder & Senior Engineer Direct Access',
    desc: 'No endless ticketing queues or non-technical intermediaries. You get direct access via WhatsApp, phone, and in-person meetings at our Citi Housing, Jhelum headquarters.',
  },
  {
    icon: Smartphone,
    title: 'Native-Grade Craftsmanship',
    desc: 'We build applications that leverage platform capabilities natively. From camera barcode scanning to biometric logins and thermal printer drivers, our software runs flawlessly.',
  },
  {
    icon: Code2,
    title: 'Zero Vendor Lock-In',
    desc: 'Clean, documented code written with modern industry-standard languages (React, TypeScript, Swift, Kotlin, PostgreSQL) that you own and control completely.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Operational Evolution',
    desc: 'Retail never stands still. We stand beside you for the long haul with 24/7 SLA monitoring, feature upgrades, hardware expansions, and performance tuning.',
  },
]

export default function AboutPage() {
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
            <Star size={14} /> About Star Solutions
          </motion.div>
          <motion.h1
            className="page-hero__title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            15 Years of Physical Retail Grit &{' '}
            <span className="page-hero__accent">Software Innovation</span>
          </motion.h1>
          <motion.p
            className="page-hero__desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are not just programmers sitting behind desks. We are physical store operators who lived through the
            everyday chaos of retail in America—and built the exact software systems needed to conquer it.
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
              <MessageCircle size={18} /> WhatsApp: +92 334 2221063
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Our Jhelum Office <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Origin Story & Metrics */}
      <section className="about-journey">
        <div className="about-story-grid">
          <motion.div
            className="about-story__content"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>How Our 15-Year American Retail Journey Built a Software Powerhouse</h2>
            <p>
              In 2011, when we opened our physical iPhone retail stores in the United States, we quickly discovered
              that traditional retail software was fundamentally broken. Off-the-shelf POS systems were sluggish,
              crashed during Black Friday rushes, lost offline sales data, and failed to keep multi-store inventory
              accurate in real-time.
            </p>
            <p>
              Frustrated by lost sales and stock errors, we began engineering our own proprietary POS software,
              warehouse scanning tools, and customer loyalty systems. The results were transformational: checkout
              times dropped below a second, inventory discrepancies disappeared, and customer retention skyrocketed.
            </p>
            <div className="about-story__highlight">
              "We built our software to save our own retail business first. Today, we bring those battle-tested
              solutions to retailers, businesses, and enterprises worldwide."
            </div>
            <p>
              Headquartered at <strong>Star Plaza, Near Opera Cinema, Citi Housing, Jhelum</strong>, our engineering
              collective pairs decades of hands-on American retail operational knowledge with elite software development
              talent.
            </p>
          </motion.div>

          {/* Metrics Card */}
          <motion.div
            className="about-metrics-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Operational Milestones</h3>
            <div className="about-metrics-list">
              <div className="about-metric-row">
                <span className="about-metric-val">15+</span>
                <span className="about-metric-label">Years Operating Retail & Tech</span>
              </div>
              <div className="about-metric-row">
                <span className="about-metric-val">99.99%</span>
                <span className="about-metric-label">POS Architecture Uptime</span>
              </div>
              <div className="about-metric-row">
                <span className="about-metric-val">100+</span>
                <span className="about-metric-label">Custom App & Web Deliveries</span>
              </div>
              <div className="about-metric-row">
                <span className="about-metric-val">USA</span>
                <span className="about-metric-label">Physical iPhone Retail Stores</span>
              </div>
              <div className="about-metric-row">
                <span className="about-metric-val">Jhelum</span>
                <span className="about-metric-label">Citi Housing Global HQ Hub</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="about-values-section">
        <div className="about-values-inner">
          <div className="about-values-header">
            <h2>The Principles Behind Every Line of Code</h2>
            <p className="page-hero__desc">
              We operate with total transparency, uncompromising technical standards, and real-world empathy for business owners.
            </p>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => {
              const ValueIcon = v.icon
              return (
                <div key={v.title} className="value-card">
                  <span className="value-card__icon">
                    <ValueIcon size={26} color="var(--primary-main)" />
                  </span>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Physical Location & Contact Info */}
      <section className="location-spotlight">
        <div className="location-spotlight-card">
          <div className="location-info">
            <h3>Visit Our Headquarters</h3>
            <p>
              We welcome prospective clients, business owners, and tech collaborators to visit our offices in person
              or connect with us directly online.
            </p>
            <div className="location-pill-list">
              <div className="location-pill-item">
                <MapPin size={20} color="var(--primary-main)" style={{ flexShrink: 0 }} />
                <span>Near Opera Cinema, Star Plaza, Citi Housing, Jhelum, Punjab, Pakistan</span>
              </div>
              <div className="location-pill-item">
                <MessageCircle size={20} color="#25d366" style={{ flexShrink: 0 }} />
                <span>WhatsApp Direct: +92 334 2221063</span>
              </div>
              <div className="location-pill-item">
                <Clock size={20} color="var(--blue-gray-500)" style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 9:00 AM – 8:00 PM PKT (USA Support 24/7)</span>
              </div>
            </div>
          </div>
          <div className="location-cta-box">
            <h4>Ready to discuss your project?</h4>
            <p>Connect immediately on WhatsApp to get an architectural breakdown and live software demo.</p>
            <a
              href="https://wa.me/923342221063"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} /> Open WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Page CTA */}
      <section className="page-cta-banner">
        <h2>Partner with an Engineering Team That Knows Retail</h2>
        <p>
          Stop wrestling with generic software. Get bespoke systems tailored to your exact store workflows and growth goals.
        </p>
        <div className="page-hero__actions">
          <a
            href="https://wa.me/923342221063"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} /> WhatsApp Consultation
          </a>
          <Link to="/services" className="btn-secondary">
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
