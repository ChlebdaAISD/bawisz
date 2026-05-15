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
import { Reveal } from '../components/Reveal.jsx'
import { HOME_FAQ, HOME_META } from '../data/home.js'
import { updateHead } from '../lib/head.js'

export default function Home({ onBookBirthday }) {
  useEffect(() => {
    updateHead(HOME_META)
  }, [])

  return (
    <>
      <Hero onBookBirthday={onBookBirthday} />
      <About />
      <Offer />
      <Gallery />
      <Pricing />
      <Menu />
      <Testimonials />

      {/* FAQ — najczęstsze pytania o bawialnię w Nowym Targu */}
      <section className="svc-faq">
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ FAQ ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Najczęstsze <span className="hero-italic">pytania.</span>
              </h2>
            </Reveal>
          </div>

          <div className="svc-faq-list">
            {HOME_FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 50} className="svc-faq-item">
                <h3 className="svc-faq-q">{item.q}</h3>
                <p className="svc-faq-a">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Hours />
      <Contact />
    </>
  )
}
