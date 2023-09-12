 const allowedUsers = [
     { email: "rebeccaceccatelli@gmail.com", password: "Pianoforte2000!" },
     { email: "trattorialafontana@gmail.com", password: "wlaciccia4ever" }
 ];

 const loginForm = document.getElementById("loginForm");

 loginForm.addEventListener("submit", function (event) {
     event.preventDefault();

     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;

     let accessAllowed = false;

     for (const user of allowedUsers) {
         if (email === user.email && password === user.password) {
             accessAllowed = true;
             currentUser = user;
             break;
         }
     }

     if (accessAllowed) {
         alert("Login successful!");
         if (currentUser === allowedUsers[0]){
             window.location.href = "../../html/user_section/user_dashboard.html";
         }
         else{
             window.location.href = "../../html/business_section/business_dashboard.html";
         }
     } else {
         alert("Access denied. Please try again.");
     }

     loginForm.reset();
 });
