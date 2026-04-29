import { useEffect, useState } from 'react'
import { IconClose, IconArrow, IconCheck, IconCake } from './icons.jsx'

export function BirthdayModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    childName: '', age: '4', date: '', count: '10', package: 'standard', name: '', phone: '', email: '', notes: ''
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) { setStep(1) }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }))

  const packages = [
    { id: 'mini', name: 'MINI', price: '45 zł / dziecko', desc: '2h zabawy, dekoracje, poczęstunek dla dzieci, obsługa', tone: 'cream' },
    { id: 'standard', name: 'STANDARD', price: '74 zł / dziecko', desc: '2,5h, sala na wyłączność (od 10 dzieci), prezent dla solenizanta, motyw lasu lub kwiatów', tone: 'rose' },
    { id: 'parents', name: 'Pakiet dla rodziców', price: '+55 zł / osoba', desc: 'Dodatek do MINI lub STANDARD: kawa, herbata, ciasto, przekąski dla dorosłych', tone: 'sage' },
  ]

  return (
    <div className="bm-back" role="dialog" aria-modal="true" aria-label="Rezerwacja urodzin" onClick={onClose}>
      <div className="bm-card" onClick={(e) => e.stopPropagation()}>
        <button className="bm-close" onClick={onClose} aria-label="Zamknij"><IconClose size={20} /></button>

        <div className="bm-head">
          <div className="bm-icon"><IconCake size={22} /></div>
          <div>
            <div className="bm-eyebrow">[ Urodziny w Bawiszu ]</div>
            <h3 className="display bm-h">Krok {step} z 3</h3>
          </div>
        </div>

        <div className="bm-progress">
          <div className="bm-progress-bar" style={{ width: `${(step / 3) * 100}%` }} />
        </div>

        {step === 1 && (
          <div className="bm-body">
            <label className="bm-field">
              <span>Imię solenizanta/-ki</span>
              <input type="text" value={data.childName} onChange={(e) => set('childName', e.target.value)} placeholder="np. Antek" />
            </label>
            <div className="bm-row">
              <label className="bm-field">
                <span>Wiek</span>
                <select value={data.age} onChange={(e) => set('age', e.target.value)}>
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
              <label className="bm-field">
                <span>Liczba dzieci</span>
                <select value={data.count} onChange={(e) => set('count', e.target.value)}>
                  {['4','6','8','10','12','15+'].map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
            </div>
            <label className="bm-field">
              <span>Preferowana data</span>
              <input type="date" value={data.date} onChange={(e) => set('date', e.target.value)} />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="bm-body">
            <div className="bm-pkgs">
              {packages.map((p) => (
                <button key={p.id} type="button"
                  className={`bm-pkg bm-pkg-${p.tone} ${data.package === p.id ? 'is-on' : ''}`}
                  onClick={() => set('package', p.id)}>
                  <div className="bm-pkg-top">
                    <span className="bm-pkg-name">{p.name}</span>
                    {data.package === p.id && <span className="bm-pkg-tick"><IconCheck size={14} /></span>}
                  </div>
                  <div className="display bm-pkg-price">{p.price}</div>
                  <div className="bm-pkg-desc">{p.desc}</div>
                </button>
              ))}
            </div>
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
                <span>Email</span>
                <input type="email" value={data.email} onChange={(e) => set('email', e.target.value)} placeholder="email@example.pl" />
              </label>
            </div>
            <label className="bm-field">
              <span>Uwagi (alergie, motyw, niespodzianki)</span>
              <textarea value={data.notes} onChange={(e) => set('notes', e.target.value)} rows={3} placeholder="np. motyw leśny, alergia na orzechy" />
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="bm-success">
            <div className="bm-success-icon"><IconCheck size={36} /></div>
            <div className="display bm-success-h">Dzięki! Damy znać.</div>
            <p className="bm-success-p">Odezwiemy się w ciągu 24h, żeby potwierdzić termin i ustalić szczegóły.<br />
              Tymczasem upewnij się, że telefon jest naładowany.</p>
            <button className="btn btn-primary" onClick={onClose}>Zamknij</button>
          </div>
        )}

        {step < 4 && (
          <div className="bm-foot">
            <button className="btn btn-ghost" disabled={step === 1} onClick={() => setStep((s) => Math.max(1, s - 1))}>← Wstecz</button>
            {step < 3 ? (
              <button className="btn btn-primary" onClick={() => setStep((s) => s + 1)}>Dalej <IconArrow size={16} /></button>
            ) : (
              <button className="btn btn-pop" onClick={() => setStep(4)}>Wyślij zapytanie <IconArrow size={16} /></button>
            )}
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
          width: 100%; max-width: 580px;
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
          border: none;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .bm-eyebrow { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-mute); }
        .bm-h { font-size: 32px; color: var(--ink); margin: 4px 0 0; }

        .bm-progress { height: 4px; background: var(--cream-deep); border-radius: var(--r-pill); margin-bottom: 28px; overflow: hidden; }
        .bm-progress-bar { height: 100%; background: var(--rose-deep); border-radius: var(--r-pill); transition: width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); }

        .bm-body { display: flex; flex-direction: column; gap: 14px; min-height: 200px; }
        .bm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 480px) { .bm-row { grid-template-columns: 1fr; } }

        .bm-field { display: flex; flex-direction: column; gap: 6px; }
        .bm-field span { font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--ink-mute); }
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
          border-color: var(--rose-deep);
        }

        .bm-pkgs { display: flex; flex-direction: column; gap: 10px; }
        .bm-pkg {
          text-align: left;
          padding: 18px 20px;
          border-radius: var(--r-md);
          border: 1px solid var(--line-soft);
          background: var(--bone);
          color: var(--ink);
          transition: transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 18px -14px rgba(168,128,98,0.35);
        }
        .bm-pkg-cream { background: var(--bone); }
        .bm-pkg-rose  { background: var(--rose-soft); }
        .bm-pkg-sage  { background: var(--sage); }
        .bm-pkg:hover { transform: translateY(-2px); }
        .bm-pkg.is-on { box-shadow: 0 0 0 3px var(--rose-deep); }
        .bm-pkg-top { display: flex; justify-content: space-between; align-items: center; }
        .bm-pkg-name { font-weight: 700; font-size: 14px; letter-spacing: 0.02em; }
        .bm-pkg-tick {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: var(--rose-deep);
          color: var(--bone);
          display: inline-flex; align-items: center; justify-content: center;
        }
        .bm-pkg-price { font-size: 32px; margin: 8px 0 4px; color: var(--rose-deep); }
        .bm-pkg-desc { font-size: 13px; color: var(--ink-mute); }

        .bm-foot {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px dashed var(--line-soft);
        }
        .bm-foot .btn:disabled { opacity: 0.4; pointer-events: none; }

        .bm-success { text-align: center; padding: 20px 0; }
        .bm-success-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: var(--sage);
          color: var(--brand-deep);
          border: 1px solid var(--sage-deep);
          display: inline-flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .bm-success-h { font-size: 36px; color: var(--ink); margin-bottom: 12px; }
        .bm-success-p { color: var(--ink-mute); margin-bottom: 24px; line-height: 1.55; }
      `}</style>
    </div>
  )
}
