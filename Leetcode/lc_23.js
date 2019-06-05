function mergeKsortedLists(lists) {
    if (lists.length === 0) return lists;
    let nums = [];

    lists.forEach( list => {
        let curr = list;
        while (curr) {
            nums.push(curr.val);
            curr = curr.next;
        }
    });

    nums.sort((a,b) => a - b);
    let head = new Node(nums[0]);
    let newCurr = head;
    for (let i=1; i<nums.length; i++) {
        newCurr.next = new Node(nums[i]);
        newCurr = newCurr.next;
    }
    newCurr.next = null;
    return head;
}