function trapRainWater (arr){
    let max = 0;
    let left = 0;
    let right = arr.length -1;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (arr[left]<arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                max += leftMax = arr[left];
            }
            left++;
        } else {
            if (arr[right]>= rightMax) {
                rightMax = arr[right];
            } else {
                max += rightMax - arr[right];
            }
            right--;
        }
    }
    return max;
}