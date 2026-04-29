import { useState, useEffect, useCallback } from 'react'
import { Reveal, ImgReveal } from './Reveal.jsx'
import { IconInstagram, IconChevronLeft, IconChevronRight, IconClose } from './icons.jsx'
import { Decoration } from './Decoration.jsx'

export function Gallery() {
  const items = [
    { src: '/assets/photo4.jpg', span: 'big', alt: 'Wnętrze bawialni — drewniana konstrukcja z piętrami i zjeżdżalnią' },
    { src: '/assets/photo1.jpg', span: 'tall', alt: 'Ścianka wspinaczkowa i miś' },
    { src: '/assets/photo3.jpg', span: 'wide', alt: 'Dziecko na drewnianym traktorku' },
    { src: '/assets/photo5.jpg', span: 'tall', alt: 'Maluch w drewnianym tunelu' },
    { src: '/assets/photo2.jpg', span: 'wide', alt: 'Latte i ciasto pistacjowe' },
  ]

  const [current, setCurrent] = useState(null)
  const total = items.length
  const isOpen = current !== null

  const close = () => setCurrent(null)
  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen, prev, next])

  useEffect(() => {
    if (!isOpen) return
    let startX = 0
    const onTouchStart = (e) => { startX = e.changedTouches[0].screenX }
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].screenX - startX
      if (dx > 40) prev()
      if (dx < -40) next()
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [isOpen, prev, next])

  return (
    <section id="galeria" className="gal">
      <Decoration
        type="rainbow"
        size={170}
        rotate={8}
        opacity={0.4}
        style={{ right: '4%', top: '90px' }}
      />
      <div className="shell">
        <div className="gal-head">
          <Reveal className="eyebrow">[ Galeria ]</Reveal>
          <Reveal delay={80}>
            <h2 className="display gal-h">
              Zajrzyj <span className="hero-italic">do środka.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg gal-sub">
            200 m² drewna, sklejki i światła. Bez krzykliwego plastiku, bez ekranów.
          </Reveal>
        </div>

        <div className="gal-grid">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 90} className={`gal-cell gal-${it.span}`}>
              <button
                type="button"
                className="gal-tile"
                onClick={() => setCurrent(i)}
                aria-label={`Otwórz zdjęcie: ${it.alt}`}
              >
                <ImgReveal src={it.src} alt={it.alt} />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="gal-foot">
          <a href="https://www.instagram.com/bawisz_bawialnia/" target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost gal-cta">
            <IconInstagram size={18} /> @bawisz_bawialnia
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="lb" role="dialog" aria-modal="true" onClick={close}>
          <button className="lb-close" aria-label="Zamknij" onClick={close}>
            <IconClose size={22} />
          </button>

          <button
            className="lb-nav lb-prev"
            aria-label="Poprzednie"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <IconChevronLeft size={26} />
          </button>

          <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
            <img
              key={current}
              src={items[current].src}
              alt={items[current].alt}
              className="lb-img"
            />
          </div>

          <button
            className="lb-nav lb-next"
            aria-label="Następne"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <IconChevronRight size={26} />
          </button>

          <div className="lb-counter">{current + 1} / {total}</div>
        </div>
      )}

      <style>{`
        .gal { padding: 120px 0 100px; background: var(--paper); border-top: 1.5px solid var(--line); border-bottom: 1.5px solid var(--line); }
        .gal-head { text-align: center; max-width: 720px; margin: 0 auto 56px; }
        .gal-h { font-size: clamp(40px, 6vw, 88px); margin: 16px 0 20px; color: var(--ink); }

        .gal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 14px;
        }
        .gal-cell {
          position: relative;
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
          overflow: hidden;
        }
        .gal-cell .img-reveal { width: 100%; height: 100%; }
        .gal-tile {
          all: unset;
          display: block;
          width: 100%;
          height: 100%;
          cursor: zoom-in;
          position: relative;
        }
        .gal-tile:focus-visible { outline: 2px solid var(--terracotta); outline-offset: 2px; }
        .gal-tile .img-reveal img { transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .gal-tile:hover .img-reveal img { transform: scale(1.04); }

        .gal-big { grid-column: span 2; grid-row: span 2; }
        .gal-tall { grid-column: span 1; grid-row: span 2; }
        .gal-wide { grid-column: span 2; grid-row: span 1; }

        @media (max-width: 820px) {
          .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
          .gal-big { grid-column: span 2; grid-row: span 2; }
          .gal-tall { grid-column: span 1; grid-row: span 1; }
          .gal-wide { grid-column: span 2; grid-row: span 1; }
        }

        .gal-foot { text-align: center; margin-top: 40px; }
        .gal-cta { padding: 14px 24px; }

        /* LIGHTBOX */
        .lb {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(27, 26, 23, 0.94);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: lbFade 0.18s ease-out;
        }
        @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }

        .lb-stage {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          overflow: hidden;
        }
        .lb-img {
          max-width: 100%;
          max-height: 88vh;
          object-fit: contain;
          border-radius: var(--r-md);
          box-shadow: 0 30px 80px -20px rgba(0,0,0,0.6);
          animation: lbImg 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @keyframes lbImg { from { opacity: 0; transform: scale(0.98) } to { opacity: 1; transform: scale(1) } }

        .lb-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 253, 248, 0.12);
          color: var(--bone);
          border: 1.5px solid rgba(255, 253, 248, 0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .lb-close:hover { background: var(--terracotta); border-color: var(--terracotta); }

        .lb-nav {
          flex: none;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 253, 248, 0.1);
          color: var(--bone);
          border: 1.5px solid rgba(255, 253, 248, 0.2);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .lb-nav:hover { background: var(--terracotta); border-color: var(--terracotta); }
        .lb-prev:hover { transform: translateX(-2px); }
        .lb-next:hover { transform: translateX(2px); }

        .lb-counter {
          position: absolute;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 253, 248, 0.7);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.18em;
        }

        @media (max-width: 720px) {
          .lb { padding: 12px; }
          .lb-stage { padding: 0 8px; }
          .lb-img { max-height: 78vh; }
          .lb-nav { width: 44px; height: 44px; }
          .lb-close { top: 12px; right: 12px; }
        }
      `}</style>
    </section>
  )
}
