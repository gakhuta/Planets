let menuBtn = document.querySelector('.menu-btn')
let slider = document.querySelector('.slider')

menuBtn.addEventListener ('click', () => {
    slider.classList.toggle('active')
})

if (localStorage.getItem('LS_values')) {
    let values = JSON.parse(localStorage.getItem('LS_values'))
    document.querySelector('.register-btn').textContent = `Welcome back ${values.usr}!` 
}