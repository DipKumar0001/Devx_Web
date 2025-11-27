import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import JavaFundamentals from './components/JavaFundamentals'
import OOPConcepts from './components/OOPConcepts'
import ProblemsSolutions from './components/ProblemsSolutions'


const JavaLearningSite = () => (
  <main>
    <Hero />
    <JavaFundamentals />
    <OOPConcepts />
    <ProblemsSolutions />
  </main>
)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

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
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<JavaLearningSite />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
