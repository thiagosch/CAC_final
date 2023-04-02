const navbar = document.querySelector(".navbar");
const content = document.querySelector(".content");

window.addEventListener("scroll", () => {
    const contentTop = content.getBoundingClientRect().top;
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    if (navbarBottom >= 0 && contentTop >= 8) {
        navbar.style.position = "relative";
        navbar.style.opacity = "1";
        navbar.style.transitionDuration = "0s";
    } else {
        navbar.style.transitionDuration = ".3s";
        if (contentTop >= 8) {
            navbar.style.opacity = "0";
        } else {
            navbar.style.position = "sticky";
            navbar.style.opacity = "1";
        }
    }
});
body = document.getElementById("body");
burger_menu = document.getElementById("burger-menu");
modal = document.getElementById("navegacion-opciones");
menu_status = 0;
function toggle_menu() {
    if (menu_status) {
        burger_menu.innerHTML = "menu";
        body.style.overflow = "auto";
        modal.style.display = "none";
        menu_status = 0;
    } else {
        burger_menu.innerHTML = "close";
        body.style.overflow = "hidden";
        modal.style.display = "flex";
        menu_status = 1;
    }
}

function close_menu() {
    if (menu_status == 1) {
        burger_menu.innerHTML = "menu";
        body.style.overflow = "auto";
        modal.style.display = "none";
        menu_status = 0;
    }
}
