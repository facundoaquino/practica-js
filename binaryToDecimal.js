const toBinary = (dec) => {
	if (dec === 1) {
		return 1
	}
	if (dec === 0) {
		return 0
	}

	let toDecimal = []

	//si num es 0 corta
	while (dec) {
		toDecimal.unshift(dec % 2)
		dec = Math.trunc(dec / 2)
	}
	// console.log(toDecimal)
	return Number(toDecimal.join(''))
}
let decimal = 35
const response = toBinary(decimal)
console.log(response)
console.log(decimal)
