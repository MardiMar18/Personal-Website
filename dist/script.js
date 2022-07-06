var signUp = document.querySelector('#signup')
var emailSignUp = document.querySelector('.email-signup');
var emailInput = document.querySelector('input')
var banner = document.querySelector('#message')

function emailSubmitHandler() {
  var confirmMsg = document.createElement('p')
}
function emailSubmitHandler() {
  var confirmMsg = document.createElement('p')
  confirmMsg.textContent = 'Thanks for subscribing!' +              emailInput.value;
  signUp.remove();
  emailSignUp.remove();
  
  banner.appendChild(confirmMsg)
}

signUp.addEventListener('click', emailSubmitHandler)

var count = 0;
var cartBtn1 = document.getElementById('btn1')
var cartBtn2 = document.getElementById('btn2')
var cartBtn3 = document.getElementById('btn3')

var cart = document.getElementById("count")

function addToCartHandler() {
  count = count + 1;
  if(count === 1) {
     cart.textContent = '1 Item'
     } else {
    cart.textContent = count + ' Items'
  }
}


cartBtn1.addEventListener("click", addToCartHandler)
cartBtn2.addEventListener("click", addToCartHandler)
cartBtn3.addEventListener("click", addToCartHandler)