/**
 * 
 * Dada matrixuna matriz rectangular de números enteros, donde cada valor representa el costo de la habitación, su tarea es devolver la suma total de todas las habitaciones que son adecuadas para los CodeBots (es decir, sumar todos los valores que no aparecen debajo de un 0).
 * 
 * Hay varias habitaciones encantadas, por lo que las ignoraremos, así como las habitaciones debajo de ellas. Por tanto, la respuesta es 1 + 5 + 1 + 2 = 9.

Para

matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
la salida debería ser
matrixElementsSum(matrix) = 9

Tenga en cuenta que el espacio libre en la columna final hace que la columna completa no sea adecuada para los bots (no solo el espacio directamente debajo).
 * 
 */

function matrixElementsSum(matrix) {
	let acc = 0
	//guardo las columnas inabilitadas y pregunto para sumar o no en el acc
	const aux = {}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 0) {
				aux[j] = 1
			} else {
				if (!aux[j]) {
					acc = acc + matrix[i][j]
				}
			}
		}
	}

	return acc
}

const arr = [
	[0, 1, 1, 2],
	[0, 5, 0, 0],
	[2, 0, 3, 3],
]

const result = matrixElementsSum(arr)
console.log(result)
