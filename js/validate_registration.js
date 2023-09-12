const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', function (e) {
    if (!isValidEmail(email.value)) {
        alert('Inserisci un indirizzo email valido.');
        e.preventDefault();
    } else if (password.value !== confirmPassword.value) {
        alert('Le password non coincidono.');
        // Svuota i campi delle password
        password.value = '';
        confirmPassword.value = '';
        e.preventDefault();
    }
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
