(() => {
  const D = window.VGI_DATA;
  if (!D) { console.warn('VGI_DATA missing'); return; }

  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-btn');
  const setTheme = (t) => {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('vgi-theme', t); } catch {}
  };
  const saved = (() => { try { return localStorage.getItem('vgi-theme'); } catch { return null; } })();
  if (saved) setTheme(saved);
  themeBtn?.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme') || 'light';
    setTheme(cur === 'light' ? 'dark' : 'light');
  });

  const f = D.publications[0];
  const heroFeature = document.getElementById('hero-feature');
  if (heroFeature && f) {
    heroFeature.innerHTML = `
      <div class="featured-img-wrap">
        <div class="featured-img" style="background-image:url('${f.image}')"></div>
        <span class="featured-badge">Latest · ${f.venue} ${f.year}${f.tag ? ' · ' + f.tag : ''}</span>
      </div>
      <div class="featured-body">
        <div class="eyebrow">Featured publication</div>
        <h2>${f.title}</h2>
        <div class="featured-authors">${f.authors}</div>
        <div class="featured-links">
          ${f.paper ? `<a href="${f.paper}" target="_blank" rel="noopener">Read paper →</a>` : `<span style="color:var(--text-2)">Paper (TBU)</span>`}
          ${f.code  ? `<a href="${f.code}"  target="_blank" rel="noopener">View code →</a>`  : `<span style="color:var(--text-2)">Code (TBU)</span>`}
        </div>
      </div>`;
  }

  const statPubs = document.getElementById('stat-pubs');
  if (statPubs) statPubs.textContent = String(D.publications.length).padStart(2, '0');

  const grid = document.getElementById('pub-grid');
  const chipsVenue = document.getElementById('chips-venue');
  const chipsYear  = document.getElementById('chips-year');
  const searchInput = document.getElementById('search');

  const state = { venue: 'All', year: 'All', q: '' };

  const buildChips = (host, list, key) => {
    if (!host) return;
    const items = ['All', ...list];
    host.innerHTML = items.map(v => `<button class="chip ${v===state[key]?'active':''}" data-v="${v}">${v}</button>`).join('');
    host.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
      state[key] = c.dataset.v;
      host.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === c));
      render();
    }));
  };
  buildChips(chipsVenue, [...new Set(D.publications.map(p => p.venue))], 'venue');
  buildChips(chipsYear,  [...new Set(D.publications.map(p => p.year))].sort((a,b)=>b-a), 'year');

  searchInput?.addEventListener('input', e => { state.q = e.target.value.trim().toLowerCase(); render(); });

  const render = () => {
    if (!grid) return;
    const list = D.publications.filter(p => {
      if (state.venue !== 'All' && p.venue !== state.venue) return false;
      if (state.year  !== 'All' && p.year  !== Number(state.year)) return false;
      if (state.q) {
        const hay = (p.title+' '+p.authors+' '+p.venue+' '+p.year+' '+(p.tag||'')).toLowerCase();
        if (!hay.includes(state.q)) return false;
      }
      return true;
    });
    if (!list.length) {
      grid.innerHTML = `<div class="empty-state">No publications match your filters.</div>`;
      return;
    }
    const layout = grid.dataset.layout || 'cards';
    if (layout === 'rows') {
      grid.innerHTML = list.map(p => `
        <article class="pub-card">
          <div class="pub-thumb" style="background-image:url('${p.image}')">
            <span class="pub-venue">${p.venue} ${p.year}</span>
          </div>
          <div class="pub-body">
            <div class="pub-meta">
              ${p.tag ? `<span class="pub-tag">${p.tag}</span>` : ''}
              <span>${p.venue} · ${p.year}</span>
            </div>
            <h3 class="pub-title">${p.title}</h3>
            <div class="pub-authors">${p.authors}</div>
          </div>
          <div class="pub-links">
            ${p.paper ? `<a href="${p.paper}" target="_blank" rel="noopener">Paper →</a>` : `<span style="color:var(--text-2)">Paper TBU</span>`}
            ${p.code  ? `<a href="${p.code}"  target="_blank" rel="noopener">Code →</a>`  : `<span style="color:var(--text-2)">Code TBU</span>`}
          </div>
        </article>
      `).join('');
    } else {
      grid.innerHTML = list.map(p => `
        <article class="pub-card">
          <div class="pub-thumb" style="background-image:url('${p.image}')">
            <span class="pub-venue">${p.venue} ${p.year}</span>
            ${p.tag ? `<span class="pub-tag">${p.tag}</span>` : ''}
          </div>
          <div class="pub-body">
            <h3 class="pub-title">${p.title}</h3>
            <div class="pub-authors">${p.authors}</div>
            <div class="pub-links">
              ${p.paper ? `<a href="${p.paper}" target="_blank" rel="noopener">Paper →</a>` : `<span style="color:var(--text-2)">Paper TBU</span>`}
              ${p.code  ? `<a href="${p.code}"  target="_blank" rel="noopener">Code →</a>`  : `<span style="color:var(--text-2)">Code TBU</span>`}
            </div>
          </div>
        </article>
      `).join('');
    }
  };
  render();

  const newsHost = document.getElementById('news-list');
  const newsToggle = document.getElementById('news-toggle');
  let newsExpanded = false;
  const NEWS_COLLAPSED = 8;
  const renderNews = () => {
    if (!newsHost) return;
    const items = newsExpanded ? D.news : D.news.slice(0, NEWS_COLLAPSED);
    newsHost.innerHTML = items.map(n => `
      <div class="news-item">
        <div class="news-date">${n.date}</div>
        <div class="news-text">${n.html}</div>
      </div>
    `).join('');
    if (newsToggle) newsToggle.textContent = newsExpanded ? 'Show less' : 'Show more';
  };
  renderNews();
  newsToggle?.addEventListener('click', () => { newsExpanded = !newsExpanded; renderNews(); });

  const rGrid = document.getElementById('research-grid');
  if (rGrid) {
    rGrid.innerHTML = D.research.map(r => `
      <a class="research-card" href="../html/research.html" style="background-image:url('${r.image}')">
        <div class="research-body">
          <h3>${r.title}</h3>
          <p>${r.desc}</p>
        </div>
      </a>
    `).join('');
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
