import { Reveal, ImgReveal } from './Reveal.jsx'
import { IconInstagram } from './icons.jsx'

export function Gallery() {
  const items = [
    { src: '/assets/photo4.jpg', span: 'big', alt: 'Wnętrze bawialni — drewniana konstrukcja z piętrami i zjeżdżalnią' },
    { src: '/assets/photo1.jpg', span: 'tall', alt: 'Ścianka wspinaczkowa i miś' },
    { src: '/assets/photo3.jpg', span: 'wide', alt: 'Dziecko na drewnianym traktorku' },
    { src: '/assets/photo5.jpg', span: 'tall', alt: 'Maluch w drewnianym tunelu' },
    { src: '/assets/photo2.jpg', span: 'wide', alt: 'Latte i ciasto pistacjowe' },
  ]

  return (
    <section id="galeria" className="gal">
      <div className="shell">
        <div className="gal-head">
          <Reveal className="eyebrow">[ Galeria ]</Reveal>
          <Reveal delay={80}>
            <h2 className="display gal-h">
              Zajrzyj <span className="hero-italic">do środka.</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="body-lg gal-sub">
            200 m² drewna, sklejki i światła. Bez krzykliwego plastiku, bez ekranów.
          </Reveal>
        </div>

        <div className="gal-grid">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 90} className={`gal-cell gal-${it.span}`}>
              <ImgReveal src={it.src} alt={it.alt} />
            </Reveal>
          ))}
        </div>

        <div className="gal-foot">
          <a href="https://www.instagram.com/bawisz_bawialnia/" target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost gal-cta">
            <IconInstagram size={18} /> @bawisz_bawialnia
          </a>
        </div>
      </div>

      <style>{`
        .gal { padding: 120px 0 100px; background: var(--paper); border-top: 1.5px solid var(--line); border-bottom: 1.5px solid var(--line); }
        .gal-head { text-align: center; max-width: 720px; margin: 0 auto 56px; }
        .gal-h { font-size: clamp(40px, 6vw, 88px); margin: 16px 0 20px; color: var(--ink); }

        .gal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 14px;
        }
        .gal-cell {
          position: relative;
          border: 1.5px solid var(--line);
          border-radius: var(--r-lg);
          overflow: hidden;
        }
        .gal-cell .img-reveal { width: 100%; height: 100%; }
        .gal-big { grid-column: span 2; grid-row: span 2; }
        .gal-tall { grid-column: span 1; grid-row: span 2; }
        .gal-wide { grid-column: span 2; grid-row: span 1; }

        @media (max-width: 820px) {
          .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
          .gal-big { grid-column: span 2; grid-row: span 2; }
          .gal-tall { grid-column: span 1; grid-row: span 1; }
          .gal-wide { grid-column: span 2; grid-row: span 1; }
        }

        .gal-foot { text-align: center; margin-top: 40px; }
        .gal-cta { padding: 14px 24px; }
      `}</style>
    </section>
  )
}
