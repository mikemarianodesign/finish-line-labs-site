const filters = document.querySelector('.filters');
const buttons = filters.querySelectorAll('button');
const sections = document.querySelectorAll('#work .catalog');

function showCategory(category) {
  for (const section of sections) {
    section.hidden = category !== 'all' && section.id !== category;
  }
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.dataset.category === category));
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => showCategory(button.dataset.category));
}
filters.hidden = false;
