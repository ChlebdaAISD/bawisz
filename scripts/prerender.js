import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.resolve(__dirname, '../dist')
const dataPath = path.resolve(__dirname, '../src/data')

const SITE = 'https://bawialniabawisz.pl'

// Import FAQ data from shared source
const { URODZINY_FAQ } = await import(pathToFileURL(path.join(dataPath, 'urodziny.js')).href)
const { KAWIARNIA_FAQ } = await import(pathToFileURL(path.join(dataPath, 'kawiarnia.js')).href)
const { WARSZTATY_FAQ } = await import(pathToFileURL(path.join(dataPath, 'warsztaty.js')).href)
const { ONAS_FAQ } = await import(pathToFileURL(path.join(dataPath, 'o-nas.js')).href)
const { OFERTA_GRUPOWA_FAQ } = await import(pathToFileURL(path.join(dataPath, 'oferta-grupowa.js')).href)

const ROUTES = [
  {
    path: '/urodziny/',
    title: 'Urodziny dla dziecka Nowy Targ — Bawisz | Pakiety MINI 45 zł, STANDARD 74 zł',
    description: 'Urodziny dla dziecka w Nowym Targu w drewnianej bawialni Montessori. Pakiet MINI od 45 zł/os., STANDARD od 74 zł/os. z salą tylko dla was. Ocena 4.9/5 w Google.',
    canonical: `${SITE}/urodziny/`,
    ogImage: `${SITE}/assets/og-urodziny.jpg`,
    breadcrumb: [
      { name: 'Strona główna', url: `${SITE}/` },
      { name: 'Urodziny', url: `${SITE}/urodziny/` },
    ],
    serviceSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Urodziny dla dziecka — Bawisz Nowy Targ',
      serviceType: 'Organizacja urodzin dla dziecka',
      provider: { '@id': `${SITE}/#localbusiness` },
      areaServed: [
        { '@type': 'City', name: 'Nowy Targ' },
        { '@type': 'Place', name: 'Podhale' },
      ],
      audience: { '@type': 'PeopleAudience', suggestedMinAge: 0, suggestedMaxAge: 10 },
      offers: [
        {
          '@type': 'Offer',
          name: 'Pakiet MINI',
          price: '45',
          priceCurrency: 'PLN',
          description: 'Urodziny 2 h. Poczęstunek (woda, sok tłoczony 200 ml, paluszki, OTO chrupki, galaretki), dekoracje (zastawa kolorowa lub naturalna, balon-cyfra).',
          eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'osoba' },
        },
        {
          '@type': 'Offer',
          name: 'Pakiet STANDARD',
          price: '74',
          priceCurrency: 'PLN',
          description: 'Urodziny 2,5 h. Sala tylko dla was, min. 10 dzieci, prezent dla solenizanta, pełny poczęstunek (woda i sok tłoczony bez limitu, owoce, paluszki, chrupki OTO, gofry, cake pops lub babeczki, galaretki), dekoracje tematyczne (zastawa, ścianka, balon-cyfra, girlanda balonowa, cyfrowe zaproszenia).',
          eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'osoba' },
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: URODZINY_FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  },
  {
    path: '/kawiarnia/',
    title: 'Kawiarnia Nowy Targ — Bawisz | specialty + domowe ciasta',
    description: 'Kawiarnia w Nowym Targu z bawialnią Montessori obok. Specialty kawa, domowe ciasta (też bez cukru i bezglutenowe). ul. Krzywa 19B. Ocena 4.9/5 w Google.',
    canonical: `${SITE}/kawiarnia/`,
    ogImage: `${SITE}/assets/zdjecia/og-kawiarnia.jpg`,
    breadcrumb: [
      { name: 'Strona główna', url: `${SITE}/` },
      { name: 'Kawiarnia', url: `${SITE}/kawiarnia/` },
    ],
    serviceSchema: {
      '@context': 'https://schema.org',
      '@type': 'CafeOrCoffeeShop',
      '@id': `${SITE}/#kawiarnia`,
      branchOf: { '@id': `${SITE}/#localbusiness` },
      name: 'Bawisz — Kawiarnia w Nowym Targu',
      url: `${SITE}/kawiarnia/`,
      telephone: '+48693766049',
      image: `${SITE}/assets/zdjecia/og-kawiarnia.jpg`,
      priceRange: '10–50 PLN',
      servesCuisine: ['Kawa specialty', 'Domowe ciasta', 'Wypieki bezglutenowe', 'Wypieki bez cukru'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Krzywa 19B',
        addressLocality: 'Nowy Targ',
        postalCode: '34-400',
        addressRegion: 'małopolskie',
        addressCountry: 'PL',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 49.4773, longitude: 20.0303 },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '10:00', closes: '20:00' },
      ],
      hasMenu: {
        '@type': 'Menu',
        hasMenuSection: [
          {
            '@type': 'MenuSection',
            name: 'Kawa & napoje',
            hasMenuItem: [
              { '@type': 'MenuItem', name: 'Espresso' },
              { '@type': 'MenuItem', name: 'Flat white' },
              { '@type': 'MenuItem', name: 'Latte', description: 'Z syropem do wyboru: wanilia, orzech, karmel' },
              { '@type': 'MenuItem', name: 'Cappuccino' },
              { '@type': 'MenuItem', name: 'Matcha latte', description: 'Mleko zwykłe lub roślinne' },
              { '@type': 'MenuItem', name: 'Czekolada na gorąco' },
            ],
          },
          {
            '@type': 'MenuSection',
            name: 'Ciasta',
            hasMenuItem: [
              { '@type': 'MenuItem', name: 'Sezonowe ciasta domowe', description: 'Pieczone na miejscu, zmieniają się co tydzień' },
              { '@type': 'MenuItem', name: 'Brownie' },
              { '@type': 'MenuItem', name: 'Sernik' },
              { '@type': 'MenuItem', name: 'Szarlotka' },
              { '@type': 'MenuItem', name: 'Wersje bez cukru i bezglutenowe' },
            ],
          },
          {
            '@type': 'MenuSection',
            name: 'Dla dzieci',
            hasMenuItem: [
              { '@type': 'MenuItem', name: 'Owoce sezonowe krojone' },
              { '@type': 'MenuItem', name: 'Mleko / kakao', description: 'Ciepłe lub zimne' },
              { '@type': 'MenuItem', name: 'Soczki naturalne bez cukru' },
              { '@type': 'MenuItem', name: 'Babeczki bananowe bez cukru' },
              { '@type': 'MenuItem', name: 'Kanapka z dżemem' },
            ],
          },
        ],
      },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', bestRating: '5', reviewCount: '129' },
      sameAs: [
        'https://www.instagram.com/bawisz_bawialnia/',
        'https://www.facebook.com/p/Bawisz-bawialnia-Montessori-61572522181693/',
        'https://www.tiktok.com/@bawisz.bawialnia',
      ],
      areaServed: [
        { '@type': 'City', name: 'Nowy Targ' },
        { '@type': 'Place', name: 'Podhale' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: KAWIARNIA_FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  },
  {
    path: '/warsztaty/',
    title: 'Warsztaty dla dzieci Nowy Targ — Bawisz | sensoplastyka, plastyka',
    description: 'Warsztaty dla dzieci w Nowym Targu w drewnianej sali Montessori: sensoplastyka, plastyka, zajęcia kreatywne. Małe grupy, prowadzone zajęcia. Ocena 4.9/5 w Google.',
    canonical: `${SITE}/warsztaty/`,
    ogImage: `${SITE}/assets/og-warsztaty.jpg`,
    breadcrumb: [
      { name: 'Strona główna', url: `${SITE}/` },
      { name: 'Warsztaty', url: `${SITE}/warsztaty/` },
    ],
    serviceSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Warsztaty dla dzieci — Bawisz Nowy Targ',
      serviceType: 'Warsztaty kreatywne dla dzieci (sensoplastyka, plastyka, zajęcia tematyczne)',
      provider: { '@id': `${SITE}/#localbusiness` },
      areaServed: [
        { '@type': 'City', name: 'Nowy Targ' },
        { '@type': 'Place', name: 'Podhale' },
      ],
      audience: { '@type': 'PeopleAudience', suggestedMinAge: 0, suggestedMaxAge: 10 },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Typy warsztatów',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sensoplastyka',
              description: 'Zabawy z bezpiecznymi masami sensorycznymi z produktów spożywczych (mąka, żelatyna, kasze) dla dzieci od 6 miesięcy do 4 lat.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Warsztaty plastyczne',
              description: 'Malowanie, lepienie z masy solnej, prace z naturalnych materiałów dla dzieci od 3 do 10 lat.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Zajęcia kreatywne tematyczne',
              description: 'Warsztaty wokół pór roku, świąt i książek dla dzieci, łączące sensoplastykę i plastykę.',
            },
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: WARSZTATY_FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  },
  {
    path: '/o-nas/',
    title: 'Bawialnia Montessori Nowy Targ | drewniana sala — Bawisz',
    description: 'Bawialnia Montessori w Nowym Targu — drewniana sala, naturalne zabawki, kawiarnia obok. Dzieci 0-10 lat. Wstęp od 25 zł. ul. Krzywa 19B. Ocena 4.9/5.',
    canonical: `${SITE}/o-nas/`,
    ogImage: `${SITE}/assets/og-default.jpg`,
    breadcrumb: [
      { name: 'Strona główna', url: `${SITE}/` },
      { name: 'O nas', url: `${SITE}/o-nas/` },
    ],
    serviceSchema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'O Bawiszu — bawialnia Montessori i kawiarnia w Nowym Targu',
      url: `${SITE}/o-nas/`,
      mainEntity: { '@id': `${SITE}/#localbusiness` },
      about: {
        '@type': 'ChildCare',
        name: 'Bawisz — Bawialnia Montessori i Kawiarnia',
        description: 'Drewniana bawialnia Montessori dla dzieci 0-10 lat z kawiarnią pod jednym dachem. Naturalne zabawki, samodzielność dziecka, rodzic bawi się razem z dzieckiem (bez animatorów w codziennym wstępie).',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Krzywa 19B',
          addressLocality: 'Nowy Targ',
          postalCode: '34-400',
          addressRegion: 'małopolskie',
          addressCountry: 'PL',
        },
        telephone: '+48693766049',
        areaServed: [
          { '@type': 'City', name: 'Nowy Targ' },
          { '@type': 'Place', name: 'Podhale' },
        ],
        audience: { '@type': 'PeopleAudience', suggestedMinAge: 0, suggestedMaxAge: 10 },
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: ONAS_FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  },
  {
    path: '/oferta-grupowa/',
    title: 'Oferta dla przedszkoli Nowy Targ — Bawisz | od 15 zł/dziecko',
    description: 'Wyjścia grupowe dla przedszkoli i szkół w Nowym Targu — drewniana bawialnia Montessori. Od 15 zł za godzinę za dziecko, kawa gratis dla opiekunów. Min. 10 dzieci.',
    canonical: `${SITE}/oferta-grupowa/`,
    ogImage: `${SITE}/assets/og-oferta-grupowa.jpg`,
    breadcrumb: [
      { name: 'Strona główna', url: `${SITE}/` },
      { name: 'Dla przedszkoli', url: `${SITE}/oferta-grupowa/` },
    ],
    serviceSchema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Wyjścia grupowe dla przedszkoli i szkół — Bawisz Nowy Targ',
      serviceType: 'Wyjścia grupowe dla przedszkoli i szkół',
      provider: { '@id': `${SITE}/#localbusiness` },
      areaServed: [
        { '@type': 'City', name: 'Nowy Targ' },
        { '@type': 'Place', name: 'Podhale' },
      ],
      audience: { '@type': 'PeopleAudience', suggestedMinAge: 0, suggestedMaxAge: 10 },
      offers: [
        {
          '@type': 'Offer',
          name: 'Pakiet 1 godzina',
          price: '15',
          priceCurrency: 'PLN',
          description: '1 godzina zabawy w drewnianej bawialni Montessori. Cena za dziecko, minimum 10 dzieci.',
          eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'dziecko' },
        },
        {
          '@type': 'Offer',
          name: 'Pakiet 2 godziny',
          price: '23',
          priceCurrency: 'PLN',
          description: '2 godziny zabawy. Najczęstszy wybór przedszkoli i szkół. Cena za dziecko, minimum 10 dzieci.',
          eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'dziecko' },
        },
        {
          '@type': 'Offer',
          name: 'Pakiet NO LIMIT',
          price: '35',
          priceCurrency: 'PLN',
          description: 'Cały dzień otwarcia (10:00 do zamknięcia). Kawa i herbata gratis dla opiekunów (1:5). Cena za dziecko, minimum 10 dzieci.',
          eligibleQuantity: { '@type': 'QuantitativeValue', unitText: 'dziecko' },
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: OFERTA_GRUPOWA_FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  },
]

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Replace tag content + assert the regex actually matched.
// Silent failures = SEO regression with no warning.
// Note: check regex match FIRST (not string inequality) — when the replacement
// string equals the matched text (e.g. route's ogImage equals the template default),
// `out === html` would falsely flag a missed match.
function replaceOrThrow(html, pattern, replacement, label) {
  const matched = pattern instanceof RegExp ? pattern.test(html) : html.includes(pattern)
  if (!matched) {
    throw new Error(`prerender: failed to replace ${label} — pattern not found. Check index.html template.`)
  }
  return html.replace(pattern, replacement)
}

function injectMeta(html, route) {
  let out = html

  out = replaceOrThrow(out, /<title>[\s\S]*?<\/title>/, `<title>${escAttr(route.title)}</title>`, 'title')
  out = replaceOrThrow(
    out,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="description" content="${escAttr(route.description)}" />`,
    'meta[name=description]'
  )
  out = replaceOrThrow(
    out,
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/,
    `<link rel="canonical" href="${escAttr(route.canonical)}" />`,
    'link[rel=canonical]'
  )
  out = replaceOrThrow(out, /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/, `<meta property="og:title" content="${escAttr(route.title)}" />`, 'og:title')
  out = replaceOrThrow(out, /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/, `<meta property="og:description" content="${escAttr(route.description)}" />`, 'og:description')
  out = replaceOrThrow(out, /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/, `<meta property="og:url" content="${escAttr(route.canonical)}" />`, 'og:url')
  out = replaceOrThrow(out, /<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/, `<meta property="og:image" content="${escAttr(route.ogImage)}" />`, 'og:image')
  out = replaceOrThrow(out, /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/, `<meta name="twitter:title" content="${escAttr(route.title)}" />`, 'twitter:title')
  out = replaceOrThrow(out, /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/, `<meta name="twitter:description" content="${escAttr(route.description)}" />`, 'twitter:description')
  out = replaceOrThrow(out, /<meta\s+name="twitter:image"\s+content="[\s\S]*?"\s*\/?>/, `<meta name="twitter:image" content="${escAttr(route.ogImage)}" />`, 'twitter:image')

  // Sanity check — final HTML must contain the route's canonical
  if (!out.includes(route.canonical)) {
    throw new Error(`prerender: canonical URL ${route.canonical} not found in output for ${route.path}`)
  }

  // Inject route-specific JSON-LD (BreadcrumbList, Service, FAQ) before </head>
  const schemas = []
  if (route.breadcrumb && route.breadcrumb.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: route.breadcrumb.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    })
  }
  if (route.serviceSchema) schemas.push(route.serviceSchema)
  if (route.faqSchema) schemas.push(route.faqSchema)

  if (schemas.length) {
    const tags = schemas.map((s) => `  <script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')
    out = replaceOrThrow(out, '</head>', `${tags}\n  </head>`, '</head>')
  }

  return out
}

function generateSitemap() {
  const urls = [
    { loc: `${SITE}/`, priority: '1.0' },
    ...ROUTES.map((r) => ({ loc: r.canonical, priority: '0.8' })),
  ]
  const today = new Date().toISOString().slice(0, 10)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`
  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), xml)
  console.log('  ✓ sitemap.xml')
}

function generateRobots() {
  const txt = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`
  fs.writeFileSync(path.join(distPath, 'robots.txt'), txt)
  console.log('  ✓ robots.txt')
}

function prerender() {
  const templatePath = path.join(distPath, 'index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('Template not found at', templatePath, '— run "vite build" first.')
    process.exit(1)
  }

  const template = fs.readFileSync(templatePath, 'utf-8')
  console.log('Prerendering routes:')

  for (const route of ROUTES) {
    const html = injectMeta(template, route)
    const outDir = path.join(distPath, route.path)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), html)
    console.log(`  ✓ ${route.path}index.html`)
  }

  generateSitemap()
  generateRobots()
  console.log('Done.')
}

prerender()

export { ROUTES, injectMeta }
