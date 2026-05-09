# SEO Improvement Plan — BAWISZ
*Plan based on: [seo-audit-report.md](seo-audit-report.md)*
*Rubric: [.claude/rules/on-page-seo.md](.claude/rules/on-page-seo.md)*

## FAZA 1 — Critical fixes (Day 1-3)

### 1.1 Implementacja prawdziwego SSG (4-6 h, 🔥🔥🔥)

**Problem**: [scripts/prerender.js](scripts/prerender.js) injectuje meta+JSON-LD do template, ale `<div id="root">` zostaje pusty. AI search (ChatGPT/Perplexity/Claude), Bing, social scrapery widzą stronę bez treści.

**Action**:
1. Dodać Vite SSR build:
   - `src/entry-client.jsx` (existing main → hydrate)
   - `src/entry-server.jsx` (renderToString z routes)
   - `vite.config.ssr.js` (build SSR bundle)
2. Przebudować `scripts/prerender.js`:
   - Dla każdej route: `renderToString(<App location={path} />)` → injectuj rendered HTML do `<div id="root">…</div>`
   - Zachować obecną logikę meta + JSON-LD
3. Update `package.json` build script:
   ```json
   "build": "vite build && vite build --config vite.config.ssr.js && node scripts/prerender.js"
   ```
4. wouter — useLocation server-side: użyć `Router ssrPath={url}` — sprawdzić docs wouter v3.

**Prompt do Claude Code** (tu, w tym repo):
> "Strona Bawisz w `/Users/lukaszchlebda/ClaudeCode/Bawisz/` to React+Vite SPA z 'prerender' skryptem który injectuje tylko meta tags i JSON-LD, ale `<div id="root">` zostaje pusty na wszystkich routach (`dist/index.html`, `dist/urodziny/index.html`, etc.). Zaimplementuj prawdziwe SSG: `src/entry-client.jsx`, `src/entry-server.jsx`, `vite.config.ssr.js`, oraz przerób `scripts/prerender.js` tak, żeby renderToString zaaplikować dla każdej route z ROUTES i wstrzyknąć HTML do `<div id="root">…</div>` zamiast zostawiać go pustego. Routes: `/`, `/urodziny/`, `/kawiarnia/`, `/warsztaty/`, `/o-nas/`, `/oferta-grupowa/`, `/kontakt/`. Routing: wouter v3. Po implementacji: `rm -rf dist && npm run build`, potem `grep -c '<div id=\"root\"></div>' dist/*/index.html dist/index.html` powinno zwrócić 0 dla każdego."

**Verification po fixie**:
```bash
rm -rf /Users/lukaszchlebda/ClaudeCode/Bawisz/dist
cd /Users/lukaszchlebda/ClaudeCode/Bawisz && npm run build
grep -c '<h1' dist/index.html dist/urodziny/index.html dist/kawiarnia/index.html
# Każdy plik powinien zawierać >= 1 <h1>
curl -s http://localhost:3001/urodziny/ | grep -E '<h1|<title>' # po deployu
```

### 1.2 Brakujące OG images (30 min, 🔥🔥🔥)

**Problem**: 4 pliki referenced w meta nie istnieją w `public/assets/`.

**Action**:
- Wygeneruj/wybierz 4 obrazy 1200×630, < 1 MB, zapisz jako:
  - `public/assets/og-default.jpg` (do `/`, `/o-nas/`, `/kontakt/`)
  - `public/assets/og-urodziny.jpg`
  - `public/assets/og-warsztaty.jpg`
  - `public/assets/og-oferta-grupowa.jpg`
- Każdy z czytelnym tekstem dla preview (np. "BAWISZ — Urodziny dla dziecka · Nowy Targ"). Można użyć Canvy lub przygotować w Figmie.
- ALTERNATYWNIE: tymczasowo zmień wszystkie OG image referenced na istniejące zdjęcia (np. `/assets/zdjecia/Bawisz_-13.webp`) w [scripts/prerender.js](scripts/prerender.js) i [src/data/*.js](src/data/).

**Verification**:
```bash
ls public/assets/og-*.jpg # wszystkie 4 powinny być
# Po deployu: paste URL do facebook.com/sharing/sharing-dialogue/preview/ debugger
```

### 1.3 Stale dist build (1 min, 🔥🔥)

**Action**: zrób na lokalu i w CI:
```bash
cd /Users/lukaszchlebda/ClaudeCode/Bawisz
rm -rf dist
npm run build
```

Po SSG fix (1.1) — to staje się obowiązkowe dla każdego deployu.

### 1.4 Title urodziny za długi (5 min, 🔥🔥)

**File**: [scripts/prerender.js:42](scripts/prerender.js#L42)

**Old**:
```js
title: 'Urodziny dla dziecka Nowy Targ — Bawisz | Pakiety MINI 45 zł, STANDARD 74 zł',
```

**New** (52 znaki):
```js
title: 'Urodziny dla dziecka Nowy Targ — Bawisz | od 45 zł',
```

Cena STANDARD przenieść w description (i tak już jest).

---

## FAZA 2 — On-page-seo.md compliance (Week 1)

### 2.1 Description homepage do 150-160 znaków (5 min, 🔥)

**File**: [src/data/home.js:38](src/data/home.js#L38)

**Old** (132 znaki):
> Bawialnia Montessori w Nowym Targu dla dzieci 0-10 lat. Drewniana sala 220 m², kawiarnia obok. Wstęp od 25 zł. Ocena 4.9/5 w Google.

**New** (~158 znaków):
> Bawialnia Montessori w Nowym Targu dla dzieci 0-10 lat. Drewniana sala 220 m², kawiarnia obok. Wstęp od 25 zł, urodziny od 45 zł/os. Ocena 4.9/5 w Google.

### 2.2 Apple-touch-icon (10 min, 🔥)

**File**: [index.html](index.html) (+ regenerate dist)

Dodaj po linii `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`:
```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

Wrzuć plik `public/apple-touch-icon.png` (180×180, logo Bawisza na cream background).

### 2.3 Widoczne breadcrumb na podstronach (1 h, 🔥🔥)

**Files**: każda strona w `src/pages/` (apart Home)

Dodaj nowy komponent `src/components/Breadcrumb.jsx`:
```jsx
import { Link } from 'wouter'

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            {i < items.length - 1 ? (
              <><Link href={item.href}>{item.name}</Link><span aria-hidden="true"> / </span></>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

W każdej `src/pages/{Urodziny,Kawiarnia,Warsztaty,ONas,OfertaGrupowa,Kontakt}.jsx` dodaj nad hero:
```jsx
<Breadcrumb items={[
  { name: 'Strona główna', href: '/' },
  { name: 'Urodziny', href: '/urodziny/' },
]} />
```

### 2.4 Logo alt text (5 min, 🔥)

**Files**:
- [src/components/Navbar.jsx:61](src/components/Navbar.jsx#L61) — `alt=""` → `alt="BAWISZ"`
- [src/components/Navbar.jsx:96](src/components/Navbar.jsx#L96) — `alt=""` → `alt="BAWISZ"`
- [src/components/Footer.jsx:12](src/components/Footer.jsx#L12) — `alt=""` → `alt="BAWISZ"`

(W Navbar, na desktopie tekst brand jest obok więc decorative, ale na mobile `nav-brand-text` jest hidden — wtedy logo zostaje samo bez tekstu, więc warto.)

### 2.5 Image filenames bez polskich znaków (30 min, 🔥)

**Files w `public/assets/zdjecia/`**:
- `Bawisz_AnnaMrożek-*.webp` → `bawisz-anna-mrozek-*.webp`
- `foto_2025 (2).jpg` → `bawisz-hero-2025.jpg`

**Update referencji**:
- [src/components/Hero.jsx:7](src/components/Hero.jsx#L7) → `/assets/zdjecia/bawisz-hero-2025.jpg`
- [src/components/Gallery.jsx:8-14](src/components/Gallery.jsx#L8-L14) → wszystkie `Bawisz_AnnaMrożek-*` → `bawisz-anna-mrozek-*`

Bash one-liner do renamy:
```bash
cd /Users/lukaszchlebda/ClaudeCode/Bawisz/public/assets/zdjecia
for f in *AnnaMrożek*; do mv "$f" "$(echo "$f" | sed 's/Bawisz_AnnaMrożek/bawisz-anna-mrozek/' | tr 'A-Z' 'a-z')"; done
```

### 2.6 Anglicyzm "specialty" w title kawiarni (5 min, 🔥)

**File**: [scripts/prerender.js:92](scripts/prerender.js#L92)

**Decyzja**: zostaw "specialty" (jest to utrwalony termin branżowy specialty coffee — patrz tone-of-voice 4b.4) ALBO zmień na "rzemieślnicza". Polski Senuto/Ahrefs pokazuje że "specialty" jako keyword istnieje. Rekomendacja: zostaw.

Jeśli chcesz zmienić:
```js
title: 'Kawiarnia Nowy Targ — Bawisz | rzemieślnicza kawa, ciasta',
```

### 2.7 Meta robots explicit (2 min, 🔥)

**File**: [index.html](index.html)

Po linii viewport dodaj:
```html
<meta name="robots" content="index, follow, max-image-preview:large" />
```

### 2.8 AggregateRating na głównym LocalBusiness (5 min, 🔥)

**File**: [scripts/prerender.js](scripts/prerender.js) — `ROUTES[0]` powinno mieć schema z aggregateRating, ALBO główny `<script>` w [index.html:33-71](index.html#L33-L71) powinien zawierać aggregateRating dla `ChildCare`.

W [index.html:62-70](index.html) dodaj przed `"areaServed"`:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "bestRating": "5",
  "reviewCount": "129"
},
```

(Liczba 129 z `CafeOrCoffeeShop` schema — sprawdź czy ChildCare ma takie samo bo to suma reviews całej firmy w GBP.)

---

## FAZA 3 — AI SEARCH optimization (Week 2)

**Wymaga ukończenia Fazy 1 (SSG)** — bez tego AI crawlers nie widzą strony w ogóle.

### 3.1 H2 jako pełne pytania na FAQ-heavy sections (1-2 h, 🔥🔥)

Niektóre H2 to TOV statements — to OK dla brand voice. Ale FAQ section w każdej stronie ma `<h2>Najczęstsze pytania</h2>` i potem `<h3>` per pytanie.

**Action**: zmień `<h3>` w FAQ items na `<h3>` które są pełnymi pytaniami (już są — np. "Ile kosztują urodziny dla dziecka w Nowym Targu w Bawiszu?"). To jest poprawne. **Brak fixu konieczny**.

Opcjonalnie: na service pages oprócz FAQ — gdzie zaczyna się logiczna sekcja Q&A (np. "Termin urodzin?") — można zmienić na pełne pytanie ("Kiedy zarezerwować termin urodzin dla dziecka?"). [src/pages/Urodziny.jsx:127-129](src/pages/Urodziny.jsx#L127-L129).

### 3.2 Internal Graph — anchor text jako entity name (2 h, 🔥)

**Files**: każda service page — w body, gdzie linkujesz na inne strony, użyj keyword anchor text zamiast generic "Wpadnij na kawę".

Przykłady:
- `<Link href="/kawiarnia/">Wpadnij na kawę</Link>` → `<Link href="/kawiarnia/">kawiarnia w Nowym Targu</Link>`
- `<Link href="/urodziny/">tutaj</Link>` → `<Link href="/urodziny/">urodziny dla dziecka w Bawiszu</Link>`

W FAQ — zachowaj naturalny język, ale gdzie wspomina się usługę dodaj link do odpowiedniej strony.

### 3.3 Citation-Friendly Format — brak bylines (decyzja klienta)

Mała firma rodzinna może nie chcieć imienia właściciela jako autora. Ale jeśli chce **wzmocnić E-E-A-T sygnały** dla AI search:
- Dodać sekcję "O właścicielce" na `/o-nas/` z imieniem, latami doświadczenia, kwalifikacjami (Montessori cert, etc.)
- Dodać `Person` schema z `sameAs` do Instagram/LinkedIn osobistego (jeśli jest)

To jest decyzja brand strategy — nie technical fix. Skipped w planie.

---

## FAZA 4 — Schema enrichment (Week 2-3)

### 4.1 Person/Author schema (jeśli decyzja z 3.3)

Pomijamy chyba że klient zdecyduje.

### 4.2 Event schema dla warsztatów (2 h, 🔥)

Warsztaty to eventy — Google + AI search lubią `Event` schema z dates.

**File**: [src/data/warsztaty.js](src/data/warsztaty.js) (sprawdź jak wygląda struktura) — jeśli warsztaty mają konkretne daty:
```js
{
  "@type": "Event",
  "name": "Warsztaty plastyczne dla dzieci",
  "startDate": "2026-06-15T10:00:00+02:00",
  "location": { "@id": "https://bawialniabawisz.pl/#localbusiness" },
  ...
}
```

Wymaga źródła dat — jeśli warsztaty są ad-hoc na Instagramie, skip.

---

## FAZA 5 — Long-tail (Month 2+)

### 5.1 Bootstrap SEO content pipeline

Projekt **NIE MA** `references/voice.md` ani `seo/blog_keywords.md`. Bez tego skille `/write-blog-post` i `/write-service-page` hard-failują.

**Action**: odpalić `/seed-client-seo` w [/Users/lukaszchlebda/ClaudeCode/Bawisz/](.):
- intake interview
- auto-propose 30-50 keywords (mix info + commercial)
- klient weryfikuje → przenosi do "Active" w `seo/blog_keywords.md`

### 5.2 Local SEO (jednorazowy duży boost)

**Action**: odpalić `/local-seo-optimizer`:
- GBP audit (czy categories są optymalne, opening hours, photos quality)
- Polish citations (Panorama Firm, Pkt.pl, Mapa Polski, mikolaj.pl, infoofirmie.pl)
- Reviews strategy (29 → 129 → cel 200+ w 6 miesięcy)
- NAP consistency check across web

To dla local business **większa dźwignia** niż 50 blog postów.

### 5.3 Blog content (po seed-client-seo)

Po ustaleniu Active keywords w `seo/blog_keywords.md`:
- `/write-blog-post atrakcje dla dzieci Nowy Targ`
- `/write-blog-post co robić z dzieckiem w Tatrach kiedy pada`
- `/write-blog-post bawialnia Montessori — czym różni się od zwykłego placu zabaw`

### 5.4 Service page expansion

Po decyzji o service area:
- `/write-service-page Zakopane urodziny` (jeśli klient obsługuje)
- `/write-service-page Rabka-Zdrój urodziny`

---

## Podsumowanie

| Faza | Czas | Wpływ | Status |
|------|------|-------|--------|
| Faza 1 — Critical (SSG, OG images, dist rebuild, title) | 5-7 h | 🔥🔥🔥 Natychmiastowy (bez tego AI search = 0) | `[ ]` |
| Faza 2 — Compliance (description, breadcrumb, alt text, filenames) | 2-3 h | 🔥🔥 Wysoki | `[ ]` |
| Faza 3 — AI SEARCH (H2, internal graph, byline) | 3-5 h | 🔥🔥 Wysoki (po SSG) | `[ ]` |
| Faza 4 — Schema enrichment (Event) | 1-3 h | 🔥 Średni | `[ ]` |
| Faza 5 — Long-tail (seed, local SEO, blog) | 10-20 h | 🔥🔥🔥 Skumulowany | `[ ]` |

**Estimated total Faza 1-4**: 11-18 godzin pracy. **Faza 5**: open-ended (zależy ile content i jak głęboki local SEO push).

**Priorytet absolutny**: **Faza 1.1 (SSG)** + **1.2 (OG images)**. Bez SSG cała pozostała SEO praca daje 30-50% potencjału (bo Bing/AI search/social widzą pustą stronę).
