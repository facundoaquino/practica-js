/**
 * 
 * Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
 * 
 * 
 * 
 */

const canBePalindrome = (str = '') => {
	const splited = str.split('')
	 
	// hago tabla hash para cada caracter cuento cuanto se repiten
	const reduced = splited.reduce((acc, el) => {
		acc[el] ? (acc[el] = acc[el] + 1) : (acc[el] = 1)
		return acc
	}, {})
	// en keys guardo los valores de cuantas veces se repiten los caracteres

	const keys = Object.values(reduced)
	// a lo sumo en un palindromo puede haber 1 que quede suelto
	const filtered = keys.filter((el) => el % 2 != 0)

	return filtered.length <= 1
}

console.log(canBePalindrome('aaafa'))
