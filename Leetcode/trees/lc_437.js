function pathSum3 (root, val){
    let res = 0;

    let queue = [root];
    while (queue.length){
        let curr = queue.shift();
        if (curr){
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            res += dfs(curr, 0, val);
        }
    }
    return res;
}

function dfs(node, carrySum, sum){
    if (!node) return 0;
    carrySum += node.val;
    let count = 0;

    if (carrySum === sum) count++;
    count += dfs(node.left, carrySum, sum);
    count += dfs(node.right, carrySum, sum);

    return count;
}