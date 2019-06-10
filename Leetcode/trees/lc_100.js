function sameTree (root1, root2) {
    if (!root1 && root2 || root1 && !root2) return false;
    if (!root1 && !root2) return true;
    if (root1.val !== root2.val) return false;

    return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right);
}