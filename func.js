const headerInputEmail = document.getElementById('illustrationH-email')
const subInputEmail = document.getElementById('sub-email')
const headerForm = document.getElementById('header-form')
const subForm = document.getElementById('sub-form')
const errorMsgSpan = document.getElementById('error_msg_span')
const errorMsgSubscribe = document.getElementById('sub-err-msg')

headerForm.addEventListener('submit',  (event) => {
    event.preventDefault()
    // VALIDATION FOR NO EMAIL
    if (headerInputEmail.value === '') {
        errorMsgSpan.innerHTML = 'Email can not be empty'
        headerInputEmail.classList.add('err-msg-input')
        return
        // VALIDATION FOR NO --> @ <-- IN AN EMAIL
    } else if (headerInputEmail.value.indexOf("@") < 0) {
        headerInputEmail.classList.add('err-msg-input')
        errorMsgSpan.innerHTML = 'Please provide a valid email address'
        return
        // VALIDATION FOR NO --> .COM <-- IN AN EMAIL
    } else if (headerInputEmail.value.indexOf(".com") < 0) {
        headerInputEmail.classList.add('err-msg-input')
        errorMsgSpan.innerHTML = 'Please provide a valid email address'
        return
    } else {
        headerInputEmail.classList.remove('err-msg-input')
        errorMsgSpan.innerHTML = ''
        headerInputEmail.value = ''
        alert('Email has been registered')
    }
})

subForm.addEventListener('submit',  (event) => {
    event.preventDefault()
    // VALIDATION FOR NO EMAIL
    if (subInputEmail.value === '') {
        errorMsgSubscribe.innerHTML = 'Email can not be empty'
        subInputEmail.classList.add('err-sub-input')
        return
        // VALIDATION FOR NO --> @ <-- IN AN EMAIL
    } else if (subInputEmail.value.indexOf("@") < 0) {
        subInputEmail.classList.add('err-sub-input')
        errorMsgSubscribe.innerHTML = 'Please provide a valid email address'
        return
        // VALIDATION FOR NO --> .COM <-- IN AN EMAIL
    } else if (subInputEmail.value.indexOf(".com") < 0) {
        subInputEmail.classList.add('err-sub-input')
        errorMsgSubscribe.innerHTML = 'Please provide a valid email address'
        return
    } else {
        subInputEmail.classList.remove('err-sub-input')
        errorMsgSubscribe.innerHTML = ''
        subInputEmail.value = ''
        alert('Email has been registered')
    }
})