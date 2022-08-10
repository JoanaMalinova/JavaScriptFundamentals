function equalSums(input) {
   
    let index = 0;
    let sumsAreEqual = false;
    let inputL = input.length;
    for (let i = 0; i < inputL; i++) {
        let sumLeft = 0;
        let sumRight = 0;        
        if (inputL === 1) {
            console.log(0)
            return;
        }        
        for (let j = i + 1; j < inputL; j++) {
            sumRight += input[j];
        }
        for (let k = 0; k < i; k++) {
            sumLeft += input[k];
        }
        if (sumLeft === sumRight) {
            sumsAreEqual = true;
            index = i;
        }        

    }
    if (!sumsAreEqual) {
        console.log('no');
    } else {
        console.log(index);
    }

}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
