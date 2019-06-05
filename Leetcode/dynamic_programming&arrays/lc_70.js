function stairs (n, memo = {}) {
    if (n === 1) return 1;
    if (n===2) return 2;
    if (n in memo) return memo[n];

    return memo[n] = stairs(n-1, memo) + stairs( n-2, memo);
}