function spiralMatrix(grid){
    let res = [];
    let rowStart = 0;
    let rowEnd = grid.length-1;
    let colStart = 0;
    let colEnd = grid[0].length-1;

    while (rowStart < rowEnd && colStart < colEnd){
        for (let i=colStart; i<= colEnd;i++){
            res.push(grid[rowStart][i]);
        }
        rowStart++;
        for (let i=rowStart; i<= rowEnd;i++){
            res.push(grid[i][colEnd]);
        }
        colEnd--;
        if (rowStart <= rowEnd){
            for(let i=colEnd; i>= colStart;i--){
                res.push(grid[rowEnd][i]);
            }
        }
        rowEnd--;
        if (colStart <= colEnd){
            for (let i=rowEnd; i>=rowStart;i--){
                res.push(grid[i][colStart]);
            }
        }
        colStart++;
    }

    return res;
}