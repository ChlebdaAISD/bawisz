import { useEffect } from 'react'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Decoration } from '../components/Decoration.jsx'
import { IconArrow, IconInstagram, IconPhone } from '../components/icons.jsx'
import { ONAS_FAQ as FAQ, ONAS_META as META } from '../data/o-nas.js'
import { updateHead } from '../lib/head.js'
import { CONTACT, telHref } from '../data/contact.js'

const VALUES = [
  {
    n: '1',
    h: 'Drewno, nie plastik.',
    p: 'Cała przestrzeń bawialni  wykonana jest z naturalnych materiałów. Zabawki są drewniane, bez plastikowego przebodźcowania, sklejka i tkaniny — bez krzykliwych kolorów. Bawisz to miejsce stworzone z myślą o dzieciach i ich rozwoju. To nie estetyka, to przestrzeń wspierająca koncentrację, w której dziecko bawi się bezpiecznie, a ty słyszysz własne myśli.',
  },
  {
    n: '2',
    h: 'Wszystko na wysokości dziecka.',
    p: 'Konstrukcje na wysokości dziecka, wszystko na wyciągnięcie ręki, każda zabawka na swoim miejscu. Dziecko samo wybiera, co chce robić, samo odkłada na miejsce. To jest sedno Montessori — samodzielność.',
  },
  {
    n: '3',
    h: 'Bawisz się ze swoim dzieckiem.',
    p: `Bawicie się razem — na miękkiej wykładzinie, przy klockach, w kącikach tematycznych.
To prawdziwa rodzinna przestrzeń, bez chaosu i pośpiechu. Przestrzeń w której spędzisz wartościowy czas z dzieckiem czy wnukiem.`,
  },
  {
    n: '4',
    h: 'Kawiarnia obok, nie poczekalnia.',
    p: 'Sala jest tak przemyślana, że nie musisz pilnować dziecka na każdym kroku. To miejsce, w którym możesz na chwilę zwolnić-  popracować przy laptopie, poczytać książkę lub gazetę, których u nas nie brak. Możesz spotkać się z przyjaciółką przy kawie i ciastku, podczas gdy wasze dzieci bawią sie spokojnie tuż obok.',
  },
]

export default function ONas({ onBookBirthday }) {
  useEffect(() => {
    updateHead(META)
  }, [])

  return (
    <>
      {/* HERO (AIDA) */}
      <section className="svc-hero">
        <div className="svc-hero-decor">
          <Decoration type="leaf" color="var(--rose)" size={110} rotate={-18} opacity={0.5} className="dec-keep" style={{ right: '6%', top: '14%' }} />
          <Decoration type="leaf" color="var(--rose-deep)" size={70} rotate={28} opacity={0.4} style={{ right: '14%', bottom: '18%' }} />
          <Decoration type="cloud" color="var(--paper)" size={150} opacity={0.18} style={{ left: '4%', top: '12%' }} />
          <Decoration type="leaf" color="var(--sand)" size={60} rotate={-30} opacity={0.4} style={{ left: '8%', bottom: '14%' }} />
          <Decoration type="leaf" color="var(--rose)" size={48} rotate={45} opacity={0.35} style={{ left: '38%', bottom: '6%' }} />
        </div>

        <div className="svc-hero-shell shell">
          <div className="svc-hero-text">
            <Breadcrumb items={[
              { name: 'Strona główna', href: '/' },
              { name: 'O nas', href: '/o-nas/' },
            ]} />

            <h1 className="svc-h1 fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="line">Bawialnia Montessori</span>
              <span className="line hero-italic">w Nowym Targu.</span>
              <span className="line">Drewniana, naturalna, dla dzieci 0-10 lat.</span>
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
              Bawisz to bawialnia Montessori i kawiarnia pod jednym dachem przy ul. Krzywej 19B w Nowym Targu. Pedagogika Montessori w praktyce — naturalne wnętrze, drewniane i kreatywne zabawki, samodzielność dziecka. Bez plastiku, bez zbędnego hałasu i przebodźcowania. Dzieci od 0 do 10 lat bawią się swobodnie, ty pijesz kawę specialty obok. Wstęp do bawialni od 25 zł za godzinę, kawiarnia bez biletu. Ocena 4.9/5 w Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WARTOŚCI (4 cards) */}
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
            <Reveal className="eyebrow">[ Filozofia ]</Reveal>
            <Reveal delay={80}>
              <h2 className="svc-h2">
                Cztery rzeczy, <span className="hero-italic">które robimy inaczej.</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="body-lg svc-sub">
              Najczęstsze pytanie po pierwszej wizycie: „dlaczego u was jest tak spokojnie?". Odpowiedź jest w czterech decyzjach, które podjęliśmy zanim wstawiliśmy pierwszą półkę.
            </Reveal>
          </div>

          <div className="svc-proc-grid">
            {VALUES.map((step, i) => (
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
                Wpadnij <span className="hero-italic">na kawę i zabawę.</span>
              </h2>
              <p className="svc-mid-p">
                Bez rezerwacji w tygodniu — wchodzisz za pierwszą godzinę płacisz 25zł, jeśli zostajesz dłużej masz taniej,  bierzesz kawę z lady. Urodziny, warsztaty i grupy zorganizowane ustalamy przez telefon albo Instagram/Messenger.
              </p>
            </div>
            <div className="svc-mid-ctas">
              <a href={telHref} className="btn btn-pop">
                <IconPhone size={16} /> {CONTACT.phoneDisplay}
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
              Wpadnij <span className="hero-italic">do nas.</span>
            </h2>
            <p className="svc-final-p">
              Sala otwarta od 10:00, kawa parzona od pierwszego klienta, zabierzesz ją także na wynos. Wstęp do bawialni od 25 zł za godzinę, opiekun zawsze gratis. ul. Krzywa 19B w Nowym Targu — centrum, parking obok.
            </p>
            <div className="svc-final-ctas">
              <a href={telHref} className="btn btn-pop">
                Zadzwoń · {CONTACT.phoneDisplay} <IconArrow size={16} />
              </a>
              <button className="btn btn-cream" onClick={onBookBirthday}>
                Zarezerwuj urodziny
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
