function validateBST(root, min =-Infinity, max = Infinity){
    if (!root) return true;

    if (root.val > max || root.val < min) return false;

    return validateBST(root.left, min, root.val) && validateBST(root.right, root.val, max);
}