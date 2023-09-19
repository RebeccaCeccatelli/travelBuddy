document.getElementById("expandable-button").addEventListener("click", function() {
    var expandable = document.getElementById("expandable")
        || document.getElementById("expandable-display-by-default");
    if (expandable.style.display === "none") {
        expandable.style.display = "block";
    } else {
        expandable.style.display = "none";
    }
});