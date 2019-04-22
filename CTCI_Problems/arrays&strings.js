// Chapter 1 problems

// #1.1
// O(n) time O(1) memory
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
// O(n) time O(1) memory
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
// O(n) time O(1) memory
function URLStrify(string, length) {

  let totallen = string.length-1;
  let i = length;

  while (i >= 0) {
    if (string[i] === ' ') {
        string[totallen] = '0';
        string[totallen -1] = '2';
        string[totallen -2] = '%';
        totallen -=3;
        i--;
    } else {
        string[totallen] = string[i];
        totallen--;
        i--;
    }

  }

  return string;

}

console.log(URLStrify('Mr John Smith', 13)+'--');