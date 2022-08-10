function lettersChangeNumbers(input) {
    let array = input.split(' ');
    let filtered = array.filter((a) => 
        a.length > 1
    )
    let result = 0;
    for (let word of filtered) {
        let fixed = word.trim();
        let firstLetter = fixed[0];
        let lastLetter = fixed[fixed.length - 1];
        let number = fixed.substring(1, fixed.length - 1);
        let letterValueFirst = firstLetter.charCodeAt(0);
        let letterValueLast = lastLetter.charCodeAt(0);
        if(firstLetter.toLowerCase() === firstLetter){
            letterValueFirst -= 96;
            result += letterValueFirst * number;
        }else {
            letterValueFirst -= 64;
            result += number / letterValueFirst;
        }
        if(lastLetter.toLowerCase() === lastLetter){
            letterValueLast -= 96;
            result += letterValueLast;
        }else{
            letterValueLast -= 64;
            result -= letterValueLast;
        }
    }
    console.log(result.toFixed(2));
}
lettersChangeNumbers('a1A')