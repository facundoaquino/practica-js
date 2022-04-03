/*---------------------- LISTA ENLAZADA CON METODO DE AGREGA AL FINAL MANTENIENDO ORDEN CON REFERENCIA AL ULTIMO ---------------------*/

class Node {
	constructor(d) {
		this.data = d
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.last = null
	}

	// metodo que agrega al final manteniendo el orden
	addFinal(d) {
		const entry = new Node(d)
		if (this.head == null) {
			this.head = entry
			this.last = this.head
		} else {
			this.last.next = entry
		}
		this.last = entry
		// entry.next = this.last

		// console.log(this.head)
	}

	show() {
		let copy = this.head
		while (copy) {
			console.log(copy.data)
			copy = copy.next
		}
	}
}

const myList = new LinkedList()
const arr = [15, 23, 5, 10, 3, 43, 332, 4, 55]
arr.forEach((n) => myList.addFinal(n))
myList.show()
