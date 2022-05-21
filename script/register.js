const userName = document.getElementById('username');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword')
const form = document.getElementById('form');
const email = document.getElementById('email');
const errorUser =  document.getElementById('userError');

const btn = document.getElementById('register-btn');
const btnClose = document.getElementById('close-popup');
const popup = document.getElementById('thanks-message');

//Popup kapatma
btnClose.addEventListener('click',function(){
  popup.classList.add('error');

})

// Email reg 
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
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
    if(password.value !== rePassword.value){
        password.classList.add('red')
        errorUser.innerHTML = "password is not match";
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
    // if (reg.test(email) == false) 
    // {
    //     errorUser.innerHTML = "E-mail adress is not correct"
    //     setInterval(function () 
    //     { errorUser.innerHTML = "email is not correct"
    //     errorUser.classList.add('error')
    //     }, 2000);   
    // }else{
    //     (reg.test(email) == true );
    //     email.classList.add('green')
    // }
    let user = document.getElementById("username");
    let password2 = document.getElementById("password");
    let email = document.getElementById("email");
    localStorage.setItem("username", user.value);
    localStorage.setItem("password",password2.value);
    localStorage.setItem("email",email.value);
    document.getElementById('thanks-message').classList.remove('error');
    document.getElementById('p-thanks').innerHTML = "Thank you for join us! "+ localStorage.getItem("username") +" Please click login."
    
    setInterval(function () 
        { 
      document.getElementById('thanks-message').classList.add('error');
      }, 2000);  

  });


  




















//Json Server veri alma
// fetch("./db.json")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
    
// })


// var name2 = $("#username").val();
// var passwordT = $("#password").val();
// var emailT = $("#email").val();

// $.post("./db.json",{
//     name:name2,
//     emailT:email,
//     passwordT:password
// },function(response){
//     $("#response").html("<div>"+response.message+"</div>")
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


