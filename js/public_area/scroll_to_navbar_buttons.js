document.addEventListener("DOMContentLoaded", function () {
    const scrollToAboutButton = document.getElementById("scroll-to-about");
    const aboutSection = document.getElementById("about");

    scrollToAboutButton.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToServicesButton = document.getElementById("scroll-to-services");
    const servicesSection = document.getElementById("services");

    scrollToServicesButton.addEventListener("click", () => {
        servicesSection.scrollIntoView({ behavior: "smooth" });
    });
});
