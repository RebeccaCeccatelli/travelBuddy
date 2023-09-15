const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("../../json_files/registered_clients.json")
        .then(response => response.json())
        .then(allowedUsers => {
            let accessAllowed = false;
            let userType = "";

            for (const user of allowedUsers) {
                if (email === user.email && password === user.password) {
                    accessAllowed = true;
                    userType = user.type;
                    currentUser = user;
                    break;
                }
            }

            if (accessAllowed) {
                alert("Login successful!");
                if (userType === "user") {
                    window.location.href = "../../html/user_area/user_dashboard.html";
                } else if (userType === "business") {
                    window.location.href = "../../html/business_area/business_dashboard.html";
                } else {
                    alert("Unknown user type. Please try again.");
                }
            } else {
                alert("Access denied. Please try again.");
            }

            loginForm.reset();
        })
        .catch(error => {
            console.error("Error loading registered_clients.json: ", error);
        });
});
