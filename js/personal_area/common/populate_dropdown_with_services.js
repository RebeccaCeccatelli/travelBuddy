function populateDropdownWithActiveServices(businessId) {
    getActiveServices(businessId)
        .then((activatedServices) => {
            fetch("../../../json_files/registered_accounts/businesses.json")
                .then((response) => response.json())
                .then((userBusinesses) => {
                    const selectedBusiness = userBusinesses.find((business) => business.id === businessId);

                    if (selectedBusiness) {
                        const availableService = document.getElementById("available-service");
                        availableService.innerHTML = '<option value="">Select a service</option>';

                        activatedServices.forEach((service) => {
                            const option = document.createElement("option");
                            option.value = service;
                            option.textContent = service;
                            availableService.appendChild(option);
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error loading user businesses: ", error);
                });
        })
        .catch((error) => {
            console.error("Error populating service dropdown: ", error);
        });
}

function populateDropdownWithInactiveServices(businessId) {
    fetch("../../../json_files/registered_accounts/businesses.json")
        .then((response) => response.json())
        .then((userBusinesses) => {
            const selectedBusiness = userBusinesses.find((business) => business.id === businessId);

            if (selectedBusiness) {
                const unavailableService = document.getElementById("unavailable-service");
                unavailableService.innerHTML = '<option value="">Select a service</option>';

                const activatedServices = selectedBusiness.activated_services;

                const allServices = ["Toilets", "Wifi hotspots", "Luggage deposit", "Parking lots", "Tourist attractions", "Dining options"];

                const nonExistingServices = allServices.filter(service => !activatedServices.includes(service));

                nonExistingServices.forEach((service) => {
                    const option = document.createElement("option");
                    option.value = service;
                    option.textContent = service;
                    unavailableService.appendChild(option);
                });
            }
        })
        .catch((error) => {
            console.error("Error loading user businesses: ", error);
        });
}

function getActiveServices(businessId) {
    return fetch("../../../json_files/registered_accounts/businesses.json")
        .then((response) => response.json())
        .then((userBusinesses) => {
            const selectedBusiness = userBusinesses.find((business) => business.id === businessId);

            if (selectedBusiness) {
                return selectedBusiness.activated_services;
            }

            return [];
        })
        .catch((error) => {
            console.error("Error loading user businesses: ", error);
            return [];
        });
}