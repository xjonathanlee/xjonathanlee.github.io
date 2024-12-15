// Get all the hover words that will trigger the image follow
const hoverWords = document.querySelectorAll('.hover-word');

// Create a variable to store the image elements that will follow the mouse
let currentImage = null;

// Handle mouse enter for each hover word
hoverWords.forEach(word => {
    word.addEventListener('mouseenter', (event) => {
        // Get the image URL from the data-image attribute of the hovered word
        const imageUrl = event.target.getAttribute('data-image');
        
        // Create an image element
        currentImage = document.createElement('img');
        currentImage.src = imageUrl;
        currentImage.classList.add('mouse-image');
        document.body.appendChild(currentImage); // Add image to the body

        // Make the image visible
        currentImage.style.display = 'block';
    });

    // Handle mouse leave for each hover word
    word.addEventListener('mouseleave', () => {
        if (currentImage) {
            currentImage.style.display = 'none'; // Hide the image when the mouse leaves
            document.body.removeChild(currentImage); // Remove image from DOM
            currentImage = null; // Clear the current image reference
        }
    });
});

// Update the position of the image to follow the mouse
document.addEventListener('mousemove', (event) => {
    if (currentImage) {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        currentImage.style.left = mouseX + 'px';
        currentImage.style.top = mouseY + 'px';
    }
});