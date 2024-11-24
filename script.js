const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Add event listener for menu icon click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle 'active' class to show/hide the navigation
});
