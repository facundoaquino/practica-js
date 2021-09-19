//paquete inquirer para leer iterativamente por consola

const inquirer = require('inquirer')

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

let node1 = new Node(9)
let node2 = new Node(92)
let node3 = new Node(32)
console.log(node1.next)

const getOption = async () => {
	const { option } = await inquirer.prompt({
		name: 'option',
		message: 'Ingresa un numero para la lista',
	})

	return option
}

const buidList = async () => {
	let num
	while (num != 0) {
		// console.log('elegiste el ', num)
		num = await getOption()
	}
}

buidList()
