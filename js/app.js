// Mobile navigation toggle -------------------------------------------------
const toggle = document.querySelector('#mobile-menu');
const menu = document.querySelector('.navbar__menu');

function setMenu(open) {
  toggle.classList.toggle('is-active', open);
  menu.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', String(open));
}

if (toggle && menu) {
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('active')));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

// Contact form (demo) --------------------------------------------------------
// The site is static, so there is no server to receive messages. To make the form
// work, point the form's action at a form service (e.g. Formspree) and delete
// this handler.
const form = document.querySelector('#fcf-form-id');
const status = document.querySelector('#contact-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.hidden = false;
    status.textContent = 'Thanks! This is a demo form, so your message was not actually sent.';
    form.reset();
  });
}
