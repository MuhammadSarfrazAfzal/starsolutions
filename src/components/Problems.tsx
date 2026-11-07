import { useState, type MouseEvent } from 'react'
import { motion } from 'motion/react'
import './Problems.css'

const PROBLEMS = [
  {
    n: '01',
    tag: 'POS & Checkout',
    title: 'Slow POS & Checkout Delays?',
    body: 'Outdated Point of Sale software and hardware cause lost sales and inventory discrepancies. With 15 years operating iPhone stores in the USA, we engineer POS systems that ensure split-second checkouts and real-time multi-store sync.',
    solution: 'Enterprise POS Architecture',
  },
  {
    n: '02',
    tag: 'Custom Apps',
    title: 'Disjointed Apps & Web Systems?',
    body: 'Generic off-the-shelf software fails to match your custom retail workflows. We build tailored mobile apps (iOS & Android) and high-performance web applications designed to streamline every operation.',
    solution: 'Tailored App & Web Ecosystems',
  },
  {
    n: '03',
    tag: 'Growth & Reach',
    title: 'Low Foot Traffic & Marketing Gaps?',
    body: 'Struggling to scale retail store visits or convert online traffic? We deploy high-converting digital marketing, local SEO, and brand campaigns tested and refined across 15 years of physical and digital business.',
    solution: 'Battle-Tested Retail Marketing',
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.98 }}
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

      <div className="problem-card__header">
        <div className="problem-card__num-badge">
          <span className="problem-card__num">{p.n}</span>
        </div>
        <span className="problem-card__tag">{p.tag}</span>
      </div>

      <h3 className="problem-card__title">{p.title}</h3>
      <p className="problem-card__body">{p.body}</p>

      <div className="problem-card__footer">
        <span className="problem-card__solution-pill">
          <span className="problem-card__solution-dot"></span>
          {p.solution}
        </span>
      </div>
    </motion.article>
  )
}

export default function Problems() {
  return (
    <section className="problems" id="challenges">
      <div className="problems__header">
        <motion.span
          className="problems__kicker"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Bottlenecks We Solve
        </motion.span>
        <motion.h2
          className="problems__title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          Are You Facing These Retail & Software Challenges?
        </motion.h2>
      </div>

      <div className="problems__grid">
        {PROBLEMS.map((p, index) => (
          <ProblemCard key={p.n} p={p} index={index} />
        ))}
      </div>
    </section>
  )
}
