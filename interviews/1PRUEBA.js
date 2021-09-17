const wordToTry = 'BAOOLLNNOLOLGBAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

console.log('************')
console.time('original')
function solution(S) {
	// write your code in JavaScript (Node.js 8.9.4)

	// const strToArray = [...S.toLowerCase()].sort((a, b) => a - b)
	// console.log(strToArray)

	let word = 'BALLOON'
	let instances = 0

	if (S.length < 7) return 0
	for (char of S) {
		if (word.indexOf(char) != -1) {
			word = word.replace(char, '')
		}
		if (word === '') {
			instances++
			word = 'BALLOON'
		}
	}
	return instances
}

const result = solution(wordToTry)
console.log(result)
console.timeEnd('original')

console.log('******  optimization original ******')
console.time('solution 2')

function solution2(S = String) {
	let word = 'BALLOON'
	let instances = 0

	if (S.length < 7) return 0
	for (let i = 0; i < S.length; i++) {
		if (word.indexOf(S[i]) != -1) {
			word = word.replace(S[i], '')
		}
		if (word === '') {
			instances++
			word = 'BALLOON'
		}

		if (S.length - i === 6 && word.length === 7) break
	}
	return instances
}

const result2 = solution2(wordToTry)
console.log(result2)
console.timeEnd('solution 2')
