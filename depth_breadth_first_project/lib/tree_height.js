function treeHeight(root) {
    if (!root) return -1;

   return  Math.max(treeHeight(root.left),treeHeight(root.max)) + 1;
  
}


module.exports = {
    treeHeight
};