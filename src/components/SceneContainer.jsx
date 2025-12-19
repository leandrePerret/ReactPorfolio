import { Canvas } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import { Suspense, memo } from 'react'
import Desk from './Desk'
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing'

const SceneContainer = memo(function SceneContainer({ setTooltipText }) {
    return (
        <Canvas>
            <PerspectiveCamera
                makeDefault
                position={[0, 1.1, 1.1]}
                rotation={[-0.2, 0, 0]}
                fov={45}
                near={0.1}
                far={100}
            />
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline
                    blur
                    visibleEdgeColor="white"
                    edgeStrength={100}
                    width={1000}
                    />
                </EffectComposer>
                <Suspense fallback={<Html center>Loading...</Html>}>
                    <Desk setTooltipText={setTooltipText} />
                </Suspense>
            </Selection>
        </Canvas>
    )
});

export default SceneContainer;