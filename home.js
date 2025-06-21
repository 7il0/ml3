document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    fetch('header.html').then(r => r.text()),
    fetch('footer.html').then(r => r.text())
  ]).then(([hdr, ftr]) => {
    document.getElementById('header-placeholder').innerHTML = hdr;
    document.getElementById('footer-placeholder').innerHTML = ftr;
  });

  const courses = [
    { id:1, title:'Intro a ML',          desc:'Conceptos básicos y ejercicios prácticos.', img:'curso1.jpg' },
    { id:2, title:'Redes Neuronales',    desc:'Diseña y entrena tus propias redes.',       img:'curso2.png' },
    { id:3, title:'Python para ML',      desc:'Del cero a experto en Python ML.',           img:'curso3.jpg' }
  ];

  const container = document.getElementById('featured-courses');
  courses.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <!-- Usa directamente c.img -->
      <img src="${c.img}" alt="${c.title}" />
      <div class="card-content">
        <h3>${c.title}</h3>
        <button data-id="${c.id}">Ver detalles</button>
      </div>
    `;
    container.appendChild(card);
  });

  const dialog   = document.getElementById('course-dialog');
  const dlgTitle = document.getElementById('dlg-title');
  const dlgDesc  = document.getElementById('dlg-desc');
  const dlgClose = document.getElementById('dialog-close');
  const backdrop = dialog.querySelector('.dialog-backdrop');

  container.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      const course = courses.find(x => x.id == e.target.dataset.id);
      dlgTitle.textContent = course.title;
      dlgDesc.textContent  = course.desc;
      dialog.classList.add('open');
    }
  });

  dlgClose.addEventListener('click', () => dialog.classList.remove('open'));
  backdrop.addEventListener('click', () => dialog.classList.remove('open'));

  document.getElementById('btn-view-catalogo')
    .addEventListener('click', () => location.href = 'catalogo.html');
});
