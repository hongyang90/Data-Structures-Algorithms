function insertIntoBST (root, val){
    if (!root) return new Node(val);

    if (root.val < val){
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val);
    }

    return root;
}