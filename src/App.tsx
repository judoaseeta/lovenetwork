import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './intro'
import Network from './network'
function App() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="network" element={<Network />} />
        </Routes>
    )
}

export default App
