// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('fileGenerationForm');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data (file uploads, dates, etc.)
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Perform file generation logic (you can implement this part)
    // Example: Send data to the server via AJAX or process it locally

    // Show success message or handle errors
    console.log('File generation initiated!');
}
