import { useRef, useState, useEffect } from 'react'
import { Reveal } from './Reveal.jsx'
import { IconStar, IconQuote, IconChevronLeft, IconChevronRight } from './icons.jsx'

export function Testimonials() {
  const reviews = [
    {
      name: 'Katarzyna Domańska',
      role: 'opinia z Google',
      text: 'BAWISZ to najlepsza bawialnia, w jakiej byłam z moją 3-latką. Spędziłam tu cały dzień: ja siedząc w kawiarni z pysznym ciastem i kawą, mając całą bawialnię w zasięgu wzroku, a córka bawiąc się w pięknym, dopracowanym w każdym detalu placu zabaw.',
      stars: 5,
      tone: 'sage',
    },
    {
      name: 'Anita Słodyczka',
      role: 'opinia z Google',
      text: 'Świetne miejsce! Wszystko drewniane łącznie z zabawkami — to ogromny plus. Córka bawiła się tak dobrze, że nie chciała wyjść. Czystość, przepiękne wnętrza, pyszna kawa, herbata i ciasto. Polecam gorąco!',
      stars: 5,
      tone: 'cream',
    },
    {
      name: 'Karolina Biela',
      role: 'opinia z Google',
      text: 'Gorąco polecam dla dziecka. Moja 9-miesięczna córka była zachwycona zabawkami, bezpiecznymi i różnorodnymi. Dziecko może się pobawić, a rodzic odpocząć przy pysznej kawie, nie spuszczając go z oczu. Obsługa miła i pomocna.',
      stars: 5,
      tone: 'pop',
    },
    {
      name: 'Adrian T.',
      role: 'opinia z Google',
      text: 'Super miejsce dla dzieci! Sala zabaw to strzał w 10 — świetnie zorganizowana i naprawdę fajna przestrzeń dla najmłodszych. Dodatkowo monoporcje są przepyszne. Bardzo polecam.',
      stars: 5,
      tone: 'cream',
    },
    {
      name: 'Beata Waras',
      role: 'opinia z Google',
      text: 'Super miejsce dla maluszka — dużo pięknych i interesujących zabawek, pyszna kawa. Dodatkowa gwiazdka za wyposażenie toalety dla bobasów: pieluszki, mokre chusteczki, nocnik, nakładka. Polecam!',
      stars: 5,
      tone: 'sage',
    },
  ]

  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

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
    const onScroll = () => {
      const card = track.querySelector('.tst-card')
      if (!card) return
      const gap = 18
      const w = card.getBoundingClientRect().width + gap
      const i = Math.round(track.scrollLeft / w)
      setActiveIndex(Math.max(0, Math.min(reviews.length - 1, i)))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [reviews.length])

  return (
    <section className="tst">
      <div className="shell">
        <div className="tst-head">
          <Reveal className="eyebrow">[ Co mówią rodzice ]</Reveal>
          <Reveal delay={80}>
            <h2 className="display tst-h">
              4,9 ★ od ponad<br />
              setki rodziców<br />
              <span className="hero-italic">w Google.</span>
            </h2>
          </Reveal>
          <div className="tst-rating">
            <div className="tst-stars">
              {[...Array(5)].map((_, i) => <IconStar key={i} size={20} />)}
            </div>
            <div>
              <div className="display tst-rate-num">4.9</div>
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
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`tst-dot ${i === activeIndex ? 'is-active' : ''}`}
                  aria-label={`Przejdź do opinii ${i + 1}`}
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
        .tst { padding: 120px 0 100px; background: var(--cream); overflow: hidden; }
        .tst-head { display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: end; max-width: 1100px; margin-bottom: 56px; }
        @media (max-width: 820px) { .tst-head { grid-template-columns: 1fr; } }
        .tst-h { font-size: clamp(40px, 6vw, 80px); margin: 16px 0 0; color: var(--ink); }

        .tst-rating { display: flex; align-items: center; gap: 14px; }
        .tst-stars { display: flex; gap: 4px; color: var(--terracotta); }
        .tst-rate-num { font-size: 44px; line-height: 0.9; color: var(--ink); }

        .tst-carousel { position: relative; }

        .tst-track {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 8px;
        }
        .tst-track::-webkit-scrollbar { display: none; }

        .tst-card {
          flex: 0 0 calc((100% - 36px) / 3);
          scroll-snap-align: start;
          padding: 28px 26px;
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
          display: flex;
          flex-direction: column;
          min-height: 320px;
        }
        @media (max-width: 980px) { .tst-card { flex-basis: calc((100% - 18px) / 2); } }
        @media (max-width: 600px) { .tst-card { flex-basis: 88%; min-height: 280px; } }

        .tst-cream { background: var(--bone); color: var(--ink); }
        .tst-sage { background: var(--sage); color: var(--forest-deep); }
        .tst-pop { background: var(--terracotta); color: var(--bone); }

        .tst-quote { opacity: 0.5; margin-bottom: 12px; }
        .tst-text {
          font-family: var(--font-display);
          font-size: 20px;
          line-height: 1.3;
          margin: 0 0 24px;
          flex: 1;
        }
        @media (max-width: 600px) { .tst-text { font-size: 18px; } }

        .tst-foot { display: flex; align-items: center; gap: 14px; padding-top: 18px; border-top: 1.5px dashed currentColor; }
        .tst-stars-sm { display: flex; gap: 2px; opacity: 0.85; }
        .tst-name { font-weight: 700; font-size: 14px; }
        .tst-role { font-size: 12px; opacity: 0.75; }

        .tst-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 32px;
        }

        .tst-nav {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bone);
          color: var(--ink);
          border: 1.5px solid var(--line);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .tst-nav:hover { background: var(--ink); color: var(--bone); }
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
          width: 26px;
          border-radius: 999px;
          background: var(--ink);
        }
      `}</style>
    </section>
  )
}
