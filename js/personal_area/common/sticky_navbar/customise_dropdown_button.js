var url = window.location.href;
if (url.includes("/check_reviews.html")) {
    url = document.referrer;
}
var dropdownButton = document.getElementById("dropdown_button");


if (url.includes("/business_area/")) {
    username = "Residenza Cristina";
} else if (url.includes("/user_area/")) {
    username = "Rebecca Ceccatelli";

    var paymentMethodsButton = document.createElement("a");
    paymentMethodsButton.href = "payment_methods.html";
    paymentMethodsButton.innerHTML = '<button id="paymentMethodsButton" class="modal_button">Payment Methods</button>';

    var dropdownMenu = document.getElementById("dropdown_menu");
    dropdownMenu.insertBefore(paymentMethodsButton, dropdownMenu.firstChild);
}

dropdownButton.textContent = username;

var ellipsisSpan = document.createElement("span");
ellipsisSpan.className = "ellipsis";
ellipsisSpan.textContent = "...";
dropdownButton.appendChild(ellipsisSpan);