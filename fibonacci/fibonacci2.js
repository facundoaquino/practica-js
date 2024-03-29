const termToGet = 4

console.time('fibonacci recursivo')

function getTermOfFibonacci(n) {
	// console.log(n)
	if (n == 1) return 1
	if (n == 0) return 0

	return getTermOfFibonacci(n - 1) + getTermOfFibonacci(n - 2)
}

const result = getTermOfFibonacci(termToGet)
console.timeEnd('fibonacci recursivo')
console.log(result)

console.time('fibonacci iterativo')
const getFibonnacciPosition = (pos) => {
	if (pos === 1) return 0
	else if (pos === 2) return 1
	const start = [0, 1]
	let actual
	const iterations = pos - 2

	//siempre mantengo los ultimos 2 para sacar el siguiente
	for (let i = 1; i <= iterations; i++) {
		actual = start[0] + start[1]
		start[0] = start[1]
		start[1] = actual
	}
	return actual
}

const result2 = getFibonnacciPosition(termToGet + 1)
console.timeEnd('fibonacci iterativo')
console.log(result2)
