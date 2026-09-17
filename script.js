const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copyEmail');
copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(copyButton.dataset.email);
  copyButton.textContent = 'Email copied ✓';
  setTimeout(() => copyButton.textContent = 'Copy email address', 1800);
});
