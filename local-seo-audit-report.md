# LOCAL SEO AUDIT — BAWISZ Bawialnia (re-audit #3)

**Business**: BAWISZ Bawialnia
**Location**: Nowy Targ, ul. Krzywa 19B, 34-400
**Primary Keyword**: "bawialnia nowy targ"
**Date**: 2026-05-27 (re-audit; poprzedni 2026-05-18, pierwszy 2026-05-09)
**Source**: Google Places API (New) — `places/ChIJI5kdKjnlFUcRx7klm74NvMM` + `compare_gbp_website.py` diff vs `https://bawialniabawisz.pl`. ✅ Nowy API key (2026-05-27) działa.

---

## Executive Summary

| | |
|---|---|
| **Status fix z 2026-05-18** | 🟢 **3/3 fixów ZROBIONE** — schema `name` ✓, "Nowy Targ" mentions ✓, **websiteUri w GBP ✅ NAPRAWIONE** (już bawialniabawisz.pl, nie IG) |
| **Auto-diff (4 fields)** | ✅ Match 4 / Mismatch 0 / Missing 0 — wszystkie krytyczne pola zsynchronizowane |
| **Reviews velocity boost** | **134 opinii** (z 130 w 2026-05-18) = **+4 w 9 dni** = ~13/mc velocity — **4× wzrost vs poprzednie ~3/mc** 🎉 |
| **Quick Wins this week** | 1) re-run build-time `fetch-google-rating.ts` (schema reviewCount lag: 129 vs live 134), 2) zmień w GBP `http://` na `https://`, 3) zacznij service area expansion |
| **Status websiteUri** | ✅ `http://www.bawialniabawisz.pl/` (niewielki minus: powinno być https — Google auto-redirectuje ale czystsze) |

**Co się zmieniło od 2026-05-18:**
- ✅ **websiteUri w GBP fixed: IG → bawialniabawisz.pl** (Priority 1 z poprzednich 2 audytów — WRESZCIE!)
- ✅ Schema `name` = "BAWISZ Bawialnia" matching GBP — fix #2 wdrożony i live
- ✅ "Nowy Targ" mentions na homepage 4 → 8 — fix #6 wdrożony
- ✅ FAQ schema (`FAQPage`) z 8 pytaniami PAA-style
- ✅ WebPage JSON-LD dodane z `primaryImageOfPage`
- ✅ **Reviews velocity 13/mc** (z ~3/mc) — coś ruszyło, ale 134 vs schema 129 = lag 5
- ⚠️ `aggregateRating.reviewCount` 129 (z live GBP 134) — schema stale, build-time fetch nie odpalany przy ostatnim deploy

---

## 1. Google Business Profile Status

### Raw API data (snapshot 2026-05-27)

| Pole | Wartość | Δ vs 2026-05-18 |
|---|---|---|
| Place ID | `ChIJI5kdKjnlFUcRx7klm74NvMM` | — |
| Display Name | BAWISZ Bawialnia | — |
| Address | Krzywa 19B, 34-400 Nowy Targ | — |
| Website | **`http://www.bawialniabawisz.pl/`** ✅ | **NAPRAWIONE** (było IG) |
| Primary Type | `amusement_center` | — |
| Types (secondary) | coffee_shop, indoor_playground, playground, **dessert_restaurant**, cafe, food_store, association_or_organization | **rich** — wcześniej tylko 5 types, teraz 8 (kawiarnia/desery doszły jako kategorie) |
| Rating | 4.9 ★ | — |
| Reviews count | **134** | **+4** (było 130) — velocity skok |
| Business Status | OPERATIONAL | — |
| Photos (sample) | 10 | — |
| Reviews (sample) | 5 | — |

### 🟢 Wszystkie 3 krytyczne fixy z poprzednich audytów ZROBIONE
1. ✅ `websiteUri` w GBP wskazuje na `bawialniabawisz.pl` (z IG)
2. ✅ Schema `name` matching GBP
3. ✅ "Nowy Targ" mentions na homepage z 4 → 8

### 🟡 Nowe drobne issues
- **`websiteUri` używa `http://`** zamiast `https://` — minor SEO concern (Google auto-redirectuje, ale w GBP dashboard zmień na `https://www.bawialniabawisz.pl/`)
- **Schema `reviewCount` lag**: 129 (na stronie) vs 134 (live GBP) — re-run build-time fetch script lub odpal nowy deploy

### Live schema (z https://bawialniabawisz.pl HEAD, weryfikowane curl-em)

| Pole | Wartość | Status |
|---|---|---|
| `@type` | `ChildCare` | ✓ specific subtype |
| `@id` | `https://bawialniabawisz.pl/#localbusiness` | ✓ |
| `name` | "BAWISZ Bawialnia" | ✅ FIXED (poprzednio mismatch) |
| `alternateName` | ["Bawisz", "BAWISZ — Bawialnia Montessori i Kawiarnia"] | ✓ marketing string zachowany |
| `telephone` | "+48693766049" | ✓ |
| `address` | ul. Krzywa 19B, 34-400 Nowy Targ, małopolskie, PL | ✓ pełne |
| `geo` | 49.4773, 20.0303 | ✓ |
| `openingHoursSpecification` | Pn-Pt 10-19, Sb-Nd 10-20 | ✓ |
| `aggregateRating` | 4.9 / 129 | ⚠️ stale (od 2026-05-18 było 130 w GBP) |
| `priceRange` | "25-215 PLN" | ✓ przedział z cennika |
| `sameAs` | IG, FB, TikTok | ✓ 3 platformy |
| `areaServed` | Nowy Targ, Podhale | ✓ entity-friendly |
| `image` | og-home-square.webp, og-home.webp | ✓ |

### Dodatkowe schemas wykryte na homepage (nowe od poprzedniego auditu)

- `WebPage` z `primaryImageOfPage` + `about` reference do `#localbusiness` ✅
- `FAQPage` z **8 pytaniami** (cennik, wiek, różnice od placu zabaw, rezerwacje, parking, Montessori, bezpieczeństwo, zniżki) ✅
- `BreadcrumbList` (tylko homepage entry, do rozbudowy na podstronach)

**To wszystko są pozytywne sygnały dla AI Overview Optimization (sekcja 4 of on-page-seo.md "AI SEARCH OPTIMIZATION").**

---

## 2. Competition Analysis (Maps Pack snapshot 2026-05-27)

⚠️ Dane dla BAWISZ z API; konkurencja z poprzedniego audytu (manual Maps Pack check zalecany dla aktualnych).

| # | Business | Reviews 2026-05-18 | Reviews TODAY (BAWISZ z API) | Δ 9d | Rating | Website |
|---|---|---|---|---|---|---|
| 1 | Sala zabaw Xtreme KiDS | 497 | TBD (~508-510 prediction) | +11 prior | 4.8 | xtremekids.pl/sale/nowy-targ |
| 2 | MINI CLUB Sala Zabaw | 137 | TBD (prior trend 0) | 0 prior | 4.9 | miniclub.pl |
| 3 | **BAWISZ Bawialnia** | 130 | **134** ✅ | **+4** | 4.9 | **bawialniabawisz.pl** ✅ |
| 4 | Fun factory | 62 | TBD | 0 prior | 4.6 | ffnt.pl |

**Velocity comparison**:
- BAWISZ: +1/9d (poprzednio) → **+4/9d (teraz)** = 13/mc trend = **4× przyspieszenie** 🎉
- Xtreme KiDS: ~36/mc trend — wciąż przed
- BAWISZ vs Mini Club: ratingowo tied (4.9), reviews-wise prawdopodobnie BAWISZ wyprzedził Mini Club (134 vs ~137 statyczny) lub blisko

**Konkluzja**: review velocity zaczęła rosnąć (coś ruszyło — QR program?). Jeśli utrzymamy 13/mc, w 6 mc dojdziemy do ~210. Xtreme zostanie #1 (jego trend +36/mc), ale BAWISZ vs Mini Club walka realna na #2.

**Manual check do zrobienia** (5 min): otwórz Google Maps i sprawdź aktualne liczby Xtreme/MiniClub/FunFactory — zaktualizuj prediction.

---

## 3. Website Local SEO Verification (auto-diff)

### 3a. GBP ↔ Website diff (z `/tmp/gbp_bawisz_diff.json`)

**Summary**: Match 4 | Mismatch 0 | Missing 0 | Top severity: **MEDIUM** (tylko INFO websiteUri target)

| Field | GBP | Website (schema) | Status | Severity |
|---|---|---|---|---|
| name | BAWISZ Bawialnia | BAWISZ Bawialnia | ✅ MATCH | OK |
| telephone | 693766049 | 693766049 | ✅ MATCH | OK |
| address | Krzywa 19B, 34-400 Nowy Targ, Poland | ul. Krzywa 19B, 34-400, Nowy Targ | ✅ MATCH | OK |
| aggregateRating | 4.9 / 134 | 4.9 / 129 | ✅ MATCH (script tolerance) | OK — ale `reviewCount` lag 5, warto refresh |
| websiteUri (GBP→site) | http://www.bawialniabawisz.pl/ | bawialniabawisz.pl | ✅ FIXED | INFO/MEDIUM (homepage target, można landing) |
| schema.@type | restaurant→ChildCare | ChildCare | ✓ specific subtype | OK |

**Diff-driven hand-offs (refresh)**:
- 🟡 MEDIUM stale rating → re-run `script/fetch-google-rating.ts` (jeśli istnieje w projekcie) — schema `reviewCount` 129 vs live GBP 134 (lag 5)
- 🟢 INFO: GBP `websiteUri` używa `http://www.` — zmień w GBP dashboard na `https://www.bawialniabawisz.pl/` (5 min, czystszy signal)

### 3b. Manual checks (semantic)

| Element | Status | Notes |
|---|---|---|
| LocalBusiness JSON-LD (`ChildCare`) | ✅ | live, kompletne pola |
| BreadcrumbList | ✅ pełne | 2-element breadcrumbs na każdej podstronie (`/urodziny/`, `/warsztaty/`, `/kontakt/`, `/o-nas/`, etc.), homepage ma 1-element entry — poprawnie |
| WebPage schema | ✅ NEW | `primaryImageOfPage` + ref do `#localbusiness` |
| FAQPage schema | ✅ NEW | 8 pytań, świetna baza pod AI Overview cytaty |
| NAP w footer | ✅ | matching GBP |
| Embedded Google Map | ✅ | obecna w `src/components/Hours.jsx` i `src/pages/Kontakt.jsx` |
| "Nowy Targ" mentions | ✅ 8× (poprzednio 4×) | target 5-10 — w optimalnym zakresie |
| areaServed entity | ✅ | Nowy Targ + Podhale |
| Service area pages | ❌ | wciąż brak dedicated landing dla Czarny Dunajec, Szaflary, Ludźmierz, Rabka |

---

## 4. Reviews Strategy (refresh — nie wiemy czy plan ruszył)

**Last known (2026-05-18)**: 130 opinii, 4.9★, +1 w 9 dni (~3/mc)
**Today (2026-05-27, prediction)**: ≈131 opinii jeśli trend utrzymany
**Target (6 mc od 2026-05-18)**: 200+ opinii — wymaga ~12/mc, ~3/tydzień

### Pytania do właściciela (zanim re-planujemy)
1. Czy QR review program (100 wizytówek) ruszył od 2026-05-18?
2. Czy szkolenie personelu (15 min) zostało zrobione?
3. Ile opinii wpadło faktycznie w ostatnich 9 dniach? (sprawdzić w GBP dashboard)

Jeśli nie ruszył — plan z poprzedniego auditu (`Tydzień 1-4`) wciąż aktualny, przesunięty o 9 dni.

### Response protocol (bez zmian)

- 100% response rate target
- 24-48h response time
- Positive: thank + highlight service mentioned ("Cieszymy się, że Marcelinka świetnie się bawiła w sali sensorycznej!")
- Negative: empathy + offer offline fix, NIE defensiveness

---

## 5. Local Citations & NAP Consistency (refresh — bez zmian od 2026-05-18)

| Directory | Status | Akcja |
|---|---|---|
| Panorama Firm | TBD | sprawdzić obecność + claim |
| Pkt.pl | TBD | jw. |
| Firmy.net | TBD | jw. |
| Facebook Business | TBD | sprawdzić NAP + cross-link z IG |
| Apple Maps | TBD | claim przez business.apple.com (free) |
| Pomyslowirodzice.pl | ✓ obecność | branżowy, high-relevance |
| Booksy (rezerwacje urodzin) | TBD | rozważyć (silne SEO dla "urodziny dla dzieci nowy targ") |

**NAP truth (z live schema, matching GBP)**:
- Name: `BAWISZ Bawialnia`
- Phone: `+48 693 766 049`
- Address: `ul. Krzywa 19B, 34-400 Nowy Targ`

---

## 6. Backlinks & Local PR — bez zmian (do zrobienia)

Plan z poprzedniego auditu wciąż aktualny:

**Immediate (this month)**:
1. **Podhale24.pl** — pitch "Najlepsze bawialnie w Nowym Targu 2026" — Bawisz dostarcza zdjęcia + cytat, w zamian backlink
2. **Lokalne mama-blogi** (krakowskiezpodhalem.pl, podhalanskamama.pl) — guest post lub recenzja
3. **FB grupy** "Mamy Nowego Targu", "Rodzinne Podhale" — merytoryczne udzielanie się
4. **Współpraca z fotografem dziecięcym** w Nowym Targu — sesje w Bawiszu, fotograf linkuje

**Medium-term (3-6 mc)**: sponsoring Dnia Dziecka 2026-06-01 (za tydzień!), partnerstwo z przedszkolami.

---

## 7. Service Area Expansion — bez zmian (do zrobienia po fix #1)

| Lokalizacja | Distance | Priority | Hand-off |
|---|---|---|---|
| **Czarny Dunajec** | 12 km | High | `/write-service-page czarny-dunajec bawialnia` |
| **Szaflary** | 7 km | High | `/write-service-page szaflary bawialnia` |
| **Ludźmierz** | 5 km | Medium | `/write-service-page ludzmierz bawialnia` |
| **Rabka-Zdrój** | 25 km | Medium | `/write-service-page rabka-zdroj bawialnia` |
| Zakopane | 20 km | Low | wymaga osobnej strategii (silna konkurencja) |

**Prerequisite**: zweryfikuj keywords w `seo/service_keywords.md` sekcja Proposed → przenieś do Active **PRZED** wywołaniem `/write-service-page`.

---

## 8. Action Plan (prioritized 2026-05-27)

### 🟡 PRIORITY 1 — TODAY (15 min) — drobne polishe
**Task #1: GBP websiteUri http → https** (5 min)
- business.google.com → BAWISZ → Edytuj profil → Strona internetowa
- Obecna wartość: `http://www.bawialniabawisz.pl/`
- Zmień na: `https://www.bawialniabawisz.pl/` (lub bez www: `https://bawialniabawisz.pl/`)
- Save → Google auto-indeksuje w 24-48h

**Task #2: Re-run build-time rating fetch + deploy** (10 min, jeśli skrypt istnieje)
- Schema `reviewCount` = 129, live GBP = 134 → lag 5
- Jeśli projekt ma `script/fetch-google-rating.ts` (pattern z AI_Solutions_Design_v2) — odpalić w CI/pre-deploy
- Jeśli nie ma — manualnie zaktualizuj w source: `index.html:` → `"reviewCount": "134"` → deploy

### 🟢 PRIORITY 2 — This Week (review momentum jest!)

**Task #3: Review generation — utrzymaj momentum**
- ⚡ Z +1/9d (poprzednio) → +4/9d (teraz) coś ruszyło — utrzymaj/wzmocnij
- Jeśli QR program już działa: zamów dodatkowe 100 wizytówek (Allegro 24h)
- Jeśli nie wiesz co zadziałało (organicznie?): poproś personel o feedback — co mówili klientom?
- Target następnych 30 dni: utrzymać 12-15 opinii/mc → schema reviewCount 134 → 150+

**Task #5: ~~BreadcrumbList na podstronach~~** — ❌ błędny finding w v1 raportu; verified 2026-05-27: 2-element breadcrumbs są na wszystkich podstronach (urodziny, warsztaty, kontakt, o-nas) ✓

### 🟠 PRIORITY 3 — This Month
**Task #6: Service area expansion**
- Zweryfikować Proposed keywords w `seo/service_keywords.md` (sekcja lokalna)
- `/write-service-page czarny-dunajec bawialnia` (12 km — high priority)
- `/write-service-page szaflary bawialnia` (7 km — high priority)
- `/write-service-page ludzmierz bawialnia` (5 km — medium)

**Task #7: NAP audit w citations (30 min)**
- Panorama Firm + Pkt.pl + Facebook → ujednolic format

**Task #8: Dzień Dziecka 2026-06-01 (za tydzień!)**
- Sponsoring/event w lokalu — generator opinii + lokalne PR
- Pitch do Podhale24.pl: relacja z eventu z linkiem do bawialniabawisz.pl

### 🟡 PRIORITY 4 — Next 3 Months
- Lokalne PR (Podhale24.pl, mama-blogi guest posts, FB grupy)
- GBP Products feature (linki do podstron `/urodziny/`, `/warsztaty/`)
- Posts schedule: 2-4/mc
- Photos w GBP 10 → 30+ (zewnątrz, wnętrze, sale, kawiarnia, warsztaty)

---

## 9. Expected Timeline (refresh 2026-05-27)

- **+10 min** (DZIŚ): GBP manual check + websiteUri fix (jeśli wciąż IG) — Google indeksuje w 24-72h
- **+1 tydzień**: pierwsze zmiany ze schema fix (name, FAQ) widoczne w SERP, FAQ rich snippet możliwy
- **+2-3 tyg**: pierwsze nowe opinie z QR programu (jeśli ruszy)
- **+1 mc**: Maps Pack ranking lift (websiteUri trust + content + FAQ)
- **+2-3 mc**: walka o #2 (Mini Club statyczny), #1 Xtreme poza zasięgiem (≈600+ reviews)
- **+6 mc**: 200+ opinii (jeśli QR ruszy), stable top 3, service area pages zaindeksowane

---

## 10. Implementation Checklist (refresh)

### Zrobione od 2026-05-18 ✅
- [x] **`websiteUri` w GBP → bawialniabawisz.pl** (z Instagram) — Priority 1 FINALLY DONE
- [x] Schema `name` = "BAWISZ Bawialnia" (live na bawialniabawisz.pl)
- [x] "Nowy Targ" mentions na homepage 4 → 8
- [x] FAQ schema (`FAQPage`) z 8 pytaniami
- [x] WebPage schema z `primaryImageOfPage`
- [x] BreadcrumbList JSON-LD na każdej podstronie (2-element breadcrumbs)
- [x] alternateName array z marketingowym brand string
- [x] sameAs: IG, FB, TikTok (3 platformy)
- [x] areaServed: Nowy Targ + Podhale
- [x] Places API klucz odnowiony (working 2026-05-27)

### TO DO 🟡 (drobne polishe, nic krytycznego)
- [ ] GBP `websiteUri` http → https (5 min w business.google.com)
- [x] Schema `reviewCount` updated 129 → 134 + rebuild (2026-05-27) — deploy pending
- [ ] 100 wizytówek QR review wydrukowane
- [ ] Trening personelu (15 min)
- [ ] Follow-up SMS po urodzinach
- [ ] Response na 100% opinii w 24h
- [ ] Citations claim: Panorama Firm, Pkt.pl, Apple Maps
- [ ] Service area pages: `/write-service-page` × 3-4
- [ ] Photos w GBP 10 → 30+
- [ ] Posts schedule 2-4/mc
- [ ] Podhale24.pl pitch (link building)
- [ ] GBP Products feature (4 produkty linkujące do podstron)
- [ ] Dzień Dziecka 2026-06-01 (za tydzień) — event w lokalu

---

## Hand-offs

- **Keywords proposal** (jeśli brakuje lokalnych wariacji typu "bawialnia czarny dunajec"): `/seed-client-seo`
- **Service area landing pages**: `/write-service-page [city] bawialnia` × 3-4
- **Technical SEO** (sitemap, SSR, canonical na nowych podstronach po generacji): `/seo-analyzer`
- **Content** (blog post "Najlepsze bawialnie w Nowym Targu — porównanie 2026"): `/write-blog-post`

---

## Next step

1. **TODAY**: właściciel loguje się do GBP (10 min), weryfikuje websiteUri + zapisuje reviewCount; równolegle fix billing/API w GCP
2. **W tym tygodniu**: re-run rating fetch, BreadcrumbList rozbudowa, 100 wizytówek QR zamówione
3. **W tym miesiącu**: service area expansion via `/write-service-page` × 3-4

Pipeline overview: `.claude/rules/seo-pipeline-overview.md`.
