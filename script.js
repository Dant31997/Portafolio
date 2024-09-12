function mostrarSeccion(id) {
    // Ocultar todas las secciones
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('activa');
    });

    // Mostrar la sección seleccionada
    let seccionSeleccionada = document.getElementById(id);
    seccionSeleccionada.classList.add('activa');
}