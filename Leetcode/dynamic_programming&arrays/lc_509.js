function fibs (n) {
    let nums = [1,1];
    for (let i = 3; i <= n;i++){
        let value = nums[0]+nums[1];
        nums[0] = nums[1];
        nums[1] = value;
    }
    return nums[nums.length - 1];
}