function checkAccountExistenceAndRedirect(email, password) {
    fetch("../../json_files/registered_accounts/users.json")
        .then(response => response.json())
        .then(userClients => {
            const user = userClients.find(client => client.email === email && client.password === password);

            if (user) {
                alert("Login successful!");
                window.location.href = "../../html/personal_area/user_area/user_dashboard.html";
            } else {
                fetch("../../json_files/registered_accounts/businesses.json")
                    .then(response => response.json())
                    .then(businessClients => {
                        const business = businessClients.find(client => client.email === email && client.password === password);

                        if (business) {
                            alert("Login successful!");
                            window.location.href = "../../html/personal_area/business_area/business_dashboard.html";
                        } else {
                            alert("Access denied. Please try again.");
                        }
                    })
                    .catch(error => {
                        console.error("Error loading business_clients.json: ", error);
                    });
            }
        })
        .catch(error => {
            console.error("Error loading user_clients.json: ", error);
        });
}
