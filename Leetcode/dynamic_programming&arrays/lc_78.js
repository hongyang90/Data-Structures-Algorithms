function subsets (arr) {
    if (arr.length === 0) return [[]];
    let answer = [];
    let last = arr.pop();
    let res = subsets(arr);
    res.forEach(ele => {
        answer.push(ele.concat(last));
    });
    return answer; 
}