const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password_confirmation');

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
