function containerWithMostWater(nums) {
    if (nums.length <= 1) return 0;
    let max = 0;
    let i = 0;
    let j= nums.length -1;

    while (i < j) {
        let currArea = (j-i) * Math.min(nums[i], nums[j]);
        if (currArea > max) max = currArea;
        if (nums[i] > nums[j]) {
            j--;
        } else {
            i++;
        }
    }

    return max;

}