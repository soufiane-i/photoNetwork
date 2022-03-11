/* eslint-disable no-undef */
/* eslint-enable no-unused-vars */

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const message = document.getElementById('message')
const champs = document.querySelectorAll('.form-champ')
const submitBtn = document.querySelector('.contact_button')

let firstNameRegex = /^[a-z-]{2,}$/i
let lastNameRegex = /^[a-z ,.'-]{2,}$/i
let messageRegex = /^[a-z ,.'-]{2,}$/i
let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

// variables
let formDataArray = []

// form submit event 
submitBtn.addEventListener('click', submitFunct)

//submit function
function submitFunct(e){
	// Function which display error message
	firstNameCheck()
	lastNameCheck()
	emailCheck()
	messageCheck()
	// if number of valid form input are equal to the total number of input form e.g if all input are valid
	if (formDataArray.length == champs.length) {    
		// Function which reset the form if it was send           
		submitClear()                                            
		modalContainer.style.display = 'none'
	}
  	// refresh array which count valid input number
	formDataArray = []       
	// Don't refresh page                                  
	e.preventDefault()                                        
}

// function which clear form after submit success
function submitClear(){
	console.log('Formulaire envoyé')
	for(let i = 0; i<champs.length; i++){  // loop which clear form inputs 
		champs[i].value = ''
	}
	profilCardTab(1)
	photosSectionTab(1)
	filterTab(1)
	let formBtn = document.querySelector('.contact_button')
	formBtn.focus()
}
  
function firstNameCheck() {
	// Trim() delete blank space around unnecessary + check if prenom input match with prenom regex
	if (firstNameRegex.test(firstName.value.trim())) {            
		formDataArray.push('check') 
		// add 'check' in formDataArray array to count how many input forms are valid
		firstName.classList.remove('form-champ-error')
		firstName.setAttribute('aria-invalid', 'false')
		console.log(firstName.value)             
	} else {
		firstName.classList.add('form-champ-error')
		firstName.setAttribute('aria-invalid', 'true')
	}
}
  
function lastNameCheck() {
	if (lastNameRegex.test(lastName.value.trim())) {
		formDataArray.push('check')
		lastName.classList.remove('form-champ-error')
		lastName.setAttribute('aria-invalid', 'false')
		console.log(lastName.value)
	} else {
		lastName.classList.add('form-champ-error')
		lastName.setAttribute('aria-invalid', 'true')
	}
}
  
  
function emailCheck() {
	if (emailRegex.test(email.value.trim())) {
		formDataArray.push('check')
		email.classList.remove('form-champ-error')
		email.setAttribute('aria-invalid', 'false')
		console.log(email.value) 
	} else {
		email.classList.add('form-champ-error')
		email.setAttribute('aria-invalid', 'true')
	}
}

function messageCheck() {
	if (messageRegex.test(message.value.trim())) {
		formDataArray.push('check')
		message.classList.remove('form-message-champ-error')
		console.log(message.value) 
	} else {
		message.classList.add('form-message-champ-error')
	}
}



