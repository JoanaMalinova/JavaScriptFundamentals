function magicSum(input, sum) {
    for (let i = 0; i < input.length; i++) {
        let number1 = input[i]
        for (let j = i + 1; j < input.length; j++) {
            let number2 = input[j]
            if (number1 + number2 === sum) {
                console.log(number1 + ' ' + number2);
            }
        }
    }

}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    
    )