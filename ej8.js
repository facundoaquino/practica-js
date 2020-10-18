//funcion para contar la cantidad de veces que se repite una palabra dentro de una cadena , ingresando cadena y la palabra que se quiere mostrar en repeticion

const cuentaPalabraRepetida = (cadena, palabra) => {
	const palabraToArray = cadena.split(' ');
	const cantidadDeVeces = palabraToArray.reduce((acumulador, elemento) => {
		elemento == palabra ? acumulador++ : elemento;
		// console.log(elemento, palabra);
		return acumulador;
	}, 0);
	console.log(`La palabra "${palabra}" se repite  ${cantidadDeVeces} veces`);
};

cuentaPalabraRepetida('esta no es es no es', 'es');

// const cuentaPalabraRepetida = (cadena, palabra) => {
//     const palabraToArray = cadena.split(' ');
//     const cantidadDeVeces = palabraToArray.reduce((acumulador, elemento) => {
//         acumulador[elemento] ? acumulador[elemento]++ : (acumulador[elemento] = 1);
//         return acumulador;
//     }, {});
//     console.log(cantidadDeVeces);
// };
