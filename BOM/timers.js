// const saludo = () => {
//   console.log("Hola carnero");
// };

// let id
// const iniciar = () => {
//   console.log("iniciando timer");
//   id = setTimeout(saludo, 3000);
// };

// const parar = () => {
//   console.log("Parando timer");
//   clearTimeout(id)
// };

let cuenta = 0;
let id

const iniciar = () => {
  id = setInterval(() => {
    console.log(cuenta);
    cuenta++;
  }, 1000);
};

const parar = () => {
  console.log("Parando timer");
  clearInterval(id)
};