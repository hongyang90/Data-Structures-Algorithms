function removeNthNode (head, n) {
    let dummy = new Node(0);
    dummy.next = head;
    let p1 = dummy;
    let p2 =  dummy;
    for (let i=o; i<= n;i++){
        p2 = p2.next;
    }

    while(p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p1.next.next;
    return dummy.next;
}