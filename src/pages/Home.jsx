import { useEffect } from 'react'
import { Hero } from '../components/Hero.jsx'
import { About } from '../components/About.jsx'
import { Offer } from '../components/Offer.jsx'
import { Gallery } from '../components/Gallery.jsx'
import { Pricing } from '../components/Pricing.jsx'
import { Menu } from '../components/Menu.jsx'
import { Testimonials } from '../components/Testimonials.jsx'
import { Hours } from '../components/Hours.jsx'
import { Contact } from '../components/Contact.jsx'

const META = {
  title: 'BAWISZ — Bawialnia Montessori i Kawiarnia w Nowym Targu',
  description: 'Bawialnia Montessori dla dzieci 0-10 lat w Nowym Targu. Drewniana architektura, naturalne zabawki, kawiarnia dla rodziców, urodziny. Ocena 4.9/5 w Google.',
  canonical: 'https://bawialniabawisz.pl/',
}

export default function Home({ onBookBirthday }) {
  useEffect(() => {
    document.title = META.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', META.description)
  }, [])

  return (
    <>
      <Hero onBookBirthday={onBookBirthday} />
      <About />
      <Offer />
      <Gallery />
      <Pricing onBookBirthday={onBookBirthday} />
      <Menu />
      <Testimonials />
      <Hours />
      <Contact />
    </>
  )
}
