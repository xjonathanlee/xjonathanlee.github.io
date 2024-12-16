        // Create the image element once (it will be shared across all words)
        console.log("BRBRBR")
        const imageElement = document.createElement('img');
        imageElement.classList.add('hover-image');
        document.body.appendChild(imageElement);  // Append image element to the body

        // Function to handle mousemove and touchmove for each word
        function handleInteraction(event, word) {
            let mouseX, mouseY;

            if (event.touches && event.touches.length > 0) {
                // For touch events, use the first touch point
                mouseX = event.touches[0].clientX;
                mouseY = event.touches[0].clientY;
            } else {
                // For mouse events, use the mouse position
                mouseX = event.clientX;
                mouseY = event.clientY;
            }

            // Get the word's position
            const wordRect = word.getBoundingClientRect();
            let imageToShow;

            // Determine which image to show based on mouse or touch position
            if (mouseX < wordRect.left + wordRect.width / 5) {
                imageToShow = word.getAttribute('data-image-1');
            } else if (mouseX < wordRect.left + 2 * wordRect.width / 5) {
                imageToShow = word.getAttribute('data-image-2');
            } else if (mouseX < wordRect.left + 3 * wordRect.width / 5) {
                imageToShow = word.getAttribute('data-image-3');
            }else if (mouseX < wordRect.left + 4 * wordRect.width / 5) {
                imageToShow = word.getAttribute('data-image-4');
            }  else {
                imageToShow = word.getAttribute('data-image-5');
            }

            // Set the image source and display it
            imageElement.src = imageToShow;
            imageElement.style.display = 'block';

            // Wait until the image is loaded to set its position
            imageElement.onload = function() {
                // Position the image near the cursor (or touch) with some offset
                imageElement.style.left = `${mouseX + 10}px`;  // Add 10px for a little offset from the cursor
                imageElement.style.top = `${mouseY + 10}px`;   // Add 10px for a little offset from the cursor
            };
        }

        // Attach event listeners to each word
        const words = document.querySelectorAll('.word');
        words.forEach(word => {
            // Mouse move event
            word.addEventListener('mousemove', function(event) {
                handleInteraction(event, word);
            });

            // Touch move event
            word.addEventListener('touchmove', function(event) {
                event.preventDefault(); // Prevent default touch actions like scrolling
                handleInteraction(event, word);
            });

            // Hide the image when mouse or touch leaves the word
            word.addEventListener('mouseleave', function() {
                imageElement.style.display = 'none';
            });

            word.addEventListener('touchend', function() {
                imageElement.style.display = 'none';
            });

            word.addEventListener('touchcancel', function() {
                imageElement.style.display = 'none';
            });
        });