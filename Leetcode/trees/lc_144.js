function preOrderTraversal (root) {
    if (!root) return [];
    let res = [];
    let stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        res.push(curr.val);
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    return res;
}