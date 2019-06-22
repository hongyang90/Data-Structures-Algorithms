function maxIslandArea (grid){
    let count = 0;

    for(let i=0; i< grid.length; i++){
        for (let j=0; j<grid[i].length; j++){
            count += dfs(i,j,grid);
        }
    }
    return count;
}

function dfs(i,j,grid){
    if (i <0 || i >= grid.length) return 0;
    if (j <0 || j >= grid[i].length) return 0;
    let count = 0;
    if (grid[i][j] === 1){
        grid[i][j] = 0;
        count++;
        count += dfs(i-1,j,grid);
        count += dfs(i+1,j,grid);
        count += dfs(i,j-1,grid);
        count += dfs(i,j+1,grid);

    }
    return count;
}