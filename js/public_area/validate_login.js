const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    checkAccountExistenceAndRedirect(email, password);

    loginForm.reset();
});

