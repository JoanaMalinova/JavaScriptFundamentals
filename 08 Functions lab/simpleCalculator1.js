function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    switch (operator) {
        case 'multiply': result = multiply(numOne, numTwo); break;
        case 'divide': result = divide(numOne, numTwo); break;
        case 'add': result = add(numOne, numTwo); break;
        case 'subtract': result = subtract(numOne, numTwo); break;
    }
    return result;
}
