function inOrderTraversal (root) {
    let res = [];
    let stack = [];
    let curr = root;

    while (curr || stack) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;

    }
    return res;
}