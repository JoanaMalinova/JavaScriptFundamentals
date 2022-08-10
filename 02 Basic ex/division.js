function division(num) {
    let num1 = 0;
    let numNotDivisible = false;
    if (num % 2 === 0) {
        if (num % 10 === 0) {
            num1 = 10;
        } else if (num % 7 === 0) {
            num1 = 7;
        } else if (num % 3 === 0) {
            num1 = 6;
        } else {
            num1 = 2;
        }
    } else if (num % 7 === 0) {
        num1 = 7;
    } else if (num % 3 === 0) {
        num1 = 3;
    } else {
        numNotDivisible = true;
    }
    if (numNotDivisible) {
        console.log('Not divisible')
    } else {
        console.log(`The number is divisible by ${num1}`)
    }
}
division(1643)