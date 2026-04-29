export function Decoration({
  type,
  size = 80,
  color = 'currentColor',
  rotate = 0,
  opacity = 0.35,
  animate = false,
  className = '',
  style = {},
}) {
  const shared = {
    width: size,
    height: 'auto',
    style: { display: 'block' },
  }

  let svg = null

  if (type === 'bear') {
    svg = (
      <svg viewBox="0 0 100 100" fill={color} {...shared}>
        <circle cx="25" cy="30" r="14" />
        <circle cx="75" cy="30" r="14" />
        <circle cx="50" cy="58" r="34" />
        <circle cx="38" cy="52" r="3.5" fill="var(--ink)" />
        <circle cx="62" cy="52" r="3.5" fill="var(--ink)" />
        <ellipse cx="50" cy="68" rx="14" ry="11" fill="var(--cream)" />
        <ellipse cx="50" cy="63" rx="3.5" ry="2.5" fill="var(--ink)" />
      </svg>
    )
  } else if (type === 'rainbow') {
    svg = (
      <svg viewBox="0 0 120 70" fill="none" {...shared}>
        <path d="M8 64 A 52 52 0 0 1 112 64" stroke="#F4B6B6" strokeWidth="9" strokeLinecap="round" />
        <path d="M22 64 A 38 38 0 0 1 98 64" stroke="#F5D970" strokeWidth="9" strokeLinecap="round" />
        <path d="M36 64 A 24 24 0 0 1 84 64" stroke="#B8D0A0" strokeWidth="9" strokeLinecap="round" />
        <path d="M50 64 A 10 10 0 0 1 70 64" stroke="#C9B8DD" strokeWidth="9" strokeLinecap="round" />
      </svg>
    )
  } else if (type === 'pencil') {
    svg = (
      <svg viewBox="0 0 130 30" fill="none" {...shared}>
        <rect x="22" y="9" width="78" height="12" fill={color} />
        <polygon points="100,9 118,15 100,21" fill="#F6F1E7" stroke="var(--ink)" strokeWidth="1" />
        <polygon points="113,12 118,15 113,18" fill="var(--ink)" />
        <rect x="10" y="9" width="12" height="12" fill="#F4B6B6" stroke="var(--ink)" strokeWidth="1" />
        <rect x="6" y="11" width="6" height="8" fill="#8B6F47" stroke="var(--ink)" strokeWidth="1" />
      </svg>
    )
  } else if (type === 'balloon') {
    svg = (
      <svg viewBox="0 0 60 100" fill="none" {...shared}>
        <ellipse cx="30" cy="32" rx="22" ry="28" fill={color} />
        <ellipse cx="22" cy="24" rx="5" ry="8" fill="rgba(255,255,255,0.4)" />
        <polygon points="30,60 26,66 34,66" fill={color} />
        <path d="M30 66 Q 26 78, 32 92" stroke="var(--ink)" strokeWidth="1.2" fill="none" />
      </svg>
    )
  }

  if (!svg) return null

  return (
    <span
      aria-hidden="true"
      className={`decoration ${animate ? `dec-${animate}` : ''} ${className}`}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        userSelect: 'none',
        opacity,
        '--rot': `${rotate}deg`,
        transform: animate ? undefined : `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {svg}
    </span>
  )
}
