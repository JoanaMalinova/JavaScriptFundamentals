function replaceRepeatingChars(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let currLetter = input[i];
        let nextLetter = input[i + 1];
        if(currLetter === nextLetter){
            continue;
        }else{
            result += input[i];
        }       
    }
    console.log(result);
}
replaceRepeatingChars('qqqwerqwecccwd')