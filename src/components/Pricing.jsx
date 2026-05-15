import { Link } from 'wouter'
import { Reveal } from './Reveal.jsx'
import { Decoration } from './Decoration.jsx'
import { IconArrow } from './icons.jsx'
import { AnimalDeer, AnimalBear, AnimalFox, AnimalWolf } from './animals.jsx'

export function Pricing() {
  const tiers = [
    { time: '1h', price: '25', Animal: AnimalDeer, bg: 'var(--bone)', shift: -12 },
    { time: '1,5 h', price: '29', Animal: AnimalBear, bg: 'var(--paper)', shift: -9 },
    { time: '2 h', price: '33', Animal: AnimalFox, bg: 'var(--bone)', shift: -16 },
    { time: 'NO\u00a0LIMIT', price: '45', Animal: AnimalWolf, bg: 'var(--paper)', noLimit: true, shift: -12 },
  ]

  const giftCard = [
    { label: '1 wejście × 1,5 h', price: '29 zł' },
    { label: '3 wejścia × 1,5 h', price: '75 zł' },
    { label: '5 wejść × 1,5 h', price: '135 zł' },
  ]

  return (
    <section id="cennik" className="prc">
      <Decoration
        type="balloon"
        color="var(--rose)"
        size={110}
        rotate={10}
        opacity={0.6}
        style={{ right: '6%', top: '70px' }}
      />
      <div className="shell">
        <div className="prc-head">
          <Reveal className="eyebrow">[ Cennik ]</Reveal>
          <Reveal delay={80}>
            <h2 className="prc-h">
              Wstęp od 25 zł. <span className="hero-italic">Bez niespodzianek i naliczania minutowego.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg prc-sub">
            Cztery pakiety czasowe, jeden karnet miesięczny, karty podarunkowe od 29 zł.
            Opiekun zawsze gratis, rodzeństwo −25%.
          </Reveal>
        </div>

        <div className="prc-grid">
          {tiers.map((t, i) => (
            <Reveal key={t.time} delay={i * 100} className="prc-tier" style={{ background: t.bg }}>
              <div className="prc-animal" style={{ '--shift': `${t.shift}px` }}>
                <t.Animal size={140} />
              </div>
              <div className="prc-time-circle">
                <span className={t.noLimit ? 'prc-time-small' : 'prc-time'}>{t.time}</span>
              </div>
              <div className="prc-price-circle">
                <span className="prc-price">{t.price} zł</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="prc-discount">
          Zniżki dla rodzeństwa <strong>−25%</strong> <span className="prc-discount-mute">(drugie i kolejne dziecko)</span>
        </Reveal>

        <Reveal className="prc-row-feature">
          <div className="prc-row-feature-l">
            <div className="prc-row-feature-h">Karnet miesięczny</div>
            <div className="prc-row-feature-s">no limit · cały miesiąc kalendarzowy</div>
          </div>
          <div className="prc-row-feature-r">215 zł</div>
        </Reveal>

        <Reveal className="prc-gift">
          <div className="prc-gift-h">Karta podarunkowa</div>
          <div className="prc-gift-list">
            {giftCard.map(({ label, price }) => (
              <div key={label} className="prc-gift-row">
                <span className="prc-gift-label">{label}</span>
                <span className="prc-gift-dots" aria-hidden="true" />
                <span className="prc-gift-price">{price}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="prc-cta-row">
          <Link href="/urodziny/" className="btn btn-pop">
            Cennik urodzin <IconArrow size={16} />
          </Link>
          <Link href="/oferta-grupowa/" className="btn btn-pop">
            Cennik grupowy <IconArrow size={16} />
          </Link>
          <a href="tel:+48693766049" className="btn btn-ghost">Zadzwoń · 693 766 049</a>
        </Reveal>
      </div>

      <style>{`
        .prc { padding: 110px 0 90px; background: var(--bone); }
        .prc-head { max-width: 760px; margin: 0 auto 60px; text-align: center; }
        .prc-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 14px 0 18px;
          color: var(--ink);
          text-transform: uppercase;
        }
        .prc-h .hero-italic { text-transform: none; }
        .prc-sub { max-width: 56ch; margin: 0 auto; }

        .prc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 36px;
          max-width: 880px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 900px) { .prc-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }

        .prc-tier {
          position: relative;
          padding: 14px 12px 24px;
          border-radius: var(--r-lg);
          border: 1px solid var(--line-soft);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 6px 26px -18px rgba(168,128,98,0.5);
          transition: transform .35s ease;
        }
        .prc-tier:hover { transform: translateY(-6px); }

        .prc-animal {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: -55px;
          position: relative;
          z-index: 0;
          pointer-events: none;
        }
        .prc-animal > span { transform: translateY(var(--shift, 0)); }
        .prc-animal svg,
        .prc-animal img { display: block; filter: drop-shadow(0 4px 8px rgba(91,71,55,0.15)); }
        @media (max-width: 520px) {
          .prc-animal { margin-bottom: -38px; }
          .prc-animal > span { transform: translateY(calc(var(--shift, 0) * 0.7)); width: 100px !important; height: 100px !important; }
          .prc-animal svg { width: 100px !important; height: 100px !important; }
        }

        .prc-time-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px -10px rgba(119,98,88,0.4);
          border: 1px solid var(--line-soft);
          z-index: 2;
          position: relative;
        }
        @media (max-width: 520px) { .prc-time-circle { width: 78px; height: 78px; } }

        .prc-time {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 34px;
          color: var(--brand-deep);
          letter-spacing: -0.01em;
        }
        @media (max-width: 520px) { .prc-time { font-size: 26px; } }

        .prc-time-small {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          line-height: 1.05;
          letter-spacing: 0.06em;
          color: var(--brand-deep);
          text-align: center;
          text-transform: uppercase;
        }
        @media (max-width: 520px) { .prc-time-small { font-size: 11px; } }

        .prc-price-circle {
          margin-top: -26px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--brand);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 12px 28px -16px rgba(119,98,88,0.55);
          z-index: 0;
        }
        @media (max-width: 520px) { .prc-price-circle { width: 78px; height: 78px; margin-top: -20px; } }

        .prc-price {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 26px;
          color: #fff;
          letter-spacing: -0.01em;
        }
        @media (max-width: 520px) { .prc-price { font-size: 19px; } }

        .prc-discount {
          text-align: center;
          font-size: 17px;
          color: var(--ink-soft);
          margin: 14px 0 50px;
        }
        .prc-discount strong { color: var(--brand-deep); font-weight: 800; }
        .prc-discount-mute { color: var(--ink-mute); }

        .prc-row-feature {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 28px 36px;
          border-top: 1.5px solid var(--brand);
          border-bottom: 1.5px solid var(--brand);
          margin-bottom: 36px;
        }
        @media (max-width: 600px) { .prc-row-feature { flex-direction: column; padding: 22px 20px; text-align: center; } }
        .prc-row-feature-h {
          font-family: var(--font-heading);
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--ink);
          text-transform: uppercase;
        }
        .prc-row-feature-s {
          font-size: 14px;
          color: var(--ink-mute);
          margin-top: 4px;
        }
        .prc-row-feature-r {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 4vw, 42px);
          color: var(--brand-deep);
          letter-spacing: -0.01em;
        }

        .prc-gift { margin-bottom: 40px; }
        .prc-gift-h {
          font-family: var(--font-heading);
          font-size: clamp(22px, 2.6vw, 28px);
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--ink);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .prc-gift-list { display: flex; flex-direction: column; }
        .prc-gift-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          padding: 14px 4px;
          border-bottom: 1px dashed var(--line);
          font-size: 16px;
          color: var(--ink-soft);
        }
        .prc-gift-row:first-child { border-top: 1px dashed var(--line); }
        .prc-gift-label { letter-spacing: 0.04em; text-transform: uppercase; font-weight: 600; color: var(--brand); font-size: 14px; }
        .prc-gift-dots { flex: 1; border-bottom: 2px dotted var(--line); transform: translateY(-4px); }
        .prc-gift-price {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 22px;
          color: var(--brand-deep);
        }

        .prc-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
