// Inicializar los modales de Bootstrap
const registroModal = new bootstrap.Modal(document.getElementById('registroModal'));

// Función para mostrar el modal de registro
function mostrarRegistro() {
    registroModal.show();
}

// Función para mostrar el mensaje de búsqueda
function mostrarBusqueda() {
    registroModal.show();
}

// Manejar el envío del formulario
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí puedes agregar el código para enviar el email a tu backend
    const email = this.querySelector('input[type="email"]').value;
    
    // Por ahora solo mostraremos un alert
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    registroModal.hide();
});

// Opcional: Añadir Google Analytics
document.addEventListener('DOMContentLoaded', function() {
    // Código de Google Analytics aquí
}); 