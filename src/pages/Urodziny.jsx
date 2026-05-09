import { useEffect } from 'react'
import { Birthdays } from '../components/Birthdays.jsx'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { ServiceGallery } from '../components/ServiceGallery.jsx'
import { IconArrow, IconInstagram } from '../components/icons.jsx'
import { URODZINY_FAQ as FAQ, URODZINY_META as META } from '../data/urodziny.js'
import { updateHead } from '../lib/head.js'

const GALLERY = [
  { src: '/assets/zdjecia/Bawisz_-13.webp',           alt: 'Sala urodzinowa w Bawiszu — placeholder' },
  { src: '/assets/zdjecia/Bawisz_AnnaMrożek-22.webp', alt: 'Strefa zabaw na urodzinach — placeholder' },
  { src: '/assets/zdjecia/Bawisz_-38.webp',           alt: 'Dzieci na urodzinach — placeholder' },
  { src: '/assets/zdjecia/Bawisz_AnnaMrożek-49.webp', alt: 'Stół urodzinowy — placeholder' },
  { src: '/assets/zdjecia/Bawisz_AnnaMrożek-39.webp', alt: 'Dekoracje urodzinowe — placeholder' },
]

const PROCESS = [
  {
    n: '1',
    h: 'Telefon i ustalenie terminu',
    p: 'Dzwonisz na +48 693 766 049 albo piszesz na Instagramie. Wspólnie wybieramy dzień, godzinę, pakiet (MINI lub STANDARD), liczbę dzieci i motyw dekoracji (przy pakiecie STANDARD).',
  },
  {
    n: '2',
    h: 'Przygotowanie sali',
    p: 'Zanim przyjdziecie, ustawiamy stoły, dekoracje, balon-cyfrę i poczęstunek. W pakiecie STANDARD dostajesz cyfrowe zaproszenie, żeby rozesłać je gościom.',
  },
  {
    n: '3',
    h: 'Bawicie się razem',
    p: 'Dzieci bawią się z tobą przy naturalnych zabawkach Montessori (drewno, sensoplastyka, zabawy w role). Bez animatora i wyreżyserowanych zabaw. Sala jest przemyślana — bawicie się spokojnie, bo wszystko jest bezpieczne i pod ręką.',
  },
  {
    n: '4',
    h: 'Tort i pamiątkowe zdjęcia',
    p: 'Tort solenizanta przynosicie wy — my serwujemy i pomagamy przy świeczkach. W pakiecie STANDARD solenizant dostaje od nas prezent. Zdjęcia, jedzenie, świętowanie.',
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
          <Decoration type="cloud" color="var(--paper)" size={150} opacity={0.18} style={{ left: '4%', top: '12%' }} />
          <Decoration type="leaf" color="var(--rose-deep)" size={70} rotate={-30} opacity={0.4} style={{ left: '8%', bottom: '14%' }} />
          <Decoration type="leaf" color="var(--rose)" size={50} rotate={45} opacity={0.35} style={{ left: '38%', bottom: '6%' }} />
        </div>

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'Urodziny', href: '/urodziny/' },
            ]} />
            <span className="eyebrow fade-up">[ Urodziny dla dziecka · Nowy Targ ]</span>

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Urodziny dla dziecka.</span>
              <span className="line hero-italic">Nowy Targ — drewniana</span>
              <span className="line">bawialnia Montessori.</span>
            </h1>

            <div className="svc-hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
              <button className="btn btn-pop" onClick={onBookBirthday}>
                Zarezerwuj urodziny <IconArrow size={16} />
              </button>
              <a href="tel:+48693766049" className="btn btn-ghost-light">
                Zadzwoń · 693 766 049
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
              Urodziny w Bawiszu to drewniana sala w duchu Montessori przy ul. Krzywej 19B w Nowym Targu, dwa pakiety (MINI 45 zł/os. za 2 godziny, STANDARD 74 zł/os. za 2,5 godziny z salą tylko dla was i minimum 10 dzieci), pełne dekoracje, poczęstunek i kawiarnia obok. Tort przynosisz ty, resztę robimy my. Sala jest dla dzieci od 0 do 10 lat — nikt nie zabiera ci dziecka, bawicie się razem w przestrzeni, w której wszystko jest dograne pod dziecko.
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
        subtitle="Drewniana sala, naturalne zabawki, dekoracje motywowe. Kliknij zdjęcie, żeby powiększyć."
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
              Najczęstsze pytanie: „co mam zrobić, a co robicie wy?". Odpowiedź: ty przynosisz tort i gości, resztę robimy my.
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
                Pakiet STANDARD rezerwuje się 3-6 tygodni wcześniej. Najszybciej przez telefon — od razu sprawdzamy wolne daty i ustalamy motyw dekoracji.
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
              Rezerwacja <span className="hero-italic">urodzin</span>
            </h2>
            <p className="svc-final-p">
              Pakiet MINI od 45 zł/os. albo STANDARD 74 zł/os. z salą tylko dla was. Decyzję podejmujesz, kiedy ustalimy datę i motyw dekoracji.
            </p>
            <div className="svc-final-ctas">
              <button className="btn btn-pop" onClick={onBookBirthday}>
                Zarezerwuj urodziny <IconArrow size={16} />
              </button>
              <a href="tel:+48693766049" className="btn btn-cream">
                Zadzwoń · 693 766 049
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
