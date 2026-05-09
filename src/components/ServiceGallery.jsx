import { useState, useEffect, useCallback, useRef } from 'react'
import { Reveal, ImgReveal } from './Reveal.jsx'
import { IconChevronLeft, IconChevronRight, IconClose } from './icons.jsx'

export function ServiceGallery({ eyebrow = '[ Galeria ]', heading, italic, subtitle, items }) {
  const [current, setCurrent] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const trackRef = useRef(null)
  const total = items.length
  const isOpen = current !== null

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const slideWidth = el.scrollWidth / total
      const idx = Math.round(el.scrollLeft / slideWidth)
      setActiveSlide(Math.max(0, Math.min(total - 1, idx)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [total])

  const scrollToSlide = (idx) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.children[idx]
    if (slide) slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }
  const goPrev = () => scrollToSlide(Math.max(0, activeSlide - 1))
  const goNext = () => scrollToSlide(Math.min(total - 1, activeSlide + 1))

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

  const headingNode = italic && heading.includes(italic)
    ? (() => {
        const [before, after] = heading.split(italic)
        return (
          <>
            {before}<span className="hero-italic">{italic}</span>{after}
          </>
        )
      })()
    : heading

  return (
    <section className="svcgal">
      <div className="shell">
        <div className="svcgal-head">
          <Reveal className="eyebrow">{eyebrow}</Reveal>
          {heading && (
            <Reveal delay={80}>
              <h2 className="svcgal-h">{headingNode}</h2>
            </Reveal>
          )}
          {subtitle && (
            <Reveal delay={160} className="body-lg svcgal-sub">{subtitle}</Reveal>
          )}
        </div>

        <div className="svcgal-track" ref={trackRef}>
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 70} className="svcgal-cell">
              <button
                type="button"
                className="svcgal-tile"
                onClick={() => setCurrent(i)}
                aria-label={`Otwórz zdjęcie: ${it.alt}`}
              >
                <ImgReveal src={it.src} alt={it.alt} />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="svcgal-controls" aria-hidden="false">
          <button
            type="button"
            className="svcgal-arrow"
            onClick={goPrev}
            disabled={activeSlide === 0}
            aria-label="Poprzednie zdjęcie"
          >
            <IconChevronLeft size={20} />
          </button>
          <div className="svcgal-dots" role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`svcgal-dot ${i === activeSlide ? 'is-active' : ''}`}
                onClick={() => scrollToSlide(i)}
                aria-label={`Zdjęcie ${i + 1} z ${total}`}
                aria-selected={i === activeSlide}
              />
            ))}
          </div>
          <button
            type="button"
            className="svcgal-arrow"
            onClick={goNext}
            disabled={activeSlide === total - 1}
            aria-label="Następne zdjęcie"
          >
            <IconChevronRight size={20} />
          </button>
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
        .svcgal { padding: 80px 0 70px; background: var(--cream); }
        .svcgal-head { text-align: center; max-width: 720px; margin: 0 auto 40px; }
        .svcgal-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 14px 0 16px;
          color: var(--ink);
        }
        .svcgal-sub { color: var(--ink-soft); }

        /* DESKTOP: 5-column grid, equal-height tiles */
        .svcgal-track {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }
        .svcgal-cell {
          aspect-ratio: 4 / 5;
          border: 1px solid var(--line-soft);
          border-radius: var(--r-md);
          overflow: hidden;
          box-shadow: 0 4px 18px -14px rgba(168,128,98,0.35);
        }
        .svcgal-cell .img-reveal { width: 100%; height: 100%; }
        .svcgal-tile {
          all: unset;
          display: block;
          width: 100%;
          height: 100%;
          cursor: zoom-in;
        }
        .svcgal-tile:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }
        .svcgal-tile .img-reveal img { transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .svcgal-tile:hover .img-reveal img { transform: scale(1.05); }

        /* TABLET: 3 columns */
        @media (max-width: 1100px) {
          .svcgal-track { grid-template-columns: repeat(3, 1fr); }
        }

        /* CAROUSEL CONTROLS — mobile only */
        .svcgal-controls { display: none; }
        @media (max-width: 720px) {
          .svcgal-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            margin-top: 18px;
          }
        }
        .svcgal-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bone);
          color: var(--brand-deep);
          border: 1.5px solid var(--line-soft);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, opacity 0.2s;
          flex: none;
        }
        .svcgal-arrow:hover:not(:disabled) {
          background: var(--brand-deep);
          color: var(--cream);
          border-color: var(--brand-deep);
        }
        .svcgal-arrow:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .svcgal-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .svcgal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--line-soft);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, width 0.2s;
        }
        .svcgal-dot.is-active {
          background: var(--brand-deep);
          width: 22px;
          border-radius: 4px;
        }

        /* MOBILE: snap-scroll carousel */
        @media (max-width: 720px) {
          .svcgal { padding: 60px 0 50px; }
          .svcgal-track {
            display: flex;
            grid-template-columns: none;
            gap: 12px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-padding-left: 20px;
            padding: 4px 20px 16px;
            margin: 0 -20px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .svcgal-track::-webkit-scrollbar { display: none; }
          .svcgal-cell {
            flex: 0 0 78%;
            aspect-ratio: 4 / 5;
            scroll-snap-align: center;
          }
          .svcgal-cell:first-child { scroll-snap-align: start; }
        }

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
        .lb-close:hover { background: var(--brand); border-color: var(--brand); }

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
        .lb-nav:hover { background: var(--brand); border-color: var(--brand); }
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
