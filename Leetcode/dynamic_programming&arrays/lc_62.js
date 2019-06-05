function uniquePaths(m , n) {
 if (m === 1 || n === 1) return 1;

 let grid  = [];
    for(let i=0; i <n;i++){
        grid.push(new Array(m));
    }
    grid[0].fill(1);
    for (let j=1;j<n;j++){
        grid[j][0] = 1;
    }

    for (let k=1; k<n; k++){
        for (let a=1;a<n;a++){
            grid[k][a] = grid[k][a-1] + grid[k-1][a];
        }
    }

    return grid[n-1][m-1];
} 





