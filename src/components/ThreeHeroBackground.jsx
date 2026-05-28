import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial, Preload } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function mulberry32(seed) {
  let t = seed >>> 0
  return function next() {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

function TorusKnot() {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.12
    ref.current.rotation.y += delta * 0.16
  })

  return (
    <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.2}>
      <mesh ref={ref} position={[1.2, 0.2, 0]}>
        <torusKnotGeometry args={[0.65, 0.18, 220, 28]} />
        <meshPhysicalMaterial
          color="#9aa5ff"
          roughness={0.22}
          metalness={0.42}
          transmission={0.55}
          thickness={0.9}
          ior={1.25}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function Starfield({ count = 1200 }) {
  const positions = useMemo(() => {
    const rng = mulberry32(1337 + count)
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.2 + rng() * 3.8
      const theta = rng() * Math.PI * 2
      const y = (rng() - 0.5) * 3.2
      arr[i * 3 + 0] = Math.cos(theta) * r
      arr[i * 3 + 1] = y
      arr[i * 3 + 2] = Math.sin(theta) * r
    }
    return arr
  }, [count])

  return (
    <Points positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#c7d2fe"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  )
}

export function ThreeHeroBackground({ quality = 'high' }) {
  const isLow = quality === 'low'

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Canvas
        dpr={isLow ? 1 : [1, 1.75]}
        gl={{
          antialias: !isLow,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 0.2, 4.2], fov: 48 }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 3]} intensity={1.0} />
        <pointLight position={[-4, -2, 2]} intensity={0.7} color="#22d3ee" />
        <pointLight position={[3, -2, 1]} intensity={0.6} color="#ec4899" />

        <Starfield count={isLow ? 650 : 1200} />
        <TorusKnot />

        <Preload all />
      </Canvas>
    </div>
  )
}

