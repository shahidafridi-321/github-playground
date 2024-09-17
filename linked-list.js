class LinkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		currentNode = newNode;
	}
	find(value) {
		if (!this.head) {
			return false;
		}
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.next;
		}
		return false;
	}
}

class Node {
	constructor(value = null) {
		this.value = value;
		this.next = null;
	}
}
