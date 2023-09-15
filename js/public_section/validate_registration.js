const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password_confirmation');

form.addEventListener('submit', function (e) {
    if (!checkValidEmail(email.value)) {
        e.preventDefault();
    } else if (!checkPasswordMatch(password.value, confirmPassword.value)) {
        e.preventDefault();
    } else {
        alert("Registration successful!");
        if (email.value === "rebeccaceccatelli@gmail.com") {
            window.location.href = "../../html/user_area/user_dashboard.html";
        }
        else {
            window.location.href = "../../html/business_area/business_dashboard.html";
        }
    }
});

function checkValidEmail(emailValue) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailValue)) {
        alert('Please insert a valid email address.');
        email.value = '';
        return false;
    }
    return true;
}

function checkPasswordMatch(firstPassword, secondPassword) {
    if (firstPassword !== secondPassword) {
        alert('Passwords do not match.');
        password.value = '';
        confirmPassword.value = '';
        return false;
    }
    return true;
}
