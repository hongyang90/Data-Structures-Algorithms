function removeKdigits( str, k){
    if (str.length === k) return '0';
    let nums = str.split('').map(ele => {
        return parseInt(ele);
    });

    while (k>0) {
        for (let i=0; i<str.length;i++){
            if (i === str.length - 1){
                nums.pop();
            }
            if (nums[i] > nums[i+1]){
                nums.splice(i,1);
            }
        }
    }
    while (nums[0] === 0 && nums.length > 1){
        nums.shift();
    }

    return str;
}


// iterate from beginning while k is less than zero 
// increment i while next is greater than i +1
// reset i if the item removed is the last item