document.getElementById("findAndReserveButton").addEventListener("click", function() {
    var expandable = document.getElementById("expandable");
    // Verifica se l'elemento expandable è nascosto
    if (expandable.style.display === "none") {
        expandable.style.display = "block"; // Mostra l'elemento expandable
    } else {
        expandable.style.display = "none"; // Nascondi l'elemento expandable
    }
});