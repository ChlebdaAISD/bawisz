# LOCAL SEO AUDIT — BAWISZ Bawialnia (re-audit)

**Business**: BAWISZ Bawialnia
**Location**: Nowy Targ, ul. Krzywa 19B, 34-400
**Primary Keyword**: "bawialnia nowy targ"
**Date**: 2026-05-18 (re-audit; pierwszy audyt 2026-05-09)
**Source**: Google Places API (New) — `places/ChIJI5kdKjnlFUcRx7klm74NvMM` + `compare_gbp_website.py` diff vs `https://bawialniabawisz.pl`

---

## Executive Summary

| | |
|---|---|
| **Status fix z 2026-05-09** | 🔴 **Priority 1 NIEZROBIONY** — `websiteUri` w GBP wciąż wskazuje na Instagram |
| **Current Maps Pack** | top 4 (#1 Xtreme KiDS 497 op., #2 Mini Club 137, #3 BAWISZ 130, #4 Fun Factory 62) |
| **Reviews velocity** | BAWISZ +1 w 9 dni (∼3/mc). Xtreme KiDS +11 w 9 dni (∼36/mc) — przewaga rośnie. |
| **Strona vs GBP (auto-diff)** | Phone ✓ · Adres ✓ · aggregateRating ✓ (4.9/129 vs 4.9/130) · Name MISMATCH (HIGH) · brak embedded mapy |
| **Quick Wins (single biggest)** | Wciąż: zmiana `websiteUri` w GBP z Instagram na `https://bawialniabawisz.pl/` — 5 min, największy single-fix |
| **Timeline to Top 3 stable** | 3-5 miesięcy od dnia w którym faktycznie zrobimy fix websiteUri + uruchomimy review generation |

**Co się zmieniło od 2026-05-09:**
- ✅ Strona `bawialniabawisz.pl` jest LIVE z `ChildCare` JSON-LD, NAP w footer, aggregateRating (4.9/129) — SSG po `/seo-analyzer` zaimplementowane
- ✅ Telephone i address dopasowane między GBP i schema (auto-diff: MATCH)
- 🔴 `websiteUri` w GBP wciąż = Instagram (NIE zrobiony fix #1 z poprzedniego audytu)
- 🟠 Reviews +1 w 9 dni (program QR/follow-up nie ruszył)
- ⚠️ Schema `name` MISMATCH naprawiony w source ([index.html:39](index.html#L39)) — **wymaga rebuild + deploy** żeby trafiło na live
- ✅ Embedded Google Map istnieje na homepage przez komponent [Hours.jsx:84](src/components/Hours.jsx#L84) i na [/kontakt/](src/pages/Kontakt.jsx#L225) (false negative w poprzedniej wersji raportu — WebFetch zgubił iframe przy konwersji do markdown)

**Hand-offs identified:**
- Service area pages (Czarny Dunajec, Szaflary, Ludźmierz, Rabka) → `/write-service-page` × 4 (priorytet po fix #1)
- Embedded map + correct `schema.name` → `/write-service-page` regeneracja `/kontakt/` lub edycja schema source

---

## 1. Google Business Profile Status

### Raw API data (snapshot 2026-05-18)

| Pole | Wartość | Δ vs 2026-05-09 |
|---|---|---|
| Place ID | `ChIJI5kdKjnlFUcRx7klm74NvMM` | — |
| Display Name | BAWISZ Bawialnia | — |
| Address | Krzywa 19B, 34-400 Nowy Targ | — |
| Phone | +48 693 766 049 | — |
| Website | **`instagram.com/bawisz_bawialnia/...`** ❌ | **bez zmian — NIEZROBIONE** |
| Primary Type | `amusement_center` | — |
| Types | indoor_playground, playground, amusement_center, point_of_interest, establishment | — |
| Rating | 4.9 ★ | — |
| Reviews count | **130** | **+1** (było 129) |
| Business Status | OPERATIONAL | — |
| Hours | Pn-Pt 10:00-19:00, Sb-Nd 10:00-20:00 | — |

### 🔴 Critical Issue (unchanged from 2026-05-09)

**Issue #1: `websiteUri` w GBP wskazuje na Instagram, nie na własną domenę** 🔥

- Current: `https://www.instagram.com/bawisz_bawialnia/?igsh=...&utm_source=qr`
- Powinno być: `https://bawialniabawisz.pl/` (strona JEST live z poprawnym schema i NAP — gotowe do podpięcia)
- **Impact: WYSOKI** — to wciąż największy single-fix dostępny dla local SEO
- **Fix (5 min)**: business.google.com → BAWISZ → Edytuj profil → Strona internetowa → wstaw `https://bawialniabawisz.pl/` → Zapisz
- Wszyscy konkurenci w top-4 mają domeny: Xtreme KiDS → `xtremekids.pl/sale/nowy-targ`, Mini Club → `miniclub.pl`, Fun Factory → `ffnt.pl`

### 🟠 Reviews velocity gap (new finding)

W 9 dni:
- BAWISZ: 129 → 130 (**+1**, ~3/mc trend)
- Xtreme KiDS: 486 → 497 (**+11**, ~36/mc trend)
- Mini Club: 137 → 137 (0)
- Fun Factory: 62 → 62 (0)

Xtreme aktywnie generuje opinie — gap (357 → 367) rośnie. Mini Club statyczny, ale wciąż +7 nad BAWISZ. **Plan QR/follow-up z poprzedniego audytu prawdopodobnie nie ruszył.**

### ⚠️ Still TBD (z poprzedniego audytu)
- `child_care_agency` w secondary categories — sprawdzić z klientem czy element opieki ma miejsce (warsztaty Montessori mogą się kwalifikować)
- Photos count w GBP dashboard (API zwraca sampel 10) — target 30+
- Posts schedule — target 2-4/mc

---

## 2. Competition Analysis (Maps Pack snapshot 2026-05-18)

| # | Business | Reviews | Δ 9d | Rating | Website | Primary Type |
|---|---|---|---|---|---|---|
| 1 | **Sala zabaw Xtreme KiDS** | **497** | +11 | 4.8 | xtremekids.pl/sale/nowy-targ ✓ | amusement_center |
| 2 | **MINI CLUB Sala Zabaw** | 137 | 0 | 4.9 | miniclub.pl ✓ | amusement_center |
| 3 | **BAWISZ Bawialnia** | 130 | +1 | 4.9 | **instagram.com** ❌ | amusement_center |
| 4 | Fun factory | 62 | 0 | 4.6 | ffnt.pl ✓ | playground |

**Observation**: BAWISZ wciąż z najlepszą oceną w mieście (tied z Mini Club 4.9), ale przewaga prominence Xtreme KiDS rośnie szybciej niż dystans do Mini Club zamyka się. Bez review velocity program — pozycja #3 nie urośnie do #2.

---

## 3. Website Local SEO Verification (auto-diff)

### 3a. GBP ↔ Website diff (z `/tmp/gbp_diff.json`)

**Summary**: Match 3 | Mismatch 1 | Missing 0 | Top severity: **HIGH**

| Field | GBP | Website (schema) | Status | Severity |
|---|---|---|---|---|
| name | BAWISZ Bawialnia | BAWISZ — Bawialnia Montessori i Kawiarnia | **MISMATCH** | HIGH |
| telephone | +48 693 766 049 | +48 693 766 049 | MATCH | OK |
| address | Krzywa 19B, 34-400 Nowy Targ | ul. Krzywa 19B, 34-400, Nowy Targ | MATCH | OK |
| aggregateRating | 4.9 / 130 | 4.9 / 129 | MATCH | OK (1 review lag — fresh build by re-run `fetch-google-rating.ts`) |

**Diff-driven hand-offs:**
- HIGH name mismatch → ujednolicić **w jedną stronę**: albo zmienić `schema.name` w source na `BAWISZ Bawialnia` (krótszy, dopasowany do GBP), albo zostawić długi marketingowy "BAWISZ — Bawialnia Montessori i Kawiarnia" jako brand pitch. Rekomendacja: **schema = "BAWISZ Bawialnia"** (matching GBP truth), długi opis trzymać w `description` field schema.
- aggregateRating lag (130 vs 129) → kolejny build automatycznie podciągnie; nie krytyczne. Jeśli używamy `script/fetch-google-rating.ts` pattern z AI_Solutions_Design_v2 — re-run na CI.

### 3b. Manual checks (semantic)

| Element | Status | Notes |
|---|---|---|
| LocalBusiness JSON-LD (`ChildCare`) | ✓ obecne | wykryte przez comparator |
| BreadcrumbList JSON-LD | ✓ (dodane w `/seo-analyzer` 2026-05-09) | — |
| NAP w footer | ✓ | "ul. Krzywa 19B, 34-400 Nowy Targ" + "+48 693 766 049" — match z GBP |
| Embedded Google Map | ✅ | iframe na homepage przez [Hours.jsx](src/components/Hours.jsx) (sekcja "Godziny / Dojazd") + na [/kontakt/](src/pages/Kontakt.jsx) |
| "Nowy Targ" mentions na homepage | ⚠️ 4× (low) | target 5-10× naturalnie — niedobór na primary keyword |
| Service area pages exist | ❌ | brak dedicated landing dla Czarny Dunajec, Szaflary, Ludźmierz, Rabka |
| `websiteUri` w GBP = bawialniabawisz.pl | ❌ | wskazuje na IG — **wciąż PRIORYTET 1** |

### Hand-off:
- **Embedded map + schema.name fix** → edycja `src/...` na `/kontakt/` (lub global LocalBusiness schema source). Jeśli schema jest generowany centralnie → fix w 1 miejscu i rebuild SSG.
- **"Nowy Targ" boost na homepage** → dopisać 2-3 wzmianki w naturalnym kontekście (np. sekcja "Gdzie nas znajdziesz" + "Bawialnia w centrum Nowego Targu" + opis dojazdu z okolicy)
- **Service area pages** → `/write-service-page` × 4 (lista poniżej w sekcji 7)

---

## 4. Reviews Strategy (revised — bo plan z 2026-05-09 nie ruszył)

**Current**: 130 opinii, 4.9★
**Target (6 mc od dziś)**: 200+ opinii, 4.9★ utrzymane
**Gap**: 70 w 6 mc = ~12/mc, ~3/tydzień

### Dlaczego stagnacja (+1 w 9 dni)
Plan QR/follow-up z poprzedniego audytu prawdopodobnie nie został wdrożony. Bez QR na barze, bez follow-up SMS po urodzinach, organicznie wpadają opinie sporadycznie.

### Tygodniowy plan (re-launch)

**Tydzień 1 (od dziś, 2026-05-18)**:
- ⏰ Zamówić 100 wizytówek z QR linkiem do `g.page/r/CZmAa7q-Db_DEAE/review` — Allegro / Printpoland, doba dostawy
- ⏰ Trening personelu (15 min): po wyjściu zadowolonej rodziny — "Bardzo Państwu dziękujemy. Jeśli mogą Państwo zostawić opinię na Google, to dla nas duża pomoc — kod QR jest na wizytówce."

**Tydzień 2**:
- Po każdych warsztatach Montessori/sensorycznych — papierowy "dziękujemy" z imieniem dziecka + QR
- Cel tygodnia: 3 opinie

**Tydzień 3**:
- Follow-up SMS 24h po urodzinach: "Cieszymy się że Marcelinka świetnie się bawiła! Jeśli mają Państwo chwilę, opinia na Google: [link] — Zespół BAWISZ"
- Cel: 1 opinia/urodziny

**Tydzień 4**:
- Response na 100% opinii (target 24h)
- Review opinii za miesiąc — pomiar velocity (target: minimum +8-10 w pełnym miesiącu)

### Response protocol — bez zmian (z poprzedniego audytu, działa)

---

## 5. Local Citations & NAP Consistency

### Status — bez zmian od 2026-05-09 (do zrobienia)

| Directory | Status | Akcja |
|---|---|---|
| Panorama Firm | TBD | Sprawdzić obecność, claim, NAP = GBP truth |
| Pkt.pl | TBD | jw. |
| Firmy.net | TBD | jw. |
| Facebook Business | TBD | sprawdzić NAP + cross-link z IG |
| Apple Maps | TBD | claim przez business.apple.com (free) |
| Pomyslowirodzice.pl | ✓ obecność | branżowy, high-relevance citation |
| Booksy (rezerwacje urodzin) | TBD | rozważyć (silne SEO ranking dla "urodziny dla dzieci [city]") |

**NAP truth (z GBP)**:
- Name: `BAWISZ Bawialnia`
- Phone: `+48 693 766 049`
- Address: `Krzywa 19B, 34-400 Nowy Targ` (bez "ul.", bez przecinka między kodem a miastem)

**Najczęstsze błędy do uniknięcia w citations**:
- Phone format: użyj `+48 693 766 049` (z plusem i spacjami) wszędzie
- Address: `Krzywa 19B, 34-400 Nowy Targ` (bez "ul.")
- Nazwa: `BAWISZ Bawialnia` (matching GBP — NIE "BAWISZ — Bawialnia Montessori i Kawiarnia")

**Action (30 min)**: ręczny check Panorama Firm + Pkt.pl + FB; ujednolic format.

---

## 6. Backlinks & Local PR — bez zmian (do zrobienia)

Plan z poprzedniego audytu wciąż aktualny:

**Immediate (this month)**:
1. **Podhale24.pl** — pitch "Najlepsze bawialnie w Nowym Targu 2026" — Bawisz dostarcza zdjęcia + cytat, w zamian backlink
2. **Lokalne mama-blogi** (krakowskiezpodhalem.pl, podhalanskamama.pl) — guest post lub recenzja
3. **FB grupy** "Mamy Nowego Targu", "Rodzinne Podhale" — merytoryczne udzielanie się (NIE spam)
4. **Współpraca z fotografem dziecięcym** w Nowym Targu — sesje w Bawiszu, fotograf linkuje

**Medium-term (3-6 mc)**: sponsoring lokalnych eventów (Dzień Dziecka), partnerstwo z przedszkolami.

---

## 7. Service Area Expansion — bez zmian (do zrobienia po fix #1)

| Lokalizacja | Distance | Priority | Hand-off |
|---|---|---|---|
| **Czarny Dunajec** | 12 km | High | `/write-service-page czarny-dunajec bawialnia` |
| **Szaflary** | 7 km | High | `/write-service-page szaflary bawialnia` |
| **Ludźmierz** | 5 km | Medium | `/write-service-page ludzmierz bawialnia` |
| **Rabka-Zdrój** | 25 km | Medium | `/write-service-page rabka-zdroj bawialnia` |
| Zakopane | 20 km | Low | wymaga osobnej strategii (silna konkurencja) |

**Każda strona musi mieć**:
- Unique LocalBusiness JSON-LD z `addressLocality: "Nowy Targ"` + tekst nawigacji "dojazd z [miasto]"
- Embedded map z markerem Bawisz + route z target town
- 5-8× nazwa target town w treści, z odmianą ("w Czarnym Dunajcu", "z Czarnego Dunajca")
- Linki do `/` i głównych podstron (`/urodziny/`, `/warsztaty/`)

**Najpierw 'proposed' keywords trzeba zweryfikować** — `seo/service_keywords.md` ma sekcję Proposed z lokalnymi wariantami; przesuń do Active **przed** wywołaniem `/write-service-page`.

---

## 8. Action Plan (prioritized 2026-05-18)

### 🔴 PRIORITY 1 — TODAY (5 min)
**Task #1 (powtórka, wciąż niewykonane): Zmień `websiteUri` w GBP**
- **How**: business.google.com → BAWISZ → Edytuj profil → Strona internetowa → wstaw `https://bawialniabawisz.pl/` → Zapisz
- **Time**: 5 min
- **Impact**: 🔥🔥🔥 — wciąż największy single-fix dostępny

### 🔴 PRIORITY 2 — This Week
**Task #2: Schema `name` MISMATCH fix** ✅ zrobione w source 2026-05-18 — wymaga **rebuild + deploy**
- **What was done**: [index.html:39](index.html#L39) → `"name": "BAWISZ Bawialnia"`, długi marketingowy string przeniesiony do `alternateName` array
- **Next**: `npm run build` + deploy na Railway/Cloudflare → re-run `compare_gbp_website.py` żeby zweryfikować że live serwuje nowy schema

**Task #3: Re-launch review generation**
- 100 wizytówek z QR (Allegro/Printpoland — 24h)
- 15-min trening personelu
- Target tygodnia 1: 2-3 opinie

**Task #4: NAP audit w citations (30 min)**
- Panorama Firm + Pkt.pl + Facebook → ujednolic format

### 🟠 PRIORITY 3 — This Month
**Task #5: Service area expansion**
- Zweryfikować Proposed keywords (`seo/service_keywords.md` — sekcja "Lokalne — okoliczne miejscowości") → przenieść do Active
- `/write-service-page czarny-dunajec bawialnia`
- `/write-service-page szaflary bawialnia`
- `/write-service-page ludzmierz bawialnia`

**Task #6: "Nowy Targ" mentions na homepage 4 → 6-8**
- Dopisać 2-3 wzmianki w naturalnym kontekście (sekcja "Dojazd" / "Gdzie nas znajdziesz" / opis okolicy)

### 🟡 PRIORITY 4 — Next 3 Months
- Lokalne PR (Podhale24.pl pitch, mama-blogi guest posts, FB grupy)
- Sponsoring Dnia Dziecka 2026-06-01
- GBP Products feature (linki do podstron)
- Posts schedule: 2-4/mc

---

## 9. Expected Timeline (jeśli ruszamy DZIŚ)

- **+5 min** (DZIŚ): GBP websiteUri fix indexed przez Google w 24-72h
- **+2 tyg**: pierwsze opinie z QR programu (target +4-6 vs baseline +1/9d)
- **+1 mc**: noticeable Maps Pack ranking lift (websiteUri trust signal + content fixes)
- **+2 mc**: stable top 3 walka, ale realnie Mini Club zachowuje +7 op. — dogonienie zależy od velocity
- **+3-4 mc**: walka o #2 (Mini Club statyczny — realistyczne), #1 Xtreme KiDS poza zasięgiem (498→532+ do tego momentu)
- **+6 mc**: 200+ opinii, stable top 3, service area pages indeksowane

---

## 10. Implementation Checklist (refresh)

- [x] LocalBusiness JSON-LD obecne na stronie (verified)
- [x] BreadcrumbList JSON-LD obecne
- [x] NAP w footer matching GBP (telephone, address)
- [x] aggregateRating w schema (4.9/129 — lag 1 vs GBP 130, akceptowalne)
- [ ] **Update `websiteUri` w GBP na bawialniabawisz.pl** ← #1
- [x] **Fix schema `name` MISMATCH** — w source już "BAWISZ Bawialnia" (wymaga rebuild + deploy)
- [x] Embedded Google Map — obecna w Hours.jsx i Kontakt.jsx (verified w source)
- [ ] "Nowy Targ" mentions na homepage 4 → 6-8
- [ ] 100 wizytówek QR review wydrukowane i wprowadzone do baru
- [ ] Trening personelu (15 min)
- [ ] Follow-up SMS po urodzinach skonfigurowane
- [ ] Response na 100% istniejących opinii w 24h
- [ ] Citations claim: Panorama Firm, Pkt.pl, Facebook, Apple Maps
- [ ] NAP consistency fix w istniejących citations
- [ ] Service area pages: `/write-service-page` × 3-4 (Czarny Dunajec, Szaflary, Ludźmierz, Rabka)
- [ ] `child_care_agency` secondary category w GBP (sprawdź legitność z klientem)
- [ ] Photos w GBP 10 → 30+ (zewnątrz, wnętrze, sale, kawiarnia, warsztaty)
- [ ] Posts schedule 2-4/mc
- [ ] Podhale24.pl pitch (link building)
- [ ] GBP Products feature (4 produkty linkujące do podstron)

---

## Next step

1. **DZIŚ**: właściciel klika websiteUri fix (5 min) — to jest blocking dla każdego dalszego działania local SEO
2. **W tym tygodniu**: schema.name fix (15 min) + 100 wizytówek QR (zamówienie)
3. **W tym miesiącu**: NAP audit citations + `/write-service-page` × 3-4 dla okolicznych miejscowości

Pipeline overview: `.claude/rules/seo-pipeline-overview.md`.
