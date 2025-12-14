import { useVideoTexture } from '@react-three/drei'

export function useScreenContent() {

    const videoTextureLeft = useVideoTexture('http://localhost:5173/videos/leftScreen.mp4', {
        muted: true, loop: true, start: true, playsInline: true,
    })

    const videoTextureRight = useVideoTexture('http://localhost:5173/videos/rightScreen.mp4', {
        muted: true, loop: true, start: true, playsInline: true,
    })

    const videoTextureCenter = useVideoTexture('http://localhost:5173/videos/centerScreen.mp4', {
        muted: true, loop: true, start: true, playsInline: true,
    })

    return {
        videoTextureLeft,
        videoTextureRight,
        videoTextureCenter
    }
}