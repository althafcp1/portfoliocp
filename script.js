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


// JavaScript to control the plane animation delay
const plane = document.querySelector('.plane');

function startPlaneAnimation() {
  plane.style.animation = 'fly 10s linear 1, float 3s ease-in-out infinite';
  setTimeout(() => {
    plane.style.animation = 'none'; // Reset animation
    setTimeout(() => {
      plane.style.animation = 'fly 10s linear 1, float 3s ease-in-out infinite';
    }, 10); // Small delay to restart animation
  }, 10000); // 10 seconds for the plane to fly across
}

// Start the animation initially
startPlaneAnimation();

// Repeat the animation every 60 seconds
setInterval(startPlaneAnimation, 60000);

document.addEventListener("DOMContentLoaded", function() {
  const webDeveloperText = document.querySelector(".web-developer");
  webDeveloperText.classList.add("animate");
});