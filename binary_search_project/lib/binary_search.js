function binarySearch(array, target) {
    if (array.length === 0) return false;

    let mid = Math.floor(array.length/2);
    let left = array.slice(0,mid);
    let right = array.slice(mid+1);

    if (array[mid] === target) {
        return true;
    } else if (array[mid] > target) {
        return  binarySearch(left,target);
    } else {
        let res = binarySearch(right, target);
        return res === false ? false : true;
    }

}

function binarySearchIndex(array, target) {
    let start = 0;
    let endidx = array.length;

    while (start <= endidx) {
        let mid = Math.floor((start + endidx)/2);
        if (array[mid] === target) return mid;
        if (array[mid] > target) {
            endidx = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}


module.exports = {
    binarySearch,
    binarySearchIndex
};