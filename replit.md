# Portfolio Website

## Overview
A React-based portfolio website built with Vite and Tailwind CSS. The site showcases professional experience, education, skills, projects, and certificates.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM

## Project Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components (navigation, overlays)
│   └── ...           # App-level components
├── pages/
│   └── portfolio-landing-page/
│       └── components/  # Page-specific sections
├── styles/           # Global CSS and Tailwind config
├── App.jsx           # Root component
├── Routes.jsx        # Route definitions
└── index.jsx         # Entry point
```

## Development
- **Start dev server:** `npm run start`
- **Build:** `npm run build`
- **Port:** 5000

## Deployment
Configured for static deployment. Build output goes to the `build/` directory.
