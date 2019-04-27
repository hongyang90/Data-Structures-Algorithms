function breadthFirstArray(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let queue = [root];

    while(queue.length !== 0) {
        if (queue[0].left) queue.push(queue[0].left);
        if (queue[0].right) queue.push(queue[0].right);
        result.push(queue.shift().val);
    }
    return result;

}

module.exports = {
    breadthFirstArray
};