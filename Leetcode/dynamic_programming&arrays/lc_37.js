function comboSum (nums, target) {
    let curr = [];
    let res = [];
    dfs(nums.sort((a,b) => a - b), target, 0, res, curr);
    return res;
}

function dfs (nums, target, idx, res, curr){
    if (target < 0) return;
    if (target === 0) res.push(curr);

    for (let i=idx; i<nums.length; i++){
        if (nums[i] > target){
            break;
        } else {
            dfs(nums, target - nums[i], i, res, curr.concat(nums[i]));
        }
    }
}