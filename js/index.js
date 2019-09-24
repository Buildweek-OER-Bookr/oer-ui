let container = document.querySelector('.home')
let toggleButton = document.querySelector('.toggle-button')
let closeButton = document.querySelector('.close-button')

toggleButton.addEventListener('click', (e) => {
  e.preventDefault()
  container.classList.toggle('show-panel');
})

closeButton.addEventListener('click', (e) => {
  e.preventDefault()
  container.classList.remove('show-panel')
})