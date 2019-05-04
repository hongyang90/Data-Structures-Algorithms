function maxValue(node, visited=new Set()) {
    let queue = [node];
    let max = node.val;
    while (queue.length) {
        let curr = queue.shift();
        if (curr.val > max ) {
            max = curr.val;
        }
        visited.add(curr);
        curr.neighbors.forEach( node => {
            if (!visited.has(node)) {
                queue.push(node);
            }
        });
    }
    return max;
}

module.exports = {
    maxValue
};