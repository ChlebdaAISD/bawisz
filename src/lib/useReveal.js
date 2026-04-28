import { useEffect, useRef, useState } from 'react'

export function useReveal(opts = {}) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true)
          obs.unobserve(e.target)
        }
      })
    }, {
      threshold: opts.threshold ?? 0.15,
      rootMargin: opts.rootMargin ?? '0px 0px -60px 0px',
    })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, seen]
}
