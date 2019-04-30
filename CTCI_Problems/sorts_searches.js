// Problem 10.1

function sortedMerge (arr1, arr2) {
    let end = arr1.length - 1;
    let start1 = end - arr2.length;
    let start2 = arr2.length -1;
    
    while (start2 >= 0) {
        if (arr1[start1] > arr2[start2]) {
            arr1[end] = arr1[start1];
            start1--;
            
        } else {
            arr1[end] = arr2[start2];
            start2--;
        }
        end--;
    }
    return arr1;
}

console.log(sortedMerge([2,3,4,0,0], [2,6]));

// Problem 10.2

function groupAnagrams (array) {
    let hash = {};

    for (let i = 0; i < array.length; i++) {
        let sorted = array[i].split('').sort().jion('');
        if (hash[sorted] === undefined) {
            hash[sorted] = [array[i]];
        } else {
            hash[sorted] = [array[i]];
            
        }
    }
    return Object.values(hash);
}


// Problem 10.3

