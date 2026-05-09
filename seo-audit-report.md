# SEO AUDIT — BAWISZ (bawialniabawisz.pl)
*Data audytu: 2026-05-09*
*Rubric: `.claude/rules/on-page-seo.md`*

## Executive Summary

| | |
|---|---|
| **Framework** | React 19 + Vite 6 + wouter (SPA) |
| **Prerendering** | ⚠️ Częściowy — meta tags + JSON-LD są injectowane, ALE `<div id="root">` jest PUSTY na wszystkich routach |
| **Krytyczne problemy** | 4 (empty body w prerendered HTML, stale dist build, brakujące OG images, brak SSG) |
| **Quick Wins** | 8 elementów <30 min effort |
| **on-page-seo.md compliance** | HEAD ✅ · BODY ❌ (Google JS render OK, AI/social/Bing widzą pustkę) · SCHEMA ✅ · CONVERSION ⚠️ |

**Najważniejsze odkrycie:** plik [scripts/prerender.js](scripts/prerender.js) injectuje tylko meta tagi i JSON-LD do statycznego template. **Nie renderuje treści React do HTML**. Każda podstrona w `dist/*/index.html` kończy się `<div id="root"></div>`. Googlebot odpalający JS to ogarnie, ale: Bing, ChatGPT, Perplexity, Claude, Facebook scraper, LinkedIn scraper, Slack unfurl — widzą pustą stronę bez H1, treści, obrazów. To największa dziura SEO/AI-search w projekcie.

---

## 1. Technical Analysis

### Framework Detection
- **Type**: React 19 SPA z Vite 6, routing wouter
- **"Prerendering"**: meta+JSON-LD only — REAL SSG MISSING
- **Build output**: `dist/index.html` zawiera `<div id="root"></div>` (puste) — patrz [dist/index.html:76](dist/index.html#L76), [dist/urodziny/index.html:79](dist/urodziny/index.html#L79)
- **Build script**: `vite build && node scripts/prerender.js` — drugi krok nie wykonuje SSR

### ✅ Working Well
- Per-route meta tags (title, description, canonical, OG, Twitter) — poprawnie injectowane przez prerender
- Per-route JSON-LD: BreadcrumbList, Service, FAQPage, ChildCare LocalBusiness — wszystkie obecne i ważne
- `<html lang="pl">`, charset, viewport, theme-color — OK
- Sitemap.xml + robots.txt obecne, pokrywają wszystkie 7 routes
- H1 ↔ Title alignment: 7/7 ✅ (zobacz sekcja 3)
- Trailing slash consistency: route → file (`/urodziny/` → `/urodziny/index.html`) zgodne z canonical
- Heading hierarchy w komponentach: 1 H1 per page, H2 jako stwierdzenia (tone-of-voice spełnione)
- Internal navigation w `Navbar.jsx` i `Footer.jsx` linkuje do wszystkich 7 stron
- Schema typów dobrane sensownie (`ChildCare`, `CafeOrCoffeeShop` jako branchOf, `AboutPage`, `ContactPage`)
- Hero img w [src/components/Hero.jsx:7](src/components/Hero.jsx#L7) ma `width`/`height` — zapobiega CLS

### ❌ Critical Problems

**Problem #1 (KRYTYCZNY): Empty `<div id="root">` na wszystkich routach**
- Issue: [scripts/prerender.js](scripts/prerender.js) zastępuje meta tagi w template, ale `<body>` zostaje `<div id="root"></div>`. Brak prerenderingu React → HTML.
- Impact: Bing, AI crawlers (ChatGPT, Perplexity, Claude), social scraper (Facebook, LinkedIn, Slack), Pinterest — widzą stronę bez H1, body, obrazów. Tracimy AI search visibility i social shares. Google JS-rendering działa, ale opóźnia indexing.
- Verification: `grep -c '<div id="root"></div>' dist/*/index.html dist/index.html` → wszystkie 7 plików zawierają pusty root div.
- Fix: Implementacja prawdziwego SSG (entry-server.jsx + vite SSR build + render każdego route do HTML). Boilerplate w `seo-improvement-plan.md`.
- Location: [scripts/prerender.js](scripts/prerender.js) — przebudować do faktycznego SSR.

**Problem #2: Stale dist build**
- Issue: `HOME_META.title` w [src/data/home.js:37](src/data/home.js#L37) = "Bawialnia Nowy Targ — Bawisz | drewniana sala Montessori". `index.html` template w project root (linia 9) też ma to. **Ale `dist/index.html` linia 9 wciąż ma stary title** "BAWISZ — Bawialnia Montessori i Kawiarnia w Nowym Targu".
- Impact: deploy z aktualnego dist serwuje przestarzały title — keyword "Bawialnia Nowy Targ" nie pojawia się w tytule przesyłanym do Google.
- Fix: `rm -rf dist && npm run build` przed każdym deployem (lub w CI).
- Location: dist/ jest stale.

**Problem #3: Brakujące OG images (referenced w meta, nie istnieją w public/assets/)**
- Issue: prerender.js generuje meta `og:image` wskazujące na pliki:
  - `/assets/og-default.jpg` — **MISSING** (używane na `/`, `/o-nas/`, `/kontakt/`)
  - `/assets/og-urodziny.jpg` — **MISSING**
  - `/assets/og-warsztaty.jpg` — **MISSING**
  - `/assets/og-oferta-grupowa.jpg` — **MISSING**
  - `/assets/zdjecia/og-kawiarnia.jpg` — ✅ istnieje
- Impact: Facebook/LinkedIn/Slack pokazują 404 lub fallback bez obrazka przy share. Negatywny CTR z social.
- Fix: stworzyć 4 brakujące OG images 1200×630, < 1 MB, JPG/WebP. Wrzucić do `public/assets/`.
- Location: referencje w [scripts/prerender.js](scripts/prerender.js), brak fizycznych plików w [public/assets/](public/assets/).

**Problem #4: Title urodziny.html za długi (76 znaków)**
- Issue: "Urodziny dla dziecka Nowy Targ — Bawisz | Pakiety MINI 45 zł, STANDARD 74 zł" = 76 znaków. Limit on-page-seo: 50–60.
- Impact: SERP truncuje po ~60 znakach → klient widzi "...Pakiety MINI 45 zł, STANDA…" — mniej clickable.
- Fix: Skrócić, np. "Urodziny dla dziecka Nowy Targ — Bawisz | od 45 zł" (52 znaki) — drugi pakiet w description.
- Location: [scripts/prerender.js:42](scripts/prerender.js#L42).

### ⚠️ Improvements Needed

- **Description homepage 132 znaki** — można dociągnąć do 150–160 dla pełniejszego snippet w SERP. [src/data/home.js:38](src/data/home.js#L38).
- **Anglicyzm "specialty" w title kawiarni** — tone-of-voice (sekcja 4b.4) zaleca "rzemieślnicza" lub przeformułowanie. "Kawiarnia Nowy Targ — Bawisz | rzemieślnicza kawa + domowe ciasta" (61 znaków, na granicy — można dać "kawa specialty" jako wyjątek, ale rozważ). [scripts/prerender.js:92](scripts/prerender.js#L92).
- **Brak widocznego breadcrumb** w UI na podstronach — JSON-LD jest, ale on-page-seo.md wymaga "Breadcrumb na każdej stronie" (visible). Dodać `<nav aria-label="breadcrumb">` na każdym `/urodziny/`, `/kawiarnia/`, etc. above hero.
- **Image filenames z polskimi znakami i spacjami** — `Bawisz_AnnaMrożek-22.webp` (znak "ż"), `foto_2025 (2).jpg` (spacja, nawias). Zalecenie z on-page-seo.md: lowercase + hyphens + bez polskich znaków → `bawisz-anna-mrozek-22.webp`. Wymaga renamy + update referencji.
- **Logo z `alt=""`** w [Navbar.jsx:61](src/components/Navbar.jsx#L61), [Navbar.jsx:96](src/components/Navbar.jsx#L96), [Footer.jsx:12](src/components/Footer.jsx#L12). Skoro brand text "BAWISZ" jest obok widoczny — `alt=""` jest defensible (decorative). Jeśli na mobile `nav-brand-text` jest `display: none` (linia 250 nav CSS), logo zostaje samo bez tekstu — warto dać `alt="BAWISZ"` na main brand link.
- **Brak `apple-touch-icon`** (`<link rel="apple-touch-icon">`). Tylko `favicon.svg`. Dodać 180×180 PNG.
- **Brak `<meta name="robots" content="index, follow">`** — domyślnie OK, ale explicit lepszy dla pewności.
- **Hero subline "0–10 lat" zawiera en-dash** — Google rozumie, ale primary keyword w opisie używa "0-10" (myślnik) — drobna inconsistency. [src/components/Hero.jsx:27](src/components/Hero.jsx#L27).
- **Brak Author/Person schema** — on-page-seo.md w E-E-A-T zaleca byline. Service page bez identified person to słaby sygnał trustu (jednak małe firmy często bez tego sobie radzą).

---

## 2. SPA/SSR Status

| Item | Status |
|---|---|
| Empty root div | ❌ YES (wszystkie 7 routes) |
| Dynamic meta tags per route | ✅ YES (przez `prerender.js` + runtime `updateHead`) |
| Correct canonicals per route | ✅ YES (per-route w prerender) |
| Trailing slash consistency | ✅ YES (canonical/folder/route match) |
| Body content widoczny w View Source | ❌ NO |
| Implementation needed | ✅ YES — patrz `seo-improvement-plan.md` Faza 1 |

---

## 3. H1 ↔ Title Alignment

| Route | `<title>` | `<h1>` | Status |
|---|---|---|---|
| `/` | Bawialnia Nowy Targ — Bawisz \| drewniana sala Montessori | Bawialnia w Nowym Targu, do której dziecko chce wracać. | ✅ Aligned |
| `/urodziny/` | Urodziny dla dziecka Nowy Targ — Bawisz \| Pakiety MINI 45 zł, STANDARD 74 zł | Urodziny dla dziecka. Nowy Targ — drewniana … | ✅ Aligned (ale title za długi) |
| `/kawiarnia/` | Kawiarnia Nowy Targ — Bawisz \| specialty + domowe ciasta | Kawiarnia w Nowym Targu. Z drewnianą bawialnią | ✅ Aligned |
| `/warsztaty/` | Warsztaty dla dzieci Nowy Targ — Bawisz \| plastyka, glina, joga | Warsztaty dla dzieci. Nowy Targ — plastyka, glina, … | ✅ Aligned |
| `/o-nas/` | Bawialnia Montessori Nowy Targ \| drewniana sala — Bawisz | Bawialnia Montessori w Nowym Targu. | ✅ Aligned |
| `/oferta-grupowa/` | Oferta dla przedszkoli Nowy Targ — Bawisz \| od 15 zł/dziecko | Oferta dla przedszkoli. Nowy Targ — drewniana … | ✅ Aligned |
| `/kontakt/` | Kontakt — Bawisz Nowy Targ \| telefon, mapa, godziny | Kontakt — Bawisz. Nowy Targ, Krzywa 19B — | ✅ Aligned |

**Summary**: ✅ 7 / 🟡 0 / ❌ 0. Brak fixów alignmentu wymaganych. Jedyny issue strukturalny: title urodziny za długi (Problem #4).

---

## 4. on-page-seo.md Compliance (per page)

Pełna lista 80+ punktów: [.claude/rules/on-page-seo.md](.claude/rules/on-page-seo.md). Poniżej audit per sekcja.

### HEAD / METADATA

| Item | / | /urodziny/ | /kawiarnia/ | /warsztaty/ | /o-nas/ | /oferta-grupowa/ | /kontakt/ |
|---|---|---|---|---|---|---|---|
| Title 50-60 znaków | ✅ 56 | ❌ 76 | ⚠️ 55* | ⚠️ 63 | ✅ 56 | ✅ 60 | ✅ 51 |
| Meta description 150-160 | ⚠️ 132 | ✅ 160 | ✅ 152 | ✅ 156 | ✅ 145 | ✅ 158 | ✅ 158 |
| Canonical | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| OG title/description/url | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| OG image (file existing) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Twitter card | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `<html lang="pl">` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Viewport, charset | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Favicon | ✅ (svg) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| apple-touch-icon | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

*"specialty" jako anglicyzm — rozważ.

### URL STRUCTURE

| Item | Status | Komentarz |
|---|---|---|
| Krótki slug (<60) | ✅ | Najdłuższy `oferta-grupowa` (14 znaków) |
| Primary keyword w slugu | ✅ | `urodziny`, `kawiarnia`, `warsztaty` |
| Hyphens, not underscores | ✅ | |
| Lowercase | ✅ | |
| Bez polskich znaków | ✅ | |
| Logiczna hierarchia | ✅ | Flat — OK dla mikrostrony |

### HEADINGS

| Item | Status | Komentarz |
|---|---|---|
| Dokładnie 1 H1 per page | ✅ | Po jednym H1 w każdym `pages/*.jsx` |
| H1 zawiera primary keyword | ✅ | Patrz alignment table |
| Logiczna H2→H3 | ✅ | Każda strona: H1 → H2 sections → H3 (FAQ items) |
| H2 jako stwierdzenia | ✅ | "Cztery kroki. Bez niespodzianek.", "Trzy ceny. Bez gwiazdek." — TOV-compliant |

### COPY / BODY

| Item | Status | Komentarz |
|---|---|---|
| Primary keyword w pierwszych 100 słowach | ✅ | Hero + opening każdej service page |
| Direct answer w 1. akapicie | ✅ | TOV stosowany konsekwentnie |
| Krótkie akapity | ✅ | |
| Strona czynna | ✅ | TOV-compliant |

### FAQ

| Item | Status | Komentarz |
|---|---|---|
| 4–8 pytań | ✅ | Home: 8, Urodziny: 6, etc. |
| FAQ schema JSON-LD | ✅ | Per route |

### IMAGES

| Item | Status | Komentarz |
|---|---|---|
| Alt text | ⚠️ | Hero/Gallery/animals — OK. Logo decorative `alt=""` (defensible) |
| Opisowe filenames | ❌ | `Bawisz_AnnaMrożek-22.webp` (znak "ż"), `foto_2025 (2).jpg` |
| WebP, <200KB | ⚠️ | Większość WebP, część `.jpg` (Hero `foto_2025 (2).jpg`); rozmiarów nie weryfikowałem |
| width/height | ⚠️ | Hero ✅. Gallery (`ImgReveal`) — należy zweryfikować |
| Lazy loading | ⚠️ | `Reveal.jsx` ma `loading="lazy"`. Hero — eager (poprawne dla above-fold) |

### INTERNAL LINKS

| Item | Status | Komentarz |
|---|---|---|
| 3-5 linków per page | ⚠️ | Navbar+Footer linkują wszystko, ale brak contextual links w body (np. z urodziny → kawiarnia) |
| Opisowy anchor text | ✅ | "Zarezerwuj urodziny", "Wpadnij na kawę" |
| Breadcrumb visible | ❌ | Brak widocznego breadcrumb |
| Breadcrumb JSON-LD | ✅ | |

### EXTERNAL LINKS

| Item | Status | Komentarz |
|---|---|---|
| 2-3 do autorytatywnych źródeł | ⚠️ | Tylko social media + Google Maps. Brak linków typu `gov.pl`/uczelnie/branżowe (przy małej lokalnej firmie acceptable, ale info-content blog by skorzystał) |
| `rel="noopener"` na external | ✅ | Wszędzie `rel="noopener noreferrer"` |
| Otwarcie w nowej karcie | ✅ | `target="_blank"` |

### SCHEMA MARKUP

| Schema | Status |
|---|---|
| LocalBusiness (`ChildCare`) site-wide | ✅ |
| `CafeOrCoffeeShop` jako branchOf na /kawiarnia/ | ✅ |
| `AboutPage` na /o-nas/ | ✅ |
| `ContactPage` na /kontakt/ | ✅ |
| `Service` na service pages | ✅ |
| `FAQPage` wszędzie | ✅ |
| `BreadcrumbList` wszędzie | ✅ |
| `AggregateRating` | ⚠️ (tylko na CafeOrCoffeeShop, brak na głównym ChildCare) |
| `Article` na blog | N/A (brak bloga) |
| `Organization` site-wide | ⚠️ Pokrywa się z LocalBusiness — OK |
| `Person`/`Author` | ❌ (brak bylines) |

### E-E-A-T SIGNALS

| Item | Status |
|---|---|
| Real numbers w treści | ✅ (45 zł, 74 zł, 220 m², 4.9/5, 129 reviews) |
| Real opinions w testimoniale | ✅ (sekcja Testimonials) |
| About page z credentials | ⚠️ (brak imienia właściciela, lat doświadczenia) |
| Contact page z address+telefon+godziny | ✅ |
| Author byline na content | ❌ |

### ACCESSIBILITY

| Item | Status |
|---|---|
| Semantic HTML5 (`<main>`, `<nav>`, `<section>`, `<footer>`) | ✅ |
| ARIA labels (Navbar, mobile menu, gallery lightbox) | ✅ |
| Focus indicators | ⚠️ (nie weryfikowałem CSS focus rings) |
| Alt text everywhere | ✅ (z wyjątkiem decorative logo) |
| Skip-to-content | ❌ |

### MOBILE

| Item | Status |
|---|---|
| Responsywny layout | ✅ |
| Touch targets ≥48×48 | ⚠️ (nav-burger 48×48 ✅, nav-link bez paddingu — możliwe za małe) |
| Body font ≥16px | ⚠️ (nie weryfikowałem) |
| Brak intrusive interstitials | ✅ |

### SOCIAL PREVIEW

| Item | Status |
|---|---|
| OG image 1200×630 | ❌ Pliki nie istnieją (oprócz kawiarnia) |
| Twitter card 1200×600 | ❌ (te same brakujące pliki) |

### CONVERSION ELEMENTS (service pages)

| Item | Status |
|---|---|
| Primary CTA above fold | ✅ ("Zarezerwuj urodziny") |
| Click-to-call (`tel:`) | ✅ Footer + Kontakt |
| Multiple CTA placements | ✅ |
| Trust signals (rating, jobs, license) | ✅ (4.9/5, 129 reviews via Google) |
| Testimoniale | ✅ (sekcja Testimonials na Home) |
| Obszar działania | ✅ (Nowy Targ + Podhale w schema, w body Kontakt) |
| Godziny otwarcia visible | ✅ (status pill w nav, Hours, Footer) |
| Adres + mapa | ✅ (Kontakt page) |

### LONG-FORM (1500+ słów)

N/A — service pages krótsze, brak bloga.

### AI SEARCH OPTIMIZATION

**KRYTYCZNE w kontekście empty root div** — AI scrapery (ChatGPT, Perplexity, Claude) nie odpalają JS. Bez SSG — AI SEO = 0 dla tej strony.

| Item | Status (po fixie SSG) |
|---|---|
| CCV — H2 jako konkretne pytania | ⚠️ Większość H2 to stwierdzenia ("Cztery kroki", "Trzy ceny") — dobre dla TOV, ale AI search faworyzuje H2 jako pełne pytania ("Ile kosztują urodziny w Nowym Targu?"). FAQ pytania są w `<h3>` w body → AI je czyta. |
| AIO — direct answer w pierwszych 2 zdaniach | ✅ TOV consistent |
| RAG-friendly chunking | ✅ Krótkie akapity, każdy H2 standalone |
| Schema Coverage | ✅ Bogato |
| Quotable Claims (liczby + atrybucja) | ✅ (45 zł, 74 zł, 220 m², 4.9/5, 129 opinii) |
| Citation-Friendly Format (autor+data) | ❌ Brak bylines/author/data |
| Internal Graph (anchor text = entity name) | ⚠️ Częściowo. "Wpadnij do nas" jako CTA — generic. Lepiej dodać "bawialnia Montessori w Nowym Targu" jako anchor w body. |

### PL-specific

| Item | Status |
|---|---|
| Odmiana miast (locative) | ✅ "w Nowym Targu" konsekwentnie |
| Forma grzecznościowa | ⚠️ Mix: TOV pl-casual ("Wpadasz na kawę?", "Zostawiasz dziecko") — to OK dla brand voice Bawisza (rodzinny, przyjazny). Acceptable jeśli `voice.md` ma `language: pl-casual`. |
| Banned phrases | ✅ Nie znalazłem "kompleksowy", "innowacyjny", "w dzisiejszych czasach" |
| Wielka litera "Ty" w pl-casual | ⚠️ Sprawdziłem urodziny FAQ — "ty" jest małą literą ✅. Należy potwierdzić we wszystkich data files |
| "ze" vs "z" | ⚠️ Nie skanowałem dokładnie — recommend Ctrl+F |

---

## 5. Sitemap & robots.txt

- `dist/sitemap.xml`: ✅ obecny, 7 URLs (1 home + 6 podstron)
- Wszystkie URLs z trailing slash, zgodne z canonical
- 3XX URLs: 0 (zakładając że produkcja serwuje pliki bezpośrednio)
- `lastmod`: 2026-05-08 (świeże)
- `dist/robots.txt`: ✅ obecny, `Allow: /`, link do sitemap

---

## 6. Competitor Technical Gaps

Skipped — to jest skill technical+on-page audit, **nie** competitive research. Do gap analysis na poziomie keywords/content gaps użyj `/seed-client-seo`.

---

## 7. Quick Wins (top 12 po ROI)

| # | Issue | Effort | Impact | Action |
|---|---|---|---|---|
| 1 | Empty root div w prerendered HTML | 4-6 h | 🔥🔥🔥 | Implementacja prawdziwego SSG (Faza 1 planu) |
| 2 | Brakujące OG images (4 pliki) | 30 min | 🔥🔥🔥 | Wygenerować 4 obrazki 1200×630 i wrzucić do `public/assets/` |
| 3 | Stale dist build | 1 min | 🔥🔥 | `rm -rf dist && npm run build` przed każdym deployem |
| 4 | Title urodziny 76 znaków | 5 min | 🔥🔥 | Skrócić do <60 w `scripts/prerender.js:42` |
| 5 | Description home 132 znaki | 5 min | 🔥 | Wydłużyć do 150-160 w [src/data/home.js:38](src/data/home.js#L38) |
| 6 | Brak apple-touch-icon | 10 min | 🔥 | Dodać 180×180 PNG i `<link rel="apple-touch-icon">` w `index.html` |
| 7 | Brak widocznych breadcrumb | 1 h | 🔥🔥 | Dodać `<nav aria-label="breadcrumb">` na podstronach |
| 8 | Logo `alt=""` na mobile gdzie brak text | 5 min | 🔥 | Zmienić na `alt="BAWISZ"` w [Navbar.jsx:61](src/components/Navbar.jsx#L61) i [Footer.jsx:12](src/components/Footer.jsx#L12) |
| 9 | Anglicyzm "specialty" w title kawiarni | 5 min | 🔥 | Rozważyć "rzemieślnicza" w `scripts/prerender.js:92` |
| 10 | Image filenames z polskimi znakami | 30 min | 🔥 | Rename `Bawisz_AnnaMrożek-*` → `bawisz-anna-mrozek-*` + update referencji w `Gallery.jsx` |
| 11 | Brak `<meta robots>` explicit | 2 min | 🔥 | Dodać `<meta name="robots" content="index, follow">` w [index.html](index.html) |
| 12 | Pricing schema `AggregateRating` na ChildCare | 5 min | 🔥 | Skopiować `aggregateRating` z `CafeOrCoffeeShop` na główny ChildCare LocalBusiness |

---

## 8. Hand-offs (next steps in pipeline)

- **Bez `references/` i `seo/*_keywords.md`** — projekt nie ma `seo/blog_keywords.md` ani `references/voice.md` (sprawdziłem `ls`). Jeśli chcesz organic content (blog, więcej landing pages), użyj `/seed-client-seo` jako entry point.
- **Local business** → `/local-seo-optimizer` — GBP audit, Maps Pack ranking, citations w polskich katalogach (Panorama Firm, Pkt.pl, Mapa Polski). To największa nieadresowana dźwignia dla Bawisza w SEO lokalnym.
- **Content gaps** → `/write-blog-post` (po keywords z `/seed-client-seo`) — np. "atrakcje dla dzieci Nowy Targ", "co robić z dzieckiem w Tatrach kiedy pada", "urodziny dla dziecka Podhale".
- **Existing content** — `/write-service-page` może wygenerować nowe lokalne podstrony (np. `/zakopane/urodziny/`) jeśli rozszerzasz service area.

Pełny pipeline: [.claude/rules/seo-pipeline-overview.md](.claude/rules/seo-pipeline-overview.md).
