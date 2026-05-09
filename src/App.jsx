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

function ScrollToTop() {
  const [location] = useLocation()
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location])
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
      <ScrollToTop />
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
