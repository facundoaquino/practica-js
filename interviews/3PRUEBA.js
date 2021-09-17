console.log('************')
function solution(S, T) {
	// write your code in JavaScript (Node.js 8.9.4)

	if (S === T) return 'NOTHING'

	if (T.length > S.length) {
		for (char of T) {
			if (`${S}${char}` === T) return `ADD ${char}`
		}
	} else if (T.length < S.length) {
		for (char of T) {
			let word = T
			word = T.replace(char, `${char}${char}`)
			if (word === S) return `JOIN ${char}`
		}
	} else {
		for (let i = 0; i < S.length - 1; i++) {
			let current = S[i]
			for (let j = i + 1; j < S.length; j++) {
				let strToArray = [...S]
				strToArray[i] = strToArray[j]
				strToArray[j] = current
				if (strToArray.join('') === T) return `SWAP ${S[i]} ${S[j]}`
			}
		}
	}

	return 'IMPOSSIBLE'
}

const result = solution('late', 'tale')
console.log(result)
