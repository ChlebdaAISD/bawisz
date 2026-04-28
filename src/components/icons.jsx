// Custom-drawn icons — simple line/shape style matching the playful-premium aesthetic.
// Stroke-based, friendly, never childish.

const Ico = ({ children, size = 24, stroke = 1.7, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke}
    strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
)

export const IconLeaf = (p) => (
  <Ico {...p}>
    <path d="M5 19c0-9 6-14 14-14 0 9-5 14-14 14z" />
    <path d="M5 19c4-4 8-7 14-14" />
  </Ico>
)
export const IconHeart = (p) => (
  <Ico {...p}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  </Ico>
)
export const IconShield = (p) => (
  <Ico {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </Ico>
)
export const IconBlock = (p) => (
  <Ico {...p}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </Ico>
)
export const IconCoffee = (p) => (
  <Ico {...p}>
    <path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z" />
    <path d="M17 11h2a2 2 0 0 1 0 4h-2" />
    <path d="M8 5c0 1 1 1 1 2s-1 1-1 2" />
    <path d="M12 5c0 1 1 1 1 2s-1 1-1 2" />
  </Ico>
)
export const IconCake = (p) => (
  <Ico {...p}>
    <path d="M4 19h16v-7H4v7z" />
    <path d="M4 14c2 1 4-1 4-1s2 2 4 1 4-1 4-1 2 2 4 1" />
    <path d="M12 4v4" />
    <path d="M12 4l-1.5-1M12 4l1.5-1" />
  </Ico>
)
export const IconPalette = (p) => (
  <Ico {...p}>
    <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4 9 9 0 0 0-9-8z" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="7" r="1" fill="currentColor" stroke="none" />
    <circle cx="13" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none" />
  </Ico>
)
export const IconPin = (p) => (
  <Ico {...p}>
    <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </Ico>
)
export const IconPhone = (p) => (
  <Ico {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Ico>
)
export const IconClock = (p) => (
  <Ico {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Ico>
)
export const IconArrow = (p) => (
  <Ico {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Ico>
)
export const IconArrowUp = (p) => (
  <Ico {...p}>
    <path d="M7 17L17 7" />
    <path d="M9 7h8v8" />
  </Ico>
)
export const IconChevronLeft = (p) => (
  <Ico {...p}>
    <path d="M15 6l-6 6 6 6" />
  </Ico>
)
export const IconChevronRight = (p) => (
  <Ico {...p}>
    <path d="M9 6l6 6-6 6" />
  </Ico>
)
export const IconClose = (p) => (
  <Ico {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Ico>
)
export const IconMenu = (p) => (
  <Ico {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Ico>
)
export const IconStar = (p) => (
  <Ico {...p}>
    <path d="M12 3l2.5 5.5 6 .5-4.5 4 1.5 6L12 16l-5.5 3 1.5-6-4.5-4 6-.5L12 3z" />
  </Ico>
)
export const IconQuote = (p) => (
  <Ico {...p}>
    <path d="M7 8h4v8H5v-4a4 4 0 0 1 4-4h-2z" fill="currentColor" />
    <path d="M17 8h4v8h-6v-4a4 4 0 0 1 4-4h-2z" fill="currentColor" />
  </Ico>
)
export const IconInstagram = (p) => (
  <Ico {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </Ico>
)
export const IconFacebook = (p) => (
  <Ico {...p}>
    <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v8h3v-8h2.5l.5-3H14V9c0-.5.5-1 1-1z" fill="currentColor" stroke="none" />
  </Ico>
)
export const IconTiktok = (p) => (
  <Ico {...p}>
    <path d="M14 4v10a4 4 0 1 1-4-4" />
    <path d="M14 4c0 3 2 5 5 5" />
  </Ico>
)
export const IconCheck = (p) => (
  <Ico {...p}>
    <path d="M5 12l4 4L19 6" />
  </Ico>
)
export const IconConfetti = (p) => (
  <Ico {...p}>
    <path d="M4 20l5-13 7 7-12 6z" />
    <path d="M14 4l1 2M19 4l-1 2M20 9l-2 1M16 11l1 2" />
  </Ico>
)
export const IconWand = (p) => (
  <Ico {...p}>
    <path d="M5 19l11-11" />
    <path d="M14 6l4 4" />
    <path d="M18 4v3M20 5h-3M19 11h2M20 14v-2" />
  </Ico>
)
export const IconSparkle = (p) => (
  <Ico {...p}>
    <path d="M12 4v6M12 14v6M4 12h6M14 12h6" />
    <path d="M7 7l3 3M14 14l3 3M7 17l3-3M14 10l3-3" opacity="0.5" />
  </Ico>
)
export const IconNav = (p) => (
  <Ico {...p}>
    <path d="M3 11l18-7-7 18-2-8-9-3z" />
  </Ico>
)
