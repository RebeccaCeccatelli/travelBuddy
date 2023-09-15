const form = document.querySelector('form');

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
