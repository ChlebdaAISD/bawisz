import { useEffect } from 'react'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { ServiceGallery } from '../components/ServiceGallery.jsx'
import { IconArrow, IconInstagram } from '../components/icons.jsx'
import { AnimalDeer, AnimalBear, AnimalWolf } from '../components/animals.jsx'
import { OFERTA_GRUPOWA_FAQ as FAQ, OFERTA_GRUPOWA_META as META } from '../data/oferta-grupowa.js'
import { updateHead } from '../lib/head.js'
import { CONTACT, telHref } from '../data/contact.js'

const GALLERY = [
  { src: '/assets/zdjecia/dla_grup/GRUPY 1.webp',     alt: 'Wejście grupy przedszkolnej do Bawisz' },
  { src: '/assets/zdjecia/dla_grup/Grupy 2 (1).webp', alt: 'Dzieci z przedszkola w sali Montessori' },
  { src: '/assets/zdjecia/dla_grup/GRUPY 3 (1).webp', alt: 'Grupa zorganizowana w bawialni Bawisz' },
  { src: '/assets/zdjecia/dla_grup/grupy-2-new.webp', alt: 'Dzieci bawiące się w sali Montessori w Bawisz' },
  { src: '/assets/zdjecia/dla_grup/grupy-5-new.webp', alt: 'Grupa dzieci podczas zorganizowanego pobytu w bawialni' },
]

const AUDIENCES = [
  {
    age: 'Żłobki i przedszkola',
    h: 'Wejścia dla żłobków i przedszkoli',
    p: 'Cała grupa wchodzi razem, dzieci bawią się przy edukacyjnych zabawkach Montessori na miękkiej wykładzinie, bezpiecznie i komfortowo, pod opieką swoich opiekunów. Idealne na wycieczkę pieszą z budynku przedszkola — jesteśmy 5-7 minut spacerem od centrum Nowego Targu.',
  },
  {
    age: 'Szkoły podstawowe',
    h: 'Bawialnia dla szkół',
    p: 'Klasy 0-3 mieszczą się komfortowo w drewnianej sali. Świetne na zakończenie roku, dzień dziecka, mikołajki klasowe albo jako nagroda za projekt. Dzień otwarty (NO LIMIT) sprawdza się przy klasach łączonych — dzieci same wybierają, gdzie chcą się bawić, nauczyciel mają je zawsze w zasiegu wzroku.',
  },
  {
    age: 'Grupy zorganizowane',
    h: 'Imprezy dla grup',
    p: 'Spotkania urodzinowe całych klas, zajęcia integracyjne dla zespołów dziecięcych, wyjścia takich grup jak klub mam, drużyna harcerska albo świetlica. Łączymy wejście grupowe z dodatkami: poczęstunek, warsztatyi, dekoracje urodzinowe — szczegóły ustalamy indywidualnie.',
  },
]

const PAKIETY = [
  {
    czas: '1 h',
    cena: '15',
    jednostka: '/dziecko',
    Animal: AnimalDeer,
    bg: 'var(--bone)',
    shift: -12,
    p: 'Krótkie wejście, pełen dostęp do kreatywnej sali. Sprawdza się, gdy grupa wraca do przedszkola na obiad albo łączy wizytę z innym punktem programu.',
  },
  {
    czas: '2 h',
    cena: '23',
    jednostka: '/dziecko',
    Animal: AnimalBear,
    bg: 'var(--paper)',
    shift: -9,
    badge: 'Najczęstszy wybór',
    p: 'Czas, by każde dziecko wytestowało wszystkie atrakcje: domki tematyczne, kącik czytelniczy, drewniane zabawki, sensoryczne tory przeszkód, ścianki wspinaczkowe, czy zjeżdżalnie. Najczęstszy wybór przedszkoli z Nowego Targu i okolic.',
  },
  {
    czas: 'NO\u00a0LIMIT',
    cena: '35',
    jednostka: '/dziecko · cały dzień',
    Animal: AnimalWolf,
    bg: 'var(--bone)',
    shift: -12,
    noLimit: true,
    p: 'Cały dzień od otwarcia — 10:00 do zamknięcia. Kawa i herbata dla opiekunów (1:5). Dobre na wycieczki całodniowe i dni, kiedy dzieci wracają do sali po przerwie obiadowej.',
  },
]

const PROCES = [
  {
    n: '1',
    h: 'Telefon i ustalenie szczegółów',
    p: 'Dzwonisz na +48 693 766 049 albo piszesz na Instagram/Messenger.  Podajesz datę, liczbę dzieci, czas trwania (1 h, 2 h albo NO LIMIT) oraz to, czy chcecie poczęstunek lub warsztaty. Sprawdzamy wolny termin, potwierdzamy rezerwację.',
  },
  {
    n: '2',
    h: 'Przygotowanie sali',
    p: 'Przed przyjazdem odpowiednio przygotowujemy przestrzeń dla waszej  grupy, sprawdzamy bezpieczeństwo, parzymy kawę i herbatę dla opiekunów, dbamy o każdy detal, aby zabawa była komfortowa i bezpieczna.',
  },
  {
    n: '3',
    h: 'Wejście grupy i zabawa',
    p: 'Dzieci wchodzą i bawią się przy drewnianych zabawkach Montessori — sensoryka, zabawy w role, kąciki czytelnicze, tory przeszkód. Nauczyciele zostają z grupą, mając ją ciągle w zasięgu wzroku, my dbamy o przestrzeń i o wasz komfort.',
  },
  {
    n: '4',
    h: 'Rozliczenie z placówką',
    p: 'W celu rezerwacji terminu przyjmujemy zaliczke w wysokości 50% wartości rezeracji. Calość rozliczana jest po zakończonej wizycie, zgodnie z faktyczną liczba uczestników. Oczywiście istnieje możliwość wystawienia faktury.',
  },
]

export default function OfertaGrupowa() {
  useEffect(() => {
    updateHead(META)
  }, [])

  return (
    <>
      {/* HERO (AIDA) */}
      <section className="svc-hero svc-hero--photo">
        <div className="svc-hero-bg">
          <picture>
            <source media="(max-width: 720px)" type="image/webp" srcSet="/assets/zdjecia/dla_grup/glowne-grupy-mobile.webp" />
            <img
              src="/assets/zdjecia/dla_grup/glowne-grupy.webp"
              alt=""
              width={1600}
              height={909}
              fetchPriority="high"
            />
          </picture>
          <div className="svc-hero-overlay" />
        </div>
        <div className="svc-hero-decor" />

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'Dla grup', href: '/oferta-grupowa/' },
            ]} />

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Oferta dla grup dzieci</span>
              <span className="line hero-italic">z Podhala —</span>
              <span className="line">bawialnia Montessori.</span>
            </h1>

            <div className="svc-hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
              <a href={telHref} className="btn btn-pop">
                Zadzwoń · {CONTACT.phoneDisplay} <IconArrow size={16} />
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
              W Bawisz wierzymy, że wspólna zabawa to najlepszy sposób na naukę, integrację i rozwijanie dziecięcej wyobraźni. Wejścia grupowe dla żłobków, przedszkoli i szkół z Nowego Targu oraz okolic do naturalnej bawialni Montessori przy ul. Krzywej 19B, już od 15 zł za godzinę  (23 zł za 2 godziny, 35 zł NO LIMIT na cały dzień) dla grup od 10 osób. Opiekunowie zawsze bezpłatnie. Podział na strefy wiekowe, kreatywna atmosfera oraz wnętrze bez nadmiaru bodźców, z edukacyjnymi zabawkami. Organizujemy zarówno swobodną zabawę, jak i wizyty połączone z warsztatami, czy poczęstunkiem dla grup. Termin rezerwujemy telefonicznie — najlepiej z 2-3 tygodniowym wyprzedzeniem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PAKIETY — cennik czasowy */}
      <section className="svc-pakt">
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ Pakiety czasowe ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Jasne zasady. <span className="hero-italic">Bez gwiazdek.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Atrakcyjna cena dla grup już od 10 osób. Opiekunowie wchodzą gratis, 1 na 5 dzieci ma kawę albo herbatę z naszej kawiarni w cenie pakietu.
            </Reveal>
          </div>

          <div className="svc-pakt-grid">
            {PAKIETY.map((p, i) => (
              <Reveal key={p.czas} delay={i * 100} className={`svc-pakt-tier ${p.badge ? 'is-pop' : ''}`} style={{ background: p.bg }}>
                {p.badge && <div className="svc-pakt-badge">{p.badge}</div>}
                <div className="svc-pakt-animal" style={{ '--shift': `${p.shift}px` }}>
                  <p.Animal size={140} />
                </div>
                <div className="svc-pakt-time-circle">
                  <span className={p.noLimit ? 'svc-pakt-time-small' : 'svc-pakt-time'}>{p.czas}</span>
                </div>
                <div className="svc-pakt-price-circle">
                  <span className="svc-pakt-price">{p.cena} zł</span>
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
                Trzy rodzaje <span className="hero-italic">wejść grupowych.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Oferta grupowa już od 10 dzieci. Naturalna sala zabaw z nowoczesną, przyjazną sensorycznie przestrzenią, drewnianymi zabakami i podziałem na strefy dopasowane do wieku dzieci. Oprócz swobodnej zabawy oferujemy możliwość przygotowania poczęstunku, drugiego śniadania lub obiadu, dostosowujemy szystko do potrzeb dzieci i grupy.
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

      {/* GALERIA */}
      <ServiceGallery
        eyebrow="[ Galeria ]"
        heading="Tak wyglądają wejścia grupowe."
        italic="grupowe"
        subtitle="220 m² atrakcji, strefy podzielone wiekiem, opiekun ma dzieci ciągle w polu widzenia. Kliknij zdjęcie, żeby powiększyć."
        items={GALLERY}
      />

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
                Wolne terminy w godzinach porannych i wczesnym popołudniem (od 9:00 do ok. 14:00). Najszybciej przez telefon — od razu sprawdzamy wolne daty i ustalamy szczegóły.
              </p>
            </div>
            <div className="svc-mid-ctas">
              <a href={telHref} className="btn btn-pop">
                Zadzwoń · {CONTACT.phoneDisplay}
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
              Rezerwacja <span className="hero-italic">dla grup</span>
            </h2>
            <p className="svc-final-p">
              Nowy Targ ul. Krzywa 19B. Pakiety grupowe od 15 zł za godzinę za dziecko, faktura dla placówki. Termin i szczegóły ustalamy telefonicznie — najlepiej 1-2 tygodnie wcześniej.
            </p>
            <div className="svc-final-ctas">
              <a href={telHref} className="btn btn-pop">
                Zadzwoń · {CONTACT.phoneDisplay}
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
          gap: 28px;
          max-width: 1080px;
          margin: 0 auto 32px;
        }
        @media (max-width: 980px) { .svc-pakt-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .svc-pakt-grid { grid-template-columns: 1fr; } }

        .svc-pakt-tier {
          position: relative;
          padding: 14px 20px 28px;
          border-radius: var(--r-lg);
          border: 1px solid var(--line-soft);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 6px 26px -18px rgba(168,128,98,0.5);
          transition: transform .35s ease;
        }
        .svc-pakt-tier:hover { transform: translateY(-6px); }
        .svc-pakt-tier.is-pop { border-color: var(--brand); box-shadow: 0 14px 40px -22px rgba(119,98,88,0.6); }

        .svc-pakt-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--brand-deep);
          color: var(--bone);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 6px 14px;
          border-radius: var(--r-pill);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .svc-pakt-animal {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: -55px;
          position: relative;
          z-index: 0;
          pointer-events: none;
        }
        .svc-pakt-animal > span { transform: translateY(var(--shift, 0)); }
        .svc-pakt-animal svg,
        .svc-pakt-animal img { display: block; filter: drop-shadow(0 4px 8px rgba(91,71,55,0.15)); }
        @media (max-width: 520px) {
          .svc-pakt-animal { margin-bottom: -38px; }
          .svc-pakt-animal > span { transform: translateY(calc(var(--shift, 0) * 0.7)); width: 100px !important; height: 100px !important; }
          .svc-pakt-animal svg { width: 100px !important; height: 100px !important; }
        }

        .svc-pakt-time-circle {
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
        @media (max-width: 520px) { .svc-pakt-time-circle { width: 78px; height: 78px; } }

        .svc-pakt-time {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 34px;
          color: var(--brand-deep);
          letter-spacing: -0.01em;
        }
        @media (max-width: 520px) { .svc-pakt-time { font-size: 26px; } }

        .svc-pakt-time-small {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          line-height: 1.05;
          letter-spacing: 0.06em;
          color: var(--brand-deep);
          text-align: center;
          text-transform: uppercase;
        }
        @media (max-width: 520px) { .svc-pakt-time-small { font-size: 11px; } }

        .svc-pakt-price-circle {
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
          padding: 0 6px;
          text-align: center;
        }
        @media (max-width: 520px) { .svc-pakt-price-circle { width: 78px; height: 78px; margin-top: -20px; } }

        .svc-pakt-price {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 24px;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        @media (max-width: 520px) { .svc-pakt-price { font-size: 18px; } }

        .svc-pakt-unit {
          font-size: 10px;
          font-weight: 600;
          color: #fff;
          opacity: 0.9;
          margin-top: 4px;
          letter-spacing: 0.04em;
          line-height: 1.1;
        }
        @media (max-width: 520px) { .svc-pakt-unit { font-size: 9px; } }

        .svc-pakt-p {
          margin: 22px 0 0;
          font-size: 15px;
          line-height: 1.55;
          color: var(--ink-soft);
          text-align: center;
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
