# Nexbuild Studios — Official Website

![Nexbuild Studios](https://img.shields.io/badge/Nexbuild-Studios-385144?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-4ade80?style=for-the-badge)
![License](https://img.shields.io/badge/License-Private-lightgrey?style=for-the-badge)

> Web Development & AI Studio — Based in Cape Town, serving clients worldwide.

## Overview

The official website for **Nexbuild Studios**, a web development and AI solutions studio specialising in high-performance websites, web applications, mobile apps, AI-powered agents, and SEO strategies.

**Live URL:** [nexbuildstudios.co.za](https://nexbuildstudios.co.za) *(update once deployed)*

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — lightweight, no framework overhead
- **Google Fonts** — Syne (display), Outfit (body), JetBrains Mono (mono)
- **Deployment** — Vercel / Netlify
- **Domain** — nexbuildstudios.co.za / nexbuildstudios.com

## Project Structure

```
nexbuild-studios-site/
├── index.html          # Main single-page website
├── assets/
│   ├── images/         # Portfolio screenshots, logos, favicons
│   ├── docs/           # Downloadable resources (proposals, case studies)
│   └── icons/          # Custom icons and SVGs
├── css/
│   └── styles.css      # Extracted styles (when ready to split)
├── js/
│   └── main.js         # Extracted scripts (when ready to split)
├── .gitignore
├── README.md
└── LICENSE
```

> **Note:** The site currently ships as a single `index.html` file for simplicity. As the site grows into multi-page, styles and scripts will be extracted into their own directories.

## Local Development

```bash
# Clone the repo
git clone https://github.com/nexbuild-studios/nexbuild-studios-site.git

# Navigate into the project
cd nexbuild-studios-site

# Open in browser (no build step needed)
open index.html

# Or use a local server
npx serve .
```

## Deployment

### Vercel (Recommended)
1. Connect the GitHub repo to [Vercel](https://vercel.com)
2. Set the root directory to `/`
3. No build command needed (static HTML)
4. Point your custom domain in Vercel dashboard

### Netlify
1. Connect the GitHub repo to [Netlify](https://netlify.com)
2. No build command, publish directory: `/`
3. Configure custom domain in site settings

## Roadmap

- [x] Single-page launch with all sections
- [x] AI Agents showcase section
- [ ] Add real portfolio screenshots
- [ ] Connect contact form backend (Formspree / custom)
- [ ] Add blog section for SEO content
- [ ] Expand to multi-page structure
- [ ] Add case study pages for each project
- [ ] Implement dark/light theme toggle
- [ ] Performance audit and optimisation

## Brand Guidelines

| Element         | Value                          |
|-----------------|--------------------------------|
| Primary Color   | Moss Velvet `#385144`          |
| Background      | Cloud Milk `#f8f5f2`           |
| Display Font    | Syne (700, 800)                |
| Body Font       | Outfit (300, 400, 500, 600)    |
| Mono Font       | JetBrains Mono (400, 500)      |
| Border Radius   | 8px (buttons), 16px (cards)    |

## Contact

- **Email:** hello@nexbuildstudios.com
- **Location:** Cape Town, South Africa

---

© 2026 Nexbuild Studios. All rights reserved.
