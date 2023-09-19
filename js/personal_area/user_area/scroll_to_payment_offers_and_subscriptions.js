document.addEventListener("DOMContentLoaded", function () {
    var upgradeButton = document.querySelector('[data-description="upgrade"]');

    upgradeButton.addEventListener("click", function () {
        var goToPaymentButton = document.getElementById("go-to-payment");

        var navbar = document.querySelector(".sticky-navbar");
        var navbarHeight = navbar ? navbar.offsetHeight : 0;

        var goToPaymentButtonPosition = goToPaymentButton.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: goToPaymentButtonPosition,
            behavior: "smooth"
        });
    });
});