//devuelve un abjeto con los array , de pares:[...] e imapares[...]

const array = [1, 2, 3, 4, 5, 65, 3, 34, 76, 3];

const paresImpares = (arr) => {
	const objPI = { pares: [], impares: [] };
	arr.forEach((element) => {
		if (element % 2 == 0) {
			objPI.pares = [...objPI.pares, element];
		} else {
			objPI.impares = [...objPI.impares, element];
		}
    });
    return objPI
};

const resultado = paresImpares(array);
console.log(resultado);
