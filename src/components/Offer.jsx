import { Reveal } from './Reveal.jsx'
import { IconBlock, IconCoffee, IconCake, IconPalette, IconArrow } from './icons.jsx'
import { Decoration } from './Decoration.jsx'

export function Offer() {
  const items = [
    {
      n: '01',
      icon: IconBlock,
      t: 'Sala zabaw',
      s: 'Drewniane konstrukcje, tunele, zjeżdżalnia, klocki i strefa sensoryczna. Miejsce dla maluchów i starszych dzieci — każdy znajdzie coś dla siebie.',
      tags: ['0–12 lat', 'Sensoryka', 'Drewno'],
      tone: 'cream',
    },
    {
      n: '02',
      icon: IconCoffee,
      t: 'Kawiarnia',
      s: 'Kawa, herbata, ciasta i przekąski. Wygodne miejsce dla rodziców — usiądź, odpocznij, miej dzieci na oku.',
      tags: ['Kawa', 'Ciasta', 'Przekąski'],
      tone: 'sage',
    },
    {
      n: '03',
      icon: IconCake,
      t: 'Urodziny',
      s: 'Dwa pakiety urodzinowe, motywy lasu i kwiatów, opcja sali na wyłączność. Dekoracje, poczęstunek i prezent dla solenizanta — my zajmujemy się resztą.',
      tags: ['MINI · STANDARD', 'Sala na wyłączność', 'Prezent od nas'],
      tone: 'cream',
    },
    {
      n: '04',
      icon: IconPalette,
      t: 'Warsztaty',
      s: 'Plastyka, sensoplastyka, wspólne tworzenie. Daj dziecku spróbować czegoś nowego — w spokojnej atmosferze i niewielkiej grupie.',
      tags: ['Plastyka', 'Sensoplastyka', 'Małe grupy'],
      tone: 'cream',
    },
  ]

  return (
    <section id="oferta" className="offer">
      <Decoration
        type="pencil"
        color="var(--brand-soft)"
        size={140}
        rotate={-18}
        opacity={0.6}
        style={{ right: '5%', top: '70px' }}
      />
      <div className="shell">
        <div className="offer-head">
          <Reveal className="eyebrow">[ Co u nas znajdziesz ]</Reveal>
          <Reveal delay={80}>
            <h2 className="offer-h">
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
                <div className="offer-num">{item.n}</div>
                <div className="offer-icon"><item.icon size={24} /></div>
              </div>
              <h3 className="offer-title">{item.t}</h3>
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
        .offer { padding: 110px 0 90px; background: var(--cream); }
        .offer-head { max-width: 820px; margin: 0 0 56px; }
        .offer-h {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 14px 0 24px;
          color: var(--ink);
        }
        .offer-sub { max-width: 56ch; }

        .offer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 820px) { .offer-grid { grid-template-columns: 1fr; } }

        .offer-card {
          position: relative;
          padding: 36px 32px 32px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          min-height: 300px;
          display: flex;
          flex-direction: column;
          color: var(--ink);
          transition: transform 0.35s ease, box-shadow 0.35s;
          box-shadow: 0 4px 24px -16px rgba(168,128,98,0.35);
        }
        .offer-card:hover { transform: translateY(-4px); box-shadow: 0 18px 42px -22px rgba(168,128,98,0.5); }
        .offer-card.tone-sage  { background: var(--sage); }
        .offer-card.tone-cream { background: var(--bone); }
        .offer-card.tone-sand  { background: var(--sand); }
        .offer-card.tone-rose  { background: var(--rose-soft); }

        .offer-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .offer-num {
          font-family: var(--font-display);
          font-size: 52px;
          font-weight: 700;
          line-height: 1;
          color: var(--brand-deep);
          opacity: 0.85;
        }
        .offer-icon {
          width: 54px; height: 54px;
          border-radius: 50%;
          background: var(--rose-soft);
          color: var(--brand-deep);
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .offer-card.tone-sage .offer-icon { background: rgba(255,253,248,0.55); }

        .offer-title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 30px;
          line-height: 1.1;
          margin: 0 0 12px;
          color: var(--ink);
        }
        .offer-desc { color: var(--ink-soft); max-width: 42ch; font-weight: 500; }

        .offer-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 22px; }
        .offer-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 5px 11px;
          border-radius: var(--r-pill);
          background: var(--cream-deep);
          color: var(--brand-deep);
          border: none;
        }
        .offer-card.tone-sage .offer-tag { background: rgba(255,253,248,0.5); color: var(--ink); }

        .offer-arrow {
          position: absolute;
          right: 24px;
          bottom: 24px;
          color: var(--brand);
          opacity: 0.6;
          transition: transform 0.3s, opacity 0.3s;
        }
        .offer-card:hover .offer-arrow { transform: translate(6px, -6px); opacity: 1; }
      `}</style>
    </section>
  )
}
