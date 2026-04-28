import { Reveal } from './Reveal.jsx'
import { IconBlock, IconCoffee, IconCake, IconPalette, IconArrow } from './icons.jsx'

export function Offer() {
  const items = [
    {
      n: '01',
      icon: IconBlock,
      t: 'Sala zabaw',
      s: 'Drewniane konstrukcje, tunele, zjeżdżalnia, klocki i strefa sensoryczna. Miejsce dla maluchów i starszych dzieci — każdy znajdzie coś dla siebie.',
      tags: ['0–12 lat', 'Sensoryka', 'Drewno'],
      tone: 'sage',
    },
    {
      n: '02',
      icon: IconCoffee,
      t: 'Kawiarnia',
      s: 'Kawa, herbata, ciasta i przekąski. Wygodne miejsce dla rodziców — usiądź, odpocznij, miej dzieci na oku.',
      tags: ['Kawa', 'Ciasta', 'Przekąski'],
      tone: 'cream',
    },
    {
      n: '03',
      icon: IconCake,
      t: 'Urodziny',
      s: 'Dwa pakiety urodzinowe, motywy lasu i kwiatów, opcja sali na wyłączność. Dekoracje, poczęstunek i prezent dla solenizanta — my zajmujemy się resztą.',
      tags: ['MINI · STANDARD', 'Sala na wyłączność', 'Prezent od nas'],
      tone: 'pop',
    },
    {
      n: '04',
      icon: IconPalette,
      t: 'Warsztaty',
      s: 'Plastyka, sensoplastyka, wspólne tworzenie. Daj dziecku spróbować czegoś nowego — w spokojnej atmosferze i niewielkiej grupie.',
      tags: ['Plastyka', 'Sensoplastyka', 'Małe grupy'],
      tone: 'sage',
    },
  ]

  return (
    <section id="oferta" className="offer">
      <div className="shell">
        <div className="offer-head">
          <Reveal className="eyebrow">[ Co u nas znajdziesz ]</Reveal>
          <Reveal delay={80}>
            <h2 className="display offer-h">
              Cztery powody,<br />
              żeby zostać <span className="hero-italic">na dłużej.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg offer-sub">
            Bawialnia, kawiarnia, urodziny i warsztaty — wszystko w jednej, drewnianej przestrzeni.
            Wchodzisz na chwilę, zostajesz na trzy godziny.
          </Reveal>
        </div>

        <div className="offer-grid">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={i * 100} className={`offer-card tone-${item.tone}`}>
              <div className="offer-card-top">
                <div className="display offer-num">{item.n}</div>
                <div className="offer-icon"><item.icon size={26} /></div>
              </div>
              <h3 className="display offer-title">{item.t}</h3>
              <p className="offer-desc body-md">{item.s}</p>
              <div className="offer-tags">
                {item.tags.map((tag) => <span key={tag} className="offer-tag">{tag}</span>)}
              </div>
              <div className="offer-arrow"><IconArrow size={20} /></div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .offer { padding: 120px 0 100px; background: var(--cream); }
        .offer-head { max-width: 820px; margin: 0 0 64px; }
        .offer-h { font-size: clamp(40px, 6.5vw, 88px); margin: 16px 0 28px; color: var(--ink); }
        .offer-sub { max-width: 56ch; }

        .offer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        @media (max-width: 820px) { .offer-grid { grid-template-columns: 1fr; } }

        .offer-card {
          position: relative;
          padding: 36px 32px 32px;
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
          min-height: 320px;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, background 0.35s;
        }
        .offer-card:hover { transform: translateY(-4px); }
        .offer-card.tone-sage { background: var(--sage); color: var(--forest-deep); }
        .offer-card.tone-cream { background: var(--bone); color: var(--ink); }
        .offer-card.tone-pop { background: var(--terracotta); color: var(--bone); }

        .offer-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
        }
        .offer-num { font-size: 56px; line-height: 1; opacity: 0.85; }
        .offer-icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .offer-title { font-size: 38px; margin: 0 0 14px; }
        .offer-desc { color: inherit; opacity: 0.9; max-width: 42ch; }
        .offer-card.tone-pop .offer-desc { opacity: 0.95; }

        .offer-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 22px; }
        .offer-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: var(--r-pill);
          border: 1.5px solid currentColor;
          opacity: 0.85;
        }

        .offer-arrow {
          position: absolute;
          right: 24px;
          bottom: 24px;
          opacity: 0.6;
          transition: transform 0.3s, opacity 0.3s;
        }
        .offer-card:hover .offer-arrow { transform: translate(6px, -6px); opacity: 1; }
      `}</style>
    </section>
  )
}
