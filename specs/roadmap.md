# Roadmap

The implementation is broken down into the following manageable phases:

## Phase 1: Setup & Configuration
- Initialize Vite project with Vanilla TypeScript template.
- Install and configure Tailwind CSS and PostCSS.
- Install Three.js, Prism.js, and related type definitions.

## Phase 2: Core Data & Styling
- Define the global CSS (`style.css`) incorporating Tailwind directives and core variables.
- Create `src/config.ts` to centralize the app's metadata and Python exercises.

## Phase 3: Interactive Background
- Implement `ThreeBackground.ts` to handle the Three.js ASCII particle system and neon pink hover interaction.

## Phase 4: Web Components Implementation
- Build `HeaderComponent.ts`.
- Build `NavComponent.ts` for sidebar navigation.
- Build `ExerciseCard.ts` integrating Prism.js and the "reveal" interaction logic for code snippets.

## Phase 5: Assembly & Verification
- Assemble components in `index.html` and `main.ts`.
- Verify responsive layout, animations, and Vercel build compatibility.
