export function Decoration({
  type,
  size = 80,
  color = 'currentColor',
  rotate = 0,
  opacity = 0.9,
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
      <svg viewBox="0 0 120 120" fill="none" {...shared}>
        <ellipse cx="28" cy="38" rx="14" ry="15" fill={color} />
        <ellipse cx="92" cy="38" rx="14" ry="15" fill={color} />
        <ellipse cx="28" cy="38" rx="6" ry="7" fill="#F2D3D5" />
        <ellipse cx="92" cy="38" rx="6" ry="7" fill="#F2D3D5" />
        <ellipse cx="60" cy="68" rx="38" ry="36" fill={color} />
        <ellipse cx="60" cy="78" rx="22" ry="18" fill="#FBF7EE" />
        <circle cx="46" cy="64" r="3.8" fill="#3A2E1F" />
        <circle cx="74" cy="64" r="3.8" fill="#3A2E1F" />
        <circle cx="47" cy="63" r="1.2" fill="#FBF7EE" />
        <circle cx="75" cy="63" r="1.2" fill="#FBF7EE" />
        <ellipse cx="60" cy="73" rx="4.2" ry="3" fill="#3A2E1F" />
        <path d="M55 79 Q 60 84 65 79" stroke="#3A2E1F" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <ellipse cx="42" cy="82" rx="5" ry="3" fill="#F2D3D5" opacity="0.6" />
        <ellipse cx="78" cy="82" rx="5" ry="3" fill="#F2D3D5" opacity="0.6" />
      </svg>
    )
  } else if (type === 'fox') {
    svg = (
      <svg viewBox="0 0 120 120" fill="none" {...shared}>
        <path d="M30 32 L40 56 L20 50 Z" fill={color} />
        <path d="M90 32 L80 56 L100 50 Z" fill={color} />
        <ellipse cx="60" cy="68" rx="36" ry="34" fill={color} />
        <ellipse cx="60" cy="78" rx="20" ry="16" fill="#FBF7EE" />
        <path d="M30 32 L36 50 L26 47 Z" fill="#F2D3D5" />
        <path d="M90 32 L84 50 L94 47 Z" fill="#F2D3D5" />
        <circle cx="46" cy="64" r="3.5" fill="#3A2E1F" />
        <circle cx="74" cy="64" r="3.5" fill="#3A2E1F" />
        <ellipse cx="60" cy="74" rx="3.5" ry="2.5" fill="#3A2E1F" />
        <path d="M56 80 Q 60 84 64 80" stroke="#3A2E1F" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <ellipse cx="40" cy="84" rx="5" ry="3" fill="#F2D3D5" opacity="0.6" />
        <ellipse cx="80" cy="84" rx="5" ry="3" fill="#F2D3D5" opacity="0.6" />
      </svg>
    )
  } else if (type === 'rainbow') {
    svg = (
      <svg viewBox="0 0 120 70" fill="none" {...shared}>
        <path d="M8 64 A 52 52 0 0 1 112 64" stroke="#E8B4B8" strokeWidth="9" strokeLinecap="round" />
        <path d="M22 64 A 38 38 0 0 1 98 64" stroke="#EAD8C4" strokeWidth="9" strokeLinecap="round" />
        <path d="M36 64 A 24 24 0 0 1 84 64" stroke="#C4D8AE" strokeWidth="9" strokeLinecap="round" />
        <path d="M50 64 A 10 10 0 0 1 70 64" stroke="#A98062" strokeWidth="9" strokeLinecap="round" />
      </svg>
    )
  } else if (type === 'pencil') {
    svg = (
      <svg viewBox="0 0 130 30" fill="none" {...shared}>
        <rect x="22" y="9" width="78" height="12" fill={color} rx="2" />
        <polygon points="100,9 118,15 100,21" fill="#FBF7EE" stroke="#776258" strokeWidth="1" />
        <polygon points="113,12 118,15 113,18" fill="#5C4F47" />
        <rect x="10" y="9" width="12" height="12" fill="#E8B4B8" stroke="#776258" strokeWidth="1" rx="1" />
        <rect x="6" y="11" width="6" height="8" fill="#A98062" stroke="#776258" strokeWidth="1" rx="1" />
      </svg>
    )
  } else if (type === 'balloon') {
    svg = (
      <svg viewBox="0 0 60 100" fill="none" {...shared}>
        <ellipse cx="30" cy="32" rx="22" ry="28" fill={color} />
        <ellipse cx="22" cy="24" rx="5" ry="8" fill="rgba(255,255,255,0.45)" />
        <polygon points="30,60 26,66 34,66" fill={color} />
        <path d="M30 66 Q 26 78, 32 92" stroke="#776258" strokeWidth="1.2" fill="none" />
      </svg>
    )
  } else if (type === 'leaf') {
    svg = (
      <svg viewBox="0 0 80 80" fill="none" {...shared}>
        <path d="M40 8 C 18 18, 14 50, 22 70 C 36 60, 60 38, 40 8 Z" fill={color} />
        <path d="M40 8 C 38 30, 32 50, 22 70" stroke="#FBF7EE" strokeWidth="1.5" fill="none" opacity="0.6" />
      </svg>
    )
  } else if (type === 'cloud') {
    svg = (
      <svg viewBox="0 0 120 60" fill="none" {...shared}>
        <ellipse cx="35" cy="36" rx="20" ry="16" fill={color} />
        <ellipse cx="60" cy="28" rx="22" ry="20" fill={color} />
        <ellipse cx="85" cy="36" rx="22" ry="18" fill={color} />
        <ellipse cx="60" cy="44" rx="40" ry="12" fill={color} />
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
