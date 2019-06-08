function listHasCycle (head) {
    if (!head || !head.next) return false;
    let p1 = head;
    let p2 = head.next;

    while (p1 !== p2){
        if (!p2 || !p2.next) return false;
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return true;
}

// other method is to use a Set but would not be constant space.