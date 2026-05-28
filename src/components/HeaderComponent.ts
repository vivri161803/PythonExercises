import { config } from '../config';

export class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="py-12 mb-12">
        <div class="container mx-auto px-6">
          <div class="inline-block px-3 py-1 mb-4 border border-[var(--neon-pink)] text-[var(--neon-pink)] text-xs font-mono rounded-full uppercase tracking-widest shadow-[var(--accent-glow)]">
            Lab Session
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">${config.metadata.title}</h1>
          <h2 class="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 font-mono">${config.metadata.subtitle}</h2>
          
          <div class="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              ${config.metadata.date}
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              20 Exercises
            </div>
            <div class="flex items-center gap-2 text-[var(--neon-pink)] font-mono text-xs">
              [ Sets, Dictionaries, Classes, Trees ]
            </div>
          </div>
          <p class="mt-6 max-w-2xl text-[var(--text-secondary)] leading-relaxed">
            ${config.metadata.description}
          </p>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
