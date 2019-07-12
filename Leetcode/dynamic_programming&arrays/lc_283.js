function moveZeros (arr) {
    let idx = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] !== 0){
            arr[idx] = arr[i]
            idx++;
        }
    }

    for (let j=idx; j<arr.length; j++){
        arr[j] = 0;
        idx++;
    }
}