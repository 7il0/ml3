document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav    = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header') && nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});
