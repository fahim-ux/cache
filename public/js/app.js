// This file contains the JavaScript code that dynamically fetches the names of images from the "images" directory and updates the HTML to display them on the page.

document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('image-list');

    // Fetch the list of images from the "images" directory
    fetch('/images')
        .then(response => response.json())
        .then(images => {
            if (images.length === 0) {
                imageContainer.innerHTML = '<p>No images found.</p>';
                return;
            }

            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `/images/${image}`;
                imgElement.alt = image;
                imgElement.style.width = '100px'; // Set a fixed width for images
                imgElement.style.margin = '10px';

                const imageName = document.createElement('p');
                imageName.textContent = image;

                const imageWrapper = document.createElement('div');
                imageWrapper.appendChild(imgElement);
                imageWrapper.appendChild(imageName);
                imageContainer.appendChild(imageWrapper);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            imageContainer.innerHTML = '<p>Error loading images. Please try again later.</p>';
        });
});