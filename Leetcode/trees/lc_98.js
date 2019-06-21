function validateBST (root, max = Infinity, min = -Infinity){
    if (!root) return true;
    if (!(min < root.val && root.val < max )) return false;

    let left = validateBST(root.left,root.val, min);
    let right = validateBST(root.right, max, root.val);

    return left && right;

}