populateActiveServicesList(2);
populateDropdownWithInactiveServices(2);
populateDropdownWithActiveServices(2);

function populateActiveServicesList(businessId) {
    getActiveServices(businessId)
        .then((activatedServices) => {
            const activeServicesList = document.getElementById("activeServicesList");
            activeServicesList.innerHTML = '';

            if (activatedServices.length > 0) {
                const serviceListParagraph = document.createElement("p");
                serviceListParagraph.textContent = "Your currently active services: " + activatedServices.join(", ") + ".";
                activeServicesList.appendChild(serviceListParagraph);
            }
        })
        .catch((error) => {
            console.error("Error populating active services list: ", error);
        });
}