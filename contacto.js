document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(r => r.text())
    .then(html => document.getElementById('header-placeholder').innerHTML = html);
  fetch('footer.html')
    .then(r => r.text())
    .then(html => document.getElementById('footer-placeholder').innerHTML = html);

  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = form.name;
    const email = form.email;
    const message = form.message;

    document.getElementById('error-name').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-message').textContent = '';

    if (name.value.trim().length < 2) {
      document.getElementById('error-name').textContent = 'Ingresa tu nombre.';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      document.getElementById('error-email').textContent = 'Correo inválido.';
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById('error-message').textContent = 'Escribe al menos 10 caracteres.';
      valid = false;
    }

    if (!valid) return;

    form.hidden = true;
    successMsg.hidden = false;

  });
});
