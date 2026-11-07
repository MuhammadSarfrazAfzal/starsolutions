import { useEffect, useRef } from 'react'
import './InteractiveStarfield.css'

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  baseAlpha: number
  color: string
}

export function InteractiveStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = { x: -1000, y: -1000, radius: 160 }

    // Colors matching Star Solutions theme
    const colors = ['rgba(0, 25, 255, ', 'rgba(74, 92, 255, ', 'rgba(37, 211, 102, ', 'rgba(141, 164, 255, ']

    // Star count (scales with screen size, max 50 for silky 60fps)
    const starCount = Math.min(Math.floor((width * height) / 28000), 50)
    const stars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      const baseAlpha = 0.2 + Math.random() * 0.4
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1.2 + Math.random() * 1.8,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0

        // Mouse interaction distance
        const dx = mouse.x - star.x
        const dy = mouse.y - star.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.2
          star.alpha = Math.min(1, star.baseAlpha + force * 0.6)
          // Gentle attraction toward mouse
          star.x += (dx / dist) * force * 0.6
          star.y += (dy / dist) * force * 0.6
        } else {
          star.alpha = star.baseAlpha
        }

        // Draw star with soft glow
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color + star.alpha + ')'
        ctx.shadowBlur = 8
        ctx.shadowColor = star.color + '0.6)'
        ctx.fill()

        // Connect nearby stars with constellation lines
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j]
          const cdx = star.x - s2.x
          const cdy = star.y - s2.y
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy)

          if (cdist < 110) {
            const lineAlpha = (1 - cdist / 110) * 0.15
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(s2.x, s2.y)
            ctx.strokeStyle = `rgba(0, 25, 255, ${lineAlpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="interactive-starfield" aria-hidden="true" />
}
