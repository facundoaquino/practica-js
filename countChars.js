const countChars = (str = '') => {
	// for (let i = 0; i < str.length; i++) {
	// 	console.log(str[i])
	// }
	str = str.toLowerCase().replace(/ /g, '')
	console.log(str)
	const counter = {}
	for (char of str) {
		// console.log(char.charCodeAt())
		counter[char] ? counter[char]++ : (counter[char] = 1)
	}
	console.log(counter)
}

const str = 'Por aca viene la cosa'
countChars(str)
