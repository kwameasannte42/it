// Example: Handle Ticket Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const ticketForm = document.getElementById('ticketForm');
    const successMessage = document.getElementById('successMessage');

    if (ticketForm) {
        ticketForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Reset
            ticketForm.reset();

            // Show success message
            successMessage.style.display = 'block';

            // Hide the success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Accordion Navigation Toggle
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarItems = document.getElementById('navbarItems');

    if (navbarToggle && navbarItems) {
        navbarToggle.addEventListener('click', function () {
            // Toggle the 'open' class for the accordion and the icon
            navbarToggle.classList.toggle('open');
            navbarItems.classList.toggle('open');
        });
    }
});
