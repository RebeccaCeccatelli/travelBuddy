function loadServiceImages(activeServices) {
    var serviceButtonsContainer = document.getElementById("service-buttons-container");

    activeServices.forEach(function (serviceName) {
        var serviceId = serviceName.toLowerCase().replace(/\s+/g, "_");

        var serviceButtonDiv = document.createElement("div");
        serviceButtonDiv.classList.add("button-with-image");
        var serviceButtonLink = document.createElement("a");
        serviceButtonLink.href = "update_service_access_conditions.html?type=" + serviceId;
        serviceButtonLink.target = "_blank";

        var imageFormats = ["jpg", "jpeg", "webp"];
        var foundImage = false;

        imageFormats.forEach(function (imageFormat) {
            var imageUrl = `../../../images/services/${serviceId}.${imageFormat}`;
            var img = new Image();

            img.onerror = function () {
                if (!foundImage) {
                    img.src = "";
                }
            };

            img.onload = function () {
                if (!foundImage) {
                    var serviceButtonImage = document.createElement("img");
                    serviceButtonImage.src = imageUrl;
                    serviceButtonImage.alt = serviceName + " Image";

                    var serviceButtonText = document.createElement("button");
                    serviceButtonText.classList.add("button");
                    serviceButtonText.textContent = serviceName;

                    serviceButtonLink.appendChild(serviceButtonImage);
                    serviceButtonLink.appendChild(serviceButtonText);
                    serviceButtonDiv.appendChild(serviceButtonLink);
                    serviceButtonsContainer.appendChild(serviceButtonDiv);
                    foundImage = true;
                }
            };

            img.src = imageUrl;
        });
    });
}

var businessId = 2;
getActiveServices(businessId)
    .then((activeServices) => {
        loadServiceImages(activeServices);
    })
    .catch((error) => {
        console.error("Error loading active services: ", error);
    });