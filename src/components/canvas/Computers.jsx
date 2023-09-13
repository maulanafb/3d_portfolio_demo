import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight
        position={[-20, 50, 10]}
        angle={Math.PI / 5}  // Ubah sudut dari 0.2 menjadi Math.PI / 5 (sekitar 36 derajat)
        penumbra={0.2}  // Ubah penumbra dari 2 menjadi 0.2
        intensity={1}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }}  // Ganti shadow-mapSize ke objek dengan properti width dan height
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.65}
        position={isMobile ? [0, -3, -1.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => { setIsMobile(event.matches) }
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  })
  return <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile} />
    </Suspense>
    <Preload all />
  </Canvas>
}

export default ComputersCanvas