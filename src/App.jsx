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

const PASTEL = {
  '--cream':       '#F6F1E7',
  '--cream-deep':  '#EFE7D6',
  '--paper':       '#FBF7EE',
  '--bone':        '#FFFDF8',

  '--brand':       '#8B6F47',
  '--brand-deep':  '#5C4830',

  '--sage':        '#B8D0A0',
  '--sage-deep':   '#8FA67D',
  '--forest':      '#5C4830',
  '--forest-deep': '#3A2E1F',

  '--terracotta':      '#E89B5C',
  '--terracotta-deep': '#C97A42',
  '--apricot':         '#F2B88A',

  '--pastel-rose':   '#F4B6B6',
  '--pastel-butter': '#F5D970',
  '--pastel-peach':  '#F2B88A',
  '--pastel-lilac':  '#C9B8DD',

  '--ink':       '#3A2E1F',
  '--ink-soft':  '#5C4F3F',
  '--ink-mute':  '#8A7E6B',
  '--ink-faint': '#B5A993',
  '--line':      '#3A2E1F',
  '--line-soft': 'rgba(58,46,31,0.14)',
}

const SHARP = { '--r-sm': '2px', '--r-md': '4px', '--r-lg': '6px', '--r-xl': '10px', '--r-pill': '6px' }

export default function App() {
  const [bookOpen, setBookOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    Object.entries(PASTEL).forEach(([k, v]) => root.style.setProperty(k, v))
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
