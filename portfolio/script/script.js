const altoNavegacion = document.querySelector('.navegacion').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding',altoNavegacion + 'px');

const navToggle = document.querySelector(".toggle");
const links = document.querySelector(".item-menu");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menú");
    }else {
        navToggle.setAttribute("aria-label","Abrir menú");
    }
});

links.addEventListener("click",() =>{
    navMenu.classList.remove("nav-menu_visible");
});

