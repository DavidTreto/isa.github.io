// Función para abrir la nueva página en una nueva pestaña
function openPaymentPage() {
  // Asegúrate de que la ruta a 'copia1.2.html' sea correcta en tu servidor XAMPP
  // Por ejemplo: 'http://localhost/ejercicios/copia1.2.html' o '/ejercicios/copia1.2.html'
  window.open("indexb.html", "indexa.html",  "_blank");
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



// Carrusel automático solo en móviles
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".mobile-carousel .carousel-slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000); // Cambia cada 4 segundos
  }
});
