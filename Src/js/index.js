/*aqui terminan los script de page_under_construction*/
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

  //JS de la página de contacto, botón y checkbox dinámicos
  function enviarFormulario() {
    var checkbox = document.getElementById('gridCheck');

    if (checkbox.checked) {
        window.alert('Tu mensaje se ha enviado.');
    } else {
        window.alert('Por favor, acepta la política de privacidad haciendo clic en la casilla.');
    }
}


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
    
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'contactForm ok'
}
})
