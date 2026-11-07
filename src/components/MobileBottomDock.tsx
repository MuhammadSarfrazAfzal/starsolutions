import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import confetti from 'canvas-confetti'
import './MobileBottomDock.css'

export function MobileBottomDock() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling 150px on mobile
      if (window.scrollY > 150 && window.innerWidth < 768) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleWhatsApp = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.9 },
      colors: ['#25d366', '#0019ff'],
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="mobile-bottom-dock"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 260 }}
          aria-label="Mobile Quick Actions"
        >
          <div className="mobile-bottom-dock__inner">
            <motion.a
              href="tel:+923342221063"
              className="mobile-dock-btn"
              whileTap={{ scale: 0.9 }}
              aria-label="Call Star Solutions"
            >
              <span className="mobile-dock-btn__icon">📞</span>
              <span className="mobile-dock-btn__label">Call</span>
            </motion.a>

            <motion.a
              href="https://wa.me/923342221063"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-dock-btn mobile-dock-btn--whatsapp"
              onClick={handleWhatsApp}
              whileTap={{ scale: 0.9 }}
              aria-label="Chat on WhatsApp"
            >
              <span className="mobile-dock-btn__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
                </svg>
              </span>
              <span className="mobile-dock-btn__label">WhatsApp</span>
            </motion.a>

            <motion.a
              href="#services"
              className="mobile-dock-btn"
              whileTap={{ scale: 0.9 }}
              aria-label="Explore Services"
            >
              <span className="mobile-dock-btn__icon">⚡</span>
              <span className="mobile-dock-btn__label">Services</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="mobile-dock-btn"
              whileTap={{ scale: 0.9 }}
              aria-label="Visit Contact"
            >
              <span className="mobile-dock-btn__icon">📍</span>
              <span className="mobile-dock-btn__label">Visit</span>
            </motion.a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
