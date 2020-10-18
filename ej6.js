//funcion de tome cadena y cantidad de caracteres a recortar y devuelve la cadena recortada

const ContarCaracteres = (cadena, caracteres) => {
	return typeof cadena === 'string' && caracteres > 0
		? console.log(`Cadena recortada: ${cadena.slice(0, caracteres)}`)
		: console.log('no ingresaste una cadena de texto valida o no ingresaste caracteres mayor a 0');
};

ContarCaracteres('hola mundo', 01);
