/*---------------------- array2d , get the bigger sum of one ---------------------*/

const arr = [
	[1, 2, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 1],
	[1, 2, 3, 4, 5, 2],
	[1, 2, 3, 4, 5, 3],
	[1, 2, 3, 4, 5, 0],
	[1, 2, 3, 4, 5, 9],
	[1, 2, 3, 4, 1, 1],
]

let arrResult = 0

arr.forEach((ar) => {
	const result = ar.reduce((element, acc) => {
		return element + acc
	}, 0)

	if (result > arrResult) {
		arrResult = result
	}
})

console.log(arrResult)
