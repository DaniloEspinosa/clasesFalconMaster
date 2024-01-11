const contenedor = document.getElementById("contenedor1");

contenedor.addEventListener("click", (e) => {
  console.log(`Has hecho click en el contenedor`);
});

const primeraCaja = document.querySelector(".caja");
primeraCaja.addEventListener("click", (e) => {
  e.stopPropagation(); // Se utiliza para saltar el evento en el elemento padre
  console.log("Has hecho click en la caja");
});
