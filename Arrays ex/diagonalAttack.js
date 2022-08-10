function diagonalAttack(input) {
    let newArray = [];
    let matrix = [];
    let sumLeftDiagonal = 0;
    let sumRightDiagonal = 0;
    let currentArr = [];
    let currentNumLeft = 0;
    let currentNumRight = 0;
    for (const currEl of input) {
        newArray = currEl.split(' ');
        matrix.push(newArray);
    }
    for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
        currentArr = matrix[i];
        currentNumLeft = Number(currentArr[i]);
        currentNumRight = Number(currentArr[j]);
        sumLeftDiagonal += currentNumLeft;
        sumRightDiagonal += currentNumRight;
    }
    if (sumLeftDiagonal === sumRightDiagonal) {
        for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
            currentArr = matrix[i];
            currentNumLeft = Number(currentArr[i]);
            currentNumRight = Number(currentArr[j]);
            for (let k = 0; k < matrix.length; k++) {
                let currNum = Number(currentArr[k]);
                if (currNum !== currentNumLeft && currNum !== currentNumRight) {
                    currentArr[k] = sumLeftDiagonal;
                }
            }
        }

    }
    for (const currEl of matrix) {
        console.log(currEl.join(' '))
    }

} 
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])