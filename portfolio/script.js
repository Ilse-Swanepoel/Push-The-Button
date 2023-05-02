//Script for Hiding and SHowing Nav-bar and page contents. GL

const menuBtn = document.querySelector('.burger-menu')
const navItems = document.querySelector('.display-menu')
const aboutMe = document.querySelector('.about-me')
const nameh1 = document.querySelectorAll('.nameh1')
const nameh2 = document.querySelector('.nameh2')
const navItemss = document.querySelectorAll('.nav-item')

document.addEventListener('DOMContentLoaded', function () {
  menuBtn.classList.remove('close')
  menuBtn.classList.add('open')
  navItems.classList.remove('open')
  navItems.classList.add('close')
})

menuBtn.addEventListener('click', toggleMenu)
navItemss.forEach((navItem) => {
  navItem.addEventListener('click', toggleBurger)
})

function toggleMenu() {
  menuBtn.classList.add('close')
  menuBtn.classList.remove('open')
  nameh2.classList.add('close')
  nameh2.classList.remove('open')
  nameh1.forEach((item) => {
    item.classList.add('close')
    item.classList.remove('open')
  })
  aboutMe.classList.add('close')
  aboutMe.classList.remove('open')
  navItems.classList.add('open')
  navItems.classList.remove('close')
}

function toggleBurger() {
  menuBtn.classList.remove('close')
  menuBtn.classList.add('open')
  nameh2.classList.add('open')
  nameh2.classList.remove('close')
  nameh1.forEach((item) => {
    item.classList.add('open')
    item.classList.remove('close')
  })
  aboutMe.classList.add('open')
  aboutMe.classList.remove('close')
  navItems.classList.remove('open')
  navItems.classList.add('close')
}
