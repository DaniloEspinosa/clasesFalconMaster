/*
    Bubbling (false, por defecto)
    En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.

    Capturing (true)
    En capturin el elemento padre reacciona primero y desopues el elemento hijo.

    Es un parametro que se debe poner en el contenedor al final de toda la función.
*/


const contenedor = document.getElementById("contenedor1");

contenedor.addEventListener("click", (e) => {
  console.log(`Has hecho click en el contenedor`);
});

const primeraCaja = document.querySelector(".caja");
primeraCaja.addEventListener("click", (e) => {
  
  console.log("Has hecho click en la caja");
});