const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Add event listener for menu icon click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle 'active' class to show/hide the navigation
});

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove("active");
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add("active");
    }

    setInterval(showNextTestimonial, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.querySelector(".animated");
    animatedText.classList.add("slide-in-left");
});

