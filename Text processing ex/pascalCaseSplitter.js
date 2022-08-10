function pascalCaseSplitter(input) {
    let resultArr = [];
    let index = 0;
    for (let i = 1; i < input.length; i++) {
        let letter = input[i];
        if ((letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) && i !== input.length - 1) {
            let currWord = input.substring(index, i);
            resultArr.push(currWord);
            index = i;
        } else if (i === input.length - 1 && (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)) {
            let currWord = input.substring(index, i);
            let lastWord = input.substring(i, input.length);
            resultArr.push(currWord, lastWord);
        } else if (i === input.length - 1) {
            let currWord = input.substring(index, input.length);
            resultArr.push(currWord);
        }
    }
    console.log(resultArr.join(', '));
}
pascalCaseSplitter('YouAndI');