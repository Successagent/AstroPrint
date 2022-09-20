import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home, About, Services, Faq, Contact } from './pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}  />
      <Route path="services" element={<Services />}  />
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default App
