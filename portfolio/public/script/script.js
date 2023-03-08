// Ajustar el scroll al title
const altoNavegacion = document.querySelector('.navegacion').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', altoNavegacion + 'px');
// Menu toggle
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
// const item1 = document.querySelector(".item-menu1");
// const item2 = document.querySelector(".item-menu2");
// const item3 = document.querySelector(".item-menu3");
// const item4 = document.querySelector(".item-menu4");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

// item1.addEventListener("click", () => {
//     navMenu.classList.remove("nav-menu_visible");
// });
// item2.addEventListener("click", () => {
//     navMenu.classList.remove("nav-menu_visible");
// });
// item3.addEventListener("click", () => {
//     navMenu.classList.remove("nav-menu_visible");
// });
// item4.addEventListener("click", () => {
//     navMenu.classList.remove("nav-menu_visible");
// });

document.querySelectorAll('.nav-menu').forEach(function (element) {
    element.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu_visible");
    })
});