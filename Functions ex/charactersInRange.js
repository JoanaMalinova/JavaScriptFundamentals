function charactersInRange(char1, char2) {
    function toNumberConverter(char1, char2) {
        let number1 = char1.charCodeAt();
        let number2 = char2.charCodeAt();
        if (number1 > number2) {
            let temp = number2;
            number2 = number1;
            number1 = temp;
        }
        let numArr = [];
        numArr.push(number1, number2);
        return numArr;
    
    }
    let numArr = toNumberConverter(char1, char2);
    let charArr = [];
    let currentChar;
    for (let i = numArr[0] + 1; i < numArr[1]; i++) {
        currentChar = String.fromCharCode(i);
        charArr.push(currentChar);
    }
    console.log(charArr.join(' '));
}



charactersInRange('C',
'#'
)