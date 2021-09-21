console.time('creating')
const random = (n) => {
	return Math.floor(Math.random() * 500)
}

let arr = new Array(10)

arr = arr.fill().map((_, i) => random(i))

arr = arr.filter((e, i) => arr.indexOf(e) === i)
console.timeEnd('creating')
console.log(arr)

//	ALGORITMO DE ORDENAMIENTO DE UN VECTOR/ARRAY POR SELECCCION big o(n2)
/**
 *dado un arreglo A y una dimensión lógica  , el algoritmo repite (dimLogica-1) veces buscar el elemento mínimo y ubicarlo en la posición correspondiente. 
Es decir, en la primera vuelta busca el mínimo desde la posición 1 hasta la dimensión lógica y ubica al mínimo en la primera posición. En la vuelta i busca el mínimo desde la posición i hasta la dimensión lógica y lo ubica en la posición i.
 */

const sortSeleccion = (ar = []) => {
	const copyArr = [...ar]

	for (let i = 0; i < copyArr.length - 1; i++) {
		let lower = i
		for (let j = i + 1; j < copyArr.length; j++) {
			if (copyArr[j] < copyArr[lower]) {
				lower = j
			}
		}
		let aux = copyArr[lower]
		copyArr[lower] = copyArr[i]
		copyArr[i] = aux
	}
	return copyArr
}

const result = sortSeleccion(arr)
console.log(result)
