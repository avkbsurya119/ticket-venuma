document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rating-form');
    const ratingInput = document.getElementById('rating');
    const ratingValue = document.getElementById('rating-value');

    // Display initial value
    ratingValue.textContent = ratingInput.value;

    // Update the displayed rating value and its color when slider value changes
    ratingInput.addEventListener('input', () => {
        ratingValue.textContent = ratingInput.value;
        updateRatingColor(ratingValue, ratingInput.value);
    });

    form.addEventListener('input', () => {
        submitForm(); // Automatically submit form when user interacts with form elements
    });
});

// Function to submit the form and close the modal overlay
function submitForm() {
    const form = document.getElementById('rating-form');
    const formData = new FormData(form); // Get form data
    const rating = formData.get('rating');
    const comments = formData.get('comments');

    // Here you can submit the form data to your server or perform other actions
    // For demonstration, close the modal overlay
    const modal = document.getElementById('rating-modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Show the scrollbar
}

// Function to update the color of the rating value based on its value
function updateRatingColor(element, value) {
    if (value >= 7) {
        element.style.color = '#00FF00'; // Green color for high ratings
    } else if (value >= 4) {
        element.style.color = '#FFA500'; // Orange color for moderate ratings
    } else {
        element.style.color = '#FF0000'; // Red color for low ratings
    }
}
