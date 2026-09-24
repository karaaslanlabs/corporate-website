const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const pageProgress = document.querySelector('[data-page-progress]');
const method = document.querySelector('[data-method]');
const methodProgress = document.querySelector('[data-method-progress]');
const product = document.querySelector('[data-product]');
const hero = document.querySelector('[data-hero]');
const heroField = hero?.querySelector('.hero-field');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const closeMenu = () => {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Menüyü aç');
  nav.classList.remove('is-open');
  header?.classList.remove('is-open');
};

toggle?.addEventListener('click', () => {
  if (!nav) return;
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Menüyü aç' : 'Menüyü kapat');
  nav.classList.toggle('is-open', !open);
  header?.classList.toggle('is-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
let framePending = false;

const syncScrollState = () => {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 24);

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pageRatio = scrollable > 0 ? clamp(y / scrollable) : 0;
  if (pageProgress) pageProgress.style.transform = 'scaleY(' + pageRatio + ')';

  if (method && methodProgress) {
    const rect = method.getBoundingClientRect();
    const travel = rect.height + window.innerHeight;
    const ratio = clamp((window.innerHeight - rect.top) / travel * 1.65);
    methodProgress.style.transform = 'scaleX(' + ratio + ')';
  }

  if (product && !reducedMotion) {
    const rect = product.getBoundingClientRect();
    const progress = clamp((window.innerHeight - rect.top) / (rect.height + window.innerHeight));
    const a = (progress - 0.5) * -70;
    const b = (progress - 0.5) * 58;
    product.style.setProperty('--product-y-a', a.toFixed(1) + 'px');
    product.style.setProperty('--product-y-b', b.toFixed(1) + 'px');
  }

  framePending = false;
};

const requestSync = () => {
  if (framePending) return;
  framePending = true;
  window.requestAnimationFrame(syncScrollState);
};

syncScrollState();
window.addEventListener('scroll', requestSync, { passive: true });
window.addEventListener('resize', requestSync, { passive: true });
if (reducedMotion) {
  document.querySelectorAll('.reveal-x').forEach((element) => element.classList.add('is-visible'));
  document.querySelectorAll('.domain-panel, .principle-lines article').forEach((element) => element.classList.add('is-in'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add(entry.target.classList.contains('reveal-x') ? 'is-visible' : 'is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  document.querySelectorAll('.reveal-x, .domain-panel, .principle-lines article').forEach((element) => observer.observe(element));
}

if (!reducedMotion && finePointer && hero && heroField) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
    heroField.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
  });

  hero.addEventListener('pointerleave', () => {
    heroField.style.transform = 'translate3d(0,0,0)';
  });
}
