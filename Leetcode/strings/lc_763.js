function partitionList (string){
    let res = [];
    let index = {};
    for (let i=0; i <string.length; i++){
        index[string[i]] = i;
    }
    for (let i=0; i<string.length;i++){
        let currLen = index[string[i]]+1-i;
        let endIdx = index[string[i]];
        for (let j=i; j<endIdx;j++){
            if (index[string[j]] > endIdx){
                endIdx = index[string[i]];
                currLen = endIdx + 1 -i;
            }
        }
        res.push(currLen);
        i=endIdx;
    }
    return res;
}