//dos elementos de un array que hagan x suma

console.time('two for')
const requiredSum = (arr = [], sum = 0) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === sum) {
				return true
			}
		}
	}
	return false
}

console.log(requiredSum([1, 2, 4, 9, -1, 6], 8))
console.timeEnd('two for')

// ////////////////////

console.time('index')
const requiredSum2 = (arr = [], sum = 0) => {
	for (let i = 0; i < arr.length; i++) {
		const num = sum - arr[i]
		const indx = arr.indexOf(num, i)
		if (indx !== -1 && indx !== i) {
			return true
		}
	}
	return false
}

console.log(requiredSum2([1, 2, 4, 9, -1, 6], 8))
console.timeEnd('index')
