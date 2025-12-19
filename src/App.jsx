import { useState } from 'react'
import Tooltip from './components/Tooltip'
import SceneContainer from './components/SceneContainer.jsx'


export default function App() {
  const [tooltipText, setTooltipText] = useState(null);
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <Tooltip text={tooltipText} />
      <SceneContainer setTooltipText={setTooltipText} />
    </div>
  )
}