import { useEffect } from 'react'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { CONTACT, telHref, mailHref } from '../data/contact.js'
import { updateHead } from '../lib/head.js'

const META = {
  title: 'Polityka prywatności — Bawisz · bawialnia Montessori',
  description:
    'Polityka prywatności bawialni Bawisz w Nowym Targu. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.',
  canonical: 'https://bawisz.pl/polityka-prywatnosci/',
}

const LAST_UPDATED = '18 maja 2026'

export default function PolitykaPrywatnosci() {
  useEffect(() => {
    updateHead(META)
  }, [])

  return (
    <section className="pp">
      <div className="shell">
        <Breadcrumb items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Polityka prywatności', href: '/polityka-prywatnosci/' },
        ]} />

        <Reveal>
          <h1 className="pp-h1">Polityka prywatności</h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="pp-updated">Ostatnia aktualizacja: {LAST_UPDATED}</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="pp-lead">
            Dbamy o Państwa prywatność. Poniżej znajdują się informacje o tym, jak przetwarzamy dane osobowe pozyskane
            przez formularz rezerwacji urodzin oraz inne kanały kontaktu.
          </p>
        </Reveal>

        <Reveal className="pp-section">
          <h2>1. Administrator danych osobowych</h2>
          <p>
            Administratorem Państwa danych osobowych jest <strong>{CONTACT.name}</strong>, z siedzibą przy{' '}
            {CONTACT.address.full}. Kontakt: <a href={telHref}>{CONTACT.phoneDisplay}</a>,{' '}
            <a href={mailHref}>{CONTACT.email}</a>.
          </p>
        </Reveal>

        <Reveal className="pp-section">
          <h2>2. Cele przetwarzania danych</h2>
          <p>Państwa dane osobowe przetwarzamy w następujących celach:</p>
          <ul>
            <li>kontakt zwrotny w sprawie zapytania o rezerwację urodzin lub innego wydarzenia,</li>
            <li>obsługa rezerwacji oraz organizacja przyjęcia w bawialni,</li>
            <li>realizacja zawartej umowy (świadczenie usługi rezerwacji sali),</li>
            <li>wystawienie dokumentu sprzedaży (faktura, paragon) — w zakresie obowiązków podatkowych,</li>
            <li>archiwizacja korespondencji — w celu wykazania należytego wykonania umowy.</li>
          </ul>
        </Reveal>

        <Reveal className="pp-section">
          <h2>3. Podstawa prawna przetwarzania</h2>
          <ul>
            <li>
              <strong>Art. 6 ust. 1 lit. b RODO</strong> — przetwarzanie niezbędne do wykonania umowy lub podjęcia
              działań przed zawarciem umowy (kontakt w sprawie rezerwacji).
            </li>
            <li>
              <strong>Art. 6 ust. 1 lit. a RODO</strong> — Państwa zgoda wyrażona przez zaznaczenie checkboxa w
              formularzu.
            </li>
            <li>
              <strong>Art. 6 ust. 1 lit. c RODO</strong> — wypełnienie obowiązku prawnego (przepisy podatkowe).
            </li>
            <li>
              <strong>Art. 6 ust. 1 lit. f RODO</strong> — prawnie uzasadniony interes administratora (archiwizacja
              korespondencji, ewentualne dochodzenie roszczeń).
            </li>
          </ul>
        </Reveal>

        <Reveal className="pp-section">
          <h2>4. Zakres przetwarzanych danych</h2>
          <p>Przez formularz rezerwacji urodzin zbieramy następujące dane:</p>
          <ul>
            <li>imię i nazwisko osoby kontaktowej,</li>
            <li>numer telefonu,</li>
            <li>adres e-mail (opcjonalnie),</li>
            <li>treść zapytania oraz uwagi do rezerwacji,</li>
            <li>
              dane dotyczące planowanego wydarzenia (wiek solenizanta, przybliżona liczba dzieci i dorosłych, data,
              wybrany pakiet).
            </li>
          </ul>
        </Reveal>

        <Reveal className="pp-section">
          <h2>5. Okres przechowywania danych</h2>
          <p>
            Dane kontaktowe i treść zapytania przechowujemy przez <strong>12 miesięcy</strong> od ostatniego kontaktu
            z Państwa strony, chyba że doszło do realizacji usługi — wówczas dane przechowywane są zgodnie z przepisami
            podatkowymi (5 lat liczonych od końca roku kalendarzowego, w którym wykonano usługę).
          </p>
        </Reveal>

        <Reveal className="pp-section">
          <h2>6. Odbiorcy danych</h2>
          <p>Państwa dane mogą zostać udostępnione wyłącznie:</p>
          <ul>
            <li>dostawcy usługi e-mail oraz automatyzacji (operator skrzynki pocztowej, narzędzie n8n) — w zakresie niezbędnym do dostarczenia korespondencji,</li>
            <li>biuru rachunkowemu — w zakresie obsługi księgowej,</li>
            <li>uprawnionym organom państwowym — w przypadkach przewidzianych przez prawo.</li>
          </ul>
          <p>Nie sprzedajemy ani nie udostępniamy Państwa danych w celach marketingowych podmiotom trzecim.</p>
        </Reveal>

        <Reveal className="pp-section">
          <h2>7. Prawa osoby, której dane dotyczą</h2>
          <p>Przysługują Państwu następujące prawa:</p>
          <ul>
            <li>prawo dostępu do swoich danych oraz otrzymania ich kopii,</li>
            <li>prawo do sprostowania (poprawienia) danych,</li>
            <li>prawo do usunięcia danych („prawo do bycia zapomnianym”),</li>
            <li>prawo do ograniczenia przetwarzania,</li>
            <li>prawo do wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>prawo do przenoszenia danych,</li>
            <li>prawo do cofnięcia zgody w dowolnym momencie (cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem),</li>
            <li>prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
          </ul>
        </Reveal>

        <Reveal className="pp-section">
          <h2>8. Kontakt w sprawach RODO</h2>
          <p>
            W sprawach dotyczących przetwarzania danych osobowych prosimy o kontakt na adres e-mail:{' '}
            <a href={mailHref}>{CONTACT.email}</a> lub telefonicznie: <a href={telHref}>{CONTACT.phoneDisplay}</a>.
          </p>
        </Reveal>

        <Reveal className="pp-section">
          <h2>9. Pliki cookies</h2>
          <p>
            Strona internetowa Bawisz wykorzystuje pliki cookies techniczne, niezbędne do prawidłowego działania
            serwisu. Nie używamy cookies marketingowych ani analitycznych bez Państwa zgody. Mogą Państwo w dowolnym
            momencie wyłączyć obsługę plików cookies w ustawieniach przeglądarki.
          </p>
        </Reveal>

        <Reveal className="pp-section">
          <h2>10. Zmiany polityki prywatności</h2>
          <p>
            Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Aktualna wersja jest
            zawsze dostępna na tej stronie.
          </p>
        </Reveal>
      </div>

      <style>{`
        .pp { padding: 80px 0 100px; background: var(--paper); color: var(--ink); }
        .pp-h1 {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.05;
          margin: 24px 0 18px;
          color: var(--ink);
        }
        .pp-lead {
          font-size: 18px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 70ch;
          margin: 0 0 40px;
        }
        .pp-updated {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin: 0 0 24px;
        }
        .pp-section {
          margin: 0 0 32px;
          max-width: 70ch;
        }
        .pp-section h2 {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(22px, 2.6vw, 28px);
          color: var(--ink);
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .pp-section p {
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin: 0 0 12px;
        }
        .pp-section ul {
          padding-left: 22px;
          margin: 0 0 12px;
          color: var(--ink-soft);
        }
        .pp-section li {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 6px;
        }
        .pp-section a {
          color: var(--brand-deep);
          text-decoration: underline;
          text-decoration-color: var(--brand);
          text-underline-offset: 3px;
        }
        .pp-section a:hover { color: var(--brand); }
        .pp-section strong { color: var(--ink); font-weight: 600; }
      `}</style>
    </section>
  )
}
