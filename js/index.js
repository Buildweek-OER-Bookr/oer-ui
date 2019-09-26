const scrollToTop = () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
})

const container = document.querySelector('.container')
const toggleButton = document.querySelector('.toggle-button')
const closeButton = document.querySelector('.close-button')

toggleButton.addEventListener('click', (e) => {
  e.preventDefault()
  container.classList.toggle('show-panel');
  setTimeout(scrollToTop, 500);
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
    image: user.avatar_url,
    url: user.html_url
  }
}

const members = document.querySelectorAll('.member')

Array.from(members)
  .map(async member => {
    const user = await getUser(member.dataset.member)
    const role = member.dataset.role
    const div = document.createElement('div')
    const link = document.createElement('a')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const username = document.createTextNode(`${user.name}`)
    const bio = document.createTextNode(`${role}`)
    div.classList.add('info')
    link.href= `${user.url}`
    img.src = `${user.image}`
    img.alt = `${user.name} avatar`
    h1.appendChild(username); 
    p.appendChild(bio)
    member.appendChild(div)
    div.appendChild(link)
    link.appendChild(img)
    link.appendChild(h1)
    link.appendChild(p)
  })
