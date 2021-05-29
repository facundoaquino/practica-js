// funcion que recibe 2 parametros , string ,  devulve true/false , si la segunda es un anagrama de la primera

const isAnagram = (str, anagram) => {
	str = str.trim().split('')
	anagram = anagram.trim().split('')
	if (str.length != anagram.length) {
		return false
	}

	for (char of anagram) {
		const charIndex = str.findIndex((c) => c === char)
		if (charIndex === -1) {
			return false
		}

		str.splice(charIndex, 1)
	}
	return str.length >= 0
}

const result = isAnagram('limon', 'monil')
console.log(result)
