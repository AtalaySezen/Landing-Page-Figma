const userName = document.getElementById('username');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword')
const form = document.getElementById('form');
const email = document.getElementById('email');
const errorUser =  document.getElementById('userError');

//Email reg
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

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
        password.value == rePassword.value;
        password.classList.add("green")&rePassword.classList.add("green");
    }

    if (reg.test(email) == false) 
    {
        errorUser.innerHTML = "E-mail adress is not correct"
        setInterval(function () 
        { errorUser.innerHTML = "email is not correct"
        errorUser.classList.add('error')
        }, 2000);   
    }else{
        (reg.test(email) == true );
        email.classList.add('green')

    }

})
