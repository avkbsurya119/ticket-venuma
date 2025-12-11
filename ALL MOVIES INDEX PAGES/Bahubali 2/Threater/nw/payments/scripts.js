document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
})
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const errorMessage = document.getElementById('error-message');
    const makePaymentButton = document.getElementById('makePayment');
    const home = document.getElementById('home');

    // Function to check if both email and phone are valid
    function checkValidity() {
        const email = contactForm.email.value;
        const phone = contactForm.phone.value;

        const isValidEmail = isValidEmailFormat(email);
        const isValidPhone = isValidPhoneNumber(phone);

        if (isValidEmail && isValidPhone) {
            errorMessage.textContent = ''; // Clear error message if both are valid
            makePaymentButton.disabled = false; // Enable the "Make Payment" button
        } else {
            errorMessage.textContent = 'Please enter a valid email and phone number.'; // Display error message if any field is invalid
            makePaymentButton.disabled = true; // Disable the "Make Payment" button
        }
    }

    // Event listeners for input fields to check validity
    contactForm.email.addEventListener('input', checkValidity);
    contactForm.phone.addEventListener('input', checkValidity);

    // Event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        checkValidity(); // Check validity of email and phone
        if (!errorMessage.textContent) {
            // If there are no error messages, proceed with form submission
            submitForm(); 
        }
    });

    // Function to validate email format
    function isValidEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number format
    function isValidPhoneNumber(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    // Function to handle form submission
    function submitForm() {
        const email = contactForm.email.value;
        const phone = contactForm.phone.value;

        // Your form submission logic here
        if (email && phone) {
            // Both email and phone are filled, proceed with payment processing alert
            alert('Payment processing...'); 
            window.location.href = home;
        } else {
            // Email or phone is not filled, show alert to fill in both fields
            alert('Please fill in both email and phone fields with correct syntax');
        }
    }
});
// Code for populating order summary
const transferredArray = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get('data')));
document.getElementById('movie-title').textContent = transferredArray.title;
document.getElementById('genre').textContent = transferredArray.genre;
document.getElementById('theater').textContent = transferredArray.tickets[0].theater;
document.getElementById('ticket-date-show').textContent = transferredArray.tickets[0].date + " - " + transferredArray.tickets[0].time;

// Update selected seats
const selectedSeats = transferredArray.selectedSeats.map(seat => seat.number).join(', ');
document.getElementById('seats').textContent = selectedSeats;

// Update total price
document.getElementById('total-price').textContent = 'Subtotal: Rs. ' + transferredArray.totalPrice;
