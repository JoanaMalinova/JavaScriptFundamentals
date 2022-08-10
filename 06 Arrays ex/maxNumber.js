function maxNumber(input) {
    let topArray = [];
    let notTop = false;
    let arrayL = input.length;
    for (let i = 0; i < arrayL; i++) {
        let currentNumber = input[i];
        for (let j = i + 1; j < arrayL; j++) {
            let nextNumber = input[j]
            if (currentNumber <= nextNumber) {
                notTop = true;
                break;
            }
        }
        if (!notTop) {
            topArray.push(currentNumber);
        }
        notTop = false;
    }
    console.log(topArray.join(' '));

}
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
