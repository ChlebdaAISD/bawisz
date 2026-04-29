import { Reveal } from './Reveal.jsx'
import { IconCheck, IconArrow } from './icons.jsx'
import { Decoration } from './Decoration.jsx'

export function Pricing({ onBookBirthday }) {
  const plans = [
    {
      name: 'Wejście indywidualne',
      price: '25',
      unit: 'zł / od',
      desc: 'Wpadnijcie na godzinę albo zostańcie cały dzień — Wy decydujecie.',
      includes: ['1h, 2h, 3h lub cały dzień', 'Opiekun zawsze gratis', 'Pełen dostęp do strefy'],
      tone: 'cream',
    },
    {
      name: 'Karnet miesięczny',
      price: '215',
      unit: 'zł / bez limitu',
      desc: 'Dla stałych bywalców — wchodzisz, kiedy chcesz, ile chcesz.',
      includes: ['Bez limitu wejść', '1 miesiąc kalendarzowy', 'Najlepszy stosunek do ceny'],
      tone: 'sage',
      badge: 'Najlepsza wartość',
    },
    {
      name: 'Grupa 10+ osób',
      price: '15',
      unit: 'zł / od · za dziecko',
      desc: 'Dla przedszkoli, szkół i większych rodzin. Cena maleje przy większej grupie.',
      includes: ['Min. 10 dzieci', 'Możliwość rezerwacji terminu', 'Indywidualna wycena dla grup'],
      tone: 'cream',
    },
  ]

  const extras = [
    ['Rodzeństwo', '−25%'],
    ['Karta podarunkowa', '29 / 75 / 135 zł'],
    ['Urodziny MINI (2h)', '45 zł / dziecko'],
    ['Urodziny STANDARD (2,5h)', '74 zł / dziecko'],
    ['Pakiet dla rodziców', '55 zł / osoba'],
  ]

  return (
    <section id="cennik" className="prc">
      <Decoration
        type="balloon"
        color="var(--rose)"
        size={110}
        rotate={10}
        opacity={0.7}
        animate="float"
        style={{ right: '6%', top: '70px' }}
      />
      <div className="shell">
        <div className="prc-head">
          <Reveal className="eyebrow">[ Cennik ]</Reveal>
          <Reveal delay={80}>
            <h2 className="prc-h">
              Prosto. <span className="hero-italic">Bez gwiazdek.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg prc-sub">
            Jasne stawki, bez ukrytych kosztów. Opiekun zawsze gratis, rodzeństwo z rabatem.
          </Reveal>
        </div>

        <div className="prc-grid">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className={`prc-card prc-${p.tone}`}>
              {p.badge && <div className="prc-badge">{p.badge}</div>}
              <div className="prc-name">{p.name}</div>
              <div className="prc-price-row">
                <span className="prc-price">{p.price}</span>
                <span className="prc-unit">{p.unit}</span>
              </div>
              <p className="prc-desc">{p.desc}</p>
              <ul className="prc-list">
                {p.includes.map((inc) => (
                  <li key={inc}><IconCheck size={16} /> <span>{inc}</span></li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="prc-extras">
          <div className="prc-extras-head">
            <div className="prc-extras-h">Drobny druczek, którego nie ma.</div>
            <div className="body-md prc-extras-s">Dodatki, zniżki i wszystko, o co zwykle pytacie.</div>
          </div>
          <div className="prc-extras-table">
            {extras.map(([k, v]) => (
              <div key={k} className="prc-row">
                <span>{k}</span>
                <span className="prc-row-v">{v}</span>
              </div>
            ))}
          </div>
          <div className="prc-extras-cta">
            <button className="btn btn-pop" onClick={onBookBirthday}>Zarezerwuj urodziny <IconArrow size={16} /></button>
            <a href="tel:+48693766049" className="btn btn-ghost">Zadzwoń · 693 766 049</a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .prc { padding: 110px 0 90px; background: var(--paper); }
        .prc-head { max-width: 760px; margin: 0 0 50px; }
        .prc-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(36px, 5.5vw, 68px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 14px 0 18px;
          color: var(--ink);
        }
        .prc-sub { max-width: 56ch; }

        .prc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 32px;
        }
        @media (max-width: 900px) { .prc-grid { grid-template-columns: 1fr; } }

        .prc-card {
          position: relative;
          padding: 32px 30px 36px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          color: var(--ink);
          box-shadow: 0 4px 24px -16px rgba(168,128,98,0.35);
        }
        .prc-cream { background: var(--bone); }
        .prc-sand  { background: var(--sand); }
        .prc-sage  {
          background: var(--sage);
          transform: translateY(-12px);
          box-shadow: 0 18px 42px -22px rgba(208,177,146,0.55);
        }
        .prc-rose  { background: var(--rose-soft); }

        @media (max-width: 900px) { .prc-sage { transform: none; } }

        .prc-badge {
          position: absolute;
          top: -14px;
          left: 24px;
          background: var(--rose-deep);
          color: var(--bone);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 6px 14px;
          border-radius: var(--r-pill);
          border: none;
          text-transform: uppercase;
        }

        .prc-name {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 16px;
        }
        .prc-price-row { display: flex; align-items: baseline; gap: 12px; }
        .prc-price {
          font-family: var(--font-display);
          font-size: 96px;
          font-weight: 700;
          line-height: 0.9;
          color: var(--brand-deep);
        }
        .prc-unit { font-size: 14px; color: var(--ink-mute); font-weight: 500; }

        .prc-desc { margin: 18px 0 24px; font-size: 14.5px; line-height: 1.6; color: var(--ink-soft); }

        .prc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .prc-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink-soft);
          padding-top: 12px;
          border-top: 1px dashed var(--line-soft);
        }
        .prc-sage .prc-list li { border-top-color: rgba(255,253,248,0.55); color: var(--ink); }

        .prc-extras {
          margin-top: 36px;
          padding: 44px;
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          background: var(--bone);
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
          box-shadow: 0 6px 28px -18px rgba(168,128,98,0.4);
        }
        @media (max-width: 900px) { .prc-extras { grid-template-columns: 1fr; padding: 28px; } }

        .prc-extras-head { grid-column: 1; }
        .prc-extras-h {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 42px;
          line-height: 1;
          margin-bottom: 10px;
          color: var(--brand-deep);
        }
        .prc-extras-s { color: var(--ink-mute); }

        .prc-extras-table {
          grid-column: 2;
          grid-row: 1 / span 2;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 900px) { .prc-extras-table { grid-column: 1; grid-row: auto; } }
        .prc-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-top: 1px dashed var(--line-soft);
          font-size: 15px;
          font-weight: 500;
          color: var(--ink-soft);
        }
        .prc-row:last-child { border-bottom: 1px dashed var(--line-soft); }
        .prc-row-v {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--rose-deep);
        }

        .prc-extras-cta {
          grid-column: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
      `}</style>
    </section>
  )
}
