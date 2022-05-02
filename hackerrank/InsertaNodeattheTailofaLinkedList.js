function insertNodeAtTail(head, data) {
	const newNode = new SinglyLinkedListNode(data)
	if (head === null) {
		head = newNode
	} else {
		let auxHead = head
		while (auxHead.next != null) {
			auxHead = auxHead.next
		}
		auxHead.next = newNode
	}
	return head
}
