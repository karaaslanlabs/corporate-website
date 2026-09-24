const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let headerScrolled = null;
let scrollFramePending = false;

const syncHeaderState = () => {
  const nextScrolled = window.scrollY > 18;
  if (nextScrolled !== headerScrolled) {
    headerScrolled = nextScrolled;
    header?.classList.toggle('is-scrolled', nextScrolled);
  }
  scrollFramePending = false;
};

syncHeaderState();
window.addEventListener('scroll', () => {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(syncHeaderState);
}, { passive: true });

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

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

if (reducedMotion) {
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('is-visible');
  });
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.12,
  });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}


const hero = document.querySelector('.hero');
const systemFrame = document.querySelector('.system-frame');
const finePointer = window.matchMedia('(pointer: fine)').matches;

if (!reducedMotion && finePointer && hero) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--pointer-x', `${x.toFixed(2)}%`);
    hero.style.setProperty('--pointer-y', `${y.toFixed(2)}%`);

    if (systemFrame) {
      const cx = event.clientX / window.innerWidth - 0.5;
      const cy = event.clientY / window.innerHeight - 0.5;
      systemFrame.style.transform = `rotateY(${(-5 + cx * 3).toFixed(2)}deg) rotateX(${(2 - cy * 3).toFixed(2)}deg)`;
    }
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.removeProperty('--pointer-x');
    hero.style.removeProperty('--pointer-y');
    systemFrame?.style.removeProperty('transform');
  });
}
