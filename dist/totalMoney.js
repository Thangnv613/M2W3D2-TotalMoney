"use strict";
let matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
];
let totalMoney = (matrix) => {
    let total = 0;
    const col = matrix[0].length;
    const matrixLength = matrix.length;
    for (let j = 0; j < col; j++) {
        for (let i = 0; i < matrixLength; i++) {
            if (matrix[i - 1][j] === 0) {
                break;
            }
            else
                total += matrix[i][j];
        }
    }
    return total;
};
console.log(totalMoney(matrix));
