// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que se recargue la página

        const nombre = document.getElementById("nombre").value.trim();
        const celular = document.getElementById("celular").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || celular === "" || mensaje === "") {
            resultado.textContent = "Por favor completa todos los campos.";
            resultado.style.color = "red";
        } else {
            resultado.textContent = `Gracias, ${nombre}. Tu mensaje ha sido enviado correctamente.`;
            resultado.style.color = "green";
            formulario.reset(); // Limpia el formulario
        }
    });
});

// Función para mostrar/ocultar secciones de productos (opcional)
function verMas(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        if (elemento.classList.contains("oculto")) {
            elemento.classList.remove("oculto");
        } else {
            elemento.classList.add("oculto");
        }
    }
}
