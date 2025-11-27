import React from 'react'

const Monitor = (props) => {
    return (
        <group {...props}>
            <mesh position ={[0, 0, 0]}>
                <boxGeometry args={[0, 0, 0]}/>
                <meshStandardMaterial color="#333" />
            </mesh>

            <mesh position={[0, 0, 0.06]}>
                <planeGeometry args={[1.1, 0.6]} />
                <meshStandardMaterial color="black" emissive="#00eeff" emissiveIntensity={0.5}/>
            </mesh>

        </group>
    )
}

export default function ComputerDesk() {
    return (
        <group position={[0, -0.5, 0]}>
            {/* --- The Table --- */}
            <mesh position={[0, 0, 0.5]}>
                <boxGeometry args={[3.5, 0.2, 1.5]} />
                <meshStandardMaterial color="#8B4513"/>
            </mesh>

            {/* --- The Monitors --- */}
            {/* --- Center Monitor --- */}
            <Monitor position={[0, 0.6, 0.5]} />

            {/* --- Left Screen --- */}
            <Monitor
                position={[-1.3, 0.6, 0.8]}
                rotation={[0, 0.5, 0]}
            />

            {/* --- Right Screen --- */}
            <Monitor
                position={[1.3, 0.6, 0.8]}
                rotation={[0, -0.5, 0]}
            />

            {/* --- The character --- */}
            <mesh position={[0, 0.5, 2]}>
                <capsuleGeometry args={[0.4, 1, 4, 8]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    )
}