document.addEventListener("DOMContentLoaded", function() {
    const visitHeaders = document.querySelectorAll('.visit-header');
    const modals = document.querySelectorAll('.open-modal');
    const modal = document.getElementById("fileModal");
    const closeButton = document.querySelector(".close-button");

    visitHeaders.forEach(header => {
        header.addEventListener('click', function(event) {
            // Evitar que se ejecute si se hace clic en el ícono para adjuntar archivos
            if (!event.target.closest('.add-attachment')) {
                const details = this.nextElementSibling;
                if (details) {
                    details.classList.toggle('visible');
                }
            }
        });
    });

    modals.forEach(modalButton => {
        modalButton.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    
});

