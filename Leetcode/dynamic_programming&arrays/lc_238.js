function maxProductExceptSelf(arr){
    let res = [1];
    for (let i = 0; i < arr.length -1;i++){
        res[i+1] = res[i] *arr[i];
    }
    let mult = 1;
    for (let j=arr.length-1; j>=0;j--){
        res[j] = res[j]*mult;
        mult = mult*arr[j];
    }
    return res;
}