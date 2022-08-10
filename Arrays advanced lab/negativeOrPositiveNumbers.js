function negativeOrPositiveNumbers(array) {
    let newArray = [];
    for (const currentNumber of array) {
        if(Number(currentNumber) < 0){            
            newArray.unshift(currentNumber);
        }else {
            newArray.push(currentNumber);
        }        
    }
    console.log(newArray.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])