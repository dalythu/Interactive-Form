/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/
//job role functionality
const nameField = document.getElementById('name');
const jobRoleField = document.getElementById('title');
const otherJobRoleField = document.getElementById('other-job-role');
nameField.focus(); //name field loads in focus
otherJobRoleField.style.display = 'none';
        otherJobRoleField.style.display = 'inherit';
jobRoleField.addEventListener('change', e => {
	if (e.target.value == 'other') {
		otherJobRoleField.style.display = 'inherit';
	} else {
		otherJobRoleField.style.display = 'none';
	}
});
//Tshirt info functionality 
const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOptions = color.children;
color.disabled = true;
design.addEventListener('change', e => {
	color.disabled = false;
	for (let i = 0; i < colorOptions.length; i++) {
		const currentOption = colorOptions[i];
		const dataTheme = currentOption.getAttribute('data-theme');
		if (dataTheme == design.value) {
			currentOption.selected = true;
			currentOption.hidden = false;
		} else {
			currentOption.selected = false;
			currentOption.hidden = true;
		}
	}
});
//Register for Activities functionality
const registration = document.getElementById('activities');
const totalElement = document.getElementById('activities-cost');
let displayedCost = 0;
registration.addEventListener('change', e => {
	let cost = e.target.getAttribute('data-cost');
	if (e.target.checked) {
		displayedCost += parseInt(cost);
	} else {
		displayedCost -= parseInt(cost);
	}
	totalElement.innerHTML = 'Total: $' + displayedCost;
});
//Payment info functionality
let userPayment = document.getElementById('payment');
let paymentMethods = document.getElementsByClassName('payment-methods')[0];
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
payPal.style.display = 'none';
bitCoin.style.display = 'none';
userPayment.children[1].setAttribute('selected', true);
userPayment.addEventListener('change', e => {
	if (e.target.value == 'credit-card') {
		creditCard.style.display = 'inherit';
		payPal.style.display = 'none';
		bitCoin.style.display = 'none';
	} else if (e.target.value == 'paypal') {
		payPal.style.display = 'inherit';
		creditCard.style.display = 'none';
		bitCoin.style.display = 'none';
	} else if (e.target.value == 'bitcoin') {
		bitCoin.style.display = 'inherit';
		payPal.style.display = 'none';
		creditCard.style.display = 'none';
	}
})
/* 
For visibility, two variables previously defined
const nameField = document.getElementById('name');
const registration = document.getElementById('activities');
*/
//Form Validation Functionality
const emailField = document.getElementById('email');
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');
let activitiesBoxes = registration.querySelectorAll('[type="checkbox"]');
form.addEventListener('submit', e => {
	if (isNameValid() && isEmailValid() && isRegisterValid() && isPaymentValid()) {
		return true;
	} else {
		e.preventDefault();
		errorMessage(isNameValid(), nameField.parentElement);
		errorMessage(isEmailValid(), emailField.parentElement);
		errorMessage(isRegisterValid(), registration);
	}
	if (userPayment.value = 'credit-card') {
		errorMessage(isCardNumValid(), cardNum.parentElement);
		errorMessage(isZipValid(), zipCode.parentElement);
		errorMessage(isCvvValid(), cvv.parentElement);
	}
});
//functions for testing
function isNameValid() {
	return /^[A-Za-z]+$/.test(nameField.value);
}

function isEmailValid() {
	return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailField.value);
}

function isCardNumValid() {
	return /^\d{13,16}$/.test(cardNum.value);
}

function isZipValid() {
	return /^\d{5}$/.test(zipCode.value);
}

function isCvvValid() {
	return /^\d{3}$/.test(cvv.value);
}

function isRegisterValid() {
	let registerSelect = false;
	for (let i = 0; i < activitiesBoxes.length; i++) {
		if (activitiesBoxes[i].checked) {
			registerSelect = true;
		}
	}
	return registerSelect;
}

function isPaymentValid() {
	if (userPayment.value == 'credit-card') {
		if (isCardNumValid() && isZipValid() && isCvvValid()) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}
//Accessibility functionality 
for (let i = 0; i < activitiesBoxes.length; i++) {
	activitiesBoxes[i].addEventListener('focus', e => {
		activitiesBoxes[i].parentElement.className += 'focus';
	});
	activitiesBoxes[i].addEventListener('blur', e => {
		activitiesBoxes[i].parentElement.removeAttribute('class', 'focus');
	});
}

function errorMessage(validationFunction, element) {
	if (!validationFunction) {
		element.classList.add('not-valid');
		element.classList.remove('valid')
		element.lastElementChild.style.display = 'inherit';
	} else {
		element.classList.remove('not-valid');
		element.classList.add('valid');
		element.lastElementChild.style.display = 'none';
	}
}