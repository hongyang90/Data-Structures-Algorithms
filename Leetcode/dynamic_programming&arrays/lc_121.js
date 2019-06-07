function buyStock(nums) {
    if (!nums.length) return 0;
    let max = 0;
    let currMin = nums[0];

    for (let i=1; i<nums.length;i++){
        if (nums[i] - currMin > max) max = nums[i] - currMin;
        if (nums[i] < currMin) currMin = nums[i];
    }
    return max;
}