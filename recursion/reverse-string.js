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

/*----------------------  ---------------------*/
console.time('reverse recursion 2')
const reverseString2 = (str) => {
	if (str == '') {
		return ''
	}

	return reverseString2(str.substring(1)) + str.charAt(0)
}

console.log(reverseString2('hola como estas'))
console.timeEnd('reverse recursion 2')

/*----------------------  ---------------------*/

/* ES MAS EFECTIVO CON LOS METODOS ? */

console.time('reverse whit methos')
const str = 'hola como estas'
const toArr = str.split('')
const result = toArr.reverse().join('')
console.log(result)
console.timeEnd('reverse whit methos')
