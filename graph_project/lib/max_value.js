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

// recursive 

function maxValue(node, visited= new Set()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    let neighborMax = node.neighbors.map( node => maxValue(node, visited))
    return Math.max(node.val, ...neighborMax);
}

module.exports = {
    maxValue
};