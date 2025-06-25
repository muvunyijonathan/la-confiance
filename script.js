// script.js - Interactions JS pour La Confiance

document.addEventListener("DOMContentLoaded", () => {
  // Popup de bienvenue (s'affiche une seule fois)
  if (!localStorage.getItem("popupShown")) {
    const popup = document.createElement("div");
    popup.classList.add("popup-welcome");
    popup.innerHTML = `
      <div class="popup-content">
        <h2>Bienvenue chez La Confiance !</h2>
        <p>Nous sommes ravis de vous accueillir. Découvrez nos services en toute confiance.</p>
        <button id="close-popup">Fermer</button>
      </div>
    `;
    document.body.appendChild(popup);

    document.getElementById("close-popup").addEventListener("click", () => {
      popup.remove();
      localStorage.setItem("popupShown", "true");
    });
  }

  // Zoom sur les images de la galerie au clic
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${img.src}" alt="Zoomed Image">
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector(".close").addEventListener("click", () => {
        modal.remove();
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
    });
  });
});
