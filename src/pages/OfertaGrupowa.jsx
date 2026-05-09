import { useEffect } from 'react'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { IconArrow, IconInstagram } from '../components/icons.jsx'
import { OFERTA_GRUPOWA_FAQ as FAQ, OFERTA_GRUPOWA_META as META } from '../data/oferta-grupowa.js'
import { updateHead } from '../lib/head.js'

const AUDIENCES = [
  {
    age: 'Przedszkola',
    h: 'Wyjścia dla przedszkoli',
    p: 'Cała grupa wchodzi razem, dzieci bawią się przy drewnianych zabawkach Montessori pod opieką swoich nauczycieli. Strefy są podzielone według wieku (3-4 lata, 5-6 lat), więc 6-latki nie wchodzą w paradę 3-latkom. Idealne na wycieczkę pieszą z budynku przedszkola — jesteśmy 5-7 minut spacerem od centrum Nowego Targu.',
  },
  {
    age: 'Szkoły podstawowe',
    h: 'Bawialnia dla szkół',
    p: 'Klasy 0-3 mieszczą się komfortowo w drewnianej sali. Świetne na zakończenie roku, dzień dziecka, mikołajki klasowe albo jako nagroda za projekt. Dzień otwarty (NO LIMIT) sprawdza się przy klasach łączonych — dzieci same wybierają, gdzie chcą się bawić, nauczyciel ma je w polu widzenia.',
  },
  {
    age: 'Grupy zorganizowane',
    h: 'Imprezy dla grup',
    p: 'Spotkania urodzinowe całych klas, zajęcia integracyjne dla zespołów dziecięcych, wyjścia takich grup jak klub mam, drużyna harcerska albo świetlica. Łączymy wejście grupowe z dodatkami: poczęstunek, warsztat sensoplastyki, dekoracje urodzinowe — co potrzeba, to dokładamy.',
  },
]

const PAKIETY = [
  {
    czas: '1 godzina',
    cena: '15 zł',
    jednostka: '/ dziecko',
    p: 'Krótkie wyjście, pełen dostęp do drewnianej sali. Sprawdza się, gdy grupa wraca do przedszkola na obiad albo łączy wizytę z innym punktem programu.',
  },
  {
    czas: '2 godziny',
    cena: '23 zł',
    jednostka: '/ dziecko',
    badge: 'Najczęstszy wybór',
    p: 'Czas, by każde dziecko spróbowało wszystkich stref: zabawy w role, kącik czytelniczy, drewniane zabawki sensoryczne, sala ruchowa. Najczęstszy wybór przedszkoli z Nowego Targu i okolic.',
  },
  {
    czas: 'NO LIMIT',
    cena: '35 zł',
    jednostka: '/ dziecko · cały dzień',
    p: 'Cały dzień otwarcia — od 10:00 do zamknięcia. Kawa i herbata bez limitu dla opiekunów (1:5). Dobre na wycieczki całodniowe i dni, kiedy dzieci wracają do sali po przerwie obiadowej.',
  },
]

const PROCES = [
  {
    n: '1',
    h: 'Telefon i ustalenie szczegółów',
    p: 'Dzwonisz na +48 693 766 049 albo piszesz na Instagramie. Podajesz datę, liczbę dzieci, czas trwania (1 h, 2 h albo NO LIMIT) oraz to, czy chcecie poczęstunek. Sprawdzamy wolny termin i potwierdzamy rezerwację.',
  },
  {
    n: '2',
    h: 'Przygotowanie sali',
    p: 'Zanim grupa przyjdzie, ustawiamy strefy według wieku dzieci, sprawdzamy bezpieczeństwo, parzymy kawę i herbatę dla opiekunów. Jeśli zamówiliście poczęstunek — przygotowujemy go tak, żeby był gotowy na wejście grupy.',
  },
  {
    n: '3',
    h: 'Wejście grupy i zabawa',
    p: 'Dzieci wchodzą i bawią się przy drewnianych zabawkach Montessori — sensoplastyka, zabawy w role, kącik czytelniczy, sala ruchowa. Nauczyciele zostają z grupą, my dbamy o przestrzeń, poczęstunek i to, żeby nic nie zabrakło.',
  },
  {
    n: '4',
    h: 'Rozliczenie z placówką',
    p: 'Wystawiamy fakturę dla przedszkola lub szkoły z odroczonym terminem płatności (przelew po wizycie). Potrzebujemy NIP placówki i danych do faktury — przesyłacie je SMS-em albo mailem po ustaleniu terminu.',
  },
]

export default function OfertaGrupowa() {
  useEffect(() => {
    updateHead(META)
  }, [])

  return (
    <>
      {/* HERO (AIDA) */}
      <section className="svc-hero">
        <div className="svc-hero-decor">
          <Decoration type="balloon" color="var(--rose)" size={110} rotate={-14} opacity={0.5} className="dec-keep" style={{ right: '6%', top: '14%' }} />
          <Decoration type="balloon" color="var(--sand)" size={75} rotate={18} opacity={0.45} style={{ right: '14%', top: '38%' }} />
          <Decoration type="cloud" color="var(--paper)" size={150} opacity={0.18} style={{ left: '4%', top: '12%' }} />
          <Decoration type="leaf" color="var(--rose-deep)" size={70} rotate={-28} opacity={0.4} style={{ left: '8%', bottom: '14%' }} />
          <Decoration type="leaf" color="var(--rose)" size={50} rotate={42} opacity={0.35} style={{ left: '38%', bottom: '6%' }} />
        </div>

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'Dla przedszkoli', href: '/oferta-grupowa/' },
            ]} />
            <span className="eyebrow fade-up">[ Wyjścia grupowe · Nowy Targ ]</span>

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Oferta dla przedszkoli.</span>
              <span className="line hero-italic">Nowy Targ — drewniana</span>
              <span className="line">bawialnia Montessori.</span>
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
                <IconInstagram size={16} /> Napisz na Instagramie
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
              Wyjścia grupowe dla przedszkoli i szkół z Nowego Targu i okolic w drewnianej bawialni Montessori przy ul. Krzywej 19B. Minimum 10 dzieci, od 15 zł za godzinę za dziecko (23 zł za 2 godziny, 35 zł NO LIMIT na cały dzień). Kawa lub herbata gratis dla 1 opiekuna na 5 dzieci. Sala dla wieku 0-10 lat, naturalne zabawki, strefy dopasowane do wieku. Faktura dla placówki z odroczonym terminem płatności. Termin rezerwujemy telefonicznie — najlepiej z 1-2 tygodniami wyprzedzenia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DLA KOGO — typy grup */}
      <section className="svc-types">
        <Decoration
          type="leaf"
          color="var(--rose)"
          size={90}
          rotate={18}
          opacity={0.4}
          style={{ left: '4%', top: '40px' }}
        />
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ Dla kogo ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Trzy rodzaje <span className="hero-italic">wyjść grupowych.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Cennik jest jeden, sala ta sama — drewniana, podzielona na strefy według wieku. Rodzaj wyjścia ma znaczenie po to, żebyśmy ustawili strefy pod konkretne grupy wiekowe i przygotowali poczęstunek pod dietę grupy.
            </Reveal>
          </div>

          <div className="svc-types-grid">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.h} delay={i * 80} className="svc-type-card">
                <div className="svc-type-age">{a.age}</div>
                <h3 className="svc-type-h">{a.h}</h3>
                <p className="svc-type-p">{a.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAKIETY — cennik czasowy */}
      <section className="svc-pakt">
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ Pakiety czasowe ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Trzy ceny. <span className="hero-italic">Bez gwiazdek.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Cena za dziecko za czas zabawy. Opiekunowie wchodzą gratis, 1 na 5 dzieci ma kawę albo herbatę z naszej kawiarni w cenie pakietu.
            </Reveal>
          </div>

          <div className="svc-pakt-grid">
            {PAKIETY.map((p, i) => (
              <Reveal key={p.czas} delay={i * 100} className={`svc-pakt-card ${p.badge ? 'is-pop' : ''}`}>
                {p.badge && <div className="svc-pakt-badge">{p.badge}</div>}
                <div className="svc-pakt-czas">{p.czas}</div>
                <div className="svc-pakt-price-row">
                  <span className="svc-pakt-price">{p.cena}</span>
                  <span className="svc-pakt-unit">{p.jednostka}</span>
                </div>
                <p className="svc-pakt-p">{p.p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="svc-pakt-note">
            <p>Minimum: <strong>10 dzieci</strong> w grupie. Kawa lub herbata <strong>gratis</strong> dla 1 opiekuna na 5 dzieci. Poczęstunek dla dzieci na zamówienie — ustalamy zakres telefonicznie.</p>
          </Reveal>
        </div>
      </section>

      {/* JAK TO WYGLĄDA (proces) */}
      <section className="svc-proc">
        <Decoration
          type="balloon"
          color="var(--rose)"
          size={100}
          rotate={-8}
          opacity={0.5}
          style={{ right: '6%', top: '60px' }}
        />
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ Jak to wygląda ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Cztery kroki. <span className="hero-italic">Od telefonu do faktury.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Najczęstsze pytanie: „co dokładnie robicie wy, a co mam zrobić ja?". Odpowiedź: wy przyprowadzacie grupę, my robimy resztę — od przygotowania sali po fakturę.
            </Reveal>
          </div>

          <div className="svc-proc-grid">
            {PROCES.map((step, i) => (
              <Reveal key={step.h} delay={i * 80} className="svc-proc-card">
                <div className="svc-proc-num">{step.n}</div>
                <div className="svc-proc-body">
                  <h3 className="svc-proc-h">{step.h}</h3>
                  <p className="svc-proc-p">{step.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="svc-mid-cta">
        <div className="shell">
          <Reveal className="svc-mid-box">
            <div className="svc-mid-text">
              <h2 className="svc-mid-h">
                Termin <span className="hero-italic">wyjścia</span>?
              </h2>
              <p className="svc-mid-p">
                Wolne terminy w godzinach porannych i wczesnym popołudniem (od 10:00 do około 14:00 — przed otwarciem dla rodzin indywidualnych). Najszybciej przez telefon — od razu sprawdzamy wolne daty i ustalamy szczegóły.
              </p>
            </div>
            <div className="svc-mid-ctas">
              <a href="tel:+48693766049" className="btn btn-pop">
                Zadzwoń · 693 766 049
              </a>
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light"
              >
                <IconInstagram size={16} /> Napisz na Instagramie
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
              Rezerwacja <span className="hero-italic">wyjścia grupowego</span>
            </h2>
            <p className="svc-final-p">
              ul. Krzywa 19B, Nowy Targ. Pakiety od 15 zł za godzinę za dziecko, faktura dla placówki z odroczonym terminem płatności. Termin i szczegóły ustalamy telefonicznie — najlepiej 1-2 tygodnie wcześniej.
            </p>
            <div className="svc-final-ctas">
              <a href="tel:+48693766049" className="btn btn-pop">
                Zadzwoń · 693 766 049
              </a>
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cream"
              >
                <IconInstagram size={16} /> Napisz na Instagramie
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .svc-pakt { padding: 110px 0 90px; background: var(--cream); }
        .svc-pakt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1180px;
          margin: 0 auto 32px;
        }
        @media (max-width: 980px) { .svc-pakt-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .svc-pakt-grid { grid-template-columns: 1fr; } }
        .svc-pakt-card {
          position: relative;
          padding: 28px 28px 32px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
        }
        .svc-pakt-card.is-pop {
          background: var(--brand-deep);
          color: var(--bone);
          transform: translateY(-12px);
        }
        @media (max-width: 600px) { .svc-pakt-card.is-pop { transform: none; } }
        .svc-pakt-badge {
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
          text-transform: uppercase;
        }
        .svc-pakt-czas {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          opacity: 0.85;
          margin-bottom: 16px;
        }
        .svc-pakt-price-row { display: flex; align-items: baseline; gap: 10px; }
        .svc-pakt-price {
          font-family: var(--font-display);
          font-size: 64px;
          line-height: 0.9;
          font-weight: 700;
        }
        .svc-pakt-unit { font-size: 14px; opacity: 0.78; }
        .svc-pakt-p {
          margin: 18px 0 0;
          font-size: 15px;
          line-height: 1.55;
          opacity: 0.92;
        }
        .svc-pakt-note {
          max-width: 820px;
          margin: 12px auto 0;
          padding: 22px 28px;
          background: var(--paper);
          border: 1px dashed var(--line-soft);
          border-radius: var(--r-md);
          text-align: center;
        }
        .svc-pakt-note p { margin: 0; font-size: 15px; line-height: 1.6; color: var(--ink-soft); }
      `}</style>
    </>
  )
}
