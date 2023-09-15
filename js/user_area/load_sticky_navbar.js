$(document).ready(function () {
    $.ajax({
        url: 'sticky_navbar.html',
        dataType: 'html',
        success: function (data) {
            $('#navbar-container').html(data);

            // Dopo aver caricato la navbar, aggiungi l'evento click al pulsante "Rebecca Ceccatelli"
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