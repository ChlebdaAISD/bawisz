import { useEffect, useMemo, useRef, useState } from 'react'
import { IconClose, IconArrow, IconCheck, IconCake, IconChevronDown } from './icons.jsx'
import { CONTACT, telHref } from '../data/contact.js'

const PACKAGES = {
  mini: {
    id: 'mini',
    name: 'MINI',
    pricePerChild: 45,
    duration: '2 h',
    tone: 'cream',
    perks: ['2h zabawy', 'dekoracje', 'poczęstunek', 'obsługa'],
    snacks: ['woda no limit', 'sok tłoczony 200 ml/os.', 'paluszki', 'OTO chrupki', 'galaretki'],
    decor: ['kolorowa zastawa lub w naturalnym stylu', 'balon cyfra'],
  },
  standard: {
    id: 'standard',
    name: 'STANDARD',
    pricePerChild: 74,
    duration: '2,5 h',
    tone: 'rose',
    perks: ['sala na wyłączność (od 10 dzieci)', 'prezent dla solenizanta', 'motyw lasu lub kwiatów'],
    snacks: ['woda no limit', 'sok tłoczony no limit', 'owoce', 'paluszki', 'OTO chrupki', 'gofry', 'cake pops lub babeczki', 'galaretki'],
    decor: ['zastawa w wybranym motywie', 'ścianka dekoracyjna', 'balon cyfra', 'girlanda balonowa', 'cyfrowe zaproszenia'],
  },
}

const PARENTS_ADDON = {
  pricePerAdult: 55,
  duration: 'na czas urodzin',
  snacks: [
    'woda · sok · lemoniada',
    'kawa · herbata',
    'deska przekąsek (bagietka z serkiem i wędzonym łososiem, sery, krakersy, orzechy, kabanosy, winogrona, oliwki)',
  ],
  decor: ['wydzielony stół z elegancką zastawą'],
}

const CONFETTI_COLORS = ['#A98062', '#9DB585', '#C4D8AE', '#EAD8C4', '#F4EBDB', '#F4B5C2']

function buildConfetti(n) {
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 700,
    d: 2.4 + Math.random() * 1.6,
    delay: Math.random() * 0.35,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    shape: i % 3, // 0=rect, 1=circle, 2=triangle
    rot: Math.random() * 720 + 360,
  }))
}

function calcTotal(d) {
  const pkg = PACKAGES[d.package]
  const childrenCost = pkg ? pkg.pricePerChild * (Number(d.childrenCount) || 0) : 0
  const parentsCost = d.parentsAddon ? PARENTS_ADDON.pricePerAdult * (Number(d.parentsCount) || 0) : 0
  return childrenCost + parentsCost
}

function formatDate(d) {
  if (!d) return '—'
  try {
    return new Date(d).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return d
  }
}

export function BirthdayModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    age: '4',
    childrenCount: 10,
    date: '',
    package: '',
    parentsAddon: false,
    parentsCount: 4,
    name: '',
    phone: '',
    email: '',
    notes: '',
    rodoConsent: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [confetti, setConfetti] = useState([])
  const [expandedPkg, setExpandedPkg] = useState(null)
  const [parentsExpanded, setParentsExpanded] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) {
      setStep(1)
      setSubmitError(null)
      setSubmitting(false)
      setConfetti([])
      setExpandedPkg(null)
      setParentsExpanded(false)
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (step !== 4) return
    setConfetti(buildConfetti(56))
    const t = setTimeout(() => setConfetti([]), 4200)
    return () => clearTimeout(t)
  }, [step])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open || step === 4) return
    const t = setTimeout(() => {
      const card = cardRef.current
      if (!card) return
      const target = card.querySelector('input, select, textarea, button:not(.bm-close)')
      if (target && typeof target.focus === 'function') target.focus()
    }, 60)
    return () => clearTimeout(t)
  }, [open, step])

  const total = useMemo(() => calcTotal(data), [data])
  const pkg = PACKAGES[data.package]
  const childrenCost = pkg ? pkg.pricePerChild * (Number(data.childrenCount) || 0) : 0
  const parentsCost = data.parentsAddon ? PARENTS_ADDON.pricePerAdult * (Number(data.parentsCount) || 0) : 0

  if (!open) return null

  const set = (k, v) => setData((prev) => ({ ...prev, [k]: v }))

  const today = new Date().toISOString().split('T')[0]

  const step1Valid = data.date.length > 0 && Number(data.childrenCount) >= 4 && !!data.age
  const step2Valid = (data.package === 'mini' || data.package === 'standard') &&
    (!data.parentsAddon || Number(data.parentsCount) >= 1)
  const emailValid = !data.email || /\S+@\S+\.\S+/.test(data.email)
  const phoneDigits = data.phone.replace(/\D/g, '')
  const phoneValid = phoneDigits.length >= 9 && /^[\d\s\-+()]+$/.test(data.phone.trim())
  const step3Valid = data.name.trim().length > 0 && phoneValid && data.rodoConsent && emailValid

  const step1Hint = !step1Valid
    ? (!data.date ? 'Wybierz preferowaną datę urodzin' :
       Number(data.childrenCount) < 4 ? 'Minimum 4 dzieci' : '')
    : ''
  const step2Hint = !step2Valid
    ? (!pkg ? 'Wybierz pakiet (MINI lub STANDARD)' :
       data.parentsAddon && Number(data.parentsCount) < 1 ? 'Podaj liczbę dorosłych' : '')
    : ''
  const step3Hint = !step3Valid
    ? (!data.name.trim() ? 'Wpisz swoje imię i nazwisko' :
       !data.phone.trim() ? 'Wpisz numer telefonu' :
       !phoneValid ? 'Wpisz poprawny numer telefonu (min. 9 cyfr)' :
       !emailValid ? 'Sprawdź adres email' :
       !data.rodoConsent ? 'Zaznacz zgodę na przetwarzanie danych' : '')
    : ''

  async function handleSubmit() {
    if (!step3Valid || submitting) return
    setSubmitting(true)
    setSubmitError(null)

    const submitChildrenCost = pkg.pricePerChild * (Number(data.childrenCount) || 0)
    const submitParentsCost = data.parentsAddon ? PARENTS_ADDON.pricePerAdult * (Number(data.parentsCount) || 0) : 0

    const payload = {
      child_age: data.age,
      children_count: Number(data.childrenCount),
      event_date: data.date,
      event_date_pl: formatDate(data.date),

      package_id: pkg.id,
      package_name: pkg.name,
      package_duration: pkg.duration,
      package_price_per_child: pkg.pricePerChild,
      package_snacks: pkg.snacks,
      package_decor: pkg.decor,
      package_perks: pkg.perks,
      children_cost: submitChildrenCost,

      parents_addon: data.parentsAddon,
      parents_count: data.parentsAddon ? Number(data.parentsCount) : 0,
      parents_price_per_person: data.parentsAddon ? PARENTS_ADDON.pricePerAdult : 0,
      parents_cost: submitParentsCost,
      parents_snacks: data.parentsAddon ? PARENTS_ADDON.snacks : [],
      parents_decor: data.parentsAddon ? PARENTS_ADDON.decor : [],

      client_name: data.name.trim(),
      client_phone: data.phone.trim(),
      client_email: data.email.trim(),
      client_notes: data.notes.trim(),

      total_estimated: total,

      company_name: CONTACT.name,
      company_phone: CONTACT.phone,
      company_email: CONTACT.email,
      owner_email: CONTACT.ownerEmail,
      company_address: CONTACT.address.full,
      company_maps_url: CONTACT.address.mapsUrl,
      company_hours: CONTACT.hours.summary,
      company_instagram: CONTACT.socials.instagram.url,
      company_facebook: CONTACT.socials.facebook.url,
      company_tiktok: CONTACT.socials.tiktok.url,
    }

    try {
      const res = await fetch(CONTACT.webhooks.birthdayReservation, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Webhook returned ${res.status}`)
      setStep(4)
    } catch {
      setSubmitError(`Nie udało się wysłać prośby. Prosimy o telefon: ${CONTACT.phone}`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bm-back" role="dialog" aria-modal="true" aria-label="Rezerwacja urodzin" onClick={onClose}>
      <div className="bm-card" ref={cardRef} onClick={(e) => e.stopPropagation()}>
        <button className="bm-close" onClick={onClose} aria-label="Zamknij"><IconClose size={20} /></button>

        <div className="bm-head">
          <div className="bm-icon"><IconCake size={22} /></div>
          <div>
            <div className="bm-eyebrow">[ Urodziny w Bawiszu ]</div>
            <h3 className="display bm-h">
              {step === 4 ? 'Wysłane.' : ['Powiedz nam o urodzinach', 'Wybierz pakiet', 'Twoje dane'][step - 1]}
            </h3>
          </div>
        </div>

        {step < 4 && (
          <div className="bm-progress">
            <div className="bm-progress-bar" style={{ width: `${(step / 3) * 100}%` }} />
          </div>
        )}

        {step === 1 && (
          <div className="bm-body">
            <div className="bm-row">
              <label className="bm-field">
                <span>Ile latek kończy?</span>
                <select value={data.age} onChange={(e) => set('age', e.target.value)}>
                  {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((a) => <option key={a} value={String(a)}>{a}</option>)}
                </select>
              </label>
              <label className="bm-field">
                <span>Przybliżona liczba dzieci</span>
                <input type="number" min={4} max={40} value={data.childrenCount}
                  onChange={(e) => set('childrenCount', e.target.value)} placeholder="np. 12" />
              </label>
            </div>
            <label className="bm-field">
              <span>Preferowana data</span>
              <input type="date" value={data.date} min={today}
                onChange={(e) => set('date', e.target.value)} />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="bm-body">
            <div className="bm-section-label">Wybierz pakiet główny</div>
            <div className="bm-pkgs-grid" role="radiogroup" aria-label="Pakiet urodzin">
              {Object.values(PACKAGES).map((p, idx, arr) => {
                const cost = p.pricePerChild * (Number(data.childrenCount) || 0)
                const isOn = data.package === p.id
                const onCardKey = (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    set('package', p.id)
                    return
                  }
                  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
                  e.preventDefault()
                  const nextIdx = (e.key === 'ArrowRight' || e.key === 'ArrowDown')
                    ? (idx + 1) % arr.length
                    : (idx - 1 + arr.length) % arr.length
                  set('package', arr[nextIdx].id)
                  const sibling = e.currentTarget.parentElement.children[nextIdx]
                  if (sibling && sibling.focus) sibling.focus()
                }
                return (
                  <div key={p.id}
                    role="radio"
                    aria-checked={isOn}
                    tabIndex={isOn || (!data.package && idx === 0) ? 0 : -1}
                    className={`bm-pkg-card bm-pkg-${p.tone} ${isOn ? 'is-on' : ''}`}
                    onClick={() => set('package', p.id)}
                    onKeyDown={onCardKey}>
                    <div className="bm-pkg-top">
                      <span className={`bm-pkg-radio ${isOn ? 'is-on' : ''}`} aria-hidden="true">
                        {isOn && <IconCheck size={12} />}
                      </span>
                      <span className="bm-pkg-name">{p.name}</span>
                    </div>
                    <div className="display bm-pkg-price">{p.pricePerChild} zł<span className="bm-pkg-unit"> / dziecko</span></div>
                    <div className="bm-pkg-duration">{p.duration}</div>

                    {p.perks.length > 0 && (
                      <ul className="bm-pkg-list bm-pkg-perks">
                        {p.perks.map((perk) => <li key={perk}>{perk}</li>)}
                      </ul>
                    )}

                    <button type="button"
                      className={`bm-pkg-toggle ${expandedPkg === p.id ? 'is-open' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setExpandedPkg(expandedPkg === p.id ? null : p.id) }}
                      aria-expanded={expandedPkg === p.id}>
                      <span>Co dokładnie zawiera?</span>
                      <IconChevronDown size={14} />
                    </button>
                    {expandedPkg === p.id && (
                      <div className="bm-pkg-details">
                        <div className="bm-pkg-sublabel">Poczęstunek</div>
                        <ul className="bm-pkg-list">{p.snacks.map((s) => <li key={s}>{s}</li>)}</ul>
                        <div className="bm-pkg-sublabel">Dekoracje</div>
                        <ul className="bm-pkg-list">{p.decor.map((d) => <li key={d}>{d}</li>)}</ul>
                      </div>
                    )}

                    {isOn && (
                      <div className="bm-pkg-cost">
                        Razem (szacunkowo): <strong>ok. {cost} zł</strong>
                        <span className="bm-pkg-cost-calc">({data.childrenCount} × {p.pricePerChild} zł)</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <label className={`bm-addon-toggle ${data.parentsAddon ? 'is-on' : ''}`}>
              <input type="checkbox" checked={data.parentsAddon}
                onChange={(e) => set('parentsAddon', e.target.checked)} />
              <span className="bm-addon-tick" aria-hidden="true">
                {data.parentsAddon && <IconCheck size={14} />}
              </span>
              <span className="bm-addon-text">
                <strong>Dodaj pakiet dla rodziców</strong>
                <span className="bm-addon-sub">+55 zł / osoba · na czas urodzin</span>
              </span>
            </label>

            {data.parentsAddon && (
              <div className="bm-addon-panel">
                <label className="bm-field bm-field-inline">
                  <span>Przybliżona liczba dorosłych</span>
                  <input type="number" min={1} max={30} value={data.parentsCount}
                    onChange={(e) => set('parentsCount', e.target.value)} />
                </label>

                <button type="button"
                  className={`bm-pkg-toggle ${parentsExpanded ? 'is-open' : ''}`}
                  onClick={() => setParentsExpanded(!parentsExpanded)}
                  aria-expanded={parentsExpanded}>
                  <span>Co zawiera pakiet rodziców?</span>
                  <IconChevronDown size={14} />
                </button>
                {parentsExpanded && (
                  <div className="bm-pkg-details">
                    <div className="bm-pkg-sublabel">Poczęstunek</div>
                    <ul className="bm-pkg-list">{PARENTS_ADDON.snacks.map((s) => <li key={s}>{s}</li>)}</ul>
                    <div className="bm-pkg-sublabel">Dekoracje</div>
                    <ul className="bm-pkg-list">{PARENTS_ADDON.decor.map((d) => <li key={d}>{d}</li>)}</ul>
                  </div>
                )}

                <div className="bm-pkg-cost">
                  Razem (szacunkowo): <strong>ok. {parentsCost} zł</strong>
                  <span className="bm-pkg-cost-calc">({data.parentsCount} × 55 zł)</span>
                </div>
              </div>
            )}

            {pkg && (
              <div className="bm-total-callout">
                <span className="bm-total-label">Razem (szacunkowo)</span>
                <span className="bm-total-value">ok. {total} zł</span>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="bm-body">
            <label className="bm-field">
              <span>Imię i nazwisko</span>
              <input type="text" value={data.name} onChange={(e) => set('name', e.target.value)} placeholder="Anna Kowalska" />
            </label>
            <div className="bm-row">
              <label className="bm-field">
                <span>Telefon</span>
                <input type="tel" value={data.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+48 …" />
              </label>
              <label className="bm-field">
                <span>Email <em>(opcjonalnie)</em></span>
                <input type="email" value={data.email} onChange={(e) => set('email', e.target.value)} placeholder="email@example.pl" />
              </label>
            </div>
            <label className="bm-field">
              <span>Uwagi (alergie, motyw, niespodzianki)</span>
              <textarea value={data.notes} onChange={(e) => set('notes', e.target.value)} rows={3} placeholder="np. motyw leśny, alergia na orzechy" />
            </label>

            <div className="bm-summary">
              <div className="bm-summary-h">Podsumowanie zapytania</div>
              <div className="bm-summary-row"><span>Urodziny</span><strong>{data.age}-latka/-latki</strong></div>
              <div className="bm-summary-row"><span>Data</span><strong>{formatDate(data.date)}</strong></div>
              <div className="bm-summary-row"><span>Dzieci (przybliżona liczba)</span><strong>{data.childrenCount}</strong></div>

              {pkg && (
                <div className="bm-summary-block">
                  <div className="bm-summary-block-h">
                    Pakiet {pkg.name} · {pkg.duration}
                    <span className="bm-summary-cost"> · {pkg.pricePerChild} zł/dziecko × {data.childrenCount}</span>
                  </div>
                </div>
              )}

              {data.parentsAddon && (
                <div className="bm-summary-block">
                  <div className="bm-summary-block-h">
                    + Pakiet dla rodziców · na czas urodzin
                    <span className="bm-summary-cost"> · 55 zł/osoba × {data.parentsCount}</span>
                  </div>
                </div>
              )}

              <div className="bm-summary-total">
                <span>Razem (szacunkowo)</span>
                <strong>ok. {total} zł</strong>
              </div>
            </div>

            <label className="bm-rodo">
              <input type="checkbox" checked={data.rodoConsent}
                onChange={(e) => set('rodoConsent', e.target.checked)} />
              <span className="bm-rodo-tick" aria-hidden="true">
                {data.rodoConsent && <IconCheck size={12} />}
              </span>
              <span className="bm-rodo-text">
                Wyrażam zgodę na przetwarzanie moich danych przez {CONTACT.name}
                w celu odpowiedzi na to zapytanie, zgodnie z{' '}
                <a href="/polityka-prywatnosci/" target="_blank" rel="noopener noreferrer">polityką prywatności</a>.
                Dane wykorzystamy tylko do kontaktu w sprawie tych urodzin — żadnych newsletterów.
              </span>
            </label>

            {submitError && <div className="bm-error">{submitError}</div>}
          </div>
        )}

        {step === 4 && (
          <div className="bm-success">
            <div className="bm-confetti" aria-hidden="true">
              {confetti.map((c) => (
                <span key={c.id}
                  className={`bm-confetti-piece bm-conf-shape-${c.shape}`}
                  style={{
                    '--x': `${c.x}px`,
                    '--d': `${c.d}s`,
                    '--delay': `${c.delay}s`,
                    '--c': c.color,
                    '--rot': `${c.rot}deg`,
                  }} />
              ))}
            </div>
            <div className="bm-success-icon"><IconCheck size={36} /></div>
            <div className="display bm-success-h">Dziękujemy za prośbę o rezerwację!</div>
            <p className="bm-success-p">
              Już patrzymy na Państwa zapytanie. Odezwiemy się w ciągu <strong>24 godzin</strong>,
              żeby potwierdzić dostępność terminu i dograć szczegóły.
            </p>
            {data.email && (
              <p className="bm-success-p bm-success-p-small">
                Sprawdź też skrzynkę email — wysłaliśmy Ci podsumowanie tego, co wpisałeś/aś w formularzu.
              </p>
            )}
            <div className="bm-success-cta">
              <a href={telHref} className="btn btn-pop">Zadzwoń · {CONTACT.phoneDisplay}</a>
              <button className="btn btn-ghost" onClick={onClose}>Zamknij</button>
            </div>
          </div>
        )}

        {step < 4 && (
          <div className="bm-foot">
            <div className="bm-foot-left">
              <button className="btn btn-ghost" disabled={step === 1 || submitting}
                onClick={() => setStep((s) => Math.max(1, s - 1))}>← Wstecz</button>
            </div>
            <div className="bm-foot-right">
              {step < 3 ? (
                <>
                  {step === 1 && !step1Valid && <div className="bm-foot-hint">{step1Hint}</div>}
                  {step === 2 && !step2Valid && <div className="bm-foot-hint">{step2Hint}</div>}
                  <button className="btn btn-primary"
                    disabled={(step === 1 && !step1Valid) || (step === 2 && !step2Valid)}
                    onClick={() => setStep((s) => s + 1)}>
                    Dalej <IconArrow size={16} />
                  </button>
                </>
              ) : (
                <>
                  {!step3Valid && <div className="bm-foot-hint">{step3Hint}</div>}
                  <div className="bm-submit-wrap">
                    <button className="btn btn-pop"
                      disabled={!step3Valid || submitting}
                      onClick={handleSubmit}>
                      {submitting ? 'Wysyłam prośbę…' : <>Wyślij prośbę o rezerwację <IconArrow size={16} /></>}
                    </button>
                    <small className="bm-submit-note">To prośba o rezerwację — odezwiemy się w 24 h, żeby potwierdzić termin.</small>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .bm-back {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(27,26,23,0.5);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fade-up 0.3s both;
        }
        .bm-card {
          width: 100%; max-width: 640px;
          max-height: 92vh;
          overflow-y: auto;
          background: var(--paper);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-xl);
          padding: 32px;
          position: relative;
          animation: fade-up 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          box-shadow: 0 30px 80px -30px rgba(119,98,88,0.45);
        }
        .bm-close {
          position: absolute; top: 18px; right: 18px;
          width: 38px; height: 38px;
          border: 1px solid var(--line-soft);
          border-radius: 50%;
          background: var(--bone);
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--ink);
        }
        .bm-close:hover { background: var(--brand-deep); color: var(--cream); }

        .bm-head { display: flex; gap: 14px; align-items: center; margin-bottom: 20px; }
        .bm-icon {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: var(--rose-soft);
          color: var(--brand-deep);
          display: inline-flex; align-items: center; justify-content: center;
        }
        .bm-eyebrow { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-mute); }
        .bm-h { font-size: 32px; color: var(--ink); margin: 4px 0 0; }

        .bm-progress { height: 4px; background: var(--cream-deep); border-radius: var(--r-pill); margin-bottom: 28px; overflow: hidden; }
        .bm-progress-bar { height: 100%; background: var(--rose-deep); border-radius: var(--r-pill); transition: width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); }

        .bm-body { display: flex; flex-direction: column; gap: 16px; min-height: 200px; }
        .bm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 480px) { .bm-row { grid-template-columns: 1fr; } }

        .bm-field { display: flex; flex-direction: column; gap: 6px; }
        .bm-field span { font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-mute); }
        .bm-field span em { font-style: italic; text-transform: none; font-weight: 400; letter-spacing: 0; }
        .bm-field input, .bm-field select, .bm-field textarea {
          padding: 12px 14px;
          border: 1px solid var(--line-soft);
          border-radius: var(--r-md);
          background: var(--bone);
          font-family: inherit;
          font-size: 15px;
          color: var(--ink);
          resize: vertical;
        }
        .bm-field input:focus, .bm-field select:focus, .bm-field textarea:focus {
          outline: none;
          border-color: var(--brand);
        }
        .bm-field-inline { max-width: 280px; }

        .bm-section-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin-bottom: 4px;
        }
        .bm-pkgs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 540px) { .bm-pkgs-grid { grid-template-columns: 1fr; } }

        .bm-pkg-card {
          text-align: left;
          padding: 20px;
          border-radius: var(--r-md);
          border: 1.5px solid var(--line-soft);
          background: var(--bone);
          color: var(--ink);
          transition: transform 0.15s, box-shadow 0.2s, border-color 0.2s;
          box-shadow: 0 4px 18px -14px rgba(168,128,98,0.35);
          display: flex;
          flex-direction: column;
          gap: 8px;
          cursor: pointer;
        }
        .bm-pkg-cream { background: var(--bone); }
        .bm-pkg-rose  { background: var(--rose-soft); }
        .bm-pkg-card:hover { transform: translateY(-2px); }
        .bm-pkg-card.is-on { border-color: var(--brand); box-shadow: 0 0 0 3px rgba(169,128,98,0.25), 0 8px 22px -14px rgba(168,128,98,0.5); }

        .bm-pkg-top { display: flex; align-items: center; gap: 10px; }
        .bm-pkg-name { font-weight: 700; font-size: 14px; letter-spacing: 0.06em; color: var(--ink); }
        .bm-pkg-radio {
          width: 22px; height: 22px; flex: 0 0 22px;
          border: 1.5px solid var(--brand);
          border-radius: 50%;
          background: var(--bone);
          color: var(--bone);
          display: inline-flex; align-items: center; justify-content: center;
          transition: background 0.15s, border-color 0.15s;
        }
        .bm-pkg-radio.is-on {
          background: var(--brand-deep);
          border-color: var(--brand-deep);
        }
        .bm-pkg-price { font-size: 30px; color: var(--brand-deep); line-height: 1.1; }
        .bm-pkg-unit { font-size: 13px; color: var(--ink-mute); font-family: var(--font-body); font-weight: 500; }
        .bm-pkg-duration { font-size: 13px; color: var(--ink-mute); font-weight: 600; letter-spacing: 0.04em; }

        .bm-pkg-sublabel {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--brand);
          margin-top: 10px;
          margin-bottom: 4px;
        }
        .bm-pkg-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .bm-pkg-list li {
          font-size: 13px;
          line-height: 1.4;
          color: var(--ink-soft);
          padding-left: 10px;
          position: relative;
        }
        .bm-pkg-list li::before {
          content: '';
          position: absolute;
          left: 0; top: 8px;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--brand);
        }
        .bm-pkg-perks li { font-weight: 700; color: var(--brand-deep); letter-spacing: 0.02em; }
        .bm-pkg-perks li::before { background: var(--brand-deep); }

        .bm-pkg-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          width: 100%;
          margin-top: 10px;
          padding: 8px 10px;
          background: transparent;
          border: 1px dashed var(--line-soft);
          border-radius: var(--r-sm);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brand-deep);
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .bm-pkg-toggle:hover { background: rgba(168,128,98,0.06); border-color: var(--brand); }
        .bm-pkg-toggle svg { transition: transform 0.2s cubic-bezier(0.2,0.8,0.2,1); }
        .bm-pkg-toggle.is-open svg { transform: rotate(180deg); }
        .bm-pkg-details { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; animation: bm-fade-down 0.2s ease-out both; }
        @keyframes bm-fade-down {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .bm-pkg-cost {
          margin-top: 12px;
          padding: 10px 12px;
          background: rgba(168,128,98,0.12);
          border-radius: var(--r-sm);
          font-size: 14px;
          color: var(--brand-deep);
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 6px;
        }
        .bm-pkg-cost strong { font-size: 17px; }
        .bm-pkg-cost-calc { font-size: 12px; color: var(--ink-mute); }

        .bm-addon-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 1.5px solid var(--line-soft);
          border-radius: var(--r-md);
          background: var(--bone);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .bm-addon-toggle.is-on { border-color: var(--brand); background: var(--sage); }
        .bm-addon-toggle input {
          position: absolute;
          opacity: 0;
          width: 22px; height: 22px;
          margin: 0;
          cursor: pointer;
        }
        .bm-addon-toggle input:focus-visible + .bm-addon-tick {
          outline: 2px solid var(--brand-deep);
          outline-offset: 2px;
        }
        .bm-addon-tick {
          width: 22px; height: 22px; flex: 0 0 22px;
          border: 1.5px solid var(--brand);
          border-radius: 6px;
          background: var(--bone);
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--bone);
        }
        .bm-addon-toggle.is-on .bm-addon-tick { background: var(--brand-deep); border-color: var(--brand-deep); }
        .bm-addon-text { display: flex; flex-direction: column; gap: 2px; }
        .bm-addon-text strong { font-size: 14px; color: var(--ink); }
        .bm-addon-sub { font-size: 12px; color: var(--ink-mute); }

        .bm-addon-panel {
          padding: 16px 18px;
          background: var(--sage);
          border-radius: var(--r-md);
          border: 1px solid var(--line-soft);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bm-total-callout {
          margin-top: 8px;
          padding: 16px 20px;
          background: var(--brand-deep);
          color: var(--cream);
          border-radius: var(--r-md);
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
          position: sticky;
          bottom: -1px;
          z-index: 5;
          box-shadow: 0 -10px 18px -10px rgba(27,26,23,0.25);
        }
        @media (max-height: 700px) {
          .bm-total-callout { position: static; box-shadow: none; }
        }
        .bm-total-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          opacity: 0.85;
        }
        .bm-total-value {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 700;
          color: #fff;
        }

        .bm-summary {
          margin-top: 8px;
          padding: 18px 20px;
          background: var(--cream-deep);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-md);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bm-summary-h {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--brand-deep);
          margin-bottom: 6px;
        }
        .bm-summary-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 14px;
          color: var(--ink-soft);
        }
        .bm-summary-row strong { color: var(--ink); font-weight: 600; }
        .bm-summary-block {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px dashed var(--line-soft);
        }
        .bm-summary-block-h {
          font-weight: 700;
          font-size: 14px;
          color: var(--brand-deep);
          margin-bottom: 6px;
        }
        .bm-summary-cost { font-weight: 500; color: var(--ink-mute); font-size: 13px; }
        .bm-summary-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3px 14px;
        }
        @media (max-width: 480px) { .bm-summary-list { grid-template-columns: 1fr; } }
        .bm-summary-list li {
          font-size: 12.5px;
          color: var(--ink-soft);
          padding-left: 10px;
          position: relative;
          line-height: 1.4;
        }
        .bm-summary-list li::before {
          content: '';
          position: absolute;
          left: 0; top: 7px;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--brand);
        }
        .bm-summary-total {
          margin-top: 10px;
          padding-top: 12px;
          border-top: 1px solid var(--line-soft);
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .bm-summary-total span {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }
        .bm-summary-total strong {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          color: var(--rose-deep);
        }

        .bm-rodo {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 12px 14px;
          background: var(--bone);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-sm);
          cursor: pointer;
        }
        .bm-rodo input {
          position: absolute;
          opacity: 0;
          width: 20px; height: 20px;
          margin: 0;
          cursor: pointer;
        }
        .bm-rodo-tick {
          width: 20px; height: 20px; flex: 0 0 20px;
          border: 1.5px solid var(--brand);
          border-radius: 5px;
          background: var(--bone);
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--bone);
          margin-top: 2px;
        }
        .bm-rodo input:checked + .bm-rodo-tick { background: var(--brand-deep); border-color: var(--brand-deep); }
        .bm-rodo input:focus-visible + .bm-rodo-tick {
          outline: 2px solid var(--brand-deep);
          outline-offset: 2px;
        }
        .bm-rodo-text {
          font-size: 13px;
          line-height: 1.5;
          color: var(--ink-soft);
        }
        .bm-rodo-text a { color: var(--brand-deep); text-decoration: underline; }

        .bm-submit-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .bm-submit-note { font-size: 11.5px; color: var(--ink-mute); line-height: 1.45; max-width: 280px; text-align: right; }

        .bm-error {
          padding: 10px 14px;
          background: #FCE9E9;
          color: #8C3A3A;
          border-radius: var(--r-sm);
          font-size: 13px;
        }

        .bm-foot {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px dashed var(--line-soft);
          align-items: center;
          flex-wrap: wrap;
        }
        .bm-foot-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .bm-foot-hint {
          font-size: 12px;
          color: var(--ink-mute);
          max-width: 240px;
          text-align: right;
        }
        .bm-foot .btn:disabled { opacity: 0.4; pointer-events: none; }

        .bm-success { text-align: center; padding: 12px 0 0; position: relative; }
        .bm-success-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: var(--sage);
          color: var(--brand-deep);
          border: 1px solid var(--sage-deep);
          display: inline-flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          position: relative;
          z-index: 2;
        }
        .bm-success-h { font-size: 32px; color: var(--ink); margin-bottom: 14px; line-height: 1.15; }
        .bm-success-p { color: var(--ink-soft); margin: 0 auto 14px; line-height: 1.55; max-width: 440px; }
        .bm-success-p-small { font-size: 14px; color: var(--ink-mute); }
        .bm-success-cta {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 22px;
          position: relative;
          z-index: 2;
        }

        .bm-confetti {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: visible;
          z-index: 1;
        }
        .bm-confetti-piece {
          position: absolute;
          top: 15%; left: 50%;
          width: 10px; height: 14px;
          background: var(--c);
          animation: confetti-burst var(--d) cubic-bezier(0.2, 0.6, 0.4, 1) var(--delay) forwards;
          transform-origin: center;
          opacity: 0;
        }
        .bm-conf-shape-1 { width: 10px; height: 10px; border-radius: 50%; }
        .bm-conf-shape-2 {
          width: 0; height: 0;
          background: transparent;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 12px solid var(--c);
        }
        @keyframes confetti-burst {
          0% { opacity: 1; transform: translate(-50%, 0) rotate(0); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translate(calc(-50% + var(--x)), 70vh) rotate(var(--rot)); }
        }
      `}</style>
    </div>
  )
}
