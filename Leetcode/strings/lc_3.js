function longestSubstring (str){
    let hash = {};
    let res = 0;
    let start = 0;
    for (let i=0; i<str.length;i++){
        if (str[i] in hash && hash[str[i]] >= start){
            start = i +1;
        }
        hash[str[i]] = i;
        res = Math.max(res, i-start+1);
    }
    return res;
}