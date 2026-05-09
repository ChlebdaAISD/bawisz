import { Link } from 'wouter'
import { Reveal } from './Reveal.jsx'
import { IconArrow } from './icons.jsx'
import { AnimalDeer, AnimalBear, AnimalFox } from './animals.jsx'

export function About() {
  const values = [
    { icon: AnimalDeer, t: 'Naturalność', s: 'Drewno, sklejka, tkaniny. Zabawki, którym kibicują rodzice — bez plastikowego hałasu i bez ekranów.' },
    { icon: AnimalBear, t: 'Spokój',       s: 'Dużo światła, mało bodźców. Pijesz kawę obok, dziecko bawi się w zasięgu wzroku.' },
    { icon: AnimalFox,  t: 'Samodzielność',s: 'Wszystko na wysokości dziecka. Wybiera samo, próbuje samo, wraca dumne z tego, co zrobiło.' },
  ]

  return (
    <section id="o-nas" className="about">
      <div className="shell">
        <div className="about-text">
          <Reveal className="eyebrow">[ O nas ]</Reveal>

          <Reveal delay={80}>
            <h2 className="about-h">
              Drewniana sala<br />
              dla <span className="hero-italic">małych odkrywców.</span>
            </h2>
          </Reveal>

          <Reveal delay={160} className="about-p body-lg">
            Bawisz to 220 m² drewnianej przestrzeni Montessori w sercu Nowego Targu — sala zabaw
            dla dzieci 0–10 lat i kawiarnia dla rodziców pod jednym dachem. Dziecko bawi się samo
            wśród naturalnych zabawek, a ty masz chwilę przy dobrej kawie.
          </Reveal>

          <div className="about-values">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={240 + i * 80} className="about-value">
                <div className="about-value-icon"><v.icon size={68} /></div>
                <div>
                  <div className="about-value-t">{v.t}</div>
                  <div className="about-value-s">{v.s}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={520}>
            <Link href="/o-nas/" className="btn btn-ghost about-cta">Czytaj więcej o nas <IconArrow size={16} /></Link>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about {
          padding: 110px 0 90px;
          background: var(--paper);
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
        }
        .about-text { max-width: 720px; }

        .about-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 14px 0 0;
          color: var(--ink);
        }
        .about-p { margin: 28px 0; max-width: 52ch; }

        .about-values {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 32px 0;
        }
        .about-value {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 0;
          border-top: 1px dashed var(--line-soft);
        }
        .about-value:last-child { border-bottom: 1px dashed var(--line-soft); }
        .about-value-icon {
          flex-shrink: 0;
          width: 72px;
          height: 72px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .about-value-icon svg,
        .about-value-icon img { display: block; filter: drop-shadow(0 3px 6px rgba(91,71,55,0.15)); }
        .about-value-t { font-weight: 700; color: var(--ink); margin-bottom: 4px; font-size: 17px; }
        .about-value-s { font-size: 14.5px; color: var(--ink-mute); line-height: 1.6; font-weight: 500; }

        .about-cta { margin-top: 12px; }
      `}</style>
    </section>
  )
}
