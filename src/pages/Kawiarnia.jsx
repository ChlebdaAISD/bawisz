import { useEffect } from 'react'
import { Menu } from '../components/Menu.jsx'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { ServiceGallery } from '../components/ServiceGallery.jsx'
import { IconArrow, IconInstagram } from '../components/icons.jsx'
import { KAWIARNIA_FAQ as FAQ, KAWIARNIA_META as META } from '../data/kawiarnia.js'
import { updateHead } from '../lib/head.js'
import { CONTACT, telHref } from '../data/contact.js'

const GALLERY = [
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA 1.webp', alt: 'Wnętrze kawiarni Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA 2.webp', alt: 'Kawa specialty w Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA 3.webp', alt: 'Domowe ciasto w kawiarni Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA 4.webp', alt: 'Stolik w kawiarni Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA 5.webp', alt: 'Menu kawiarni Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA 6.webp', alt: 'Strefa kawiarni w Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA 8.webp', alt: 'Atmosfera kawiarni Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/KAWIARNIA.webp',   alt: 'Kawiarnia Bawisz w Nowym Targu' },
  { src: '/assets/zdjecia/kawiarnia/Bawisz07.webp',    alt: 'Witryna z domowymi wypiekami w Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/IMG_6338.webp',    alt: 'Wypieki i napoje w Bawisz' },
  { src: '/assets/zdjecia/kawiarnia/macha.webp',       alt: 'Matcha latte w Bawisz' },
]

const PROCESS = [
  {
    n: '1',
    h: 'Wpadasz na kawę',
    p: 'Bez rezerwacji. Wchodzisz, wybierasz kawę i ciasto z naszej witryny. Do kawiarni nie potrzebujesz biletu — kupujesz go tylko jeśli dziecko będzie bawić się na sali zabaw.',
  },
  {
    n: '2',
    h: 'Decydujesz, czy bawialnia',
    p: 'Jeśli dziecko jest z tobą i chcecie się pobawić — kupujesz wstęp do sali Montessori (25 zł / 1 h, 29 zł / 1,5 h, 33 zł / 2 h, 45 zł no limit). Opiekun zawsze gratis. Drugie dziecko w rodzinie — 25% taniej.',
  },
  {
    n: '3',
    h: 'Pijesz kawę, dziecko się bawi',
    p: 'Siedzisz przy wygodnym stoliku, masz dziecko w zasięgu wzroku, kawa zostaje gorąca. Dziecko bawi się swobodnie  w sali zabaw— ma do dyspozycji naturalne zabawki, domki tematyczne,wspinaczki, zjeżdżalnie, kąciki czytelnicze.',
  },
  {
    n: '4',
    h: 'Wracasz, kiedy chcesz',
    p: 'Karta podarunkowa (3 wejścia × 1,5 h za 75 zł, 5 wejść × 1,5 h za 135 zł) albo karnet miesięczny no limit za 215 zł — jeśli przewidujesz, że to nie ostatni raz. Najprościej dogadać to przy ladzie.',
  },
]

export default function Kawiarnia({ onBookBirthday = () => {} }) {
  useEffect(() => {
    updateHead(META)
  }, [])

  return (
    <>
      {/* HERO (AIDA) */}
      <section className="svc-hero svc-hero--photo">
        <div className="svc-hero-bg">
          <picture>
            <source media="(max-width: 720px)" type="image/webp" srcSet="/assets/zdjecia/kawiarnia/kawiarnia-glowne-mobile.webp" />
            <img
              src="/assets/zdjecia/kawiarnia/KAWIARNIA 1.webp"
              alt=""
              width={1600}
              height={1067}
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
              { name: 'Kawiarnia', href: '/kawiarnia/' },
            ]} />

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Kawiarnia w Nowym Targu.</span>
              <span className="line hero-italic">Z naturalną bawialnią</span>
              <span className="line">Montessori obok.</span>
            </h1>

            <div className="svc-hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
              <a href="#menu" className="btn btn-pop">
                Zobacz menu <IconArrow size={16} />
              </a>
              <a href={telHref} className="btn btn-ghost-light">
                Zadzwoń · {CONTACT.phoneDisplay}
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
              Kawiarnia w Nowym Targu, w której kawa zostaje gorąca, a dziecko nie ciągnie cię za rękę, żeby już wracać do domu. Przy ul. Krzywej 19B parzymy specialty espresso, americano, latte i cappuccino, serwujemy domowe ciasta, a obok mamy drewnianą salę Montessori dla dzieci od 0 do 10 lat. Pijesz kawę, dziecko bawi się tuż obok — przy naturalnych zabawkach, w spokojnej przestrzeni, bez plastiku. Wstęp do bawialni od 25 zł za godzinę, sama kawiarnia bez biletu. Ocena 4.9/5 w Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MENU — reuse istniejący Menu component */}
      <Menu />

      {/* GALERIA */}
      <ServiceGallery
        eyebrow="[ Galeria ]"
        heading="Tak wygląda kawiarnia w Bawisz."
        italic="kawiarnia"
        subtitle="Specialty coffee, domowe ciasta, dziecko bawi się obok. Kliknij zdjęcie, żeby powiększyć."
        items={GALLERY}
      />

      {/* JAK TO WYGLĄDA (proces) */}
      <section className="svc-proc">
        <Decoration
          type="leaf"
          color="var(--rose-deep)"
          size={90}
          rotate={-15}
          opacity={0.4}
          style={{ right: '6%', top: '60px' }}
        />
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ Jak to wygląda ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Cztery kroki. <span className="hero-italic">Od kawy po dziecko, które nie chce wychodzić.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Najczęstsze pytanie: „muszę kupować bilet, żeby napić się kawy?". Odpowiedź: nie. Za wejście zapłacisz tylko jeśli dziecko będzie bawiło się na sali zabaw.
            </Reveal>
          </div>

          <div className="svc-proc-grid">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 80} className="svc-proc-card">
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
                Zamówienie <span className="hero-italic">na imprezę</span>?
              </h2>
              <p className="svc-mid-p">
                Cały sernik, blacha brownie, monoporcje czy tort na chrzciny lub urodziny w domu — ustalamy z minimum 24-48 h wyprzedzeniem. Najszybciej przez telefon.
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
              Wpadasz <span className="hero-italic">na kawę?</span>
            </h2>
            <p className="svc-final-p">
              ul. Krzywa 19B, Nowy Targ. Otwarte codziennie: pon.-pt. 10:00-19:00, sob.-niedz. 10:00-20:00. Bez rezerwacji — przyjdź, kiedy chcesz. Jeśli planujesz urodziny dziecka, zarezerwuj salę z wyprzedzeniem.
            </p>
            <div className="svc-final-ctas">
              <a href={telHref} className="btn btn-pop">
                Zadzwoń · {CONTACT.phoneDisplay}
              </a>
              <button className="btn btn-cream" onClick={onBookBirthday}>
                Zarezerwuj urodziny <IconArrow size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
