function inOrderArray(root) {
    if (!root) return [];

    let val = root.val;

   let left= inOrderArray(root.left);
   let right = inOrderArray(root.right);

   return left.concat(val, right)
}

function postOrderArray(root) {

}


module.exports = {
    inOrderArray,
    postOrderArray
};