// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        let tail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail= null;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.length--;
        return tail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let prevHead = this.head;
            this.head= newNode;
            this.head.next = prevHead;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;
        let oldhead = this.head;
        if (this.length == 1) {
            this.head =null;
            this.tail= null;
        } else {
            this.head = oldhead.next;
        }
        this.length--;
        return oldhead;
    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
