function addLists (head1, head2){
    let dummy = new Node(0);
    let curr = dummy;
    let carry = 0;

    while(head1 || head2 || carry){
        if (head1){
            carry += head1.val;
            head1 = head1.next;
        }
        if (head2){
            carry += head2.val;
            head2 =head2.next;
        }
        let node = new Node(carry %10);
        curr.next = node;
        curr = node;
        if (carry > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
    }

    return dummy.next;
}