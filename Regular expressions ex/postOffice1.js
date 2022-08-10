function postOffice1(input) {
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
    let asciiMap = new Map();
    while ((matches = secondPattern.exec(secondPart)) !== null) {
        let asciiValue = Number(matches.groups['ascii']);
        let wordLength = Number(matches.groups['length']);
        letterValues.forEach(value => {
            if (value === asciiValue) {
                if (asciiMap.has(asciiValue)) {
                    let array = asciiMap.get(asciiValue);
                    array.push(wordLength + 1);
                    asciiMap.set(asciiValue, array);
                } else {
                    let array = [wordLength + 1];
                    asciiMap.set(asciiValue, array);
                }
            }
        });
    }
    let asciiEntries = Array.from(asciiMap.entries());
    let spacesPattern = /\s+/g;
    let words = thirdPart.split(spacesPattern);
    for (let currWord of words) {
        let valueOfFirstLetter = currWord.charCodeAt(0);
        for (let current of asciiEntries) {
            let [asciiValue, wordLength] = current;
            if (wordLength.includes(currWord.length) && asciiValue === valueOfFirstLetter) {
                console.log(currWord);
                let index = asciiEntries.indexOf(current);
                let indexOfLength = wordLength.indexOf(currWord.length);
                if (wordLength > 1) {
                    let newArr = wordLength.splice(indexOfLength, 1);
                    let newCurr = [asciiValue, newArr];
                    asciiEntries.splice(index, 1, newCurr);
                } else {
                    asciiEntries.splice(index, 1);
                }

            }
        }
    }
}
postOffice1(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|Argo Or The Parahaos'])