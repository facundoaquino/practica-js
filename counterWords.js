// mostar cuantas veces se repiten las palabras
console.time('Tabla Hash')
const text =
	'Los restos del Long March 5B aterrizaron finalmente en el océano Índico, cerca de las Maldivas, según informó la agencia espacial china. El Mando Espacial de Estados Unidos había estado siguiendo los restos del cohete, un cilindro de unas 22,5 toneladas pero los modelos mostraban que la chatarra espacial podía aterrizar en cualquier lugar desde América del Norte hasta África.'

const wordsRepeted = (text) => {
	const textToArray = text.split(' ')
	const list = {}
	for (const word of textToArray) {
		// list[word] ? list[word]++ : (list[word] = 1)

		//NaN evalua como valor falsy si se implenta undefined + 1 es igual a Nan y inicializa en 1
		list[word] = ++list[word] || 1
	}
	console.log(list)
}

wordsRepeted(text)
console.timeEnd('Tabla Hash')
