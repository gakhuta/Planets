let menuBtn = document.querySelector('.menu-btn')
let slider = document.querySelector('.slider')

menuBtn.addEventListener ('click', () => {
    slider.classList.toggle('active')
})