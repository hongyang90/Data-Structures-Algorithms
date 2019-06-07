function addTwoNumbers (head1, head2) {
    if (!head1 && head2) return head2;
    if (head1 && !head2) return head1;
    let carry = 0;
    let dummy = new Node(0);
    let curr = dummy;

    while (head1 || head2 || carry){
        if (head1) {
            carry += head1.val;
            head1 = head1.next;
        }
        if (head2){
            carry += head2.val;
            head2 = head2.next;
        }
        curr.next = new Node(carry % 10);
        curr = curr.next;
        if (carry > 9){
            carry = 1;
        } else {
            carry = 0;
        }
    }
    curr.next = null;
    return dummy.next;
}