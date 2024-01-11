document.getElementById('boton1').addEventListener('click', () => {
	const nombre = prompt('Escribe tu nombre');
	window.localStorage.setItem('usuario', nombre);
});

// console.log(window.localStorage.usuario)

document.getElementById('boton2').addEventListener('click', () => {
	window.localStorage.removeItem('usuario');
});

 if (window.localStorage.usuario) {
	console.log('Hola ', window.localStorage.usuario);
} else {
	console.log('Hola usuario anónimo');
}
