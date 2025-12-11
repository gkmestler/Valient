# Valient Website

A modern, responsive marketing website for Valient - a private equity firm that buys and grows blue-collar businesses.

## Features

- Mobile-first responsive design
- Clean, modern aesthetic matching the Canva design
- Team member profiles with photos
- Strategic advisors section
- Smooth scroll animations
- Sticky header with transparency effects

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- CSS Modules (pure CSS, no frameworks)
- Google Fonts (Montserrat) + Georgia serif

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
valient-website/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Statistics.tsx   # Stats strip
│   ├── AboutPE.tsx      # About section
│   ├── Leadership.tsx   # Team section
│   ├── Advisors.tsx     # Advisors section
│   └── Footer.tsx       # Footer
├── public/
│   └── images/          # Team member photos
└── package.json
```

## Build for Production

```bash
npm run build
npm run start
```

## Color Palette

- White: #FFFFFF
- Light Blue: #C3E2FF
- Bright Blue: #62B2FF
- Black: #000000