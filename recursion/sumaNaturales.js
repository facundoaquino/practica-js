const num = 4

console.time('recursion')
const sumRecursion = (num) => {
	if (num == 1) return 1
	if (num == 0) return 0

	return num + sumRecursion(num - 1)
}

console.log(sumRecursion(num))
console.timeEnd('recursion')

/*----------------------  ---------------------*/
// tarda mucho menos la solucion iterativa
console.time('iterative')
const iterativeSum = (num) => {
	let sum = 0

	while (num !== 0) {
		sum += num
		num--
	}

	return sum
}

console.log(iterativeSum(num))
console.timeEnd('iterative')
