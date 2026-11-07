import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import heroBg from '../assets/images/hero-bg.jpg'
import crystal from '../assets/images/crystal-hero.png'
import Navbar from './Navbar'
import { EmailForm } from './ui'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  // 3D Mouse Parallax on Desktop
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const crystalX = useTransform(smoothX, [-0.5, 0.5], [-20, 20])
  const crystalY = useTransform(smoothY, [-0.5, 0.5], [-20, 20])
  const crystalRotate = useTransform(smoothX, [-0.5, 0.5], [-2.5, 2.5])

  const node1X = useTransform(smoothX, [-0.5, 0.5], [25, -25])
  const node1Y = useTransform(smoothY, [-0.5, 0.5], [18, -18])
  const node2X = useTransform(smoothX, [-0.5, 0.5], [-25, 25])
  const node2Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20])
  const node3X = useTransform(smoothX, [-0.5, 0.5], [20, -20])
  const node3Y = useTransform(smoothY, [-0.5, 0.5], [22, -22])

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 900) return
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={heroRef}
      className="hero"
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero__bg" aria-hidden>
        <img src={heroBg} alt="" />
      </div>

      <Navbar />

      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 3D Telemetry HUD Pill */}
          <motion.div
            className="hero__telemetry"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span className="hero__telemetry-radar"></span>
            <span className="hero__telemetry-badge">15 Yrs US Retail Proven</span>
            <span className="hero__telemetry-divider">•</span>
            <span className="hero__telemetry-live">Live POS & Cloud Sync Active</span>
          </motion.div>

          <div className="hero__heading">
            <motion.h1
              className="t-h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hero__accent">15 Years Delivering</span>{' '}
              <br />
              POS & Software Solutions
            </motion.h1>
            <motion.p
              className="t-sub1 hero__sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              Star Solutions is a software development company specializing in delivering high-performance POS systems, mobile apps, web development, and digital marketing. Backed by 15 years in business and our own physical iPhone stores across the USA.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <EmailForm />
          </motion.div>
        </motion.div>

        {/* Crystal & 3D Interactive Telemetry Nodes */}
        <div className="hero__visual-wrap">
          <motion.img
            className="hero__crystal"
            src={crystal}
            alt="Star Solutions Crystal"
            width={834}
            height={1139}
            aria-hidden
            style={{
              x: crystalX,
              y: crystalY,
              rotate: crystalRotate,
            }}
          />

          <motion.div
            className="hero__node-card hero__node-card--pos"
            style={{ x: node1X, y: node1Y }}
            whileHover={{ scale: 1.08 }}
          >
            <span className="node-icon">⚡</span>
            <div className="node-info">
              <span className="node-title">Enterprise POS</span>
              <span className="node-sub">&lt; 350ms Checkout</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__node-card hero__node-card--retail"
            style={{ x: node2X, y: node2Y }}
            whileHover={{ scale: 1.08 }}
          >
            <span className="node-icon">🏬</span>
            <div className="node-info">
              <span className="node-title">USA Retail Stores</span>
              <span className="node-sub">15 Yrs Operations</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__node-card hero__node-card--cloud"
            style={{ x: node3X, y: node3Y }}
            whileHover={{ scale: 1.08 }}
          >
            <span className="node-icon">🛡️</span>
            <div className="node-info">
              <span className="node-title">Cloud Uptime</span>
              <span className="node-sub">99.99% Reliability</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
