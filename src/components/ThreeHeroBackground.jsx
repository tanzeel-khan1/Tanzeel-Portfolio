import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function mulberry32(seed) {
  let t = seed >>> 0
  return function () {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | t)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

function SimpleKnot() {
  const ref = useRef()

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.15
  })

  return (
    <mesh ref={ref}>
      {/* 🔥 reduced geometry drastically */}
      <torusKnotGeometry args={[0.7, 0.2, 64, 8]} />
      {/* 🔥 lightweight material */}
      <meshStandardMaterial color="#9aa5ff" roughness={0.5} metalness={0.2} />
    </mesh>
  )
}

function Stars({ count = 500 }) {
  const positions = useMemo(() => {
    const rng = mulberry32(1337)
    const arr = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const r = 3 + rng() * 3
      const theta = rng() * Math.PI * 2
      const y = (rng() - 0.5) * 2.5

      arr[i * 3] = Math.cos(theta) * r
      arr[i * 3 + 1] = y
      arr[i * 3 + 2] = Math.sin(theta) * r
    }

    return arr
  }, [count])

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        size={0.01}
        color="#c7d2fe"
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </Points>
  )
}

export function ThreeHeroBackground({ quality = 'high' }) {
  const low = quality === 'low'

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={low ? 1 : 1.25}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 4] }}
      >
        <ambientLight intensity={0.7} />

        <SimpleKnot />

        <Stars count={low ? 300 : 500} />
      </Canvas>
    </div>
  )
}