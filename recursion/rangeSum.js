

/*
range sum with recursivity
example
sumRange([2, 5]) => 14

2+3+4+5 => 14


*/
const sumRange = (arrRange, minimun = 0, acumulator = 0) => {
	const min = Math.min(...arrRange)
	const max = Math.max(...arrRange)
	minimun = minimun || min
	if (minimun <= max) {
		acumulator = acumulator + minimun
		minimun = minimun + 1

		return sumRange(arrRange, minimun, acumulator)
	}

	return acumulator
}

const result = sumRange([2, 5])

console.log(result)
