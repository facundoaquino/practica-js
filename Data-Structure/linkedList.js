//LISTA A PARTIR DE UN ARRAY AGREGANDO AL FINAL DE LA LISTA , OSEA MANTENIENDO EL ORDEN

export class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

//declaramos la lista
export class LinkedList {
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
			while (current.next != null) {
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

const showList = (listHead) => {
	// console.log(listHead)
	while (listHead) {
		console.log(listHead.data)
		listHead = listHead.next
	}
}

// showList(myList.head)

/*----------------------  ---------------------*/

const myList2 = new LinkedList()

arr.forEach((num) => myList2.addBegin(num))
showList(myList2.head)
showList(myList2.head)

// myList.printList()
// myList2.printList()
