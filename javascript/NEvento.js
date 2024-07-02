document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', (event) => {
        navMenu.classList.toggle('active');
        event.stopPropagation(); // Evita que el clic en la hamburguesa cierre el menú inmediatamente
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Simular datos del usuario
    const userName = 'Andrea Medina';
    const userRole = 'Coordinadora';

    // Actualizar el contenido del usuario
    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-role').textContent = userRole;
});
