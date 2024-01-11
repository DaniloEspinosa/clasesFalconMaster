const formulario = document.getElementById('formulario-donacion')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.]+/
    
    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked
    }

    // Comprobamos correo
    if (!expresionRegular.test(datos.correo)) {
        console.log('correo invalido')
        return
    }
/*
    // Comprobamos pais
    if (datos.pais === '') {
        console.log('País invalido')
        return
    }

    // Comprobamos donación
    if (datos.donacion === '') {
        console.log('Selecciona una cantidad a donar')
        return
    }

    // Comprobamos fecha
    if (datos.fecha === '') {
        console.log('Selecciona una fecha')
        return
    }

    // Comprobamos términos
    if (!datos.terminos) {
        console.log('Acepta los términos y condiciones')
        return
    }
*/

    console.log(datos)
    console.log('Enviando datos')
})