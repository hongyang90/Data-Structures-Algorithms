function mergeIntervals(arr) {
    if (!arr.length) return [];
    intervals = intervals.sort((a,b) => a[0]-b[0]);
    let res = [arr[0]];

    for (let i=1; i<arr.length; i++ ){
        let last = res[res.length-1];
        let curr = arr[i];
        if (curr[1] >= last[1] && curr[0] <= last[1]) {
            res[res.length-1][1] = curr[1];
        } else {
            res.push(curr);
        }
    }
    return res;
}