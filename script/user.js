let localUser = localStorage.getItem("username");
let localPassword = localStorage.getItem("password");
let localEmail = localStorage.getItem("email");


const welcomeMsg = document.getElementById('welcome-message');
welcomeMsg.innerHTML = "Welcome " + localUser + "";



