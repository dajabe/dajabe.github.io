var contactForm = document.querySelector('.contact-form')
var submitButton = document.querySelector('#contact--submit')

var name = document.querySelector('#contact--name')
var email = document.querySelector('#contact--email')
var message = document.querySelector('#contact--message')

var updater = function (e) {
    e.preventDefault()
    window.alert(name.value + " from " + email.value + " says, \n" + message.value) }

contactForm.addEventListener('submit', updater, false)
