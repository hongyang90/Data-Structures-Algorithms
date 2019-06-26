function checkTemp (arr){
    let res = new Array(arr.length).fill(0);
    let stack = [arr[arr.length - 1]];

    for (let i=arr.length-2;i >=0; i--){
        let top = stack[stack.length-1];
        while (arr[i] >= arr[top] && stack.length){
            stack.pop();
        }
        if (stack.length){
            res[i] = stack[stack.length-1] - i;
        }
        stack.push(i);
    }

    return res;
}