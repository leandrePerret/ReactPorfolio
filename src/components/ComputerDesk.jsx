import React, { useState } from 'react'

const Monitor = (props) => {
    const [hovered, setHovered] = useState(false)

    return (
        <group {...props}>
            <mesh position = {[0, 0 ,0]}>
                <boxGeometry args={[1.2, 0.7, 0.1]}/>
                <meshStandardMaterial color="#333" />
            </mesh>

            <mesh
                position={[0,0,0.06]}
                /* --- INTERATION LOGIC --- */
                /* HOVER START : Set state at true, change cursor */
                onPointerOver = {(e) => {
                    e.stopPropagation() // Prevent the even to pass over behind objects
                    setHovered(true)
                    document.body.style.cursor = 'pointer' // Make the cursor into the clickable one
                }}

                /* HOVER END : Set state at false, reverse cursor to basic */
                onPointerOut = {(e) => {
                    setHovered(false)
                    document.body.style.cursor = 'auto'
                }}

                /* ON CLICK : Make something happens */
                onClick = {() => {
                    console.log("Clicked Monitor : " + (props.label || "Unkown"))
                }}
            >
                    
                <planeGeometry args={[1.1, 0.6]}/>
                {/* --- Visual Feedback --- */}
                <meshStandardMaterial
                    color = "black"
                    emissive = {hovered ? "#00ff00" : "#00eeff"} // Green on hover, blue on normal
                    emissiveIntensity = {hovered ? 2 : 0.5}            // Brighter on hover
                />  
            </mesh>
        </group>
    )
}

export default function ComputerDesk() {
    return (
        <group position = {[0, -0.5, 0]}>
            {/* --- The Table --- */}
            <mesh position = {[0, 0, 0.5]}>
                <boxGeometry args={[3.5, 0.2, 1.5]} />
                <meshStandardMaterial color="#8B4513"/>
            </mesh>

            {/* --- The Monitors --- */}
            {/* --- Middle Monitor --- */}
            <Monitor 
                position = {[0, 0.6, 0.5]}
                label = "Middle"
            />

            {/* --- Left Screen --- */}
            <Monitor
                position = {[-1.3, 0.6, 0.8]}
                rotation = {[0, 0.5, 0]}
                label = "left"
            />

            {/* --- Right Screen --- */}
            <Monitor
                position = {[1.3, 0.6, 0.8]}
                rotation = {[0, -0.5, 0]}
                label = "right"
            />

            {/* --- The character --- */}
            <mesh position = {[0, 0.5, 2]}>
                <capsuleGeometry args = {[0.4, 1, 4, 8]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    )
}