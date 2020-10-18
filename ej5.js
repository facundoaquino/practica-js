//devolver cantidad de caracteres con validaciones

const ContarCaracteres = (cadena) => {
	return typeof cadena === 'string'
		? console.log(`La longitud de la cadena es de ${cadena.length}`)
		: console.log('no ingresaste una cadena de texto valida');
};

ContarCaracteres();




