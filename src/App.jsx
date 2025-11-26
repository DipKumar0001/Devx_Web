import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import AIHub from './components/AIHub'

const Portfolio = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
)

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ai-hub" element={<AIHub />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
