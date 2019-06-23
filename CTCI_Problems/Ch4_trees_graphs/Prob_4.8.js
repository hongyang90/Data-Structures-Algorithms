function commonAncestor(root, node1, node2){
    if (!root || root === node1 || root === node2) return root;

    let left = commonAncestor(root.left, node1, node2);
    let right = commonAncestor(root.right, node1, node2);

    if (!left) return right;
    if (!right) return left;
    return root;
}