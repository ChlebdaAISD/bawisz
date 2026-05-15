import { IconArrow } from './icons.jsx'

export function Hero({ onBookBirthday }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img
          src="/assets/zdjecia/foto_2025 (2).jpg"
          alt="Wnętrze bawialni Bawisz"
          width={2400}
          height={1600}
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-shell shell">
        <div className="hero-text">
          <span className="eyebrow fade-up">[ BAWISZ · Bawialnia Montessori · Nowy Targ ]</span>

          <h1 className="hero-headline fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="line">Bawialnia</span>
            <span className="line hero-italic">w Nowym Targu,</span>
            <span className="line">do której dziecko</span>
            <span className="line hero-italic">chce wracać.</span>
          </h1>

          <p className="hero-sub body-lg fade-up" style={{ animationDelay: '0.2s' }}>
            Naturalna sala Montessori dla dzieci 0–10 lat przy ul. Krzywej 19B.<br />
            Ty pijesz kawę i jesz domowe ciasto. Dziecko bawi się obok — przy kreatywnych zabawkach.
          </p>

          <div className="hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
            <button className="btn btn-pop" onClick={onBookBirthday}>
              Zarezerwuj urodziny <IconArrow size={16} />
            </button>
            <a href="#oferta" className="btn btn-ghost-light">Co u nas znajdziesz</a>
          </div>

          <div className="hero-meta fade-up" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="hero-meta-num display">0–10</div>
              <div className="hero-meta-lbl">lat</div>
            </div>
            <div className="hero-meta-div" />
            <div>
              <div className="hero-meta-num display">220 m²</div>
              <div className="hero-meta-lbl">naturalnej przestrzeni</div>
            </div>
            <div className="hero-meta-div" />
            <div>
              <div className="hero-meta-num display">7 dni</div>
              <div className="hero-meta-lbl">w tygodniu</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 180px 0 120px;
          min-height: 100vh;
          background: var(--brand-deep);
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(58,46,31,0.55) 0%, rgba(58,46,31,0.35) 40%, rgba(58,46,31,0.75) 100%),
            linear-gradient(90deg, rgba(58,46,31,0.55) 0%, rgba(58,46,31,0.15) 60%, rgba(58,46,31,0) 100%);
        }

        .hero-shell {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-text {
          position: relative;
          max-width: 720px;
          color: var(--bone);
        }

        .hero-text .eyebrow {
          color: var(--bone);
          opacity: 0.85;
        }

        .hero-headline {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.5vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.015em;
          color: var(--bone);
          margin: 22px 0 0;
          text-shadow: 0 2px 24px rgba(0,0,0,0.25);
        }
        .hero-headline .line { display: block; }

        .hero-sub {
          margin: 30px 0 36px;
          max-width: 52ch;
          color: rgba(255,255,255,0.92);
          text-shadow: 0 1px 12px rgba(0,0,0,0.25);
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .btn-ghost-light {
          background: rgba(255,255,255,0.08);
          color: var(--bone);
          border: 1.5px solid rgba(255,255,255,0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .btn-ghost-light:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.85);
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
          color: var(--bone);
          line-height: 1;
        }
        .hero-meta-lbl {
          font-size: 12px;
          color: rgba(255,255,255,0.78);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 4px;
          font-weight: 600;
        }
        .hero-meta-div {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.35);
        }

        @media (max-width: 720px) {
          .hero { padding: 130px 0 80px; min-height: auto; }
          .hero-meta { gap: 16px; flex-wrap: wrap; }
          .hero-meta-num { font-size: 36px; }
          .hero-ctas { gap: 10px; }
          .hero-ctas .btn { width: 100%; justify-content: center; }
          .hero-overlay {
            background:
              linear-gradient(180deg, rgba(58,46,31,0.6) 0%, rgba(58,46,31,0.55) 40%, rgba(58,46,31,0.85) 100%);
          }
        }
      `}</style>
    </section>
  )
}
