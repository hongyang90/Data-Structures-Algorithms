function addDigits (num){
    if (num < 10) return num;
    let digit = num % 10;
    let remain = Math.floor(num/10);

    let res = digit + remain;
    if (res < 10) {
        return res;
    } else {
        return addDigits(res);
    }
}