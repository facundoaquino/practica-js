// Given a pointer to the head of a linked list, insert a new node before the head. The  value in the new node should point to  and the  value should be replaced with a given value. Return a reference to the new head of the list. The head pointer given may be null meaning that the initial list is empty.

// Function Description

// Complete the function insertNodeAtHead in the editor below.

// insertNodeAtHead has the following parameter(s):

// SinglyLinkedListNode llist: a reference to the head of a list
// data: the value to insert in the  field of the new node

function insertNodeAtHead(head, data) {
	const newNode = new SinglyLinkedListNode(data)

	if (head === null) {
		head = newNode
	} else {
		newNode.next = head
		head = newNode
	}

	return head
}
