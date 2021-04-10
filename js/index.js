const navbarMovil = document.getElementById('navbar__movil')

document.getElementById('navbar__open').addEventListener('click', () => {
    navbarMovil.classList.add('show')
})
document.getElementById('navbar__close').addEventListener('click', () => {
    navbarMovil.classList.remove('show')
})

document.getElementById('aboutMovil').addEventListener('click', () => {
    navbarMovil.classList.remove('show')
})

document.getElementById('skillsMovil').addEventListener('click', () => {
    navbarMovil.classList.remove('show')
})

document.getElementById('projectsMovil').addEventListener('click', () => {
    navbarMovil.classList.remove('show')
})

document.getElementById('contactMovil').addEventListener('click', () => {
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

document.addEventListener('DOMContentLoaded', () => {
    const getProjects = () => {
        fetch('./proyects.json')
            .then(res => res.json())
            .then(data => printProjects(data))
    }

    const printProjects = (data) => {
        console.log(data)
        const projectsContainer = document.querySelector('.projects__body')
    
        const row = document.createElement('div')
        row.classList.add('row')

        let html = ``;
        data.forEach(items => {
            html += `<div data-aos="fade-up" class="items__json col s12 m4 l4">
            <img src=${items.img} alt="${items.title}">
                <div class="hover__items">
                <h6>${items.title}</h6>
                <p>${items.description}</p>
                <a href="${items.link}" target="_blank">Link</a>
                </div>
            </div>`
        });



        row.innerHTML = html
        projectsContainer.appendChild(row)
    }



    getProjects()
})