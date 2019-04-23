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
        let current = this.head;
        while (current) {
            if (current.value === target) return true;
            current=current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length) return null;
        let curr = this.head;
        while (index > 0 ) {
            curr = curr.next;
            index--;
        }
        return curr;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if (node ) {
            node.value = val;
            return true;

        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1) return false;

        let newNode = new Node(val);
        let curr = this.head;
        while (index > 1) {
            curr = curr.next;
            index--;
        }
        let next = curr.next;
        curr.next = newNode;
        newNode.next = next;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length) return undefined;
        let curr = this.head;
        while (index > 1) {
            curr = curr.next;
            index--;
        }
        let removed = curr.next;
        curr.next = removed.next;
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
