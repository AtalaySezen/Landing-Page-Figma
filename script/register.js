const userInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rePassword = document.getElementById('repassword');
const emailInput = document.getElementById('email');
const errorShow = document.getElementById('error-show');
const errorMessage = document.getElementById('userError');

//User
function userCheck() {
	if (userInput.value.length < 6) {
		userInput.classList.add('red');
		errorShow.classList.remove('error-none');
		errorMessage.innerHTML = "Kullanıcı adı 6 karakterden fazla olmalı"
	} else if (
		userInput.value.length > 20
	) {
		userInput.classList.add('red');
		errorShow.classList.remove('error-none');
		errorMessage.innerHTML = "Kullanıcı adı 20 karakterden fazla olamaz"
	} else {
		userInput.classList.add('green');
		errorShow.classList.add('error-none');
	}
}

//Pass Validation
function passwordCheck() {
	if (passwordInput.value.length < 6) {
		passwordInput.classList.add('red');
		rePassword.classList.add('red');
		errorShow.classList.remove('error-none');
		errorMessage.innerHTML = "Şifre 6 karakterden fazla olmalı"
	}
	else if (passwordInput.value.length > 20) {
		passwordInput.classList.add('red');
		errorShow.classList.remove('error-none');
		errorMessage.innerHTML = "Şifre 20 karakterden fazla olamaz"
	} else if (
		passwordInput.value != rePassword.value) {
		passwordInput.classList.add('red');
		rePassword.classList.add('red')
		passwordInput.classList.add('red');
		errorShow.classList.remove('error-none');
		errorMessage.innerHTML = "Şifreler aynı olmalı"
	} else {
		passwordInput.classList.add('green');
		rePassword.classList.add('green');
		errorShow.classList.add('error-none');
	}
};

//Email validasyonu
function emailCheck() {
	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (emailInput.value.match(reg)) {
		emailInput.classList.add('green');
	}
	else {
		errorShow.classList.remove("error-none");
		errorMessage.innerHTML = "Mail adresi hatalı"
		emailInput.classList.add('red');
	}
};


function register() {
	localStorage.setItem("username", userInput.value);
	localStorage.setItem("password", passwordInput.value);
	localStorage.setItem("email", emailInput.value);

	errorShow.classList.remove('error-none');
	errorMessage.innerHTML = "Teşekkürler üyelik kaydınız oluşturuldu, giriş yapınız"
}

const userLogin = document.getElementById("loginUser");
const passwordUser = document.getElementById("loginPassword");

function login() {
	let checkUser = localStorage.getItem("username");
	let checkPassword = localStorage.getItem("password");

	console.log(checkUser)

	if (checkUser === userLogin.value && checkPassword === passwordUser.value) {
		sessionStorage.setItem("isLogged", true)
		console.log("DOĞRU")

	} else {
		console.log("çalışmadı")
	}

	userPage();
}
function userPage() {
	let isLogged = sessionStorage.getItem("isLogged")
	if (isLogged != null) {
		console.log("logged tetiklendi")
		window.location.href = "user.html"
	} else {
		alert("kullanıcı adı veya şifre hatalı")
		window.location.href = "index.html"
	}

}
//Tüm validasyonların çalıştırılması
function validateRegister() {
	userCheck();
	passwordCheck();
	emailCheck();
	register();
}


