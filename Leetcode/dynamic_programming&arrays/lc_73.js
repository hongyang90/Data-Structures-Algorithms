function setZeros (grid){
    let rowHasZero = false;
    let colHasZero = false;

    for (let i =0; i< grid.length;i++){
        if (grid[i][0] === 0){
            colHasZero = true;
            break;
        }
    }

    for (let i = 0; i < grid[0].length; i++) {
        if (grid[0][i] === 0) {
            rowHasZero = true;
            break;
        }
    }

    for (let i=1;i<grid.length;i++){
        for (let j=1;j<grid[i].length;j++){
            if (grid[i][j]===0){
                grid[0][j] =0;
                grid[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[i].length; j++) {
            if (grid[i][0] === 0 || grid[0][j]===0) {
                grid[i][j] = 0;
            }
        }
    }

    if (colHasZero){
        for (let i=0; i<grid.length;i++){
            grid[i][0] = 0;
        }
    }

    if (rowHasZero){
        for (let i=0; i< grid[0].length;i++){
            grid[0][i] = 0;
        }
    }

}