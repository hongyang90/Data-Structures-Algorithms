function MinimalTree (array){
    if (array.length === 0) return null;
    let mid = Math.floor(array.length/2);
    let root = new Node(array[mid]);

    root.left = MinimalTree(array.slice(0,mid));
    root.right = MinimalTree(array.slice(mid+1));
    return root;
}