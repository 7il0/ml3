document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

async function initPage() {
  const [ hdr, ftr, dlg ] = await Promise.all([
    fetch('header.html').then(r => r.text()),
    fetch('footer.html').then(r => r.text()),
    fetch('dialog.html').then(r => r.text())
  ]);

  document.getElementById('header-placeholder').innerHTML   = hdr;
  document.getElementById('footer-placeholder').innerHTML   = ftr;
  document.getElementById('dialog-placeholder').innerHTML   = dlg;

  setupCourses();
}

function setupCourses() {
  const courses = [
    { id:1, title:'Intro a ML',          desc:'Conceptos básicos y ejercicios prácticos.', img:'curso1.jpg' },
    { id:2, title:'Redes Neuronales',    desc:'Diseña y entrena tus propias redes.',       img:'curso2.png' },
    { id:3, title:'Python Avanzado',     desc:'Automatiza tu flujo de ML con Python.',     img:'curso3.jpg' },
    { id:4, title:'Visión Computacional',desc:'Procesamiento de imágenes con ML.',        img:'curso4.jpg' },
    { id:5, title:'Procesamiento de Lenguaje', desc:'NLP y modelos de lenguaje.', img:'curso5.png' }
  ];

  const list       = document.getElementById('courses-list');
  const dialog     = document.getElementById('course-dialog');
  const dlgTitle   = document.getElementById('dlg-title');
  const dlgDesc    = document.getElementById('dlg-desc');
  const dlgClose   = document.getElementById('dialog-close');
  const backdrop   = dialog.querySelector('.dialog-backdrop');

  courses.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${c.img}" alt="${c.title}" />
      <div class="card-content">
        <h3>${c.title}</h3>
        <button data-id="${c.id}">Ver detalles</button>
      </div>
    `;
    list.appendChild(card);
  });

  list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      const course = courses.find(x => x.id == e.target.dataset.id);
      dlgTitle.textContent = course.title;
      dlgDesc.textContent  = course.desc;
      dialog.classList.add('open');
    }
  });

  dlgClose.addEventListener('click', ()=> dialog.classList.remove('open'));
  backdrop.addEventListener('click', ()=> dialog.classList.remove('open'));
}
