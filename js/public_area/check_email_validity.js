const email = document.querySelector('#email');

function checkValidEmail(emailValue) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailValue)) {
        alert('Please insert a valid email address.');
        email.value = '';
        return false;
    }
    return true;
}