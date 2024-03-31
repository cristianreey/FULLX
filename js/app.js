// Event delegation
document.addEventListener("dragstart", function (evt) {
  if (evt.target.tagName == "IMG" || evt.target.tagName == "A") {
    evt.preventDefault();
  }
});

//Slider de productos
const slider = [...document.querySelectorAll(".slider-inner")];

// Slider 1
let sliderGrabbed1 = false;

// Obtenemos referencias a los botones de siguiente y anterior
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
// Evento click en el botón de siguiente
nextButton.addEventListener("click", (_e) => {
  const slider = document.querySelector(".slider-inner");
  const sliderItemWidth = slider.querySelector(".item").offsetWidth; // Obtener el ancho de un elemento individual del carrusel
  slider.parentElement.scrollBy({ left: sliderItemWidth, behavior: "smooth" }); // Desplazar el carrusel por el ancho de un elemento individual
});

// Evento click en el botón de anterior
prevButton.addEventListener("click", (_e) => {
  const slider = document.querySelector(".slider-inner");
  const sliderItemWidth = slider.querySelector(".item").offsetWidth; // Obtener el ancho de un elemento individual del carrusel
  slider.parentElement.scrollBy({ left: -sliderItemWidth, behavior: "smooth" }); // Desplazar el carrusel hacia atrás por el ancho de un elemento individual
});
