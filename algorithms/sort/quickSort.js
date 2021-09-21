console.time('creating')
const random = (n) => {
	return Math.floor(Math.random() * 100000)
}

let arr = new Array(10)

arr = arr.fill().map((_, i) => random(i))

arr = arr.filter((e, i) => arr.indexOf(e) === i)
console.timeEnd('creating')

// console.log(arr)

console.time('quick sort')
const quickSort = (arr = []) => {
	if (arr.length == 0) {
		return []
	}

	const left = []
	const right = []
	const pivot = arr[0]

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}

	return [].concat(quickSort(left), pivot, quickSort(right))
}

// console.log(arr)
console.log(quickSort(arr))
console.timeEnd('quick sort')

/*----------------------  ---------------------*/
console.time('sorting')
const sorting = (arr) => {
	const copy = [...arr]

	return copy.sort((a, b) => a - b)
}

console.log(sorting(arr))
console.timeEnd('sorting')
