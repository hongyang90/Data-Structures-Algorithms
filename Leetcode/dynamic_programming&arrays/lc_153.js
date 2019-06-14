function minInRotatedArray (arr) {
    let start = 0;
    let end = arr.length;
    while (start < end){
        if (arr[start]<arr[end]) return arr[start];
        let mid = Math.floor((start+end)/2);
        if (arr[mid] > arr[end]){
            start = mid +1;
        } else {
            end = mid -1;
        }
    }
    return arr[start];
}