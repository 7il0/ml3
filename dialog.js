document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('course-dialog');
  const closeBtn = document.getElementById('dialog-close');

  closeBtn.addEventListener('click', () => dialog.classList.remove('open'));
  dialog.querySelector('.dialog-backdrop')
        .addEventListener('click', () => dialog.classList.remove('open'));
});

function openCourseDialog(title, desc) {
  const dialog = document.getElementById('course-dialog');
  document.getElementById('dlg-title').textContent = title;
  document.getElementById('dlg-desc').textContent  = desc;
  dialog.classList.add('open');
}
