# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio site for Mohammad Bouland, built with vanilla HTML/CSS/JS and Three.js for a 3D Rubik's cube background animation. No build step required.

## Development Commands

```bash
npm start          # Serve locally at http://localhost:8000 (runs python -m http.server 8000)
```

No build, lint, or test commands exist. This is a pure static site with no bundler or transpiler.

## Architecture

### File Structure

- `index.html`, `projects.html`, `skills.html`, `404.html` — The four pages; all content lives directly in HTML
- `src/scripts/cube.js` — `RubiksCube` module (IIFE pattern): `create()`, `rotate()`, `colors`
- `src/scripts/main.js` — Homepage Three.js scene setup and animation loop
- `src/scripts/projects-background.js` — Shared Three.js scene for `projects.html` and `skills.html`
- `src/styles/main.css`, `projects.css`, `skills.css` — Per-page stylesheets

### Three.js Integration

Each page independently initializes a Three.js scene with:
1. `scene`, `camera` (PerspectiveCamera), `renderer` (WebGLRenderer with alpha)
2. Lighting via `setupLighting()` (ambient + directional)
3. Mouse tracking for camera parallax via `setupMouseInteraction()`
4. Animation loop with `requestAnimationFrame`

Three.js is loaded from CDN (`cdnjs.cloudflare.com`, r128). `cube.js` must be loaded before the page-specific script.

### Layered Layout Pattern

All pages use a fixed two-layer layout:
- `#canvas-container` — `z-index: 1`, `opacity: 0.3`, holds the Three.js `<canvas>`
- `.content` — `z-index: 10`, fixed overlay with radial gradient background for readability

### RubiksCube Module

`cube.js` exports a single IIFE global `RubiksCube` with:
- `RubiksCube.create()` — Returns a `THREE.Group` of 27 meshes arranged in a 3×3×3 grid
- `RubiksCube.rotate(cube, xDelta, yDelta, zDelta)` — Applies rotation deltas each frame
- `RubiksCube.colors` — Color constants for cube faces

### Deployment

- Hosted on GitHub Pages; `CNAME` file contains `boulandm.com`
- DNS via AWS Route 53; email via Cloudflare Email Routing
- Pushing to `main` deploys automatically
