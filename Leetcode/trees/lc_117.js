function assignNextPointer (root){
    if (!root) return null;
    let queue = [root];

    while (queue.length){
        let count = queue.length;
        for (let i=0; i<count;i++){
            let node = queue.shift();
            if (i === count -1){
                node.next = null;
            } else {
                node.next = queue[0];
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return root;
}