import { useEffect } from 'react'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { IconArrow, IconInstagram } from '../components/icons.jsx'
import {
  WARSZTATY_FAQ as FAQ,
  WARSZTATY_META as META,
  WARSZTATY_EXAMPLES as EXAMPLES,
} from '../data/warsztaty.js'
import { updateHead } from '../lib/head.js'

const PROCESS = [
  {
    n: '1',
    h: 'Śledź Instagram',
    p: 'Najbliższe warsztaty ogłaszamy na profilu @bawisz_bawialnia z 1-2 tygodniowym wyprzedzeniem. W ogłoszeniu znajdziesz datę, prowadzącego, dla jakiego wieku, ile trwa i ile kosztuje. Włącz powiadomienia — część terminów wyprzedaje się w kilka dni.',
  },
  {
    n: '2',
    h: 'Zadzwoń, żeby zarezerwować',
    p: 'Po zobaczeniu ogłoszenia dzwonisz na +48 693 766 049 albo piszesz na Instagramie. Mówisz, na który warsztat i ile dzieci. Potwierdzamy miejsce — liczba miejsc ograniczona, zwykle 6-10 dzieci na warsztat.',
  },
  {
    n: '3',
    h: 'Zajęcia z prowadzącą',
    p: '1,5 godziny zajęć z zaproszoną prowadzącą — pokazuje technikę, prowadzi zabawę, pomaga przy trudniejszych krokach. Zostajesz w sali, jeśli chcesz, albo czekasz w kawiarni obok. Przy najmłodszych warto być na sali.',
  },
  {
    n: '4',
    h: 'Po zajęciach — kawa i ciasto',
    p: 'Dziecko zabiera swoją pracę do domu (jeśli warsztat plastyczny). Wy macie chwilę na kawę i ciasto domowe w kawiarni przy sali. Materiały sprząta prowadząca — wracacie spokojnie do auta.',
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
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'Warsztaty', href: '/warsztaty/' },
            ]} />
            <span className="eyebrow fade-up">[ Warsztaty dla dzieci · Nowy Targ ]</span>

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Warsztaty dla dzieci.</span>
              <span className="line hero-italic">Nowy Targ — plastyka, glina,</span>
              <span className="line">joga, animaloterapia.</span>
            </h1>

            <div className="svc-hero-ctas fade-up" style={{ animationDelay: '0.35s' }}>
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pop"
              >
                <IconInstagram size={16} /> Sprawdź terminy na Instagramie <IconArrow size={16} />
              </a>
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
              Warsztaty dla dzieci w Bawiszu w Nowym Targu prowadzą zaproszeni partnerzy — w drewnianej sali Montessori przy ul. Krzywej 19B. Repertuar zmienia się: plastyka, glina, joga dla dzieci, animaloterapia, sensoryka. Wszystkie najbliższe terminy ogłaszamy na Instagramie{' '}
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="svc-intro-link"
              >
                @bawisz_bawialnia
              </a>{' '}
              — tam znajdziesz datę, prowadzącego, wiek dziecka i cenę. Standardowo 1,5 h zajęć, 60-80 zł od osoby.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRZYKŁADY — warsztaty, które już prowadziliśmy */}
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
            <Reveal className="eyebrow">[ Co już u nas było ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Przykłady <span className="hero-italic">warsztatów.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Warsztaty robimy nieregularnie — z różnymi prowadzącymi i tematami. Poniżej kilka, które już u nas były. Najbliższe terminy zawsze na Instagramie.
            </Reveal>
          </div>

          <div className="svc-types-grid">
            {EXAMPLES.map((t, i) => (
              <Reveal key={t.h} delay={i * 80} className="svc-type-card">
                <div className="svc-type-age">{t.age}</div>
                <h3 className="svc-type-h">{t.h}</h3>
                <div className="svc-type-meta">{t.meta}</div>
                <p className="svc-type-p">{t.p}</p>
                <div className="svc-type-by">{t.by}</div>
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
                Cztery kroki. <span className="hero-italic">Zaczynamy od Instagrama.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Najczęstsze pytanie: „skąd mam wiedzieć, kiedy będzie warsztat?". Odpowiedź: ogłaszamy je z 1-2 tygodniowym wyprzedzeniem na Instagramie — zaobserwuj profil, żeby nie przegapić.
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
                Najbliższy <span className="hero-italic">warsztat</span>?
              </h2>
              <p className="svc-mid-p">
                Aktualne terminy, ceny i zapisy na profilu @bawisz_bawialnia. Jeśli masz pomysł na warsztat tematyczny dla zamkniętej grupy (urodziny, wyjście przedszkolne) — dzwoń, ustalamy minimum 2 tygodnie wcześniej.
              </p>
            </div>
            <div className="svc-mid-ctas">
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pop"
              >
                <IconInstagram size={16} /> Otwórz Instagram
              </a>
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
              Zapisy na <span className="hero-italic">warsztaty</span>
            </h2>
            <p className="svc-final-p">
              ul. Krzywa 19B, Nowy Targ. Aktualny grafik warsztatów (plastyka, glina, joga, animaloterapia) na Instagramie @bawisz_bawialnia. Zapisy telefonicznie albo wiadomością na Instagramie.
            </p>
            <div className="svc-final-ctas">
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pop"
              >
                <IconInstagram size={16} /> Otwórz Instagram
              </a>
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
