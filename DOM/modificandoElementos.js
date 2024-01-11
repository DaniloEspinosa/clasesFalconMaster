/*
    elemento.innerHTML
    Nos permite cambiar el contenido HTML de un elemento
*/
const primeraCaja = document.querySelector(".caja")
console.log(primeraCaja.innerHTML)
primeraCaja.innerHTML = "<b>Hola</b>!!"

/*
    elemento.attribute
    Nos permite acceder y cambiar atributos del elemento
    despues del elemento escribir un punto "." y el atributo que se quiere agregar o modificar (id, class, src, value, etc)
*/
primeraCaja.id = "nuevo-id"

/*
    elemento.setAttribute()
    Nos permite agregar o establecer el valor de un atributo del elemento.
*/
primeraCaja.setAttribute("class", "caja activa")
primeraCaja.setAttribute("data-id", "123-654-789") //Esta opción no funciona de la forma anterior

/*
    elemento.style.property
    Nos permite cambiar los estilos CSS de un elemento
*/

const contenedor2Caja1 = document.querySelector("#contenedor2 .caja")
console.log(contenedor2Caja1)

contenedor2Caja1.style.background = "#555"
contenedor2Caja1.style.color = "white"
contenedor2Caja1.style.textTransform = "uppercase"