function searchinBST (root, val){
    if (!root) return null;
    if (root.val === val){
        return root;
    } else if (root.val > val){
        return searchinBST(root.left, val);
    } else {
        return searchinBST(root.right, val);
    }
}