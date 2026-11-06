
/* =========================================
   JAJA PERSONAL PORTFOLIO
   JAVASCRIPT INTERACTIONS
========================================= */

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

}


// 2. SMOOTH NAVIGATION

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


// 3. ACTIVE NAVIGATION HIGHLIGHT

const sections = document.querySelectorAll(
    "body > section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-menu a"
);

function updateNavigation() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {

        const isActive =
            link.getAttribute("href") === "#" + currentSection;

        link.classList.toggle("active", isActive);

    });

}

window.addEventListener(
    "scroll",
    updateNavigation,
    { passive: true }
);

updateNavigation();


// 4. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// 5. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 6. GALLERY IMAGE CHECK

const galleryImages = document.querySelectorAll(
    ".gallery-card img"
);

galleryImages.forEach(image => {

    image.addEventListener("error", function () {

        console.warn(
            "Gallery image could not be loaded:",
            image.src
        );

    });

});


// 7. BACK TO TOP

const backTop = document.querySelector(".back-top");

if (backTop) {

    backTop.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 8. WELCOME MESSAGE

window.addEventListener("load", function () {

    console.log(
        "Welcome to Jaja's Personal Website Portfolio!"
    );

    console.log(
        "Designed using HTML, CSS, and JavaScript."
    );

    console.log(
        "Luxury Burgundy Portfolio successfully loaded."
    );

});
