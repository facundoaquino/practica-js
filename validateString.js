// validar si el string de tipo formula ([{}]) es valido , cada cadena tiene que cerrar con su correspondiente ) ] }

const validateString = (string) => {
	const casesList = []
	const pairsList = {
		'{': '}',
		'(': ')',
		'[': ']',
	}

	const stringToArray = string.split('')
	console.log(stringToArray)
	for (key of stringToArray) {
		if (key == '(' || key == '{' || key == '[') {
			casesList.push(key)
		} else {
			if (!(pairsList[casesList.pop()] == key)) {
				return false
			}
		}
	}
	return !casesList.length
}

const result = validateString('[[]{(}]')
console.log(result)
