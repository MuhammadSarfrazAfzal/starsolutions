import { useState, type MouseEvent } from 'react'
import { motion } from 'motion/react'
import './Problems.css'

const PROBLEMS = [
  {
    n: '01',
    title: 'Slow POS & Checkout Delays?',
    body: 'Outdated Point of Sale software and hardware cause lost sales and inventory discrepancies. With 15 years operating iPhone stores in the USA, we engineer POS systems that ensure split-second checkouts and real-time multi-store sync.',
  },
  {
    n: '02',
    title: 'Disjointed Apps & Web Systems?',
    body: 'Generic off-the-shelf software fails to match your custom retail workflows. We build tailored mobile apps (iOS & Android) and high-performance web applications designed to streamline every operation.',
  },
  {
    n: '03',
    title: 'Low Foot Traffic & Marketing Gaps?',
    body: 'Struggling to scale retail store visits or convert online traffic? We deploy high-converting digital marketing, local SEO, and brand campaigns tested and refined across 15 years of physical and digital business.',
  },
]

function ProblemCard({ p, index }: { p: (typeof PROBLEMS)[0]; index: number }) {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.article
      className="problem-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Interactive Spotlight Glow */}
      {isHovered && (
        <div
          className="problem-card__spotlight"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(0, 25, 255, 0.08), transparent 80%)`,
          }}
        />
      )}
      <span className="problem-card__num">{p.n}</span>
      <h3 className="t-h3 problem-card__title">{p.title}</h3>
      <p className="t-body-l problem-card__body">{p.body}</p>
    </motion.article>
  )
}

export default function Problems() {
  return (
    <section className="problems">
      <motion.h2
        className="t-h2 problems__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        Are You Facing These Retail & Software Challenges?
      </motion.h2>

      <div className="problems__grid">
        {PROBLEMS.map((p, index) => (
          <ProblemCard key={p.n} p={p} index={index} />
        ))}
      </div>
    </section>
  )
}
