function reverseList2 (node, m, n){
    if (!node) return null;
    let curr = node;
    let prev = null;

    while (m > 1){
        prev = curr;
        curr=curr.next;
        m--;
        n--;
    }
    let subHead = prev;
    let tail = curr;
    let temp = null;

    while (n >0){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr=temp;
        n--;
    }

    if (subHead){
        subHead.next = prev;
    } else {
        Headers.next = prev;
    }

    tail.next = curr;

    return subHead;




}