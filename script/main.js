//index.html javascript
const hamburgerButton = document.getElementById('hamburgerButton');
const mobileLinks = document.getElementById('mobileLinks');

hamburgerButton.addEventListener('click', function showMenu() {
    hamburgerButton.classList.toggle('change')
    mobileLinks.classList.toggle('hide');
})

const checkBox = document.getElementById('checkbox');
const priceOne = document.getElementById('price-1');
const priceOneNew = document.getElementById('price1-new');
const priceThird = document.getElementById('price-3');
const priceThirdNew = document.getElementById('price3-new');

checkBox.addEventListener('click', function () {
    priceOne.classList.toggle('none')
    priceOneNew.classList.toggle('none');
})


checkBox.addEventListener('click', function () {
    priceThird.classList.toggle('none')
    priceThirdNew.classList.toggle('none');
})

checkBox.addEventListener('click', function changeText() {
    document.getElementById('text-customer').classList.toggle('none');
    document.getElementById('text-customer-2').classList.toggle('none');
})