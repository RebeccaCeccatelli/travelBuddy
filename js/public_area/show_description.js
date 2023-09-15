const serviceButtons = document.querySelectorAll(".button");

serviceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const serviceName = button.getAttribute("data-description");

        const description = document.querySelector(`.description[data-service="${serviceName}"]`);

        if (description.style.display === "block") {
            description.style.display = "none";
        } else {
            description.style.display = "block";
        }
    });
});
