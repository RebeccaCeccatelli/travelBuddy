const previousPath = document.referrer;

const differentFieldLabel = document.querySelector('label[for="differentField"]');

const isBusinessArea = previousPath.includes("/business_area/");
const isUserArea = previousPath.includes("/user_area/");

if (isBusinessArea) {
    differentFieldLabel.textContent = "Address:";
} else if (isUserArea) {
    differentFieldLabel.textContent = "Surname:";
}
