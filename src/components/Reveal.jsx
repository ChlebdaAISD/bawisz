import { useReveal } from '../lib/useReveal.js'

export function Reveal({ children, delay = 0, as: As = 'div', className = '', style, ...rest }) {
  const [ref, seen] = useReveal()
  return (
    <As ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {children}
    </As>
  )
}

export function ImgReveal({ src, alt, className = '', style, delay = 0, ...rest }) {
  const [ref, seen] = useReveal({ threshold: 0.1 })
  return (
    <div ref={ref} className={`img-reveal ${seen ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}
