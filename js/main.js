const navbar = document.querySelector(".navbar");
const content = document.querySelector(".content");

window.addEventListener("scroll", () => {
    const contentTop = content.getBoundingClientRect().top;
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    console.log("nav", navbarBottom);
    console.log("con", contentTop);
    if (navbarBottom >= 0 && contentTop >= 0) {
        navbar.style.position = "relative";
        navbar.style.opacity = "1";
        navbar.style.transitionDuration = "0s";
    } else {
        navbar.style.transitionDuration = ".3s";
        if (contentTop >= 0.5) {
            navbar.style.opacity = "0";
        } else {
            navbar.style.position = "sticky";
            navbar.style.opacity = "1";
        }
    }
});
