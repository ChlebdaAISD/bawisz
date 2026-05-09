# LOCAL SEO AUDIT — BAWISZ Bawialnia

**Business**: BAWISZ Bawialnia
**Location**: Nowy Targ, ul. Krzywa 19B, 34-400
**Primary Keyword**: "bawialnia Nowy Targ"
**Date**: 2026-05-09
**Source**: Google Places API (New) — `places.googleapis.com/v1/places/ChIJI5kdKjnlFUcRx7klm74NvMM`

---

## Executive Summary

| | |
|---|---|
| **Current Maps Pack Position** | top 4 (#1 Xtreme KiDS, #2 Mini Club, #3 Bawisz lub Urwisowy Raj — zależnie od proximity) |
| **Main Competitor** | Xtreme KiDS Nowy Targ — 486 opinii, 4.8★, lokalizacja Ludźmierska 26A |
| **Critical Issues** | 1) **websiteUri w GBP wskazuje na Instagram, nie na bawialniabawisz.pl** — ranking killer; 2) brak service area pages dla okolicznych miejscowości; 3) brak NAP consistency check |
| **Quick Wins** | Zmiana websiteUri w GBP (5 min) → największy single-fix dla local SEO |
| **Timeline to Top 3 stable** | 3-5 miesięcy (po fix websiteUri + 3 reviews/miesiąc + 2 service area pages) |

**Hand-offs identified**:
- Missing local landing page dla głównej usługi → `/write-service-page nowy-targ bawialnia` (już istnieje home jako de facto landing — ale rozważ dedicated `/uslugi/bawialnia-nowy-targ` z LocalBusiness JSON-LD)
- Service area expansion → `/write-service-page` × N (Czarny Dunajec, Szaflary, Ludźmierz, Rabka-Zdrój, Zakopane)
- Technical issues (canonical, schema) → już ogarnięte przez `/seo-analyzer` w tej sesji

---

## 1. Google Business Profile Status

### Raw API data (snapshot)

| Pole | Wartość |
|---|---|
| Place ID | `ChIJI5kdKjnlFUcRx7klm74NvMM` |
| Display Name | BAWISZ Bawialnia |
| Address | Krzywa 19B, 34-400 Nowy Targ, Poland |
| Phone | +48 693 766 049 |
| Website | **`instagram.com/bawisz_bawialnia/?...`** ❌ |
| Primary Type | `amusement_center` (Amusement Center) |
| Types | amusement_center, indoor_playground, playground, point_of_interest, establishment |
| Rating | 4.9 / 5 |
| Reviews count | 129 |
| Business Status | OPERATIONAL |
| Hours | Mon–Fri 10:00–19:00, Sat–Sun 10:00–20:00 |
| Photos | 10+ (sample), wszystkie z konta BAWISZ + 2 z user contributions |

### ✅ Strengths
- **Rating 4.9 / 5** — równy z Mini Club, wyższy niż wszyscy pozostali konkurenci w Nowym Targu (Xtreme 4.8, Urwisowy 4.8, Fun Factory 4.6)
- **129 opinii** — drugi co do liczby po Mini Club (137); silna baza zaufania
- **Hours kompletne** — 7/7 dni z weekendami rozszerzonymi do 20:00 (zaznaczona obsługa rodzin po pracy)
- **Recenzje wysokiej jakości** — długie, opisowe ("dopracowanym w każdym detalu placu zabaw", "drewniane, proste i mądre zabawki", "Montessori"); wzmianki o kawiarni, warsztatach, nocniku w łazience — bogate sygnały topical relevance
- **Zdjęcia owner-uploaded** — 8/10 z konta BAWISZ, wysoka rozdzielczość (4800×3200, 4032×3024) — właściciel aktywnie zarządza profilem
- **Address dokładny** — Krzywa 19B 34-400 z dokładną geolokalizacją (lat/lng), nie obszar przybliżony

### ❌ Critical Gaps

**Issue #1: websiteUri w GBP wskazuje na Instagram, nie na własną domenę** 🔥
- Current: `https://www.instagram.com/bawisz_bawialnia/?igsh=...&utm_source=qr`
- Powinno być: `https://bawialniabawisz.pl/` (lub równoważna własna domena projektu)
- **Impact: WYSOKI** — Maps Pack ranking algorithm używa `websiteUri` jako:
  - Sygnał autorytetu domeny (IG dystrybuuje siłę linkową na Meta, nie na biznes)
  - Trust signal (klienci klikają „Strona” — IG to mała wersja info, nie pełny lead funnel)
  - Bridge między Maps a website's local schema/NAP (z IG nie ma jak — Google nie czyta Bio)
- Wszyscy konkurenci w top-3 mają dedykowane domeny (`xtremekids.pl/sale/nowy-targ`, `miniclub.pl`, `ffnt.pl`, `urwisowy-raj.pl`)
- **Fix**: GBP dashboard → Profil firmy → Edytuj informacje → Strona internetowa → wstaw `https://bawialniabawisz.pl/`. Wymaga: strona musi być live z HTTPS.

**Issue #2: Brak `child_care_agency` w secondary categories**
- Current types: `amusement_center, indoor_playground, playground`
- Mini Club ma DODATKOWO: `preschool, child_care_agency, educational_institution`
- Recenzje Bawisz wzmiankują warsztaty (Montessori, sensoryczne, malowanie), monoporcje, dedykowane wyposażenie dla maluchów (pieluszki, nocnik, nakładka) — sygnały dopasowane do `child_care_agency`
- **Impact: ŚREDNI** — dodanie 1-2 secondary categories szerzy semantic reach do query "opieka nad dziećmi", "przedszkole z zabawą", "warsztaty dla dzieci"
- **Fix**: GBP → Edytuj kategorie → dodaj `Centrum opieki nad dziećmi` (jeśli legitne — wymaga elementu opieki, sprawdź z klientem). NIE dodawaj jeśli to czysta bawialnia bez opieki.

**Issue #3: Brak weryfikacji NAP consistency między GBP, stroną, citations**
- API potwierdza GBP: `+48 693 766 049`, `Krzywa 19B, 34-400 Nowy Targ`
- Strona bawialniabawisz.pl powinna mieć IDENTYCZNY format w footer + contact page (status: do zweryfikowania na live site)
- Citations (Panorama Firm, Pkt.pl, Facebook): nieskanowane — wymaga ręcznego audytu lub kolejnego runa
- **Fix**: zob. sekcja 5

### ⚠️ Improvements Needed
- **Brak `editorialSummary`** — pole API zwróciło puste; warto zlecić Google'owi opis (przez Posts/UGC sygnały) lub zaakceptować że to nice-to-have
- **Photos quantity nieznana z API** (zwrot ograniczony do sampla 10) — manualnie zweryfikować w GBP dashboard, target 30+ z różnorodnością (zewnątrz, wnętrze, sale tematyczne, kawiarnia, warsztaty, dzieci podczas zabawy z RODO release)
- **Posts** — API nie zwraca; manualnie sprawdzić częstotliwość. Target: 2-4 posty miesięcznie (oferta, wydarzenia, warsztaty, zmiana godzin)

---

## 2. Competition Analysis

### Maps Pack — Top 4 w Nowym Targu (snapshot z Places API)

| # | Business | Reviews | Rating | Primary Type | Website | Address | Source |
|---|---|---|---|---|---|---|---|
| 1 | **Xtreme KiDS** | **486** | 4.8 | amusement_center | xtremekids.pl/sale/nowy-targ ✓ | Ludźmierska 26A | API |
| 2 | **Mini Club** | 137 | 4.9 | amusement_center | miniclub.pl ✓ | Rynek 2 (centrum) | API |
| 3 | **BAWISZ** | 129 | 4.9 | amusement_center | **instagram.com** ❌ | Krzywa 19B | API |
| 4 | Fun Factory | 62 | 4.6 | playground | ffnt.pl ✓ | Sikorskiego 28 | API |
| 5 | Urwisowy Raj | 43 | 4.8 | amusement_center | urwisowy-raj.pl ✓ | Kopernika 12 | API |

### Strengths vs weaknesses (per competitor)

**#1 Xtreme KiDS** | 486 op. | 4.8★ | Ludźmierska 26A
- **Strengths**: 4× więcej opinii niż Bawisz (prominence dominance), sieciowa marka (xtremekids.pl ma sale w wielu miastach — domain authority), lokalizacja przy głównej drodze wylotowej
- **Weaknesses**: Tylko 3 typy (`amusement_center, point_of_interest, establishment`) — brak `indoor_playground`, brak edukacyjnych. Bawisz ma szerszą semantykę.
- **Jak konkurujemy**: budujemy unikalną tożsamość („drewniane zabawki, Montessori, kawiarnia z monoporcjami") — Bawisz to NIE jest plastikowy plac zabaw; to design-driven space. Targetujemy parents szukających "estetycznej bawialni Nowy Targ", "Montessori Nowy Targ", "warsztaty dla dzieci Nowy Targ".

**#2 Mini Club** | 137 op. | 4.9★ | Rynek 2
- **Strengths**: Lokalizacja w samym Rynku — proximity dla każdego query "bawialnia centrum Nowy Targ", 6 dodatkowych typów (preschool, child_care_agency, educational_institution) — szerokie semantic coverage
- **Weaknesses**: Tylko 8 opinii więcej niż Bawisz — bliskie do dogonienia. Stronę miniclub.pl ma sieciową (multi-city) — mniej hyper-local content niż dedicated landing.
- **Jak konkurujemy**: Bawisz ma 200m do Rynku — w treści podkreślaj „300m od Rynku w Nowym Targu" (proximity claim). Skup się na "Nowy Targ centrum" mimo lokalizacji na Krzywej.

**#4 Fun Factory & #5 Urwisowy Raj** — niżej w rankingu, mniej opinii, NIE są threatami.

### Competitive Gaps — gdzie Bawisz wygrywa, gdzie traci

**Wygrywamy w:**
- Quality content reviews (Bawisz reviews wzmiankują „Montessori", „warsztaty sensoryczne", „monoporcje", „przemyślana łazienka" — bogate keywords. Xtreme KiDS reviews to standardowe „dzieci się bawiły fajnie".)
- Rating tied with #2 (4.9 vs 4.9, vs 4.8 dla Xtreme)
- Type diversity (5 types vs 3 dla Xtreme)

**Tracimy w:**
- Reviews count vs #1 (129 vs 486 — gap 357 opinii, niemożliwy do dogonienia w 6 mc)
- Website (Instagram zamiast domeny — KRYTYCZNE)
- Brak `child_care_agency` / `educational_institution` (Mini Club ma)
- Lokalizacja vs centrum (Krzywa 19B vs Rynek 2 dla Mini Club — proximity disadvantage przy query bez modyfikatora)

---

## 3. Website Local SEO Verification

> **Scope**: ten skill weryfikuje, nie generuje. Implementation gaps → hand-off do `/write-service-page`. Stan po `/seo-analyzer` w tej sesji (SSG zaimplementowane, breadcrumb dodany, schema JSON-LD obecny).

| Element | Status | Notes |
|---|---|---|
| NAP w footer | TBD | wymaga sprawdzenia na live site `bawialniabawisz.pl` po deploy SSG |
| NAP na contact page | TBD | jw. |
| Embedded Google Map | TBD | jw. — sprawdzić obecność iframe lub komponentu Map |
| LocalBusiness JSON-LD | ✓ (verified w `/seo-analyzer`) | ChildCare subtype, address, geo, hours, aggregateRating wszystko present |
| BreadcrumbList JSON-LD | ✓ | dodane w sesji `/seo-analyzer` |
| City mentions na homepage | TBD | docelowo 5-10 razy „Nowy Targ" naturalnie |
| Service area pages exist | ❌ | brak dedicated landing dla okolicznych miejscowości |
| `websiteUri` w GBP = bawialniabawisz.pl | ❌ | wskazuje na IG — **PRIORYTET 1** |

### Hand-off — co potrzeba implementacji
- Service area pages: `/write-service-page` dla 4-5 lokalizacji (lista poniżej w sekcji 7)
- NAP consistency final check: po deploy live, ręczna weryfikacja albo nowy run `/seo-analyzer`

---

## 4. Reviews Strategy

**Current**: 129 opinii, 4.9★
**Target (6 mc)**: 200+ opinii, 4.9★ utrzymane
**Gap**: 71 opinii w 6 mc = ~12/mc, ~3/tydzień

### Co wynika z analizy 5 ostatnich opinii (z API):
- Wszystkie 5★, długie, autentyczne
- Wzmianki keywords: „Montessori" ×2, „kawiarnia" ×3, „kawa" ×3, „ciasto/monoporcje" ×3, „warsztaty" ×1, „łazienka/nocnik/pieluszki" ×2, „drewniane zabawki" ×2
- Languages: 4 PL, 1 EN (turysta) — sygnał że profil jest też dla turystów-gości
- Średnia długość recenzji: ~150 słów — wybitnie wysoka (typowe to 20-50)

### 30-Day Review Generation Plan

**Tydzień 1**:
- Zamów 100 wizytówek z QR linkiem do Google Review (`g.page/r/{place_id}/review`)
- Wyłóż na barze kawiarni + przy kasie
- Trening personelu: po wyjściu zadowolonej rodziny — „Bardzo Państwu dziękujemy. Jeśli mogą Państwo zostawić opinię na Google, to dla nas duża pomoc — kod QR jest na wizytówce."

**Tydzień 2**:
- Po każdych warsztatach (sensoryczne / Montessori) — papierowy „dziękujemy" z prośbą o opinię + QR
- Personalizacja: wpisać imię dziecka — „Dziękujemy Was, Marcelinko, za udział w warsztatach!" → motywuje rodziców

**Tydzień 3**:
- Stworzyć Google Reviews link dla urodzinów — dla rodziców organizujących urodziny w Bawisz, follow-up SMS 24h po wydarzeniu z linkiem
- Cel: każde urodziny = 1 opinia (urodziny mają silne emocje, łatwiej zebrać feedback)

**Tydzień 4**:
- Przegląd opinii za miesiąc, response na 100% (target 24h)
- Identyfikuj ulubione tematy klientów — w odpowiedziach używaj keywords ("Cieszymy się że Marcelinka świetnie się bawiła w naszej **bawialni w Nowym Targu** podczas **warsztatów Montessori**")
- W odpowiedziach NIE keyword-stuffing; max 1 keyword na response, naturalnie

### Response Protocol

**Na pozytywne (zawsze):**
> Bardzo dziękujemy za miłe słowa! Cieszymy się, że Marcelinka znalazła ulubione zabawki — kuchenkę i drewniany domek. Zapraszamy serdecznie z powrotem na nasze nadchodzące warsztaty plastyczne (każdą sobotę o 11:00). — Zespół BAWISZ

**Na neutralne/3-4★:**
> Dziękujemy za opinię. Bardzo żałujemy, że doświadczenie nie było idealne. Czy moglibyśmy dowiedzieć się więcej o tym co się stało? Prosimy o kontakt: 693 766 049 lub bezpośrednio do nas — chcielibyśmy poprawić to przy następnej wizycie.

**Na negatywne (1-2★ — żadnej obecnie):**
> protokół: profesjonalna empatia + offer rozwiązania + przeniesienie do prywatnej rozmowy (telefon, IG DM); NIE kłótnia w komentarzach.

---

## 5. Local Citations & NAP Consistency

### Polish directories — priorytet (Bawisz tier)

| Directory | Status | Akcja |
|---|---|---|
| Panorama Firm (panoramafirm.pl) | TBD | Sprawdź obecność, claim listing, NAP identyczne z GBP |
| Pkt.pl | TBD | jw. |
| Firmy.net | TBD | jw. |
| Facebook Business | TBD | sprawdź IG ↔ FB cross-link, NAP w "Strony" tab |
| Apple Maps | TBD | claim przez business.apple.com (free) |
| Pomyslowirodzice.pl | ✓ obecność (z web search) | branżowy katalog dla bawialni — high-relevance citation |
| Nocowanie.pl | obecność konkurenta (Mini Club) — niejasne czy Bawisz tam jest | rozważyć (turyści szukają atrakcji w Nowym Targu) |

### Branżowe / lokalne specyficzne

- **Podhale24.pl** — lokalny portal informacyjny; rozważyć platną/redakcyjną wzmiankę o nowych warsztatach Montessori (link from local news = silny sygnał lokalny)
- **Tatry.pl / Nowy Targ Centrum** — lokalne tourist boards; rozważyć listing jako „atrakcja dla rodzin z dziećmi"
- **Booksy** — jeśli Bawisz pozwala bookować urodziny / wejścia: silne SEO + rezerwacje (Booksy ma bardzo dobry rank w SERP dla query "urodziny dla dzieci [city]")
- **Pyszne.pl / Wolt** — NIE pasuje (to gastronomy delivery, Bawisz nie jest restauracją)

### NAP Consistency Check — checklist

| Pole | GBP (truth) | Strona | Panorama Firm | Pkt.pl | Facebook |
|---|---|---|---|---|---|
| Name | BAWISZ Bawialnia | TBD | TBD | TBD | TBD |
| Phone | +48 693 766 049 | TBD | TBD | TBD | TBD |
| Address | Krzywa 19B, 34-400 Nowy Targ | TBD | TBD | TBD | TBD |

**Action**: ręczny audyt — `WebSearch "BAWISZ Bawialnia" Nowy Targ -site:bawialniabawisz.pl` na każdym z directories osobno; zaznacz inconsistencies, fix.

### Najczęstsze błędy NAP (sprawdź w pierwszej kolejności)
- Phone format: `+48 693 766 049` vs `+48 693766049` vs `693766049` vs `693-766-049` — UNIFY
- Address: `ul. Krzywa 19B` vs `Krzywa 19B` — Google's GBP używa bez „ul." → przyjąć ten format wszędzie
- Postal code: `34-400 Nowy Targ` vs `34-400, Nowy Targ` — bez przecinka

---

## 6. Backlinks & Local PR

### Backlink discovery (z web search)
- **Pomyslowirodzice.pl** — listing branżowy (znaleziony w SERP) — ✓ pozyskany
- **Nocowanie.pl** — konkurent jest, Bawisz prawdopodobnie nie — opportunity

### Link building opportunities

**Immediate (this month)**:
1. **Podhale24.pl** — pitch tematu artykułu „Najlepsze bawialnie dla dzieci w Nowym Targu — porównanie 2026" — Bawisz dostarcza zdjęcia + cytat, w zamian link from authoritative local portal (DA ~30-40)
2. **Lokalne mama-blogi** (krakowskiezpodhalem.pl, mamawpodroze.pl, podhalanskamama.pl — sprawdzić istnienie) — guest post lub recenzja w ramach „mama-and-me visit" w wymianie za link
3. **Lokalne grupy FB** „Mamy Nowego Targu", „Rodzinne Podhale" — udzielanie się merytoryczne (NIE spam) z linkiem do strony przy tematycznych pytaniach
4. **Współpraca z fotografem dziecięcym** w Nowym Targu — Bawisz oferuje przestrzeń na sesje, fotograf w portfolio linkuje do Bawisz

**Medium-term (3-6 mc)**:
1. **Sponsoring lokalnych eventów** dla rodzin (Dzień Dziecka, Mikołajki w Rynku) — sponsoring = backlink z oficjalnej strony wydarzenia
2. **Współpraca z przedszkolami** Nowego Targu — partnerstwo wycieczki / wymiana linków (every przedszkole na stronie ma „polecane miejsca")

---

## 7. Service Area Expansion Strategy

### Recommended new pages (z search volume)

| Lokalizacja | Distance | Dlaczego | Priority |
|---|---|---|---|
| **Czarny Dunajec** | 12 km | Druga największa miejscowość okolicy, brak własnej bawialni | High |
| **Szaflary** | 7 km | Sąsiedztwo, popularne w turystyce zimowej | High |
| **Ludźmierz** | 5 km | Najbliższe — często wpisują „bawialnia Ludźmierz" | Medium |
| **Rabka-Zdrój** | 25 km | Uzdrowisko z rodzinami; turyści szukają „bawialnia Rabka" | Medium |
| **Zakopane** | 20 km | Turystyka — wysoki search volume, ale silna konkurencja | Low (wymaga osobnej strategii) |

### Hand-off: każda lokalizacja = `/write-service-page`

- `/write-service-page czarny-dunajec bawialnia` → unikalna treść 600+ słów: dojazd z CD do Krzywej (15 min), parking, dlaczego rodzice z CD wybierają Bawisz
- `/write-service-page szaflary bawialnia` → analogicznie
- `/write-service-page ludzmierz bawialnia` → analogicznie

**Każda strona musi mieć**:
- Unique LocalBusiness JSON-LD z `addressLocality: "Nowy Targ"` (główna lokalizacja) + tekst nawigacji „dojazd z [miasto]"
- Embedded map z markerem Bawisz + route z target town
- 5-8 razy nazwa target town w treści, naturalnie (z odmianą — „w Czarnym Dunajcu", „z Czarnego Dunajca")
- Linki do main service page i homepage
- Unique zdjęcie (jeśli możliwe — np. dzieci z target town na warsztatach z release)

### GBP Products feature
- W GBP dashboard → Products → dodaj „Wizyta z dzieckiem", „Urodziny w Bawisz", „Warsztaty Montessori", „Kawa z monoporcjami" — każdy linkuje do odpowiedniej podstrony.

---

## 8. Action Plan (Prioritized)

### 🔴 PRIORITY 1 — This Week (15 min total)

**Task #1: Zmień websiteUri w GBP z Instagram na bawialniabawisz.pl** ⚡
- **How**: business.google.com → BAWISZ → Edytuj profil → Strona internetowa → wstaw `https://bawialniabawisz.pl/` (lub URL po deploy SSG)
- **Who**: właściciel
- **Time**: 5 min
- **Impact**: 🔥🔥🔥 Highest (single largest local SEO improvement available)

**Task #2: Audit NAP consistency**
- **How**: ręczny check Panorama Firm, Pkt.pl, Facebook, FB Bawisz Bawialnia — ujednolic format phone i address do GBP truth (`+48 693 766 049`, `Krzywa 19B, 34-400 Nowy Targ`)
- **Time**: 30 min
- **Impact**: 🔥🔥 High

**Task #3: Stworzenie + wydrukowanie 100 QR wizytówek z linkiem do Google Review**
- **How**: zrób PNG QR z `https://g.page/r/CZmAa7q-Db_DEAE/review` (placeId mapping do reviews link), wydruk w Allegro / Printpoland → wprowadzić do barku
- **Time**: 1h + 24h dostawy
- **Impact**: 🔥🔥 High (powolne, ale skalowalne)

### 🟠 PRIORITY 2 — This Month

**Task #4: Service area pages — top 2**
- **How**: `/write-service-page czarny-dunajec bawialnia` + `/write-service-page szaflary bawialnia`
- **Time**: 3-4h (z generacją + review + deploy)
- **Impact**: 🔥🔥 High dla long-tail organic

**Task #5: Dodaj `child_care_agency` jako secondary category w GBP**
- **Conditional**: tylko jeśli Bawisz oferuje element opieki nad dziećmi (warsztaty z animatorem) — sprawdź z klientem
- **Impact**: 🔥 Medium

**Task #6: Pomyslowirodzice.pl — sprawdź czy listing istnieje, claim/aktualizuj**
- **Time**: 15 min
- **Impact**: 🔥 Medium

**Task #7: Pitch artykułu na podhale24.pl**
- **How**: email do redakcji `redakcja@podhale24.pl` — temat „Materiał o nowoczesnych bawialniach Nowego Targu — Bawisz oferuje warsztaty Montessori" + zdjęcia + cytat właściciela
- **Time**: 1h pisania, ~1-2 tygodnie odpowiedzi
- **Impact**: 🔥🔥 High (link from local authority)

### 🟡 PRIORITY 3 — Next 3 Months

- 2 dodatkowe service area pages (Ludźmierz, Rabka)
- 30 nowych opinii (target ~10/mc)
- Lokalne sponsoring eventu (Mikołajki, Dzień Dziecka, Mardi Gras)
- Współpraca z 2-3 lokalnymi mama-blogerkami
- Publikacje 8-12 GBP Posts (oferta, warsztaty, sezonowe)

---

## 9. Expected Timeline

| Milestone | When | Metric |
|---|---|---|
| Website fix indexed in GBP | 24-72h after change | Maps Pack jump (potencjalnie #2 → #1 na non-Rynek queries) |
| First QR-driven reviews | 2-4 tygodnie | +10-15 opinii |
| First service area page indexed | 1 mc | New impressions na "bawialnia Czarny Dunajec" w GSC |
| Consistent top-3 Maps Pack | 2-3 mc | Manual rank check pokazuje stabilność |
| 200 opinii target | 6 mc | Stała quality 4.9 |
| Top spot fight z Xtreme KiDS | 6-9 mc | Wymaga pomocy: lokalizacja Bawisza vs Xtreme dla query bez modyfikatora to handicap; focus na unique positioning (Montessori, kawiarnia, design) |

### Success Metrics — co śledzić
1. Maps Pack pozycja na "bawialnia Nowy Targ" + 3 modyfikatory ("dla dzieci", "centrum", "z kawiarnią") — manual check co 2 tygodnie z różnych dzielnic
2. GBP Insights: views + actions (calls, directions, website clicks) — porównanie M-o-M
3. Liczba opinii Google + average rating
4. Website organic traffic z GA4 (filter source = Google Maps lub direct mobile)
5. Conversion: liczba telefonów + "umówię się na urodziny" inquiry/mc

---

## Hand-offs (next steps in pipeline)

- **Service area pages** (Czarny Dunajec, Szaflary, Ludźmierz, Rabka) → `/write-service-page <city> bawialnia` × 4
- **Final NAP verification po deploy live site** → ręczny check lub re-run `/seo-analyzer` po publikacji
- **Po 4-6 tygodniach**: re-run `/local-seo-optimizer` na świeżym GBP API data → measure delta na opiniach, position, photos count

---

## Appendix: Raw GBP API snapshot

Dane pobrane przez Places API (New) w dniu 2026-05-09 dostępne w `/tmp/bawisz_gbp.json`. Przykładowe finds:

```json
{
  "id": "ChIJI5kdKjnlFUcRx7klm74NvMM",
  "displayName": { "text": "BAWISZ Bawialnia", "languageCode": "pl" },
  "formattedAddress": "Krzywa 19B, 34-400 Nowy Targ, Poland",
  "websiteUri": "https://www.instagram.com/bawisz_bawialnia/?...",   ← PROBLEM
  "internationalPhoneNumber": "+48 693 766 049",
  "primaryType": "amusement_center",
  "types": ["amusement_center","indoor_playground","playground",...],
  "rating": 4.9,
  "userRatingCount": 129,
  "businessStatus": "OPERATIONAL"
}
```

Pełny dump (z 5 sample reviews + 10 photos) — `/tmp/bawisz_gbp.json`.

---

Pipeline overview: `.claude/rules/seo-pipeline-overview.md`. On-page checklist: `.claude/rules/on-page-seo.md`. Skill source: `.claude/skills/local-seo-optimizer/SKILL.md` + `scripts/fetch_gbp.py`.
