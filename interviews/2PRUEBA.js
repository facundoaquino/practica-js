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

	console.log(rangeToArray)

	return integersCondition
}

const result = solution(21, 29)
console.log(result)
