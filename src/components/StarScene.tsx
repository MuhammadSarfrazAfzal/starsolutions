import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { BufferAttribute, BufferGeometry, Color, ExtrudeGeometry, Shape, type Group, type Points } from 'three'

type StarSceneProps = {
  /** false when the visitor prefers reduced motion: render one still frame */
  animate: boolean
  /** false while the hero is off screen: stop the render loop */
  active: boolean
  onReady: () => void
}

// Template palette
const PRIMARY = '#0019ff'
const PRIMARY_LIGHT = '#4a5cff'
const GRAY_400 = '#94a3b8'

const pointer = { x: 0, y: 0 }

/** Five-point star outline, the same proportions as the Starsolutions mark */
function starShape(points = 5, outer = 1.5, inner = 0.66) {
  const shape = new Shape()
  for (let i = 0; i <= points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (i / (points * 2)) * Math.PI * 2 + Math.PI / 2
    if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r)
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r)
  }
  return shape
}

/** Small seeded PRNG so the starfield is identical on every render */
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function Star({ animate }: { animate: boolean }) {
  const group = useRef<Group>(null)
  const spin = useRef<Group>(null)

  const geometry = useMemo(() => {
    const g = new ExtrudeGeometry(starShape(), {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.16,
      bevelSegments: 12,
      curveSegments: 4,
    })
    g.center()
    g.computeVertexNormals()
    return g
  }, [])

  useFrame((state) => {
    if (!animate || !group.current || !spin.current) return
    const t = state.clock.elapsedTime
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.5)
    // Sway around the front face, then turn as the visitor scrolls away
    spin.current.rotation.y = Math.sin(t * 0.6) * 0.5 + scroll * Math.PI * 1.5
    group.current.rotation.x += (pointer.y * 0.35 - group.current.rotation.x) * 0.05
    group.current.rotation.z += (-pointer.x * 0.25 - group.current.rotation.z) * 0.05
    group.current.position.y = Math.sin(t * 0.8) * 0.12
  })

  return (
    <group ref={group}>
      <group ref={spin} rotation={[0, -0.35, 0]}>
        <mesh geometry={geometry}>
          <meshPhysicalMaterial
            color={PRIMARY}
            metalness={0.35}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.06}
            iridescence={0.1}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[200, 700]}
            envMapIntensity={1.2}
          />
        </mesh>
      </group>
    </group>
  )
}

/** A thin orbit ring with glowing satellites, one per service */
function Orbit({
  radius,
  tilt,
  speed,
  count,
  color,
  animate,
}: {
  radius: number
  tilt: [number, number]
  speed: number
  count: number
  color: string
  animate: boolean
}) {
  const group = useRef<Group>(null)
  useFrame((_, delta) => {
    if (animate && group.current) group.current.rotation.z += delta * speed
  })
  return (
    <group rotation={[tilt[0], tilt[1], 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 8, 200]} />
        <meshBasicMaterial color={GRAY_400} transparent opacity={0.55} />
      </mesh>
      <group ref={group}>
        {Array.from({ length: count }, (_, i) => {
          const a = (i / count) * Math.PI * 2
          return (
            <mesh key={i} position={[Math.cos(a) * radius, Math.sin(a) * radius, 0]}>
              <sphereGeometry args={[i % 2 ? 0.06 : 0.085, 24, 24]} />
              <meshPhysicalMaterial color={color} metalness={0.3} roughness={0.2} clearcoat={1} envMapIntensity={1.4} />
            </mesh>
          )
        })}
      </group>
    </group>
  )
}

/** Drifting starfield around the star, in the template's blues and greys */
function Starfield({ count = 700, animate }: { count?: number; animate: boolean }) {
  const points = useRef<Points>(null)
  const geometry = useMemo(() => {
    const random = mulberry32(7)
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const palette = [new Color(PRIMARY), new Color(PRIMARY_LIGHT), new Color(GRAY_400)]
    for (let i = 0; i < count; i++) {
      const r = 3.4 + random() * 6
      const theta = random() * Math.PI * 2
      const phi = Math.acos(2 * random() - 1)
      positions.set([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)], i * 3)
      const c = palette[Math.floor(random() * palette.length)]
      colors.set([c.r, c.g, c.b], i * 3)
    }
    const g = new BufferGeometry()
    g.setAttribute('position', new BufferAttribute(positions, 3))
    g.setAttribute('color', new BufferAttribute(colors, 3))
    return g
  }, [count])

  useFrame((_, delta) => {
    if (!animate || !points.current) return
    points.current.rotation.y += delta * 0.025
    points.current.rotation.x += delta * 0.008
  })

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  )
}

/** Studio lighting baked into an environment map from theme colours (no HDR download) */
function Studio() {
  return (
    <Environment resolution={256} frames={1}>
      <color attach="background" args={['#cbd5e1']} />
      <Lightformer form="rect" intensity={6} color="#ffffff" position={[0, 5, 2]} rotation-x={Math.PI / 2} scale={[10, 3, 1]} />
      <Lightformer form="rect" intensity={4} color={PRIMARY_LIGHT} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[6, 5, 1]} />
      <Lightformer form="rect" intensity={5} color="#f8fafc" position={[5, 1, 2]} rotation-y={-Math.PI / 2} scale={[4, 6, 1]} />
      <Lightformer form="ring" intensity={4} color="#ffffff" position={[1.5, 1.5, 5]} scale={2.2} />
      <Lightformer form="rect" intensity={2} color="#1e293b" position={[0, -5, 1]} rotation-x={-Math.PI / 2} scale={[10, 4, 1]} />
    </Environment>
  )
}

export default function StarScene({ animate, active, onReady }: StarSceneProps) {
  // The canvas ignores pointer events (it sits over the page), so follow the pointer window-wide
  useEffect(() => {
    if (!animate) return
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [animate])

  return (
    <Canvas
      className="hero__star-canvas"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 8.6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={animate && active ? 'always' : 'demand'}
      onCreated={() => requestAnimationFrame(() => requestAnimationFrame(onReady))}
      aria-hidden
    >
      <Studio />
      <ambientLight intensity={0.3} />
      {/* nudged right so the orbits stay clear of the hero copy */}
      <group position={[0.35, 0, 0]}>
        <Star animate={animate} />
        <Orbit radius={2.35} tilt={[1.15, 0.25]} speed={0.25} count={5} color={PRIMARY} animate={animate} />
        <Orbit radius={2.85} tilt={[1.35, -0.55]} speed={-0.16} count={3} color="#ffffff" animate={animate} />
      </group>
      <Starfield animate={animate} />
    </Canvas>
  )
}
