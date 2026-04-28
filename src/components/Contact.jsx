import { Reveal } from './Reveal.jsx'
import { IconPhone, IconInstagram, IconFacebook, IconTiktok, IconArrowUp } from './icons.jsx'

export function Contact() {
  const socials = [
    { icon: IconInstagram, label: '@bawisz_bawialnia', sub: 'Codzienne kadry', href: 'https://www.instagram.com/bawisz_bawialnia/' },
    { icon: IconFacebook, label: 'Bawisz · bawialnia', sub: 'Wydarzenia i info', href: 'https://www.facebook.com/p/Bawisz-bawialnia-Montessori-61572522181693/' },
    { icon: IconTiktok, label: '@bawisz.bawialnia', sub: 'Kulisy i zabawy', href: 'https://www.tiktok.com/@bawisz.bawialnia' },
  ]

  return (
    <section id="kontakt" className="ctc">
      <div className="shell ctc-grid">
        <div>
          <Reveal className="eyebrow">[ Kontakt ]</Reveal>
          <Reveal delay={80}>
            <h2 className="display ctc-h">
              Pytanie?<br />
              Zadzwoń<br />
              <span className="hero-italic">albo napisz.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg ctc-sub">
            Rezerwacja urodzin, pytania o warsztaty, terminy wynajmu sali — najszybciej
            złapiesz nas telefonicznie. Odpisujemy też na Messengerze i Instagramie.
          </Reveal>

          <Reveal delay={240}>
            <a href="tel:+48693766049" className="btn btn-primary ctc-call">
              <IconPhone size={18} /> +48 693 766 049
            </a>
          </Reveal>
        </div>

        <div className="ctc-social">
          <Reveal className="ctc-social-h">Albo śledź nas tutaj.</Reveal>
          <div className="ctc-list">
            {socials.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="ctc-card">
                  <div className="ctc-card-icon"><s.icon size={22} /></div>
                  <div className="ctc-card-text">
                    <div className="ctc-card-l">{s.label}</div>
                    <div className="ctc-card-s">{s.sub}</div>
                  </div>
                  <div className="ctc-card-arrow"><IconArrowUp size={18} /></div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ctc { padding: 120px 0 100px; background: var(--cream); }
        .ctc-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 900px) { .ctc-grid { grid-template-columns: 1fr; gap: 40px; } }

        .ctc-h { font-size: clamp(48px, 7vw, 110px); margin: 16px 0 24px; color: var(--ink); }
        .ctc-sub { max-width: 46ch; margin-bottom: 32px; }
        .ctc-call { font-size: 18px; padding: 18px 28px; }

        .ctc-social-h { font-family: var(--font-display); font-size: 28px; color: var(--ink); margin-bottom: 18px; }

        .ctc-list { display: flex; flex-direction: column; gap: 10px; }
        .ctc-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          background: var(--bone);
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
          transition: background 0.2s, transform 0.2s;
        }
        .ctc-card:hover { background: var(--sage); transform: translateY(-2px); }
        .ctc-card-icon {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--line);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--cream);
        }
        .ctc-card-text { flex: 1; }
        .ctc-card-l { font-weight: 700; color: var(--ink); }
        .ctc-card-s { font-size: 12px; color: var(--ink-mute); }
        .ctc-card-arrow { color: var(--ink-mute); transition: transform 0.2s, color 0.2s; }
        .ctc-card:hover .ctc-card-arrow { color: var(--ink); transform: translate(4px, -4px); }
      `}</style>
    </section>
  )
}
