function inOrderArray(root) {
    if (!root) return [];

    let val = root.val;

   let left= inOrderArray(root.left);
   let right = inOrderArray(root.right);

   return left.concat(val, right);
}

function postOrderArray(root) {
    if (!root) return [];
    let val = root.val;
    let left = postOrderArray(root.left);
    let right = postOrderArray(root.right);

    return left.concat(right, val);
}


module.exports = {
    inOrderArray,
    postOrderArray
};