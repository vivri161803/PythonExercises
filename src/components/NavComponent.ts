import { config } from '../config';

export class NavComponent extends HTMLElement {
  connectedCallback() {
    const topics = Array.from(new Set(config.exercises.map(ex => ex.topic)));
    
    let html = `
      <!-- Fixed Menu Button -->
      <button id="menu-toggle" class="fixed top-6 left-6 z-[60] bg-[var(--surface-dark)] border border-[var(--border-dark)] p-3 rounded-full shadow-[var(--accent-glow)] text-[var(--neon-pink)] hover:bg-[#333] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--neon-pink)] cursor-pointer pointer-events-auto">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>

      <!-- Overlay -->
      <div id="nav-overlay" class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[40] transition-opacity duration-300 opacity-0 pointer-events-none"></div>

      <!-- Drawer Panel -->
      <nav id="nav-drawer" class="fixed top-0 left-0 h-full w-80 bg-[var(--surface-dark)] border-r border-[var(--border-dark)] z-[50] transform -translate-x-full transition-transform duration-300 flex flex-col shadow-2xl pointer-events-auto">
        <div class="p-6 border-b border-[var(--border-dark)] flex items-center justify-between">
          <h3 class="text-sm uppercase tracking-widest text-[var(--neon-pink)] font-mono font-bold">Menu Argomenti</h3>
          <button id="menu-close" class="text-[var(--text-secondary)] hover:text-white focus:outline-none transition-colors cursor-pointer">
             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div class="p-6 flex-1 overflow-y-auto">
          <ul class="space-y-6">
    `;

    topics.forEach(topic => {
      const topicExercises = config.exercises.filter(ex => ex.topic === topic);
      html += `
        <li>
          <h4 class="text-[var(--text-primary)] font-medium mb-3 tracking-wide">${topic}</h4>
          <ul class="space-y-2 pl-3 border-l-2 border-[var(--border-dark)]">
      `;
      
      topicExercises.forEach((ex, index) => {
        html += `
          <li>
            <a href="#${ex.id}" class="nav-link block text-sm text-[var(--text-secondary)] hover:text-[var(--neon-pink)] transition-colors py-1.5 pl-3 hover:border-l-2 hover:border-[var(--neon-pink)] -ml-[2px]">
              ${index + 1}. ${ex.title}
            </a>
          </li>
        `;
      });
      
      html += `
          </ul>
        </li>
      `;
    });

    html += `
          </ul>
        </div>
      </nav>
    `;

    this.innerHTML = html;

    const toggleBtn = this.querySelector('#menu-toggle');
    const closeBtn = this.querySelector('#menu-close');
    const overlay = this.querySelector('#nav-overlay');
    const drawer = this.querySelector('#nav-drawer');
    const links = this.querySelectorAll('.nav-link');

    const openDrawer = () => {
      drawer?.classList.remove('-translate-x-full');
      overlay?.classList.remove('opacity-0', 'pointer-events-none');
      overlay?.classList.add('opacity-100', 'pointer-events-auto');
      toggleBtn?.classList.add('opacity-0', 'pointer-events-none');
    };

    const closeDrawer = () => {
      drawer?.classList.add('-translate-x-full');
      overlay?.classList.remove('opacity-100', 'pointer-events-auto');
      overlay?.classList.add('opacity-0', 'pointer-events-none');
      toggleBtn?.classList.remove('opacity-0', 'pointer-events-none');
    };

    toggleBtn?.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    overlay?.addEventListener('click', closeDrawer);
    
    links.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }
}

customElements.define('nav-component', NavComponent);
