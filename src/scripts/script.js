const b = document.querySelector('.button__box')
const c = document.querySelector('nav .nav__ul')
const body = document.querySelector('body')
const filter = document.querySelector('.filter')
b.addEventListener('click', () => {
    c.classList.add('active')
    body.classList.add('active')
    filter.classList.add('active')
})

const exit = document.querySelector('.exit .my-button')
exit.addEventListener('click', () => {
    c.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

filter.addEventListener('click', () => {
    c.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

