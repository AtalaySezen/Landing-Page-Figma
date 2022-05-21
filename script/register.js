const userName = document.getElementById('username');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword')
const form = document.getElementById('form');

const email = document.getElementById('email');
const errorUser =  document.getElementById('userError');
const reEmail = document.getElementById('email2');

const showPassword2 = document.getElementById('showPassword2')
const btn = document.getElementById('register-btn');
const btnClose = document.getElementById('close-popup');
const popup = document.getElementById('thanks-message');

const showPassword = document.getElementById('showPassword');


//Popup kapatma
btnClose.addEventListener('click',function(){
    if(rePassword.type==="password"){
      rePassword.type="text";
    }
})


// Email reg 
let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



//Form
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(userName.value==""){
        userName.classList.add('red')
        errorUser.innerHTML = "username must fill";
        errorUser.classList.remove('error');
        setInterval(function () 
        { errorUser.innerHTML = "Username must fill"
        errorUser.classList.add('error')
        }, 1000);    
        return false;
    }
    else{
        userName.classList.add('green');
    }
    if(password.value !== rePassword.value||password.value==""&&rePassword.value==""){
        password.classList.add('red');
        rePassword.classList.add('red');
        errorUser.innerHTML = "password is not match or empty";
        errorUser.classList.remove('error');
        setInterval(function () 
        { errorUser.innerHTML = "Username must fill"
        errorUser.classList.add('error')
        }, 2000);    
        return false;
      }
    else{
        password.classList.add("green")&rePassword.classList.add("green");
    }
    if(email.value.match(reg)&& email.value==reEmail.value){
      email.classList.add('green');
      reEmail.classList.add('green')
    }
    else{
        email.classList.add('red')
        errorUser.innerHTML = "email is not correct";
        errorUser.classList.remove('error');
        reEmail.classList.add('red');
        setInterval(function () 
        { errorUser.innerHTML = "Email is not correct"
        errorUser.classList.add('error')
        }, 2000);    

        return false;

    }


    let user = document.getElementById("username");
    let password2 = document.getElementById("password");
    localStorage.setItem("username", user.value);
    localStorage.setItem("password",password2.value);
    localStorage.setItem("email",email.value);
    document.getElementById('thanks-message').classList.remove('error');
    document.getElementById('p-thanks').innerHTML = "Thank you for join us! "+ localStorage.getItem("username") +" Please click login or wait."
    setInterval(function () 
        { 
      document.getElementById('thanks-message').classList.add('error');
      }, 2000);  
      
      setInterval(function () 
      { 
        document.location.href = "user.html",true;
      }, 3000);  

  });

  showPassword.addEventListener('click',function(){
    if(password.type==="password"){
      password.type="text"
    }else{
      password.type ="password";
    }
    if(rePassword.type==="password"){
      rePassword.type="text"
    }else{
      rePassword.type ="password";
    }
})

showPassword2.addEventListener('click',function(){
if(password.type==="password"){
  password.type="text"
}else{
  password.type ="password";
}
if(rePassword.type==="password"){
  rePassword.type="text"
}else{
  rePassword.type ="password";
}
})


// window.onbeforeunload = function (e) {
//   e = e || window.event;

//   if (e) {
//       e.returnValue = 'Sure?';
//   }
//   return 'Sure?';
// };





















//Json Server veri alma
// fetch("./db.json")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
    
// })




// //JSON server veri gönderme
// const user1 = {
//     user:"Atalay",
//     password:"Atalay96",
//     repassword:"Atalay96",
//     email:"atalaysezen@gmail.com"
// }
// const user2 = {
//     user:"Aybars",
//     password:"Aybars20",
//     repassword:"Aybars20",
//     email:"aybarssezen@gmail.com"
// }


