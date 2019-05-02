// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length/2);
    let root = new TreeNode(nums[mid]);

    let lefttree = sortedArrayToBST(nums.slice(0,mid));
    let righttree = sortedArrayToBST(nums.slice(mid+1));

    root.left = lefttree;
    root.right = righttree;
    return root;
}