function twoSum (root, target){
    if (!root) return false;
    if (root.val === target) {
        return true;
    } else if (root.val > target){
        return twoSum(root.left, target);
    } else {
        return twoSum(root.right, target)
    }
}