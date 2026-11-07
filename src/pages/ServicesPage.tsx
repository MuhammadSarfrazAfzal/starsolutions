import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ServicesPage.css'

const PILLARS = [
  {
    badge: 'Core Flagship Solution',
    title: 'Enterprise POS Systems & Hardware Integration',
    subtitle: 'Split-second checkouts, real-time multi-store inventory synchronization, and zero offline data loss.',
    features: [
      {
        icon: '⚡',
        title: 'Sub-Second Checkout Engine',
        desc: 'Engineered for high-volume retail lines to prevent bottlenecking, split tickets, and scan items instantaneously.',
      },
      {
        icon: '🔄',
        title: 'Multi-Location Live Inventory Sync',
        desc: 'Real-time stock level synchronization across all physical stores, warehouse depots, and e-commerce portals.',
      },
      {
        icon: '🔌',
        title: 'Deep Hardware Compatibility',
        desc: 'Native integration with Star Micronics & Epson thermal printers, Zebra barcode scanners, MagTek, PAX, and cash drawers.',
      },
      {
        icon: '📴',
        title: 'Offline-First Resilience',
        desc: 'Cashiers never stop ringing up sales even during internet outages; transactions queue and reconcile automatically.',
      },
    ],
    stats: [
      { label: 'Avg. Checkout Speed', value: '< 350 ms' },
      { label: 'Uptime Reliability', value: '99.99%' },
      { label: 'Hardware Vendors', value: '15+ Brands' },
    ],
    note: 'Battle-tested daily across our physical iPhone retail stores in the USA with 15 years of operational refinement.',
    reversed: false,
  },
  {
    badge: 'Mobile Engineering',
    title: 'Custom Mobile App Development (iOS & Android)',
    subtitle: 'High-performance native and cross-platform mobile apps for retail workflows, customer loyalty, and rapid field execution.',
    features: [
      {
        icon: '📱',
        title: 'Native & Cross-Platform Precision',
        desc: 'Built in Swift, Kotlin, React Native, and Flutter with smooth 60fps animations and fluid touch interactions.',
      },
      {
        icon: '🔍',
        title: 'Staff Inventory & Barcode Scanners',
        desc: 'Turn iPhones and Android devices into industrial-grade barcode scanners for real-time stock audits and price lookups.',
      },
      {
        icon: '💳',
        title: 'Digital Loyalty & Wallet Integration',
        desc: 'Apple Wallet & Google Pay digital member cards, personalized rewards, and tiered customer discounts.',
      },
      {
        icon: '🔔',
        title: 'Geo-Targeted Push Notifications',
        desc: 'Automated promotions and flash-sale alerts triggered when customers are near your retail stores.',
      },
    ],
    stats: [
      { label: 'Platforms Supported', value: 'iOS & Android' },
      { label: 'Frame Rate Target', value: '60 FPS Fluid' },
      { label: 'Avg. App Store Rating', value: '4.9 / 5.0' },
    ],
    note: 'Apps designed to mirror your exact business processes, eliminating off-the-shelf software restrictions.',
    reversed: true,
  },
  {
    badge: 'Cloud & Full-Stack',
    title: 'Modern Web Development & Cloud Systems',
    subtitle: 'Ultra-fast web platforms, custom administrative back-offices, and scalable headless e-commerce architectures.',
    features: [
      {
        icon: '🌐',
        title: 'Bespoke Enterprise Web Applications',
        desc: 'Built using React, Next.js, TypeScript, and Node.js with component-driven systems and microservices.',
      },
      {
        icon: '🛍️',
        title: 'High-Converting E-Commerce Platforms',
        desc: 'Seamless shopping experiences with 1-click checkouts, Stripe/PayPal gateways, and inventory automated sync.',
      },
      {
        icon: '📊',
        title: 'Custom Back-Office Dashboards',
        desc: 'Real-time sales tracking, employee shift monitoring, financial reconciliation, and exportable audit logs.',
      },
      {
        icon: '🛡️',
        title: 'Enterprise Security & Compliance',
        desc: 'End-to-end encryption, strict RBAC permissions, automatic daily backups, and cloud CDN acceleration.',
      },
    ],
    stats: [
      { label: 'Page Load Benchmark', value: '< 0.8 Sec' },
      { label: 'Cloud Architecture', value: 'AWS & Vercel' },
      { label: 'Data Security', value: 'PCI & GDPR' },
    ],
    note: 'Custom architectures that scale gracefully from single-store operations to national multi-branch chains.',
    reversed: false,
  },
  {
    badge: 'Revenue & Foot Traffic',
    title: 'Growth Marketing & Retail Digital Solutions',
    subtitle: 'Turn online impressions into physical store foot traffic and maximize recurring customer lifetime value.',
    features: [
      {
        icon: '📍',
        title: 'Local SEO & Google Maps Domination',
        desc: 'Rank #1 for high-intent "near me" retail searches, optimize Google Business profiles, and capture nearby shoppers.',
      },
      {
        icon: '🎯',
        title: 'High-ROAS Meta & Google Ad Campaigns',
        desc: 'Laser-targeted local advertising strategies tested with our own marketing budget across US retail stores.',
      },
      {
        icon: '💬',
        title: 'Automated WhatsApp & SMS Flows',
        desc: 'Deliver order confirmations, exclusive promotional offers, and abandoned cart reminders with 90%+ open rates.',
      },
      {
        icon: '🔁',
        title: 'Retention & Customer Lifetime Value',
        desc: 'Systematic customer re-engagement funnels designed to turn one-time buyers into loyal repeat brand advocates.',
      },
    ],
    stats: [
      { label: 'Retail Ad Experience', value: '15 Years' },
      { label: 'Avg. Return on Ad Spend', value: '4.2x ROAS' },
      { label: 'Messaging Open Rate', value: '94%+' },
    ],
    note: 'Strategies developed and battle-tested from running our own physical iPhone retail operations in the USA.',
    reversed: true,
  },
]

const TECH_STACK = [
  'Enterprise POS',
  'React & Next.js',
  'TypeScript',
  'Swift / iOS',
  'Kotlin / Android',
  'React Native',
  'Node.js & Express',
  'Python',
  'PostgreSQL',
  'Redis Cache',
  'AWS Cloud',
  'Docker',
  'Stripe Payments',
  'Zebra Scanners',
  'Epson & Star Printers',
  'Tailwind CSS',
]

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery & Workflow Audit',
    desc: 'We analyze your retail store operations, pain points, hardware setup, and customer checkout flows in detail.',
  },
  {
    num: '02',
    title: 'Architecture & Prototyping',
    desc: 'We engineer custom database schemas, API contracts, and interactive UI prototypes tailored to your team.',
  },
  {
    num: '03',
    title: 'Agile Build & Hardware Testing',
    desc: 'We develop your solution in bi-weekly sprints, testing rigorously on physical POS hardware and mobile devices.',
  },
  {
    num: '04',
    title: 'Deployment & 24/7 SLA Support',
    desc: 'We handle seamless staff onboarding, store rollout, and provide dedicated support via direct WhatsApp & phone.',
  },
]

export default function ServicesPage() {
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
            ⚡ Enterprise Services & Solutions
          </motion.div>
          <motion.h1
            className="page-hero__title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Specialized Software, POS &{' '}
            <span className="page-hero__accent">Retail Engineering</span>
          </motion.h1>
          <motion.p
            className="page-hero__desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Built upon 15 years operating physical iPhone retail stores in the USA. We design, code, and deploy
            high-performance POS architectures, custom native mobile apps, web applications, and retail marketing systems.
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
            <Link to="/contact" className="btn-secondary">
              Get an Estimate →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars In-Depth */}
      <section className="services-detail">
        {PILLARS.map((pillar) => (
          <motion.article
            key={pillar.title}
            className={`service-pillar ${pillar.reversed ? 'service-pillar--reversed' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="service-pillar__info">
              <span className="service-pillar__badge">{pillar.badge}</span>
              <h2 className="service-pillar__title">{pillar.title}</h2>
              <p className="service-pillar__subtitle">{pillar.subtitle}</p>

              <div className="service-pillar__features">
                {pillar.features.map((feat) => (
                  <div key={feat.title} className="feature-item">
                    <span className="feature-item__icon">{feat.icon}</span>
                    <div className="feature-item__content">
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-pillar__visual">
              {pillar.stats.map((st) => (
                <div key={st.label} className="pillar-stat-box">
                  <span className="pillar-stat-box__title">{st.label}</span>
                  <span className="pillar-stat-box__val">{st.value}</span>
                </div>
              ))}
              <div className="pillar-note">
                <strong>Field Proven: </strong>
                {pillar.note}
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Tech Stack Matrix */}
      <section className="tech-stack-section">
        <div className="tech-stack-header">
          <h2>Our Technology Ecosystem</h2>
          <p className="page-hero__desc">
            We use modern, enterprise-proven frameworks and hardware standards for maximum reliability.
          </p>
        </div>
        <div className="tech-stack-grid">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 4-Step Engineering Process */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <h2>How We Deliver Success</h2>
            <p className="page-hero__desc">
              From initial operational audit to multi-store hardware rollout, our 4-phase methodology guarantees zero business disruption.
            </p>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="process-step">
                <span className="process-step__num">{step.num}</span>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page CTA Banner */}
      <section className="page-cta-banner">
        <h2>Ready to Upgrade Your Retail or Software Architecture?</h2>
        <p>
          Speak directly with our senior software engineers. Based in Star Plaza, Citi Housing, Jhelum with 15 years USA retail experience.
        </p>
        <div className="page-hero__actions">
          <a
            href="https://wa.me/923342221063"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Chat on WhatsApp
          </a>
          <Link to="/contact" className="btn-primary">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
