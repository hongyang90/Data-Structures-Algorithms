function totalSumPaths (root, sum) {
    if (!root) return 0;
    let queue = [root];
    let paths = 0;

    while (queue.length) {
        let curr = queue.shift();
        if (curr){
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            paths += dfs(curr, 0, sum);

        }
    }
    return paths;
}

function dfs(node, carrySum, sum){
    if (!root) return 0;
    let count = 0;
    carrySum += root.val;
    if (carrySum === sum) count ++;
    count += dfs(root.left, carrySum, sum);
    count += dfs(root.right, carrySum, sum);
    return count;
}