/**
 * Studiotra Portfolio — Main JS
 * Scroll animations, marquee, nav
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavScroll();
  initMoveToTop();
  initProjectProgress();
  initParallax();
});

/**
 * Intersection Observer: reveal elements on scroll
 */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/**
 * Nav: add .scrolled when user scrolls
 */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once on load
}

/**
 * Move to top: inject button, show on scroll, smooth scroll to top
 */
function initMoveToTop() {
  const btn = document.createElement('button');
  btn.className = 'move-to-top';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>`;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(btn);

  const toggle = () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

/**
 * Project detail: progress bar fills as user scrolls through Context/Problem → Key Highlights
 */
function initProjectProgress() {
  const sections = document.querySelectorAll('[data-progress-section]');
  const fill = document.getElementById('projectProgressFill');
  if (!sections.length || !fill) return;

  const updateProgress = () => {
    const first = sections[0];
    const last = sections[sections.length - 1];
    const firstTop = first.getBoundingClientRect().top + window.scrollY;
    const lastBottom = last.getBoundingClientRect().bottom + window.scrollY;
    const viewportMid = window.scrollY + window.innerHeight * 0.5;
    const range = lastBottom - firstTop;

    if (range <= 0) {
      fill.style.height = '100%';
      return;
    }

    const progress = Math.max(0, Math.min(100, ((viewportMid - firstTop) / range) * 100));
    fill.style.height = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

/**
 * Parallax: elements with data-parallax lag behind scroll (0.3 = moves 30% as fast, creating depth)
 */
function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = document.querySelectorAll('[data-parallax]');
  if (!elements.length) return;

  const update = () => {
    const scrollY = window.scrollY;
    elements.forEach((el) => {
      const factor = parseFloat(el.dataset.parallax) || 0.2;
      const offset = scrollY * factor * 0.5;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}
