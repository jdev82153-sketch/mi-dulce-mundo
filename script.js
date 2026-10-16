
const WHATSAPP = "34615692026";

function orderOnWhatsApp(packName) {
  const message =
    `¡Hola, Mi Dulce Mundo! Me gustaría recibir información sobre ${packName}. ¿Podrían indicarme qué incluye y qué disponibilidad tienen?`;

  const url =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-pack]").forEach((button) => {
  button.addEventListener("click", () => {
    orderOnWhatsApp(button.dataset.pack);
  });
});

document.getElementById("customOrder").addEventListener("click", () => {
  orderOnWhatsApp("las tartas personalizadas");
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();
