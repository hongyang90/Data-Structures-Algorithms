function twoSum (root, target, set = new Set()){
    if (!root) return false;

    let queue =[root];
    while (queue.length){
        let val = queue.shift().val
        let curr = target - val;
        if (set.has(curr)){
            return true;
        } else {
            set.add(val);
        }
        if (!root.left) queue.push(root.left);
        if (!root.right) queue.push(root.right);

    }
    return false;
}