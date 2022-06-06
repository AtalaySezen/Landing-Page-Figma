
//USER PAGE Javascript
let localUser = localStorage.getItem("username");
let localPassword = localStorage.getItem("password");
let localEmail = localStorage.getItem("email");


const welcomeMsg = document.getElementById('welcome-message');
welcomeMsg.innerHTML = "Welcome " + localUser + "";

//P tagleri mail etc.
const mailInfo = document.getElementById('mail-info');
const passInfo = document.getElementById('password-info');

mailInfo.innerHTML = "Your mail adress is " + localEmail;
passInfo.innerHTML = "Your password is " + localPassword;

//Bilgileri saklama
document.getElementById('click-hide').addEventListener('click', () => {
    mailInfo.classList.toggle("hide");
    passInfo.classList.toggle("hide");
})

//Bilgi değiştirme popup
document.getElementById('click-change').addEventListener('click', () => {
    document.getElementById('info-change').classList.toggle("hide");
})

//Dom elementlerini seçelim:
const newUser = document.getElementById("changeUser");
const newPassword = document.getElementById("changePassword");
const newEmail = document.getElementById("changeEmail");
const errorMsg = document.getElementById("errorMsg");


document.getElementById('login-btn').style.display = "none";
document.getElementById('register-btn').style.display = "none";



document.getElementById('change-btn').addEventListener('click', () => {
    if (newUser.value == "") {
        errorMsg.classList.add('msg-error');
        errorMsg.innerHTML = "Username must fill"
        return false;
    } else {
        localStorage.setItem("username", newUser.value);
    } if (newPassword.value == "") {
        errorMsg.classList.add('msg-error');
        errorMsg.innerHTML = "Password must fill"
        return false;
    } else {
        localStorage.setItem("password", newPassword.value);
    }
    if (newEmail.value == "") {
        errorMsg.classList.add('msg-error');
        errorMsg.innerHTML = "Email must fill"
        return false;
    } else {
        localStorage.setItem("email", newEmail.value);
    }
    location.reload();
})


//BG Color
let pList = document.querySelectorAll('p');

let aList = document.querySelectorAll('a');

let buttonList = document.querySelectorAll('button');


document.getElementById('bg-white').addEventListener('click', () => {
    document.querySelector('body').classList.add('body-white');
    for (let i = 0; i < pList.length; i++) {

        pList[i].style.color = "black";
    }
    welcomeMsg.style.color = "black"
    for (let i = 0; i < aList.length; i++) {
        aList[i].style.color = "black";
    }

    document.getElementById('bg-white').style.display = "none"
    document.getElementById('bg-black').style.display = "inline";

})

document.getElementById('bg-black').addEventListener('click', () => {
    document.querySelector('body').classList.remove('body-white');
    for (let i = 0; i < pList.length; i++) {

        pList[i].style.color = "white";
    }

    welcomeMsg.style.color = "white"
    for (let i = 0; i < aList.length; i++) {
        aList[i].style.color = "white";
    }
    document.getElementById('bg-white').style.display = "inline"
    document.getElementById('bg-black').style.display = "none";

})



function accessLogged() {
    let logged = sessionStorage.getItem("isLogged")
    console.log(logged)
    if (logged != "true") {
        window.location.href = "index.html";
    }

}

//Çıkış için
function logOut() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

