function checkSubtree(root1, root2){

    let queue = [root1];
    while(queue){
        let curr = queue.shift();
        if (curr.val === root2.val){
            let res = checkSameTree(curr, root2);
            if(res) return res;
        } 
        if (curr.right) queue.push(curr.right);
        if (curr.left) queue.push(curr.left);
    }
    return false;

}


function checkSameTree(root1, root2){
    if (!root1 && !root2) return true;
    if (!root1 && root2 || root1 && !root2 || root1.val !== root2.val) return false;

    return checkSameTree(root1.left, root2.left) && checkSameTree(root1.right, root2.right);
}