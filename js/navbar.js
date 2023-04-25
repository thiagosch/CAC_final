const navbar = document.querySelector(".navbar");
const content = document.querySelector(".content");
const nav_closer = document.querySelector("#close-nav");
window.addEventListener("scroll", () => {
    const contentTop = content.getBoundingClientRect().top;
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    if (navbarBottom >= 0 && contentTop >= 53) {
        navbar.classList = "navbar";
        navbar.classList.add("status1");
    } else {
        if (contentTop >= 53) {
            navbar.classList = "navbar";
            navbar.classList.add("status2");
        } else {
            navbar.classList = "navbar";
            navbar.classList.add("status3");
        }
    }
});

const body = document.getElementById("body");
const burger_menu = document.getElementById("burger-menu");
const modal = document.getElementById("navegacion-opciones");
let menu_status = 0;

function toggle_menu() {
    if (menu_status) {
        burger_menu.innerHTML = "menu";
        body.style.overflow = "auto";
        modal.classList.remove("active");
        nav_closer.classList.remove("active");
        menu_status = 0;
    } else {
        burger_menu.innerHTML = "close";
        body.style.overflow = "hidden";
        modal.classList.add("active");
        nav_closer.classList.add("active");
        menu_status = 1;
    }
}

function close_menu() {
    if (menu_status == 1) {
        burger_menu.innerHTML = "menu";
        body.style.overflow = "auto";
        modal.classList.remove("active");
        nav_closer.classList.remove("active");
        menu_status = 0;
    }
}
