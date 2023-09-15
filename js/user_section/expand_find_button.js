document.getElementById("findAndReserveButton").addEventListener("click", function() {
    var expandable = document.getElementById("expandable");
    if (expandable.style.display === "none") {
        expandable.style.display = "block";
    } else {
        expandable.style.display = "none";
    }
});