// hacer el factorial del numero sin contemplar validacion de negatigo ni el  0 , con funcion recursiva

// const factorial = (num) => {
// 	if (num == 1) return 1
// 	return num * factorial(num - 1)
// }

// const result = factorial(5)
// console.log(result)

const memoizeUtil = (func) => {
	// almacenamiento de resultados
	const cache = {}
	return (entrada) => {
		// devolver el valor si existe en el objeto de caché
		// de lo contrario, calcular la entrada con la función pasada y
		// actualizar el objeto de colección con la entrada como clave y
		// el resultado calculado como el valor de esa clave
		// El resultado final serán los pares clave-valor almacenados dentro de la caché

		return cache[entrada] || (cache[entrada] = func(entrada))
	}
}
