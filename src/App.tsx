import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { ScrollProgressBar } from './components/InteractiveWidgets'
import { ThreeBackground } from './components/ThreeBackground'
import { CursorGlow } from './components/CursorGlow'
import { ClickRipple } from './components/ClickRipple'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <ScrollToTop />
        <ThreeBackground />
        <CursorGlow />
        <ClickRipple />
        <ScrollProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
