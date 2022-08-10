function dictionary(input) {
    let textBook = {};
    let wordsAndDefinitions = input.shift();
    let testedWords = input.shift().split(' | ');
    let dictinaryArr = wordsAndDefinitions.split(' | ');
    for (let currLine of dictinaryArr) {
        let [word, definition] = currLine.split(': ');
        if (!textBook[word]) {
            textBook[word] = [];
        }
        textBook[word].push(definition);
    }
    if (input[0] === 'Test') {
        for (let currWord of testedWords) {
            if (textBook.hasOwnProperty(currWord)) {
                console.log(currWord + ':');
                textBook[currWord].forEach(currDefinition => {
                    console.log('-' + currDefinition);
                });
            }
        }
    } else {
        let words = Object.keys(textBook);
        console.log(words.join(' '));
    }
}
dictionary(['programmer: an animal, which turns coffee into code | developer: a magician',
    'fish | domino',
    'Hand over'])