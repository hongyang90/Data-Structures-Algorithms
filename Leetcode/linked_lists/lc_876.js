function middleOfList (head) {
    if (!head || !head.next) return head;
    let p1 = head;
    let p2 = head;

    while (p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1;
}