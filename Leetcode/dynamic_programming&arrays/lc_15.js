function threeSum(nums, target) {
    if (nums.length < 3) return [];
    let res = [];
    for (let i=0; i< nums.length - 2;i++){
        let j = i+1;
        let k = nums.length - 1;
        if (i > 1 && nums[i] === nums[i-1]){
            continue;
        }

        while (j < k){
            let value = nums[i]+nums[j]+nums[k];
            if (value === target) {
                res.push([i,j,k]);
                j++;
                k--;
                while (nums[j]=== nums[j-1]) j++;
                while (nums[k]=== nums[j+1]) k--;
            } else if (value < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res; 
}