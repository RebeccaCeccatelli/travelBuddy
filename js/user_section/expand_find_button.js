document.getElementById("expandableButton").addEventListener("click", function() {
    var expandable = document.getElementById("expandable")
        || document.getElementById("expandable_display_by_default");
    if (expandable.style.display === "none") {
        expandable.style.display = "block";
    } else {
        expandable.style.display = "none";
    }
});