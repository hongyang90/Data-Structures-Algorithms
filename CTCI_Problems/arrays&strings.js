// Chapter 1 problems

// #1.1
function isUnique (str) {
    let hash = {};

    for (let i=0; i < str.length; i++) {
        if (hash[str[i]]=== undefined) {
            hash[str[i]] = true;
        } else {
            return false;
        }
    }
    return true;
}

// console.log(isUnique('abc'));
// console.log(isUnique('aba'));

// #1.2



