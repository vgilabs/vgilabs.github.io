(async function () {
  
  const fetchInject = async (url, selector) => {
    const slot = document.querySelector(selector);
    if (!slot) return;
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      slot.outerHTML = html;
    } catch (e) {
      console.warn('[site] partial inject failed:', url, e);
    }
  };
  await Promise.all([
    fetchInject('/partials/nav.html', '#nav-mount'),
    fetchInject('/partials/footer.html', '#footer-mount')
  ]);

  const nav = document.getElementById('nav');
  const themeBtn = document.getElementById('theme-btn');
  const hamBtn = document.getElementById('ham-btn');

  const root = document.documentElement;
  const setTheme = t => {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('vgi-theme', t); } catch (e) {}
  };
  try {
    const saved = localStorage.getItem('vgi-theme');
    if (saved === 'dark' || saved === 'light') setTheme(saved);
  } catch (e) {}
  themeBtn?.addEventListener('click', () => {
    setTheme((root.getAttribute('data-theme') || 'light') === 'light' ? 'dark' : 'light');
  });

  const updateNav = () => nav?.classList.toggle('scrolled', window.scrollY > 16);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  hamBtn?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    hamBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  
  nav?.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        nav.classList.remove('open');
        hamBtn?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    nav?.querySelectorAll(`.nav-link[data-page="${currentPage}"]`).forEach(a => a.classList.add('current'));
  }

  nav?.querySelectorAll('.nav-item .submenu a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        nav.classList.remove('open');
        hamBtn?.setAttribute('aria-expanded', 'false');
        return;
      }
      const item = a.closest('.nav-item');
      if (!item) return;
      item.classList.add('menu-dismissed');
      const onLeave = () => {
        item.classList.remove('menu-dismissed');
        item.removeEventListener('mouseleave', onLeave);
      };
      item.addEventListener('mouseleave', onLeave);
    });
  });

  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  document.addEventListener('contextmenu', e => {
    if (e.target.closest('img, .brand-logo, .footer-logo, .member-photo, .prof-photo, .profile-photo, .sel-image, .sel-blur, .sel-thumb, .slide, .lb-img, .lightbox, .hero-bg, .topic-tile')) {
      e.preventDefault();
    }
  });
  document.addEventListener('dragstart', e => {
    if (e.target.tagName === 'IMG' || e.target.closest('.member-photo, .prof-photo, .profile-photo, .sel-image, .slide, .topic-tile')) {
      e.preventDefault();
    }
  });

  document.dispatchEvent(new CustomEvent('site:ready'));
})();
