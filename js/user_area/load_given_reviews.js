document.addEventListener("DOMContentLoaded", function () {
    const reviewList = document.getElementById("list");

    fetch("../../json_files/user_activity/rebecca_ceccatelli/given_reviews.json")
        .then(response => response.json())
        .then(reviews => {
            // Genera la lista delle recensioni
            reviews.forEach(function (review) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h3>Business: ${review.business}, Service: ${review.service} (${review.date}).</h2>
                    <ul>
                        <li><strong>Your Review:</strong> ${review.text}</li>
                        <li><strong>Your Rating:</strong> ${review.rating}.</li>
                    </ul>
                `;
                reviewList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error loading reviews: ", error);
        });
});