document.getElementById("back-button").addEventListener("click", function() {
    if (document.referrer && !window.location.href.includes("dashboard")) {
        window.location.href = document.referrer;
    } else {
        window.location.href = "../../public_area/homepage.html";
    }
});
