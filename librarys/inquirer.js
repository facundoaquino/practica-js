//paquete inquirer para leer iterativamente por consola
/*********************   OBTENER CON LIBRERIA INQUIRER LA OPCION POR LA CONSOLA ********************** */

const inquirer = require('inquirer')

const getOption = async () => {
	const { option } = await inquirer.prompt({
		name: 'option',
		message: 'Ingresa un numero para la lista',
	})

	return option
}

/******************************************* */
class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

// let node1 = new Node(9)
// let node2 = new Node(92)
// let node3 = new Node(32)

const buidList = async (list) => {
	let num
	num = await getOption()
	while (num != 0) {
		// console.log('elegiste el ', num)

		// AGREGAR ADELANTE DE LA LISTA , EL ULTIMO DE LA LISTA EN ENTRAR ES EL PRIMERO
		let node = new Node(num)
		node.next = list
		list = node

		num = await getOption()
	}

	return list
}
const mainProgram = async () => {
	let linkedListIntegers
	linkedListIntegers = null
	linkedListIntegers = await buidList(linkedListIntegers)
	console.log(linkedListIntegers)
}

mainProgram()
