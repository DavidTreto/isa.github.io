// Función para abrir la nueva página en una nueva pestaña
function openPaymentPage() {
  // Asegúrate de que la ruta a 'copia1.2.html' sea correcta en tu servidor XAMPP
  // Por ejemplo: 'http://localhost/ejercicios/copia1.2.html' o '/ejercicios/copia1.2.html'
  window.open("copia1.2.html", "_blank");
}

// --- JavaScript para Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Previene el comportamiento de salto predeterminado

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Hace el scroll suave
    });
  });
});
