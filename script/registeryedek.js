const userName = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const email = document.getElementById('email');
const showPassword2 = document.getElementById('showPassword2')
const btn = document.getElementById('register-btn');
const btnClose = document.getElementById('close-popup');
const popup = document.getElementById('thanks-message');
const showPassword = document.getElementById('showPassword');


//Hata mesajı kapatma
document.getElementById('close-error').addEventListener('click',()=>{
	errorMsg.classList.add('error-none');
})
// Create a registration system
// var objPeople = [
// 	{
// 		username: 'test1',
// 		password: 'test123456'
// 	},
// 	{
// 		username: 'deneme1',
// 		password: 'denemeler12'
// 	},
// 	{
// 		username: 'javascriptdevamke',
// 		password: 'devamke123'
// 	}
// ]

// function allStorage() {

//     let values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;

//     while ( i-- ) {
//         values.push(localStorage.getItem(keys[i]) );
//     }
	
// 	console.log(values)
//     return values;
// }

// allStorage();

// 	function login() {
// 	//Kullanıcı ve şifre bilgilerininin alınması
// 	let username = document.getElementById('username').value
// 	let password = document.getElementById('password').value

// 	//Object`de kayıtlı olan kullanıcı adı ve şifrenin varlığının kontrol edilmesi.
// 	for(var i = 0; i < objPeople.length; i++) {
	
// 	//LOCALSTORE`DA Bulunan verilerin alınması:
//     // let values = [],
//     //     keys = Object.keys(localStorage),
//     //     i = keys.length;

//     // while ( i-- ) {
//     //     values.push(localStorage.getItem(keys[i]) );
//     // }
	
// 	// console.log(values)

// 	if(username == keys) {
// 		console.log(username + ' is logged in!!!')
// 		break
// 	}
//     else {
// 		console.log('incorrect username or password')
// 	}
// }

//     // if(username == objPeople[i].username && password == objPeople[i].password) {
// 	// 		console.log(username + ' is logged in!!!')
// 	// 		break
// 	// 	}
//     // else {
// 	// 		//Şifre vs. hatalı ise bu alan çalışır.
// 	// 		console.log('incorrect username or password')
// 	// 	}
// 	// }



// 	}


// //Kırmızı hata popup
// let errorMsg = document.getElementById("error-show");
// let errorText = document.getElementById("userError");

// //Kullanıcı kaydının yapılması ve username kontrolü
// let registerUsername = document.getElementById('username').value
// let registerPassword = document.getElementById('password').value

// function registerCheckUser() {
// 	let registerUsername = document.getElementById('username').value
// 	let registerPassword = document.getElementById('password').value
// 	// obje olarak eklenmesi
// 	let newUser = {
// 		username: registerUsername,
// 		password: registerPassword
// 	}

// 	for(var i = 0; i < objPeople.length; i++) {
// 		// Kullanıcı var mı diye kontrol ediş kısmı.

// 		if(registerUsername == objPeople[i].username) {
// 			// Kullanıcı adı var ise hata verilecek. 
// 			document.getElementById('error-show').classList.remove('error-none');
// 			errorText.innerHTML = "Bu kullanıcı adı daha önce alındı."

// 		}else if(registerUsername ===""){
// 			document.getElementById('error-show').classList.remove('error-none');
// 			errorText.innerHTML = "Kullanıcı adı doldurulmalı"
// 			document.getElementById('username').classList.add('red');

// 		}else if(registerUsername != objPeople[i].username){
// 			userName.classList.remove('red');
// 			userName.classList.add('green');
// 		}
// 	}


// //diziye yeni eleman ekleme ve bu elemanları local storage`a kaydetme

// objPeople.push(newUser)
// localStorage.setItem(`username${objPeople}`,JSON.stringify(newUser))
// newUser+=1
// }

// //Objelerin yazdırılması
// console.log(objPeople)
// //LocalStorage`a hepsinin kayıt edilmesi
// let localUser = localStorage.getItem("kullanıcı",)
// console.log(localUser)



//Email validasyonu

function emailCheck(){
// Email reg 
let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(email.value.match(reg)){
       	 email.classList.add('green');
      }
      else{
		errorMsg.classList.remove("error-none");
		errorText.innerHTML = "Mail adresi hatalı"
		email.classList.add('red');
      }
}


//Şifre Validasyonu
function passwordCheck(){
	let passwordInput = document.getElementById('password').value;
	let rePassword = document.getElementById('repassword').value;
	//Value olmadan
	let password = document.getElementById('password');
	let Repassword =document.getElementById('repassword');

	if(passwordInput.length<6 && rePassword.length<6){
		password.classList.add('red');
		Repassword.classList.add('red');
		errorMsg.classList.remove('error-none');
		errorText.innerHTML = "Şifre 6 karakterden kısa"

	}else if(passwordInput !=rePassword){
		errorMsg.classList.remove('error-none');
		errorText.innerHTML = "Şifreler aynı olmalı"
	}else{
		password.classList.add('green');
		Repassword.classList.add('green');
	}

}


//Tüm Fonksiyonlar burada çalışacak tek seferde 
function validateRegister(){
 	registerCheckUser();  
 	emailCheck();
	passwordCheck();

}







// //Maps ile deneme olmadı :) 
// function registerUser(e){

// let registerUsername = document.getElementById('username').value
// let registerPassword = document.getElementById('password').value

// 	const users = new Map();

// 	users.set("1:Username",registerUsername);
// 	users.set("1:Password",registerPassword)


// 	console.log(users);
// }



















