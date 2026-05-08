import { useEffect } from 'react'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { IconArrow, IconInstagram } from '../components/icons.jsx'
import { WARSZTATY_FAQ as FAQ, WARSZTATY_META as META } from '../data/warsztaty.js'
import { updateHead } from '../lib/head.js'

const TYPES = [
  {
    h: 'Sensoplastyka',
    age: 'od 6 mies. do 4 lat',
    p: 'Bezpieczne masy sensoryczne z produktów spożywczych — mąka, żelatyna, kolorowy ryż, kasze, owoce. Dziecko ugniata, miesza, przesypuje, a przy okazji ćwiczy małą motorykę i poznaje tekstury. Najmłodsi siedzą na podłodze z tobą obok.',
  },
  {
    h: 'Warsztaty plastyczne',
    age: 'od 3 do 10 lat',
    p: 'Malowanie farbami, lepienie z masy solnej, prace z naturalnych materiałów (drewno, szyszki, liście), kolaże. Każde dziecko zabiera własną pracę do domu. Prowadząca pokazuje technikę, ale nie poprawia po dziecku — efekt jest jego.',
  },
  {
    h: 'Zajęcia kreatywne tematyczne',
    age: 'dobrane pod wiek grupy',
    p: 'Pory roku, święta, ulubione książki dla dzieci. Łączymy elementy sensoplastyki, plastyki i swobodnej zabawy w drewnianej sali Montessori. Dobre na pierwszy warsztat, jeśli nie wiesz, co dziecko najbardziej polubi.',
  },
]

const PROCESS = [
  {
    n: '1',
    h: 'Telefon i wybór warsztatu',
    p: 'Dzwonisz na +48 693 766 049 albo piszesz na Instagramie. Mówisz, ile dziecko ma lat i co was interesuje (sensoplastyka, plastyka, zajęcia tematyczne). Wspólnie wybieramy termin, temat i długość spotkania.',
  },
  {
    n: '2',
    h: 'Przygotowanie sali',
    p: 'Zanim przyjdziecie, układamy materiały: bezpieczne masy sensoryczne, papier, farby, naturalne dodatki. Prowadząca zna program co do minuty — bez wymyślania w trakcie, bez improwizowania na żywo.',
  },
  {
    n: '3',
    h: 'Zajęcia z prowadzącą',
    p: 'Na warsztatach prowadząca aktywnie pracuje z dziećmi: prowadzi zabawę, pokazuje techniki, pomaga przy trudniejszych krokach. Zostajesz w sali, jeśli chcesz — przy najmłodszych zwykle warto, przy starszych możesz poczekać w kawiarni.',
  },
  {
    n: '4',
    h: 'Po zajęciach — kawa i ciasto',
    p: 'Dziecko zabiera swoją pracę do domu. Wy macie chwilę na kawę i ciasto domowe w kawiarni obok sali. Sala posprzątana, ręce odmyte, ubrania (zwykle) bez większych strat — masy sensoryczne piorą się normalnie.',
  },
]

export default function Warsztaty() {
  useEffect(() => {
    updateHead(META)
  }, [])

  return (
    <>
      {/* HERO (AIDA) */}
      <section className="svc-hero">
        <div className="svc-hero-decor">
          <Decoration type="leaf" color="var(--rose-deep)" size={110} rotate={-18} opacity={0.5} className="dec-keep" style={{ right: '6%', top: '14%' }} />
          <Decoration type="leaf" color="var(--sand)" size={78} rotate={22} opacity={0.45} style={{ right: '14%', top: '38%' }} />
          <Decoration type="cloud" color="var(--paper)" size={150} opacity={0.18} style={{ left: '4%', top: '12%' }} />
          <Decoration type="balloon" color="var(--rose)" size={68} rotate={-22} opacity={0.4} style={{ left: '8%', bottom: '14%' }} />
          <Decoration type="leaf" color="var(--rose)" size={52} rotate={40} opacity={0.35} style={{ left: '38%', bottom: '6%' }} />
        </div>

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <span className="eyebrow fade-up">[ Warsztaty dla dzieci · Nowy Targ ]</span>

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Warsztaty dla dzieci.</span>
              <span className="line hero-italic">Nowy Targ — sensoplastyka,</span>
              <span className="line">plastyka i drewniana sala.</span>
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
              Warsztaty dla dzieci w Bawiszu to sensoplastyka, plastyka i zajęcia kreatywne w drewnianej sali Montessori przy ul. Krzywej 19B w Nowym Targu. Małe grupy (do 8 dzieci), prowadząca prowadzi zajęcia od początku do końca, a ty zostajesz w sali albo siadasz obok przy kawie — jak wam pasuje. Dla dzieci od 6 miesięcy do 10 lat. Termin i cenę ustalamy przez telefon — gdy wiemy, jaki warsztat was interesuje.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CO PROWADZIMY — typy warsztatów */}
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
            <Reveal className="eyebrow">[ Co prowadzimy ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Trzy typy <span className="hero-italic">warsztatów.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Wybierasz po wieku dziecka i tym, co was interesuje. Każdy z trzech typów prowadzimy w drewnianej sali Montessori, w grupie maks. 8 dzieci.
            </Reveal>
          </div>

          <div className="svc-types-grid">
            {TYPES.map((t, i) => (
              <Reveal key={t.h} delay={i * 80} className="svc-type-card">
                <div className="svc-type-age">{t.age}</div>
                <h3 className="svc-type-h">{t.h}</h3>
                <p className="svc-type-p">{t.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JAK TO WYGLĄDA (proces) */}
      <section className="svc-proc">
        <Decoration
          type="leaf"
          color="var(--rose-deep)"
          size={100}
          rotate={-12}
          opacity={0.45}
          style={{ right: '6%', top: '60px' }}
        />
        <div className="shell">
          <div className="svc-head">
            <Reveal className="eyebrow">[ Jak to wygląda ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Cztery kroki. <span className="hero-italic">Bez improwizacji.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Najczęstsze pytanie: „czy moje dziecko da radę?". Odpowiedź: prowadząca dobiera trudność pod wiek grupy, więc 2-latek robi co innego niż 6-latek — i każde wraca zadowolone.
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
                Termin <span className="hero-italic">warsztatów</span>?
              </h2>
              <p className="svc-mid-p">
                Wolne terminy w tygodniu po południu i w sobotę rano. Warsztaty na zamówienie (urodziny tematyczne, grupy zorganizowane, przedszkola) — minimum 2 tygodnie wyprzedzenia. Najszybciej przez telefon.
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
              Zapisy na <span className="hero-italic">warsztaty</span>
            </h2>
            <p className="svc-final-p">
              ul. Krzywa 19B, Nowy Targ. Sensoplastyka, plastyka albo warsztaty na zamówienie — termin i cenę dogadujemy przez telefon, gdy wiemy, na jaki warsztat się decydujecie.
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
    </>
  )
}
