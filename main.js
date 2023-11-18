function validation() {
    let form = document.getElementById('form')
    let email = document.getElementById('email').value
    let text = document.getElementById('text')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (pattern.test(email)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = 'Your Email Address in Valid'
        text.style.color = '#00ff00'
        console.log('Y')
    } else {
        form.classList.add('invalid')
        form.classList.remove('valid')
        text.innerHTML = 'Please Enter Valid Email Address'
        text.style.color = '#ff0000'
        console.log('N')
    }

    if (email == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ''
        text.style.color = '#00ff00'
    }
}

document.getElementById('email').addEventListener('keyup', () => {
    validation()
})

//^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
