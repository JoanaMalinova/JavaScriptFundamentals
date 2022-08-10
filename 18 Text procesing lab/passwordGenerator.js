function passwordGenerator(input) {
    let newWord = input[0] + input[1];
    let thirdWord = input[2];
    let result = '';
    let index = 0;
    for (let char of newWord ) {
        if (char === 'a' || char === 'u' || char === 'e' || char === 'i' || char === 'o') {
            let letter = thirdWord[index].toUpperCase();            
            result += letter;
            if( index === thirdWord.length - 1){
                index = 0;
            }else {
                index ++;
            }            
        }else{
            result += char;
        }
    }
    let resultInReverse = '';
    for (let i = result.length - 1; i >= 0 ; i--) {
        resultInReverse += result[i];
    }
    console.log(`Your generated password is ${resultInReverse}`)
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]
)