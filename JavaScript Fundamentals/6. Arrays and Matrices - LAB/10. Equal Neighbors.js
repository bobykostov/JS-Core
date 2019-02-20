function equal(matrix) {
    let neighbours = 0;

    for (let r = 0; r < matrix.length-1; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === matrix[r+1][c])
                neighbours++;
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length-1; c++) {
            if (matrix[r][c] === matrix[r][c+1])
                neighbours++;
        }
    }

    console.log(neighbours);
}