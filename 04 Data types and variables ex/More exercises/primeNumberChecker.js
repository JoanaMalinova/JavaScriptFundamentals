function primeNumberChecker(number) {
    if ((number % 2 === 0 && number !== 2) || (number % 3 === 0 && number !== 3)
        || (number % 5 === 0 && number !== 5) || (number % 7 === 0 && number !== 7)) {
        console.log('false');
    } else {
        console.log('true');
    }

}
primeNumberChecker(81)