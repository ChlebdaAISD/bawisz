# SEO Improvement Plan — BAWISZ
*Plan based on: [seo-audit-report.md](seo-audit-report.md)*
*Rubric: [.claude/rules/on-page-seo.md](.claude/rules/on-page-seo.md)*
*Updated: 2026-05-18 (re-audit po wdrożeniu SSG + reorganizacji obrazków)*

> **Sprostowanie:** wcześniejsza dzisiejsza wersja tego planu zakładała problemy z hero 8.4 MB i galerią. Te wnioski bazowały na starym `dist/` (build z 9 maja, sprzed reorganizacji obrazków 15-18 maja). Aktualnie obrazki są już WebP w optymalnych rozmiarach. Plan poniżej skorygowany.

## Status z poprzedniego planu (2026-05-09)

✅ **WYKONANE**:
- SSG implementation (`vite.config.ssr.js` + `scripts/prerender.js` działa)
- Per-route meta tags (title, description, canonical, OG, Twitter)
- Per-route JSON-LD (rozszerzone o Menu, OfferCatalog, ContactPage, AboutPage)
- Sitemap.xml + robots.txt
- Breadcrumb component na subpages (visualy + JSON-LD)
- **Reorganizacja obrazków do WebP** w podkatalogach `public/assets/zdjecia/{strona_glowna,kawiarnia,urodziny,warsztaty,dla_grup}/` (15-18 maja)
- Hero image: `hero.webp` (197 KB) + `hero-mobile.webp` (49 KB)

⚠️ **POZOSTAJE**: OG images które kod referuje, ale fizycznie ich nie ma + drobne fixy compliance.

---

## FAZA 1 — OG images (Day 1) — KRYTYCZNE

**Cel**: 5 z 7 routes po deploy zwraca 404 dla og:image — Facebook/LinkedIn/Twitter preview nie wyświetli się. Naprawić jak najszybciej.

### Task 1.1: Wygeneruj 6 brakujących OG images 1200×630 WebP

**Pliki SEO które trzeba podłączyć do istniejących plików:**

| Route | Plik referowany w `src/data/*.js` | Status |
|---|---|---|
| `/` | `/assets/zdjecia/strona_glowna/Bawisz_-13.webp` | ✅ istnieje, ale 1024×1536 pionowy |
| `/o-nas` | `/assets/og-default.jpg` | ❌ MISSING |
| `/kontakt` | `/assets/og-default.jpg` | ❌ MISSING |
| `/kawiarnia` | `/assets/zdjecia/kawiarnia/og-kawiarnia.jpg` | ❌ MISSING |
| `/urodziny` | `/assets/og-urodziny.jpg` | ❌ MISSING |
| `/warsztaty` | `/assets/og-warsztaty.jpg` | ❌ MISSING |
| `/oferta-grupowa` | `/assets/og-oferta-grupowa.jpg` | ❌ MISSING |

**Akcja**:
1. Wybierz najlepsze zdjęcie per sekcja z `public/assets/zdjecia/{sekcja}/`
2. Wygeneruj 7× WebP 1200×630 (cropping z safe area dla central focus), max ~250 KB każda — przez `sharp`:
   ```bash
   node -e "require('sharp')('public/assets/zdjecia/strona_glowna/Bawisz_-13.webp').resize(1200,630,{fit:'cover',position:'centre'}).webp({quality:82}).toFile('public/assets/og/og-home.webp')"
   ```
3. Save w nowym katalogu `public/assets/og/` jako:
   - `og-home.webp`, `og-o-nas.webp`, `og-kontakt.webp`, `og-kawiarnia.webp`, `og-urodziny.webp`, `og-warsztaty.webp`, `og-oferta-grupowa.webp`
4. Update wszystkich `src/data/*.js` żeby referowały nowe ścieżki:
   - `ogImage: 'https://bawialniabawisz.pl/assets/og/og-{route}.webp'`
5. Dodaj `og:image:width` = 1200 i `og:image:height` = 630 meta tags w komponencie SEO (jeśli nie ma)
6. `rm -rf dist && npm run build`
7. Test po deploy: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) + [opengraph.xyz](https://www.opengraph.xyz/)

**Time**: 45-60 min
**Impact**: 🔥🔥🔥 social sharing CTR (Facebook/Instagram to główne kanały Bawisza)

---

## FAZA 2 — on-page-seo.md compliance (Day 2)

### Task 2.1: Verify image dimensions po świeżym buildzie (CLS prevention)

**Files**:
- [src/components/Hero.jsx](src/components/Hero.jsx)
- [src/components/Gallery.jsx](src/components/Gallery.jsx)
- [src/components/Birthdays.jsx](src/components/Birthdays.jsx)
- [src/components/ServiceGallery.jsx](src/components/ServiceGallery.jsx)
- [src/components/Menu.jsx](src/components/Menu.jsx)

**Akcja**:
1. `rm -rf dist && npm run build`
2. Verify: `perl -0777 -ne 'my $nd=0; while(/<img\b([^>]*)>/sg){ $nd++ unless ($1=~/\bwidth=/ && $1=~/\bheight=/) } print "no_dim=$nd\n"' dist/index.html`
3. Jeśli > 0 — dodaj `width`/`height` attributes w komponentach renderujących te obrazki (z faktycznych wymiarów WebP)

**Time**: 20-30 min (jeśli potrzebne)
**Impact**: 🔥🔥 Core Web Vitals (CLS)

### Task 2.2: Meta description fix — 3 routes

**Akcja** (znajdź w komponencie SEO lub data file):
- `/oferta-grupowa`: skróć z 170 → ≤158 znaków
- `/urodziny`: skróć z 163 → ≤158 znaków
- (`/warsztaty`: tytuł 65 znaków → ≤60)

**Konkretne propozycje**:
- `/oferta-grupowa`: "Wyjścia grupowe dla przedszkoli i szkół w Nowym Targu — drewniana sala Montessori. Od 15 zł/godz. za dziecko, kawa gratis dla opiekunów. Min. 10 dzieci." (158)
- `/urodziny`: "Urodziny dziecka w Nowym Targu w drewnianej bawialni Montessori. Pakiet MINI od 45 zł/os., STANDARD od 74 zł/os. z salą tylko dla was. 4.9/5 w Google." (158)
- `/warsztaty` title: "Warsztaty dla dzieci Nowy Targ — Bawisz | plastyka, glina" (57)

**Time**: 10 min
**Impact**: 🔥 CTR z SERP

### Task 2.3: Skip-to-content link (a11y)

**File**: `src/App.jsx` lub wherever layout root is

**Akcja**: dodaj jako pierwszy element po `<body>`:
```jsx
<a href="#main" className="skip-to-content">Przejdź do treści</a>
```

CSS w [src/index.css](src/index.css):
```css
.skip-to-content {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 9999;
}
.skip-to-content:focus {
  left: 1rem;
  top: 1rem;
  background: var(--paper);
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
```

Dodaj `id="main"` na `<main>` w layoutach.

**Time**: 10 min
**Impact**: 🔥 a11y + minor SEO signal

### Task 2.4: Sitemap.xml update

**File**: [scripts/prerender.js](scripts/prerender.js) lub gdzie sitemap jest generowany

**Akcja**:
- Update `<lastmod>` do `2026-05-18`
- Decyzja na `/polityka-prywatnosci/`: dodaj do sitemap z `priority=0.3` LUB usuń z prerender + dodaj `meta name="robots" content="noindex"`

**Time**: 5 min
**Impact**: 🔥 świeży lastmod = sygnał świeżości

---

## FAZA 3 — E-E-A-T + AI Search optimization (Day 3-5)

### Task 3.1: Author byline + bio na homepage

Dodaj w sekcji "O nas" lub footer:

> **Prowadzą**: Kasia + Łukasz, właściciele Bawisza od 2024. Sami rodzice — bawialnia powstała z potrzeby miejsca, w którym dziecko bawi się samo, a rodzic ma minutę przy kawie.

Wzbogać o link do `/o-nas/` + zdjęcie pary jeśli zgoda. Dodaj `Person` schema w JSON-LD homepage:

```json
{
  "@type": "Person",
  "name": "Kasia [nazwisko]",
  "jobTitle": "Właścicielka",
  "worksFor": { "@id": "https://bawialniabawisz.pl/#localbusiness" }
}
```

**Time**: 30 min
**Impact**: 🔥🔥 E-E-A-T, AI cytowalność

### Task 3.2: H2 jako pytania (CCV — conversational query value)

**Obecne H2 są stwierdzeniami** (świetne stylistycznie, ale słabiej dla AI overviews). Dodaj **drugie H2** w stylu pytania nad każdą sekcją.

**Przykłady (homepage):**
- "Drewniana sala dla małych odkrywców." → dodaj nad nim H2 "Co znajdziecie w Bawiszu?"
- "Cztery powody, żeby zostać na dłużej." → "Dlaczego Bawisz, a nie kawiarnia z kącikiem?"
- "Wstęp od 25 zł. Bez niespodzianek." → "Ile kosztuje wejście do bawialni?"

**Service pages** — analogicznie:
- `/urodziny`: H2 "Ile kosztują urodziny dla dziecka w Nowym Targu?", "Co jest w cenie?", "Czy mogę przynieść tort?"
- `/warsztaty`: H2 "Jakie warsztaty są dla dzieci w Bawiszu?", "Ile kosztują warsztaty?", "Dla jakiego wieku są warsztaty?"

**Time**: 60-90 min
**Impact**: 🔥🔥 AI overviews, voice search, ChatGPT/Perplexity cytowania

### Task 3.3: TL;DR callout na service pages

Dodaj na początku `/urodziny`, `/warsztaty`, `/oferta-grupowa` blok 2-4 zdań syntezy:

```jsx
<aside className="tldr">
  <strong>W skrócie:</strong> Urodziny w Bawiszu = drewniana sala Montessori przy Krzywej 19B w Nowym Targu, dwa pakiety (45 zł lub 74 zł/os.), 2-2,5 h, pełen poczęstunek i dekoracje. Tort przynosicie wy, resztę robimy my.
</aside>
```

**Time**: 30 min (3 strony × 10 min)
**Impact**: 🔥🔥 AI overviews wycinają TL;DR

---

## FAZA 4 — Content depth + blog (Week 2-3)

### Task 4.1: Bootstrap content pipeline

- Uruchom `/seed-client-seo` w `/Users/lukaszchlebda/ClaudeCode/Bawisz/` jeśli `references/voice.md` i `seo/blog_keywords.md` nie są kompletne
- Verify keywords pre-Active section

### Task 4.2: Pierwsze 3 blog posts (informational queries)

Sugerowane keywords (proposed — verify volume/intent w `/seed-client-seo`):
1. "atrakcje dla dzieci Nowy Targ" — listicle, blog hub-and-spoke linkujący do `/urodziny`, `/warsztaty`, `/kawiarnia`
2. "co robić z dzieckiem w deszczowy dzień Podhale" — long-tail informational, evergreen
3. "kiedy iść do bawialni z dzieckiem" — informational, FAQ-rich

**Wykonanie**: `/write-blog-post [keyword]`

**Time**: 2-3h per post (Claude generuje, user weryfikuje)
**Impact**: 🔥🔥🔥 organic traffic (informational queries z 0 obecnie)

---

## FAZA 5 — Long-tail (Month 2)

### Task 5.1: Strona porównawcza vs konkurencja

`/bawialnie-nowy-targ-porownanie/` lub blog post "Bawialnia w Nowym Targu — gdzie najlepiej z dzieckiem". Comparison tables są cytowane przez AI overviews bezpośrednio.

### Task 5.2: Author/team page

`/zespol/` lub rozszerzenie `/o-nas/` z zdjęciami, bio, kwalifikacje (jeśli Kasia ma certyfikat Montessori — pokażcie go).

### Task 5.3: Lokalne backlinks

(Hand-off do `/local-seo-optimizer` — citations + reviews + lokalne portale).

---

## Podsumowanie

| Faza | Czas | Wpływ | Priorytet |
|------|------|-------|-----------|
| Faza 1 — OG images | 45-60 min | 🔥🔥🔥 Natychmiastowy (social sharing) | `[ ]` Day 1 |
| Faza 2 — on-page compliance | 1-1.5h | 🔥🔥 Wysoki (CTR, a11y) | `[ ]` Day 2 |
| Faza 3 — E-E-A-T + AI Search | 2-3h | 🔥🔥 Średni-wysoki (AI overviews) | `[ ]` Day 3-5 |
| Faza 4 — Content/blog | 6-9h (3 posty) | 🔥🔥🔥 Organic traffic | `[ ]` Week 2-3 |
| Faza 5 — Long-tail | 4-6h | 🔥 Cumulative | `[ ]` Month 2 |

**Estimated total**: 13-19 godzin pracy.

**Co zrobić jako pierwsze (≤2h, zamyka 80% impactu)**:
1. Task 1.1 (6 brakujących OG images — naprawia 5 routes ze 404 po share)
2. Task 2.2 (meta description fix 3 routes)
3. Task 2.3 (skip-to-content)
4. `rm -rf dist && npm run build` + verify Task 2.1 (image dimensions)

---

## Hand-offs

- **GBP / Maps / citations / reviews**: → `/local-seo-optimizer` (zobacz [local-seo-audit-report.md](local-seo-audit-report.md) z 2026-05-18)
- **Keywords proposal**: → `/seed-client-seo`
- **Blog posts**: → `/write-blog-post`
- **Nowe service pages**: → `/write-service-page`
