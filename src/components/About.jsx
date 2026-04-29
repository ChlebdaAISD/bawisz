import { Reveal, ImgReveal } from './Reveal.jsx'
import { IconLeaf, IconHeart, IconShield, IconArrow } from './icons.jsx'
import { Decoration } from './Decoration.jsx'

export function About() {
  const values = [
    { icon: IconLeaf, t: 'Naturalność', s: 'Drewno, sklejka, tkaniny. Zabawki, w które chce się bawić — bez plastikowego hałasu.' },
    { icon: IconHeart, t: 'Samodzielność', s: 'Wszystko na wysokości dziecka. Wybiera samo, próbuje samo, jest dumne z efektu.' },
    { icon: IconShield, t: 'Spokój', s: 'Dużo światła, dużo przestrzeni. Dzieci się bawią, rodzice naprawdę odpoczywają.' },
  ]

  return (
    <section id="o-nas" className="about">
      <Decoration
        type="bear"
        color="var(--brand)"
        size={140}
        rotate={-8}
        opacity={0.22}
        style={{ right: '4%', top: '8%' }}
      />
      <div className="shell about-grid">
        <Reveal className="about-media">
          <div className="about-img-wrap">
            <ImgReveal src="/assets/photo4.jpg" alt="Drewniana konstrukcja w bawialni Bawisz" />
          </div>
          <div className="about-tape">— ZAPROJEKTOWANE Z MIŁOŚCIĄ —</div>
        </Reveal>

        <div className="about-text">
          <Reveal className="eyebrow">[ O nas ]</Reveal>

          <Reveal delay={80}>
            <h2 className="display about-h">
              Miejsce, do którego<br />
              dziecko <span className="hero-italic">chce wracać.</span>
            </h2>
          </Reveal>

          <Reveal delay={160} className="about-p body-lg">
            BAWISZ to 200 m² kreatywnej przestrzeni — sala zabaw dla dzieci 0–12 lat
            i kawiarnia dla rodziców pod jednym dachem. Wszystko po to, żeby dziecku było <em>łatwo</em>,
            a Tobie <em>spokojnie</em>.
          </Reveal>

          <div className="about-values">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={240 + i * 80} className="about-value">
                <div className="about-value-icon"><v.icon size={22} /></div>
                <div>
                  <div className="about-value-t">{v.t}</div>
                  <div className="about-value-s">{v.s}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={520}>
            <a href="#oferta" className="btn btn-ghost about-cta">Zobacz, co u nas znajdziesz <IconArrow size={16} /></a>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about {
          padding: 120px 0 100px;
          background: var(--paper);
          border-top: 1.5px solid var(--line);
          border-bottom: 1.5px solid var(--line);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 980px) { .about-grid { grid-template-columns: 1fr; gap: 50px; } }

        .about-media { position: relative; }
        .about-img-wrap {
          aspect-ratio: 4/5;
          border: 1.5px solid var(--line);
          border-radius: var(--r-xl);
          overflow: hidden;
        }
        .about-img-wrap .img-reveal { width: 100%; height: 100%; }

        .about-tape {
          position: absolute;
          left: -8px;
          top: 30px;
          background: var(--sage);
          border: 1.5px solid var(--forest-deep);
          color: var(--forest-deep);
          padding: 8px 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          border-radius: var(--r-sm);
          transform: rotate(-4deg);
        }

        .about-h {
          font-size: clamp(40px, 6vw, 80px);
          margin: 16px 0 0;
          color: var(--ink);
        }
        .about-p { margin: 28px 0; max-width: 52ch; }
        .about-p em { font-style: italic; color: var(--terracotta); }

        .about-values {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 32px 0;
        }
        .about-value {
          display: flex;
          gap: 16px;
          padding: 18px 0;
          border-top: 1.5px dashed var(--line-soft);
        }
        .about-value:last-child { border-bottom: 1.5px dashed var(--line-soft); }
        .about-value-icon {
          flex-shrink: 0;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--sage);
          color: var(--forest-deep);
          border: 1.5px solid var(--forest-deep);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .about-value-t { font-weight: 700; color: var(--ink); margin-bottom: 4px; }
        .about-value-s { font-size: 14px; color: var(--ink-mute); line-height: 1.55; }

        .about-cta { margin-top: 12px; }
      `}</style>
    </section>
  )
}
