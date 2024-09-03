// Example: Handle Ticket Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const ticketForm = document.getElementById('ticketForm');
    const successMessage = document.getElementById('successMessage');

    if (ticketForm) {
        ticketForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // For this example, I'll just show a success message.

            // Reset
            ticketForm.reset();

            // success message
            successMessage.style.display = 'block';

            // Hide the success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
});
