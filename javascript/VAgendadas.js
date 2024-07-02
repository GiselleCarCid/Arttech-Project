document.addEventListener("DOMContentLoaded", function() {
    const visitHeaders = document.querySelectorAll('.visit-header');

    visitHeaders.forEach(header => {
        header.addEventListener('click', function(event) {
            const details = this.nextElementSibling;
            if (details) {
                details.classList.toggle('visible');
            }
        });
    });
});

