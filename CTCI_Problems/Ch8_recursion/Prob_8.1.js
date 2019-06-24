function numSteps (n, memo ={}){
    if (n in memo) return memo[n];
    if (n === 0) return 1;
    if (n === 1 ) return 2;
    if (n === 2 ) return 3;
    
    return memo[n] = numSteps(n-1, memo) + numSteps(n-2, memo) + numSteps(n-3, memo);
}

console.log(numSteps(4))