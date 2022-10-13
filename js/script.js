//script for menu
let navbar = document. querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
     navbar.classList.toggle('active');
     cartItem.classList.remove('active');
}

let cartItem = document. querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick =() =>{
     cartItem.classList.toggle('active');
     navbar.classList.remove('active');
}

//end of script
window.onscroll =()=>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
$('form').on('focus', 'input[type=number]', function (e) {
     $(this).on('wheel.disableScroll', function (e) {
       e.preventDefault()
     })
   })
   $('form').on('blur', 'input[type=number]', function (e) {
     $(this).off('wheel.disableScroll')
   })