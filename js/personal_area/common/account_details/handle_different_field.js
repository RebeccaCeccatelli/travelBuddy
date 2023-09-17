const previousPath = document.referrer;

const differentField = document.getElementById("differentField");

const isBusinessArea = previousPath.includes("/business_area/");
const isUserArea = previousPath.includes("/user_area/");

if (isBusinessArea) {
    differentField.textContent = "Address:";
} else if (isUserArea) {
    differentField.textContent = "Surname:";
}