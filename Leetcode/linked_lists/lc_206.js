function reverseList (head) {
    if (!head || !head.next) return head;
    let curr = head;
    let prev = null;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

function reverseList(head) {
    if (!head || !head.next) return head;
    let res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
}