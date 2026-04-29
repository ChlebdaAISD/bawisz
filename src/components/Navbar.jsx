import { useEffect, useState } from 'react'
import { IconMenu, IconClose } from './icons.jsx'

const NAV_LINKS = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Co u nas', href: '#oferta' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Kawiarnia', href: '#menu' },
  { label: 'Kontakt', href: '#kontakt' },
]

function useOpenStatus() {
  const compute = () => {
    const now = new Date()
    const day = now.getDay()
    const h = now.getHours() + now.getMinutes() / 60
    const close = (day === 0 || day === 6) ? 20 : 19
    return { open: h >= 10 && h < close, close }
  }
  const [s, setS] = useState(compute)
  useEffect(() => {
    const id = setInterval(() => setS(compute()), 60000)
    return () => clearInterval(id)
  }, [])
  return s
}

export function Navbar({ onBookBirthday }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const status = useOpenStatus()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const v = mobileOpen ? 'hidden' : ''
    document.body.style.overflow = v
    document.documentElement.style.overflow = v
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <div className="nav-rail">
        <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Główna nawigacja">
          <a href="#" className="nav-brand" aria-label="BAWISZ — strona główna">
            <img src="/assets/logo_small.png" alt="" />
            <div className="nav-brand-text">
              <div className="nav-brand-name">BAWISZ</div>
              <div className="nav-brand-sub">Bawialnia · Kawiarnia</div>
            </div>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="status-pill" title={status.open ? `Otwarte do ${status.close}:00` : 'Aktualnie zamknięte'}>
              <span className={`status-dot ${status.open ? 'on' : 'off'}`} />
              <span className="status-text">{status.open ? `Otwarte · do ${status.close}:00` : 'Zamknięte'}</span>
            </div>
            <button className="nav-burger" aria-label="Menu" onClick={() => setMobileOpen(true)}>
              <IconMenu size={22} />
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-top">
            <a href="#" className="mobile-menu-brand" onClick={() => setMobileOpen(false)} aria-label="BAWISZ — strona główna">
              <img src="/assets/logo_small.png" alt="" />
            </a>
            <button className="nav-burger" aria-label="Zamknij" onClick={() => setMobileOpen(false)}>
              <IconClose size={22} />
            </button>
          </div>
          <ul className="mobile-links">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href} style={{ animationDelay: `${i * 60}ms` }}>
                <a href={l.href} onClick={() => setMobileOpen(false)} className="display">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-cta">
            <button className="btn btn-pop" onClick={() => { setMobileOpen(false); onBookBirthday() }}>
              Zarezerwuj urodziny
            </button>
            <a href="tel:+48693766049" className="btn btn-ghost">+48 693 766 049</a>
          </div>
        </div>
      )}

      <style>{`
        .nav-rail {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          padding: 16px 28px;
          pointer-events: none;
        }
        @media (max-width: 720px) { .nav-rail { padding: 8px 10px; } }

        .nav {
          pointer-events: auto;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 12px 18px 12px 14px;
          background: rgba(246, 241, 231, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-pill);
          transition: padding 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .nav.is-scrolled {
          background: rgba(251, 247, 238, 0.92);
          box-shadow: 0 12px 30px -16px rgba(27,26,23,0.18);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-right: 8px;
          flex: none;
        }
        .nav-brand img { height: 44px; width: auto; }
        .nav-brand-text { line-height: 1; white-space: nowrap; }
        .nav-brand-name {
          font-family: var(--font-display);
          font-size: 22px;
          color: var(--ink);
          letter-spacing: 0.01em;
        }
        .nav-brand-sub {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin-top: 4px;
        }

        .nav-links {
          list-style: none;
          margin: 0 auto;
          padding: 0;
          display: flex;
          gap: 22px;
          justify-content: center;
          white-space: nowrap;
        }
        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink-soft);
          white-space: nowrap;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -4px;
          height: 1.5px;
          background: var(--brand-deep);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover { color: var(--ink); }
        .nav-link:hover::after { transform: scaleX(1); }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: none;
          margin-left: auto;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px 6px 10px;
          border: 1px solid var(--line-soft);
          background: var(--bone);
          border-radius: var(--r-pill);
          font-size: 12px;
          font-weight: 600;
          color: var(--ink);
          white-space: nowrap;
        }
        .status-dot {
          width: 8px; height: 8px; border-radius: 50%;
          flex: none;
        }
        .status-dot.on {
          background: #4DAA57;
          box-shadow: 0 0 0 0 rgba(77, 170, 87, 0.7);
          animation: pulse 2s infinite;
        }
        .status-dot.off { background: var(--ink-faint); }

        .nav-burger {
          display: none;
          width: 48px; height: 48px;
          border-radius: 50%;
          background: var(--brand-deep);
          color: var(--cream);
          border: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (max-width: 940px) {
          .nav-links { display: none; }
          .nav-burger { display: inline-flex; }
          .nav-brand-text { display: none; }
          .nav-brand img { height: 56px; }
          .nav { gap: 8px; padding: 6px 8px 6px 8px; }
        }
        @media (max-width: 420px) {
          .status-pill { padding: 6px 10px 6px 8px; font-size: 11px; gap: 6px; }
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 70;
          background: var(--cream);
          /* Match navbar offset exactly so logo + X stay in place when menu opens.
             = nav-rail padding (8/10) + nav border (1.5) + nav padding (6/8) */
          padding: 15.5px 19.5px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .mobile-menu-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mobile-menu-brand { display: inline-flex; align-items: center; }
        .mobile-menu-top img { height: 56px; }
        .mobile-links {
          flex: 1;
          list-style: none;
          padding: 0;
          margin: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          justify-content: center;
        }
        .mobile-links li {
          opacity: 0;
          animation: fade-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .mobile-links a {
          display: block;
          padding: 12px 4px;
          font-size: 44px;
          color: var(--ink);
          border-bottom: 1.5px dashed var(--line-soft);
        }
        .mobile-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding-bottom: 20px;
        }
      `}</style>
    </>
  )
}
