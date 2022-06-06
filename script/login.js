const user = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const error = document.getElementById("userMessage");
const errorText = document.getElementById("userMsg");

let localUser = localStorage.getItem("username");
let localPassword = localStorage.getItem("password");
let localEmail = localStorage.getItem("email");



(loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (user.value != localUser && user.value != localEmail) {
        error.classList.remove("error-none");
        errorText.innerHTML = "Username or email is wrong"

    } else {
        user.classList.add('green');
    }
    if (
        password.value != localPassword
    ) {
        error.classList.remove("error-none");
        errorText.innerHTML = "Password  is wrong"
    } else {
        password.classList.add('green');
    }
    if (
        user.value != localUser && password.value != localPassword &&
        user.value != localEmail || user.value == "" || password.value == ""
    ) {
        error.classList.remove("error-none");
        errorText.innerHTML = "Please check your informations"
        document.getElementById('close-error').addEventListener('click', () => {
            error.classList.add('error-none')
        })
        setTimeout(function () {
            document.location.href = "index.html", true;
            e.preventDefault()
        }, 3500);
    } else {

    }
    if (
        user.value == localEmail || localUser && password.value == localPassword
    ) {
        document.location.href = "user.html", true;
        e.preventDefault();
    }
}))


