class Node {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

class Bst {
	constructor(data) {
		this.root = new Node(data)
	}

	insert(data) {
		let newNode = new Node(data)
		const searchNode = (node) => {
			if (data < node.data) {
				if (!node.left) {
					node.left = newNode
				} else {
					searchNode(node.left)
				}
			} else {
				if (!node.right) {
					node.right = newNode
				} else {
					searchNode(node.right)
				}
			}
		}

		searchNode(this.root)
	}

	showInorder(root) {
		if (root !== null) {
			this.showInorder(root.left)
			console.log(root.data)
			this.showInorder(root.right)
		}
	}
}

const dataList = [22, 3, 666, 34, 34134, 6, 98, 4, 32]

const myBst = new Bst(88)
dataList.forEach((number) => {
	myBst.insert(number)
})

myBst.showInorder(myBst.root)
