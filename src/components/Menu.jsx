import { useState } from 'react'
import { Link } from 'wouter'
import { Reveal, ImgReveal } from './Reveal.jsx'
import { IconArrow } from './icons.jsx'

export function Menu() {
  const [tab, setTab] = useState('kawa')

  const data = {
    kawa: [
      ['Espresso', '— mocne, jak trzeba'],
      ['Americano', '— czarne i aromatyczne'],
      ['Latte', '— z syropem lub klasyczne'],
      ['Cappuccino', '— małe lub duże'],
      ['Cappuccino pistacjowe', '— smak, który pokochasz'],
      ['Kawa mrożona', '— orzeźwiający klasyk'],
      ['Matcha', '— na ciepło lub zimno, z syropem malinowym lub mango'],
      ['Lemoniada', '— truskawka-liczi, mango-cytryna'],
      ['Herbata', '— sypane lub sezonowe'],
    ],
    ciasta: [
      ['Szarlotka', '— jabłka, cynamon, opcjonalnie z lodami i bitą śmietaną'],
      ['Brownie', '— mocno czekoladowe, lekko podgrzane'],
      ['Ciasto marchewkowe', '— aromatyczne, z delikatną masą'],
      ['Malinowa Chmurka', '— krucha i kremowa'],
      ['Sernik pistacjowy', '— ulubieniec naszych gości'],
      ['Monoporcja', '— wyjątkowy deser w różnych smakowych odsłonach'],
    ],
    dzieciaki: [
      ['Tosty', '— z serem i szynką'],
      ['Gofry', '— solo, z cukrem pudrem, bitą śmietaną, frużeliną lub kremem pistacjowym'],
      ['Kolorowa galaretka', '— lekki deser w wersji solo, lub z bitą śmietaną'],
      ['Bejbiczino / Mleko / Kakao / Naturalne soki tłoczone', '— '],
    ],
  }

  const tabs = [
    { id: 'kawa', label: 'Kawa & napoje' },
    { id: 'ciasta', label: 'Ciasta' },
    { id: 'dzieciaki', label: 'Dla dzieci' },
  ]

  return (
    <section id="menu" className="menu">
      <div className="shell menu-grid">
        <div className="menu-left">
          <Reveal className="eyebrow">[ Kawiarnia ]</Reveal>
          <Reveal delay={80}>
            <h2 className="menu-h">
              Kawa, dla której<br />
              <span className="hero-italic">tu wracasz.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg menu-sub">
            Specialty kawa, domowe ciasta, menu dla dzieci.
            Kawiarnia obok sali zabaw — pijesz, jesz, dziecko bawi się w zasięgu wzroku.
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
            * Pełne, aktualne menu z cenami znajdziesz na miejscu. Wybór ciast zmienia się wraz z dostępnością świeżych wypieków.
          </div>

          <Reveal delay={120}>
            <Link href="/kawiarnia/" className="btn btn-ghost menu-cta">
              Sprawdź kawiarnię <IconArrow size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="menu-right">
          <Reveal className="menu-photo-wrap">
            <ImgReveal src="/assets/zdjecia/kawiarnia/KAWIARNIA 6.webp" alt="Kawiarnia w Bawisz" />
            <div className="menu-photo-cap">
              <div className="display">Kawa i ciasto</div>
              <div className="body-sm">Tymczasem dzieci bawią się tuż obok.</div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .menu { padding: 120px 0 100px; background: var(--cream); border-top: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); }
        .menu-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: start; }
        @media (max-width: 980px) { .menu-grid { grid-template-columns: 1fr; gap: 40px; } }

        .menu-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 16px 0 20px;
          color: var(--ink);
        }
        .menu-sub { max-width: 50ch; margin-bottom: 36px; }

        .menu-tabs {
          display: flex;
          gap: 6px;
          padding: 6px;
          background: var(--paper);
          border: 1px solid var(--line-soft);
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
          background: var(--brand-deep);
          color: var(--bone);
        }
        @media (max-width: 480px) { .menu-tab { padding: 9px 14px; font-size: 12px; } }

        .menu-list { display: flex; flex-direction: column; }
        .menu-item {
          display: flex;
          align-items: baseline;
          gap: 14px;
          padding: 16px 0;
          border-top: 1px dashed var(--line-soft);
          animation: fade-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .menu-item:last-child { border-bottom: 1px dashed var(--line-soft); }
        .menu-item-l { flex-shrink: 0; }
        .menu-item-n { font-weight: 700; color: var(--ink); font-size: 16px; }
        .menu-item-d { color: var(--ink-mute); font-size: 13px; margin-top: 2px; max-width: 36ch; }
        .menu-dotted { flex: 1; border-bottom: 1px dotted var(--line-soft); transform: translateY(-4px); }
        .menu-item-p { font-size: 26px; color: var(--rose-deep); white-space: nowrap; }
        .menu-item-p span { font-size: 13px; opacity: 0.7; }

        .menu-foot { margin-top: 18px; }
        .menu-cta { margin-top: 24px; }

        .menu-right { position: sticky; top: 110px; }
        .menu-photo-wrap {
          position: relative;
          aspect-ratio: 4/5;
          border: 1px solid var(--line-soft);
          border-radius: var(--r-xl);
          overflow: hidden;
          box-shadow: 0 30px 80px -30px rgba(119,98,88,0.35);
        }
        .menu-photo-wrap .img-reveal { width: 100%; height: 100%; }
        .menu-photo-cap {
          position: absolute;
          left: 18px;
          bottom: 18px;
          right: 18px;
          padding: 14px 18px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-md);
          box-shadow: 0 4px 18px -10px rgba(168,128,98,0.3);
        }
        .menu-photo-cap .display { font-size: 24px; color: var(--ink); }
      `}</style>
    </section>
  )
}
