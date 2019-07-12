function combinationSum(arr, tar) {
    let res = [];
    dfs(arr.sort((a,b)=> a-b), tar, 0, [], res);
    return res;
}

function dfs (arr, tar, idx, curr, res){
    if (tar < 0) return;
    if (tar === 0) res.push(curr);

    for(let i=idx; i<arr.length;i++){
        if (arr[i] > target){
            break;
        }
        dfs(arr, tar - arr[i], i, curr.concat([arr[i]]), res)
    }

}