import { Reveal } from './Reveal.jsx'
import { IconPin, IconPhone, IconClock, IconNav } from './icons.jsx'

export function Hours() {
  const today = new Date().getDay()
  const sched = [
    { day: 'Poniedziałek', hours: '10:00 — 19:00', i: 1 },
    { day: 'Wtorek',       hours: '10:00 — 19:00', i: 2 },
    { day: 'Środa',        hours: '10:00 — 19:00', i: 3 },
    { day: 'Czwartek',     hours: '10:00 — 19:00', i: 4 },
    { day: 'Piątek',       hours: '10:00 — 19:00', i: 5 },
    { day: 'Sobota',       hours: '10:00 — 20:00', i: 6, weekend: true },
    { day: 'Niedziela',    hours: '10:00 — 20:00', i: 0, weekend: true },
  ]

  const mapsQuery = 'Krzywa 19B, 34-400 Nowy Targ'

  return (
    <section id="godziny" className="hrs">
      <div className="shell hrs-grid">
        <div className="hrs-left">
          <Reveal className="eyebrow">[ Godziny ]</Reveal>
          <Reveal delay={80}>
            <h2 className="hrs-h">
              Codziennie <span className="hero-italic">otwarte.</span>
            </h2>
          </Reveal>

          <div className="hrs-table">
            {sched.map((s, idx) => (
              <Reveal key={s.day} delay={120 + idx * 50}
                className={`hrs-row ${s.i === today ? 'is-today' : ''}`}>
                <span className="hrs-day">
                  {s.i === today && <span className="hrs-marker">→</span>}
                  {s.day}
                </span>
                <span className="hrs-time">
                  {s.weekend && <span className="chip chip-sage" style={{ marginRight: 8 }}>dłużej</span>}
                  {s.hours}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="hrs-card">
          <div className="hrs-card-eyebrow">[ Jak do nas trafić? ]</div>
          <div className="hrs-card-h">ul. Krzywa 19B<br />Nowy Targ</div>

          <div className="hrs-info">
            <div className="hrs-info-row">
              <div className="hrs-info-icon"><IconPin size={20} /></div>
              <div>
                <div className="hrs-info-t">34-400 Nowy Targ</div>
                <div className="hrs-info-s">Centrum, parking obok</div>
              </div>
            </div>
            <div className="hrs-info-row">
              <div className="hrs-info-icon"><IconPhone size={20} /></div>
              <div>
                <a href="tel:+48693766049" className="hrs-info-t link-u">+48 693 766 049</a>
                <div className="hrs-info-s">Zadzwoń lub napisz SMS</div>
              </div>
            </div>
            <div className="hrs-info-row">
              <div className="hrs-info-icon"><IconClock size={20} /></div>
              <div>
                <div className="hrs-info-t">Codziennie od 10:00</div>
                <div className="hrs-info-s">Pn–Pt do 19, Sb–Nd do 20</div>
              </div>
            </div>
          </div>

          <a href={`https://maps.google.com/?q=${encodeURIComponent(mapsQuery)}`}
             target="_blank" rel="noopener noreferrer"
             className="btn btn-primary hrs-cta">
            <IconNav size={16} /> Nawiguj do nas
          </a>

          <div className="hrs-map">
            <iframe
              title="Mapa — Bawisz, Nowy Targ"
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed&z=15`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>

      <style>{`
        .hrs { padding: 120px 0 100px; background: var(--paper); border-top: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); }
        .hrs-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: start; }
        @media (max-width: 980px) { .hrs-grid { grid-template-columns: 1fr; gap: 40px; } }

        .hrs-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(40px, 6vw, 88px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 16px 0 32px;
          color: var(--ink);
        }

        .hrs-table { display: flex; flex-direction: column; }
        .hrs-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 4px;
          border-top: 1px dashed var(--line-soft);
          font-size: 17px;
        }
        .hrs-row:last-child { border-bottom: 1px dashed var(--line-soft); }
        .hrs-row.is-today {
          background: var(--sage);
          padding: 18px 14px;
          border-radius: var(--r-md);
          border: 1px solid var(--brand-deep);
          color: var(--brand-deep);
          font-weight: 700;
        }
        .hrs-day { display: inline-flex; align-items: center; gap: 12px; }
        .hrs-marker { color: var(--rose-deep); font-weight: 700; }
        .hrs-time { font-feature-settings: "tnum" 1; color: var(--ink-mute); display: inline-flex; align-items: center; }
        .hrs-row.is-today .hrs-time { color: var(--brand-deep); }

        .hrs-card {
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-xl);
          padding: 32px;
          position: sticky;
          top: 110px;
          box-shadow: 0 4px 24px -16px rgba(168,128,98,0.35);
        }
        .hrs-card-eyebrow { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 12px; }
        .hrs-card-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 36px;
          color: var(--ink);
          margin-bottom: 28px;
          line-height: 1;
        }

        .hrs-info { display: flex; flex-direction: column; gap: 18px; margin-bottom: 28px; }
        .hrs-info-row { display: flex; gap: 14px; align-items: flex-start; }
        .hrs-info-icon {
          width: 42px; height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          border: none;
          background: var(--rose-soft);
          color: var(--brand-deep);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .hrs-info-t { font-weight: 700; color: var(--ink); }
        .hrs-info-s { font-size: 13px; color: var(--ink-mute); margin-top: 2px; }

        .hrs-cta { width: 100%; justify-content: center; }

        .hrs-map {
          margin-top: 22px;
          height: 200px;
          border: 1px solid var(--line-soft);
          border-radius: var(--r-md);
          overflow: hidden;
          background: var(--cream);
        }
        .hrs-map iframe { width: 100%; height: 100%; border: 0; display: block; }
      `}</style>
    </section>
  )
}
