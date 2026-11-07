import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import confetti from 'canvas-confetti'
import './InteractiveWidgets.css'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="scroll-progress-bar" style={{ scaleX }} />
}

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: 0.9, y: 0.9 },
      colors: ['#25d366', '#0019ff', '#4a5cff'],
    })
  }

  if (!visible) return null

  return (
    <motion.aside
      className="floating-whatsapp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Direct WhatsApp Contact"
    >
      <a
        href="https://wa.me/923342221063"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp__btn"
        onClick={handleClick}
        aria-label="Chat on WhatsApp +92 334 2221063"
      >
        <span className="floating-whatsapp__icon-wrap">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.41C16.31 14.28 15.1 13.69 14.88 13.61C14.65 13.52 14.49 13.48 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.7C13.4 14.86 13.25 14.89 13 14.76C12.75 14.64 11.94 14.37 10.99 13.52C10.25 12.86 9.75 12.05 9.61 11.8C9.46 11.55 9.59 11.42 9.72 11.29C9.83 11.18 9.97 11 10.1 10.85C10.22 10.7 10.26 10.59 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.87 9.76 8.64 9.56 8.13C9.36 7.63 9.15 7.7 9 7.7C8.85 7.69 8.69 7.69 8.52 7.69C8.35 7.69 8.08 7.75 7.85 8C7.62 8.25 7 8.83 7 10.01C7 11.19 7.87 12.33 8 12.49C8.12 12.66 9.7 15.1 12.16 16.16C12.75 16.41 13.2 16.56 13.56 16.68C14.15 16.86 14.69 16.84 15.12 16.77C15.6 16.7 16.59 16.17 16.8 15.58C17.01 14.99 17.01 14.49 16.95 14.41C16.89 14.33 16.81 14.53 16.56 14.41Z" />
          </svg>
          <span className="floating-whatsapp__pulse"></span>
        </span>
        <span className={`floating-whatsapp__text ${hovered ? 'floating-whatsapp__text--expanded' : ''}`}>
          Quick WhatsApp
        </span>
      </a>
    </motion.aside>
  )
}
