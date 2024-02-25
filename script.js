// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('fileGenerationForm');
    form.addEventListener('submit', handleFormSubmit);

    // Add drag and drop functionality to file inputs
    const dropAreas = document.querySelectorAll('.drag-drop-area');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropAreas.forEach(dropArea => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropAreas.forEach(dropArea => {
            dropArea.addEventListener(eventName, highlight, false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropAreas.forEach(dropArea => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });
    });

    dropAreas.forEach(dropArea => {
        dropArea.addEventListener('drop', handleDrop, false);
        dropArea.addEventListener('click', handleClick, false);
    });
});

function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    this.classList.add('active');
}

function unhighlight(e) {
    this.classList.remove('active');
}

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;

    let input = this.querySelector('input[type="file"]');
    input.files = files;

    // Display the file name
    this.querySelector('p').textContent = files[0].name;
}

function handleClick(e) {
    let input = this.querySelector('input[type="file"]');
    input.click();

    input.addEventListener('change', () => {
        // Display the file name
        this.querySelector('p').textContent = input.files[0].name;
    });
}

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
