import { Link } from 'wouter'
import { Reveal } from './Reveal.jsx'
import { IconArrow } from './icons.jsx'

export function Offer() {
  const items = [
    {
      n: '01',
      img: '/assets/animals/Canva_zwierzatka_bez_tła_cennik.webp',
      t: 'Sala zabaw',
      s: '220 m² naturalnej przestrzeni Montessori — drewniane zabawki, domki i strefy dla najmłodszych i starszych. Miejsce stworzone do swobodnej zabawy i spędzania czasu z dzieckiem.',
      tags: ['0–10 lat', 'Montessori', 'Drewno'],
      tone: 'cream',
      href: '/o-nas/',
      type: 'route',
      cta: 'Czytaj więcej o Bawisz',
    },
    {
      n: '02',
      img: '/assets/animals/zapisane_relacje_wypieki.webp',
      t: 'Kawiarnia',
      s: 'Kawa specialty, domowe ciasta, menu dla dzieci. Pijesz kawę w kawiarni — dziecko bezpiecznie bawi się w zasięgu wzroku.',
      tags: ['Specialty', 'Domowe ciasta'],
      tone: 'sage',
      href: '/kawiarnia/',
      type: 'route',
      cta: 'Zobacz menu kawiarni',
    },
    {
      n: '03',
      img: '/assets/animals/zapisane_relacje_urodzinki.webp',
      t: 'Urodziny',
      s: 'Pakiet MINI albo STANDARD. Pakiet DLA RODZICÓW. Ty wybierasz, my robimy resztę — dekoracje, poczęstunek, prezent dla solenizanta.',
      tags: ['MINI · STANDARD', 'Sala na wyłączność', 'Prezent od nas'],
      tone: 'cream',
      href: '/urodziny/',
      type: 'route',
      cta: 'Zobacz pakiety urodzinowe',
    },
    {
      n: '04',
      img: '/assets/animals/zapisane_relacje_warsztaty.webp',
      t: 'Warsztaty',
      s: `Tematyczne, okazjonalne a także cykliczne zajęcia dla dzieci.
Od warsztatów plastycznych, przez muzyczne, po ruchowe i sensoryczne, zawsze kreatywne, angażujące i dopasowane do wieku oraz rozwoju dziecka.`,
      tags: ['Plastyka', 'Gimnastyka', 'Małe grupy'],
      tone: 'cream',
      href: '/warsztaty/',
      type: 'route',
      cta: 'Sprawdź warsztaty',
    },
  ]

  return (
    <section id="oferta" className="offer">
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
            Bawialnia, kawiarnia, urodziny, przyjęcia  i warsztaty — wszystko w jednej drewnianej przestrzeni
            przy ul. Krzywej 19B w Nowym Targu. Wchodzisz na chwilę, zostajesz na dłużej.
          </Reveal>
        </div>

        <div className="offer-grid">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={i * 100} className={`offer-card tone-${item.tone} peek-${i % 4}`}>
              <div className="offer-peek" aria-hidden="true">
                <img src={item.img} alt="" width={140} height={140} loading="lazy" />
              </div>
              <div className="offer-card-top">
                <div className="offer-num">{item.n}</div>
              </div>
              <h3 className="offer-title">{item.t}</h3>
              <p className="offer-desc body-md">{item.s}</p>
              <div className="offer-tags">
                {item.tags.map((tag) => <span key={tag} className="offer-tag">{tag}</span>)}
              </div>
              {item.type === 'route' ? (
                <Link href={item.href} className="offer-link">
                  <span>{item.cta}</span>
                  <IconArrow size={16} />
                </Link>
              ) : (
                <a href={item.href} className="offer-link">
                  <span>{item.cta}</span>
                  <IconArrow size={16} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .offer { padding: 90px 0 70px; background: var(--cream); }
        .offer-head { max-width: 820px; margin: 0 0 40px; }
        .offer-h {
          font-family: var(--font-heading);
          font-size: clamp(38px, 5.2vw, 64px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 12px 0 18px;
          color: var(--ink);
        }
        .offer-sub { max-width: 56ch; }

        .offer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 820px) { .offer-grid { grid-template-columns: 1fr; } }

        .offer-grid { padding-top: 70px; }

        .offer-card {
          position: relative;
          padding: 22px 24px 20px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          min-height: 0;
          display: flex;
          flex-direction: column;
          color: var(--ink);
          transition: transform 0.35s ease, box-shadow 0.35s;
          box-shadow: 0 4px 24px -16px rgba(168,128,98,0.35);
          cursor: pointer;
          overflow: visible;
        }
        .offer-card:hover { transform: translateY(-4px); box-shadow: 0 18px 42px -22px rgba(168,128,98,0.5); }
        .offer-card.tone-sage  { background: var(--sage); }
        .offer-card.tone-cream { background: var(--bone); }
        .offer-card.tone-sand  { background: var(--sand); }
        .offer-card.tone-rose  { background: var(--rose-soft); }

        .offer-peek {
          position: absolute;
          width: 140px;
          height: 140px;
          pointer-events: none;
          z-index: 1;
          filter: drop-shadow(0 8px 14px rgba(91,71,55,0.18));
          transition: transform 0.4s ease;
        }
        .offer-peek img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .offer-card.peek-0 .offer-peek { top: -78px; right: -8px; transform: rotate(8deg); }
        .offer-card.peek-1 .offer-peek { top: -82px; right: -6px; transform: rotate(10deg); }
        .offer-card.peek-2 .offer-peek { top: -80px; right: -10px; transform: rotate(7deg); }
        .offer-card.peek-3 .offer-peek { top: -84px; right: -4px; transform: rotate(9deg); }

        .offer-card.peek-0:hover .offer-peek { transform: rotate(11deg) translateY(-6px); }
        .offer-card.peek-1:hover .offer-peek { transform: rotate(13deg) translateY(-6px); }
        .offer-card.peek-2:hover .offer-peek { transform: rotate(10deg) translateY(-6px); }
        .offer-card.peek-3:hover .offer-peek { transform: rotate(12deg) translateY(-6px); }

        .offer-card-top {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 12px;
        }
        .offer-num {
          font-family: var(--font-display);
          font-size: 38px;
          font-weight: 700;
          line-height: 1;
          color: var(--brand-deep);
          opacity: 0.85;
        }

        @media (max-width: 820px) {
          .offer-peek { width: 110px; height: 110px; }
          .offer-card.peek-0 .offer-peek,
          .offer-card.peek-1 .offer-peek,
          .offer-card.peek-2 .offer-peek,
          .offer-card.peek-3 .offer-peek { top: -64px; right: -6px; }
        }

        .offer-title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 22px;
          line-height: 1.15;
          margin: 0 0 8px;
          color: var(--ink);
        }
        .offer-desc { color: var(--ink-soft); max-width: 42ch; font-weight: 500; font-size: 14px; line-height: 1.5; }

        .offer-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 14px; }
        .offer-tag {
          font-size: 10px;
          font-weight: 700;
          padding: 4px 9px;
          border-radius: var(--r-pill);
          background: var(--cream-deep);
          color: var(--brand-deep);
          border: none;
        }
        .offer-card.tone-sage .offer-tag { background: rgba(255,253,248,0.5); color: var(--ink); }

        .offer-link {
          margin-top: auto;
          padding-top: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--brand-deep);
          letter-spacing: 0.005em;
          align-self: flex-start;
          transition: gap 0.25s, color 0.25s;
        }
        .offer-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--r-lg);
        }
        .offer-link span {
          position: relative;
          padding-bottom: 2px;
          background-image: linear-gradient(currentColor, currentColor);
          background-size: 100% 1.5px;
          background-repeat: no-repeat;
          background-position: 0 100%;
        }
        .offer-card:hover .offer-link { gap: 12px; color: var(--ink); }
      `}</style>
    </section>
  )
}
