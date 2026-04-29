import { IconArrow } from './icons.jsx'
import { Decoration } from './Decoration.jsx'

export function Hero({ onBookBirthday }) {
  return (
    <section className="hero" id="top">
      <div className="hero-fb">
        <img src="/assets/photo4.jpg" alt="Wnętrze bawialni Bawisz" className="hero-fb-img" />
        <div className="hero-fb-overlay" />
        <div className="hero-fb-grain" />

        <Decoration
          type="balloon"
          color="var(--pastel-rose)"
          size={120}
          rotate={-12}
          opacity={0.45}
          animate="float"
          style={{ right: '6%', top: '14%', zIndex: 2 }}
        />

        <div className="shell hero-fb-content">
          <h1 className="hero-headline display fade-up">
            <span className="line">Sala zabaw</span>
            <span className="line"><span className="hero-italic">i kawiarnia</span></span>
            <span className="line">w Nowym Targu.</span>
          </h1>

          <p className="hero-sub body-lg fade-up" style={{ animationDelay: '0.2s' }}>
            Kreatywna przestrzeń dla dzieci 0–12 lat.<br />
            Ty pijesz kawę i jesz ciasto. One bawią się, tworzą i odkrywają.
          </p>

          <div className="hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
            <button className="btn btn-pop" onClick={onBookBirthday}>
              Zarezerwuj urodziny <IconArrow size={16} />
            </button>
            <a href="#oferta" className="btn btn-cream">Co u nas znajdziesz</a>
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
      </div>

      <style>{`
        .hero-fb {
          position: relative;
          padding: 200px 0 100px;
          min-height: 92vh;
          overflow: hidden;
          color: var(--bone);
        }
        .hero-fb-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: saturate(1.05) contrast(1.02);
        }
        .hero-fb-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(100deg, rgba(58,46,31,0.78) 0%, rgba(58,46,31,0.55) 40%, rgba(58,46,31,0.25) 70%, rgba(58,46,31,0.45) 100%),
            linear-gradient(180deg, rgba(58,46,31,0.35) 0%, rgba(58,46,31,0.15) 50%, rgba(58,46,31,0.55) 100%);
        }
        .hero-fb-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.18;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }
        .hero-fb-content {
          position: relative;
          z-index: 3;
          max-width: 880px;
          padding: 0 28px;
        }

        .hero-headline {
          font-size: clamp(44px, 7.5vw, 108px);
          color: var(--bone);
          margin: 0;
        }
        .hero-headline .line { display: block; }
        .hero-fb .hero-italic { color: var(--terracotta); }

        .hero-sub {
          margin: 32px 0 40px;
          max-width: 50ch;
          color: rgba(255, 253, 246, 0.92);
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          align-items: center;
        }

        .btn-cream {
          background: var(--bone);
          color: var(--ink);
          border: 1.5px solid var(--bone);
        }
        .btn-cream:hover { background: var(--cream); border-color: var(--cream); }

        .hero-meta {
          margin-top: 64px;
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .hero-meta-num {
          font-size: 36px;
          color: var(--bone);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .hero-meta-lbl {
          font-size: 12px;
          color: rgba(255, 253, 246, 0.7);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 6px;
        }
        .hero-meta-div {
          width: 1px;
          height: 40px;
          background: rgba(255, 253, 246, 0.25);
        }

        @media (max-width: 720px) {
          .hero-fb { padding: 160px 0 80px; min-height: 88vh; }
          .hero-meta { gap: 16px; flex-wrap: wrap; }
          .hero-meta-num { font-size: 28px; }
          .hero-ctas { gap: 12px; }
          .hero-ctas .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
