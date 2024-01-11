const agregarCaja = () => {
    // Primer paso: Crear un elemento con createElement
    const nuevaCaja = document.createElement("div")
    // Segundo paso: Agregar texto y atributos
    nuevaCaja.innerText = "Nueva caja"
    // nuevaCaja.setAttribute("id", "nuevo-id") 
    nuevaCaja.setAttribute("class", "caja activa")
    // Tercer paso: Agregar el elemento al DOM
    const contenedor = document.getElementById("contenedor1")
    //contenedor.appendChild(nuevaCaja) // Con esto se agrega una caja al final del contenedor
    /*
    .insertAdjacentElement() Nos permite crear un elemento
    valores:
        afterbegin - como primer elemento
        beforebegin - antes del elemento padre (fuera del contenedor)
        beforeend - como ultimo elemento
        afterend - despues del elemento padre (fuera del contenedor)
    */
    //contenedor.insertAdjacentElement("beforebegin", nuevaCaja)

    // .replaceWith() Nos permite remplazar el elemento por otro
    document.querySelector("#contenedor1 .caja").replaceWith(nuevaCaja)
}