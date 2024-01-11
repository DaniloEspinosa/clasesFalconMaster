/*
	📌 API para trabajar con fechas 
	Javascript expone su API para que podamos trabajar con fechas.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/*
	📌 Crear un objeto de fecha
	Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.
*/
// Fecha actual
const fechaActual = new Date();
// console.log(fechaActual);

const cumpleaños = new Date("1995-09-07T12:00:00");
// console.log(cumpleaños);

/*
	📌 Metodos para trabajar con fechas
*/
console.log(fechaActual.toString());
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());

// Obtener mes  --> El metodo a secas solo devuelve la posicion, por este motivo habria que sumarle 1
const numeroMes = (fechaActual.getMonth()) + 1;
console.log(numeroMes)
let mes = ''
switch (numeroMes) {
  case 1:
    mes = "Enero"
	break
  case 2:
    mes = "Febrero"
	break
  case 3:
    mes = "Marzo"
	break
  case 4:
    mes = "Abril"
	break
  case 5:
    mes = "Mayo"
	break
  case 6:
    mes = "Junio"
	break
  case 7:
    mes = "Julio"
	break
  case 8:
    mes = "Agosto"
	break
  case 9:
    mes = "Septiembre"
	break
  case 10:
    mes = "Octubre"
	break
  case 11:
    mes = "Noviembre"
	break
  case 12:
    mes = "Diciembre"
	break
}

console.log(mes);

// Obtener día
console.log(fechaActual.getDate());

// Obtener año
console.log(fechaActual.getFullYear());
