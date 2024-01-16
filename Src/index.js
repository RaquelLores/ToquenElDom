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
//aquí empiezan los estilos de js del piano

document.addEventListener('DOMContentLoaded', function () {
    let teclasBlancas = document.querySelectorAll('.tecla_blanca');
 
     teclasBlancas.forEach(function (tecla) {
         tecla.addEventListener('click', function () {
             // Cambia la imagen al hacer clic
             tecla.src = "/Public/teclas/tecla_blanca_pulsada.svg";
         });
     });
 });
 
 
 document.addEventListener('DOMContentLoaded', function () {
     let teclasBlancas = document.querySelectorAll('.tecla_blanca');
  
      teclasBlancas.forEach(function (tecla) {
          tecla.addEventListener('mouseout', function () {
              // Cambia la imagen al hacer clic
              tecla.src = "/Public/teclas/tecla_blanca.svg";
          });
      });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    let teclasNegras = document.querySelectorAll('.tecla_negra');
 
     teclasNegras.forEach(function (tecla) {
         tecla.addEventListener('click', function () {
             // Cambia la imagen al hacer clic
             tecla.src = "/Public/teclas/tecla_negra_pulsada.svg";
         });
     });
 });
 
 
 document.addEventListener('DOMContentLoaded', function () {
     let teclasNegras = document.querySelectorAll('.tecla_negra');
  
      teclasNegras.forEach(function (tecla) {
          tecla.addEventListener('mouseout', function () {
              // Cambia la imagen al hacer clic
              tecla.src = "/Public/teclas/tecla_negra.svg";
          });
      });
  });

//-----SONIDO-------//

//Do
 
 // 3. Función de reproducción de audio
 function reproducirAudio(id) {
    let audio = document.getElementById(id);
    audio.play();
  }
  // 4. Código JavaScript
  const tecla_blancado = document.getElementById("dotecla_blanca")
  tecla_blancado.addEventListener("click",function(){
    return reproducirAudio("audiodo")
  });

  //RE
  const tecla_blancare = document.getElementById("retecla_blanca")
  tecla_blancare.addEventListener("click",function(){
    return reproducirAudio("audiore")
  });

  const tecla_blancami = document.getElementById("mitecla_blanca")
  tecla_blancami.addEventListener("click",function(){
    return reproducirAudio("audiomi")
  });

  const tecla_blancafa = document.getElementById("fatecla_blanca")
  tecla_blancafa.addEventListener("click",function(){
    return reproducirAudio("audiofa")
  });

  const tecla_blancasol = document.getElementById("soltecla_blanca")
  tecla_blancasol.addEventListener("click",function(){
    return reproducirAudio("audiosol")
  });

  const tecla_blancala = document.getElementById("latecla_blanca")
  tecla_blancala.addEventListener("click",function(){
    return reproducirAudio("audiola")
  });

  const tecla_blancasi = document.getElementById("sitecla_blanca")
  tecla_blancasi.addEventListener("click",function(){
    return reproducirAudio("audiosi")
  });

  //teclas negras

  const dosostecla_negra = document.getElementById("dosostecla_negra")
  dosostecla_negra.addEventListener("click",function(){
    return reproducirAudio("audiodosos")
  });

  const resostecla_negra = document.getElementById("resostecla_negra")
  resostecla_negra.addEventListener("click",function(){
    return reproducirAudio("audioresos")
  });

  const fasostecla_negra = document.getElementById("fasostecla_negra")
  fasostecla_negra.addEventListener("click",function(){
    return reproducirAudio("audiofasos")
  });

  const solsostecla_negra = document.getElementById("solsostecla_negra")
  solsostecla_negra.addEventListener("click",function(){
    return reproducirAudio("audiosolsos")
  });

  const lasostecla_negra = document.getElementById("lasostecla_negra")
  lasostecla_negra.addEventListener("click",function(){
    return reproducirAudio("audiolasos")
  });

