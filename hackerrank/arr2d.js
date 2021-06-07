//patron de busqueda que suma sus elementos , retornar la suma maxima basada en ese patron
// a b c
//   d
// e f g

const arr2d_test = [
	[-1, -1, 0, -9, -2, -2],
	[-2, -1, -6, -8, -2, -5],
	[-1, -1, -1, -2, -3, -4],
	[-1, -9, -2, -4, -4, -5],
	[-7, -3, -3, -2, -9, -9],
	[-1, -3, -1, -2, -4, -5],
]
const arr2d = [
	[1, 2, 3, 5, 3, 4],
	[1, 8, 3, 5, 0, 5],
	[1, 4, 3, 5, 3, 3],
	[1, 2, 3, 7, 0, 0],
	[1, 2, 3, 5, 2, 0],
	[1, 2, 1, 5, 11, 3],
]

const maxSum = (arr) => {
	let sum = -Infinity
	//el -infitive para que compare con algo muy chiquito si empiza en 0 0 es mas grande que cualquier suma de negativos , tambien podria
	//preguntar en el 2do for si la suma es menor a 0 y la sum es 0 setearla
	for (let i = 0; i < arr.length - 2; i++) {
		for (let k = 0; k < arr.length - 2; k++) {
			sum = Math.max(
				sum,
				arr[i][k] +
					arr[i][k + 1] +
					arr[i][k + 2] +
					arr[i + 1][k + 1] +
					arr[i + 2][k] +
					arr[i + 2][k + 1] +
					arr[i + 2][k + 2]
			)
		}
	}

	return sum
}

const result = maxSum(arr2d_test)
console.log(result)
