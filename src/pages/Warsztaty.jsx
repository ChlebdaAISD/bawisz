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
import { CONTACT, telHref } from '../data/contact.js'

const PROCESS = [
  {
    n: '1',
    h: 'Śledź Instagram i Facebook',
    p: 'Najbliższe warsztaty ogłaszamy na profilu @bawisz_bawialnia i Bawisz- bawialnia Montessori z 1-2 tygodniowym wyprzedzeniem. Na plakacie  znajdziesz datę, cenę, tematykę, oraz informację od jakiego wieku można uczestniczyć. Włącz powiadomienia — część terminów wyprzedaje się w kilka dni.',
  },
  {
    n: '2',
    h: 'Zadzwoń, żeby zarezerwować',
    p: 'Jesteś zainteresowany, dzwonisz na +48 693 766 049 albo piszesz na Instagramie lub Messenger. Mówisz, na który warsztat i ile dzieci. Potwierdzamy miejsce — liczba miejsc ograniczona, zwykle 6-10 dzieci na spotkanie.',
  },
  {
    n: '3',
    h: 'Zajęcia z prowadzącą',
    p: '1,5 godziny zajęć z zaproszoną prowadzącą — pokazuje technikę, prowadzi zabawę, pomaga przy trudniejszych krokach. Zostajesz w sali, jeśli chcesz, albo czekasz w kawiarni obok.',
  },
  {
    n: '4',
    h: 'Po zajęciach — kawa i ciasto',
    p: 'Po zakończeniu warsztatów czas na swobodną zabawę w bawialni.  Rodzice  mają chwilę na kawę i domowe ciasto, a dzieci czas na dalszą zabawę i integrację z grupą.',
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
        <div className="svc-hero-decor" />

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'Warsztaty', href: '/warsztaty/' },
            ]} />

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Warsztaty dla dzieci.</span>
              <span className="line hero-italic">Nowy Targ — plastyka, glina,</span>
              <span className="line">gimnastyka, animaloterapia.</span>
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
              Warsztaty dla dzieci w Bawisz w Nowym Targu prowadzą zapraszani partnerzy — w drewnianej sali Montessori przy ul. Krzywej 19B. W Bawisz odbywają się ciekawe warsztaty tematyczne, okazjonalne, a także cykliczne zajęcia dla dzieci. Sensoplastyka, gordonki, glina, joga dla dzieci, animaloterapia, gimnastyka, sensoryka, plastyka. Wszystkie aktualne terminy ogłaszamy na Instagramie{' '}
              <a
                href="https://www.instagram.com/bawisz_bawialnia/"
                target="_blank"
                rel="noopener noreferrer"
                className="svc-intro-link"
              >
                @bawisz_bawialnia
              </a>{' '}
              i Facebooku BAWISZ - bawialnia Montessori — tam znajdziesz datę, tematykę i cenę.
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
              Warsztaty pojawiają się bardzo często, okazjonalne tematyczne a także cykliczne.  Poniżej opis wybranych zajęć . Najbliższe terminy zawsze na Instagramie i Facebooku.
            </Reveal>
          </div>

          <div className="svc-types-grid svc-types-grid--imgs">
            {EXAMPLES.map((t, i) => (
              <Reveal key={t.h} delay={i * 80} className="svc-type-card svc-type-card--img">
                <div className="svc-type-img">
                  <img src={t.image} alt={t.imageAlt} loading={i === 0 ? 'eager' : 'lazy'} />
                </div>
                <div className="svc-type-body">
                  <div className="svc-type-age">{t.age}</div>
                  <h3 className="svc-type-h">{t.h}</h3>
                  <div className="svc-type-meta">{t.meta}</div>
                  <p className="svc-type-p">{t.p}</p>
                  <div className="svc-type-by">{t.by}</div>
                </div>
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
              Najczęstsze pytanie: „skąd mam wiedzieć, kiedy będzie warsztat?". Odpowiedź: ogłaszamy je z 1-2 tygodniowym wyprzedzeniem na Instagramie i Facebooku — zaobserwuj profil, żeby nie przegapić.
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
                Aktualne terminy, ceny i zapisy na profilu @bawisz_bawialnia i Bawisz - bawialnia Montessori. Jeśli masz pomysł na warsztaty tematyczny dla zamkniętej grupy (urodziny, wyjście przedszkolne) — dzwoń, ustalamy minimum 2 tygodnie wcześniej.
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
              <a href={telHref} className="btn btn-ghost-light">
                Zadzwoń · {CONTACT.phoneDisplay}
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
              ul. Krzywa 19B, Nowy Targ. Aktualny grafik warsztatów (plastyka, glina, gimnastyka, animaloterapia) na Instagramie @bawisz_bawialnia i BAWISZ - bawialnia Montessori. Zapisy telefonicznie albo wiadomością na Instagramie i Messenger.
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
              <a href={telHref} className="btn btn-cream">
                Zadzwoń · {CONTACT.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .svc-types-grid--imgs {
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 1180px;
        }
        @media (max-width: 980px) { .svc-types-grid--imgs { grid-template-columns: 1fr; } }

        .svc-type-card--img {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          padding: 20px;
          align-items: start;
        }
        @media (max-width: 720px) {
          .svc-type-card--img {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 16px;
          }
        }

        .svc-type-img {
          border-radius: var(--r-md);
          overflow: hidden;
          background: var(--paper);
          aspect-ratio: 4 / 3;
        }
        .svc-type-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 720px) { .svc-type-img { aspect-ratio: 16 / 9; } }

        .svc-type-card--img .svc-type-body {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}
