# biagio14-unicam.github.io

Sito personale di Biagio Ambrosio, astrofisico e divulgatore scientifico.
Online su https://biagio14-unicam.github.io

Sito statico in HTML e CSS, senza build: GitHub Pages pubblica i file così come sono.

## Struttura

- `index.html` — homepage con presentazione e competenze
- `cv.html` — percorso, formazione, pubblicazioni
- `progetti.html` — progetti con filtri per tipo
- `contatti.html` — canali di contatto e modulo (apre il programma di posta)
- `assets/css/style.css` — stile (colori e font sono variabili in cima al file)
- `assets/js/main.js` — filtri dei progetti e modulo contatti
- `assets/img/` — foto e favicon

## Come aggiornare

Per aggiungere un progetto, copia un blocco `<article class="project" ...>` in `progetti.html`
e imposta `data-cat` su una delle categorie dei filtri (Mostre, Realtà virtuale, Scuole, Festival, Talk).
Le modifiche salvate sul branch `main` vanno online in un paio di minuti.
