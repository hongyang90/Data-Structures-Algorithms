function twoSum(array, target) {
    let hash = {};
    for (let i=0; i< array.length;i++){
        let value = target - array[i];
        if (value in hash) {
            return [ hash[value], i];
        } else {
            hash[value] = i;
        }
    }
}