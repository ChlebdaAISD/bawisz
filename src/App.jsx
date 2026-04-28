import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Offer } from './components/Offer.jsx'
import { Gallery } from './components/Gallery.jsx'
import { Pricing } from './components/Pricing.jsx'
import { Menu } from './components/Menu.jsx'
import { Testimonials } from './components/Testimonials.jsx'
import { Hours } from './components/Hours.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { BirthdayModal } from './components/BirthdayModal.jsx'

const FOREST = {
  '--cream':       '#F4EFE3',
  '--cream-deep':  '#E8E0CE',
  '--paper':       '#F8F3E7',
  '--bone':        '#FFFDF6',
  '--sage':        '#A8BD96',
  '--sage-deep':   '#7E9A6C',
  '--forest':      '#284428',
  '--forest-deep': '#15281A',
  '--terracotta':      '#C9633F',
  '--terracotta-deep': '#9A4628',
  '--ink':       '#15281A',
  '--ink-soft':  '#2D3F2E',
  '--ink-mute':  '#5C6B58',
  '--ink-faint': '#9AA396',
  '--line':      '#15281A',
  '--line-soft': 'rgba(21,40,26,0.14)',
}

const SHARP = { '--r-sm': '2px', '--r-md': '4px', '--r-lg': '6px', '--r-xl': '10px', '--r-pill': '6px' }

export default function App() {
  const [bookOpen, setBookOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    Object.entries(FOREST).forEach(([k, v]) => root.style.setProperty(k, v))
    Object.entries(SHARP).forEach(([k, v]) => root.style.setProperty(k, v))
  }, [])

  return (
    <>
      <Navbar onBookBirthday={() => setBookOpen(true)} />
      <main>
        <Hero onBookBirthday={() => setBookOpen(true)} />
        <About />
        <Offer />
        <Gallery />
        <Pricing onBookBirthday={() => setBookOpen(true)} />
        <Menu />
        <Testimonials />
        <Hours />
        <Contact />
      </main>
      <Footer onBookBirthday={() => setBookOpen(true)} />
      <BirthdayModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
