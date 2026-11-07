import { useEffect, useState } from 'react'
import './ClickRipple.css'

interface Ripple {
  id: number
  x: number
  y: number
}

export function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setRipples((prev) => [...prev.slice(-4), newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 700)
    }

    window.addEventListener('click', handleClick, { passive: true })
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="click-ripple-container" aria-hidden="true">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="click-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </div>
  )
}
