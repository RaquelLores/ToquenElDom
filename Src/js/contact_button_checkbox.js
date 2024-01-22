
//VARIACIONES EN JS UTILIZANDO EXPRESIONES REGULARES (METODO: .test)
function validarEmailYEnviar() {
    // Restablecer mensajes de error
    document.getElementById('error-usuario').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-checkbox').textContent = '';

    // Obtener los valores de los campos
    let usuarioInput = document.getElementById('usuario').value;
    let emailInput = document.getElementById('email').value;
    let checkbox = document.getElementById('gridCheck');

    // Expresión regular para verificar el formato del email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar nombre de usuario.El método trim( ) devuelve la cadena de texto sin espacios en blanco en ambos extremos.
    if (usuarioInput.trim() === '') {
      document.getElementById('error-usuario').textContent = 'Por favor, introduce tu nombre.';
    }

    // Validar email
    if (!emailRegex.test(emailInput)) {
      document.getElementById('error-email').textContent = 'Por favor, introduce un email válido.';
    }
// Mostrar popup si no hay errores
    if (usuarioInput.trim() !== '' && emailRegex.test(emailInput) && checkbox.checked) {
      alert('Tu mensaje se ha enviado.');
    }

    // Validar checkbox
    if (!checkbox.checked) {
      document.getElementById('error-checkbox').textContent = 'Por favor, acepta la política de privacidad haciendo clic en la casilla.';
    }

    // Devolver false si hay errores, true si todo está bien
    return (usuarioInput.trim() !== '' && emailRegex.test(emailInput) && checkbox.checked);
  }