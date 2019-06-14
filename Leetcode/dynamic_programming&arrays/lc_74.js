function search2D (matrix, target) {
    if (matrix.length === 0) return false;
    let i =0;
    let j = matrix[0].length - 1;

    while (i < matrix.length && j >=0){
        if (matrix[i][j] === target) {
            return true;
        } else if(matrix[i][j] > target){
            j--;
        } else {
            i++;
        }
    }

    return false;
}