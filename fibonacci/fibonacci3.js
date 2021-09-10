//construir n terminos de la secuencia de fibonacci

//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377....

console.time('fibo interative')
const getFibonacciUntil = (terms) => {
	if (terms === 1) return [0]
	if (terms === 2) return [0, 1]

	const start = [0, 1]

	for (let i = 0; i < terms - 2; i++) {
		const num = start[i] + start[i + 1]
		start.push(num)
	}

	return start
}

const result = getFibonacciUntil(6)
console.log(result)

console.timeEnd('fibo interative')
