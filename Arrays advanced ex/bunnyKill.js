function bunnyKill(matrix) {
    let totalDamage = 0;
    let killCounter = 0;
    let bombTargets = matrix.pop();
    let bombCoordinates = bombTargets.split(' ');
    let leftMatrix = [];
    for (const element of matrix) {
        let array = element.split(' ');
        let arrayToPush = array.map(Number)
        leftMatrix.push(arrayToPush);
    }
    for (let i = 0; i < bombCoordinates.length; i++) {
        let target = bombCoordinates[i].split(',')
        let bombRow = Number(target[0]);
        let bombColumn = Number(target[1]);
        let currentRow = leftMatrix[bombRow];       
        let bombDamage = Number(currentRow[bombColumn]);        
        if (bombDamage !== 0) {
            killCounter++
        }
        totalDamage += bombDamage;     
        for (let k = bombRow - 1; k <= bombRow + 1; k++) {
            if (k < 0 || k > leftMatrix.length - 1) {
                continue;
            }
            let currentArr = leftMatrix[k];
            for (let j = bombColumn - 1; j <= bombColumn + 1; j++) {
                if (j < 0 || j > currentArr.length - 1) {
                    continue;
                }
                if (currentArr[j] - bombDamage <= 0) {
                    currentArr[j] = 0;
                } else {
                    currentArr[j] = currentArr[j] - bombDamage;
                }
                leftMatrix[k] = currentArr;
            }
        }
    }
    for (const array of leftMatrix) {
        for (const element of array) {
            totalDamage += element;
            if (element > 0) {
                killCounter++;
            }
        }
    }
    console.log(totalDamage)
    console.log(killCounter)
}
bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']


)