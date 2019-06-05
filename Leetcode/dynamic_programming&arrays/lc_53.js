function maxSubarray (nums) {
    let localMax, globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        localMax = Math.max(localMax, localMax + nums[i]);
        globalMax = Math.max(globalMax, localMax);
    }

    return globalMax;
}