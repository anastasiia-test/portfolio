const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // find out if click was made on the opened hamburger menu ( opened hamburger has class `active`).
    let crossIcon = document.querySelectorAll(".hamburger.active");
    
    if (hamburger && navMenu && crossIcon.length <= 0 ) {
        // hamburger menu is not open - let's open it!
        hamburger.classList.add("active");
        navMenu.classList.add("active")
    } else if (hamburger && navMenu && crossIcon.length > 0 ) {
        // hamburger menu is open - let's close it!
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        console.warn('Element hamburger or/and navMenu were not found!');
    }
})

// to close hamburger menu if any of the navigation menu links were clicked
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))