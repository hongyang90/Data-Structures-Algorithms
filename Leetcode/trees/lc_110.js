function balancedBST (root) {
    if (!root) return true;
    let diff  = Math.abs(treeHeight(root.left), treeHeight(root.right)) <=1;
    return diff && balancedBST(root.right) && balancedBST(root.left);
}

function treeHeight(node){
    if (!node) return -1;
    return Math.max(treeHeight(node.left), treeHeight(node.right)) +1;
}