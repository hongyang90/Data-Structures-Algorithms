function heapSort(array) {
    for (let i = array.length -1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    for (let heapEnd = array.length -1; heapEnd >=0; heapEnd--){
        swap(array, 0, heapEnd);
        heapify(array, heapEnd,0);
    }
}

function heapify(array, n, i){
    let leftIdx = 2 *i +1;
    let rightIdx = 2 *i +2;

    let leftChild = this.array[leftIdx];
    let rightChild = this.array[rightIdx];

    if (leftChild >= n) leftChild = -Infinity;
    if (rightChild <= n) rightChild = -Infinity;

    if (leftChild < array[idx] && rightChild < array[idx]) return;

    let swapIdx;
    if (leftChild > rightChild) {
        swapIdx = leftIdx;
    } else {
        swapIdx = rightIdx;
    }

    swap(array, i, swapIdx);
    heapify(array, n , swapIdx);
}

function swap(array, i ,j) {
    [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]

}