function magigMatrices1(input) {
    let linesAreEqual = false;
    let columnesAreEqual = false;
    let isMagic = false;
    let array = input[0];
    let lastsum = 0;
    
    for (let i = 0; i < input.length; i++) {
        if (i === input.length - 1) {
            linesAreEqual = true;
        }
        let sum = 0;
        for (const number of input[i]) {
            sum += number;
        }
        if (lastsum === sum) {
            continue;
        } else if (i !== 0 && lastsum !== sum) {
            break;
        }
        lastsum = sum;
    }
    for (let i = 0; i < array.length; i++) {
        let sumColumnes = 0;
        let nextSum = 0;
        if (i === array.length - 1) {
            columnesAreEqual = true;
        }
        for (let j = 0; j < input.length; j++) {
            let currentArray = input[j];
            sumColumnes += currentArray[i];
            nextSum += currentArray[i + 1];
        }      
        if (sumColumnes === nextSum) {
            continue;
        } else {
            break;
        }
        
    }
    if (linesAreEqual && columnesAreEqual) {
        isMagic = true;
    }
    console.log(isMagic);

}
magigMatrices1([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )
   magigMatrices1([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )
   magigMatrices1([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )