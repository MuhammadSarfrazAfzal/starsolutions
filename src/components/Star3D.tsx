import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

// three.js + react-three-fiber live in their own chunk, fetched once the page is idle
const StarScene = lazy(() => import('./StarScene'))

/** If WebGL is unavailable the scene throws; keep showing the flat star instead */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

/** Flat star with orbit rings: shown first, and kept if WebGL is unavailable */
function StarFallback() {
  return (
    <svg className="hero__star-fallback" viewBox="0 0 400 400" aria-hidden>
      <defs>
        <linearGradient id="star-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4a5cff" />
          <stop offset="1" stopColor="#0019ff" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="200" rx="178" ry="62" transform="rotate(-24 200 200)" fill="none" stroke="#94a3b8" strokeOpacity="0.6" />
      <ellipse cx="200" cy="200" rx="196" ry="44" transform="rotate(18 200 200)" fill="none" stroke="#94a3b8" strokeOpacity="0.45" />
      <path
        d="M200 92l30.6 69.5 75.4 6.6-57.1 49.7 17 73.9L200 252.4l-65.9 39.3 17-73.9-57.1-49.7 75.4-6.6L200 92Z"
        fill="url(#star-fill)"
        stroke="#f8fafc"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Hero visual: the flat star shows first, then cross-fades into the live 3D star */
export default function Star3D() {
  const wrap = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const [load, setLoad] = useState(false)
  const [ready, setReady] = useState(false)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const start = () => setLoad(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(start, 300)
    return () => clearTimeout(id)
  }, [])

  // Pause the render loop while the hero is scrolled out of view
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrap} className={`hero__star ${ready ? 'hero__star--live' : ''}`} data-hero-visual aria-hidden>
      <span className="hero__star-glow" />
      <StarFallback />
      {load && (
        <SceneBoundary>
          <Suspense fallback={null}>
            <StarScene animate={!reduced} active={active} onReady={() => setReady(true)} />
          </Suspense>
        </SceneBoundary>
      )}
    </div>
  )
}
