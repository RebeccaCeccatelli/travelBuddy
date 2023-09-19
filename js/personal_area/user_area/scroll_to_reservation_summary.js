function showReservationSummary() {
    var name = document.getElementById("reservation-name").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var duration = document.getElementById("duration").value;

    if (name === "" || date === "" || time === "" || duration === "") {
        alert("Please fill in all required fields.");
    } else {
        document.getElementById("summary-name").textContent = name;
        document.getElementById("summary-date").textContent = date;
        document.getElementById("summary-time").textContent = time;
        document.getElementById("summary-duration").textContent = duration;

        document.getElementById("reservation-summary").style.display = "block";

        document.getElementById("reservation-summary").scrollIntoView({ behavior: "smooth" });
    }
}

function goToPayment() {
    window.open("payment.html")
}