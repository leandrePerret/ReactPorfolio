import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import ComputerDesk from './components/ComputerDesk'

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>

        <PerspectiveCamera 
          makeDefault 
          position={[0, 0.6, 4.5]}
          rotation={[0,0,0]}
          fov={50} 
          near={0.1} 
          far={100}
        />
        
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <ComputerDesk />

      </Canvas>
    </div>
  )
}