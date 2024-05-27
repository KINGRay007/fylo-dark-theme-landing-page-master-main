const inputEmail = document.getElementById('email-input')
const form = document.getElementById('form')
const errorMsg = document.getElementById('err-msg')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // VALIDATION FOR NO EMAIL
    if (inputEmail.value === '') {
        inputEmail.classList.add('input-err')
        inputEmail.classList.add('margin-bottom')
        errorMsg.innerHTML = 'Email can not be empty'
        return
        // VALIDATION FOR NO --> @ <-- IN AN EMAIL
    } else if (inputEmail.value.indexOf("@") < 0) {
        inputEmail.classList.add('input-err')
        inputEmail.classList.add('margin-bottom')
        errorMsg.innerHTML = 'Please provide a valid email address'
        return
        // VALIDATION FOR NO --> .COM <-- IN AN EMAIL
    } else if (inputEmail.value.indexOf(".com") < 0) {
        inputEmail.classList.add('input-err')
        inputEmail.classList.add('margin-bottom')
        errorMsg.innerHTML = 'Please provide a valid email address'
        return
    } else {
        inputEmail.classList.remove('input-err')
        errorMsg.classList.add('ok-msg')
        errorMsg.innerHTML = ''
        inputEmail.value = ''
        // setTimeout(() => {
        //     window.location.reload()
        // }, 2000);
    }
})