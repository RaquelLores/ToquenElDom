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
            etiqueta.style.borderRadius = "60%";
            etiqueta.style.opacity = "1";
        });

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