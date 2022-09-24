let usernameInput = document.querySelector('.username')
let emailInput = document.querySelector('.email')
let passwordInput = document.querySelector('.password')
let repeatPasswordInput = document.querySelector('.repeatPassword')
let registerBtn = document.querySelector('.submit-btn')
let showBtn = document.querySelector('.showbtn')

if (localStorage.getItem('LS_values')) {
    alert('Already Registered')
    window.history.back()
}

showBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (passwordInput.getAttribute('type') == 'password') {
        passwordInput.setAttribute('type', 'text')
    } else {
        passwordInput.setAttribute('type', 'password')
    }
})

let values = {
    usr: '',
    email: '',
    password: '',
    _password: '',
}

let getValues = () => {
    values.usr = usernameInput.value
    values.email = emailInput.value
    values.password = passwordInput.value
    values._password = repeatPasswordInput.value
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassowrd = (pass) => {
    return pass.match(
        /^[A-Za-z]\w{7,16}$/
    )
}

let register = (e) => {
    e.preventDefault()
    getValues()

    if (!validateEmail(values.email)) { 
        emailInput.style.border = '1px red solid'
        return
    } else {
        emailInput.style.border = 'unset'
    }

    if (!validatePassowrd(values.password)) { 
        passwordInput.style.border = '1px red solid'
        return
    } else {
        passwordInput.style.border = 'unset'
    }

    if (values.password != values._password) {
        repeatPasswordInput.style.border = '1px red solid'
        return
    } else {
        repeatPasswordInput.style.border = 'unset'
    }

    let stringified = JSON.stringify(values)
    localStorage.setItem('LS_values', stringified)

    window.history.back()

}

registerBtn.addEventListener('click', register)