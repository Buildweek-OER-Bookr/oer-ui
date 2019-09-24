let container = document.querySelector('.container')
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

async function getUser(name) {
  const url = `https://api.github.com/users/${name}`
  const response = await fetch(url)
  const user = await response.json()
  return {
    name: user.name,
    image: user.avatar_url
  }
}

const members = document.querySelectorAll('.member')

Array.from(members)
  .map(async member => {
    const user = await getUser(member.dataset.member)
    const role = member.dataset.role
    const div = document.createElement('div',)
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const username = document.createTextNode(`${user.name}`)
    const bio = document.createTextNode(`${role}`)
    div.classList.add('info')
    img.src = `${user.image}`
    img.alt = `${user.name} avatar`
    h1.appendChild(username); 
    p.appendChild(bio)
    member.appendChild(div)
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(p)
  })
