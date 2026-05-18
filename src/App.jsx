import { useEffect, useState } from 'react'
import { Router, Switch, Route, useLocation } from 'wouter'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { BirthdayModal } from './components/BirthdayModal.jsx'
import Home from './pages/Home.jsx'
import Urodziny from './pages/Urodziny.jsx'
import Kawiarnia from './pages/Kawiarnia.jsx'
import Warsztaty from './pages/Warsztaty.jsx'
import ONas from './pages/ONas.jsx'
import OfertaGrupowa from './pages/OfertaGrupowa.jsx'
import Kontakt from './pages/Kontakt.jsx'
import PolitykaPrywatnosci from './pages/PolitykaPrywatnosci.jsx'

const COZY = {
  '--cream':       '#FFFFFF',
  '--cream-deep':  '#F4EBDB',
  '--paper':       '#FDF9F0',
  '--bone':        '#FFFFFF',
  '--sand':        '#EAD8C4',
  '--sand-deep':   '#D0B192',

  '--brand':       '#A98062',
  '--brand-deep':  '#776258',
  '--brand-soft':  '#D0B192',

  '--sage':        '#EAD8C4',
  '--sage-deep':   '#D0B192',

  '--rose':        '#C4D8AE',
  '--rose-deep':   '#9DB585',
  '--rose-soft':   '#E0EBD0',

  '--terracotta':      '#C4D8AE',
  '--terracotta-deep': '#9DB585',
  '--apricot':         '#EAD8C4',

  '--ink':       '#5C4F47',
  '--ink-soft':  '#776258',
  '--ink-mute':  '#9E8C7E',
  '--ink-faint': '#C7B5A2',
  '--line':      'rgba(168,128,98,0.32)',
  '--line-soft': 'rgba(168,128,98,0.16)',
}

const SOFT = { '--r-sm': '14px', '--r-md': '22px', '--r-lg': '32px', '--r-xl': '48px', '--r-pill': '999px' }

function ScrollToHashOrTop() {
  const [location] = useLocation()
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    const id = hash.slice(1)
    let attempts = 0
    let timer
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (attempts < 12) {
        attempts++
        timer = setTimeout(tryScroll, 50)
      }
    }
    timer = setTimeout(tryScroll, 50)
    return () => clearTimeout(timer)
  }, [location])
  return null
}

function AnchorLinkHandler() {
  const [location, setLocation] = useLocation()
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest && e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || !href.startsWith('/#')) return
      const id = href.slice(2)
      if (!id) return
      e.preventDefault()
      const scroll = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      if (location === '/') {
        scroll()
        window.history.replaceState(null, '', `/#${id}`)
      } else {
        setLocation('/')
        window.history.replaceState(null, '', `/#${id}`)
        setTimeout(scroll, 100)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [location, setLocation])
  return null
}

export default function App({ ssrPath }) {
  const [bookOpen, setBookOpen] = useState(false)
  const openBook = () => setBookOpen(true)

  useEffect(() => {
    const root = document.documentElement
    Object.entries(COZY).forEach(([k, v]) => root.style.setProperty(k, v))
    Object.entries(SOFT).forEach(([k, v]) => root.style.setProperty(k, v))
  }, [])

  return (
    <Router ssrPath={ssrPath}>
      <ScrollToHashOrTop />
      <AnchorLinkHandler />
      <Navbar onBookBirthday={openBook} />
      <main>
        <Switch>
          <Route path="/" component={() => <Home onBookBirthday={openBook} />} />
          <Route path="/urodziny" component={() => <Urodziny onBookBirthday={openBook} />} />
          <Route path="/urodziny/" component={() => <Urodziny onBookBirthday={openBook} />} />
          <Route path="/kawiarnia" component={() => <Kawiarnia onBookBirthday={openBook} />} />
          <Route path="/kawiarnia/" component={() => <Kawiarnia onBookBirthday={openBook} />} />
          <Route path="/warsztaty" component={() => <Warsztaty />} />
          <Route path="/warsztaty/" component={() => <Warsztaty />} />
          <Route path="/o-nas" component={() => <ONas onBookBirthday={openBook} />} />
          <Route path="/o-nas/" component={() => <ONas onBookBirthday={openBook} />} />
          <Route path="/oferta-grupowa" component={() => <OfertaGrupowa />} />
          <Route path="/oferta-grupowa/" component={() => <OfertaGrupowa />} />
          <Route path="/kontakt" component={() => <Kontakt onBookBirthday={openBook} />} />
          <Route path="/kontakt/" component={() => <Kontakt onBookBirthday={openBook} />} />
          <Route path="/polityka-prywatnosci" component={() => <PolitykaPrywatnosci />} />
          <Route path="/polityka-prywatnosci/" component={() => <PolitykaPrywatnosci />} />
          <Route>
            <Home onBookBirthday={openBook} />
          </Route>
        </Switch>
      </main>
      <Footer onBookBirthday={openBook} />
      <BirthdayModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </Router>
  )
}
