function myFunction(x) {
    x.classList.toggle("change");
  }

const hamburgerButton = document.getElementById('hamburgerButton');

const mobileLinks = document.getElementById('mobileLinks');

hamburgerButton.addEventListener('click',function showMenu(){
        hamburgerButton.classList.toggle('change')
        mobileLinks.classList.toggle('hide');
})

