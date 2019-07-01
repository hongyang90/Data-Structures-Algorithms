function bstRightSide (root){
    if (!root) return [];
    let res = [];
    let queue = [root];

    while (queue.length){
        let count = queue.length;
        for (let i=0;i<count;i++){
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            if (i===count -1 ){
                res.push(node.val);
            }
        }
    }
    return res;
}