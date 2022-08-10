function ascciiSumator(input) {
    let sum = 0;
    let startCharValue = 0;
    let endCharValue = 0;
    if(input[0].charCodeAt(0) > input[1].charCodeAt(0)){
        startCharValue = input[1].charCodeAt(0);
        endCharValue = input[0].charCodeAt(0);
    }else {
        startCharValue = input[0].charCodeAt(0);
        endCharValue = input[1].charCodeAt(0);
    }   

    let text = input[2];
    for (let currChar of text) {
        let currCharValue = currChar.charCodeAt(0)
        if(currCharValue > startCharValue && currCharValue < endCharValue){
            sum += currCharValue;
        }
    }
    console.log(sum);
}
ascciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
)