// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null;

    let root = preorder[0];
    let rootNode = new TreeNode(root);

    let midIdx = inorder.indeOf(root);
    let leftIn = inorder.slice(0,midIdx);
    let rightIn = inorder.slice(midIdx+1);

    let leftPre = preorder.filter(ele => leftIn.includes(ele));
    let rightPre = preorder.filter(ele => rightIn.includes(ele));

    let leftresult =  buildTree(leftPre, leftIn);
    let rightresult = buildTree(rightPre, rightIn);

    rootNode.left = leftresult;
    rootNode.right = rightresult;

    return rootNode;

}
