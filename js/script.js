let headerNav = document.querySelector('.header__nav');
let headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener("click", headerBurgerOpen);

function headerBurgerOpen(e) {
    e.preventDefault();
    headerBurger.classList.toggle('open');
    headerNav.classList.toggle('active');
}