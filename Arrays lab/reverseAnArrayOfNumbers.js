function reverseAnArrayOfNumbers(number, input) {
    let newArr = [];
    for (let i = number - 1; i >= 0; i--) {
        newArr.push(input[i])

    }
    console.log(newArr.join(' '));


}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])