
const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar-menu');


//Display mobile menu

const mobileMenu=()=>{
    menu.classList.toggle('is-active');
    menuLinks.toggle('active');
}

menu.addEventListener('click', mobileMenu);