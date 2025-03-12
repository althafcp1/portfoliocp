const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

// Toggle menu visibility on click
if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
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
            setTimeout(() => {
                plane.style.animation = "none"; // Reset animation
                plane.style.animationPlayState = "paused"; // Pause animation
                requestAnimationFrame(() => {
                    plane.style.animation = "fly 10s linear 1, float 3s ease-in-out infinite";
                    plane.style.animationPlayState = "running"; // Restart animation
                });
            }, 10000); // 10s flight time
        }

        // Start and repeat plane animation
        startPlaneAnimation();
        setInterval(startPlaneAnimation, 60000);
    }

    // Web Developer Text Animation
    const webDeveloperText = document.querySelector(".web-developer");
    if (webDeveloperText) {
        webDeveloperText.classList.add("animate");
    }

    // About Section Animation
    const aboutSummary = document.querySelector(".about-summary");
    if (aboutSummary) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        aboutSummary.classList.add("animate");
                        observer.unobserve(aboutSummary); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSummary);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector("#skills");
    const skillsContainer = document.querySelector(".skills-container");
    const skills = document.querySelectorAll(".skill");

    if (skillsSection) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        skillsContainer.classList.add("show");
                        skills.forEach(skill => skill.classList.add("show"));
                        observer.unobserve(skillsSection); 
                    }
                });
            },
            { threshold: 0.3 } 
        );

        observer.observe(skillsSection);
    }
});
