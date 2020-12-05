// dado dos array ordenados devolver 1 solo array ordenado , sin duplicados

const combinedArray = (arr1, arr2) => {
	const result = [...arr1, ...arr2]

	return result.sort((a, n) => a - n).filter((el, inx, arr) => arr.indexOf(el) === inx)
}

console.log(combinedArray([2, 3, 4, 1], [10, 3, 4]))
