# Portfolio — Elisabeth Kasanzewa

Statische Portfolio-Website (reines HTML/CSS/JS, kein Build-Prozess nötig).
Stil angelehnt an [vividmotion.co](https://www.vividmotion.co/): dunkler Hintergrund,
große Headlines, Lauftext-Marquee, Projekt-Grid.

## Struktur

```
portfolio/
├── index.html                     ← Startseite (Hero, Über mich, Erfahrung, Skills, Kontakt)
├── projects/
│   ├── itm.html                   ← Projektseite "ITM"
│   └── mindful-journey.html       ← Projektseite "Mindful Journey"
├── assets/
│   ├── css/style.css              ← komplettes Design-System (Farben, Typo, Layout)
│   ├── js/main.js                 ← Menü, Live-Uhr, Scroll-Animationen
│   └── images/
│       ├── itm/                   ← Bilder aus dem ITM-Projekt
│       └── mindful/                ← hier eigene Screenshots der App ablegen
└── README.md
```

## Lokal ansehen

Einfach `index.html` doppelklicken und im Browser öffnen — funktioniert ohne Server.

## Auf GitHub veröffentlichen (GitHub Pages)

Da dieses Environment nicht mit deinem GitHub-Account verbunden ist, lädst du die Dateien
einmalig manuell hoch (dauert 2 Minuten):

1. Gehe zu `https://github.com/elisabethkas/elisabethkas.github.io`
   (falls das Repo noch nicht existiert: auf GitHub „New repository" → Name muss exakt
   `elisabethkas.github.io` sein, damit GitHub Pages automatisch aktiv wird).
2. Klicke auf **Add file → Upload files**.
3. Ziehe **den gesamten Inhalt** dieses `portfolio`-Ordners (nicht den Ordner selbst,
   sondern `index.html`, `projects/`, `assets/`, `README.md`) in das Upload-Feld.
4. Unten bei „Commit changes" auf **Commit changes** klicken.
5. Nach ca. 1 Minute ist die Seite live unter:
   **https://elisabethkas.github.io**

Falls Pages nicht automatisch aktiv ist: Repo → **Settings → Pages** → unter „Build and
deployment" → Source: **Deploy from a branch** → Branch: **main** / Ordner: **/ (root)** → Save.

## Neues Projekt hinzufügen

1. `projects/itm.html` kopieren und umbenennen, z. B. `projects/mein-projekt.html`.
2. Im neuen File: Titel, Texte, Bilder und Meta-Angaben (Rolle, Tools, Kontext) anpassen.
3. Eigene Bilder in einen neuen Unterordner legen, z. B. `assets/images/mein-projekt/`.
4. In `index.html` im Abschnitt `<!-- ============================= WORK ============================= -->`
   die Platzhalter-Karte (`work-card is-placeholder`) durch eine neue `<a class="work-card">`
   ersetzen (einfach eine bestehende Karte kopieren und Link/Texte/Bild anpassen) — die
   Platzhalter-Karte danach wieder ans Ende setzen, damit weiterhin "+ weitere Projekte"
   angezeigt wird.

## Mindful-Journey-Screenshots ergänzen

Die Seite `projects/mindful-journey.html` enthält aktuell drei Platzhalter-Kacheln
(„Onboarding", „Home", „Übung"). Sobald du Screenshots aus Figma exportiert hast:

1. Bilder nach `assets/images/mindful/` legen (z. B. `onboarding.png`, `home.png`, `uebung.png`).
2. In `mindful-journey.html` die drei `<div class="app-mock">…</div>` durch
   `<img src="../assets/images/mindful/onboarding.png" alt="…">` (in ein `.figure`-Div
   gepackt wie bei den ITM-Bildern) ersetzen.

## Farb- und Typografie-System

- Hintergrund: `#0c0c0e`, Karten: `#17171b`, Linien: `#26262b`
- Text: `#f3f1ed` (hell), `#a9a7a3` (gedimmt), `#6f6d6a` (schwach)
- Akzent: `#a06fc4` (Violett) & `#00afaf` (Türkis) — beide direkt aus deinem
  ITM-Farbsystem übernommen, damit die Portfolio-Seite und das gezeigte Projekt stimmig wirken
- Headlines: „Big Shoulders Display", Fließtext: „Inter", Labels/Meta: „IBM Plex Mono"
  (alle drei werden automatisch von Google Fonts geladen)

Alle Werte liegen als CSS-Variablen ganz oben in `assets/css/style.css` — dort lässt sich
z. B. die Akzentfarbe an einer einzigen Stelle ändern.
