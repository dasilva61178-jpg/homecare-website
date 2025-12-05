/* ------------------------------------------------
   MOBILE NAV MENU (Hamburger Button)
-------------------------------------------------- */

// Create mobile menu button dynamically
const nav = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "&#9776;"; // hamburger icon
nav.prepend(menuBtn);

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
});

/* ------------------------------------------------
   SMOOTH SCROLLING
-------------------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ------------------------------------------------
   FADE-IN ON SCROLL
-------------------------------------------------- */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".section, .about, .services, .testimonials, .contact").forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});

