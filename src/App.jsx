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

const COZY = {
  '--cream':       '#FBF7EE',
  '--cream-deep':  '#F4EBDB',
  '--paper':       '#FAF3EA',
  '--bone':        '#FFFDF8',
  '--sand':        '#EAD8C4',
  '--sand-deep':   '#D0B192',

  '--brand':       '#A98062',
  '--brand-deep':  '#776258',
  '--brand-soft':  '#D0B192',

  '--sage':        '#EAD8C4',
  '--sage-deep':   '#D0B192',

  '--rose':        '#E8B4B8',
  '--rose-deep':   '#C98F94',
  '--rose-soft':   '#F2D3D5',

  '--terracotta':      '#E8B4B8',
  '--terracotta-deep': '#C98F94',
  '--apricot':         '#EAD8C4',

  '--ink':       '#5C4F47',
  '--ink-soft':  '#776258',
  '--ink-mute':  '#9E8C7E',
  '--ink-faint': '#C7B5A2',
  '--line':      'rgba(168,128,98,0.32)',
  '--line-soft': 'rgba(168,128,98,0.16)',
}

const SOFT = { '--r-sm': '14px', '--r-md': '22px', '--r-lg': '32px', '--r-xl': '48px', '--r-pill': '999px' }

export default function App() {
  const [bookOpen, setBookOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    Object.entries(COZY).forEach(([k, v]) => root.style.setProperty(k, v))
    Object.entries(SOFT).forEach(([k, v]) => root.style.setProperty(k, v))
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
