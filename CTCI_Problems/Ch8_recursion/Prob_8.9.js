function generateParens (n){
    let res= [];
    let str = '';
    makeParens(n,n,str,res);
    return res;
}

function makeParens(left, right, str, res){
    if (left > right) return;
    if (!left && !right) res.push(str);

    makeParens(left-1,right, str+'(', res);
    makeParens(left, right-1, str+')', res);
}