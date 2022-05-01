document.addEventListener('DOMContentLoaded', loadJS, false)

function loadJS() {
  document.getElementById('toggle--button').onclick = toggleButton
}

function toggleButton() {
  document.getElementById('toggle--button').classList.toggle('button--red')
}
