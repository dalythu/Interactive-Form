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