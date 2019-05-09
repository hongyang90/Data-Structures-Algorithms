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

// console.log(URLStrify('Mr John Smith', 13));

// #1.4
// O(n) time space is O(1) if you argue that there cant be more than 26 letters in the hash

function palindromePerm (string) {
    let hash = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            continue;
        } else if (hash[string[i].toLowerCase()] === undefined){
            hash[string[i].toLowerCase()] = 1;
        } else {
            hash[string[i].toLowerCase()] += 1;
        }
    }
    let values = Object.values(hash);

    let odds= 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 !== 0) {
            odds += 1;
        } 
        if (odds > 1) {
            return false;
        }
    }

    return true;

}

// console.log(palindromePerm('Tact Coa'));
// console.log(palindromePerm('Tact'));

// #1.5 

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    let longer;
    let shorter;
    if (str1.length >= str2.length) {
        longer = str1;
        shorter = str2;
    } else {
        longer = str2;
        shorter = str1;
    }
    let hash = {};

    for (let i=0; i<longer.length; i++) {
        if (hash[longer[i]] === undefined) {
            hash[longer[i]] = 1;
        } else {
            hash[longer[i]] += 1; 
        }
    }

    for (let j=0; j<shorter.length; j++) {
        if (hash[shorter[j]]) {
            hash[shorter[j]]--;
        }
    }

    let len = Object.values(hash).filter( ele => ele === 1).length;
    return len <= 1;
    

}

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bake'));

