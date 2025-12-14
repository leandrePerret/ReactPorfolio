import { Canvas } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import Desk from './components/Desk'

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>

        <PerspectiveCamera 
          makeDefault 
          position={[0, 1.1, 1.1]}
          rotation={[-0.2,0,0]}
          fov={45} 
          near={0.1} 
          far={100}
        />
        
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Desk />
        </Suspense>

      </Canvas>
    </div>
  )
}