// Consult Ready — App Logic

(function () {
  'use strict';

  let searchQuery = '';

  // ── Card HTML template ──
  function cardHTML(g) {
    return `
      <div class="card" data-id="${g.id}" role="button" tabindex="0" aria-label="Open ${g.title}">
        <div class="card-top">
          <span class="nice-badge">${g.overview ? 'Labs' : g.nice_ref}</span>
          <span class="card-arrow">›</span>
        </div>
        <h3 class="card-title">${g.title}</h3>
        <p class="card-subtitle">${g.subtitle}</p>
        <span class="system-chip">${Array.isArray(g.system) ? g.system.join(' · ') : g.system}</span>
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

  // ── Top section: Recently Added ──
  function renderTopSection() {
    const recent = GUIDELINES.slice(-3).reverse();
    renderCards(recent, document.getElementById('recent-grid'));
  }

  // ── System accordion sections ──
  function renderSystemSections() {
    const systems   = [...new Set(GUIDELINES.flatMap(g => Array.isArray(g.system) ? g.system : [g.system]))].sort();
    const container = document.getElementById('systems-list');
    const totalEl   = document.getElementById('guidelines-total');
    if (totalEl) totalEl.textContent = GUIDELINES.length;

    container.innerHTML = systems.map(sys => {
      const items = GUIDELINES.filter(g => Array.isArray(g.system) ? g.system.includes(sys) : g.system === sys);
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
    container.querySelectorAll('.card-grid').forEach(grid => {
      attachCardListeners(grid);
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
    const searchResults  = document.getElementById('search-results');
    const recentlyAdded  = document.getElementById('recently-added');
    const systemsSection = document.getElementById('systems-section');

    if (!searchQuery) {
      searchResults.hidden  = true;
      recentlyAdded.hidden  = false;
      systemsSection.hidden = false;
      return;
    }

    const q       = searchQuery.toLowerCase();
    const results = GUIDELINES.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.subtitle.toLowerCase().includes(q) ||
      (Array.isArray(g.system) ? g.system.join(' ') : g.system).toLowerCase().includes(q) ||
      g.nice_ref.toLowerCase().includes(q)
    );

    recentlyAdded.hidden  = true;
    systemsSection.hidden = true;
    searchResults.hidden  = false;

    document.getElementById('results-count').textContent =
      `${results.length} guideline${results.length !== 1 ? 's' : ''}`;

    renderCards(results, document.getElementById('search-grid'));
  }

  // ── Open modal ──
  function openModal(id) {
    const g = GUIDELINES.find(g => g.id === id);
    if (!g) return;

    document.getElementById('modal-title').innerHTML = g.title;

    const modalRef = document.getElementById('modal-ref');
    if (g.overview) {
      modalRef.textContent = 'Labs';
      modalRef.removeAttribute('href');
    } else if (g.source_url) {
      modalRef.textContent = g.nice_ref;
      modalRef.href = g.source_url;
    } else if (g.nice_ref === 'CKS') {
      modalRef.textContent = 'CKS';
      modalRef.href = `https://cks.nice.org.uk/topics/${g.cks_slug}/`;
    } else {
      modalRef.textContent = g.nice_ref;
      modalRef.href = `https://www.nice.org.uk/guidance/${g.nice_ref.toLowerCase()}`;
    }
    document.getElementById('modal-updated').textContent = g.updated ? `Updated: ${g.updated}` : '';
    document.getElementById('modal-system').innerHTML = Array.isArray(g.system) ? g.system.join(' · ') : g.system;

    document.getElementById('tab-summary').innerHTML         = g.summary        || '';
    document.getElementById('tab-diagnosis').innerHTML      = g.diagnosis      || '';
    document.getElementById('tab-management').innerHTML     = g.management     || '';
    document.getElementById('tab-referral').innerHTML       = g.referral       || '';
    document.getElementById('tab-monitoring').innerHTML     = g.monitoring     || '';
    document.getElementById('tab-air').innerHTML            = g.air            || '';
    document.getElementById('tab-mart').innerHTML           = g.mart           || '';
    document.getElementById('tab-inhalers').innerHTML       = g.inhalers       || '';
    document.getElementById('tab-insulins').innerHTML       = g.insulins       || '';
    document.getElementById('tab-hrt').innerHTML            = g.hrt            || '';
    document.getElementById('tab-drugs').innerHTML          = g.drugs          || '';
    document.getElementById('tab-gad2').innerHTML           = g.gad2           || '';
    document.getElementById('tab-gad7').innerHTML           = g.gad7           || '';
    document.getElementById('tab-aq10').innerHTML           = g.aq10           || '';
    document.getElementById('tab-dmard').innerHTML          = g.dmard          || '';
    document.getElementById('tab-gpcog').innerHTML          = g.gpcog          || '';
    document.getElementById('tab-sixcit').innerHTML         = g.sixcit         || '';
    document.getElementById('tab-types').innerHTML          = g.types          || '';
    document.getElementById('tab-images').innerHTML         = g.images         || '';
    document.getElementById('tab-simonbroome').innerHTML    = g.simonbroome    || '';
    document.getElementById('tab-overview').innerHTML       = g.overview       || '';
    document.getElementById('tab-investigations').innerHTML = g.investigations || '';
    document.getElementById('tab-steroids').innerHTML       = g.steroids       || '';
    document.getElementById('tab-ftu').innerHTML            = g.ftu            || '';
    document.getElementById('tab-schedule').innerHTML          = g.schedule          || '';
    document.getElementById('tab-special-groups').innerHTML    = g.specialGroups     || '';
    document.getElementById('tab-at-risk').innerHTML           = g.atRisk            || '';
    document.getElementById('tab-contraindications').innerHTML = g.contraindications || '';
    document.getElementById('tab-administration').innerHTML    = g.administration    || '';

    document.getElementById('modal-tab-summary').style.display        = g.summary        ? '' : 'none';
    document.getElementById('modal-tab-air').style.display            = g.air            ? '' : 'none';
    document.getElementById('modal-tab-mart').style.display           = g.mart           ? '' : 'none';
    document.getElementById('modal-tab-inhalers').style.display       = g.inhalers       ? '' : 'none';
    document.getElementById('modal-tab-hrt').style.display            = g.hrt            ? '' : 'none';
    document.getElementById('modal-tab-drugs').style.display          = g.drugs          ? '' : 'none';
    document.getElementById('modal-tab-gad2').style.display           = g.gad2           ? '' : 'none';
    document.getElementById('modal-tab-gad7').style.display           = g.gad7           ? '' : 'none';
    document.getElementById('modal-tab-aq10').style.display           = g.aq10           ? '' : 'none';
    document.getElementById('modal-tab-dmard').style.display          = g.dmard          ? '' : 'none';
    document.getElementById('modal-tab-gpcog').style.display          = g.gpcog          ? '' : 'none';
    document.getElementById('modal-tab-sixcit').style.display         = g.sixcit         ? '' : 'none';
    document.getElementById('modal-tab-types').style.display          = g.types          ? '' : 'none';
    document.getElementById('modal-tab-images').style.display         = g.images         ? '' : 'none';
    document.getElementById('modal-tab-simonbroome').style.display    = g.simonbroome    ? '' : 'none';
    document.getElementById('modal-tab-overview').style.display       = g.overview       ? '' : 'none';
    document.getElementById('modal-tab-investigations').style.display = g.investigations ? '' : 'none';
    document.getElementById('modal-tab-steroids').style.display       = g.steroids       ? '' : 'none';
    document.getElementById('modal-tab-ftu').style.display            = g.ftu            ? '' : 'none';
    document.getElementById('modal-tab-insulins').style.display       = g.insulins       ? '' : 'none';
    document.getElementById('modal-tab-schedule').style.display          = g.schedule          ? '' : 'none';
    document.getElementById('modal-tab-special-groups').style.display    = g.specialGroups     ? '' : 'none';
    document.getElementById('modal-tab-at-risk').style.display           = g.atRisk            ? '' : 'none';
    document.getElementById('modal-tab-contraindications').style.display = g.contraindications ? '' : 'none';
    document.getElementById('modal-tab-administration').style.display    = g.administration    ? '' : 'none';

    const isLabCard = !!g.overview;
    const isImmCard = !!g.schedule;
    document.querySelector('.modal-tab[data-tab="diagnosis"]').style.display  = (isLabCard || isImmCard) ? 'none' : '';
    document.querySelector('.modal-tab[data-tab="management"]').style.display = (isLabCard || isImmCard) ? 'none' : '';
    document.querySelector('.modal-tab[data-tab="referral"]').style.display   = isImmCard ? 'none' : '';
    document.querySelector('.modal-tab[data-tab="monitoring"]').style.display = isImmCard ? 'none' : '';

    const defaultTabLabels = { diagnosis: 'Diagnosis', investigations: 'Investigations', management: 'Management', referral: 'Referral', monitoring: 'Monitoring' };
    const resolvedLabels = Object.assign({}, defaultTabLabels, g.tabLabels || {});
    Object.entries(resolvedLabels).forEach(([tab, label]) => {
      const btn = document.querySelector(`.modal-tab[data-tab="${tab}"]`);
      if (btn) btn.textContent = label;
    });

    const linksList = document.getElementById('patient-links-list');
    const leafletHtml = g.leaflet
      ? `<button class="patient-link patient-link--leaflet" data-leaflet-id="${g.id}">Patient Leaflet &#8599;</button>`
      : '';
    const externalLinks = (g.patientLinks && g.patientLinks.length)
      ? g.patientLinks.map(l =>
          `<a class="patient-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} &#8599;</a>`
        ).join('')
      : '';
    linksList.innerHTML = leafletHtml + externalLinks;

    if (g.leaflet) {
      linksList.querySelector('[data-leaflet-id]').addEventListener('click', function () {
        openLeaflet(g);
      });
    }

    switchTab(g.schedule ? 'schedule' : (g.overview ? 'overview' : 'diagnosis'));

    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      document.getElementById('modal-close').focus();
    });
  }

  // ── Switch tab ──
  const WIDE_TABS = ['hrt', 'inhalers', 'insulins', 'drugs', 'steroids', 'ftu'];
  function switchTab(tabName) {
    document.querySelectorAll('.modal-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.tab === tabName)
    );
    document.querySelectorAll('.tab-panel').forEach(p =>
      p.classList.toggle('active', p.id === `tab-${tabName}`)
    );
    const modalBox = document.querySelector('.modal-box');
    if (modalBox) modalBox.classList.toggle('modal-box--wide', WIDE_TABS.includes(tabName));
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

  // ── CKD Staging Calculator ──
  function calcCKDStage() {
    const egfrEl   = document.getElementById('calc-egfr');
    const acrEl    = document.getElementById('calc-acr');
    const resultEl = document.getElementById('ckd-calc-result');
    if (!egfrEl || !acrEl || !resultEl) return;

    const egfr = parseFloat(egfrEl.value);
    const acr  = parseFloat(acrEl.value);
    if (isNaN(egfr) || isNaN(acr) || egfr <= 0 || acr < 0) {
      resultEl.classList.remove('ckd-result-active');
      return;
    }

    let gCat;
    if      (egfr >= 90) gCat = 'G1';
    else if (egfr >= 60) gCat = 'G2';
    else if (egfr >= 45) gCat = 'G3a';
    else if (egfr >= 30) gCat = 'G3b';
    else if (egfr >= 15) gCat = 'G4';
    else                 gCat = 'G5';

    let aCat;
    if      (acr <  3)  aCat = 'A1';
    else if (acr <= 30) aCat = 'A2';
    else                aCat = 'A3';

    const riskMap = {
      G1:  { A1: 'Low',                  A2: 'Moderately increased', A3: 'High'      },
      G2:  { A1: 'Low',                  A2: 'Moderately increased', A3: 'High'      },
      G3a: { A1: 'Moderately increased', A2: 'High',                 A3: 'Very high' },
      G3b: { A1: 'High',                 A2: 'Very high',            A3: 'Very high' },
      G4:  { A1: 'Very high',            A2: 'Very high',            A3: 'Very high' },
      G5:  { A1: 'Very high',            A2: 'Very high',            A3: 'Very high' },
    };
    const risk = riskMap[gCat][aCat];

    const riskClass = {
      'Low':                  'ckd-risk--low',
      'Moderately increased': 'ckd-risk--mod',
      'High':                 'ckd-risk--high',
      'Very high':            'ckd-risk--very-high',
    }[risk];

    const monFreq = {
      G1:  { A1: '≤1 per year', A2: '1 per year',       A3: '2 per year'       },
      G2:  { A1: '≤1 per year', A2: '1 per year',       A3: '2 per year'       },
      G3a: { A1: '1 per year',       A2: '2 per year',       A3: '3 per year'       },
      G3b: { A1: '2 per year',       A2: '3 per year',       A3: '≥3 per year' },
      G4:  { A1: '3 per year',       A2: '3 per year',       A3: '≥4 per year' },
      G5:  { A1: '≥4 per year', A2: '≥4 per year', A3: '≥4 per year' },
    }[gCat][aCat];

    let sglt2Text, sglt2Warn = false;
    if (egfr >= 45) {
      sglt2Text = acr >= 22.6
        ? 'Eligible — ACR ≥22.6 threshold met'
        : 'Eligible if type 2 diabetes (ACR <22.6)';
    } else if (egfr >= 20) {
      sglt2Text = 'Eligible — regardless of ACR or T2DM';
    } else {
      sglt2Text = 'Not recommended — eGFR <20';
      sglt2Warn = true;
    }

    const flags = [];
    if (acr >= 70) {
      flags.push({ cls: 'ckd-calc-flag', text: 'ACR ≥70 mg/mmol — refer to nephrology (unless diabetic on optimised ACEi/ARB)' });
    }
    if (gCat === 'G5') {
      flags.push({ cls: 'ckd-calc-flag', text: 'G5 CKD — discuss renal replacement therapy planning with nephrology' });
    }
    if (acr >= 3 && acr < 70) {
      flags.push({ cls: 'ckd-calc-note', text: acr > 30
        ? 'ACR >30 mg/mmol — offer ACEi/ARB if hypertension (titrate to highest tolerated dose)'
        : 'ACR ≥3 mg/mmol — offer ACEi/ARB if hypertension + diabetes' });
    }

    resultEl.innerHTML =
      `<div class="ckd-result-top">
        <div class="ckd-stage-badges">
          <span class="ckd-stage-badge">${gCat}</span>
          <span class="ckd-stage-sep">&nbsp;&middot;&nbsp;</span>
          <span class="ckd-stage-badge">${aCat}</span>
        </div>
        <div class="ckd-risk-pill ${riskClass}">${risk}</div>
      </div>
      <div class="ckd-meta-grid">
        <div class="ckd-meta-item">
          <span class="ckd-meta-label">eGFR checks</span>
          <span class="ckd-meta-value">${monFreq}</span>
        </div>
        <div class="ckd-meta-item">
          <span class="ckd-meta-label">SGLT2 inhibitor</span>
          <span class="ckd-meta-value${sglt2Warn ? ' ckd-meta-warn' : ''}">${sglt2Text}</span>
        </div>
      </div>` +
      flags.map(f => `<div class="${f.cls}">${f.text}</div>`).join('');

    resultEl.classList.add('ckd-result-active');
  }

  // ── FRAX Threshold Checker ──
  function calcFRAX() {
    const ageEl    = document.getElementById('frax-age');
    const scoreEl  = document.getElementById('frax-score');
    const resultEl = document.getElementById('frax-result');
    if (!ageEl || !resultEl) return;

    const age = parseFloat(ageEl.value);
    if (isNaN(age) || age < 40 || age > 90) {
      resultEl.classList.remove('frax-result-active');
      return;
    }

    // NOGG 2017 thresholds — women, major osteoporotic fracture, BMI 25
    const pts = [
      { age: 40, lo: 2.6, up: 7.1, iv: 5.9 },
      { age: 45, lo: 2.7, up: 7.2, iv: 6.0 },
      { age: 50, lo: 3.4, up: 8.6, iv: 7.2 },
      { age: 55, lo: 4.5, up: 11,  iv: 9.4 },
      { age: 60, lo: 5.9, up: 14,  iv: 12  },
      { age: 65, lo: 8.4, up: 19,  iv: 16  },
      { age: 70, lo: 11,  up: 24,  iv: 20  },
    ];

    let t;
    if (age <= 40) {
      t = pts[0];
    } else if (age >= 70) {
      t = pts[pts.length - 1];
    } else {
      let a, b;
      for (let i = 0; i < pts.length - 1; i++) {
        if (age >= pts[i].age && age < pts[i + 1].age) { a = pts[i]; b = pts[i + 1]; break; }
      }
      const f = (age - a.age) / (b.age - a.age);
      t = { lo: a.lo + f * (b.lo - a.lo), up: a.up + f * (b.up - a.up), iv: a.iv + f * (b.iv - a.iv) };
    }

    const fmt = v => {
      const r = Math.round(v * 10) / 10;
      return (r % 1 === 0 ? r.toFixed(0) : r.toFixed(1)) + '%';
    };

    const thresholdsHTML =
      `<div class="frax-threshold-grid">
        <div class="frax-threshold-item">
          <span class="frax-threshold-label">Lower assessment</span>
          <span class="frax-threshold-value">${fmt(t.lo)}</span>
          <span class="frax-threshold-sub">below → reassure</span>
        </div>
        <div class="frax-threshold-item frax-threshold-item--iv">
          <span class="frax-threshold-label">Intervention (with BMD)</span>
          <span class="frax-threshold-value">${fmt(t.iv)}</span>
          <span class="frax-threshold-sub">treat if FRAX+BMD exceeds</span>
        </div>
        <div class="frax-threshold-item frax-threshold-item--up">
          <span class="frax-threshold-label">Upper assessment</span>
          <span class="frax-threshold-value">${fmt(t.up)}</span>
          <span class="frax-threshold-sub">above → treat without DXA</span>
        </div>
      </div>`;

    const score = scoreEl ? parseFloat(scoreEl.value) : NaN;
    let zoneHTML = '';
    if (!isNaN(score) && score >= 0) {
      let category, rec, cls;
      if (score >= t.up) {
        category = 'Above upper threshold';
        rec      = 'Offer drug treatment — DXA not required before starting';
        cls      = 'frax-zone--high';
      } else if (score >= t.lo) {
        category = 'Between thresholds';
        rec      = 'Measure BMD by DXA; recalculate FRAX with BMD result, then apply intervention threshold';
        cls      = 'frax-zone--mid';
      } else {
        category = 'Below lower threshold';
        rec      = 'Reassure; address modifiable risk factors; no DXA required routinely';
        cls      = 'frax-zone--low';
      }
      zoneHTML =
        `<div class="frax-zone ${cls}">
          <div class="frax-zone-top">
            <span class="frax-zone-score">${score % 1 === 0 ? score.toFixed(0) : score.toFixed(1)}%</span>
            <span class="frax-zone-sep">·</span>
            <span class="frax-zone-category">${category}</span>
          </div>
          <div class="frax-zone-rec">${rec}</div>
        </div>`;
    }

    const caveatsHTML =
      `<p class="frax-caveats">Prior hip or vertebral fracture → treat regardless of FRAX score · glucocorticoids &gt;7.5&nbsp;mg/day may cause underestimation · men have lower NOGG thresholds — use FRAX tool for individual assessment</p>`;

    resultEl.innerHTML = thresholdsHTML + zoneHTML + caveatsHTML;
    resultEl.classList.add('frax-result-active');
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    renderTopSection();
    renderSystemSections();

    // Search
    document.getElementById('search-input').addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      filterAndSearch();
    });

    // Guideline modal
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-print').addEventListener('click', () => {
      const injected = [];
      document.querySelectorAll('.modal-tab[data-tab]').forEach(tab => {
        if (tab.style.display === 'none') return;
        const panel = document.getElementById('tab-' + tab.dataset.tab);
        if (!panel || !panel.innerHTML.trim()) return;
        const el = document.createElement('div');
        el.className = 'print-section-label';
        el.textContent = tab.textContent.trim();
        panel.prepend(el);
        injected.push(el);
      });
      window.addEventListener('afterprint', () => injected.forEach(el => el.remove()), { once: true });
      window.print();
    });
    document.getElementById('modal-overlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.querySelectorAll('.modal-tab').forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // CKD staging calculator (event delegation)
    document.getElementById('modal-overlay').addEventListener('input', e => {
      if (e.target.id === 'calc-egfr' || e.target.id === 'calc-acr') calcCKDStage();
      if (e.target.id === 'frax-age'  || e.target.id === 'frax-score') calcFRAX();
    });

    // Wells score calculators (event delegation)
    document.getElementById('modal-overlay').addEventListener('click', e => {
      const row = e.target.closest('.wells-item');
      if (!row) return;
      const group = row.dataset.group;
      if (group) {
        const wasSelected = row.classList.contains('selected');
        document.querySelectorAll(`.wells-item[data-group="${group}"]`).forEach(r => r.classList.remove('selected'));
        if (!wasSelected) row.classList.add('selected');
      } else {
        row.classList.toggle('selected');
      }
      const calcId = row.dataset.calc;
      const rows   = document.querySelectorAll(`.wells-item[data-calc="${calcId}"]`);
      const score  = Array.from(rows).reduce((sum, r) =>
        r.classList.contains('selected') ? sum + parseFloat(r.dataset.score) : sum, 0
      );
      const valueEl = document.getElementById(`${calcId}-score-value`);
      const riskEl  = document.getElementById(`${calcId}-score-risk`);
      if (!valueEl || !riskEl) return;

      if (calcId === 'gad2') {
        const q1 = document.querySelector('.wells-item[data-group="gad2-q1"].selected');
        const q2 = document.querySelector('.wells-item[data-group="gad2-q2"].selected');
        if (!q1 || !q2) {
          valueEl.textContent = '–';
          riskEl.textContent  = 'Answer both questions';
          riskEl.className    = 'wells-risk';
        } else {
          valueEl.textContent = score;
          if (score >= 3) {
            riskEl.textContent = 'Positive screen — proceed to GAD-7';
            riskEl.className   = 'wells-risk risk-high';
          } else {
            riskEl.textContent = 'Below threshold — GAD unlikely';
            riskEl.className   = 'wells-risk risk-low';
          }
        }
        return;
      }

      if (calcId === 'gad7') {
        const allAnswered = [1,2,3,4,5,6,7].every(n =>
          document.querySelector(`.wells-item[data-group="gad7-q${n}"].selected`)
        );
        if (!allAnswered) {
          valueEl.textContent = '–';
          riskEl.textContent  = 'Answer all 7 questions';
          riskEl.className    = 'wells-risk';
        } else {
          valueEl.textContent = score;
          if      (score >= 15) { riskEl.textContent = 'Severe anxiety — consider Step 3–4, medication'; riskEl.className = 'wells-risk risk-high'; }
          else if (score >= 10) { riskEl.textContent = 'Moderate anxiety — consider Step 2–3 interventions'; riskEl.className = 'wells-risk risk-high'; }
          else if (score >= 5)  { riskEl.textContent = 'Mild anxiety — consider Step 2, self-help'; riskEl.className = 'wells-risk risk-low'; }
          else                  { riskEl.textContent = 'Minimal anxiety'; riskEl.className = 'wells-risk risk-low'; }
        }
        return;
      }

      if (calcId === 'aq10') {
        const allAnswered = [1,2,3,4,5,6,7,8,9,10].every(n =>
          document.querySelector(`.wells-item[data-group="aq10-q${n}"].selected`)
        );
        if (!allAnswered) {
          valueEl.textContent = '–';
          riskEl.textContent  = 'Answer all 10 questions';
          riskEl.className    = 'wells-risk';
        } else {
          valueEl.textContent = score;
          if (score >= 6) {
            riskEl.textContent = 'Positive screen — refer for comprehensive autism assessment';
            riskEl.className   = 'wells-risk risk-high';
          } else {
            riskEl.textContent = 'Below threshold — autism less likely';
            riskEl.className   = 'wells-risk risk-low';
          }
        }
        return;
      }

      valueEl.textContent = score;

      if (calcId === 'dvt-wells') {
        const likely = score >= 2;
        riskEl.textContent = likely ? 'DVT likely' : 'DVT unlikely';
        riskEl.className   = 'wells-risk ' + (likely ? 'risk-high' : 'risk-low');
        const pLikely   = document.getElementById('dvt-pathway-likely');
        const pUnlikely = document.getElementById('dvt-pathway-unlikely');
        if (pLikely && pUnlikely) {
          pLikely.className   = 'pathway-step' + (likely  ? ' pathway-alert'  : '');
          pUnlikely.className = 'pathway-step' + (!likely ? ' pathway-active' : '');
        }
      } else if (calcId === 'pe-wells') {
        const likely = score > 4;
        riskEl.textContent = likely ? 'PE likely' : 'PE unlikely';
        riskEl.className   = 'wells-risk ' + (likely ? 'risk-high' : 'risk-low');
        const pLikely   = document.getElementById('pe-pathway-likely');
        const pUnlikely = document.getElementById('pe-pathway-unlikely');
        if (pLikely && pUnlikely) {
          pLikely.className   = 'pathway-step' + (likely  ? ' pathway-alert'  : '');
          pUnlikely.className = 'pathway-step' + (!likely ? ' pathway-active' : '');
        }
      } else if (calcId === 'chads') {
        if      (score >= 2)  { riskEl.textContent = 'Offer anticoagulation';    riskEl.className = 'wells-risk risk-high'; }
        else if (score === 1) { riskEl.textContent = 'Consider anticoagulation (men) · No treatment (women)'; riskEl.className = 'wells-risk risk-high'; }
        else                  { riskEl.textContent = 'No anticoagulation';       riskEl.className = 'wells-risk risk-low'; }
      } else if (calcId === 'hasbled') {
        if      (score >= 3) { riskEl.textContent = 'High risk — correct modifiable factors; do not withhold anticoagulation'; riskEl.className = 'wells-risk risk-high'; }
        else if (score === 2) { riskEl.textContent = 'Moderate risk — review and address modifiable risk factors'; riskEl.className = 'wells-risk risk-high'; }
        else                  { riskEl.textContent = 'Low risk'; riskEl.className = 'wells-risk risk-low'; }
      } else if (calcId === 'simon-broome') {
        const cholMet     = !!document.querySelector('.wells-item[data-group="sb-chol"].selected');
        const definiteMet = !!document.querySelector('.wells-item[data-item^="sb-definite"].selected');
        const possibleMet = !!document.querySelector('.wells-item[data-item^="sb-possible"].selected');
        if (!cholMet) {
          valueEl.textContent = '–';
          riskEl.textContent  = 'Cholesterol criteria not met — FH diagnosis not supported by these criteria';
          riskEl.className    = 'wells-risk';
        } else if (definiteMet) {
          valueEl.textContent = 'Definite FH';
          riskEl.textContent  = 'Refer to FH specialist · initiate cascade testing · start high-intensity statin';
          riskEl.className    = 'wells-risk risk-high';
        } else if (possibleMet) {
          valueEl.textContent = 'Possible FH';
          riskEl.textContent  = 'Refer to FH specialist for DNA testing · consider statin';
          riskEl.className    = 'wells-risk risk-high';
        } else {
          valueEl.textContent = '–';
          riskEl.textContent  = 'Cholesterol criteria met — select additional criteria to classify';
          riskEl.className    = 'wells-risk';
        }
        return;
      }
    });

    // Global Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  });

  function openLeaflet(g) {
    const base = window.location.href.replace(/\/[^\/]*$/, '/');
    const cssUrl = base + 'css/leaflet.css';
    const fontsUrl = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Lato:wght@300;400;700;900&display=swap';

    const printSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${g.title} — Patient Information</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontsUrl}" rel="stylesheet">
  <link rel="stylesheet" href="${cssUrl}">
</head>
<body>
  <div class="screen-controls">
    <button class="ctrl-btn ctrl-btn--print" onclick="window.print()">${printSvg} Print / Save as PDF</button>
    <button class="ctrl-btn ctrl-btn--back" onclick="window.close()">Close</button>
  </div>
  <div class="leaflet-page">
    <header class="leaflet-header">
      <div class="leaflet-brand">
        <span class="brand-name">Cortia</span>
        <span class="brand-tag">Patient Information</span>
      </div>
      <div class="leaflet-meta">
        <span class="leaflet-ref">${g.nice_ref || ''}</span>
        <span class="leaflet-updated">Updated: ${g.updated || ''}</span>
      </div>
    </header>
    <h1 class="leaflet-title">${g.title}</h1>
    <p class="leaflet-subtitle">${g.subtitle || ''}</p>
    <div class="leaflet-body">${g.leaflet}</div>
    <footer class="leaflet-footer">
      <p>This leaflet provides general information only and is not a substitute for professional medical advice. Always follow the guidance of your GP or healthcare team. Content is based on NICE guidelines and NHS resources. Produced by Cortia &mdash; for educational use.</p>
    </footer>
  </div>
</body>
</html>`;

    const win = window.open('', '_blank');
    if (win) {
      win.document.write(html);
      win.document.close();
    }
  }

})();
