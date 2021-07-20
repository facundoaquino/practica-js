//reversal string whit recursion

console.time('reverse recursion')

const reverseString = (str, result = '') => {
	const splited = str.split('')
	if (splited.length == 0) {
		return result
	}

	result = result + splited.pop()

	return reverseString(splited.join(''), result)
}

console.log(reverseString('hola como estas'))
console.timeEnd('reverse recursion')

/* ES MAS EFECTIVO CON LOS METODOS ? */

console.time('reverse whit methos')
const str = 'hola como estas'
const toArr = str.split('')
const result = toArr.reverse().join('')
console.log(result)
console.timeEnd('reverse whit methos')
