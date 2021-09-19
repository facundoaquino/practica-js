console.log('************')

function solution(A, B) {
	// write your code in JavaScript (Node.js 8.9.4)

	const rangeToArray = []
	let integersCondition = 0
	let inx = 1
	let result = 0

	for (let i = A; i <= B; i++) rangeToArray.push(i)

	while (result <= B) {
		result = inx * (inx + 1)
		if (rangeToArray.indexOf(result) !== -1) integersCondition++
		inx++
	}

	return integersCondition
}

const result = solution(5, 29)
console.log(result)

console.log('************')
/**
 * sucesion recursiva An = n * (n+1)
 * 2-6-12-20-30-42-56-72-90-110-132
 *  *
 */
function solution2(A, B) {
	//no necesitaba el arreglo compuesto por el rango desde el extremo inferior y superior
	let integersCondition = 0
	let result = 0

	while (result <= B) {
		result = inx * (inx + 1)
		if (A <= result && result <= B) integersCondition++
		inx++
	}

	return integersCondition
}

const result2 = solution(5, 29)
console.log(result2)

console.log('************')
/**
 * sucesion recursiva An = n * (n+1)
 * 2-6-12-20-30-42-56-72-90-110-132
 *  *
 */
function solution3(A, B) {
	let integersCondition = 0
	// me quedo con la parte entera de la raiz cuadrada y la multiplico por su entero consecutivo y pregunto si es igual al numero en cuestion
	for (let i = A; i <= B; i++) {
		let squareRootInteger = Math.floor(Math.sqrt(i))
		if (squareRootInteger * (squareRootInteger + 1) === i) integersCondition++
	}

	return integersCondition
}

const result3 = solution(6, 56)
console.log(result3)
