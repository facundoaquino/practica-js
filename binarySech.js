const binarySearch = (arr, num) => {
	let min = 0
	let max = arr.length - 1
	let mid

	while (min <= max) {
		mid = Math.floor((min + max) / 2)

		if (arr[mid] === num) {
			return true
		}
		if (arr[mid] > num) {
			max = mid - 1
		} else {
			min = mid + 1
		}
	}
	return false
}

const searchWithFor = (arr, num) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return true
		}
	}
	return false
}

const arrAuto = Array(1000000)
const fillArray = arrAuto.fill().map((_, i) => i)

console.time('binary search')
const result = binarySearch(fillArray, 950000)
console.timeEnd('binary search')

console.time('search for')
const resul2 = searchWithFor(fillArray, 100000)
console.timeEnd('search for')
