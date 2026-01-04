/*=== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* MENU SHOW */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* MENU HIDDEN*/

if (navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* ==== Remove menu mobile */

const navLinks = document.querySelectorAll('.nav-link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLinks.forEach(link =>
  link.addEventListener('click', linkAction)
)


/*===== HOME TYPED JS =====*/
const typedHome = new Typed('#home-typed', {
  strings: ['SEO Specialist','Web Developer','Content Writer','Graphic Artist'],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  cursorChar: '_',
})

/* ===== ADD SHADOW HEADER ===== */

const shadowHeader = () => {
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greatan than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*===== CONTACT EMAIL JS =====*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  /* The code for sending emails is a simple test.
  
  create your account at https://www.emailjs.com
  and follow the instructions in the video and images
  to send email with your account*/
// servceID - templateID - #form -publicKey
emailjs.sendForm('service_35gb4sh','template_ma46jfb','#contact-form','VrEwk9NSLFAKfgKQs')
.then(() => {
  // Show send message
  contactMessage.textContent = 'Message sent successfully ✅'

  // Remove message after five seconds
  setTimeout(() => {
    contactMessage.textContent = ''
  }, 5000)

  // Clear input fields
  contactForm.reset()
}, () => {
  // Show error message
  contactMessage.textContent = 'Message not snet ( Service Error ) ❌'
})

}

contactForm.addEventListener('submit', sendEmail)
