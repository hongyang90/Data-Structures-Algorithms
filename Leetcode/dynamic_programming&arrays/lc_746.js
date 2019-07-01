function minCostStairs (nums) {
    for (let i=2;i<nums.length;i++){
        nums[i] = Math.min(nums[i-1], nums[i-2]);
    }
    return Math.min(nums[nums.length-1], nums[num.length-2]);
}