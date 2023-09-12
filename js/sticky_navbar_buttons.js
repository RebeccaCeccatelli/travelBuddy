document.addEventListener("DOMContentLoaded", function () {
    const scrollToAboutButton = document.getElementById("scrollToAbout");
    const aboutSection = document.getElementById("about");

    scrollToAboutButton.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToServicesButton = document.getElementById("scrollToServices");
    const servicesSection = document.getElementById("services");

    scrollToServicesButton.addEventListener("click", () => {
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });
});
