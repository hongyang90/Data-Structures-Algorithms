function countingSort(arr, max) {
    let result = [];
    let counter = new Array(max+1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]] += 1;
    }

    for (let j = 0; j < counter.length; j++) {
        for (let k=0; k < counter[j];k++){
            result.push(j);
        }
    }

    return result;
}


module.exports = {
    countingSort
};