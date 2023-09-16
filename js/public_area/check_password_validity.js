const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password_confirmation');

function checkPasswordMatch(firstPassword, secondPassword) {
    if (firstPassword !== secondPassword) {
        alert('Passwords do not match.');
        password.value = '';
        confirmPassword.value = '';
        return false;
    }
    return true;
}
