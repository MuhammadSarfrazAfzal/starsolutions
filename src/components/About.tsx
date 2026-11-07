import { motion } from 'motion/react'
import crystal from '../assets/images/crystal-approach.png'
import arrowDownRight from '../assets/icons/arrow-down-right-dark-80.svg'
import './About.css'

const STATS = [
  { value: '15+', label: 'Years Own Business' },
  { value: 'USA', label: 'Physical iPhone Stores' },
  { value: '99.9%', label: 'POS System Uptime' },
  { value: '100+', label: 'Solutions Delivered' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <motion.div
          className="about__title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about__title-row">
            <h2 className="t-xl">Our</h2>
            <img src={arrowDownRight} alt="" width={80} height={80} className="about__arrow-icon" />
          </div>
          <h2 className="t-xl">Story</h2>
        </motion.div>

        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="t-sub1">
            With 15 years running our own successful business, Star Solutions merges deep software engineering mastery with real-world retail ownership. Having our own physical business in the USA running multiple iPhone stores across America, we design technologies tested on the front lines of commerce.{' '}
            <span className="about__text-strong">
              Operating from Star Plaza, near Opera Cinema, Citi Housing, Jhelum to the United States, we specialize in delivering enterprise POS systems, cutting-edge mobile apps, modern web platforms, and high-impact digital marketing.
            </span>
          </p>

          <div className="about__stats">
            {STATS.map((s, index) => (
              <motion.div
                key={s.label}
                className="about__stat-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <img className="about__crystal" src={crystal} alt="" width={620} height={549} aria-hidden />
      </div>
    </section>
  )
}
