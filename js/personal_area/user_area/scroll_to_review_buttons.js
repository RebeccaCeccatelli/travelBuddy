document.addEventListener("DOMContentLoaded", function () {
    var reviewsButton = document.querySelector('[data-description="reviews"]');

    reviewsButton.addEventListener("click", function () {
        var addReviewButton = document.getElementById("add-review-button");

        var navbar = document.querySelector(".sticky-navbar");
        var navbarHeight = navbar ? navbar.offsetHeight : 0;

        var addReviewButtonPosition = addReviewButton.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: addReviewButtonPosition,
            behavior: "smooth"
        });
    });
});