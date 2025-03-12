// Hide toggle menu in mobile view
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    if (menuIcon) {
        menuIcon.remove(); // Fully remove the icon
    }
});


// Testimonial Slider
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

if (testimonials.length > 0) {
    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove("active");
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add("active");
    }
    setInterval(showNextTestimonial, 5000);
}

// Plane Animation
const plane = document.querySelector(".plane");

if (plane) {
    function startPlaneAnimation() {
        plane.style.animation = "fly 10s linear 1, float 3s ease-in-out infinite";
    }
    startPlaneAnimation();
    setInterval(startPlaneAnimation, 60000);
}

// Web Developer Text Animation
const webDeveloperText = document.querySelector(".web-developer");
if (webDeveloperText) {
    webDeveloperText.classList.add("animate");
}

// Scroll-Based Animations
const sections = document.querySelectorAll(".animate-on-scroll");
if (sections.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
}

// Skills Section Animation
const skillsSection = document.querySelector("#skills");
const skillsContainer = document.querySelector(".skills-container");
const skills = document.querySelectorAll(".skill");

if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillsContainer.classList.add("show");
                    skills.forEach(skill => skill.classList.add("show"));
                    skillsObserver.unobserve(skillsSection);
                }
            });
        },
        { threshold: 0.3 }
    );
    skillsObserver.observe(skillsSection);
}

// Update the year dynamically in the footer
document.getElementById("year").textContent = new Date().getFullYear();
