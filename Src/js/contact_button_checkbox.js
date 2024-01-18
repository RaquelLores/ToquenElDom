//JS de la página de contacto
function enviarFormulario() {
    var checkbox = document.getElementById('gridCheck');

    if (checkbox.checked) {
        window.alert('Tu mensaje se ha enviado.');
    } else {
        window.alert('Por favor, acepta la política de privacidad haciendo clic en la casilla.');
    }
}
