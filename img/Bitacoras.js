document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".botones").addEventListener("click", addFieldset);
});

function addFieldset() {
    // Crear un nuevo fieldset
    const nuevoFieldset = document.createElement("fieldset");

    // Crear el label y el input para el nombre de la actividad
    const nuevoLabelNombre = document.createElement("label");
    nuevoLabelNombre.innerHTML = 'Nombre de la actividad*<input type="text" placeholder="Ingrese el nombre de la actividad" required />';

    // Crear el label y el textarea para la descripción
    const nuevoLabelDescripcion = document.createElement("label");
    nuevoLabelDescripcion.innerHTML = 'Descripción*<textarea required></textarea>';

    // Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.textContent = "✖";
    botonEliminar.className = "boton-eliminar";
    botonEliminar.addEventListener("click", function () {
        nuevoFieldset.remove();
    });

    // Añadir los nuevos elementos al fieldset
    nuevoFieldset.appendChild(botonEliminar);
    nuevoFieldset.appendChild(nuevoLabelNombre);
    nuevoFieldset.appendChild(nuevoLabelDescripcion);

    // Añadir el nuevo fieldset al contenedor
    document.getElementById("contenedor-fieldset").appendChild(nuevoFieldset);
}

