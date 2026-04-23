# Instrucțiuni pentru Publicare (Hosting)

Pentru a publica acest site pe un host (de exemplu: cPanel, Netlify, Vercel, GitHub Pages):

1. **Folderul `dist`**: Aceasta este versiunea finală a site-ului. Trebuie să încarci tot conținutul acestui folder în rădăcina serverului tău (de obicei `public_html`).
2. **Fișierul `.htaccess`**: L-am inclus în folderul `public` (și va apărea în `dist` după build). Acesta ajută la gestionarea rutelelor în cazul în care folosești un server Apache.
3. **Imagini**: Am corectat link-ul către imaginea de pe Imgur pentru a fi afișată direct.

### Cum generezi fișierele din nou:
Dacă faci modificări, rulează comanda:
`npm run build`

Fișierele gata de urcat pe host vor fi mereu în folderul `dist`.
