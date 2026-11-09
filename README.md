# E&E Visuals · Contact Sheet

Kompletna svijetla verzija portfolija. Folderi `app/` i `public/` sadrže kod i
medije. Uključeni su REC portret, lokalne fotografije te videi Polo Watch i
Uštipci. Golf VI GTI koristi postojeću YouTube poveznicu.

## Lokalni pregled

Koristi Node.js 22.13 ili noviji. Otvori terminal u folderu u kojem je
`package.json` i pokreni:

```bash
npm ci
npm run dev
```

Otvori http://localhost:3000. Za provjeru produkcijske verzije pokreni
`npm run build` pa `npm start`.

## Novi projekt na Vercelu

1. Raspakuj ZIP i otvori folder `EE-Visuals-Contact-Sheet`.
2. Napravi novi GitHub repozitorij, npr. `eevisuals-contact-sheet`. U njegov
   glavni direktorij dodaj sadržaj raspakovanog foldera. U repozitoriju
   `package.json`, `app/` i `public/` trebaju biti na istom nivou.
3. Na Vercelu izaberi **Add New → Project** i uvezi novi repozitorij. Odaberi
   **Next.js**, ostavi **Root Directory** na `./` i klikni **Deploy**.
4. Otvori novu `.vercel.app` adresu i provjeri svijetlu podlogu, žute oznake,
   kategorije i videe.
5. Prije prebacivanja javne domene dopuni stvarne podatke u postojećim
   šablonima `app/impressum/page.tsx` i `app/datenschutz/page.tsx`.
6. U Vercelovim postavkama domene premjesti `eevisuals.de` i
   `www.eevisuals.de` na novi projekt. Provjeri obje adrese prije nego što
   ukloniš stari projekt.
