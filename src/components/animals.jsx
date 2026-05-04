// Cartoon peeking-animal heads — modeled after the Bawisz flyer.
// Each viewBox is 200x200. The head sits ~y=20–150, with two small paws
// peeking over the bottom edge so the animal appears to hug the time circle below.

const Animal = ({ size = 140, children, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" {...rest}>
    {children}
  </svg>
)

// Party hat — mint cone with white polka dots, yellow pompom, slight tilt right.
const PartyHat = ({ x = 130, y = 0, rotate = 18 }) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    <path d="M0 60 L30 0 L60 60 Z" fill="#bcd9a8" />
    <path d="M0 60 L60 60 L57 56 L3 56 Z" fill="#a3c98c" />
    <circle cx="22" cy="42" r="4" fill="#fff" />
    <circle cx="38" cy="28" r="3.5" fill="#fff" />
    <circle cx="14" cy="22" r="2.8" fill="#fff" />
    <circle cx="44" cy="48" r="3" fill="#fff" />
    <circle cx="30" cy="-4" r="6" fill="#f2c844" />
  </g>
)

// Wrapped gift box — yellow with mint ribbon and bow.
export const GiftBox = ({ size = 120, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...rest}>
    {/* box body */}
    <rect x="12" y="50" width="96" height="62" rx="4" fill="#f2c844" />
    {/* lid */}
    <rect x="8" y="44" width="104" height="14" rx="3" fill="#f5d566" />
    {/* vertical ribbon */}
    <rect x="52" y="44" width="16" height="68" fill="#a3c98c" />
    {/* horizontal ribbon */}
    <rect x="8" y="62" width="104" height="12" fill="#a3c98c" />
    {/* bow loops */}
    <path d="M60 44 C42 28 28 32 30 42 C32 50 50 48 60 44 Z" fill="#a3c98c" />
    <path d="M60 44 C78 28 92 32 90 42 C88 50 70 48 60 44 Z" fill="#a3c98c" />
    {/* knot */}
    <ellipse cx="60" cy="44" rx="6" ry="5" fill="#7eaa6c" />
    {/* highlight */}
    <rect x="20" y="80" width="6" height="22" fill="#fff" opacity="0.18" />
  </svg>
)

const Eyes = ({ cx1 = 76, cx2 = 124, cy = 105, r = 10 }) => (
  <>
    <ellipse cx={cx1} cy={cy} rx={r} ry={r + 1} fill="#2a1a12" />
    <ellipse cx={cx2} cy={cy} rx={r} ry={r + 1} fill="#2a1a12" />
    <circle cx={cx1 + 2.5} cy={cy - 3} r={3} fill="#fff" />
    <circle cx={cx2 + 2.5} cy={cy - 3} r={3} fill="#fff" />
    <circle cx={cx1 - 3} cy={cy + 4} r={1.4} fill="#fff" opacity="0.7" />
    <circle cx={cx2 - 3} cy={cy + 4} r={1.4} fill="#fff" opacity="0.7" />
  </>
)

export const AnimalDeer = (p) => (
  <Animal {...p}>
    {/* Antlers */}
    <path d="M78 38 C72 24 70 16 68 8 M68 8 L60 14 M70 18 L62 20"
      stroke="#7a4d2f" strokeWidth="3.2" strokeLinecap="round" fill="none" />
    <path d="M122 38 C128 24 130 16 132 8 M132 8 L140 14 M130 18 L138 20"
      stroke="#7a4d2f" strokeWidth="3.2" strokeLinecap="round" fill="none" />

    {/* Outer ears */}
    <ellipse cx="50" cy="58" rx="16" ry="28" fill="#c8956a" transform="rotate(-22 50 58)" />
    <ellipse cx="150" cy="58" rx="16" ry="28" fill="#c8956a" transform="rotate(22 150 58)" />
    {/* Inner ears */}
    <ellipse cx="51" cy="62" rx="7" ry="17" fill="#ecccaa" transform="rotate(-22 51 62)" />
    <ellipse cx="149" cy="62" rx="7" ry="17" fill="#ecccaa" transform="rotate(22 149 62)" />

    {/* Head */}
    <ellipse cx="100" cy="110" rx="62" ry="56" fill="#c8956a" />

    {/* Forehead spot */}
    <ellipse cx="100" cy="72" rx="10" ry="7" fill="#ecccaa" />

    {/* Lower-face cream patch */}
    <ellipse cx="100" cy="135" rx="44" ry="30" fill="#f3dcbb" />

    <Eyes />

    {/* Nose */}
    <ellipse cx="100" cy="132" rx="8.5" ry="6.5" fill="#2a1a12" />

    {/* Mouth */}
    <path d="M100 140 L100 148 M100 148 Q92 154 86 150 M100 148 Q108 154 114 150"
      stroke="#2a1a12" strokeWidth="2.2" strokeLinecap="round" fill="none" />

    {/* Paws — peeking over bottom */}
    <ellipse cx="48" cy="185" rx="26" ry="22" fill="#c8956a" />
    <ellipse cx="152" cy="185" rx="26" ry="22" fill="#c8956a" />
    <ellipse cx="48" cy="188" rx="14" ry="10" fill="#a87648" opacity="0.55" />
    <ellipse cx="152" cy="188" rx="14" ry="10" fill="#a87648" opacity="0.55" />
  </Animal>
)

export const AnimalBear = ({ hat, ...p }) => (
  <Animal {...p}>
    {/* Outer ears */}
    <circle cx="46" cy="56" r="22" fill="#7d5236" />
    <circle cx="154" cy="56" r="22" fill="#7d5236" />
    {/* Inner ears */}
    <circle cx="46" cy="58" r="11" fill="#b88457" />

    <circle cx="154" cy="58" r="11" fill="#b88457" />

    {/* Head */}
    <ellipse cx="100" cy="108" rx="66" ry="60" fill="#9d6a44" />

    {/* Snout/cheek patch */}
    <ellipse cx="100" cy="135" rx="44" ry="30" fill="#d8a87c" />

    <Eyes />

    {/* Eyebrows (subtle) */}
    <path d="M64 86 Q72 80 84 84" stroke="#5c3d24" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.4" />
    <path d="M136 86 Q128 80 116 84" stroke="#5c3d24" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.4" />

    {/* Nose */}
    <ellipse cx="100" cy="128" rx="11" ry="8" fill="#2a1a12" />
    {/* Nose highlight */}
    <ellipse cx="97" cy="125" rx="3" ry="2" fill="#fff" opacity="0.4" />

    {/* Mouth */}
    <path d="M100 138 L100 148 M100 148 Q92 156 84 152 M100 148 Q108 156 116 152"
      stroke="#2a1a12" strokeWidth="2.4" strokeLinecap="round" fill="none" />

    {/* Paws — peeking over bottom */}
    <ellipse cx="48" cy="185" rx="28" ry="22" fill="#9d6a44" />
    <ellipse cx="152" cy="185" rx="28" ry="22" fill="#9d6a44" />
    <ellipse cx="48" cy="190" rx="16" ry="10" fill="#7d5236" opacity="0.55" />
    <ellipse cx="152" cy="190" rx="16" ry="10" fill="#7d5236" opacity="0.55" />
    {hat && <PartyHat x={78} y={-30} rotate={-14} />}
  </Animal>
)

export const AnimalFox = ({ hat, ...p }) => (
  <Animal {...p}>
    {/* Ears outer (pointed) */}
    <path d="M30 70 L48 12 L78 56 Z" fill="#d18847" />
    <path d="M170 70 L152 12 L122 56 Z" fill="#d18847" />
    {/* Ears inner dark tips */}
    <path d="M44 50 L48 18 L66 52 Z" fill="#5e3a22" />
    <path d="M156 50 L152 18 L134 52 Z" fill="#5e3a22" />
    {/* Inner ear cream */}
    <path d="M50 56 L52 32 L64 56 Z" fill="#f5e3c8" />
    <path d="M150 56 L148 32 L136 56 Z" fill="#f5e3c8" />

    {/* Head */}
    <path d="M100 168
             C56 168 36 142 38 104
             C40 72 58 50 100 50
             C142 50 160 72 162 104
             C164 142 144 168 100 168 Z"
      fill="#d18847" />

    {/* White forehead V + cheek patch */}
    <path d="M100 60 L80 112 L100 126 L120 112 Z" fill="#f5e3c8" />
    <path d="M100 168
             C76 168 60 152 58 130
             L82 112
             L100 126
             L118 112
             L142 130
             C140 152 124 168 100 168 Z"
      fill="#f5e3c8" />

    <Eyes cy="108" />

    {/* Nose */}
    <ellipse cx="100" cy="132" rx="8.5" ry="7" fill="#2a1a12" />
    <ellipse cx="97" cy="129" rx="2.5" ry="1.5" fill="#fff" opacity="0.4" />

    {/* Mouth */}
    <path d="M100 140 L100 148 M100 148 Q92 154 86 150 M100 148 Q108 154 114 150"
      stroke="#2a1a12" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    {/* Tiny tongue */}
    <ellipse cx="100" cy="153" rx="3.5" ry="2" fill="#e88a8a" />

    {/* Paws — peeking */}
    <ellipse cx="48" cy="185" rx="26" ry="20" fill="#d18847" />
    <ellipse cx="152" cy="185" rx="26" ry="20" fill="#d18847" />
    <ellipse cx="48" cy="190" rx="14" ry="9" fill="#a86430" opacity="0.55" />
    <ellipse cx="152" cy="190" rx="14" ry="9" fill="#a86430" opacity="0.55" />
    {hat && <PartyHat x={92} y={-48} rotate={16} />}
  </Animal>
)

export const AnimalWolf = (p) => (
  <Animal {...p}>
    {/* Ears outer (pointed) */}
    <path d="M28 70 L48 12 L78 56 Z" fill="#9a9a9a" />
    <path d="M172 70 L152 12 L122 56 Z" fill="#9a9a9a" />
    {/* Ears inner dark tips */}
    <path d="M44 50 L48 18 L66 52 Z" fill="#4a4a4a" />
    <path d="M156 50 L152 18 L134 52 Z" fill="#4a4a4a" />
    {/* Inner ear lighter */}
    <path d="M50 56 L52 32 L64 56 Z" fill="#dcdcdc" />
    <path d="M150 56 L148 32 L136 56 Z" fill="#dcdcdc" />

    {/* Head */}
    <path d="M100 168
             C56 168 36 142 38 104
             C40 72 58 50 100 50
             C142 50 160 72 162 104
             C164 142 144 168 100 168 Z"
      fill="#9a9a9a" />

    {/* Light forehead V + cheek patch */}
    <path d="M100 60 L80 112 L100 126 L120 112 Z" fill="#dcdcdc" />
    <path d="M100 168
             C76 168 60 152 58 130
             L82 112
             L100 126
             L118 112
             L142 130
             C140 152 124 168 100 168 Z"
      fill="#dcdcdc" />

    <Eyes cy="108" />

    {/* Nose */}
    <ellipse cx="100" cy="132" rx="9.5" ry="7.5" fill="#2a1a12" />
    <ellipse cx="97" cy="129" rx="2.8" ry="1.7" fill="#fff" opacity="0.4" />

    {/* Mouth */}
    <path d="M100 141 L100 149 M100 149 Q92 155 86 151 M100 149 Q108 155 114 151"
      stroke="#2a1a12" strokeWidth="2.2" strokeLinecap="round" fill="none" />

    {/* Paws — peeking */}
    <ellipse cx="48" cy="185" rx="26" ry="20" fill="#9a9a9a" />
    <ellipse cx="152" cy="185" rx="26" ry="20" fill="#9a9a9a" />
    <ellipse cx="48" cy="190" rx="14" ry="9" fill="#6b6b6b" opacity="0.55" />
    <ellipse cx="152" cy="190" rx="14" ry="9" fill="#6b6b6b" opacity="0.55" />
  </Animal>
)
