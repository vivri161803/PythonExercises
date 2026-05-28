import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import type { Exercise } from '../config';

export class ExerciseCard extends HTMLElement {
  private _data!: Exercise;
  private _index!: number;

  set data(value: { exercise: Exercise, index: number }) {
    this._data = value.exercise;
    this._index = value.index;
    this.render();
  }

  private render() {
    const { id, topic, title, text, solution, difficulty } = this._data;
    
    // Highlight code
    const highlightedCode = Prism.highlight(solution, Prism.languages.python, 'python');

    // Colors mapping based on difficulty
    let difficultyColorClass = 'border-[var(--border-dark)]';
    let difficultyTextClassPrimary = 'text-[var(--text-primary)]';
    let difficultyTextClassSecondary = 'text-[var(--text-secondary)]';
    let badgeBgClass = 'bg-[var(--border-dark)] text-white';

    if (difficulty === 'Facile') {
      difficultyColorClass = 'border-green-500 hover:border-green-400 hover:shadow-green-500/20';
      difficultyTextClassPrimary = 'text-green-400';
      difficultyTextClassSecondary = 'text-green-300';
      badgeBgClass = 'bg-green-900/50 text-green-300 border border-green-700/50';
    } else if (difficulty === 'Medio') {
      difficultyColorClass = 'border-yellow-500 hover:border-yellow-400 hover:shadow-yellow-500/20';
      difficultyTextClassPrimary = 'text-yellow-400';
      difficultyTextClassSecondary = 'text-yellow-300';
      badgeBgClass = 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50';
    } else if (difficulty === 'Difficile') {
      difficultyColorClass = 'border-red-500 hover:border-red-400 hover:shadow-red-500/20';
      difficultyTextClassPrimary = 'text-red-400';
      difficultyTextClassSecondary = 'text-red-300';
      badgeBgClass = 'bg-red-900/50 text-red-300 border border-red-700/50';
    }

    this.innerHTML = `
      <div id="${id}" class="mb-12 scroll-mt-24 bg-[var(--surface-dark)] border ${difficultyColorClass} rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
        <div class="p-6 border-b border-[var(--border-dark)] relative overflow-hidden">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-mono text-[var(--neon-pink)] uppercase tracking-wider">${topic} &mdash; Esercizio ${this._index}</span>
            <span class="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded ${badgeBgClass}">
              ${difficulty}
            </span>
          </div>
          <h3 class="text-2xl font-bold ${difficultyTextClassPrimary} mb-4">${title}</h3>
          <div class="${difficultyTextClassSecondary} leading-relaxed">
            ${text}
          </div>
        </div>
        
        <div class="p-6 bg-black bg-opacity-40">
          <button class="toggle-btn flex items-center gap-2 text-sm font-mono font-medium ${difficultyTextClassPrimary} bg-[var(--border-dark)] hover:bg-[#333] px-4 py-2 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--neon-pink)]">
            <svg class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            <span>Mostra Soluzione</span>
          </button>
          
          <div class="solution-container overflow-hidden transition-all duration-500 max-h-0 opacity-0 mt-4">
            <div class="relative">
              <pre class="!m-0 !rounded-lg !bg-[#0d0d0d] border border-[var(--border-dark)] text-sm"><code class="language-python">${highlightedCode}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `;

    const btn = this.querySelector('.toggle-btn');
    const container = this.querySelector('.solution-container');
    const icon = btn?.querySelector('svg');
    const btnText = btn?.querySelector('span');

    btn?.addEventListener('click', () => {
      const isExpanded = !container?.classList.contains('max-h-0');
      if (!isExpanded) {
        container?.classList.remove('max-h-0', 'opacity-0');
        container?.classList.add('max-h-[2000px]', 'opacity-100');
        if (icon) icon.style.transform = 'rotate(180deg)';
        if (btnText) btnText.textContent = 'Nascondi Soluzione';
      } else {
        container?.classList.add('max-h-0', 'opacity-0');
        container?.classList.remove('max-h-[2000px]', 'opacity-100');
        if (icon) icon.style.transform = 'rotate(0deg)';
        if (btnText) btnText.textContent = 'Mostra Soluzione';
      }
    });
  }
}

customElements.define('exercise-card', ExerciseCard);
