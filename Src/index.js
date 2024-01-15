/* aqui comienzan los script de page_under_construction*/

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las etiquetas <li>
    let todasLasEtiquetasLi = document.querySelectorAll('li');

    // Iterar sobre todas las etiquetas <li>
    todasLasEtiquetasLi.forEach(function(etiqueta) {
        // Almacenar estilos originales para restablecer en 'mouseout'
        let estiloOriginal = {
            backgroundColor: getComputedStyle(etiqueta).backgroundColor,
            color: getComputedStyle(etiqueta).color,
            borderRadius: getComputedStyle(etiqueta).borderRadius,
            opacity: getComputedStyle(etiqueta).opacity
        };

        // Agregar evento de hover
        etiqueta.addEventListener('mouseover', function() {
            etiqueta.style.backgroundColor = 'rgba(51, 51, 203, 0.8)';
            etiqueta.style.color = '#fff';
            etiqueta.style.borderRadius = "40%";
            etiqueta.style.opacity = "10%";
        });

        //eliminar evento hover cuando el mouse sale del area a modificar 
        
        etiqueta.addEventListener('mouseout', function() {
            // Restablecer los estilos originales
            etiqueta.style.backgroundColor = estiloOriginal.backgroundColor;
            etiqueta.style.color = estiloOriginal.color;
            etiqueta.style.borderRadius = estiloOriginal.borderRadius;
            etiqueta.style.opacity = estiloOriginal.opacity;
        });
    });
});


/*aqui trminan los script de page_under_construction*/
/* Aquí empiezan los estilos JS del teclado */

// Selecciona todos los elementos con la clase "teclas_blancas"
//let teclasBlancas = document.querySelectorAll('.teclas_blancas');

// Realiza alguna acción con cada elemento seleccionado
//teclasBlancas.forEach(teclaBlanca => {  teclaBlanca.style.backgroundColor = 'yellow';});

// Selección del elemento HTML
const imagenElement = document.getElementById('imagenCambiante');

// Definición de las imágenes a cambiar
const imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
let indiceImagenActual = 0;

// Creación de la función principal
function cambiarImagen() {
    // Alternancia entre las imágenes
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;

    // Manipulación del atributo 'src' para cambiar la imagen
    imagenElement.src = imagenes[indiceImagenActual];
}

// Uso del evento 'click' para llamar a la función al hacer clic
imagenElement.addEventListener('click', cambiarImagen);
