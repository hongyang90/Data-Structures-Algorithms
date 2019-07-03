function increasingThreeSequence (arr){
    if (arr.length < 3) return false;
    let smallest = Infinity;
    let mid = Infinity;

    for (let i=0; i<arr.length; i++){
        if (arr[i] > mid) {
            return true;
        } else if (arr[i] <= smallest){
            smallest = arr[i];
        } else if (arr[i] < mid){
            mid = arr[i];
        }
    }

    return false;
}