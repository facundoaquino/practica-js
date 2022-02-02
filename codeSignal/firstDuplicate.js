/**
 * Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.
*/

const arr = [2, 2, 3, 1, 3, 5, 3, 2]

function solution(a) {
	const obj = a.reduce((acc, el) => {
		acc[el] ? (acc[el] = acc[el] + 1) : (acc[el] = 1)
		return acc
	}, {})
	// console.log(obj)

	const objToArr = Object.entries(obj)
		.filter((a) => a[1] >= 2)
		.map((el) => Number(el[0]))
	// console.log(objToArr)

	if (objToArr.length === 1) return objToArr[0]

	if (objToArr.length === 0) return -1

	const lowerIndexes = objToArr
		.map((num) => a.indexOf(num, a.indexOf(num) + 1))
		.sort((a, b) => a - b)
	return a[lowerIndexes[0]]
	// const indexes = objToArr.map((n) => a.lastIndexOf(n)).sort((a, b) => a - b)
	// console.log(a[indexes[0]])
	// return a[indexes[0]]
}

solution(arr)
