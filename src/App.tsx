import Hero from './components/Hero'
import Problems from './components/Problems'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollProgressBar, FloatingWhatsApp } from './components/InteractiveWidgets'
import { InteractiveStarfield } from './components/InteractiveStarfield'
import { CursorGlow } from './components/CursorGlow'
import { ClickRipple } from './components/ClickRipple'

export default function App() {
  return (
    <div className="page">
      <InteractiveStarfield />
      <CursorGlow />
      <ClickRipple />
      <ScrollProgressBar />
      <Hero />
      <main>
        <Problems />
        <Services />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
