# Checklista wdrożenia SEO — BAWISZ Bawialnia

*Wewnętrzny dokument wdrożeniowy AI Solutions Design | 2026-05-06*

Bazuje na: [seo-strategy.md](seo-strategy.md) | Domena: bawialniabawisz.pl

**Status:** `[ ]` = todo · `[~]` = w trakcie · `[x]` = zrobione

---

## Dane bazowe (z Google Places API, 2026-05-06)

- **Place ID:** `ChIJI5kdKjnlFUcRx7klm74NvMM`
- **Nazwa GBP:** BAWISZ Bawialnia
- **Adres:** ul. Krzywa 19B, 34-400 Nowy Targ
- **Telefon:** +48 693 766 049
- **Ocena:** 4,9★ (129 opinii)
- **Liczba zdjęć GBP:** 10
- **Primary kategoria:** Centrum rozrywki (`amusement_center`)
- **Strona w GBP:** Instagram (`https://www.instagram.com/bawisz_bawialnia/...`) — **DO ZMIANY na bawialniabawisz.pl**
- **Status:** OPERATIONAL
- **Godziny:** pon-pt 10:00–19:00, sob-niedz 10:00–20:00

---

## FAZA 1 — Fundament techniczny (~10–14 h)

> Cel: SPA → multi-page z prerenderingiem. Każda z 9 podstron musi wyjść jako osobny `dist/<route>/index.html` z unikalnym title/description/canonical/H1.

### Ścieżka A — Routing & SSR (~6 h)

**Pliki do utworzenia:**
- [ ] [Bawisz/src/entry-server.jsx](Bawisz/src/entry-server.jsx) — SSR entry z `routesMeta` dla 9 podstron (template: [.claude/skills/seo-analyzer/SKILL.md](.claude/skills/seo-analyzer/SKILL.md), sekcja "File 1: entry-server.tsx"). Każdy route: title 50–60 znaków, description 150–160, canonical `https://bawialniabawisz.pl/<route>/` (trailing slash!)
- [ ] [Bawisz/vite.config.ssr.ts](Bawisz/vite.config.ssr.ts) — config SSR build (skill, "File 2")
- [ ] [Bawisz/scripts/prerender.js](Bawisz/scripts/prerender.js) — generator HTML per route (skill, "File 3")
- [ ] [Bawisz/server/index-prod.js](Bawisz/server/index-prod.js) — Express prod server obsługujący prerendowane HTML + trailing slash redirect (skill, "File 4")

**Pliki do edycji:**
- [ ] [Bawisz/src/App.jsx](Bawisz/src/App.jsx) — opakować w `<Router>` (wouter), zdefiniować 9 routes (`/`, `/urodziny/`, `/kawiarnia/`, `/menu/`, `/cennik/`, `/warsztaty/`, `/o-nas/`, `/galeria/`, `/kontakt/`)
- [ ] [Bawisz/package.json](Bawisz/package.json) — dodać scripts: `build:client`, `build:ssr`, `build:prerender`, `build:server`. **⚠️ Uzgodnić z Replit przed merge** (Replit używa scripts do build/deploy)
- [ ] Dodać dependencje: `wouter`, `react-helmet-async` (jeśli potrzebne — preferowane wstrzykiwanie meta przez prerender niż Helmet)

### Ścieżka B — Meta + Schema + sitemap (~3 h)

- [ ] [Bawisz/index.html](Bawisz/index.html) — naprawa: zmienić `0–6 lat` → `0–12 lat` w `<meta name="description">`, dodać OG tagi (og:title, og:description, og:image, og:url), Twitter cards
- [ ] [Bawisz/public/sitemap.xml](Bawisz/public/sitemap.xml) — utworzyć z 9 URL (każdy z trailing slash). Priorytety: `/` = 1.0, `/urodziny/` + `/kawiarnia/` = 0.9, reszta = 0.7
- [ ] [Bawisz/public/robots.txt](Bawisz/public/robots.txt):
  ```
  User-agent: *
  Allow: /
  Sitemap: https://bawialniabawisz.pl/sitemap.xml
  ```
- [ ] [Bawisz/src/components/SchemaLocalBusiness.jsx](Bawisz/src/components/SchemaLocalBusiness.jsx) — komponent injectujący JSON-LD na każdej podstronie:
  - `@type`: `["LocalBusiness", "AmusementCenter", "Cafe"]`
  - `name`: "BAWISZ Bawialnia"
  - `address`: ul. Krzywa 19B, 34-400 Nowy Targ, PL
  - `telephone`: `+48693766049`
  - `aggregateRating`: `{ ratingValue: 4.9, reviewCount: 129 }`
  - `openingHoursSpecification`: pon-pt 10:00–19:00, sob-niedz 10:00–20:00 (z Places API)
  - `geo`: `{ latitude: 49.4778, longitude: 20.0322 }`
  - `priceRange`: "$$"
  - `url`: `https://bawialniabawisz.pl/`
  - `image`: link do hero image
  - `sameAs`: `["https://www.instagram.com/bawisz_bawialnia/", "https://www.facebook.com/..."]`
- [ ] [Bawisz/src/components/FaqSchema.jsx](Bawisz/src/components/FaqSchema.jsx) — schema `FAQPage` na `/urodziny/` z 15+ pytaniami (treść z Fazy 2)

### Ścieżka C — H1 + content alignment per podstrona (~3 h)

Każda podstrona: jeden `<H1>` zaczynający się od primary keyword.

- [ ] `/` → H1: **"Bawialnia Montessori i sala zabaw dla dzieci w Nowym Targu"** (komponent [Bawisz/src/components/Hero.jsx](Bawisz/src/components/Hero.jsx))
- [ ] `/urodziny/` → H1: **"Urodziny dla dziecka w Nowym Targu — sala urodzinowa Bawisz"**
- [ ] `/kawiarnia/` → H1: **"Kawiarnia w Nowym Targu — kawa specialty i domowe ciasta"**
- [ ] `/menu/` → H1: **"Menu kawiarni — kawa, ciasta i śniadania w Nowym Targu"**
- [ ] `/cennik/` → H1: **"Cennik bawialni i sali urodzinowej w Nowym Targu"**
- [ ] `/warsztaty/` → H1: **"Warsztaty dla dzieci w Nowym Targu — sensoplastyka i plastyka"**
- [ ] `/o-nas/` → H1: **"O Bawisz — bawialnia Montessori w Nowym Targu"**
- [ ] `/galeria/` → H1: **"Galeria — Bawisz, bawialnia i kawiarnia w Nowym Targu"**
- [ ] `/kontakt/` → H1: **"Kontakt — Bawisz, ul. Krzywa 19B Nowy Targ"**

### Weryfikacja Fazy 1

- [ ] `rm -rf dist && npm run build` (clean build)
- [ ] `curl -s https://bawialniabawisz.pl/urodziny/ | grep -E "<title>|<h1>|canonical"` — każda podstrona zwraca unikalny title + H1, canonical z trailing slash
- [ ] Submit `sitemap.xml` w Google Search Console
- [ ] Screaming Frog crawl 9 URL — wszystkie "Indexable", 0 "Canonicalised", 0 redirect loop
- [ ] Test Schema.org Validator (validator.schema.org) — LocalBusiness + FAQPage zwalidowane

---

## FAZA 2 — Treść per podstrona (~12 h)

> Cel: każda podstrona ma 500–800 słów unique content. Strona główna 800–1200. Cała treść po polsku, formal Polish (Pan/Pani/Państwo), miasta odmienione przez przypadki ("w Nowym Targu", "z Nowego Targu" — nigdy "w Nowy Targ").

### `/` — strona główna (~3 h, 800–1200 słów)

- [ ] H2: "Sala zabaw dla dzieci 0–12 lat — 200 m² miejsca do swobodnej zabawy"
- [ ] H2: "Filozofia Montessori w sercu Nowego Targu" (drewno > plastik, naturalne materiały, niezależność dziecka)
- [ ] H2: "Strefy zabawy" (sensoryczna, klocki, drewniane tunele, zjeżdżalnia)
- [ ] H2: "Bezpieczeństwo i opieka" (zespół, certyfikaty, monitoring)
- [ ] H2: "Kawiarnia dla rodziców" — 3-4 zdania + link do `/kawiarnia/`
- [ ] H2: "Urodziny i warsztaty" — 3-4 zdania + linki do `/urodziny/` i `/warsztaty/`
- [ ] Sekcja: opinie Google (4,9★, 129 recenzji) + widget z 3 najlepszymi opiniami
- [ ] Sekcja: mapa + dojazd + parking
- [ ] CTA: "Sprawdź cennik" → `/cennik/`, "Zarezerwuj urodziny" → `/urodziny/`

### `/urodziny/` (~3 h, 600–900 słów + 15+ FAQ)

- [ ] Opis pakietu MINI (45 zł/os, 2h, do 8 dzieci)
- [ ] Opis pakietu STANDARD (74 zł/os, 2,5h, sala na wyłączność, prezent dla solenizanta)
- [ ] Galeria zdjęć z urodzin (5–8 fotek)
- [ ] **FAQ z 15+ pytaniami** (każde z odpowiedzią 30–80 słów):
  - Ile dzieci może uczestniczyć w urodzinach?
  - Czy można przyjść z własnym tortem?
  - Jak długo trwają urodziny?
  - Czy są zapewnieni animatorzy?
  - Czy rodzice zostają na urodzinach?
  - Co dostaje solenizant?
  - Jak zarezerwować termin?
  - Do kiedy potwierdzić liczbę dzieci?
  - Czy są opcje dla dzieci z alergiami?
  - Czy jest parking w pobliżu?
  - Czy można zorganizować urodziny w niedzielę?
  - Co jeśli dziecko nie ma jeszcze 3 lat?
  - Jakie są godziny rozpoczęcia urodzin?
  - Czy oferujecie zniżkę dla rodzeństwa?
  - Czy wystawiacie fakturę?
- [ ] Schema FAQPage podpięte do tych pytań (Faza 1, ścieżka B)
- [ ] Formularz rezerwacji (imię, telefon, data, liczba dzieci, pakiet, uwagi)
- [ ] CTA: "Zarezerwuj termin" + telefon klikalny

### `/kawiarnia/` (~2 h, 500–700 słów)

- [ ] Hook: "Kawiarnia w Nowym Targu, gdzie kawę pijesz, gdy dziecko bawi się obok"
- [ ] Sekcja kawa specialty (espresso, flat white, cappuccino, matcha latte, ziarna)
- [ ] Sekcja ciasta domowe (rotacja, opcje bezglutenowe, wegańskie)
- [ ] Sekcja śniadania (jeśli oferują — sprawdzić w komponencie [Bawisz/src/components/Menu.jsx](Bawisz/src/components/Menu.jsx))
- [ ] USP: "Jedyna kawiarnia w Nowym Targu z bawialnią pod tym samym dachem"
- [ ] Godziny otwarcia + mapa + link do pełnego menu

### `/menu/` (~1 h, 400–500 słów)

- [ ] Pełna lista pozycji z cenami (kawa, ciasta, śniadania)
- [ ] Oznaczenia: bezglutenowe, wegańskie, dla dzieci
- [ ] CTA: "Wpadnij na kawę" → `/kontakt/`

### `/cennik/` (~1 h, 300–500 słów + tabela)

- [ ] Tabela cen: wejście jednorazowe (25–45 zł zależnie od czasu), karnet 215 zł/mc, urodziny od 45 zł/os
- [ ] Karty podarunkowe (29–135 zł)
- [ ] Sekcja: zniżki (rodzeństwo, karnet roczny)

### `/warsztaty/` (~1 h, 400–600 słów)

- [ ] Sensoplastyka: dla kogo, ile dzieci max, czas trwania
- [ ] Plastyka: dla kogo, ile dzieci max
- [ ] Terminy + zapisy
- [ ] CTA: zapis przez formularz lub telefon

### `/o-nas/` (~1 h, 500–700 słów)

- [ ] Historia: skąd pomysł na Bawisz
- [ ] Filozofia Montessori: dlaczego drewno, dlaczego niezależność
- [ ] Zespół: kto pracuje (imiona, role) — E-E-A-T sygnał
- [ ] Misja: jakie wartości wnosicie do Nowego Targu

### `/galeria/` + `/kontakt/` (~1 h razem)

- [ ] Galeria: 20+ zdjęć z alt-text bogatym we frazy ("bawialnia Montessori Nowy Targ — strefa sensoryczna", "urodziny dla dziecka Nowy Targ — pakiet STANDARD", "kawiarnia Nowy Targ — flat white")
- [ ] Kontakt: NAP zgodny z GBP, mapa Google embed, godziny otwarcia, formularz, social media

### Weryfikacja Fazy 2

- [ ] Każda podstrona ma 500+ słów (Yoast / manualnie)
- [ ] Primary keyword w H1, pierwszym akapicie, jednym H2, meta description
- [ ] Internal linking: każda podstrona linkuje do 2–3 innych (relevant)
- [ ] Cała treść przepuszczona przez weryfikację stylu (zero AI patterns, formal Polish)

---

## FAZA 3 — Google Business Profile (~3 h)

> Cel: dopasować GBP do strategii. **Wykonanie po stronie klienta + nasza pomoc** (klient ma dostęp do GBP).

### Zmiany w GBP

- [ ] **Strona WWW:** zmienić z Instagram → `https://bawialniabawisz.pl/` (po deploy Fazy 1!)
- [ ] **Primary kategoria:** zostawić "Centrum rozrywki" (zgodne z konkurencją top 6)
- [ ] **Secondary kategorie** (do 9): dodać:
  - Kawiarnia
  - Sala bankietowa
  - Sala urodzinowa
  - Centrum kulturalne dla dzieci
  - Organizator imprez
  - Centrum dziecięce
- [ ] **Opis (750 znaków)** — szablon do wypełnienia z klientem:
  > "BAWISZ to bawialnia Montessori i kawiarnia w sercu Nowego Targu, na ul. Krzywej 19B. 200 m² przestrzeni dla dzieci od 0 do 12 lat — drewniane tunele, strefa sensoryczna, klocki edukacyjne. Obok bawialni działa kawiarnia ze specialty coffee i domowymi ciastami, z opcjami bezglutenowymi. Organizujemy urodziny dla dzieci w 2 pakietach (MINI 45 zł/os, STANDARD 74 zł/os) oraz warsztaty plastyki i sensoplastyki. Zapraszamy rodziców na kawę, gdy dziecko bawi się obok. Otwarte 7 dni w tygodniu."
- [ ] **Zdjęcia (target 30+):** klient dostarcza 20+ nowych — interior bawialni (5), kawiarnia (5), urodziny eventy (5), kawa & ciasta (5), zespół (3), exterior (2)
- [ ] **Atrybuty:** zaznaczyć — parking (jeśli jest), dostępność dla wózków, płatność kartą + BLIK, WiFi, zmieniacz pieluch, krzesełka dla dzieci, rezerwacja
- [ ] **Posty:** harmonogram 2–4 posty/mc — szablony (urodziny weekendowe, nowe ciastka, sezonowe atrakcje, eventy)
- [ ] **Q&A:** dodać samodzielnie 10 pytań z odpowiedziami (wiek dzieci, ceny, parking, alergie, urodziny, godziny, grupy zorganizowane)
- [ ] **CTA dla urodzin:** ustawić "Umów urodziny" → bezpośredni link do `https://bawialniabawisz.pl/urodziny/`

### Weryfikacja Fazy 3

- [ ] GBP Insights baseline screenshot — wyświetlenia, kliknięcia w stronę WWW, prośby o trasę dojazdu (przed zmianami)
- [ ] Po 14 dniach: porównanie metryk (cel +30% wyświetleń)

---

## FAZA 4 — Citations & lokalne backlinki (~6 h)

> Cel: spójność NAP w 8+ katalogach + 2–3 lokalne wzmianki/linki.

**NAP do użycia wszędzie identycznie:**
> BAWISZ Bawialnia, ul. Krzywa 19B, 34-400 Nowy Targ, +48 693 766 049

### Citations (katalogi)

- [ ] Panorama Firm (panoramafirm.pl) — założyć/zclaim wpis
- [ ] Pkt.pl — założyć/zclaim
- [ ] Firmy.net — założyć/zclaim
- [ ] Facebook Business Manager — pełny profil + sklep z usługami
- [ ] Apple Maps Connect — założyć profil
- [ ] Yelp Polska — założyć profil
- [ ] NaszMiasto.pl — założyć/zclaim
- [ ] Cylex Polska — założyć/zclaim

### Lokalne backlinki

- [ ] Wysłać pitch do `nowotarski.pl` o feature "Nowa bawialnia Montessori w Nowym Targu" (z 5 zdjęciami)
- [ ] Wysłać pitch do `podhale24.pl` (j.w.)
- [ ] Wysłać pitch do `24tp.pl` (j.w.)
- [ ] Współpraca z lokalnymi blogami mam (Mama na Podhalu, Podhalanka — szukać aktywnych)
- [ ] Sponsoring eventu MOK Nowy Targ (Dzień Dziecka, festyn osiedlowy) — w zamian za wzmiankę + link

### Weryfikacja Fazy 4

- [ ] WebSearch `"BAWISZ Bawialnia" "Nowy Targ" -site:bawialniabawisz.pl` — sprawdzenie ile cytowań Google znalazł
- [ ] Verify NAP: każdy katalog ma identyczne dane (nazwa, adres, telefon)

---

## FAZA 5 — Silnik opinii (ongoing od Tygodnia 1)

> Cel: 3–5 nowych opinii Google miesięcznie, response rate 100% w 24h.

### Setup

- [ ] Wygenerować bezpośredni link do opinii Google: użyć `place_id` ChIJI5kdKjnlFUcRx7klm74NvMM → `https://search.google.com/local/writereview?placeid=ChIJI5kdKjnlFUcRx7klm74NvMM`
- [ ] Wydrukować QR kod z tym linkiem — umieścić: bok-bar kawiarni (1 szt), recepcja bawialni (1 szt), na wizytówce/ulotce dla urodzin (1 szt na zaproszenie)
- [ ] Szablon SMS po urodzinach (do wysłania 2–3 dni po imprezie):
  > "Dzień dobry, dziękujemy za wczorajsze urodziny [imię dziecka]! Mamy nadzieję, że dobrze się bawiliście. Jeśli znajdą Państwo chwilę — bardzo nam pomoże opinia w Google: [link]. Pozdrawiamy, zespół Bawisz."
- [ ] Szablon SMS po wizycie w bawialni (opcjonalnie, jeśli klient zbiera numery)
- [ ] **Szablon odpowiedzi pozytywna:**
  > "Dziękujemy za miłe słowa! Cieszymy się, że [imię dziecka] dobrze się bawiło w naszej bawialni Montessori. Zapraszamy ponownie — czekamy z nową porcją zabaw! Zespół Bawisz."
- [ ] **Szablon odpowiedzi negatywna:**
  > "Dziękujemy za informację zwrotną — przykro nam, że Państwa wizyta nie spełniła oczekiwań. Bardzo prosimy o kontakt: 693 766 049 lub kontakt@bawialniabawisz.pl — chcielibyśmy wyjaśnić sprawę osobiście. Zespół Bawisz."

### Ongoing maintenance (~2 h/mc)

- [ ] Każda nowa opinia Google → odpowiedź w 24h (notyfikacje GBP)
- [ ] Co miesiąc: check liczba nowych opinii (target 3–5/mc)
- [ ] Co tydzień: 1 post w GBP (urodziny weekendowe, nowe ciastka, eventy)

---

## Podsumowanie — wszystkie fazy

| Faza | Czas | Wpływ | Status |
|------|------|-------|--------|
| Faza 1 — Technika (SSR, Schema, sitemap) | ~10–14 h | 🔥🔥🔥 Krytyczny | `[ ]` |
| Faza 2 — Treść per 9 podstron | ~12 h | 🔥🔥🔥 Krytyczny | `[ ]` |
| Faza 3 — GBP optymalizacja | ~3 h | 🔥🔥 Wysoki | `[ ]` |
| Faza 4 — Citations & backlinki | ~6 h | 🔥🔥 Wysoki | `[ ]` |
| Faza 5 — Silnik opinii | ongoing (~2h/mc) | 🔥🔥 Wysoki | `[ ]` |

**Razem wdrożenie:** ~30–35 h pracy. **Maintenance:** ~3 h/mc.

---

## Critical files reference

- [Bawisz/index.html](Bawisz/index.html) — meta tagi, OG
- [Bawisz/src/App.jsx](Bawisz/src/App.jsx) — refactor na Router
- [Bawisz/src/components/Hero.jsx](Bawisz/src/components/Hero.jsx) — H1 na `/`
- [Bawisz/src/components/Birthdays.jsx](Bawisz/src/components/Birthdays.jsx) — content `/urodziny/`
- [Bawisz/src/components/Pricing.jsx](Bawisz/src/components/Pricing.jsx) — content `/cennik/`
- [Bawisz/src/components/Menu.jsx](Bawisz/src/components/Menu.jsx) — content `/menu/` + `/kawiarnia/`
- [Bawisz/src/components/Hours.jsx](Bawisz/src/components/Hours.jsx) — godziny + mapa (NAP)
- [.claude/skills/seo-analyzer/SKILL.md](.claude/skills/seo-analyzer/SKILL.md) — template prerendering (sekcja 2)
- [.claude/skills/local-seo-optimizer/SKILL.md](.claude/skills/local-seo-optimizer/SKILL.md) — GBP audit framework
- [.claude/skills/find-leads/scripts/search_places.py](.claude/skills/find-leads/scripts/search_places.py) — Places API (re-run dla weryfikacji rankingów)
- [.claude/skills/humanize-text/SKILL.md](.claude/skills/humanize-text/SKILL.md) — przepuszczenie copy
