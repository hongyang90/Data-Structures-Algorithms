function CheckBalanced(root){
    if (!root) return true;
    let diff = Math.abs(treeHeight(root.left), treeHeight(root.right));

    return CheckBalanced(root.left) && CheckBalanced(root.right) && diff < 2;
}

function treeHeight(node){
    if (!node) return -1;

    return Math.max(treeHeight(node.left), treeHeight(node.right)) +1;
}

