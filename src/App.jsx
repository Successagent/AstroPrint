import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home, About, Services } from './pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
    </Routes>
  )
}

export default App
