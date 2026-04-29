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
      tone: 'peach',
      badge: 'Najlepsza wartość',
    },
    {
      name: 'Grupa 10+ osób',
      price: '15',
      unit: 'zł / od · za dziecko',
      desc: 'Dla przedszkoli, szkół i większych rodzin. Cena maleje przy większej grupie.',
      includes: ['Min. 10 dzieci', 'Możliwość rezerwacji terminu', 'Indywidualna wycena dla grup'],
      tone: 'sage',
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
        color="var(--pastel-lilac)"
        size={130}
        rotate={10}
        opacity={0.4}
        animate="float"
        style={{ right: '6%', top: '80px' }}
      />
      <div className="shell">
        <div className="prc-head">
          <Reveal className="eyebrow">[ Cennik ]</Reveal>
          <Reveal delay={80}>
            <h2 className="display prc-h">
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
                <span className="display prc-price">{p.price}</span>
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
            <div className="display prc-extras-h">Drobny druczek, którego nie ma.</div>
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
        .prc { padding: 120px 0 100px; background: var(--cream); }
        .prc-head { max-width: 760px; margin: 0 0 56px; }
        .prc-h { font-size: clamp(40px, 6.5vw, 88px); margin: 16px 0 20px; color: var(--ink); }
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
          padding: 28px 28px 32px;
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
        }
        .prc-cream { background: var(--bone); color: var(--ink); }
        .prc-pop   { background: var(--terracotta); color: var(--ink); transform: translateY(-12px); }
        .prc-peach { background: var(--pastel-peach); color: var(--ink); transform: translateY(-12px); }
        .prc-sage  { background: var(--sage); color: var(--ink); }
        .prc-rose  { background: var(--pastel-rose); color: var(--ink); }
        .prc-butter{ background: var(--pastel-butter); color: var(--ink); }
        .prc-lilac { background: var(--pastel-lilac); color: var(--ink); }

        @media (max-width: 900px) { .prc-pop, .prc-peach { transform: none; } }

        .prc-badge {
          position: absolute;
          top: -14px;
          left: 24px;
          background: var(--ink);
          color: var(--bone);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 6px 12px;
          border-radius: var(--r-pill);
          border: 1.5px solid var(--ink);
          text-transform: uppercase;
        }

        .prc-name { font-size: 14px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.9; margin-bottom: 16px; }
        .prc-price-row { display: flex; align-items: baseline; gap: 10px; }
        .prc-price { font-size: 88px; line-height: 0.9; }
        .prc-unit { font-size: 14px; opacity: 0.75; }

        .prc-desc { margin: 16px 0 22px; font-size: 14px; line-height: 1.55; opacity: 0.85; }

        .prc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .prc-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          padding-top: 10px;
          border-top: 1.5px dashed currentColor;
          opacity: 0.95;
        }
        .prc-list li:first-child { border-top: 1.5px dashed currentColor; }

        .prc-extras {
          margin-top: 32px;
          padding: 40px;
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
          background: var(--paper);
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 900px) { .prc-extras { grid-template-columns: 1fr; padding: 28px; } }

        .prc-extras-head { grid-column: 1; }
        .prc-extras-h { font-size: 36px; margin-bottom: 8px; color: var(--ink); }
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
          border-top: 1.5px dashed var(--line-soft);
          font-size: 15px;
        }
        .prc-row:last-child { border-bottom: 1.5px dashed var(--line-soft); }
        .prc-row-v {
          font-family: var(--font-display);
          font-size: 22px;
          color: var(--terracotta-deep);
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
