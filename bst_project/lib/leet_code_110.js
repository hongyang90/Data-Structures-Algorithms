// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    if (!root) {
        return true;
    }

    let diff = Math.abs(treeHeight(root.left), treeHeight(root.right)) <= 1;


    return diff && isBalanced(right) && isBalanced(left);

}

function treeHeight(root) {
    if (!root) return -1;

    return Math.max(treeHeight(root.left)+1, treeHeight(root.right) + 1);
}