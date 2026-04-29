import { IconInstagram, IconFacebook, IconTiktok } from './icons.jsx'

export function Footer({ onBookBirthday }) {
  const year = new Date().getFullYear()

  return (
    <footer className="ftr">
      <div className="shell">
        <div className="ftr-top">
          <div className="ftr-brand">
            <img src="/assets/logo_small.png" alt="" className="ftr-logo" />
            <div className="display ftr-mark">
              <span>po</span><span className="ftr-italic">bawisz</span><span>się?</span>
            </div>
          </div>
          <div className="ftr-cta">
            <button className="btn btn-pop" onClick={onBookBirthday}>Zarezerwuj urodziny</button>
            <a href="tel:+48693766049" className="btn btn-cream">+48 693 766 049</a>
          </div>
        </div>

        <hr className="ftr-line" />

        <div className="ftr-grid">
          <div className="ftr-col">
            <div className="ftr-col-h">Bawisz</div>
            <p className="ftr-col-p">
              Kreatywna sala zabaw i kawiarnia.<br />
              ul. Krzywa 19B, 34-400 Nowy Targ.
            </p>
            <div className="ftr-socials">
              <a href="https://www.instagram.com/bawisz_bawialnia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram size={18} /></a>
              <a href="https://www.facebook.com/p/Bawisz-bawialnia-Montessori-61572522181693/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFacebook size={18} /></a>
              <a href="https://www.tiktok.com/@bawisz.bawialnia" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><IconTiktok size={18} /></a>
            </div>
          </div>

          <div className="ftr-col">
            <div className="ftr-col-h">Co u nas</div>
            <ul className="ftr-list">
              <li><a href="#oferta" className="link-u">Sala zabaw</a></li>
              <li><a href="#cennik" className="link-u">Cennik</a></li>
              <li><a href="#oferta" className="link-u">Warsztaty</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onBookBirthday() }} className="link-u">Urodziny</a></li>
            </ul>
          </div>

          <div className="ftr-col">
            <div className="ftr-col-h">Odwiedź</div>
            <ul className="ftr-list">
              <li><a href="#godziny" className="link-u">Godziny otwarcia</a></li>
              <li><a href="#kontakt" className="link-u">Kontakt</a></li>
              <li><a href="https://maps.google.com/?q=Krzywa+19B+Nowy+Targ" target="_blank" rel="noopener noreferrer" className="link-u">Nawigacja</a></li>
              <li><a href="#menu" className="link-u">Kawiarnia</a></li>
            </ul>
          </div>

          <div className="ftr-col">
            <div className="ftr-col-h">Kontakt</div>
            <p className="ftr-col-p">
              <a href="tel:+48693766049" className="link-u">+48 693 766 049</a><br />
              Pn–Pt 10:00–19:00<br />
              Sb–Nd 10:00–20:00
            </p>
          </div>
        </div>

        <hr className="ftr-line" />

        <div className="ftr-bottom">
          <span>&copy; {year} Bawisz · Sala zabaw i kawiarnia · Nowy Targ</span>
          <span>Made with ☕ in Nowy Targ</span>
        </div>
      </div>

      <style>{`
        .ftr {
          background: var(--brand-deep);
          color: var(--cream);
          padding: 64px 0 32px;
        }
        .ftr-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .ftr-brand { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
        .ftr-logo {
          height: 88px;
          width: auto;
          filter: brightness(0) invert(0.95);
          opacity: 0.92;
        }
        .ftr-mark {
          font-size: clamp(40px, 6vw, 80px);
          line-height: 0.85;
          color: var(--cream);
          letter-spacing: -0.01em;
        }
        @media (max-width: 720px) { .ftr-logo { height: 64px; } }
        .ftr-mark span:first-child, .ftr-mark span:last-child { color: var(--ink-faint); }
        .ftr-italic { font-style: italic; color: var(--terracotta); }

        .ftr-cta { display: flex; flex-wrap: wrap; gap: 10px; align-self: flex-end; }

        .ftr-line { border: none; border-top: 1.5px dashed rgba(255,255,255,0.18); margin: 0; }

        .ftr-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
          gap: 40px;
          padding: 48px 0;
        }
        @media (max-width: 820px) { .ftr-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .ftr-grid { grid-template-columns: 1fr; } }

        .ftr-col-h {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 16px;
        }
        .ftr-col-p { font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.75); margin: 0 0 16px; }

        .ftr-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; font-size: 14px; }
        .ftr-list a { color: rgba(255,255,255,0.85); }

        .ftr-socials { display: flex; gap: 8px; }
        .ftr-socials a {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.2);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--cream);
          transition: background 0.2s, border-color 0.2s;
        }
        .ftr-socials a:hover { background: var(--terracotta-deep); border-color: var(--terracotta-deep); color: var(--cream); }

        .ftr-form { display: flex; gap: 6px; }
        .ftr-form input {
          flex: 1;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: var(--r-pill);
          padding: 10px 16px;
          color: var(--cream);
          font-family: inherit;
          font-size: 14px;
        }
        .ftr-form input::placeholder { color: rgba(255,255,255,0.4); }
        .ftr-form input:focus { outline: none; border-color: var(--terracotta); }
        .ftr-form button {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: var(--terracotta);
          border: 1.5px solid var(--terracotta);
          color: var(--bone);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .ftr-form button:hover { background: var(--terracotta-deep); border-color: var(--terracotta-deep); }

        .ftr-bottom {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 32px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
      `}</style>
    </footer>
  )
}
