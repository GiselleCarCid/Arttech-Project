document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo
    const logData = {
        "2024-06-01": [
            {
                Nombrempleado: "Juan Pérez",
                IDempleado: "001",
                Nactividad: "Aseo de sala para evento",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                adjuntos: ["Eventos_junio.pdf"]
            },
            {
                Nombrempleado: "María Gómez",
                IDempleado: "002",
                Nactividad: "Sesión de Conservación de Obra",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                adjuntos: []
            }
        ],
        "2024-06-02": [
            {
                Nombrempleado: "Carlos Ramírez",
                IDempleado: "003",
                Nactividad: "Capacitación interna",
                descripcion: "Sesión de capacitación sobre el nuevo software.",
                adjuntos: ["manual_software.pdf", "presentacion_capacitacion.pptx"]
            }
        ]
    };

    window.loadLogs = () => {
        const dateInput = document.getElementById('dateInput').value;
        const logContainer = document.getElementById('logContainer');
        logContainer.innerHTML = ''; 

        if (logData[dateInput]) {
            logData[dateInput].forEach(log => {
                const logEntry = document.createElement('div');
                logEntry.className = 'log-entry';

                const logTitle = document.createElement('h3');
                logTitle.textContent = log.Nactividad;

                const logDetails = document.createElement('div');
                logDetails.className = 'details';
                logDetails.innerHTML = `
                    <p><strong>Nombre del empleado:</strong> ${log.Nombrempleado}</p>
                    <p><strong>ID del empleado:</strong> ${log.IDempleado}</p>
                    <p><strong>Descripción:</strong> ${log.descripcion}</p>
                `;

                const logadjuntos = document.createElement('div');
                logadjuntos.className = 'adjuntos';
                if (log.adjuntos.length > 0) {
                    logadjuntos.innerHTML = '<strong>Archivos adjuntos:</strong>';
                    log.adjuntos.forEach(file => {
                        const fileLink = document.createElement('a');
                        fileLink.href = `#`;
                        fileLink.textContent = file;
                        logadjuntos.appendChild(fileLink);
                    });
                }

                logEntry.appendChild(logTitle);
                logEntry.appendChild(logDetails);
                logEntry.appendChild(logadjuntos);
                logContainer.appendChild(logEntry);
            });
        } else {
            logContainer.innerHTML = '<p>No hay bitácoras para la fecha seleccionada.</p>';
        }
    };
});
