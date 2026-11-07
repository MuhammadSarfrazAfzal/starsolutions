import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './ThreeBackground.css'

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()

    const fov = 60
    let width = window.innerWidth
    let height = window.innerHeight
    const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000)
    camera.position.z = 160

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      container.appendChild(renderer.domElement)
    } catch {
      // If WebGL is not supported, silently degrade
      return
    }

    // 2. 3D Data Nodes & Constellation Flow
    const nodeCount = Math.min(Math.floor((width * height) / 10000), 90)
    const positions = new Float32Array(nodeCount * 3)
    const velocities: { x: number; y: number; z: number; originX: number; originY: number; originZ: number }[] = []
    const colors = new Float32Array(nodeCount * 3)

    const colorPalette = [
      new THREE.Color('#0019ff'), // Star Solutions Royal Blue
      new THREE.Color('#4a5cff'), // Electric Indigo
      new THREE.Color('#38bdf8'), // Cyan / Sky
      new THREE.Color('#25d366'), // Active WhatsApp / Sync Emerald
    ]

    const rangeX = 220
    const rangeY = 160
    const rangeZ = 120

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * rangeX
      const y = (Math.random() - 0.5) * rangeY
      const z = (Math.random() - 0.5) * rangeZ

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      velocities.push({
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
        z: (Math.random() - 0.5) * 0.1,
        originX: x,
        originY: y,
        originZ: z,
      })

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    // Particle Points
    const nodesGeometry = new THREE.BufferGeometry()
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    nodesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    // Create a circular glowing canvas texture for the nodes
    const particleCanvas = document.createElement('canvas')
    particleCanvas.width = 32
    particleCanvas.height = 32
    const pCtx = particleCanvas.getContext('2d')
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16)
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
      grad.addColorStop(0.3, 'rgba(74, 92, 255, 0.8)')
      grad.addColorStop(0.7, 'rgba(0, 25, 255, 0.25)')
      grad.addColorStop(1, 'rgba(0, 25, 255, 0)')
      pCtx.fillStyle = grad
      pCtx.fillRect(0, 0, 32, 32)
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas)

    const nodesMaterial = new THREE.PointsMaterial({
      size: 4.5,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const nodePoints = new THREE.Points(nodesGeometry, nodesMaterial)
    scene.add(nodePoints)

    // Dynamic Line Connections Mesh
    const maxConnections = (nodeCount * (nodeCount - 1)) / 2
    const linePositions = new Float32Array(maxConnections * 6)
    const lineColors = new Float32Array(maxConnections * 6)
    const linesGeometry = new THREE.BufferGeometry()
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(linesMesh)

    // 3. Floating Holographic Crystals (Star Solutions Prisms)
    const crystalGroup = new THREE.Group()

    const crystalConfigs = [
      { geom: new THREE.IcosahedronGeometry(7, 0), pos: [-65, 35, -20], rotSpeed: [0.005, 0.007] },
      { geom: new THREE.OctahedronGeometry(6, 0), pos: [75, -25, -15], rotSpeed: [-0.006, 0.005] },
      { geom: new THREE.IcosahedronGeometry(5, 0), pos: [-55, -45, 10], rotSpeed: [0.004, -0.006] },
      { geom: new THREE.OctahedronGeometry(8, 0), pos: [60, 45, -30], rotSpeed: [0.006, 0.004] },
    ]

    const crystalMeshes: { mesh: THREE.Mesh; rotSpeed: number[] }[] = []

    crystalConfigs.forEach((cfg) => {
      // Wireframe layer
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x4a5cff,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
      const mesh = new THREE.Mesh(cfg.geom, wireMat)
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2])

      // Inner subtle glow core
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x0019ff,
        transparent: true,
        opacity: 0.08,
      })
      const coreMesh = new THREE.Mesh(cfg.geom, coreMat)
      coreMesh.scale.set(0.85, 0.85, 0.85)
      mesh.add(coreMesh)

      crystalGroup.add(mesh)
      crystalMeshes.push({ mesh, rotSpeed: cfg.rotSpeed })
    })

    scene.add(crystalGroup)

    // 4. Mouse & Scroll Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    let scrollY = window.scrollY
    let targetScrollY = window.scrollY

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized coordinates [-1, 1]
      mouse.targetX = (e.clientX / width) * 2 - 1
      mouse.targetY = -(e.clientY / height) * 2 + 1
    }

    const handleScroll = () => {
      targetScrollY = window.scrollY
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    // 5. Animation Loop
    let animationFrameId: number
    const connectDistance = 42

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Lerp scroll
      scrollY += (targetScrollY - scrollY) * 0.06
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      const scrollProgress = scrollY / maxScroll

      // Dynamic Camera Glide (3D Story Progression)
      // As user scrolls, camera pushes forward and gently orbits
      camera.position.x = mouse.x * 20
      camera.position.y = mouse.y * 15 - scrollProgress * 25
      camera.position.z = 160 - scrollProgress * 40
      camera.rotation.z = mouse.x * 0.03 + scrollProgress * 0.08
      camera.lookAt(0, -scrollProgress * 25, 0)

      // Rotate crystals
      crystalMeshes.forEach(({ mesh, rotSpeed }) => {
        mesh.rotation.x += rotSpeed[0]
        mesh.rotation.y += rotSpeed[1]
      })
      crystalGroup.position.y = Math.sin(Date.now() * 0.001) * 3

      // Update Node Positions
      const posAttr = nodesGeometry.attributes.position as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array

      let lineIndex = 0
      const lPos = linesGeometry.attributes.position as THREE.BufferAttribute
      const lPosArray = lPos.array as Float32Array
      const lCol = linesGeometry.attributes.color as THREE.BufferAttribute
      const lColArray = lCol.array as Float32Array

      for (let i = 0; i < nodeCount; i++) {
        const vel = velocities[i]
        const i3 = i * 3

        posArray[i3] += vel.x
        posArray[i3 + 1] += vel.y
        posArray[i3 + 2] += vel.z

        // Bounce within bounds
        if (Math.abs(posArray[i3] - vel.originX) > 20) vel.x *= -1
        if (Math.abs(posArray[i3 + 1] - vel.originY) > 20) vel.y *= -1
        if (Math.abs(posArray[i3 + 2] - vel.originZ) > 15) vel.z *= -1

        // Mouse Gravitational Wave
        // If mouse is near node in screen space, gently deflect it
        const ndcX = (posArray[i3] / (rangeX * 0.5))
        const ndcY = (posArray[i3 + 1] / (rangeY * 0.5))
        const distToMouse = Math.hypot(ndcX - mouse.x, ndcY - mouse.y)
        if (distToMouse < 0.4) {
          const force = (0.4 - distToMouse) * 0.6
          posArray[i3] += (ndcX - mouse.x) * force
          posArray[i3 + 1] += (ndcY - mouse.y) * force
        }

        // Connect nearby nodes with glowing energy lines
        for (let j = i + 1; j < nodeCount; j++) {
          const j3 = j * 3
          const dx = posArray[i3] - posArray[j3]
          const dy = posArray[i3 + 1] - posArray[j3 + 1]
          const dz = posArray[i3 + 2] - posArray[j3 + 2]
          const dist = Math.hypot(dx, dy, dz)

          if (dist < connectDistance) {
            const alpha = 1 - dist / connectDistance

            lPosArray[lineIndex] = posArray[i3]
            lPosArray[lineIndex + 1] = posArray[i3 + 1]
            lPosArray[lineIndex + 2] = posArray[i3 + 2]

            lPosArray[lineIndex + 3] = posArray[j3]
            lPosArray[lineIndex + 4] = posArray[j3 + 1]
            lPosArray[lineIndex + 5] = posArray[j3 + 2]

            // Color gradient along line
            const cR = 0.0 + alpha * 0.2
            const cG = 0.1 + alpha * 0.3
            const cB = 1.0

            lColArray[lineIndex] = cR
            lColArray[lineIndex + 1] = cG
            lColArray[lineIndex + 2] = cB

            lColArray[lineIndex + 3] = cR
            lColArray[lineIndex + 4] = cG
            lColArray[lineIndex + 5] = cB

            lineIndex += 6
          }
        }
      }

      posAttr.needsUpdate = true

      // Update active lines range
      linesGeometry.setDrawRange(0, lineIndex / 3)
      lPos.needsUpdate = true
      lCol.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)

      nodesGeometry.dispose()
      nodesMaterial.dispose()
      particleTexture.dispose()
      linesGeometry.dispose()
      linesMaterial.dispose()

      crystalConfigs.forEach((c) => c.geom.dispose())
      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="three-background" aria-hidden="true" />
}
