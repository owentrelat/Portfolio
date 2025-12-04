document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-wrapper");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    // Vérification: si un élément manque, on ignore ce carrousel
    if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

    let current = 0;

    function updateSlide() {
      track.style.transform = `translateX(-${current * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlide();
    });

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      updateSlide();
    });

    // Position initiale
    updateSlide();
  });
});
