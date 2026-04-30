# Primitivo III Ragandang — Academic Portfolio

A personal academic portfolio website for Dr. Primitivo III Ragandang, built with Astro and deployed on Vercel.

🌐 **Live site:** [primitivoiiiragandang.com](https://primitivoiiiragandang.com)

---

## Tech Stack

- [Astro](https://astro.build) — Static site framework
- TypeScript — Data layer for CV content
- CSS — Custom styling (no UI framework)
- Vercel — Hosting and deployment

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/bashfulduckling/primitivo-portfolio.git
cd primitivo-portfolio

# Install dependencies
npm install
```

---

## Development

```bash
# Start the local dev server at http://localhost:4321
npm run dev
```

---

## Build & Deployment

```bash
# Build the site for production (outputs to ./dist)
npm run build

# Preview the production build locally
npm run preview
```

The site is deployed automatically via Vercel on every push to the `main` branch.

---

## Folder Structure

```
primitivo-portfolio/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── data/
│   │   └── cv.ts        # All CV/portfolio content (edit this to update the site)
│   ├── layouts/
│   │   └── BaseLayout.astro  # Shared HTML layout (header, footer, nav)
│   ├── pages/
│   │   ├── index.astro  # Home page
│   │   └── cv.astro     # CV/résumé page
│   └── styles/
│       └── global.css   # Global styles
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

---

## Updating Content

All portfolio content lives in **`src/data/cv.ts`**. Edit that file to update:

- Profile information
- Education history
- Research projects
- Publications
- Conference presentations & talks
- Teaching experience
- Honours & awards
- Community engagement

After editing, run `npm run dev` to preview changes locally, then push to `main` to deploy.

---

## License

© 2026 Primitivo III Ragandang. All rights reserved.
