import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Problems from './components/Problems'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import WorkingWithUs from './components/WorkingWithUs'
import Process from './components/Process'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useScrollMotion } from './hooks/useScrollMotion'

export default function App() {
  const page = useRef<HTMLDivElement>(null)
  useScrollMotion(page)

  return (
    <div className="page" ref={page}>
      <Header />
      <Hero />
      <main>
        <Marquee />
        <Problems />
        <Services />
        <Gallery />
        <About />
        <WorkingWithUs />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
