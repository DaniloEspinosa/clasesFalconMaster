/*
    getElementById
    Nos permite obtener un elemento en base a su atributo id
*/

// const contenedor1 = document.getElementById("contenedor1");
// console.log(contenedor1);

/*
    children
    Nos permite obtener los elementos hijo
*/
// console.log(contenedor1.children);

/*
    parentElement
    Nos permite obtener el elemento padre de un elemento
*/
// console.log(contenedor1.parentElement);

/*
    getElementsByTagName
    Nos permite obtener una colección de elementos en base a la etiqueta.
    Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/

// const divs = document.getElementsByTagName("div");
// console.log(divs);
// console.log(`Tenemos ${divs.length} divs en la página.`);

/*
    getElementsByClassName
    Nos permite obtener una colección de elementos en base a su clase CSS.
    Nota: Devuelve una colección HTML.
*/

// const contenedores = document.getElementsByClassName("contenedor");
// console.log(contenedores);

/*
    querySelector
    Nos devuelve el primer elemento que coincida con un selector estilo CSS.
    Nota: Devuelve una nodelist.
*/

// const caja = document.querySelector("#contenedor1 .caja")
// console.log(caja)

/*
    querySelectorAll
    Nos permite obtener una colección de elementos que coincidan con un selector estilo CSS.
    Nota: Devuelve una nodelist.
*/

// const cajas = document.querySelectorAll("#contenedor1 .caja")
// console.log(cajas)

// cajas.forEach((caja) => {
//     console.log(caja)
// })

/*
    closest
    Nos permite buscar de adento hacia afuera en busca de un elemento
*/

// const ultimaCaja1 = document.querySelector(".caja:last-child");
// console.log(ultimaCaja1);

// const ultimaCaja2 = document.querySelector("#contenedor2 .caja:last-child");
// console.log(ultimaCaja2);
// console.log(ultimaCaja2.closest(".contenedor-principal"));

/*
    Podemos encadenar todos los métodos para obtener elementos.
*/

const contenedor2 = document.getElementById("contenedor2")
console.log(contenedor2.querySelector(".caja"))
console.log(contenedor2.querySelectorAll(".caja"))