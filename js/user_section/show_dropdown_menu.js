const userMenuButton = document.getElementById("dropdown_menu");
const userMenu = document.getElementById("userMenu");
const accountDetailsButton = document.getElementById("accountDetailsButton");
const logoutButton = document.getElementById("logoutButton");

userMenuButton.addEventListener("click", function () {
    if (userMenu.style.display === "block") {
        userMenu.style.display = "none";
    } else {
        userMenu.style.display = "block";
    }
});

accountDetailsButton.addEventListener("click", function () {
    // Aggiungi qui la logica per aprire la pagina degli account details
    // Ad esempio, puoi reindirizzare l'utente a una pagina dedicata agli account details.
    // Esempio:
    // window.location.href = "account_details.html";
});

logoutButton.addEventListener("click", function () {
    // Aggiungi qui la logica per eseguire il logout dell'utente
    // Ad esempio, puoi reindirizzare l'utente alla pagina di login.
    // Esempio:
    // window.location.href = "login.html";
});
