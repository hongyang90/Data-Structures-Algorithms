function permutations (arr){
    if (!arr.length) return [];
    let res = [];

    for (let i = 0; i < arr.length;i++){
        let subresult = permutations(arr.slice(0,i).concat(arr.slice(i+1)));
        subresult.forEach(ele => {
            res.push(ele.unshift(arr[i]));
        });
    }
    return res;
}