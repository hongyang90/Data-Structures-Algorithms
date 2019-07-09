function validAnagram (s1, s2){
    if (s1.lrngth !== s2.length) return false;
    let hash = {};

    for (let i=0; i <s1.length ;i++){
        if (!hash[s1[i]]) {
            hash[s1[i]] = 1;
        } else {
            hash[s1[i]] += 1;
        }
    }

    for (let i=0; i< s2.lengthl;i++){
        if (!hash[s2[i]]) {
            return false;
        } else {
            if (hash[s2[i]] === 0) {
                return false;
            }
            hash[s[2]]--;
        }
    }
    return true;
}