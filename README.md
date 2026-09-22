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
│   ├── mindful-journey.html       ← Projektseite "Mindful Journey" (mit Figma-Prototyp)
│   └── xletix.html                ← Storytelling-Case-Study zum XLETIX-Praktikum
├── assets/
│   ├── css/style.css              ← komplettes Design-System (Farben, Typo, Layout, Hell/Dunkel)
│   ├── js/main.js                 ← Menü, Live-Uhr, Theme-Umschalter, Scroll-Animationen
│   └── images/
│       ├── itm/                   ← Bilder aus dem ITM-Projekt
│       ├── xletix/                ← Bilder aus dem XLETIX-Praktikumsbericht
│       └── mindful/               ← Platz für eigene Screenshots der App
└── README.md
```

## Hell- und Dunkelmodus

Oben rechts im Menü gibt es zwei kleine Kreis-Buttons (Sonne / Mond) zum Umschalten.
Die Wahl wird im Browser gespeichert, sodass sie beim nächsten Besuch erhalten bleibt.
Beide Varianten nutzen deine Markenfarben:

- Dunkel: tiefes Plum `#461248` als Hintergrund, Orange `#f2a15f` als Akzent
- Hell: Weiß `#ffffff` als Hintergrund, Weinrot `#a93747` als Akzent

Alle Farben sind zentral als CSS-Variablen in `assets/css/style.css` hinterlegt (oben im
`:root`-Block für Dunkel, im `[data-theme="light"]`-Block für Hell).

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

Es gibt jetzt drei Vorlagen zur Auswahl: `projects/itm.html` (klassische Case Study),
`projects/xletix.html` (Storytelling mit vielen Bildern) und `projects/mindful-journey.html`
(mit eingebettetem Prototyp). Einfach die passendste kopieren:

1. Datei kopieren und umbenennen, z. B. `projects/mein-projekt.html`.
2. Im neuen File: Titel, Texte, Bilder und Meta-Angaben (Rolle, Tools, Kontext) anpassen.
3. Eigene Bilder in einen neuen Unterordner legen, z. B. `assets/images/mein-projekt/`.
4. In `index.html` im Abschnitt `<!-- ============================= WORK ============================= -->`
   die Platzhalter-Karte (`work-card is-placeholder`) durch eine neue `<a class="work-card">`
   ersetzen (einfach eine bestehende Karte kopieren und Link/Texte/Bild anpassen) — die
   Platzhalter-Karte danach wieder ans Ende setzen, damit weiterhin "+ weitere Projekte"
   angezeigt wird.

## Mindful Journey: Figma-Prototyp

Die Seite `projects/mindful-journey.html` bindet den echten Figma-Prototyp per `<iframe>`
ein, direkt klickbar in der Seite. Falls sich der Figma-Link je ändert: neuen Link bei
Figma über "Share → Embed" holen und die `src`-URL im `<iframe>` in `mindful-journey.html`
ersetzen.

## Marke: Logo, Slogan und Schriften

- Dein Monogramm-Logo ist jetzt im Header jeder Seite eingebunden (`assets/images/brand/monogram.jpg`).
- Dein LinkedIn-Banner mit dem Slogan „Menschen verstehen. Ideen gestalten. Wirkung schaffen."
  erscheint als eigener Abschnitt auf der Startseite, direkt nach dem Marquee
  (`assets/images/brand/banner.jpg`).
- Schriften: Überschriften laufen über **Fraunces** (elegante Serifenschrift), Fließtext über
  **Open Sans**. Hinweis: **TAN Pearl** ist kostenpflichtig und nur für den privaten Gebrauch
  lizenzfrei, deshalb lässt sie sich nicht rechtssicher über eine freie Schriften-CDN einbinden.
  Fraunces kommt ihr im Charakter (elegant, verspielte Serife) sehr nahe. Falls du eine
  kommerzielle TAN-Pearl-Lizenz besitzt, kannst du die Schriftdateien (.otf/.woff2) hochladen,
  dann binde ich sie per `@font-face` direkt ein statt Fraunces zu laden.

- Hintergrund: `#0c0c0e`, Karten: `#17171b`, Linien: `#26262b`
- Text: `#f3f1ed` (hell), `#a9a7a3` (gedimmt), `#6f6d6a` (schwach)
- Akzent: `#a06fc4` (Violett) & `#00afaf` (Türkis) — beide direkt aus deinem
  ITM-Farbsystem übernommen, damit die Portfolio-Seite und das gezeigte Projekt stimmig wirken
- Headlines: „Big Shoulders Display", Fließtext: „Inter", Labels/Meta: „IBM Plex Mono"
  (alle drei werden automatisch von Google Fonts geladen)

Alle Werte liegen als CSS-Variablen ganz oben in `assets/css/style.css` — dort lässt sich
z. B. die Akzentfarbe an einer einzigen Stelle ändern.
