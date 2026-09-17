const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copyEmail');
copyButton.addEventListener('click', async () => {
  const original = 'Copy email address →';
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    copyButton.textContent = 'Email copied ✓';
  } catch {
    copyButton.textContent = copyButton.dataset.email;
  }
  window.setTimeout(() => { copyButton.textContent = original; }, 2200);
});
