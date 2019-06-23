function reversePartList (head, m, n){
    if (!head) return null;
    let curr = head;
    let prev = null;
    while(m >1){
        prev = curr;
        curr = curr.next;
        m--;
        n--;
    }
    let subhead = prev;
    let tail = curr;
    let temp = null;

    while (n>0){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        n--;
    }
    if (subhead){
        subhead.next = prev;
    } else {
        head = prev;
    }
    tail.next = curr;
    return head;
}