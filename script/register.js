const userName = document.getElementById('username');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword')
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
var objPeople = [
	{
		username: 'test1',
		password: 'test123456'
	},
	{
		username: 'deneme1',
		password: 'denemeler12'
	},
	{
		username: 'javascriptdevamke',
		password: 'devamke123'
	}
]



// login functionality
function login() {
	//Kullanıcı ve şifre bilgilerininin alınması
	let username = document.getElementById('username').value

	let password = document.getElementById('password').value

	//Object`de kayıtlı olan kullanıcı adı ve şifrenin varlığının kontrol edilmesi.
	for(var i = 0; i < objPeople.length; i++) {

    if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' is logged in!!!')
			//Break ile tamam ise durması için.
			break
		}
    else {
			//Şifre vs. hatalı ise bu alan çalışır.
			console.log('incorrect username or password')
		}
	}
}

//Kırmızı hata popup
let errorMsg = document.getElementById("error-show");
let errorText = document.getElementById("userError");


function registerUser(e) {
	//yeni üyelerin kaydedilmesi
	let registerUsername = document.getElementById('username').value
	let registerPassword = document.getElementById('password').value
	
	// obje olarak eklenmesi
	let newUser = {
		username: registerUsername,
		password: registerPassword
	}

	for(var i = 0; i < objPeople.length; i++) {
		// Kullanıcı var mı diye kontrol ediş kısmı.
		if(registerUsername == objPeople[i].username) {
			// Kullanıcı adı var ise hata verilecek. 
			errorMsg.classList.remove("error-none");
			errorText.innerHTML = "Bu kullanıcı adı daha önce alındı."
			break
			//Şifre kontrol alanı 8`den küçük ise hata çıkar.
		} else if (registerPassword.length < 8) {
			errorMsg.classList.remove("error-none");
			errorText.innerHTML = "Şifre 8 karakterden fazla olmalı"
			break
		}
	}
  //diziye yeni eleman ekleme ve bu elemanları local storage`a kaydetme
  objPeople.push(newUser)
  localStorage.setItem(`username${objPeople}`,JSON.stringify(newUser))
  newUser+=1

//   localStorage.setItem(`key${objPeople}`, JSON.stringify(newUser)) 
//   objPeople += 1  

}
console.log(objPeople)

function allStorage() {

    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(localStorage.getItem(keys[i]) );
    }
	
	console.log(values)
    return values;
}
allStorage();


// //Maps ile deneme olmadı :) 
// function registerUser(e){

// let registerUsername = document.getElementById('username').value
// let registerPassword = document.getElementById('password').value

// 	const users = new Map();

// 	users.set("1:Username",registerUsername);
// 	users.set("1:Password",registerPassword)


// 	console.log(users);
// }












// // Email reg 
// let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



// //Form
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(userName.value==""){
//         userName.classList.add('red')
//         errorUser.innerHTML = "username must fill";
//         errorUser.classList.remove('error');
//         setInterval(function () 
//         { errorUser.innerHTML = "Username must fill"
//         errorUser.classList.add('error')
//         }, 1000);    
//         return false;
//     }
//     else{
//         userName.classList.add('green');
//     }
//     if(password.value !== rePassword.value||password.value==""&&rePassword.value==""){
//         password.classList.add('red');
//         rePassword.classList.add('red');
//         errorUser.innerHTML = "password is not match or empty";
//         errorUser.classList.remove('error');
//         setInterval(function () 
//         { errorUser.innerHTML = "Username must fill"
//         errorUser.classList.add('error')
//         }, 2000);    
//         return false;
//       }
//     else{
//         password.classList.add("green")&rePassword.classList.add("green");
//     }
//     if(email.value.match(reg)&& email.value==reEmail.value){
//       email.classList.add('green');
//       reEmail.classList.add('green')
//     }
//     else{
//         email.classList.add('red')
//         errorUser.innerHTML = "email is not correct";
//         errorUser.classList.remove('error');
//         reEmail.classList.add('red');
//         setInterval(function () 
//         { errorUser.innerHTML = "Email is not correct"
//         errorUser.classList.add('error')
//         }, 2000);    

//         return false;

//     }


//     let user = document.getElementById("username");
//     let password2 = document.getElementById("password");
//     localStorage.setItem("username", user.value);
//     localStorage.setItem("password",password2.value);
//     localStorage.setItem("email",email.value);
//     document.getElementById('thanks-message').classList.remove('error');
//     document.getElementById('p-thanks').innerHTML = "Thank you for join us! "+ localStorage.getItem("username") +" Please click login or wait."
   
//     setInterval(function () 
//         { 
//       document.getElementById('thanks-message').classList.add('error');
//       //Loader gif burada çalışması sağlanıyor. 
//       document.getElementById('loader-gif').style.display = "block"
//       document.getElementById('form-area').style.display="none"
//       }, 2000);  
      
//       setInterval(function () 
//       { 
//         document.location.href = "user.html",true;
//       }, 3000);  

//   });

//   showPassword.addEventListener('click',function(){
//     if(password.type==="password"){
//       password.type="text"
//     }else{
//       password.type ="password";
//     }
//     if(rePassword.type==="password"){
//       rePassword.type="text"
//     }else{
//       rePassword.type ="password";
//     }
// })

// showPassword2.addEventListener('click',function(){
// if(password.type==="password"){
//   password.type="text"
// }else{
//   password.type ="password";
// }
// if(rePassword.type==="password"){
//   rePassword.type="text"
// }else{
//   rePassword.type ="password";
// }
// })


// // window.onbeforeunload = function (e) {
// //   e = e || window.event;

// //   if (e) {
// //       e.returnValue = 'Sure?';
// //   }
// //   return 'Sure?';
// // };
















