const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', function (e) {
    if (!isValidEmail(email.value)) {
        alert('Please insert a valid email address.');
        e.preventDefault();
    } else if (password.value !== confirmPassword.value) {
        alert('Passwords do not match.');
        password.value = '';
        confirmPassword.value = '';
        e.preventDefault();
    }
    else {
        alert("Registration successful!");
        if (email.value === "rebeccaceccatelli@gmail.com") {
            window.location.href = "../../html/user_section/user_dashboard.html";
        }
        else {
            window.location.href = "../../html/business_section/business_dashboard.html";
        }
    }
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
