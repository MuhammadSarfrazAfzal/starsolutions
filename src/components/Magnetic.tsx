import { useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { motion, useSpring } from 'motion/react'

interface MagneticProps {
  children: ReactNode
  strength?: number
  className?: string
}

export function Magnetic({ children, strength = 0.25, className = '' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(position.x, springConfig)
  const springY = useSpring(position.y, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const current = ref.current
    if (!current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = current.getBoundingClientRect()

    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    setPosition({ x: middleX * strength, y: middleY * strength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`magnetic-wrapper ${className}`}
    >
      {children}
    </motion.div>
  )
}
