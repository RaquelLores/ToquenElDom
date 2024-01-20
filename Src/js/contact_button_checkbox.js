
//VARIACIONES EN JS UTILIZANDO EXPRESIONES REGULARES (METODO: .test)
function validarEmailYEnviar() {
    // Obtener el valor del campo de email
    let emailInput = document.getElementById('email').value;

    // Expresión regular para verificar el formato del email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Utilizar el método test() para comprobar si el email es válido
    if (emailRegex.test(emailInput)) {
        // Verificar si el checkbox de política de privacidad está marcado
        let checkbox = document.getElementById('gridCheck');
        if (checkbox.checked) {
            alert('Tu mensaje se ha enviado.');
        } else {
            alert('Por favor, acepta la política de privacidad haciendo clic en la casilla.');
        }
    } else {
        alert('Por favor, introduce un email válido.');
    }
}