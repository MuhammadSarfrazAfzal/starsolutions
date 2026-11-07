import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import './Testimonials.css'

function QuoteMark() {
  return (
    <span className="testimonial__mark" aria-hidden>
      <svg width="16" height="9" viewBox="0 0 16 9" fill="currentColor">
        <path d="M2.6 0H7.6L5 9H0Z" />
        <path d="M10.6 0H15.6L13 9H8Z" />
      </svg>
    </span>
  )
}

const TESTIMONIALS = [
  {
    quote:
      'Star Solutions completely streamlined our multi-location retail checkout in the US with their custom POS system. Zero downtime, seamless inventory synchronization, and automated daily reconciliations saved our stores hundreds of hours.',
    author: 'David Reynolds, Operations Director, US iPhone & Tech Retail Chain',
  },
  {
    quote:
      'Their mobile app and web development team delivered an exceptional retail platform. Backed by their 15 years running their own business, they anticipate real retail bottlenecks and deliver software that actually scales.',
    author: 'Sarah Jenkins, Founder of RetailWave Solutions',
  },
  {
    quote:
      'From custom POS integrations to digital marketing campaigns, Star Solutions provided end-to-end expertise. Their team at Star Plaza Citi Housing Jhelum communicates proactively and delivers world-class results.',
    author: 'Malik Zeeshan, Enterprise Partner',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const count = TESTIMONIALS.length

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <motion.h2
          className="t-xl testimonials__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-outline">Client</span>
          <br />
          <span className="testimonials__solid">Success</span> <span className="text-outline">Stories</span>
        </motion.h2>

        <div className="testimonials__cards">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              className={`testimonial ${i === active ? 'testimonial--active' : ''}`}
              onClick={() => setActive(i)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              <blockquote className="testimonial__body">
                <QuoteMark />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={t.quote}
                    className="t-body-m"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t.quote}
                  </motion.p>
                </AnimatePresence>
              </blockquote>
              <figcaption className="t-btn-s testimonial__author">{t.author}</figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="testimonials__nav">
          <motion.button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setActive((active - 1 + count) % count)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
          >
            <img src={arrowLeft} alt="" width={24} height={24} />
          </motion.button>
          <div className="testimonials__dots" aria-hidden="true">
            {TESTIMONIALS.map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`testimonials__dot ${dotIdx === active ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActive(dotIdx)}
              />
            ))}
          </div>
          <motion.button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setActive((active + 1) % count)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
          >
            <img src={arrowRight} alt="" width={24} height={24} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
