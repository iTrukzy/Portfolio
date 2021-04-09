const navbarMovil = document.getElementById('navbar__movil')

document.getElementById('navbar__open').addEventListener('click', () => {
    navbarMovil.classList.add('show')
})
document.getElementById('navbar__close').addEventListener('click', () => {
    navbarMovil.classList.remove('show')
})



window.addEventListener('scroll', () => {
    let scrollUp = document.getElementById('scroll__up')
    let navbar = document.getElementById('navbar__site')
    let scrollDown = document.getElementById('scroll__down')
    scrollUp.classList.toggle('showUp', window.scrollY > 0)
    navbar.classList.toggle('sticky', window.scrollY > 0)
    scrollDown.classList.toggle('scroll__rotate', window.scrollY > 0)
})