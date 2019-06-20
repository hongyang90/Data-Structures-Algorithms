function generateParens( n) {
    let str = '';
    let res = [];
    addParens(n,n,str, res);
    return res;


}

function addParens(left, right, str, arr){
    if (left > right) return;
    if (!left && !right) arr.push(str);

    if (left) addParens(left-1, right, str+'(', arr);
    if (right) addParens(left, right-1, str+')',arr);
}