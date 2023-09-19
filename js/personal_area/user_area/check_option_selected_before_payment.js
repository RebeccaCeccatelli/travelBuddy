document.getElementById("go-to-payment").addEventListener("click", function (event) {
    const checkboxes = document.querySelectorAll('input[name="choice"]:checked');

    if (checkboxes.length === 0) {
        alert("You must select at least one option before proceeding to payment.");
        event.preventDefault();
    }
});
