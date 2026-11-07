import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import './CursorGlow.css'

export function CursorGlow() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 220, mass: 0.1 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only on pointer devices with hover capability
    if (window.matchMedia('(hover: none)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      // Check if hovering interactive target
      const target = e.target as HTMLElement
      const isInteractive = Boolean(
        target.closest('button') ||
          target.closest('a') ||
          target.closest('.problem-card') ||
          target.closest('.service-row') ||
          target.closest('.testimonial'),
      )
      setIsHovered(isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible, cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      className={`cursor-glow ${isHovered ? 'cursor-glow--hover' : ''}`}
      style={{ x, y }}
      aria-hidden="true"
    />
  )
}
