import { IconArrow } from './icons.jsx'
import { Decoration } from './Decoration.jsx'

export function Hero({ onBookBirthday }) {
  return (
    <section className="hero" id="top">
      <div className="hero-shell shell">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow fade-up">[ Bawialnia &amp; Kawiarnia · Nowy Targ ]</span>

            <h1 className="hero-headline fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Sala zabaw</span>
              <span className="line hero-italic">i kawiarnia,</span>
              <span className="line">do której dziecko</span>
              <span className="line hero-italic">chce wracać.</span>
            </h1>

            <p className="hero-sub body-lg fade-up" style={{ animationDelay: '0.2s' }}>
              Kreatywna, drewniana przestrzeń dla dzieci 0–12 lat.<br />
              Ty pijesz kawę i jesz ciasto. One bawią się, tworzą i odkrywają.
            </p>

            <div className="hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
              <button className="btn btn-pop" onClick={onBookBirthday}>
                Zarezerwuj urodziny <IconArrow size={16} />
              </button>
              <a href="#oferta" className="btn btn-ghost">Co u nas znajdziesz</a>
            </div>

            <div className="hero-meta fade-up" style={{ animationDelay: '0.5s' }}>
              <div>
                <div className="hero-meta-num display">0–12</div>
                <div className="hero-meta-lbl">lat</div>
              </div>
              <div className="hero-meta-div" />
              <div>
                <div className="hero-meta-num display">200 m²</div>
                <div className="hero-meta-lbl">sali zabaw</div>
              </div>
              <div className="hero-meta-div" />
              <div>
                <div className="hero-meta-num display">7 dni</div>
                <div className="hero-meta-lbl">w tygodniu</div>
              </div>
            </div>
          </div>

          <div className="hero-visual fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="hero-photo">
              <img src="/assets/photo4.jpg" alt="Wnętrze bawialni Bawisz" />
            </div>
            <Decoration
              type="bear"
              color="var(--brand)"
              size={130}
              rotate={-8}
              opacity={0.95}
              animate="float"
              style={{ left: '-30px', top: '-40px', zIndex: 3 }}
            />
            <Decoration
              type="balloon"
              color="var(--rose)"
              size={90}
              rotate={12}
              opacity={0.85}
              animate="float"
              style={{ right: '-18px', bottom: '40px', zIndex: 3 }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 140px 0 100px;
          background: var(--cream);
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; gap: 50px; }
        }

        .hero-text { position: relative; z-index: 2; }

        .hero-headline {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.5vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.015em;
          color: var(--ink);
          margin: 22px 0 0;
        }
        .hero-headline .line { display: block; }

        .hero-sub {
          margin: 30px 0 36px;
          max-width: 48ch;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .hero-meta {
          margin-top: 56px;
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .hero-meta-num {
          font-family: var(--font-display);
          font-size: 44px;
          font-weight: 700;
          color: var(--brand-deep);
          line-height: 1;
        }
        .hero-meta-lbl {
          font-size: 12px;
          color: var(--ink-mute);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 4px;
          font-weight: 600;
        }
        .hero-meta-div {
          width: 1px;
          height: 36px;
          background: var(--line-soft);
        }

        .hero-visual {
          position: relative;
        }
        .hero-photo {
          position: relative;
          aspect-ratio: 4/5;
          border-radius: var(--r-xl);
          overflow: hidden;
          box-shadow: 0 30px 80px -30px rgba(119,98,88,0.35);
        }
        .hero-photo::before {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: calc(var(--r-xl) + 8px);
          border: 1.5px dashed var(--brand-soft);
          z-index: -1;
        }
        .hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 720px) {
          .hero { padding: 110px 0 60px; }
          .hero-meta { gap: 16px; flex-wrap: wrap; }
          .hero-meta-num { font-size: 36px; }
          .hero-ctas { gap: 10px; }
          .hero-ctas .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
