document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las etiquetas <li>
    let todasLasEtiquetasLi = document.querySelectorAll('li');

    // Iterar sobre todas las etiquetas <li>
    todasLasEtiquetasLi.forEach(function(etiqueta) {
        // Agregar evento de hover
        etiqueta.addEventListener('mouseover', function() {
            // Agregar clase para aplicar el borde
            etiqueta.classList.add('hovered');
        });

        // Eliminar clase hover cuando el mouse sale del área a modificar 
        etiqueta.addEventListener('mouseout', function() {
            // Quitar la clase para eliminar el borde
            etiqueta.classList.remove('hovered');
        });
    });
});

// Agregar evento al botón de menú para mostrar/ocultar el menú en pantallas pequeñas
let menuToggle = document.querySelector('.menu-toggle');
let navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show-menu');
});