let carIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

carIcon.addEventListener('click', () => {
	cart.classList.add('active');
})

closeCart.addEventListener('click', () => {
	cart.classList.remove('active');
})