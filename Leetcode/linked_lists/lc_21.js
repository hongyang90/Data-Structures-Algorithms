function mergeTwoSortedLists( l1, l2){
    if (l1 && !l2) return l1;
    if (l2 && !l1) return l1;

    let head, node;

    if (l1.val > l2.val) {
        head = l2;
        l2 = l2.next;
    } else {
        head = l1;
        l1 = l1.next;
    }

    node = head;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2;
            node = node.next;
            l2 = l2.next;
        } else {
            node.next = l1;
            node = node.next;
            l1 = l1.next;
        }
    }
    if (l1) node.next = l1;
    if (l2) node.next = l2;

    return head;

}