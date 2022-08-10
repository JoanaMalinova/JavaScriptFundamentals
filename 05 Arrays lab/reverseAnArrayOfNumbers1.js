function reverseAnArrayOfNumbers(number, input) {
    let newArr = [];
    let counter = 0;
    for (let i = number - 1; i >= 0; i--) {
         newArr[counter] = input[i];
         counter ++ ;

    }
    console.log(newArr.join(' '));


}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])