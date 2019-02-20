function diagonal(matrix) {
    let mainSum = 0, secondarySum = 0;

    for (let r = 0; r < matrix.length; r++) {
        mainSum += matrix[r][r];
        secondarySum += matrix[r][matrix.length-r-1];
    }

    console.log(mainSum + ' ' + secondarySum);
}