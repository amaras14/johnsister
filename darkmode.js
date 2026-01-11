/*let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const disableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}
const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'null')
}

if(darkmode === 'active') disableDarkmode()

themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
})*/

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.removeItem('darkmode')
}

// Load saved mode
if (darkmode === 'active') {
  enableDarkmode()
}

// Toggle on click
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode === 'active' ? disableDarkmode() : enableDarkmode()
})
