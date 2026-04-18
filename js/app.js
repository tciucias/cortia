// Consult Ready — App Logic

(function () {
  'use strict';

  let searchQuery = '';

  // ── Card HTML template ──
  function cardHTML(g) {
    return `
      <div class="card" data-id="${g.id}" role="button" tabindex="0"
           aria-label="Open ${g.title}">
        <div class="card-top">
          <span class="nice-badge">${g.nice_ref}</span>
          <span class="card-arrow">›</span>
        </div>
        <h3 class="card-title">${g.title}</h3>
        <p class="card-subtitle">${g.subtitle}</p>
        <span class="system-chip">${g.system}</span>
      </div>
    `;
  }

  // ── Attach card event listeners ──
  function attachCardListeners(container) {
    container.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  // ── Render cards into a given grid element ──
  function renderCards(guidelines, gridEl) {
    if (guidelines.length === 0) {
      gridEl.innerHTML = '<p class="no-results">No guidelines match your search.</p>';
      return;
    }
    gridEl.innerHTML = guidelines.map(cardHTML).join('');
    attachCardListeners(gridEl);
  }

  // ── Recently Added ──
  function renderRecentlyAdded() {
    const grid = document.getElementById('recent-grid');
    renderCards(GUIDELINES.slice(-4).reverse(), grid);
  }

  // ── System accordion sections ──
  function renderSystemSections() {
    const systems = [...new Set(GUIDELINES.map(g => g.system))].sort();
    const container = document.getElementById('systems-list');

    container.innerHTML = systems.map(sys => {
      const items = GUIDELINES.filter(g => g.system === sys);
      return `
        <div class="system-row" data-system="${sys}">
          <button class="system-row-header" aria-expanded="false">
            <span class="system-name">${sys}</span>
            <span class="system-right">
              <span class="system-count">${items.length}</span>
              <span class="system-chevron" aria-hidden="true">›</span>
            </span>
          </button>
          <div class="system-cards">
            <div class="card-grid">${items.map(cardHTML).join('')}</div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.system-row-header').forEach(btn => {
      btn.addEventListener('click', () => toggleSystem(btn.closest('.system-row')));
    });

    container.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  // ── Toggle system accordion ──
  function toggleSystem(row) {
    const isOpen = row.classList.contains('open');
    row.classList.toggle('open', !isOpen);
    row.querySelector('.system-row-header').setAttribute('aria-expanded', String(!isOpen));
  }

  // ── Filter + search ──
  function filterAndSearch() {
    const searchResults = document.getElementById('search-results');
    const recentlyAdded = document.getElementById('recently-added');
    const systemsSection = document.getElementById('systems-section');

    if (!searchQuery) {
      searchResults.hidden = true;
      recentlyAdded.hidden = false;
      systemsSection.hidden = false;
      return;
    }

    const q = searchQuery.toLowerCase();
    const results = GUIDELINES.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.subtitle.toLowerCase().includes(q) ||
      g.system.toLowerCase().includes(q) ||
      g.nice_ref.toLowerCase().includes(q)
    );

    recentlyAdded.hidden = true;
    systemsSection.hidden = true;
    searchResults.hidden = false;

    const count = document.getElementById('results-count');
    count.textContent = `${results.length} guideline${results.length !== 1 ? 's' : ''}`;

    renderCards(results, document.getElementById('search-grid'));
  }

  // ── Open modal ──
  function openModal(id) {
    const g = GUIDELINES.find(g => g.id === id);
    if (!g) return;

    document.getElementById('modal-title').textContent = g.title;
    const modalRef = document.getElementById('modal-ref');
    modalRef.textContent = g.nice_ref;
    modalRef.href = `https://www.nice.org.uk/guidance/${g.nice_ref.toLowerCase()}`;
    document.getElementById('modal-updated').textContent = g.updated ? `Updated: ${g.updated}` : '';
    document.getElementById('modal-system').textContent = g.system;

    document.getElementById('tab-diagnosis').innerHTML = g.diagnosis || '';
    document.getElementById('tab-management').innerHTML = g.management || '';
    document.getElementById('tab-referral').innerHTML = g.referral || '';
    document.getElementById('tab-monitoring').innerHTML = g.monitoring || '';
    document.getElementById('tab-air').innerHTML = g.air || '';
    document.getElementById('tab-mart').innerHTML = g.mart || '';
    document.getElementById('tab-inhalers').innerHTML = g.inhalers || '';

    document.getElementById('modal-tab-air').style.display = g.air ? '' : 'none';
    document.getElementById('modal-tab-mart').style.display = g.mart ? '' : 'none';
    document.getElementById('modal-tab-inhalers').style.display = g.inhalers ? '' : 'none';

    switchTab('diagnosis');

    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      document.getElementById('modal-close').focus();
    });
  }

  // ── Switch tab ──
  function switchTab(tabName) {
    document.querySelectorAll('.modal-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.tab === tabName)
    );
    document.querySelectorAll('.tab-panel').forEach(p =>
      p.classList.toggle('active', p.id === `tab-${tabName}`)
    );
    const content = document.querySelector('.modal-content');
    if (content) content.scrollTop = 0;
  }

  // ── Close modal ──
  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay.classList.contains('active')) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    renderRecentlyAdded();
    renderSystemSections();

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      filterAndSearch();
    });

    document.getElementById('modal-close').addEventListener('click', closeModal);

    document.getElementById('modal-overlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) closeModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });

    document.querySelectorAll('.modal-tab').forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
  });

})();
