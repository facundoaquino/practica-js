const arrAuto = Array(10)
const fillArray = arrAuto.fill().map((_, i) => i)
console.log(fillArray)

const binarySearchRecursive = (arr = [], num) => {
	let min = 0
	let max = arr.length - 1
	let mid = Math.floor((min + max) / 2)

	if (min > max) return false
	if (arr[mid] === num) return true
	if (arr[mid] > num) {
		max = mid - 1
	} else {
		min = mid + 1
	}
	console.log(arr.slice(min, max + 1))
	return binarySearchRecursive(arr.slice(min, max + 1), num)
}

const result = binarySearchRecursive(fillArray, 0)
console.log(result)
