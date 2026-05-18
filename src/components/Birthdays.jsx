import { Reveal } from './Reveal.jsx'
import { IconArrow } from './icons.jsx'
import { Decoration } from './Decoration.jsx'
import { AnimalBear, AnimalFox, AnimalDeer } from './animals.jsx'
import { CONTACT, telHref } from '../data/contact.js'

export function Birthdays({ onBookBirthday }) {
  const mini = {
    name: 'MINI',
    time: '2 h',
    price: '45',
    Animal: AnimalBear,
    shift: -6,
    perks: [],
    snacks: [
      'woda no limit',
      'sok tłoczony 200 ml/os.',
      'paluszki',
      'OTO chrupki',
      'galaretki',
    ],
    decor: [
      'kolorowa zastawa lub w naturalnym stylu',
      'balon cyfra',
    ],
  }

  const standard = {
    name: 'STANDARD',
    time: '2,5 h',
    price: '74',
    Animal: AnimalFox,
    shift: -16,
    perks: [
      'sala na wyłączność',
      'minimum 10 dzieci',
      'prezent dla solenizanta',
    ],
    snacks: [
      'woda no limit',
      'sok tłoczony no limit',
      'owoce · paluszki',
      'OTO chrupki · gofry',
      'cake pops lub babeczki · galaretki',
    ],
    decor: [
      'zastawa stołowa w wybranym motywie',
      'ścianka dekoracyjna',
      'balon cyfra',
      'girlanda balonowa na sali zabaw',
      'cyfrowe zaproszenia w wybranej tematyce',
    ],
    featured: true,
  }

  const parents = {
    name: 'DLA RODZICÓW',
    timeLabel: 'NA CZAS PRZYJĘCIA',
    timeSmall: true,
    price: '55',
    Animal: AnimalDeer,
    shift: -10,
    perks: [],
    snacks: [
      'woda · sok · lemoniada',
      'kawa · herbata',
      'deska przekąsek (bagietka z serkiem i wędzonym łososiem, 3 rodzaje serów, krakersy, orzechy, kabanosy, winogrona, oliwki)',
    ],
    decor: [
      'wydzielony stół z elegancką zastawą',
    ],
  }

  return (
    <section id="urodziny" className="bd">
      <Decoration
        type="balloon"
        color="var(--rose)"
        size={120}
        rotate={-12}
        opacity={0.55}
        style={{ left: '4%', top: '90px' }}
      />
      <div className="shell">
        <div className="bd-head">
          <Reveal className="eyebrow">[ Urodziny ]</Reveal>
          <Reveal delay={80}>
            <h2 className="bd-h">
              Oferta <span className="hero-italic">urodzinowa</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg bd-sub">
            Urodziny, roczki i inne rodzinne przyjęcia z udziałem dzieci  w wyjątkowej atmosferze. Możliwość rezerwacji sali na wyłączność. Dekoracje, poczęstunek i cała organizacja po naszej stronie- Ty cieszysz się czasem z dzieckiem i gośćmi, bez stresu i sprzątania.
          </Reveal>
        </div>

        <div className="bd-grid">
          {[mini, standard, parents].map((pkg) => (
            <Reveal key={pkg.name} className={`bd-card ${pkg.featured ? 'bd-featured' : ''}`}>
              {pkg.featured && <div className="bd-badge">Najczęściej wybierany</div>}

              <div className="bd-card-head">
                <div className="bd-card-name">{pkg.name}</div>
                <div className="bd-card-rule" />
              </div>

              <div className="bd-card-body">
                <div className="bd-card-text">
                  {pkg.perks.length > 0 && (
                    <ul className="bd-perks">
                      {pkg.perks.map((perk) => <li key={perk}>{perk}</li>)}
                    </ul>
                  )}

                  <div className="bd-section-h">Poczęstunek</div>
                  <ul className="bd-list">
                    {pkg.snacks.map((s) => <li key={s}>{s}</li>)}
                  </ul>

                  <div className="bd-section-h">Dekoracje</div>
                  <ul className="bd-list">
                    {pkg.decor.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>

                <div className="bd-card-visual">
                  <div className="bd-animal" style={{ '--shift': `${pkg.shift}px` }}>
                    <pkg.Animal size={120} hat />
                  </div>
                  <div className="bd-time-circle">
                    <span className={pkg.timeSmall ? 'bd-time-small' : 'bd-time'}>
                      {pkg.timeLabel ?? pkg.time}
                    </span>
                  </div>
                  <div className="bd-price-circle">
                    <span className="bd-price">{pkg.price} zł</span>
                    <span className="bd-price-unit">/os.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="bd-cta-row">
          <button className="btn btn-pop" onClick={onBookBirthday}>
            Zarezerwuj urodziny <IconArrow size={16} />
          </button>
          <a href={telHref} className="btn btn-ghost">Zadzwoń · {CONTACT.phoneDisplay}</a>
        </Reveal>
      </div>

      <style>{`
        .bd { padding: 110px 0 90px; background: var(--paper); }
        .bd-head { max-width: 760px; margin: 0 auto 60px; text-align: center; }
        .bd-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 14px 0 18px;
          color: var(--ink);
          text-transform: uppercase;
        }
        .bd-h .hero-italic { text-transform: none; }
        .bd-sub { max-width: 60ch; margin: 0 auto; }

        .bd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        @media (max-width: 720px) { .bd-grid { gap: 28px; } }

        .bd-card {
          position: relative;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          padding: 36px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 8px 30px -20px rgba(168,128,98,0.5);
        }
        @media (max-width: 720px) { .bd-card { padding: 30px 24px; } }

        .bd-card-body {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 720px) { .bd-card-body { grid-template-columns: 1fr; gap: 20px; } }

        .bd-featured {
          border-color: var(--brand);
          box-shadow: 0 14px 40px -22px rgba(119,98,88,0.6);
        }

        .bd-badge {
          position: absolute;
          top: -14px;
          left: 28px;
          background: var(--brand-deep);
          color: var(--bone);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          padding: 6px 14px;
          border-radius: var(--r-pill);
          text-transform: uppercase;
        }

        .bd-card-name {
          font-family: var(--font-heading);
          font-size: clamp(30px, 2.6vw, 38px);
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--ink);
          text-transform: uppercase;
          line-height: 1.05;
          word-break: break-word;
          hyphens: auto;
        }
        @media (max-width: 720px) { .bd-card-name { font-size: 42px; } }
        .bd-card-rule {
          height: 2px;
          background: var(--brand);
          width: 80%;
          max-width: 220px;
          margin: 14px 0 22px;
        }

        .bd-perks {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .bd-perks li {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brand);
        }

        .bd-section-h {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--ink);
          text-transform: uppercase;
          margin: 6px 0 12px;
        }
        .bd-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .bd-list li {
          font-size: 16px;
          line-height: 1.45;
          color: var(--ink-soft);
          font-weight: 500;
        }

        .bd-card-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 6px;
          gap: 0;
        }
        @media (max-width: 720px) { .bd-card-visual { padding-top: 14px; } }

        .bd-animal {
          margin-bottom: -55px;
          position: relative;
          z-index: 0;
          pointer-events: none;
        }
        .bd-animal > span { transform: translateY(var(--shift, 0)); }
        .bd-animal svg,
        .bd-animal img { display: block; filter: drop-shadow(0 4px 8px rgba(91,71,55,0.15)); }
        @media (max-width: 520px) {
          .bd-animal { margin-bottom: -38px; }
          .bd-animal > span { transform: translateY(calc(var(--shift, 0) * 0.7)); width: 100px !important; height: 100px !important; }
          .bd-animal svg { width: 100px !important; height: 100px !important; }
        }

        .bd-time-circle {
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
        @media (max-width: 520px) { .bd-time-circle { width: 78px; height: 78px; } }

        .bd-time {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 32px;
          color: var(--brand-deep);
          letter-spacing: -0.01em;
        }
        @media (max-width: 520px) { .bd-time { font-size: 24px; } }

        .bd-time-small {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 12px;
          line-height: 1.1;
          letter-spacing: 0.05em;
          color: var(--brand-deep);
          text-align: center;
          text-transform: uppercase;
          padding: 0 8px;
        }
        @media (max-width: 520px) { .bd-time-small { font-size: 10px; padding: 0 6px; } }

        .bd-price-circle {
          margin-top: -26px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--brand);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 12px 28px -16px rgba(119,98,88,0.55);
          z-index: 1;
        }
        @media (max-width: 520px) { .bd-price-circle { width: 78px; height: 78px; margin-top: -20px; } }

        .bd-price {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 24px;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        @media (max-width: 520px) { .bd-price { font-size: 18px; } }

        .bd-price-unit {
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          opacity: 0.9;
          margin-top: 2px;
          letter-spacing: 0.04em;
        }
        @media (max-width: 520px) { .bd-price-unit { font-size: 10px; } }

        .bd-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
