//declaaamos el nodo

class Node {
	constructor(data, next) {
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
		const newNode = new Node(data, null)
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
}

const myList = new LinkedList()
console.log(myList)
