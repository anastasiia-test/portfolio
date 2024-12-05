const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    if (hamburger) {
        hamburger.classList.add("active");
    } else {
        console.warn('Element hamburger not found!');
    }
    if(navMenu) {
        navMenu.classList.add("active")
    } else {
        console.warn('Element navMenu not found!');
    }
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))