// Ajustar el scroll al title
const altoNavegacion = document.querySelector('.navegacion').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', altoNavegacion + 'px');
// Menu toggle
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

document.querySelectorAll('.nav-menu').forEach(function (element) {
    element.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu_visible");
    })
});