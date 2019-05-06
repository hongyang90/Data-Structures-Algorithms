class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);
        let newIdx = this.array.length - 1;
        this.siftUp(newIdx);
    }

    siftUp(idx) {
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        let curr = this.array[idx];
        if (curr > this.array[parentIdx]) {
            [this.array[parentIdx], this.array[idx] ] = [this.array[idx], this.array[parentIdx] ];
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        
        let leftChild = this.array[leftIdx];
        let rightChild = this.array[rightIdx];

        if (leftChild === undefined) leftChild = -Infinity;
        if (rightChild === undefined) rightChild = -Infinity;

        if (leftChild < this.array[idx] && rightChild < this.array[idx]) return;

        let swapIdx;
        if (leftChild > rightChild) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }
        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]
        this.siftDown(swapIdx);
    }
}

module.exports = {
    MaxHeap
};