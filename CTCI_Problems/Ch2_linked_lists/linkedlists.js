// Chapter 2 Problems

// #2.1 Remove all duplicates from an unsorted linkedlist
// O(n) time 
function removeDups(list) {
    let hash = {};

    let current = list.head;
    let prev;
    while (current) {
        if (hash[current.value] === undefined) {
            hash[current.value] = 1;
            prev = current;
            current = current.next;
        } else {
            prev.next = current.next;
            prev = current.next;
            current = current.next.next;
        }
        
    }

}


// #2.2 
// assume singly linkedlist 
function kthNodeFromLast(list, k) {
    let hash = {};
    let i = 1;
    let curr = list.head;
    while (curr) {
        hash[i] = curr;
        i++;
        curr = curr.next;
    }

    return hash[i-k];

}

// two pointer solution from book


function kthNodeFromLast(list, k) {
    let curr = this.head;
    let last= this.head;
    for (let i=0; i< k; i++){
        last = last.next;
    }
    
    while (last) {
        last= last.next;
        curr = curr.next;   
    }
    return curr;
}

// #2.3
// only works for middle nodes
function deleteMidNode(node) {
    
    let current = node;
    let next = node.next;
    let newNext= next.next;

    current.value = next.value;
    current.next = newNext;
    
}


