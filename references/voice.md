# Voice — Bawisz

> **NIE jest to samodzielny plik.** Bazą głosu dla każdej treści jest `.claude/rules/tone-of-voice.md` (master TOV). Ten plik zawiera **tylko dane specyficzne dla Bawisz** — autor, język, banned words klienta, ulubione zwroty, znane historie.
>
> Każdy skill generujący treść (`write-blog-post`, `write-service-page`) czyta NAJPIERW master TOV, POTEM ten plik. Reguły craftu (rytm zdań, anti-AI checklist, banned phrases ogólne, frameworki AIDA/PAS/4C/FAB) są w master — nie powtarzamy tu.

---

## Kto pisze (Author byline)

**Bez bylinów osobistych.** Klient świadomie nie eksponuje imienia, nazwiska, certyfikatów ani lat doświadczenia właścicielki. Treści podpisujemy generycznie: `Zespół Bawisz` lub bez podpisu.

**Persona, do której piszemy z perspektywy marki:** ciepła, doświadczona mama-założycielka, która prowadzi miejsce dla mam takich jak ona. Ten głos pojawia się w narracji ("rozumiem, też miałam taki tydzień"), ale **nie podpisujemy go imieniem**.

**Bio (2-3 zdania na stopkę bloga):**
Bawisz to bawialnia Montessori i kawiarnia w Nowym Targu. Drewniana architektura, naturalne zabawki, miejsce gdzie spędzasz czas ze swoim dzieckiem przy dobrej kawie.

**Styl marki (jak rozmawiamy z mamą-klientką):**
Ciepło, mama-do-mamy, na "Ty" z klasą. Bez wykrzykników, bez emoji w body, bez infantylnych zdrobnień. Konkrety zamiast ogólników. Krótkie zdania. Humor lekki, self-deprecating ("każda mama zna ten dzień").

> Ten styl jest tym, co odróżnia treści Bawisz od konkurencji. Master TOV daje strukturę i jakość — voice klienta daje **głos konkretnej marki**.

---

## Język

`language: pl-casual`

- "Ty/Wy" dopuszczalne, wciąż profesjonalne (master TOV § 3 reguła 7)
- Bez wykrzykników w body (ok w cytatach z opinii Google)
- Bez emoji w body
- Mama-do-mamy: "wiesz, jak to jest", "też tam byłam", "gdy maluch (NIE) potrzebuje wytchnienia" — z empatią, bez patosu

---

## Banned words klienta (uzupełniają master)

**Master TOV § 5 zawiera bazę banned phrases (dla wszystkich klientów).** Tutaj dodajemy specyficzne dla Bawisz:

- `tani` — psuje pozycjonowanie premium; zamiast tego: konkretna cena z `stats.md`
- `najtańszy` — j.w.
- `maluchy` — infantylne zdrobnienie; piszemy `dzieci`
- `maluszki` — j.w.
- `bąbelki` — j.w.
- `brzdące` — j.w.
- `pociechy` — frazes; piszemy `dzieci` lub `Twoje dziecko`
- `plac zabaw` — Bawisz to bawialnia Montessori w zamkniętym wnętrzu, nie miejski plac zabaw; różnicowanie marki
- `animatorzy zajmą się dzieckiem` — KLUCZOWE: w Bawisz dziecko bawi się **z rodzicem**, nie z personelem (patrz § Specyficzne dla branży)
- `nasz zespół pobawi się z Twoim dzieckiem` — j.w. (wyjątek: warsztaty i urodziny — tam prowadzący tak)
- `oddasz dziecko pod opiekę` — j.w.
- `zostaw dziecko u nas` — j.w.

> Format: jedna linia per fraza. Komentarz po `—` jeśli warto wyjaśnić powód.

---

## Pułapki w opisach menu kawiarnianego (specyficzne dla Bawisz)

Bawisz ma kawiarnię z latte, syropami, ciastami. Opisy menu częste w content — często wpadają w 2 błędy gramatyczne (master TOV § 4b.7 i 4b.8 zawierają reguły ogólne; tu konkretne case'y dla naszych opisów):

- ❌ "**latte z syropem wanilia, orzech albo karmel**" → ✅ "**latte z syropem waniliowym, orzechowym lub karmelowym**" (przymiotnik w narzędniku po "syropem")
- ❌ "**herbata o smaku malina, mięta**" → ✅ "**herbata o smaku malinowym lub miętowym**" (przymiotnik w miejscowniku)
- ❌ "**owoce, mleko, soczki, kanapka z dżemem**" → ✅ "**owoce, mleko, soczki, kanapki z dżemem**" (spójność l.mn. w listach)

**Test przed shipowaniem:** każdą enumerację po przyimku ("z", "o", "na") czytaj głośno z każdym elementem osobno. Jeśli "z syropem wanilia" brzmi jak "z syropem [pauza] wanilia" — błąd.

---

## Ulubione zwroty / words we lean into

Frazy, które chętnie powtarzamy w treściach Bawisz (uzupełniają sekcje "konkretne liczby" i "pokaż, nie deklaruj" master TOV § 3):

- `drewniana architektura` — fizyczny opis przestrzeni, mocny brand differentiator
- `naturalne zabawki` — Montessori, drewno, bez plastiku
- `przestrzeń Montessori` zamiast `bawialnia` (gdy chcemy podkreślić jakość)
- `bawisz się ze swoim dzieckiem` — rdzeń value proposition (rodzic + dziecko, nie animator + dziecko)
- `przy kawie` / `przy ciastku` — kawiarnia jest częścią doświadczenia, nie dodatkiem
- `Ocena 4.9/5 w Google` — kanoniczna fraza social proof (NIE podawaj konkretnej liczby opinii — zmienia się co tydzień, szybko stareje w treści)
- `ul. Krzywa 19B, Nowy Targ` — adres pełen w body min. raz na podstronę (NAP consistency dla local SEO)
- `od 0 do 10 lat` — przedział wiekowy dzieci, konkret zamiast "dla dzieci"
- `Podhale` — szerszy zasięg geo (poza samym Nowym Targiem)

---

## Specyficzne dla branży (KRYTYCZNE — nie pomiń)

**Model biznesowy Bawisz:**
- To bawialnia + kawiarnia — **nie klub dziecięcy z opieką**
- Rodzic przychodzi razem z dzieckiem, **rodzic bawi się z dzieckiem**
- Właścicielka i zespół **nie animują dzieci** w czasie zwykłego wstępu
- Kawiarnia obok = rodzic ma kawę i ciasto, dziecko obok bawi się przy naturalnych zabawkach Montessori

**Co to znaczy dla copy:**
- ❌ NIGDY: "Zostaw dziecko u nas i odpocznij", "Nasz zespół zajmie się Twoim maluchem", "Animatorzy zabawią dzieci"
- ✅ ZAWSZE: "Bawisz się ze swoim dzieckiem w przestrzeni zaprojektowanej tak, że to ma sens", "Pijesz kawę obok, dziecko ma wszystko czego potrzebuje pod ręką", "Wreszcie miejsce, gdzie nie musisz pilnować na każdym kroku — przestrzeń jest bezpieczna i przemyślana"

**Wyjątki — gdy zespół Bawisz pracuje aktywnie z dziećmi:**
- **Urodziny** — zorganizowana impreza, prowadzący prowadzi program (jeśli klient tak oferuje — TODO ustal w `stats.md`)
- **Warsztaty** (sensoplastyka, plastyka) — prowadzący prowadzi zajęcia, tu można pisać "prowadzimy", "uczymy"

**Ton marki:**
- Mama-do-mamy. Empatia bez patosu.
- Pokazuje że rozumie codzienność rodzica małego dziecka (zmęczenie, brak czasu dla siebie, potrzeba wyjścia z domu).
- Brand premium, ale nie pretensjonalny. Drewniana architektura i Montessori to dowody jakości — nie powód do snobizmu.

**Pozycjonowanie cenowe:**
- Premium względem zwykłych miejskich placów zabaw
- Brand stoi na jakości przestrzeni (drewniana architektura, naturalne zabawki, kawiarnia w pełni działająca) — nie na cenie
- Nigdy nie konkurujemy ceną. Zawsze pokazujemy co dostajesz za tę cenę (TODO uzupełnij `stats.md` o cennik)

---

## Stories i opinions

Stories i opinions klienta są w osobnych plikach (jeśli klient ma):
- [stories.md](stories.md) — anegdoty z praktyki (TODO: brak)
- [opinions.md](opinions.md) — mocne poglądy branżowe (TODO: brak)
- [humour.md](humour.md) — jak żartujemy mama-do-mamy

Skille generujące treść mają instrukcję: **w każdym blog postcie wpleść 1 story (jeśli istnieje) + max 1 opinia (jeśli istnieje)**. Detale w master TOV § 2 etap 2.

---

## One-line summary (specyficzne dla Bawisz)

**Bawisz to mama-do-mamy: ciepło, na "Ty", bez infantylnych zdrobnień, bez fałszywych obietnic "zostaw dziecko u nas". Pokazujemy konkretną przestrzeń (drewniana architektura, naturalne zabawki, kawiarnia obok) gdzie ty bawisz się ze swoim dzieckiem przy dobrej kawie. Master TOV daje craft, ten plik daje głos.**
