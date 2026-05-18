import { useEffect } from 'react'
import { Birthdays } from '../components/Birthdays.jsx'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { ServiceGallery } from '../components/ServiceGallery.jsx'
import { IconArrow, IconInstagram } from '../components/icons.jsx'
import { URODZINY_FAQ as FAQ, URODZINY_META as META } from '../data/urodziny.js'
import { updateHead } from '../lib/head.js'
import { CONTACT, telHref } from '../data/contact.js'

const GALLERY = [
  { src: '/assets/zdjecia/urodziny/URODZINY.webp',                alt: 'Urodziny w Bawiszu' },
  { src: '/assets/zdjecia/urodziny/IMG_20260428_181013_605.webp', alt: 'Stół urodzinowy w Bawiszu' },
  { src: '/assets/zdjecia/urodziny/IMG_20260428_181130_510.webp', alt: 'Dekoracje urodzinowe w Bawiszu' },
  { src: '/assets/zdjecia/urodziny/IMG_20260428_181441_242.webp', alt: 'Sala urodzinowa Bawisz' },
  { src: '/assets/zdjecia/urodziny/IMG_20260428_181737_026.webp', alt: 'Przyjęcie urodzinowe w Bawiszu' },
]

const PROCESS = [
  {
    n: '1',
    h: 'Kontakt i rezerwacja',
    p: 'Dzwonisz na +48 693 766 049 albo piszesz na Instagram/Messenger, wspólnie ustalimy termin, motyw przewodni i szczegóły przyjęcia. Zalecamy rezerwację terminu z 1-2 miesięcznym wyprzedzeniem, rezerwacja wiąże się z wpłatą 50% zadatku ustalonej kwoty.',
  },
  {
    n: '2',
    h: 'Przygotowanie sali',
    p: 'My zajmujemy się przygotowaniem przestrzeni, dekoracji i poczęstunku, aby wszystko było gotowe na wasze przyjęcie, możemy zaproponoać  salę na wyłączność lub prywatny stolik, to ty decydujesz. Tworzymy przytulną atmosferę, dopasowaną do wybranego motywu, przygotowujemy cyfrowe zaproszenia, aby  rozesłać je gościom.',
  },
  {
    n: '3',
    h: 'Bawicie się razem',
    p: 'Dzieci bawią się przy kreatywnych zabawkach Montessori (drewno, sensoryka, odgrywanie ról, wspinaczki, tunele). Jeśli chcecie pomożemy również zorganizować animację lub ciekawe warsztaty, dla dzieci. Świętujecie  spokojnie, bo dzieci są bezpieczne i mają wszystko pod ręką, a ty masz czas dla gości.',
  },
  {
    n: '4',
    h: 'Tort i słodkie zakończenie',
    p: 'Możecie przynieść własny tort — my serwujemy i pomagamy przy świeczkach. Możemy również zamówić go dla was u naszych sprawdzonych partnerów. Chętnie pomożemy w organizacji słodkiego stołu i dodatkowego poczęstunku.  W pakiecie STANDARD solenizant dostaje od nas prezent.',
  },
]

export default function Urodziny({ onBookBirthday }) {
  useEffect(() => {
    updateHead(META)
  }, [])

  return (
    <>
      {/* HERO (AIDA) */}
      <section className="svc-hero">
        <div className="svc-hero-decor">
          <Decoration type="balloon" color="var(--rose)" size={120} rotate={-12} opacity={0.55} className="dec-keep" style={{ right: '6%', top: '14%' }} />
          <Decoration type="balloon" color="var(--sand)" size={80} rotate={14} opacity={0.45} style={{ right: '14%', top: '38%' }} />
        </div>

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'Urodziny i Przyjęcia', href: '/urodziny/' },
            ]} />

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Urodziny dla dziecka.</span>
              <span className="line hero-italic">Nowy Targ — naturalna</span>
              <span className="line">bawialnia Montessori.</span>
            </h1>

            <div className="svc-hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
              <button className="btn btn-pop" onClick={onBookBirthday}>
                Zarezerwuj urodziny <IconArrow size={16} />
              </button>
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
              Urodziny w Bawisz to wyjątkowy czas pełen radości, wspólnej zabawy i pięknych chwil. 
Naturalna przestrzeń, dopracowane dekoracje, swobodna zabawa i przytulna atmosfera sprawiają, że każde przyjęcie staje się wyjątkowym wspomnieniem- dla dzieci jak i dla dorosłych.
Zogranizujesz u nas zarówno rodzinne przyjecie, jak i wyjątkowe urodziny z grupą rówieśników czy przedszkolnych przyjaciół.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PAKIETY — reuse istniejący Birthdays component */}
      <Birthdays onBookBirthday={onBookBirthday} />

      {/* GALERIA */}
      <ServiceGallery
        eyebrow="[ Galeria ]"
        heading="Tak wyglądają urodziny w Bawiszu."
        italic="urodziny"
        subtitle="Naturalna przestrzeń, drewniane zabawki, dekoracje w wybranym motywie. Kliknij zdjęcie, żeby powiększyć."
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
                Cztery kroki. <span className="hero-italic">Bez niespodzianek.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Najczęstsze pytanie: „co mam zrobić, a co robicie wy?". Odpowiedź: Podaj termin i liczbę gości, resztę zrobimy za ciebie.
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
                Termin <span className="hero-italic">urodzin</span>?
              </h2>
              <p className="svc-mid-p">
                Pakiet STANDARD rezerwuje się z 1-2 miesięcznym wyprzedzeniem. Najszybciej przez telefon — od razu sprawdzamy wolne daty i umawiamy się na spotkanie w celu omówienia szczegółów.
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
              Rezerwacja <span className="hero-italic">urodzin</span>
            </h2>
            <p className="svc-final-p">
              Pakiet MINI od 45 zł/os. albo STANDARD 74 zł/os. Pakiet DLA RODZICÓW od 55zł/os. z salą tylko dla was. Ustalamy datę i motyw dekoracji.
            </p>
            <div className="svc-final-ctas">
              <button className="btn btn-pop" onClick={onBookBirthday}>
                Zarezerwuj urodziny <IconArrow size={16} />
              </button>
              <a href={telHref} className="btn btn-cream">
                Zadzwoń · {CONTACT.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
