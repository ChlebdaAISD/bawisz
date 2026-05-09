# Used keywords — Bawisz

> Anti-cannibalization log. Każdy primary keyword użyty w content piece zostaje tu zapisany.
> Skille generujące (`/write-blog-post`, `/write-service-page`) automatycznie dopisują wpisy.
> NIE EDYTUJ ręcznie chyba że trzeba retire keyword.

## Active primaries

### "montessori nowy targ"
- **Type:** service
- **URL:** /o-nas/
- **Published:** 2026-05-08
- **Source:** seo/service_keywords.md, sekcja Active (`/o-nas/` cluster)
- **Cluster:**
  - "bawialnia montessori" (✓ z pliku)
  - "przestrzeń montessori dla dzieci nowy targ" (✓ z pliku)
  - "naturalne zabawki dla dzieci nowy targ" (✓ z pliku)
  - "drewniane zabawki dla dzieci nowy targ" (✓ z pliku)
  - "pedagogika montessori nowy targ" (✓ z pliku)
- **Notes:** Strona "O nas" pełni rolę brand/AboutPage z głównym positioning na Montessori. Top-3 SERP dla "montessori nowy targ" — głównie strony przedszkoli Montessori, brak konkurenta łączącego bawialnię + Montessori + kawiarnię. USP: drewniana architektura, naturalne zabawki, model "rodzic bawi się z dzieckiem" (bez animatorów w codziennym wstępie). JSON-LD: AboutPage z embed ChildCare + LocalBusiness reference, BreadcrumbList, FAQPage. Internal links do /urodziny/, /kawiarnia/, /#cennik.

### "warsztaty dla dzieci nowy targ"
- **Type:** service
- **URL:** /warsztaty/
- **Published:** 2026-05-08
- **Source:** seo/service_keywords.md, sekcja Active (`/warsztaty/` cluster)
- **Cluster:**
  - "sensoplastyka nowy targ" (✓ z pliku, niche)
  - "warsztaty plastyczne dla dzieci nowy targ" (✓ z pliku)
  - "zajęcia dla dzieci nowy targ" (✓ z pliku, broader)
  - "warsztaty kreatywne dla dzieci nowy targ" (✓ z pliku)
- **Notes:** Top-3 SERP zdominowany przez Spółdzielczy Dom Kultury (SDK, Al. Kopernika 12, vibe instytucjonalny) + ogólnopolskie strony (kidos.pl, kwitnaceumysly.pl). Lokalnie brak strony łączącej sensoplastykę + plastykę + przestrzeń Montessori. Bawisz USP: drewniana sala Montessori, mama-do-mamy ton, kawiarnia obok dla rodzica, małe grupy (max 8), prowadzące prowadzą zajęcia (wyjątek od reguły self-service Bawisz).

### "kawiarnia nowy targ"
- **Type:** service
- **URL:** /kawiarnia/
- **Published:** 2026-05-08
- **Source:** seo/service_keywords.md, sekcja Active (`/kawiarnia/` cluster)
- **Cluster:**
  - "kawiarnia rodzinna nowy targ" (✓ z pliku)
  - "kawiarnia z bawialnią nowy targ" (✓ z pliku, kluczowy USP)
  - "domowe ciasta nowy targ" (✓ z pliku)
  - "kawa specialty nowy targ" (✓ z pliku)
  - "brownie nowy targ", "sernik nowy targ", "szarlotka nowy targ" (✓ z pliku, longtail menu)
- **Notes:** Top-3 SERP: Bethel Concept (4.8/5, est. 2022, kawiarnia + restauracja, brak komponentu dla dzieci), Szopa Cafe (pierwsza specialty w NT, śniadania, ul. Królowej Jadwigi), brak strony łączącej kawiarnię z bawialnią. Bawisz USP: kawa + domowe ciasta + bawialnia Montessori obok + menu dla dzieci bez cukru. Map Pack zdominowany przez Bethel + Szopa — różnicujemy się rolą "miejsca dla rodzica z dzieckiem".

### "kontakt bawisz nowy targ"
- **Type:** service
- **URL:** /kontakt/
- **Published:** 2026-05-09
- **Source:** seo/service_keywords.md, sekcja Active (`/kontakt/` cluster — brand + kontakt, niska intensywność pozycjonowania)
- **Cluster:**
  - "kontakt" (brand-driven, na własnej domenie)
  - "bawisz nowy targ" (brand-local)
  - "bawialnia nowy targ kontakt" (longtail)
  - "bawialnia nowy targ telefon" (longtail)
  - "bawialnia nowy targ adres" (longtail, NAP)
  - "bawialnia nowy targ godziny" (longtail, hours intent)
- **Notes:** Strona pełni rolę conversion + NAP hub. Design 1:1 z `/urodziny/` (svc-hero, svc-intro, svc-mid-cta, svc-faq, svc-final) plus dwie nowe sekcje `kt-channels` (4 kanały: telefon, Instagram, Messenger, mapa) i `kt-place` (godziny + sticky karta z mapą Google embed). Schema: ContactPage z embed ChildCare + ContactPoint z hoursAvailable, BreadcrumbList, FAQPage z 7 pytaniami (telefon, mapa/parking, godziny, rezerwacje, urodziny, email firmowy, kawiarnia bez biletu). NAP w widocznym HTML: hero, intro, info-card, mid CTA, footer-grid. Internal links wstecz: /urodziny/, /kawiarnia/, /. Top-3 SERP dla "kontakt bawisz nowy targ" — brak konkurencji (brand keyword), priorytet: lokalna wizytówka GBP + spójne NAP wszędzie.

### "bawialnia nowy targ"
- **Type:** service
- **URL:** /
- **Published:** 2026-05-09
- **Source:** seo/service_keywords.md, sekcja Active (root home cluster — primary commercial keyword klienta)
- **Cluster:**
  - "bawialnia montessori nowy targ" (✓ z pliku, USP)
  - "drewniana bawialnia nowy targ" (✓ z pliku, USP)
  - "bawialnia z kawiarnią nowy targ" (✓ z pliku, kluczowy USP)
  - "sala zabaw dla dzieci nowy targ" (✓ z pliku, broader)
  - "bawialnia dla małych dzieci nowy targ" (✓ z pliku, longtail 0-10 lat)
- **Notes:** Strona główna jako hub conversion dla brand+lokalnego keyword. Edycja in-place istniejących komponentów (Hero, About, Offer, Pricing, Menu, Gallery) + nowy `src/data/home.js` z HOME_FAQ (8 pytań) i HOME_META (title 57 chars, desc 135 chars, canonical, ogImage). FAQ section dodana do `Home.jsx` między Testimonials a Hours, używa globalnych klas `.svc-faq*` (z service-page.css). Schema (po prerender): ChildCare z aggregateRating 4.9/5 z 129 reviews + BreadcrumbList + FAQPage. Top-3 SERP "bawialnia nowy targ" — brak konkurenta łączącego bawialnia + Montessori + kawiarnia + transparentny cennik (25/29/33/45 zł). USP: drewniana sala 220 m², 0-10 lat, model "rodzic bawi się z dzieckiem" (bez animatorów w codziennym wstępie), kawa specialty + domowe ciasta obok. Hero H1 zawiera tokeny "bawialnia/nowym/targu" (HARD GATE pass). Polish quality review inline (master TOV § 4b): poprawiono "drewniana architektura sali" → "drewniany wystrój sali" (rule 4b.6).

### "oferta dla przedszkoli nowy targ"
- **Type:** service
- **URL:** /oferta-grupowa/
- **Published:** 2026-05-09
- **Source:** seo/service_keywords.md, sekcja Active (`/oferta-grupowa/` cluster — verified primary)
- **Cluster:**
  - "wyjścia grupowe nowy targ" (✓ z pliku)
  - "wyjścia dla przedszkoli nowy targ" (✓ z pliku)
  - "grupy zorganizowane bawialnia nowy targ" (✓ z pliku)
  - "bawialnia dla szkół nowy targ" (✓ z pliku)
  - "imprezy dla przedszkoli nowy targ" (✓ z pliku)
- **Notes:** Top-3 SERP rynku oferty grupowej zdominowany przez ogólnopolskie placówki (Kinder Park Kraków, Mała Panda, Hip-Hop). Lokalnie w Nowym Targu — żadna konkurencyjna bawialnia nie ma dedykowanej landing page dla wyjść przedszkolnych. USP Bawisz: drewniana sala Montessori + transparentny cennik (15/23/35 zł), faktura na placówkę z odroczonym terminem, kawa gratis dla 1 opiekuna na 5 dzieci, integracja z urodzinami przedszkolaka. Schema: Service @type z 3 Offer entries, BreadcrumbList, FAQPage z 8 pytaniami obsługującymi local intent.

<!-- Format wpisu (auto-generowany przez skille):

### "<primary keyword>"
- **Type:** blog | service
- **URL:** /blog/<slug>/ lub /uslugi/<slug>/
- **Published:** YYYY-MM-DD
- **Source:** <plik>.md (np. seo/blog_keywords.md, sekcja Active)
- **Cluster:**
  - "<secondary 1>" (✓ z pliku | invented)
  - "<secondary 2>" (✓ z pliku | invented)
  - ...
- **Notes:** krótka adnotacja audytowa (np. "competitor X covered topics A,B; we added C,D")

-->

## Retired primaries

<!-- Keywords wycofane (np. strona usunięta, keyword nieaktualny po refreshu treści).
Format jak wyżej + dopisek **Retired:** YYYY-MM-DD i powód.
-->
