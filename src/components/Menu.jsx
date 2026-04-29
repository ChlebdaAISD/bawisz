import { useState } from 'react'
import { Reveal, ImgReveal } from './Reveal.jsx'

export function Menu() {
  const [tab, setTab] = useState('kawa')

  const data = {
    kawa: [
      ['Espresso', '— mocne i krótkie, jak trzeba'],
      ['Flat white', '— jedwabista mleczna pianka'],
      ['Latte', '— do wyboru z syropem (wanilia, orzech, karmel)'],
      ['Cappuccino', '— klasyka, której nie trzeba przedstawiać'],
      ['Matcha latte', '— mleko zwykłe lub roślinne'],
      ['Czekolada na gorąco', '— rozgrzewa lepiej niż piec kaflowy'],
    ],
    ciasta: [
      ['Sezonowe ciasta domowe', '— pieczone u nas, zmieniają się co tydzień'],
      ['Brownie', '— ciemna czekolada, na zimno albo lekko podgrzane'],
      ['Sernik', '— klasyczny lub z sezonowym dodatkiem'],
      ['Szarlotka', '— jabłka, cynamon, opcjonalnie z lodami'],
      ['Wersje bez cukru i bezglutenowe', '— pytaj na miejscu'],
    ],
    dzieciaki: [
      ['Owoce sezonowe', '— prosto z talerza, krojone na kawałki'],
      ['Mleko / kakao', '— ciepłe albo zimne'],
      ['Soczki naturalne', '— bez dodatku cukru'],
      ['Babeczki bananowe', '— bez cukru, zawsze świeże'],
      ['Kanapka z dżemem', '— prosto i pewnie'],
    ],
  }

  const tabs = [
    { id: 'kawa', label: 'Kawa & napoje' },
    { id: 'ciasta', label: 'Ciasta' },
    { id: 'dzieciaki', label: 'Dla maluchów' },
  ]

  return (
    <section id="menu" className="menu">
      <div className="shell menu-grid">
        <div className="menu-left">
          <Reveal className="eyebrow">[ Kawiarnia ]</Reveal>
          <Reveal delay={80}>
            <h2 className="display menu-h">
              Kawa, dla której<br />
              <span className="hero-italic">tu wracasz.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg menu-sub">
            Dobra kawa, domowe ciasta i coś dla maluchów. Mała kawiarnia z dużym sercem —
            zaprojektowana tak, żebyś naprawdę odpoczął, kiedy dziecko się bawi.
          </Reveal>

          <div className="menu-tabs" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`menu-tab ${tab === t.id ? 'is-active' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="menu-list">
            {data[tab].map(([n, d], i) => (
              <div key={n} className="menu-item" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="menu-item-l">
                  <div className="menu-item-n">{n}</div>
                  <div className="menu-item-d">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-foot body-sm">
            * Pełne, aktualne menu z cenami znajdziesz na miejscu. Oferta zmienia się sezonowo.
          </div>
        </div>

        <div className="menu-right">
          <Reveal className="menu-photo-wrap">
            <ImgReveal src="/assets/photo2.jpg" alt="Latte i ciasto pistacjowe" />
            <div className="menu-photo-cap">
              <div className="display">Kawa i ciasto</div>
              <div className="body-sm">Tymczasem dzieci bawią się tuż obok.</div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .menu { padding: 120px 0 100px; background: var(--paper); border-top: 1.5px solid var(--line); border-bottom: 1.5px solid var(--line); }
        .menu-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: start; }
        @media (max-width: 980px) { .menu-grid { grid-template-columns: 1fr; gap: 40px; } }

        .menu-h { font-size: clamp(40px, 6vw, 88px); margin: 16px 0 20px; color: var(--ink); }
        .menu-sub { max-width: 50ch; margin-bottom: 36px; }

        .menu-tabs {
          display: flex;
          gap: 6px;
          padding: 6px;
          background: var(--cream);
          border: 1.5px solid var(--line);
          border-radius: var(--r-pill);
          margin-bottom: 28px;
          width: fit-content;
        }
        .menu-tab {
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          background: transparent;
          color: var(--ink-mute);
          border: none;
          border-radius: var(--r-pill);
          transition: background 0.2s, color 0.2s;
        }
        .menu-tab.is-active {
          background: var(--ink);
          color: var(--bone);
        }
        @media (max-width: 480px) { .menu-tab { padding: 9px 14px; font-size: 12px; } }

        .menu-list { display: flex; flex-direction: column; }
        .menu-item {
          display: flex;
          align-items: baseline;
          gap: 14px;
          padding: 16px 0;
          border-top: 1.5px dashed var(--line-soft);
          animation: fade-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .menu-item:last-child { border-bottom: 1.5px dashed var(--line-soft); }
        .menu-item-l { flex-shrink: 0; }
        .menu-item-n { font-weight: 700; color: var(--ink); font-size: 16px; }
        .menu-item-d { color: var(--ink-mute); font-size: 13px; margin-top: 2px; max-width: 36ch; }
        .menu-dotted { flex: 1; border-bottom: 1.5px dotted var(--line-soft); transform: translateY(-4px); }
        .menu-item-p { font-size: 26px; color: var(--terracotta-deep); white-space: nowrap; }
        .menu-item-p span { font-size: 13px; opacity: 0.7; }

        .menu-foot { margin-top: 18px; }

        .menu-right { position: sticky; top: 110px; }
        .menu-photo-wrap {
          position: relative;
          aspect-ratio: 4/5;
          border: 1.5px solid var(--line);
          border-radius: var(--r-xl);
          overflow: hidden;
        }
        .menu-photo-wrap .img-reveal { width: 100%; height: 100%; }
        .menu-photo-cap {
          position: absolute;
          left: 18px;
          bottom: 18px;
          right: 18px;
          padding: 14px 18px;
          background: var(--bone);
          border: 1.5px solid var(--line);
          border-radius: var(--r-md);
        }
        .menu-photo-cap .display { font-size: 24px; color: var(--ink); }
      `}</style>
    </section>
  )
}
