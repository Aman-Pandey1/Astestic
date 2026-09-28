# Olive Aesthetics — Landing Page

React + Vite + Tailwind CSS landing page for **Dr. (Maj) Pooja Yadav / Olive Aesthetics**.

## Run locally

```bash
npm install
npm run dev
```

Browser mein open hoga: `http://localhost:5173`

## Build for production

```bash
npm run build
npm run preview
```

## Images add karna

Apni images `public/assets/` folder mein daalo. Details ke liye dekho:

`public/assets/README.md`

Jab tak images nahi hain, placeholder images automatically dikhengi.

## Structure

```
src/
  components/
    Navbar.jsx      — Header + mobile menu
    Hero.jsx        — Doctor profile + highlights + consultation form
    About.jsx       — About doctor + info box
    Services.jsx    — 11 service cards
    Facility.jsx    — Affiliated medical facility
    Reviews.jsx     — Patient reviews + before/after
    Footer.jsx      — Footer
  data/content.js   — All text content
public/assets/      — Logos & images (yahan daalo)
```
