document.addEventListener('mousemove', (e) => {
    const profileImage = document.querySelector('.profile-image');
    const { clientX, clientY } = e;

    // Calculate the center of the profile image
    const rect = profileImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate the distance from the cursor to the center of the image
    const deltaX = (clientX - centerX) / 15; // Adjust divisor for sensitivity
    const deltaY = (clientY - centerY) / 15; // Adjust divisor for sensitivity

    // Apply slight movement to the profile image
    profileImage.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});