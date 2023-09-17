const businessSelect = document.getElementById("businessSelect");
const availableService = document.getElementById("availableService");


businessSelect.addEventListener("change", function () {
    const selectedBusinessId = parseInt(businessSelect.value);
    if (!isNaN(selectedBusinessId)) {
        populateDropdownWithActiveServices(selectedBusinessId);
    } else {
        availableService.innerHTML = '<option value="">Select a service</option>';
    }
});

fetch("../../../json_files/user_activity/rebecca_ceccatelli/visited_businesses.json")
    .then(response => response.json())
    .then(userBusinesses => {
        userBusinesses.forEach(business => {
            const option = document.createElement("option");
            option.value = business.id;
            option.textContent = business.name;
            businessSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error("Error loading user businesses: ", error);
    });

function validateRating() {
    const ratingInput = document.getElementById("rating");
    const ratingValue = parseFloat(ratingInput.value);

    if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5 || (ratingValue * 10) % 5 !== 0) {
        ratingInput.value = ""; // Reset the input value
        return false;
    }

    return true;
}

function submitReview() {
    const selectedBusinessId = businessSelect.value;
    const serviceType = availableService.value;
    const reviewText = document.getElementById("review").value;
    const isValidRating = validateRating();

    if (selectedBusinessId === "") {
        alert("Please select a business before submitting the review.");
    } else if (serviceType === "") {
        alert("Please select a service before submitting the review.");
    } else if (reviewText.trim() === "") {
        alert("Please write something before submitting the review.");
    } else if (!isValidRating) {
        alert("Rating must be a number between 0 and 5 (in increments of 0.5).");
    } else {
        alert("Review submitted successfully!");
        document.getElementById("reviewForm").reset();
    }
}
