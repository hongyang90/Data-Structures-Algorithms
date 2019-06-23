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

// console.log(sortedMerge([2,3,4,0,0], [2,6]));

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

function rotatedSearch (array, target){
    let minIdx = array.indexOf(Math.min(...array));
    let start;
    let end;
    if (array[minIdx] === target) return minIdx;
    if (target < array[0]) {
        start = minIdx;
        end = array.length;
    } else {
        start = 0;
        if (minIdx === 0) {
            end = array.length;
        } else {
            end = minIdx - 1;
            
        }
    }

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === array[mid]) return mid;
        if (target < array[mid]) {
            end = mid -1;
        } else {
            start =mid +1;
        }
    }

    return -1;

}

console.log(rotatedSearch([15,16,19,20,25,1,3,4,5,7,10,14], 5));