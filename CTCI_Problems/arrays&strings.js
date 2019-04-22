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

function isPermutation (string, substr) {
    if (string.length !== substr.length) return false;
    let hash = {};

    for (let i = 0; i < string.length; i++) {
        if (hash[string[i]] === undefined) {
            hash[string[i]] = 1;
        } else {
            hash[string[i]] += 1;
        }
    }

    console.log(hash)

    for (let j = 0; j < substr.length; j++) {
        if (hash[substr[j]] === undefined || hash[substr[j]] === 0) {
            return false;
        } else {
            hash[substr[j]] -= 1;
        }
    }

    return true;
}
// console.log(isPermutation('aba', 'baa'));
// console.log(isPermutation('abc', 'daa'));
// console.log(isPermutation('abc', 'da'));

// #1.3


