const nameField = document.getElementById("name")
const jobRoleField = document.getElementById("title")
const otherJobRoleField = document.getElementById("other-job-role")

nameField.focus();

otherJobRoleField.style.display = 'none';

jobRoleField.addEventListener("change", e => {
    if (e.target.value == "other") {
        otherJobRoleField.style.display = 'inherit';
    } else {
        otherJobRoleField.style.display = 'none';
    }
});

const design = document.getElementById("design");
const color = document.getElementById("color");
const colorOptions = color.children;

color.disabled = true;

design.addEventListener("change", e => {
    color.disabled = false;
    for (let i=0; i<colorOptions.length;i++) {
        const currentOption = colorOptions[i];
        const dataTheme = currentOption.getAttribute("data-theme");
        if (dataTheme == design.value) {
            currentOption.selected = true;
            currentOption.hidden = false;
        } else {
            currentOption.selected = false;
            currentOption.hidden = true;
        }
    }
});

const registration = document.getElementById("activities");
const totalElement= document.getElementById("activities-cost");
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

let userPayment = document.getElementById('payment');
let paymentMethods = document.getElementsByClassName('payment-methods')[0];
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

payPal.style.display = 'none';
bitCoin.style.display = 'none';

userPayment.children[1].setAttribute("selected", true);

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


