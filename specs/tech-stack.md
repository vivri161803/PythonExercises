# Tech Stack

The application uses a lightweight, modern frontend stack optimized for Vercel deployment without the overhead of heavy frameworks.

## Core Technologies

- **HTML5:** Semantic markup structure.
- **TypeScript (Vanilla):** Strongly typed JavaScript without a framework for maximal performance.
- **Vite:** Next-generation frontend tooling used as a bundler and local development server.

## Architecture

- **Native Web Components:** Encapsulated HTML, CSS, and JS logic (`<header-component>`, `<nav-component>`, `<exercise-card>`).
- **Centralized Configuration:** All content (metadata and 20 Python exercises) is dynamically driven by a strongly typed `src/config.ts`.

## Styling & UI

- **Tailwind CSS:** Utility-first CSS framework for layout, responsive design, and applying the dark mode aesthetic.
- **Prism.js:** Lightweight syntax highlighter for formatting Python code snippets with a dark theme.

## 3D & Graphics

- **Three.js:** Used to render an interactive particle system of floating ASCII characters in the background.
