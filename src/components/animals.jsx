// Brand-approved animal mascots — official PNGs from the Bawisz design system.
// Mapping mirrors the printed flyer (assets/ulotki/Cennik-02.png).

const ANIMAL_SRC = {
  deer:   '/assets/animals/Canva_zwierzatka_bez_tła_relacje.png',
  bear:   '/assets/animals/Canva_zwierzatka_bez_tła_cennik.png',
  fox:    '/assets/animals/Canva_zwierzatka_bez_tła_urodzinki.png',
  wolf:   '/assets/animals/Canva_zwierzatka_bez_tła_wypieki.png',
  foxHat: '/assets/animals/zapisane_relacje_urodzinki.png',
}

// Wrapped gift box — yellow with mint ribbon and bow. Kept inline because brand assets have no PNG equivalent.
export const GiftBox = ({ size = 120, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...rest}>
    <rect x="12" y="50" width="96" height="62" rx="4" fill="#f2c844" />
    <rect x="8" y="44" width="104" height="14" rx="3" fill="#f5d566" />
    <rect x="52" y="44" width="16" height="68" fill="#a3c98c" />
    <rect x="8" y="62" width="104" height="12" fill="#a3c98c" />
    <path d="M60 44 C42 28 28 32 30 42 C32 50 50 48 60 44 Z" fill="#a3c98c" />
    <path d="M60 44 C78 28 92 32 90 42 C88 50 70 48 60 44 Z" fill="#a3c98c" />
    <ellipse cx="60" cy="44" rx="6" ry="5" fill="#7eaa6c" />
    <rect x="20" y="80" width="6" height="22" fill="#fff" opacity="0.18" />
  </svg>
)

const animalImg = (src, size, alt) => (
  <img
    src={src}
    width={size}
    height={size}
    alt={alt}
    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
    loading="lazy"
    decoding="async"
  />
)

const wrap = (size, children) => (
  <span style={{ position: 'relative', display: 'inline-block', width: size, height: size, lineHeight: 0 }}>
    {children}
  </span>
)

export const AnimalDeer = ({ size = 140, alt = 'Sarna' }) =>
  wrap(size, animalImg(ANIMAL_SRC.deer, size, alt))

export const AnimalWolf = ({ size = 140, alt = 'Wilk' }) =>
  wrap(size, animalImg(ANIMAL_SRC.wolf, size, alt))

export const AnimalFox = ({ size = 140, hat = false, alt = 'Lis' }) =>
  wrap(size, animalImg(hat ? ANIMAL_SRC.foxHat : ANIMAL_SRC.fox, size, alt))

export const AnimalBear = ({ size = 140, alt = 'Niedźwiedź' }) =>
  wrap(size, animalImg(ANIMAL_SRC.bear, size, alt))
