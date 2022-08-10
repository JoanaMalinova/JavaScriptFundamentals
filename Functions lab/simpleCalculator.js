function simpleCalculator(numOne, numTwo, operator) {
    let result = 0;
    function multiply(numOne,numTwo){
        return numOne * numTwo;
    }
    function divide(numOne,numTwo){
        return numOne / numTwo;
    }
    function add(numOne,numTwo){
        return numOne + numTwo;
    }
    function subtract(numOne,numTwo){
        return numOne - numTwo;
    }
    
    switch(operator){
        case 'multiply': result = multiply(numOne,numTwo); break;
        case 'divide' : result = divide(numOne,numTwo); break;
        case 'add' : result = add(numOne,numTwo); break;
        case 'subtract' : result = subtract(numOne,numTwo); break;
    }
    return result;
}



