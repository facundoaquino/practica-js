//LISTA A PARTIR DE UN ARRAY AGREGANDO AL FINAL DE LA LISTA , OSEA MANTENIENDO EL ORDEN

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

//declaramos la lista
class LinkedList {
	constructor() {
		this.head = null
	}

	//agrega al final , osea que mantiene el orden
	add(data) {
		const newNode = new Node(data)
		if (!this.head) {
			this.head = newNode
		} else {
			let current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = newNode
		}
	}

	// agrega al principio de la lista
	addBegin(data) {
		const newNode = new Node(data)
		newNode.next = this.head
		this.head = newNode
	}

	//metodo para imprimir la list

	printList() {
		let aux = this.head
		while (aux) {
			console.log(aux.data)
			aux = aux.next
		}
	}
}

// creamos lista
let myList = new LinkedList()

// Array
const arr = [1, 23, 5, 10, 3, 43, 332, 4, 55]

// agregamos al final con el metodo add de myList
arr.forEach((num) => myList.add(num))

// funcion que recibe lista la recorre e imprime , recordar que en js los parametros van por valor no por referencia entonces mantenemos nuestro puntero original apuntando al head de la lista

const showList = (list) => {
	// console.log(list)
	while (list) {
		console.log(list.data)
		list = list.next
	}
}

// showList(myList.head)

/*----------------------  ---------------------*/

const myList2 = new LinkedList()

arr.forEach((num) => myList2.addBegin(num))
// showList(myList2.head)

myList.printList()
myList2.printList()
