// Con esta forma no hace falta poner un nombre a la funcion ya que s elo daremos al iportarlo
// Export default solo sirve para exportar un solo elemento del archivo

// export default () => {
//     return {
//     nombre: 'Juan',
//     apellido: 'Perez'
//     }
// }

// Otra manera de export default, se le asigna una funcion a una variable, de igual manera el nombre
// final se lo dara al importar la funcion
const obtenerUsuario = () => {
    return {
        nombre: 'Carlos',
        apellido: 'Romero'
    }
}

export default obtenerUsuario