// Mensaje al cargar
window.addEventListener("load", () => {
  console.log("Página cargada 🚀");
});

// Animación al hacer clic en los videos
document.querySelectorAll("iframe").forEach(video => {
  video.addEventListener("click", () => {
    video.style.transform = "scale(1.05)";
    video.style.transition = "0.3s";

    setTimeout(() => {
      video.style.transform = "scale(1)";
    }, 300);
  });
});

// Efecto hover dinámico (extra)
document.querySelectorAll("section").forEach(section => {
  section.addEventListener("mouseenter", () => {
    section.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
  });

  section.addEventListener("mouseleave", () => {
    section.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  });
});