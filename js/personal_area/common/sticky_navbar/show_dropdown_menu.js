const dropdownButton = document.getElementById("dropdown_button");
const dropdownMenu = document.getElementById("dropdown_menu");

dropdownButton.addEventListener("click", function () {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

