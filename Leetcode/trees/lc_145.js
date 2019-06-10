function postOrderTraversal(root){
    if (!root) return [];
    let res = [];
    let stack = [root];

    while(stack.length){
        let node = stack.pop();
        res.push(node.val);
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return res.reverse();
}