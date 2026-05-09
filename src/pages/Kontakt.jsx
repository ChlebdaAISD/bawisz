import { useEffect } from 'react'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import {
  IconArrow,
  IconPhone,
  IconInstagram,
  IconFacebook,
  IconPin,
  IconClock,
  IconNav,
  IconArrowUp,
} from '../components/icons.jsx'
import { KONTAKT_FAQ as FAQ, KONTAKT_META as META } from '../data/kontakt.js'
import { updateHead } from '../lib/head.js'

const CHANNELS = [
  {
    icon: IconPhone,
    label: '+48 693 766 049',
    sub: 'Odbieramy najszybciej. SMS poza godzinami — oddzwaniamy rano.',
    href: 'tel:+48693766049',
    external: false,
  },
  {
    icon: IconInstagram,
    label: '@bawisz_bawialnia',
    sub: 'Codzienne kadry z sali, stories z urodzin. DM jak telefon.',
    href: 'https://www.instagram.com/bawisz_bawialnia/',
    external: true,
  },
  {
    icon: IconFacebook,
    label: 'Bawisz · bawialnia Montessori',
    sub: 'Wydarzenia, warsztaty, info dla grup. Messenger sprawdzamy w godzinach.',
    href: 'https://www.facebook.com/p/Bawisz-bawialnia-Montessori-61572522181693/',
    external: true,
  },
  {
    icon: IconNav,
    label: 'Krzywa 19B, Nowy Targ',
    sub: 'Centrum miasta, dwie minuty od Rynku, parking obok lokalu.',
    href: 'https://maps.google.com/?q=Krzywa+19B+Nowy+Targ',
    external: true,
  },
]

const SCHEDULE = [
  { day: 'Poniedziałek', hours: '10:00 — 19:00', i: 1 },
  { day: 'Wtorek',       hours: '10:00 — 19:00', i: 2 },
  { day: 'Środa',        hours: '10:00 — 19:00', i: 3 },
  { day: 'Czwartek',     hours: '10:00 — 19:00', i: 4 },
  { day: 'Piątek',       hours: '10:00 — 19:00', i: 5 },
  { day: 'Sobota',       hours: '10:00 — 20:00', i: 6, weekend: true },
  { day: 'Niedziela',    hours: '10:00 — 20:00', i: 0, weekend: true },
]

const MAPS_QUERY = 'Krzywa 19B, 34-400 Nowy Targ'

export default function Kontakt({ onBookBirthday }) {
  useEffect(() => {
    updateHead(META)
  }, [])

  const today = new Date().getDay()

  return (
    <>
      {/* HERO (AIDA) */}
      <section className="svc-hero">
        <div className="svc-hero-decor">
          <Decoration type="cloud" color="var(--paper)" size={150} opacity={0.18} className="dec-keep" style={{ right: '6%', top: '14%' }} />
          <Decoration type="leaf" color="var(--rose)" size={80} rotate={-18} opacity={0.45} style={{ right: '14%', bottom: '18%' }} />
          <Decoration type="cloud" color="var(--paper)" size={120} opacity={0.14} style={{ left: '4%', top: '18%' }} />
          <Decoration type="leaf" color="var(--rose-deep)" size={64} rotate={28} opacity={0.4} style={{ left: '8%', bottom: '14%' }} />
          <Decoration type="leaf" color="var(--rose)" size={48} rotate={45} opacity={0.35} style={{ left: '38%', bottom: '6%' }} />
        </div>

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'Kontakt', href: '/kontakt/' },
            ]} />

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Kontakt — Bawisz.</span>
              <span className="line hero-italic">Nowy Targ, Krzywa 19B —</span>
              <span className="line">telefon, Instagram, mapa.</span>
            </h1>

            <div className="svc-hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
              <a href="tel:+48693766049" className="btn btn-pop">
                Zadzwoń · 693 766 049 <IconArrow size={16} />
              </a>
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light"
              >
                <IconInstagram size={16} /> @bawisz_bawialnia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING ANSWER (AIO direct answer w pierwszych 100 słowach) */}
      <section className="svc-intro">
        <div className="shell">
          <Reveal>
            <p className="svc-intro-p body-lg">
              Najszybszy kontakt z Bawiszem w Nowym Targu to telefon lub SMS na +48 693 766 049 — odbieramy codziennie od 10:00 (w tygodniu do 19:00, w weekendy do 20:00). Możesz też napisać na Instagramie albo na Messengerze, albo po prostu wpaść — ul. Krzywa 19B, 34-400 Nowy Targ, dwie minuty od Rynku, parking obok lokalu. Wstęp do bawialni jest bez rezerwacji. Urodziny, warsztaty i wyjścia grupowe ustalamy wcześniej, najlepiej telefonem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* KANAŁY KONTAKTU (4 cards) */}
      <section className="kt-channels">
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ Cztery sposoby ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Wybierz, jak <span className="hero-italic">się łapiemy.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Każdy kanał obsługujemy w godzinach otwarcia. Telefon i SMS to najszybsza droga, Instagram i Messenger sprawdzamy w tym samym rytmie.
            </Reveal>
          </div>

          <div className="kt-grid">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  className="kt-card"
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="kt-card-icon"><c.icon size={22} /></div>
                  <div className="kt-card-text">
                    <div className="kt-card-l">{c.label}</div>
                    <div className="kt-card-s">{c.sub}</div>
                  </div>
                  <div className="kt-card-arrow"><IconArrowUp size={18} /></div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADRES + GODZINY + MAPA */}
      <section className="kt-place">
        <div className="shell kt-place-grid">
          <div className="kt-place-left">
            <Reveal className="eyebrow">[ Godziny i adres ]</Reveal>
            <Reveal delay={80}>
              <h2 className="kt-place-h">
                Codziennie <span className="hero-italic">otwarte.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg kt-place-sub">
              Otwarte przez cały rok — nie zamykamy się w wakacje ani między świętami. Ostatnie wejście do bawialni przyjmujemy 30 minut przed zamknięciem.
            </Reveal>

            <div className="kt-table">
              {SCHEDULE.map((s, idx) => (
                <Reveal key={s.day} delay={120 + idx * 50}
                  className={`kt-row ${s.i === today ? 'is-today' : ''}`}>
                  <span className="kt-day">
                    {s.i === today && <span className="kt-marker">→</span>}
                    {s.day}
                  </span>
                  <span className="kt-time">
                    {s.weekend && <span className="chip chip-sage" style={{ marginRight: 8 }}>dłużej</span>}
                    {s.hours}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="kt-card-place">
            <div className="kt-card-eyebrow">[ Jak do nas trafić ]</div>
            <div className="kt-card-h">ul. Krzywa 19B<br />Nowy Targ</div>

            <div className="kt-info">
              <div className="kt-info-row">
                <div className="kt-info-icon"><IconPin size={20} /></div>
                <div>
                  <div className="kt-info-t">34-400 Nowy Targ</div>
                  <div className="kt-info-s">Centrum, parking obok lokalu</div>
                </div>
              </div>
              <div className="kt-info-row">
                <div className="kt-info-icon"><IconPhone size={20} /></div>
                <div>
                  <a href="tel:+48693766049" className="kt-info-t link-u">+48 693 766 049</a>
                  <div className="kt-info-s">Telefon lub SMS — w godzinach otwarcia</div>
                </div>
              </div>
              <div className="kt-info-row">
                <div className="kt-info-icon"><IconClock size={20} /></div>
                <div>
                  <div className="kt-info-t">Codziennie od 10:00</div>
                  <div className="kt-info-s">Pn–Pt do 19:00, Sb–Nd do 20:00</div>
                </div>
              </div>
            </div>

            <a href={`https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`}
               target="_blank" rel="noopener noreferrer"
               className="btn btn-primary kt-cta">
              <IconNav size={16} /> Nawiguj do nas
            </a>

            <div className="kt-map">
              <iframe
                title="Mapa — Bawisz, ul. Krzywa 19B, Nowy Targ"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed&z=15`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="svc-mid-cta">
        <div className="shell">
          <Reveal className="svc-mid-box">
            <div className="svc-mid-text">
              <h2 className="svc-mid-h">
                Termin <span className="hero-italic">urodzin?</span>
              </h2>
              <p className="svc-mid-p">
                Pakiet STANDARD rezerwuje się 3-6 tygodni wcześniej, MINI często łapiemy w tym samym tygodniu. Najszybciej telefonem — od razu sprawdzamy wolne daty i ustalamy motyw dekoracji. Prowadząca poprowadzi program — ty siedzisz przy kawie.
              </p>
            </div>
            <div className="svc-mid-ctas">
              <button className="btn btn-pop" onClick={onBookBirthday}>
                Zarezerwuj urodziny <IconArrow size={16} />
              </button>
              <a href="tel:+48693766049" className="btn btn-ghost-light">
                Zadzwoń · 693 766 049
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq">
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ FAQ ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Najczęstsze <span className="hero-italic">pytania.</span>
              </h2>
            </Reveal>
          </div>

          <div className="svc-faq-list">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 50} className="svc-faq-item">
                <h3 className="svc-faq-q">{item.q}</h3>
                <p className="svc-faq-a">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="svc-final">
        <div className="shell">
          <Reveal className="svc-final-box">
            <h2 className="svc-final-h">
              Pytanie <span className="hero-italic">albo wątpliwość?</span>
            </h2>
            <p className="svc-final-p">
              Najszybciej telefonem — odpowiadamy od ręki w godzinach otwarcia. Z urodzinami, warsztatami i grupami pisz albo dzwoń wcześniej, terminy znikają szybciej niż się wydaje.
            </p>
            <div className="svc-final-ctas">
              <a href="tel:+48693766049" className="btn btn-pop">
                Zadzwoń · 693 766 049 <IconArrow size={16} />
              </a>
              <button className="btn btn-cream" onClick={onBookBirthday}>
                Zarezerwuj urodziny
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        /* ============ KANAŁY KONTAKTU (cards) ============ */
        .kt-channels { padding: 110px 0 90px; background: var(--cream); }
        .kt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          max-width: 920px;
          margin: 0 auto;
        }
        @media (max-width: 720px) { .kt-grid { grid-template-columns: 1fr; } }

        .kt-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px -16px rgba(168,128,98,0.35);
        }
        .kt-card:hover {
          background: var(--rose-soft);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -18px rgba(168,128,98,0.4);
        }
        .kt-card-icon {
          width: 46px; height: 46px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--rose-soft);
          color: var(--brand-deep);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .kt-card:hover .kt-card-icon { background: var(--bone); }
        .kt-card-text { flex: 1; min-width: 0; }
        .kt-card-l {
          font-weight: 700;
          color: var(--ink);
          font-size: 16px;
          line-height: 1.3;
          word-break: break-word;
        }
        .kt-card-s {
          font-size: 13px;
          color: var(--ink-mute);
          margin-top: 4px;
          line-height: 1.4;
        }
        .kt-card-arrow {
          color: var(--ink-mute);
          flex-shrink: 0;
          transition: transform 0.2s, color 0.2s;
        }
        .kt-card:hover .kt-card-arrow { color: var(--ink); transform: translate(4px, -4px); }

        /* ============ ADRES + GODZINY + MAPA ============ */
        .kt-place {
          padding: 110px 0 100px;
          background: var(--paper);
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
        }
        .kt-place-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 980px) { .kt-place-grid { grid-template-columns: 1fr; gap: 40px; } }

        .kt-place-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 16px 0 18px;
          color: var(--ink);
        }
        .kt-place-h .hero-italic { color: var(--rose-deep); }
        .kt-place-sub { max-width: 52ch; color: var(--ink-soft); margin-bottom: 32px; }

        .kt-table { display: flex; flex-direction: column; }
        .kt-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 4px;
          border-top: 1px dashed var(--line-soft);
          font-size: 17px;
        }
        .kt-row:last-child { border-bottom: 1px dashed var(--line-soft); }
        .kt-row.is-today {
          background: var(--sage);
          padding: 18px 14px;
          border-radius: var(--r-md);
          border: 1px solid var(--brand-deep);
          color: var(--brand-deep);
          font-weight: 700;
        }
        .kt-day { display: inline-flex; align-items: center; gap: 12px; }
        .kt-marker { color: var(--rose-deep); font-weight: 700; }
        .kt-time { font-feature-settings: "tnum" 1; color: var(--ink-mute); display: inline-flex; align-items: center; }
        .kt-row.is-today .kt-time { color: var(--brand-deep); }

        .kt-card-place {
          background: var(--bone);
          border: 1px solid var(--line);
          border-radius: var(--r-xl);
          padding: 32px;
          position: sticky;
          top: 110px;
          box-shadow: 0 8px 28px -18px rgba(168,128,98,0.45);
        }
        @media (max-width: 980px) { .kt-card-place { position: static; } }

        .kt-card-eyebrow {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin-bottom: 12px;
        }
        .kt-card-h {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 34px;
          color: var(--ink);
          margin-bottom: 28px;
          line-height: 1;
        }

        .kt-info { display: flex; flex-direction: column; gap: 18px; margin-bottom: 28px; }
        .kt-info-row { display: flex; gap: 14px; align-items: flex-start; }
        .kt-info-icon {
          width: 42px; height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--rose-soft);
          color: var(--brand-deep);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .kt-info-t { font-weight: 700; color: var(--ink); }
        .kt-info-s { font-size: 13px; color: var(--ink-mute); margin-top: 2px; line-height: 1.45; }

        .kt-cta { width: 100%; justify-content: center; }

        .kt-map {
          margin-top: 22px;
          height: 220px;
          border: 1px solid var(--line-soft);
          border-radius: var(--r-md);
          overflow: hidden;
          background: var(--cream);
        }
        .kt-map iframe { width: 100%; height: 100%; border: 0; display: block; }
      `}</style>
    </>
  )
}
