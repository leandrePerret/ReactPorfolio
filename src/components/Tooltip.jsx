import { useEffect, useRef } from 'react';

export default function Tooltip({ text }) {
    const ref = useRef()

    useEffect(() => {
        const followCursor = (e) => {
            if (ref.current) {
                ref.current.style.transform = `translate(${e.clientX + 15}px, ${e.clientY + 15}px)`
            }
        }

    window.addEventListener('mousemove', followCursor)
    return () =>  window.removeEventListener('mousemove', followCursor)},[])

    if (!text) return null;

    return (
        <div
            ref={ref}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                zIndex: 1000,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            }}
        >
            {text}
        </div>
    )
}

