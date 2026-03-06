/* ===================================== */
/* PORTFOLIO LIGHTBOX FOR NAKURU MOBILE TECH */
/* ===================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Select all portfolio images
const portfolioImages = document.querySelectorAll(".portfolio-grid img");

portfolioImages.forEach(img => {
    img.addEventListener("click", () => {

      // Create overlay
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");

      // Create image inside overlay
    const lightboxImage = document.createElement("img");
    lightboxImage.src = img.src;
    lightboxImage.classList.add("lightbox-image");

      // Append image to overlay
    overlay.appendChild(lightboxImage);
    document.body.appendChild(overlay);

      // Fade in overlay
    setTimeout(() => {
        overlay.style.opacity = "1";
    }, 10);

      // Close overlay when clicked outside the image
    overlay.addEventListener("click", e => {
        if (e.target !== lightboxImage) {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 300);
        }
    });
    });
});

});