# E&E Visuals — Vercel deployment

Ovaj paket je pripremljen za Vercel kao Next.js projekt.

## Objava bez GitHuba

1. Raspakujte ZIP na računaru.
2. Otvorite Terminal u raspakovanom folderu.
3. Pokrenite `npx vercel` i potvrdite prijavu na Vercel.
4. Za postojeći projekt izaberite `No`, a za naziv možete koristiti `eevisuals`.
5. Prihvatite prepoznate Next.js postavke bez izmjena.
6. Za produkcijsku objavu pokrenite `npx vercel --prod`.

## Domena

U Vercelu otvorite projekt, zatim `Settings` → `Domains` i dodajte:

- `eevisuals.de`
- `www.eevisuals.de`

Vercel će prikazati DNS zapise. Unesite baš te vrijednosti u GoDaddy DNS postavkama. Ne brišite MX zapise za e-mail.

## Napomena

Kontakt forma trenutno prikazuje lokalnu potvrdu, ali još ne šalje e-mail. Impressum i Datenschutz treba dopuniti stvarnim poslovnim podacima prije konačne javne objave.
