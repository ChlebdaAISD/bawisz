import { Reveal } from './Reveal.jsx'
import { IconStar, IconQuote } from './icons.jsx'

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

        <div className="tst-grid">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80} className={`tst-card tst-${r.tone}`}>
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
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .tst { padding: 120px 0 100px; background: var(--cream); }
        .tst-head { display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: end; max-width: 1100px; margin-bottom: 56px; }
        @media (max-width: 820px) { .tst-head { grid-template-columns: 1fr; } }
        .tst-h { font-size: clamp(40px, 6vw, 80px); margin: 16px 0 0; color: var(--ink); }

        .tst-rating { display: flex; align-items: center; gap: 14px; }
        .tst-stars { display: flex; gap: 4px; color: var(--terracotta); }
        .tst-rate-num { font-size: 44px; line-height: 0.9; color: var(--ink); }

        .tst-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 980px) { .tst-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .tst-grid { grid-template-columns: 1fr; } }

        .tst-card {
          padding: 28px 26px;
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
          display: flex;
          flex-direction: column;
        }
        .tst-cream { background: var(--bone); color: var(--ink); }
        .tst-sage { background: var(--sage); color: var(--forest-deep); }
        .tst-pop { background: var(--terracotta); color: var(--bone); }

        .tst-quote { opacity: 0.5; margin-bottom: 12px; }
        .tst-text {
          font-family: var(--font-display);
          font-size: 22px;
          line-height: 1.25;
          margin: 0 0 28px;
          flex: 1;
        }
        .tst-foot { display: flex; align-items: center; gap: 14px; padding-top: 18px; border-top: 1.5px dashed currentColor; }
        .tst-stars-sm { display: flex; gap: 2px; opacity: 0.85; }
        .tst-name { font-weight: 700; font-size: 14px; }
        .tst-role { font-size: 12px; opacity: 0.75; }
      `}</style>
    </section>
  )
}
