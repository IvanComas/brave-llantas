function validateForm() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos obligatorios.");
        return false;
    }

    alert("Gracias por contactarnos. Hemos recibido tu mensaje.");
    return true;
}
