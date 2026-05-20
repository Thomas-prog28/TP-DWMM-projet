const toggle = document.getElementById('themeToggle');
const img = toggle.querySelector('.header__theme-toggle-icon');

// Au chargement : lire le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateButton(savedTheme);

// Au clic : switcher
toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateButton(next);
});

function updateButton(theme) {
  // changer la source de l’image selon le thème
  if (theme === 'dark') {
    img.src = '/assets/images/bobine_dark.png';
    toggle.setAttribute('aria-label', 'Passer au thème clair');
  } else {
    img.src = '/assets/images/bobine_light.png';
    toggle.setAttribute('aria-label', 'Passer au thème sombre');
  }
}
