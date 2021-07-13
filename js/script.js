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
