console.log(`La ventana de tu navegador es ${window.innerWidth}px de ancho`)
console.log(`La ventana de tu navegador es ${window.innerHeight}px de ancho`)

let ventana;
const abrirVentana = () => {
    ventana = window.open('https://google.com', 'New ventana', 'width=500, height=500' )
    ventana.document.write('<h1>Hola, escribiendo en la nueva ventana!!</h1>')
}

const cerrarVentana = () => {
    ventana.close()
}

console.log('Ancho de pantalla: ', window.screen.width)
console.log('Alto de pantalla: ', window.screen.height)

console.log('Ancho de pantalla: ', window.screen.availWidth)
console.log('Alto de pantalla: ', window.screen.availHeight)