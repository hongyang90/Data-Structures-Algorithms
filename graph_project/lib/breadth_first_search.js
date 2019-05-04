function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let queue = [startingNode];
    while (queue.length){
        let curr = queue.shift();
        if (curr.val === targetVal) return curr;
        visited.add(curr);
        curr.neighbors.forEach( node => {
            if (!visited.has(node)) {
                queue.push(node);
            }
        });
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};