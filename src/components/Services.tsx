import { motion } from 'motion/react'
import arrowDownRight from '../assets/icons/arrow-down-right-white-24.svg'
import arrowUpRightLight from '../assets/icons/arrow-up-right-light.svg'
import { OutlineButton } from './ui'
import './Services.css'

const SERVICES = [
  {
    title: 'Enterprise POS Systems',
    body: 'Specialized Point of Sale solutions engineered for split-second checkouts, multi-store inventory synchronization, hardware integrations, and automated real-time financial reporting.',
  },
  {
    title: 'Custom App Development',
    body: 'High-performance native and cross-platform mobile apps for iOS and Android, crafted to automate operations, manage retail tasks, and create seamless customer shopping experiences.',
  },
  {
    title: 'Modern Web Development',
    body: 'Bespoke web applications, high-converting e-commerce storefronts, and cloud software systems built for enterprise reliability, blazing speed, and frictionless user flows.',
  },
  {
    title: 'Marketing & Retail Solutions',
    body: 'Comprehensive digital marketing, SEO, and foot-traffic strategies — refined and proven through 15 years running our own physical iPhone retail stores across America.',
  },
]

export default function Services() {
  return (
    <>
      <motion.div
        className="headline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="t-xl">
          What we can do <span className="headline__accent">for you?</span>
        </h2>
      </motion.div>

      <section className="services" id="services">
        <div className="services__panel">
          {SERVICES.map((s, index) => (
            <motion.div
              key={s.title}
              className="service-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={arrowDownRight} alt="" width={24} height={24} className="service-row__icon" />
              <div className="service-row__content">
                <h3 className="t-h2 service-row__title">{s.title}</h3>
                <p className="t-body-l service-row__body">{s.body}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="services__cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="t-h2 services__cta-title">Free consultation</p>
            <div className="services__cta-actions">
              <OutlineButton href="https://wa.me/923342221063" tone="light" icon={arrowUpRightLight}>
                Schedule a free call
              </OutlineButton>
              <span className="services__worth">worth 200 USD</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
