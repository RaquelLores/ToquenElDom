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
 
 // 3. Función de reproducción de audio
 function reproducirAudio(id) {
// Pausar el audio después de 500 milisegundos (0.5 segundos)
  setTimeout(function() {
   audio.pause();
   // Reiniciar el audio para la próxima reproducción
   audio.currentTime = 0;
}, 500);
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

  document.addEventListener('keydown', function (event) {
    // Obtener la tecla presionada
    const teclaPresionada = event.key;
  
    // Realizar la acción correspondiente según la tecla presionada
    switch (teclaPresionada) {
        case 'a':
            reproducirAudio("audiodo");
            break;
        case 's':
            reproducirAudio("audiore");
            break;
        case 'd':
            reproducirAudio("audiomi");
            break;
        case 'f':
            reproducirAudio("audiofa");
            break;
        case 'g':
            reproducirAudio("audiosol");
            break;
        case 'h':
            reproducirAudio("audiola");
            break;
        case 'j':
            reproducirAudio("audiosi");
            break;
        // Agrega más casos según las teclas que quieras manejar
    }
  });
  

// Función para cambiar la imagen de la tecla
function cambiarImagen(tecla, imagen) {
  tecla.src = imagen;
}

// Función de reproducción de audio
function reproducirAudio(id) {
  // Pausar el audio después de 500 milisegundos (0.5 segundos)
  setTimeout(function () {
      audio.pause();
      // Reiniciar el audio para la próxima reproducción
      audio.currentTime = 0;
  }, 500);
  let audio = document.getElementById(id);
  audio.play();
}

document.addEventListener('DOMContentLoaded', function () {
  let teclasBlancas = document.querySelectorAll('.tecla_blanca');
  let teclasNegras = document.querySelectorAll('.tecla_negra');

  teclasBlancas.forEach(function (tecla) {
      // Evento clic
      tecla.addEventListener('click', function () {
          cambiarImagen(tecla, "/Public/teclas/tecla_blanca_pulsada.svg");
      });

      // Evento mouseout
      tecla.addEventListener('mouseout', function () {
          cambiarImagen(tecla, "/Public/teclas/tecla_blanca.svg");
      });
  });

  teclasNegras.forEach(function (tecla) {
      // Evento clic
      tecla.addEventListener('click', function () {
          cambiarImagen(tecla, "/Public/teclas/tecla_negra_pulsada.svg");
      });

      // Evento mouseout
      tecla.addEventListener('mouseout', function () {
          cambiarImagen(tecla, "/Public/teclas/tecla_negra.svg");
      });
  });

  // Asignar eventos de teclado a funciones de reproducción de audio
  document.addEventListener('keydown', function (event) {
      const teclaPresionada = event.key;
      switch (teclaPresionada) {
          case 'a':
              reproducirAudio("audiodo");
              cambiarImagen(teclasBlancas[0], "/Public/teclas/tecla_blanca_pulsada.svg");
              break;
          case 's':
              reproducirAudio("audiore");
              cambiarImagen(teclasBlancas[1], "/Public/teclas/tecla_blanca_pulsada.svg");
              break;
          case 'd':
              reproducirAudio("audiomi");
              // Añadir más casos según las teclas que quieras manejar
              break;
          case 'f':
              reproducirAudio("audiofa");
              // Añadir más casos según las teclas que quieras manejar
              break;
          case 'g':
              reproducirAudio("audiosol");
              // Añadir más casos según las teclas que quieras manejar
              break;
          case 'h':
              reproducirAudio("audiola");
              // Añadir más casos según las teclas que quieras manejar
              break;
          case 'j':
              reproducirAudio("audiosi");
              // Añadir más casos según las teclas que quieras manejar
              break;
          // Añadir más casos según las teclas que quieras manejar
          case 'w':
            reproducirAudio("audiodosos");
            break;
          case 'e':
            reproducirAudio("audioresos");
            break;
          case 'r':
            reproducirAudio("audiofasos");
           break;
          case 't':
            reproducirAudio("audiosolsos");
            break;
          case 'y':
            reproducirAudio("audiolasos");
      }
  });
});

// Función para cambiar la imagen de la tecla
function cambiarImagen(tecla, imagen) {
    tecla.src = imagen;
}

// Función de reproducción de audio
function reproducirAudio(id) {
    // Pausar el audio después de 500 milisegundos (0.5 segundos)
    setTimeout(function () {
        audio.pause();
        // Reiniciar el audio para la próxima reproducción
        audio.currentTime = 0;
    }, 500);
    let audio = document.getElementById(id);
    audio.play();
}

document.addEventListener('DOMContentLoaded', function () {
    let teclasBlancas = document.querySelectorAll('.tecla_blanca');
    let teclasNegras = document.querySelectorAll('.tecla_negra');

    teclasBlancas.forEach(function (tecla) {
        // Evento clic
        tecla.addEventListener('click', function () {
            cambiarImagen(tecla, "/Public/teclas/tecla_blanca_pulsada.svg");
            reproducirAudio(tecla.getAttribute("data-audio-id"));
        });

        // Evento mouseout
        tecla.addEventListener('mouseout', function () {
            cambiarImagen(tecla, "/Public/teclas/tecla_blanca.svg");
        });
    });

    teclasNegras.forEach(function (tecla) {
        // Evento clic
        tecla.addEventListener('click', function () {
            cambiarImagen(tecla, "/Public/teclas/tecla_negra_pulsada.svg");
            reproducirAudio(tecla.getAttribute("data-audio-id"));
        });

        // Evento mouseout
        tecla.addEventListener('mouseout', function () {
            cambiarImagen(tecla, "/Public/teclas/tecla_negra.svg");
        });
    });

    // Asignar eventos de teclado a funciones de reproducción de audio para teclas blancas
    document.addEventListener('keydown', function (event) {
        const teclaPresionada = event.key;
        const teclaBlanca = document.querySelector(`.tecla_blanca[data-key="${teclaPresionada}"]`);
        if (teclaBlanca) {
            cambiarImagen(teclaBlanca, "/Public/teclas/tecla_blanca_pulsada.svg");
            reproducirAudio(teclaBlanca.getAttribute("data-audio-id"));
        }
    });

    // Asignar eventos de teclado para revertir la imagen a su estado inicial para teclas blancas
    document.addEventListener('keyup', function (event) {
        const teclaPresionada = event.key;
        const teclaBlanca = document.querySelector(`.tecla_blanca[data-key="${teclaPresionada}"]`);
        if (teclaBlanca) {
            cambiarImagen(teclaBlanca, "/Public/teclas/tecla_blanca.svg");
        }
    });

    // Asignar eventos de teclado a funciones de reproducción de audio para teclas negras
    document.addEventListener('keydown', function (event) {
        const teclaPresionada = event.key;
        const teclaNegra = document.querySelector(`.tecla_negra[data-key="${teclaPresionada}"]`);
        if (teclaNegra) {
            cambiarImagen(teclaNegra, "/Public/teclas/tecla_negra_pulsada.svg");
            reproducirAudio(teclaNegra.getAttribute("data-audio-id"));
        }
    });

    // Asignar eventos de teclado para revertir la imagen a su estado inicial para teclas negras
    document.addEventListener('keyup', function (event) {
        const teclaPresionada = event.key;
        const teclaNegra = document.querySelector(`.tecla_negra[data-key="${teclaPresionada}"]`);
        if (teclaNegra) {
            cambiarImagen(teclaNegra, "/Public/teclas/tecla_negra.svg");
        }
    });
});