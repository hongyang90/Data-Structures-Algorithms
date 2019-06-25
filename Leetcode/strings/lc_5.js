function longestPalindromeSubstring (str){
    let longest = '';
    for(let i=0; i<str.length;i++){
        let longer;
        let odd = findPalindrome(i,i,str);
        let even = findPalindrome(i,i+1, str);
        if (odd.length > even.length) {
            longer =odd;
        } else {
            longer = even;
        }
        if (longest.length > longer.length) {
            longest = longer;
        } 
    }
    return longest;
}

function findPalindrome (i,j, str){
    while (i>=0 && j < str.length && str[i]===str[j]){
        i--;
        j++;
    }
    return str.slice(i+1,j);
}