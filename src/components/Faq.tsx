import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import arrowDownRight from '../assets/icons/arrow-down-right-white-24.svg'
import './Faq.css'

const FAQS = [
  {
    q: 'What software solutions does Star Solutions specialize in?',
    a: 'We specialize in enterprise Point of Sale (POS) systems, custom mobile application development (iOS & Android), modern web development, and performance digital marketing strategies tailored for retail and enterprise businesses.',
  },
  {
    q: 'What is your background in running physical businesses in the USA?',
    a: 'Star Solutions has been in business for 15 years. We own and operate physical retail iPhone stores across America, giving us direct, hands-on expertise in high-volume retail, hardware peripherals, barcode scanning, and multi-location inventory syncing.',
  },
  {
    q: 'Where is Star Solutions located?',
    a: 'Our tech headquarters is located in Star Plaza, near Opera Cinema, Citi Housing, Jhelum, Pakistan, working in tandem with our retail operations in the United States.',
  },
  {
    q: 'How can I contact Star Solutions on WhatsApp?',
    a: 'You can connect with us directly on WhatsApp at +92 334 2221063 for instant consultations, project quotations, and live software demos.',
  },
  {
    q: 'Can you tailor POS and software to multi-store businesses?',
    a: 'Yes. All our POS and custom software architectures are purpose-built to handle multi-branch sync, offline-first reliability, inventory management, and centralized business reporting.',
  },
  {
    q: 'How long have you been in business?',
    a: 'Star Solutions has been actively running its own business for over 15 years, delivering reliable digital solutions and powering brick-and-mortar retail across international markets.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq-section">
      <div className="faq-panel">
        <div className="faq">
          <motion.h2
            className="t-xl faq__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            FAQ<span className="faq__title-s">s</span>
          </motion.h2>

          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-item__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="t-h4">{item.q}</span>
                  <motion.img
                    src={arrowDownRight}
                    alt=""
                    width={24}
                    height={24}
                    animate={{ rotate: isOpen ? -90 : 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-item__answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="t-body-l">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
