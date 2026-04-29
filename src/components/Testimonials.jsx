import { useRef, useState, useEffect } from 'react'
import { Reveal } from './Reveal.jsx'
import { IconStar, IconQuote, IconChevronLeft, IconChevronRight } from './icons.jsx'
import { Decoration } from './Decoration.jsx'

export function Testimonials() {
  const reviews = [
    {
      name: 'Katarzyna Domańska',
      role: 'opinia z Google',
      text: 'BAWISZ to najlepsza bawialnia, w jakiej byłam z moją 3-latką. Spędziłam tu cały dzień: ja siedząc w kawiarni z pysznym ciastem i kawą, mając całą bawialnię w zasięgu wzroku, a córka bawiąc się w pięknym, dopracowanym w każdym detalu placu zabaw.',
      stars: 5,
      tone: 'cream',
    },
    {
      name: 'Anita Słodyczka',
      role: 'opinia z Google',
      text: 'Świetne miejsce! Wszystko drewniane łącznie z zabawkami — to ogromny plus. Córka bawiła się tak dobrze, że nie chciała wyjść. Czystość, przepiękne wnętrza, pyszna kawa, herbata i ciasto. Polecam gorąco!',
      stars: 5,
      tone: 'sand',
    },
    {
      name: 'Karolina Biela',
      role: 'opinia z Google',
      text: 'Gorąco polecam dla dziecka. Moja 9-miesięczna córka była zachwycona zabawkami, bezpiecznymi i różnorodnymi. Dziecko może się pobawić, a rodzic odpocząć przy pysznej kawie, nie spuszczając go z oczu. Obsługa miła i pomocna.',
      stars: 5,
      tone: 'cream',
    },
    {
      name: 'Adrian T.',
      role: 'opinia z Google',
      text: 'Super miejsce dla dzieci! Sala zabaw to strzał w 10 — świetnie zorganizowana i naprawdę fajna przestrzeń dla najmłodszych. Dodatkowo monoporcje są przepyszne. Bardzo polecam.',
      stars: 5,
      tone: 'sand',
    },
    {
      name: 'Beata Waras',
      role: 'opinia z Google',
      text: 'Super miejsce dla maluszka — dużo pięknych i interesujących zabawek, pyszna kawa. Dodatkowa gwiazdka za wyposażenie toalety dla bobasów: pieluszki, mokre chusteczki, nocnik, nakładka. Polecam!',
      stars: 5,
      tone: 'cream',
    },
  ]

  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [perView, setPerView] = useState(1)

  const dotCount = Math.max(1, reviews.length - perView + 1)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.tst-card')
    if (!card) return
    const gap = 18
    const delta = (card.getBoundingClientRect().width + gap) * dir
    track.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const goTo = (i) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.tst-card')
    if (!card) return
    const gap = 18
    track.scrollTo({ left: i * (card.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const card = track.querySelector('.tst-card')
      if (!card) return
      const gap = 18
      const cardW = card.getBoundingClientRect().width
      const trackW = track.getBoundingClientRect().width
      const pv = Math.max(1, Math.round((trackW + gap) / (cardW + gap)))
      setPerView(pv)
    }

    const onScroll = () => {
      const card = track.querySelector('.tst-card')
      if (!card) return
      const gap = 18
      const w = card.getBoundingClientRect().width + gap
      const i = Math.round(track.scrollLeft / w)
      const max = Math.max(0, reviews.length - perView)
      setActiveIndex(Math.max(0, Math.min(max, i)))
    }

    measure()
    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [reviews.length, perView])

  return (
    <section className="tst">
      <Decoration
        type="bear"
        color="var(--brand)"
        size={120}
        rotate={6}
        opacity={0.85}
        animate="float"
        style={{ right: '5%', top: '60px' }}
      />
      <div className="shell">
        <div className="tst-head">
          <Reveal className="eyebrow">[ Co mówią rodzice ]</Reveal>
          <div className="tst-rating">
            <div className="tst-stars">
              {[...Array(5)].map((_, i) => <IconStar key={i} size={20} />)}
            </div>
            <div>
              <div className="tst-rate-num">4.9</div>
              <div className="body-sm">na 127 opinii w Google</div>
            </div>
          </div>
        </div>

        <div className="tst-carousel">
          <div className="tst-track" ref={trackRef}>
            {reviews.map((r) => (
              <article key={r.name} className={`tst-card tst-${r.tone}`}>
                <div className="tst-quote"><IconQuote size={28} /></div>
                <p className="tst-text">{r.text}</p>
                <div className="tst-foot">
                  <div className="tst-stars-sm">
                    {[...Array(r.stars)].map((_, k) => <IconStar key={k} size={12} />)}
                  </div>
                  <div>
                    <div className="tst-name">{r.name}</div>
                    <div className="tst-role">{r.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="tst-controls">
            <button
              className="tst-nav"
              aria-label="Poprzednia opinia"
              onClick={() => scrollByCard(-1)}
            >
              <IconChevronLeft size={22} />
            </button>

            <div className="tst-dots" role="tablist">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  className={`tst-dot ${i === activeIndex ? 'is-active' : ''}`}
                  aria-label={`Przejdź do pozycji ${i + 1}`}
                  aria-selected={i === activeIndex}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <button
              className="tst-nav"
              aria-label="Następna opinia"
              onClick={() => scrollByCard(1)}
            >
              <IconChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .tst { padding: 110px 0 90px; background: var(--cream); overflow: hidden; }
        .tst-head { display: flex; flex-direction: column; gap: 18px; margin-bottom: 50px; }
        .tst-rating { display: flex; align-items: center; gap: 14px; }
        .tst-stars { display: flex; gap: 4px; color: var(--rose-deep); }
        .tst-rate-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 56px;
          line-height: 0.9;
          color: var(--brand-deep);
        }

        .tst-carousel { position: relative; }

        .tst-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 8px;
        }
        .tst-track::-webkit-scrollbar { display: none; }

        .tst-card {
          flex: 0 0 calc((100% - 40px) / 3);
          scroll-snap-align: start;
          padding: 30px 28px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          display: flex;
          flex-direction: column;
          min-height: 320px;
          color: var(--ink);
          box-shadow: 0 4px 24px -16px rgba(168,128,98,0.35);
        }
        @media (max-width: 980px) { .tst-card { flex-basis: calc((100% - 20px) / 2); } }
        @media (max-width: 600px) { .tst-card { flex-basis: 88%; min-height: 280px; } }

        .tst-cream { background: var(--bone); }
        .tst-sand  { background: var(--sand); }

        .tst-quote { color: var(--rose-deep); opacity: 0.7; margin-bottom: 12px; }
        .tst-text {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 19px;
          line-height: 1.45;
          margin: 0 0 24px;
          flex: 1;
          color: var(--ink);
        }
        @media (max-width: 600px) { .tst-text { font-size: 17px; } }

        .tst-foot { display: flex; align-items: center; gap: 14px; padding-top: 18px; border-top: 1px dashed var(--line-soft); }
        .tst-stars-sm { display: flex; gap: 2px; color: var(--rose-deep); }
        .tst-name { font-weight: 700; font-size: 14px; color: var(--ink); }
        .tst-role { font-size: 12px; color: var(--ink-mute); }

        .tst-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 32px;
        }

        .tst-nav {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--bone);
          color: var(--brand-deep);
          border: 1px solid var(--line-soft);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .tst-nav:hover { background: var(--brand-deep); color: var(--bone); border-color: var(--brand-deep); }
        .tst-nav:active { transform: scale(0.94); }

        .tst-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .tst-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--ink-faint);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: width 0.25s, background 0.2s;
        }
        .tst-dot.is-active {
          width: 28px;
          border-radius: 999px;
          background: var(--rose-deep);
        }
      `}</style>
    </section>
  )
}
