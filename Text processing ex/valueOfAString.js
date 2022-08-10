function valueOfAString(input) {
    let text = input[0];
    let lowerOrUpper = input[1];
    let result = 0;
    for (const letter of text) {
        let letterValue = letter.charCodeAt(0);
        if (lowerOrUpper === 'LOWERCASE') {
            if(letterValue >= 97 && letterValue <= 122){
                result += letterValue ;
            }
        }else {
            if(letterValue >= 65 && letterValue <= 90){
                result += letterValue ;
            }
        }
    }
    console.log(`The total sum is: ${result}`);
}
    valueOfAString(['AC/DC',
    'UPPERCASE']
     )