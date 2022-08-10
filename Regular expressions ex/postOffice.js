function postOffice(input) {
    let text = input.join('');
    let [firstPart, secondPart, thirdPart] = text.split('|');
    let firstPattern = /([#$%*&])(?<capitals>[A-Z]+)\1/g;
    let capitalLetters = firstPattern.exec(firstPart).groups['capitals'].split('');
    let letterValues = [];
    for (let currLetter of capitalLetters) {
        let currValue = currLetter.charCodeAt(0);
        letterValues.push(currValue);
    }
    let secondPattern = /(?<ascii>\d+):(?<length>\d{2})\D/g;
    let asciiObj = {};
    while ((matches = secondPattern.exec(secondPart)) !== null) {
        let asciiValue = matches.groups['ascii'];
        let wordLength = matches.groups['length'];
        letterValues.forEach(value => {
            if (value === Number(asciiValue)) {
                if( asciiObj[asciiValue]){
                    asciiObj[asciiValue].push(Number(wordLength)+ 1);
                }else{
                    asciiObj[asciiValue] = [];
                    asciiObj[asciiValue].push(Number(wordLength)+ 1);
                }              
             }
        });
    }
    let asciiEntries = Object.entries(asciiObj);
    let spacesPattern = /\s+/g;
    let words = thirdPart.split(spacesPattern);
    for (let currWord of words) {
        for (let [asciiValue, wordLength] of asciiEntries) {
            let valueOffirstLetter = currWord.charCodeAt(0);
            if (wordLength.includes(currWord.length) && Number(asciiValue) === valueOffirstLetter &&
                !currWord.includes(' ')) {
                console.log(currWord);
            }
        }
    }
}
postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd'])