const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropdownsWrapper = document.querySelector('.skills-boxes');

hamburger.addEventListener("click", () => {
    // find out if click was made on the opened hamburger menu ( opened hamburger has class `active`).
    let crossIcon = document.querySelectorAll(".hamburger.active");

    if (hamburger && navMenu && crossIcon.length <= 0) {
        // hamburger menu is not open - let's open it!
        hamburger.classList.add("active");
        navMenu.classList.add("active")
    } else if (hamburger && navMenu && crossIcon.length > 0) {
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

// add event listener for an event 'click' on any dropdown
document.querySelectorAll(".container").forEach(dropdown => dropdown.addEventListener("click", () => {
    const dropdownType = dropdown.classList[0];
    const dropdownContent = document.querySelector(`.dropdown-content.${dropdownType}`)
    const arrow = document.querySelector(`#right-chevron-${dropdownType}`)

    dropdownContent.classList.toggle('dropdown-content-active')
    arrow.classList.toggle('fa-rotate-90')
}))

const element = document.getElementById("collapsible");
element.addEventListener("shown.bs.collapse", (event) => {
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
});
