function levelOrderTraversal (root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    let level = 0;

    while (queue){
        res.push([]);
        let times = queue.length;
        for (let i=0; i <times;i++){
            let node = queue.shift();
            res[level].push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level++;
    }

    return res;
}