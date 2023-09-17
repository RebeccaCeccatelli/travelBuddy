document.addEventListener("DOMContentLoaded", function () {
    const reviewList = document.getElementById("list");

    const previousPath = document.referrer;

    const pageHeader = document.getElementById("pageHeader");

    const isBusinessArea = previousPath.includes("/business_area/");
    const isUserArea = previousPath.includes("/user_area/");

    fetch("../../../json_files/business_activity/residenza_cristina/received_reviews.json")
        .then(response => response.json())
        .then(reviews => {
            const filteredReviews = reviews.filter(review => {
                if (isBusinessArea) {
                    pageHeader.textContent = "Check received reviews";
                    return review.business === "Residenza Cristina";
                } else if (isUserArea) {
                    pageHeader.textContent = "Check given reviews";
                    return review.user === "Rebecca Ceccatelli";
                }
            });

            filteredReviews.forEach(function (review) {
                const listItem = document.createElement("li");
                const nameToShow = isBusinessArea ? "User" : "Business";
                listItem.innerHTML = `
                    <h3>${nameToShow}: ${isBusinessArea ? review.user : review.business}, Service: ${review.service} (${review.date}).</h3>
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
