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


// Aquí empiezan los scripts de Contact

window.addEventListener('load', ()=> {
    // Crear un evento load, para referenciar nuestro formulario
        const forms = document.getElementById('contactForm')
        const usuario = document.getElementById('usuario')

    // Agregar elemento submit: prevenimos el comportamiento por defecto que realiza la página una vez que desencadenamos el evento submit
    forms.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos() // Creamos una función para validar los campos
})

const validaCampos = ()=> {
    //capturar los valores ingresados por el usuario

    const usuarioValor = usuario.value.trim()

    // Creamos dos funciones para que al usuario le salga un mensaje cuando ingresa bien su usuario - validaOk(usuario) - y cuando no - validaFalla(usuario, 'Campo vacio') -
    if(!usuarioValor){
        console.log('CAMPO VACIO')
        validaFalla(usuario, 'Campo vacio')
    }else{
        validaOk(usuario)
    }
}

const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje
    // Hacer que salga un mensaje al equivocarse con el apartado nombre de usuario
    formControl.className = 'contactForm falla'
    // Que salga de color rojo al equivocarse
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'contactForm ok'
}
})