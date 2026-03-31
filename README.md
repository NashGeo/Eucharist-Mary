# ✦ Eucharist & Mary

> *"The Eucharist is my highway to heaven."* — St. Carlo Acutis

A sacred, interactive devotional website presenting the truths of the Holy Eucharist and the Virgin Mary through a beautiful node-based experience.

**St. Carlo Acutis, pray for us!**

---

## Features

- 🕸️ **Interactive Node Graph** — Click the main node to expand child nodes that orbit at random positions each time, connected by elegant curved SVG lines
- 🌗 **Light / Dark Mode** — Warm parchment light theme · Deep sacred dark theme
- 🌍 **19 Languages** — Language selector UI ready for future translations
- 📖 **Side Panel** — Slides in with full content, image placeholders, RSV-2CE note for Scripture
- 🎨 **Sacred Aesthetic** — Cormorant Garamond serif, gold accents, illuminated manuscript feel
- 📱 **Pan & Zoom Canvas** — Scroll to zoom, drag to pan, floating control bar, touch support
- ⚡ **Performance First** — ~11 kB gzipped JS (app logic), fast load for slow connections

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Vercel auto-detects Vite — click **Deploy**

---

## Adding Content

All content lives in **one file**: `src/data/content.js`

To add or update node text:
```js
// src/data/content.js
content: [
  {
    heading: 'Your Section Title',
    body: `Your verified theological content here...`,
  },
  // add more sections...
]
```

To add an image, set the `image` field on any node:
```js
image: '/images/your-image.jpg',
```
(Place images in the `public/images/` folder.)

To add a new language, add to the `LANGUAGES` array:
```js
{ code: 'ko', label: '한국어' }
```

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| CSS Custom Properties | Theming (light/dark) |
| SVG | Curved connecting lines |
| Google Fonts | Cormorant Garamond + Inter |

---

## Project Structure

```
src/
├── data/
│   └── content.js          ← ALL content lives here
├── components/
│   ├── Header.jsx           ← Title, tabs, language, dark mode
│   ├── HintBar.jsx          ← Animated hint bar
│   ├── LanguageSelector.jsx ← Collapsible language tray
│   ├── Canvas.jsx           ← Pan/zoom canvas + full node graph
│   └── SidePanel.jsx        ← Sliding content panel
├── App.jsx                  ← Global state & layout
├── main.jsx
└── index.css               ← Design tokens (CSS vars), animations
```

---

*Ad Majorem Dei Gloriam*
