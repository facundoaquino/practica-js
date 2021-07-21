const decToBin = (num) => {
	if (num === '0') {
		return ''
	}
	// console.log(num % 2)

	const rest = Math.floor(num / 2).toString()
	// console.log(rest);

	return decToBin(rest) + (num % 2)
}

console.log(decToBin(128))
