function reorderList (head) {
    if (!head || !head.next) return head;
    let arr = [];
    let curr = head;
    while (head){
        arr.push(head);
        head = head.next;
    }
    let j;
    for (let i=0; i < Math.floor(arr.length/2); i++){
        j = arr.length - 1 - i;
        let temp  = curr.next;
        curr.next = arr[j];
        curr.next.next = temp;
        curr = temp;
    }
    curr.next = null;
    return arr[0];
}