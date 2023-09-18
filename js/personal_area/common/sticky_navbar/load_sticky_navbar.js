$(document).ready(function () {
    $.ajax({
        url: '../../../html/personal_area/common/sticky_navbar.html',
        dataType: 'html',
        success: function (data) {
            $('#navbar-container').html(data);

            const dropdownButton = document.getElementById("dropdown_button");
            const dropdownMenu = document.getElementById("dropdown_menu");

            dropdownButton.addEventListener("click", function () {
                if (dropdownMenu.style.display === "block") {
                    dropdownMenu.style.display = "none";
                } else {
                    dropdownMenu.style.display = "block";
                }
            });
        }
    });
});

var url = window.location.href;
if (url.includes("check_reviews.html") || url.includes("account_details.html")) {
    url = document.referrer;
}

var dropdownButton = document.getElementById("dropdown_button");

if (url.includes("/business_area/")) {
    dropdownButton.textContent = "Residenza Cristina";
} else if (url.includes("/user_area/")) {
    dropdownButton.textContent = "Rebecca Ceccatelli";
}
