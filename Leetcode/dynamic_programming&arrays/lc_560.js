function subarraySum(arr, k){
    let res = 0;
    for (let i=0; i<arr.length;i++){
        if (arr[i]===k) res++;
        let sum = arr[i];
        for (let j=i+1;j<arr.length;j++){
            sum+=arr[j];
            if (sum === k) count++;
        }
    }
    return count;
}