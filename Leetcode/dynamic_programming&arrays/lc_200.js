function numIslands(grid) {
    let count = 0;
    for (let i =0; i < grid.length; i++) {
        for (let j=0; j < grid[i].length; j++){
            if (grid[i][j] === '1'){
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}

function dfs(grid, i , j){
    if (i < 0 || i > grid.length -1) return;
    if (j < 0 || j > grid[i].length -1) return;

    if (grid[i][j] === '1'){
        grid[i][j] ='0';

        dfs(grid, i-1,j);
        dfs(grid, i+1,j);
        dfs(grid, i,j-1);
        dfs(grid, i,j+1);
    }

}

