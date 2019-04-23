// Chapter 2 Problems

// #2.1 Remove all duplicates from an unosrted linkedlist
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

