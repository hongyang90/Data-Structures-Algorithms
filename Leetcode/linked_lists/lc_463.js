function islandPerimeter(grid){
    let count = 0;
    for (let i =0; i<grid.length;i++){
        for (let j=0; j<grid[i].length;j++){
            if (grid[i][j] === 1 ){
                count += checkEdge(i,j,grid);
            }
        }
    }

    return count;
}

function checkEdge(i,j, grid){
    let count = 0;
    if (!grid[i-1] || grid[i-1][j] === 0) count++;
    if (!grid[i+1] || grid[i+1][j] === 0) count++;
    if (!grid[i][j-1] || grid[i][j-1] === 0) count++;
    if (!grid[i][j+1] || grid[i][j+1] === 0) count++;
    return count;
}