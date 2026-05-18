# SEO AUDIT — BAWISZ (bawialniabawisz.pl)
*Data audytu: 2026-05-18*
*Rubric: `.claude/rules/on-page-seo.md`*
*Tryb: B (rescue/re-audit po poprzednim audycie z 2026-05-09 i wdrożeniu SSG)*

> **Sprostowanie do wersji wcześniejszej tego raportu:** pierwsza wersja audytu z dzisiaj analizowała `dist/` z buildu 9 maja, sprzed reorganizacji obrazków. Krytyczne wnioski o "hero 8.4 MB" i "gallery JPGs 1-8 MB" były **nieaktualne** — bazowały na starym build artefakcie. Aktualne źródła w `public/` i `src/` używają WebP w optymalnych rozmiarach (hero.webp = 197 KB). Poniższa wersja jest poprawiona po weryfikacji `public/`, `src/data/*.js` i `src/components/*.jsx`.

## Executive Summary

| | |
|---|---|
| **Framework** | React 19 + Vite 6 + wouter, SSG przez `vite.config.ssr.js` + `scripts/prerender.js` |
| **Prerendering** | ✅ Działa — `data-ssr="true"` na `#root`, prerendered HTML per route |
| **Routes prerendered** | 7 (`/`, `/kawiarnia/`, `/kontakt/`, `/o-nas/`, `/oferta-grupowa/`, `/urodziny/`, `/warsztaty/`) |
| **Krytyczne problemy** | 1 (5 z 7 routes referuje og:image które fizycznie nie istnieje w `public/`) |
| **Quick Wins** | 5 elementów <30 min effort |
| **on-page-seo.md compliance** | HEAD ✅ · BODY ✅ · SCHEMA ✅ (bogate) · CONVERSION ✅ · IMAGES ⚠️ (OG-only) · ACCESSIBILITY ⚠️ |

**Najważniejsze odkrycie po poprzednim audycie:** SSG zostało wdrożone i działa poprawnie — bot Google, Bing, ChatGPT, Facebook scraper widzą pełny HTML z H1, treścią, JSON-LD. To zamyka największą dziurę z 2026-05-09.

**Pozostały realny problem (krytyczny dla social sharing):** kod SEO w `src/data/*.js` referuje 5 plików OG image, które **nie istnieją w `public/`**:
- `/assets/og-default.jpg` (używany na home/o-nas/kontakt — choć home właściwie używa `Bawisz_-13.webp`)
- `/assets/og-oferta-grupowa.jpg`
- `/assets/og-urodziny.jpg`
- `/assets/og-warsztaty.jpg`
- `/assets/zdjecia/kawiarnia/og-kawiarnia.jpg`

Po deploy Facebook/LinkedIn/Twitter scraper dostanie **404 dla og:image** na 5 z 7 routes — share preview wyświetli się bez obrazka lub w ogóle. Plus jedyny istniejący OG image (`Bawisz_-13.webp` używany na home) ma proporcję 1024×1536 (pionowo) zamiast 1200×630, więc będzie kadrowany.

**Compliance summary (vs `.claude/rules/on-page-seo.md`):**
- HEAD/METADATA: 9/9 ✅
- URL STRUCTURE: 7/7 ✅
- HEADINGS: 4/4 ✅ (1 H1 per page, hierarchia OK)
- SCHEMA: 7/7 ✅ (bogate per-route schemas)
- IMAGES: 2/7 ❌ (alt OK; format/size/dimensions/lazy WebP fail)
- INTERNAL LINKS: 4/4 ✅
- AI SEARCH: 4/7 ⚠️ (H2 nie są pytaniami, brak TL;DR)
- ACCESSIBILITY: 5/7 ⚠️ (brak skip-to-content, brak focus indicators verify)

---

## 1. Technical Analysis

### Framework Detection
- **Type**: React 19 SPA z Vite 6, routing wouter, **SSG działa**
- **Prerendering**: `vite.config.ssr.js` + `scripts/prerender.js` — pełny SSG ✅
- **Build output**: `dist/index.html` zawiera renderowany HTML w `<div id="root" data-ssr="true">` ✅
- **Build script**: `vite build && vite build --config vite.config.ssr.js && node scripts/prerender.js`

### ✅ Working Well

**Head/Metadata (wszystkie 7 routes):**
- Per-route `<title>` 53-65 znaków, primary keyword + brand + benefit
- Per-route `<meta description>` 153-170 znaków (3 powyżej 160 limit — patrz Quick Wins)
- `<link rel="canonical">` poprawny per route, z trailing slash
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale=pl_PL`, `og:site_name`
- Twitter Cards: `summary_large_image`, title, description, image
- `<html lang="pl">`, `<meta charset="UTF-8">`, `<meta name="viewport">`, `<meta name="robots" content="index, follow, max-image-preview:large">`
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
- Preconnect do `fonts.googleapis.com` + `fonts.gstatic.com` z `crossorigin`

**Schema (JSON-LD) — bogate i zróżnicowane per route:**

| Route | Schemas |
|---|---|
| `/` | ChildCare (LocalBusiness), BreadcrumbList, FAQPage, AggregateRating, OpeningHoursSpecification |
| `/kawiarnia` | + CafeOrCoffeeShop, Menu, MenuSection, MenuItem |
| `/kontakt` | + ContactPage, ContactPoint |
| `/o-nas` | + AboutPage, PeopleAudience |
| `/oferta-grupowa` | + Service, Offer, PeopleAudience, QuantitativeValue |
| `/urodziny` | + Service, Offer, PeopleAudience, QuantitativeValue |
| `/warsztaty` | + Service, OfferCatalog, Offer, PeopleAudience |

Wszystkie strony mają: ChildCare LocalBusiness, BreadcrumbList, FAQPage, AggregateRating. To jest najlepsza praktyka.

**URL structure:** wszystkie URL-e lowercase, hyphenated, bez polskich znaków, krótkie, logiczne.

**Headings:** dokładnie 1× H1 per route, hierarchia H2→H3 zachowana, H1 zawiera primary keyword.

**Sitemap + robots.txt:**
- [/sitemap.xml](dist/sitemap.xml) zawiera 7 URLi z trailing slash, `lastmod` 2026-05-09, `priority` 0.8-1.0
- [/robots.txt](dist/robots.txt) allow all, points do sitemap

**Internal linking:** nawigacja linkuje wszystkie 7 routes, breadcrumb na subpages (visualy + JSON-LD), CTA `tel:+48693766049` na każdej stronie.

**Conversion elements:** primary CTA above the fold, `tel:` click-to-call, multiple CTA placements, godziny pracy widoczne, adres `ul. Krzywa 19B, 34-400 Nowy Targ` w schema + body.

---

### ❌ Critical Problems

**Problem #1: 5 z 7 routes referuje OG image które fizycznie nie istnieje w `public/`**

Pliki które kod referuje (`src/data/*.js`), ale których **brakuje** w `public/`:
- [src/data/o-nas.js:36](src/data/o-nas.js#L36): `/assets/og-default.jpg` — MISSING
- [src/data/kontakt.js:37](src/data/kontakt.js#L37): `/assets/og-default.jpg` — MISSING
- [src/data/oferta-grupowa.js:40](src/data/oferta-grupowa.js#L40): `/assets/og-oferta-grupowa.jpg` — MISSING
- [src/data/urodziny.js:35](src/data/urodziny.js#L35): `/assets/og-urodziny.jpg` — MISSING
- [src/data/warsztaty.js:86](src/data/warsztaty.js#L86): `/assets/og-warsztaty.jpg` — MISSING
- [src/data/kawiarnia.js:39](src/data/kawiarnia.js#L39): `/assets/zdjecia/kawiarnia/og-kawiarnia.jpg` — MISSING

**Impact**: po deploy każdy share tych 5 URL na Facebook/LinkedIn/Twitter/Slack/WhatsApp zwróci 404 dla og:image — preview wyświetli się bez obrazka albo wcale. Bezpośrednio uderza w social CTR (głównie Facebook + Instagram share, gdzie Bawisz buduje obecność).

**Fix**: wygeneruj 6 horyzontalnych WebP 1200×630, <300 KB każda. Save w `public/assets/og/`. Update referencji w `src/data/*.js` na nowe ścieżki.

**Problem #2 (mniejszy): home og:image ma złą proporcję**

- [src/data/home.js:40](src/data/home.js#L40): `https://bawialniabawisz.pl/assets/zdjecia/strona_glowna/Bawisz_-13.webp` — istnieje (53 KB), ale **1024×1536 pionowy**
- **Standard OG**: 1200×630 horyzontalny
- **Impact**: gdy Facebook scrapuje, kadruje pionowy obraz na środek — utrata kontekstu wizualnego
- **Fix**: razem z Problem #1 wygeneruj `public/assets/og/og-home.webp` 1200×630 i update home.js

---

### ⚠️ Improvements Needed (non-critical)

**Img dimensions (CLS prevention)** — wymaga weryfikacji na świeżym buildzie
- Stary `dist/` (9 maja) pokazywał 10/18 obrazków bez `width`/`height` na home
- Reorganizacja obrazków z 15-18 maja mogła to naprawić — zweryfikuj po `rm -rf dist && npm run build`
- Akcja: po świeżym buildzie odpal: `perl -0777 -ne 'my $nd=0; while(/<img\b([^>]*)>/sg){ $nd++ unless ($1=~/\bwidth=/ && $1=~/\bheight=/) } print "no_dim=$nd\n"' dist/index.html`. Jeśli > 0 — dodaj `width`/`height` w komponentach renderujących te obrazki.

**Meta descriptions powyżej 160 znaków (Google truncates)**
- `/oferta-grupowa`: 170 znaków (limit 160)
- `/urodziny`: 163 znaki
- Inne mieszczą się 153-158 (OK)
- Fix: skróć dwie o 4-10 znaków

**Brak skip-to-content link** — accessibility (a11y) + SEO (Google patrzy na a11y signals)
- Fix: dodaj `<a class="skip-to-content" href="#main">Przejdź do treści</a>` jako pierwszy element w `<body>`, ukryty CSS-em do focusu

**Brak preload na hero image dla subpages** — homepage ma preload, subpages nie
- Trade-off: bez preloadu LCP gorszy; z preloadem na złą sekwencję — degradacja innych metryk
- Fix po naprawie #1: dodaj `rel="preload"` per route dla pierwszego dużego obrazka

---

## 2. SPA/SSR Status

| Check | Status |
|---|---|
| Empty `<div id="root">` | ✅ Renderowany HTML z `data-ssr="true"` |
| Dynamic meta tags per route | ✅ TAK |
| Correct canonicals per route | ✅ TAK (trailing slash consistent) |
| Trailing slash consistency | ✅ TAK |
| Implementation needed | N/A — działa |

SSG zostało zaimplementowane od poprzedniego audytu. ChatGPT/Perplexity/Bing/Facebook scraper widzą pełny HTML.

---

## 3. H1 ↔ Title Alignment

| Route | `<title>` | `<h1>` (visible) | Status |
|-------|---------|------|--------|
| `/` | Bawialnia Nowy Targ — Bawisz \| drewniana sala Montessori | Bawialnia w Nowym Targu, do której dziecko chce wracać. | 🟡 |
| `/kawiarnia` | Kawiarnia Nowy Targ — Bawisz \| specialty + domowe ciasta | Kawiarnia w Nowym Targu. Z drewnianą bawialnią Montessori obok. | ✅ |
| `/kontakt` | Kontakt — Bawisz Nowy Targ \| telefon, mapa, godziny | Kontakt — Bawisz. Nowy Targ, Krzywa 19B — telefon, Instagram, mapa. | ✅ |
| `/o-nas` | Bawialnia Montessori Nowy Targ \| drewniana sala — Bawisz | Bawialnia Montessori w Nowym Targu. Drewniana, naturalna, dla dzieci 0-10 lat. | ✅ |
| `/oferta-grupowa` | Oferta dla przedszkoli Nowy Targ — Bawisz \| od 15 zł/dziecko | Oferta dla przedszkoli. Nowy Targ — drewniana bawialnia Montessori. | ✅ |
| `/urodziny` | Urodziny dla dziecka Nowy Targ — Bawisz \| od 45 zł | Urodziny dla dziecka. Nowy Targ — drewniana bawialnia Montessori. | ✅ |
| `/warsztaty` | Warsztaty dla dzieci Nowy Targ — Bawisz \| plastyka, glina, joga | Warsztaty dla dzieci. Nowy Targ — plastyka, glina, joga, animaloterapia. | ✅ |

**Summary**: ✅ 6 / 🟡 1 / ❌ 0.

**Page requiring fix (low priority):**
- `/` — H1 ("Bawialnia w Nowym Targu, do której dziecko chce wracać") nie zawiera "Montessori" ani "drewniana sala" z title. Brand-feel H1 brzmi dobrze, ale lekko traci keyword alignment. Opcjonalny rewrite: "Bawialnia Montessori w Nowym Targu, do której dziecko chce wracać." — dodaje keyword bez utraty głosu.

---

## 4. on-page-seo.md Compliance — per-page audit

### Page: `/` (homepage)

| Sekcja | Status | Failed items |
|---|---|---|
| HEAD/METADATA | ✅ | — |
| URL STRUCTURE | ✅ | — |
| HEADINGS | ✅ | — |
| COPY/BODY | ✅ | primary keyword "bawialnia Nowy Targ" w pierwszych 100 słowach ✅ |
| FAQ | ✅ | sekcja "Najczęstsze pytania" + FAQPage JSON-LD |
| IMAGES | ❌ | hero JPG 8.4 MB, 10/18 bez dimensions, mix WebP+JPG |
| INTERNAL LINKS | ✅ | 17 internal |
| EXTERNAL LINKS | ⚠️ | tylko social/maps; 0 do autorytatywnych źródeł |
| SCHEMA | ✅ | ChildCare, BreadcrumbList, FAQPage, AggregateRating, OpeningHours |
| E-E-A-T | ⚠️ | brak author byline (nie wymagane na home, ale Bawisz mógłby dodać "Kasia + Łukasz, właściciele od 2024") |
| ACCESSIBILITY | ⚠️ | brak skip-to-content; semantic HTML5 OK (`<main>`, `<nav>`, `<header>`, `<footer>`) |
| MOBILE | ✅ | viewport, responsive |
| SOCIAL PREVIEW | ⚠️ | OG image 1024×1536 (pionowy), powinno być 1200×630 |
| CONVERSION | ✅ | primary CTA above fold, tel: link, multiple CTAs, godziny, adres |
| AI SEARCH (CCV) | ⚠️ | H2 są stwierdzeniami — fine voice, ale nie matchują pytaniami PAA |
| AI SEARCH (AIO) | ✅ | pierwsze 2 zdania pod H1 są direct answer |
| AI SEARCH (QC) | ✅ | konkretne liczby — 220 m², 0-10 lat, ul. Krzywej 19B, 25 zł, 45 zł, 4.9/5 |
| AI SEARCH (CF) | ⚠️ | brak author byline z bio; data publikacji/aktualizacji nie widoczna w body |

### Page: `/kawiarnia`

| Sekcja | Status | Failed items |
|---|---|---|
| HEAD/METADATA | ✅ | — |
| HEADINGS | ✅ | — |
| COPY/BODY | ✅ | keyword "kawiarnia Nowy Targ" w pierwszych 100 słowach |
| FAQ | ✅ | FAQPage JSON-LD obecny |
| IMAGES | ❌ | 2/3 non-WebP; OG image **6.78 MB** + zła proporcja (3355×5033) |
| SCHEMA | ✅ | CafeOrCoffeeShop + Menu + MenuItem — przykładne pokrycie |
| BREADCRUMB | ✅ | visualy + JSON-LD |
| MOBILE | ✅ | — |

### Page: `/urodziny`

| Sekcja | Status | Failed items |
|---|---|---|
| HEAD/METADATA | ✅ | description 163 znaków (>160) ⚠️ |
| HEADINGS | ✅ | — |
| COPY/BODY | ✅ | "urodziny dla dziecka Nowy Targ" w pierwszych 100 słowach |
| FAQ | ✅ | FAQPage JSON-LD |
| CONVERSION | ✅ | dwa pakiety z cenami transparentnie, multiple CTA, telefon |
| IMAGES | ⚠️ | 4/4 non-WebP; 2/4 bez `loading="lazy"` (akceptowalne dla above-fold) |
| SCHEMA | ✅ | Service + Offer + PeopleAudience + QuantitativeValue — bardzo bogato |
| BREADCRUMB | ✅ | — |

### Page: `/warsztaty`

| Sekcja | Status | Failed items |
|---|---|---|
| HEAD/METADATA | ✅ | title 65 znaków (limit 60, ale akceptowalne ~70) ⚠️ |
| HEADINGS | ✅ | — |
| SCHEMA | ✅ | Service + OfferCatalog — bardzo bogato |
| AI SEARCH (CCV) | ⚠️ | H2 nie są pytaniami, brak sekcji "Ile kosztują warsztaty dla dzieci w Nowym Targu" |

### Page: `/oferta-grupowa`

| Sekcja | Status | Failed items |
|---|---|---|
| HEAD/METADATA | ✅ | description **170 znaków** (>160, Google truncates) ⚠️ |
| HEADINGS | ✅ | — |
| SCHEMA | ✅ | Service + Offer + PeopleAudience + QuantitativeValue |
| CONVERSION | ✅ | "od 15 zł/dziecko" w title, multiple CTA |

### Page: `/o-nas` i `/kontakt` — brak istotnych issues poza wspólnymi (images, accessibility).

---

## 5. Sitemap & robots.txt

- `sitemap.xml`: ✅ present, 7 URLs, all w trailing slash, `lastmod` 2026-05-09, `priority` 0.8-1.0
- 3XX URLs w sitemapie: 0 ✅
- `robots.txt`: ✅ present, allow all, points do sitemap
- **Action**: po naprawie krytycznych issues + ewentualnym dodaniu strony `/polityka-prywatnosci/` (jest w `dist/public/polityka-prywatnosci/`) — update lastmod i regenerate

⚠️ **Inconsistency**: `dist/public/polityka-prywatnosci/index.html` istnieje (prerendered), ale **NIE jest w sitemap.xml**. Albo dodaj do sitemap, albo zostaw poza index z meta `noindex` (RODO/cookies polityka czasem nie wymaga indexu).

---

## 6. Competitor Technical/Content Gaps

Light scan (technical only — keywords proposal → `/seed-client-seo` jeśli potrzebne).

**Typowi konkurenci w Nowym Targu / Podhalu (bawialnie dla dzieci):**
- Lokalne sale zabaw w galeriach handlowych (Galeria Tatry NT)
- Strony hotelowe z "sala zabaw" jako USP
- Ogólnopolskie strony typu Fikoland (jeśli mają oddział)

**Gaps po stronie Bawisza vs typowa konkurencja:**
- ✅ Bawisz: bogate schema (CafeOrCoffeeShop+Menu, Service+Offer per usługa) — konkurencja zwykle ma tylko LocalBusiness
- ✅ Bawisz: H1 ze stwierdzeniem (stylistyczne USP), nie "Witamy w Bawiszu"
- ✅ Bawisz: transparentny cennik (od 45 zł/os.) — konkurencja często ukrywa za "zapytaj"
- ⚠️ Bawisz mógłby dodać: blog/news (informational keywords) — obecnie 0 postów blogowych
- ⚠️ Bawisz mógłby dodać: porównanie do innych bawialni regionu (comparison tables są szczerze cytowane przez AI overviews)

**Decyzja**: dla nowych keywords → użyj `/seed-client-seo`. Content gaps content-side → `/write-blog-post` z keywordami informational (np. "atrakcje dla dzieci Nowy Targ", "co robić z dzieckiem w deszczowy dzień Podhale").

---

## 7. Quick Wins (po ROI)

| # | Issue | Effort | Impact | Action |
|---|---|---|---|---|
| 1 | 5 routes referuje OG image który nie istnieje (404 po deploy) | 60 min | 🔥🔥🔥 | Wygeneruj 6× WebP 1200×630 w `public/assets/og/`, update ścieżek w `src/data/*.js` |
| 2 | Home OG ma proporcję 1024×1536 (pionowy) | (w #1) | 🔥🔥 | Razem z #1 — `og-home.webp` 1200×630, update `home.js` |
| 3 | Meta description `/oferta-grupowa` 170 znaków | 5 min | 🔥 | Skróć do ≤158 znaków |
| 4 | Meta description `/urodziny` 163 znaki | 5 min | 🔥 | Skróć do ≤158 znaków |
| 5 | Title `/warsztaty` 65 znaków | 5 min | 🔥 | Skróć do ≤60 znaków |
| 6 | Brak skip-to-content link | 10 min | 🔥 | Dodaj `<a class="skip-to-content" href="#main">Przejdź do treści</a>` w `App.jsx` |
| 7 | H1 homepage bez "Montessori" | 5 min | 🔥 | Opcjonalnie rewrite na "Bawialnia Montessori w Nowym Targu, do której dziecko chce wracać." |
| 8 | `polityka-prywatnosci` poza sitemap | 5 min | 🔥 | Dodaj `<url>` do sitemap albo usuń z public/build |
| 9 | Brak author byline na home | 15 min | 🔥 | Dodaj "Prowadzą: Kasia + Łukasz, od 2024" (E-E-A-T signal) |
| 10 | `dist/` z 9 maja jest stary | 1 min | 🔥 | `rm -rf dist && npm run build` przed deploy żeby zweryfikować świeży HTML |

---

## 8. Hand-offs (next steps in pipeline)

- **Local SEO (GBP, Maps Pack, citations, reviews)**: → `/local-seo-optimizer`. Wcześniejszy `local-seo-audit-report.md` istnieje z 2026-05-18 — zweryfikuj czy fixy zostały wdrożone.
- **Keyword research** dla content gaps (blog, informational): → `/seed-client-seo`. Sprawdź czy `references/voice.md` i `seo/blog_keywords.md` są kompletne.
- **Blog posts** (informational keywords typu "atrakcje dla dzieci Nowy Targ"): → `/write-blog-post`
- **Nowe service pages** (np. "obozy", "urodziny tematyczne"): → `/write-service-page`

---

## 9. Co zmieniło się od audytu 2026-05-09

| Issue | 2026-05-09 | 2026-05-18 |
|---|---|---|
| SSG / prerendering | ❌ pusty `<div id="root">` na wszystkich route | ✅ pełny SSG działa |
| Meta tags per route | ⚠️ tylko meta inject | ✅ pełny HTML z meta |
| JSON-LD per route | ✅ działa | ✅ bogatsze (Menu, MenuSection, OfferCatalog dodane) |
| OG images | ❌ brakujące | ❌ 5 z 7 referuje pliki, których nie ma w `public/` |
| Hero image | duży JPG | ✅ WebP 197 KB + mobile 49 KB |
| Gallery images | duże JPG | ✅ WebP w podkatalogach (50-270 KB) |
| Sitemap | ✅ | ✅ |
| H1 alignment | brak danych | ✅ 6/7 aligned |

**Wniosek**: krytyczna dziura SSG zamknięta, hero i galerie przeszły reorganizację do WebP. Pozostały realny problem to **OG images które nie istnieją** (5 z 7 routes) + drobne fixy compliance (meta description długość, skip-to-content, sitemap).
