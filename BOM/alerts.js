// window.alert('hola usuario')

// alert('No hace falta el fucking window')

const ingresar = () => {
    const accesoPermitido = confirm('¿Eres mayor de edad?')
    if (accesoPermitido) {
        console.log('Bienvenido')
    } else {
        console.log('No puedes estar aqui, adios...')
    }
}


const saludo = () => {
    const nombre = prompt('Escribe tu nombre')
    console.log(`Hola ${nombre} y  bienvenido.`)
}