function partitionList (head, num){
    let before = new Node(0);
    let after = new Node(0);
    let beforehead = before;
    let afterhead = after;

    while (head){
        if (head.val < num) {
            before.next = head;
            before = head;
        } else {
            after.next = head;
            after = head;
        }
        head = head.next;
    }
    after.next = null;
    before.next = afterhead.next;

    return beforehead.next;


}