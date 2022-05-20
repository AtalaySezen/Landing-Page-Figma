const hamburgerButton = document.getElementById('hamburgerButton');
const mobileLinks = document.getElementById('mobileLinks');

hamburgerButton.addEventListener('click',function showMenu(){
        hamburgerButton.classList.toggle('change')
        mobileLinks.classList.toggle('hide');
})

// const toggleButton = document.getElementByIdU('check-price');

// toggleButton.addEventListener('mouseenter',function(){
//     alert(1)
// })

