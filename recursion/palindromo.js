console.time('recursion')
const palindromoRecursion = (str) => {
	if (str.length == 0 || str.length == 1) {
		return true
	}

	if (str.charAt(0) == str.charAt(str.length - 1)) {
		return palindromoRecursion(str.substring(1, str.length - 1))
	}

	return false
}

console.log(palindromoRecursion('menem'))
console.timeEnd('recursion')

/*----------------------  ---------------------*/

console.time('iterative')

const palindromo = (str) => {
	const toArr = str.split('')
    toArr.reverse()
    if( str == toArr.join('')){
        return true
    }

    return false

}
console.log(palindromo('menem'))

console.timeEnd('iterative')
