document.getElementById("back-button").addEventListener("click", function() {
    if (document.referrer && !window.location.href.includes("registration_client_type_choice.html") && !window.location.href.includes("dashboard")) {
        window.location.href = document.referrer;
    } else {
        if (window.location.href.includes("registration_client_type_choice.html")) {
            window.location.href = "homepage.html";
        }
        if (window.location.href.includes("dashboard")) {
            window.close();
            window.open("../../public_area/homepage.html");
        }
    }
});
